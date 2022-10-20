
$(window).load(function(){  
    // this delay is here because the image 
	// takes a while to load in Ghana
	$("#message").html('<h2>Loading, please wait...</h2><img src="img/loadbar.gif"/>');
    $("#message").fadeOut("slow");
});
$(document).ready(function() {
	var type; setGameType();			// game type, play against
	var difficulty; setDifficulty();  	// AI difficulty level
	var turn = false;			// initialize to player 2, will be reversed
	var p1End = 5; 				// player 1's holes end at i = 5
	var p2End = 11; 			// player 2's holes end at i = 11
	var p1Score = 0;			// set score 0
	var p2Score = 0;			// set score 0
	var gameover = false; 		// game is not over (yet)
	var board = new Array(12);	// the board array
	var ms = 150;				// milliseconds
	var speed = ms;				// milliseconds duration between moves (animation)
	var timer;					// timer for the animation
	
	initialize();
	
	$("#newgame").click(function() { 
		clearTimeout(timer);	// stop an ongoing move in its tracks!
		turn = false;			// this will be reversed in setTurn()
		p1End = 5; 				// default: player 1's holes end at i = 5
		p2End = 11; 			// default: player 2's holes end at i = 11
		initialize(); 			// initialize the board
		setGameType();			// set game type
		setDifficulty();		// set AI difficulty
	});

	// user clicks message button
	$("#message").click(function(){
		$("#message").fadeOut("fast");
	});
	
	// user checks new difficulty level
	$("input[name=diff]").click(function(){
		$("#newgame").click();
		setDifficulty();
	});
	
	// user chooses to play against another person
	$("#gameTypeHuman").click(function() { 
		$("#newgame").click(); 
		$("#difficulty").slideUp();
	});
	
	// user plays against computer
	$("#gameTypeComputer").click(function() { 
		$("#newgame").click(); 
		$("#difficulty").slideDown();
		setDifficulty();
	});

	function displayMessage(message, time = 500) {		
		// only display if element is already hidden
		if ($("#message").is(":hidden")) {
			$("#message").html(`<h2>${message}</h2>`);
			$("#message").fadeIn("fast").delay(time).fadeOut();	
		}
	}
	
	function setDifficulty() {
		difficulty = Math.floor($("input[name=diff]:checked").val());
	}
	
	function setGameType() {
		type = $("input[name=gameType]:checked").val();
	}
	
	// when a hole is clicked...
	$(".button").click(function() {
		if( gameover ) { return; }
		var number = Math.floor($(this).attr("id").split("btn")[1]);
		if( turn && number > p1End ) {
			displayMessage("Invalid Move!");
			return;
		} else if( !turn && number <= p1End ) { 
			displayMessage("Invalid Move!");
			return;
		}
		move(number);
	});
	
	function move( i ) {
		if( board[i] == 0 ) { return false; } 	// invalid move
		
		// disable all buttons until turn is over...
		disableButtons();
		
		var hand = board[i];					// pick up the pebbles 
		board[i] = 0;							// hole has no pebbles 
		
		timer = setTimeout(function() { 
			refresh(i);
			doMove(i,hand); 					// initiate move 
		}, speed);	
		
		return true;
	}
	
	function doMove( i, hand ) {
		if( hand > 0 ) { 				// end turn if hand has no pebbles
			//speed = ms;				// reset speed
			i = (i + 1)%board.length; 	// proceed to next hole, iterate board
			hand--; 					// take 1 from hand
			board[ i ]++; 				// place in hole
			refresh(i);					// show the new amount in the hole
			var curr = board[ i ]; 		// examine current hole
			if( curr == 4 ) { 			// take the pile
				//speed = speed + 50;	// slow down kakra so we can SEE the pile
				refresh(i);				// show the 4 in the hole before taking it
				board[ i ] = 0;
				if( hand == 0 ) {		// player ended here, take pile
					capturePile();
				} else {				// award points based on side
					awardPoints( i );
				}
			} else if ( curr > 1 && hand == 0 ) { 	// continue playing
				hand = curr;						// grab pebbles
				board[ i ] = 0;						// hole is empty
			}
			timer = setTimeout(function() { 		// animate motion... only do moves every [speed] ms
				refresh(i);
				doMove( i, hand ); 					// recursive call back to doMove()
			}, speed);	
		} else {
			if( boardCount() == 4 ) { 					// detect end-game
				capturePile();							// this is a de-facto capture
				gameover = true;						// flag game as over
				processWin();							// display the winner, if exists
			}
			else if ( otherPlayersPebbles() > 0 ) {		// other player must have a move
				setTurn();								// switch turns
			}
			
			/*** Game Type (AI / Human) Logic ***/
			
			if( !againstComputer() ) {					// HUMAN MOVE!
				enableButtons();						// continue turn, re-enable board
			} 
			else {										// COMPUTER MOVE!
				if( !turn ) {							// COMPUTER: Player 2's turn
					doDelayedComputerMove();				
				} else {
					enableButtons();					// enable buttons
				}
			}
		}
	}
	
	/********* ARTIFICIAL INTELLIGENCE **********/
	/********* ARTIFICIAL INTELLIGENCE **********/
	/********* ARTIFICIAL INTELLIGENCE **********/
	
	function computerMove() {
		switch (difficulty) {
			case 0: computerMoveEasy(); break;
			case 1: computerMoveMedium(); break;
			case 2: computerMoveMediumHard(); break;
			case 3: computerMoveHard(); break;
			default: computerMoveEasy();
		}
	}
	
	// SIMPLE AI -- respond randomly
	function computerMoveEasy() {
		// generate num on Player 2's side
		var move = 0;
		while( move <= p1End || board[move] == 0 ) {
			move = Math.floor((Math.random() * p2End) + 1);
		}
		chooseMove( move );
	}
	
	/* 	MEDIUM AI -- respond choosing whatever move gets points: 
		impatient / greedy algorithm
	*/
	function computerMoveMedium() {
		var i, points, ours, theirs;
		for( i = p1End + 1; i <= p2End; i++ ) {		// all possible moves for P2
			points = testMove( i, copyBoard() );	// test move
			ours = points[0];
			if( ours > 0 ) {						// if move yields any points, break
				break;
			}
		}
		if( ours > 0 ) {							// opt for move that wins points
			chooseMove( i );
		} else {
			computerMoveEasy();						// no advantage, use random move
		}
	}
	
	/* 	MEDIUM-HARD AI -- respond choosing whatever move gets MOST points: 
		greedy algorithm
	*/
	function computerMoveMediumHard() {
		var i, points, ours, theirs; 
		var max = 0; var maxi = 0;
		for( i = p1End + 1; i <= p2End; i++ ) {		// all possible moves for P2
			points = testMove( i, copyBoard() );	// test move
			ours = points[0];
			if( ours > max ) {						// if current val is greater than current max
				max = ours;						
				maxi = i;							// save the index of the hole
			}
		}
		if( max > 0 ) {								// opt for move that wins MOST points
			chooseMove( maxi );
		} else {
			computerMoveEasy();						// no advantage, use random move
		}
	}
	
	// HARD AI -- respond with the best possible move
	function computerMoveHard() {
		var i, points, offset;
		var array, moves = new Array(p2End - p1End);
		for( i = 0; i < moves.length; i++ ) {
			moves[i] = [board[i + (p1End + 1)],0];	// assign each hole priority 0
		}
		// maximize OUR gain
		var maxDiff = 0; var maxi = 0; var ours = 0;
		for( i = p1End + 1; i <= p2End; i++ ) {		// all possible moves for P2
			points = testMove( i, copyBoard() );
			var curr = points[0] - points[1];		// calc point differential;
			if( curr > maxDiff ) {					// set max differential
				maxDiff = curr;
				if( points[0] > ours ) {			// maximize total points
					ours = points[0];
					maxi = i;						// set index of best option
				}	
			}
		}
		// gain if we can...
		if( ours > 0 ) {
			// choose best hole
			chooseMove( maxi );	
		} 
		else {
			// Preserve 3's, build 3's if possible
			max = 0; maxi = 0; offset = p1End + 1;
			array = copyBoard();
			for( i = 0; i < moves.length; i++ ) {
				var curr = moves[i][0];
				if ( curr == 0 || curr == 4 ) {								// 0,4  pebbles = priority 0
					moves[i][1] = 0;
					
				} 
				else if( curr == 3) {										// 3 pebble = priority 0
					moves[i][1] = 0;
					var inc = 0.5;
					for( var j = 0; j < moves.length; j++ ) {				// look for 3s in front, give higher priority
						if( moves[j][0] == 3 ) {
							moves[j][1] += inc;								// 3s down the line have higher priority
							inc += inc;
						}
					}
				}
				else if( curr == 1 ) {											// 1 pebble == priority 2
					moves[i][1] += 2;				
					if( array[ (i + 1 + offset) % array.length ] == 1 ) {		// look at n+1 hole = 1
						if( array[ (i + 2 + offset) % array.length ] == 2 ) {	// look at n+2 hole = 2
							moves[i][1] += 1; 									// increase hole priority
						}
					}
				} 
				else if ( curr == 2 ) {											// 2 pebbles == priority 1
					moves[i][1] += 1;
					if( array[ (i + 1 + offset) % array.length ] == 2 ) {		// look at n+1 hole = 2
						moves[i][1] += 2; 										// increase hole priority
					}
 				} 
				else {
					moves[i][1] = 1;											// otherwise priority 1
				}
				var priority = moves[i][1];										// current hole priority
				if( priority > max ) {											// bigger than max?
					max = priority;	
					maxi = i + (p1End + 1);										// set this as a high-priority hole
				}
			}
			if( max > 0 ) {														// if any move has priority greater than 0
				chooseMove( maxi );												// choose max priority move
			} else {
				computerMoveEasy();
			}
		}
	}
	
	// test move
	function testMove( i, array ) {
		var points = [0,0]; 
		if( array[i] == 0 ) { return points; } 	// invalid move
		var hand = array[i];					// pick up the pebbles 
		array[i] = 0;							// hole has no pebbles 
		while( hand > 0 ) { 					// end turn if hand has no pebbles
			i = (i + 1)%array.length; 			// proceed to next hole, iterate array
			hand--; 							// take 1 from hand
			array[ i ]++; 						// place in hole
			var curr = array[ i ]; 				// examine current hole
			if( curr == 4 ) { 					// take the pile
				array[ i ] = 0;
				if( hand == 0 ) {				// player ended here, take pile
					points[0]++;				// increase our side's points
				} else {
					if( i > p1End ) {			// give THEM points
						points[0]++;
					} else {
						points[1]++;			// give US points
					}
				}
			} else if ( curr > 1 && hand == 0 ) { 	// continue playing
				hand = curr;						// grab pebbles
				array[ i ] = 0;						// hole is empty
			}
		}
		return points;
	}
	
	// copy board array
	function copyBoard() {
		var arr = new Array(12);
		for( var i = 0; i < arr.length; i++ ) {
			arr[i] = board[i]; 
		}
		return arr; 
	}
	
	// do the move
	function chooseMove( number ) {
		var id = getId( number );
		$(id).click();
	}
	
	// create artifical delay to simulate "thought" illusion
	function doDelayedComputerMove() {
		var duration = Math.floor(Math.random()*1000+750);	// random number between 750 and 1750 ms
		if( duration > 1200 ) {
			displayMessage("Computer is thinking...");		// make "thought bubble" pop up
		}
		timer = setTimeout(function() {			
			computerMove();									// make AI-calculated move
		}, duration);										// delay a second, create illusion of thought...
	}
	
	/********* END ARTIFICIAL INTELLIGENCE *******/
	/********* END ARTIFICIAL INTELLIGENCE *******/
	/********* END ARTIFICIAL INTELLIGENCE *******/
	
	// re-display a single item on the board
	function refresh( i ) {
		if( i < board.length ) {
			id = getId( i );
			var num = board[i];
			//$(id).val(num);
			var position = getPosition( num );
			if( num == 0 ) {
				$(id).css("background-image", "none");
			} else {
				$(id).css("background-image", "url('img/pebbles.png')");
				$(id).css("background-position", position);
			}
		}
		refreshScore();
	}
	
	// re-display the values on the board
	function refreshAll() {
		for(var i = 0; i < board.length; i++) {
			id = getId( i );
			var num = board[i];
			//$(id).val(num);
			var position = getPosition( num );
			if( num == 0 ) {
				$(id).css("background-image", "none");
			} else {
				$(id).css("background-image", "url('img/pebbles.png')");
				$(id).css("background-position", position);
			}
		}
		refreshScore();
	}
	
	// display winner, proceed game...
	function processWin() {
		var done = false;	// we're not done!
		var winStr = "Game over! ";
		if( p1Score > p2Score ) {			// PLAYER 1 WINS
			winStr += "Player 1 Wins!";		// set output string
			p1End = p1Score - 1;			// reset play boundaries
			turn = false; 					// will be reversed
			if( p1End == p2End ) {
				winStr += "\n\nPlayer 1 has captured the board!"
				done = true;
			}
		} else if ( p2Score > p1Score ) {	// PLAYER 2 WINS
			winStr += "Player 2 Wins!";		// set output string
			p1End = p1Score - 1; 			// reset play boundaries 
			turn = true; 					// will be reversed
			if( p1End < 0 ) {
				winStr += "\n\nPlayer 2 has captured the board!"
				done = true;
			}
		} else {
			winStr += "Tie Game!";
			done = true; // reset the board to 6-6
		}
		displayMessage(winStr, 3000); 
		refreshAll();
		if( !done ) {
			initialize();			// continue the game
		} else {
			$("#newgame").click(); 	// restart the whole thing
		}
		
	}
	
	// capture pile based on turn
	function capturePile() {
		if( turn ) {
			p1Score += 1;
		} else {
			p2Score += 1;
		}
		//alert("capturePile()\np1Score: " + p1Score + "\np2Score: " + p2Score);
	}
	
	// capture pile based on side
	function awardPoints( i ) {
		if( i <= p1End ) { 	// pile is on player 1's side
			p1Score += 1;
		} else {			// pile is on player 2's side	
			p2Score += 1;
		}
		//alert("awardPoints("+i+")\np1Score: " + p1Score + "\np2Score: " + p2Score);
	}
	
	// how many pebbles on the board?
	function boardCount() {
		var sum = 0;
		for(var i = 0; i < board.length; i++) {
			sum += board[i];
		}
		return sum;
	}
	
	// check the number of pebbles available to the OTHER player
	function otherPlayersPebbles() {
		var pebbleCount = 0;
		if( turn ) { // player 1
			for( var i = p1End + 1; i < board.length; i++ ) {
				pebbleCount += board[i]; // count player 2's pebbles
			}		
		} else {     // player 2
			for( var i = 0; i <= p1End; i++ ) { 
				pebbleCount += board[i]; // count player 1's pebbles
			}	
		}
		return pebbleCount;
	}
	
	// return an ID from an index
	function getId( i ) {
		return "#btn" + i;
	}
	
	// return an image name from a number
	function getImageName( num ) {
		var name = "img/pebble" + num + ".png";
		return name;
	}
	
	// re-display the scores
	function refreshScore() {
		$('#p1Score').html(p1Score);
		$('#p2Score').html(p2Score);
	}
	
	// change the turn
	function setTurn() {
		$("#player").html(function() {
			turn = !turn;
			var player = "";
			if(turn) {
				// set the special CSS hover class
				for(var i = 0; i < board.length; i++) {
					id = getId( i );
					if( i <= p1End ) {
						$(id).addClass("side");
					} else {
						$(id).removeClass("side");
					}
				}
				// set the player heading
				player += "<h2>Player 1&rsquo;s Turn</h2>";
			} else {
				// set the special CSS hover class
				for(var i = 0; i < board.length; i++) {
					id = getId( i );
					if( i > p1End ) {
						$(id).addClass("side");
					} else {
						$(id).removeClass("side");
					}
				}
				// set the player heading
				player += "<h2>Player 2&rsquo;s Turn</h2>";
			}
			return player;
		}).slideDown();
	}
	
	// initialize the board state
	function initialize() {
		for(var i = 0; i < board.length; i++) {
			board[i] = 4;
		}
		p1Score = 0;			// set score 0
		p2Score = 0;			// set score 0		
		gameover = false;		// game is NOT over
		hideShowDifficulty();	// show/hide difficulty setter
		setTurn();				// set turn is player1
		refreshAll();			// refresh the board
		enableButtons();		// enable the board		
	}	
	
	function enableButtons() { $(".button").removeAttr("disabled"); } // disable buttons
	function disableButtons() { $(".button").attr("disabled","true"); } // re-enable buttons
	function againstComputer() { return type == "computer"; }	// return that the game is against the computer
	function hideShowDifficulty() {
		if( type == "computer" ) {
			$("#difficulty").show();
		} else {
			$("#difficulty").hide();
		}
	}
	
	// get the background image position for a given number of pebbles
	function getPosition( num ) {
		var x, y;
		var xOff = -5;		// don't touch this!!
		var yOff = -6; 		// don't touch this!!
		switch ( num ) {
			case 1: 	x = 0; 		y = 0; 		break;
			case 2: 	x = -130; 	y = 0; 		break;
			case 3: 	x = -260;	y = 0;		break;
			case 4:		x = -390;	y = 0;		break;
			case 5: 	x = -520; 	y = 0;		break;
			case 6: 	x = -650; 	y = 0;		break;
			case 7: 	x = 0; 		y = -130; 	break;
			case 8: 	x = -130; 	y = -130; 	break;
			case 9: 	x = -260;	y = -130;	break;
			case 10:	x = -390;	y = -130;	break;
			case 11: 	x = -520; 	y = -130;	break;
			case 12: 	x = -650; 	y = -130;	break;
			case 13: 	x = 0; 		y = -260;	break;
			case 14: 	x = -130; 	y = -260;	break;
			case 15:	x = -260;	y = -260;	break;
			case 16:	x = -390;	y = -260;	break;
			case 17: 	x = -520; 	y = -260;	break;
			case 18: 	x = -650; 	y = -260;	break;
			case 19: 	x = 0; 		y = -390; 	break;
			case 20: 	x = -130; 	y = -390; 	break;
			case 21: 	x = -260;	y = -390;	break;
			case 22:	x = -390;	y = -390;	break;
			case 23: 	x = -520; 	y = -390;	break;
			case 24:	x = -650; 	y = -390;	break;
			default: 
				x = 0;
				y = 0;
		}
		return (x-xOff) + "px " + (y-yOff) + "px";
	}
});
