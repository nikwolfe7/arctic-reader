/* Speech & Cognitive Therapy */
const questions = [
{
    "title": "Cognitive: Counting",
    "question_type": "simple",
    "data": [
        "Count backwards from 10 to 1.",
        "Count to 20 by twos.",
        "Count to 30 by threes.",
        "Count to 40 by fours.",
        "Count to 50 by fives.",
        "What is the square root:<br>100",
        "What is the square root:<br>81",
        "What is the square root:<br>64",
        "What is the square root:<br>49",
        "What is the square root:<br>36",
        "What is the square root:<br>25",
        "What is the square root:<br>16",
        "What is the square root:<br>9",
        "What is the square root:<br>4",
        "What is the square root:<br>1",
    ]
},
{
    "title": "Cognitive: What Is This?",
    "question_type": "simple",
    "data": [
        "<img src='https://stsci-opo.org/STScI-01G70BN48JR6M4ZTW3642X2D2H.png'/>",
        "The Southern Ring Nebula",
        "<img src='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg'/>",
        "The Carina Nebula",
        "<img src='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_deep_field_smacs0723-5mb.jpg'/>",
        "The JWST Deep Field Image",
        "<img src='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_galaxies_stephans_quintet_sq_nircam_miri_final-5mb.jpg'/>",
        "Stephan's Quintet",
        "<img src='../img/vegetables.jpeg'>",
        "Vegetables: Cucumbers, Green Peppers, Okra, Squash, Green Beans, Cherry Tomatoes, Heirloom Tomatoes",
    ]
},
{
    "title": "Speech: Get Loud",
    "question_type": "simple",
    "data": [
        "As LOUD as you can:<br>&ldquo;Aaaaahhhh&rdquo;",
        "Practice clearing your throat.",
        "Puh-tuh-kuh<br>Puh-tuh-kuh<br>Puh-tuh-kuh",
        "Puh puh puh",
        "Tuh tuh tuh",
        "Kuh kuh kuh",
        "Red linoleum, yellow linoleum"
    ]
},
{
    "title": "Written Exercise: Make a sentence for the verb",
    "question_type": "simple",
    "data": [
        "Bring",
        "Offer",
        "Pass",
        "Play",
        "Read",
        "Send",
        "Sing",
        "Teach",
        "Write",
        "Buy",
        "Get",
        "Leave",
        "Make",
        "Owe",
        "Pay",
        "Show",
        "Refuse",
        "Take",
        "Kill",
        "Hit",
        "Break",
        "Crush",
        "Pull",
        "Push",
        "Cane",
        "Tell",
        "Eat"
    ]
},
{
    "title": "Written Exercise: Opposites",
    "question_type": "simple",
    "data": [
        "Sanitary",
        "Great",
        "Continue",
        "Hamper",
        "Significant",
        "Here",
        "Rumor",
        "Shiny",
        "Freeze",
        "Strange",
        "Mandatory",
        "Healthy",
        "Future",
        "Borrow",
        "Follow",
        "Alone",
        "Exit"
    ]
},
{
    "title": "Speech: Slow &#9679; Loud &#9679; Articulate &#9679; Pause",
    "question_type": "simple",
    "data": [
        "The sixth &bull; sick sheik’s &bull; sixth sheep’s sick",
        "She dreamed &bull; of cheap ship trips &bull; on a chartered ship &bull; on the seven seas.",
        "A gnawing noise &bull; annoyed &bull; the nervous oyster.",
        "Lloyd spilled &bull; lemon liniment &bull; on the yellow linoleum.",
        "A skunk sat &bull; on a sycamore stump &bull; and stunk up &bull; the stump.",
        "Blake bought &bull; a black-backed bath brush &bull; in Blair's Bath Boutique.",
        "Daniel &bull; will hand you &bull; an annual &bull; cocker spaniel manual.",
        "The Swiss wristwatch shop &bull; shut soon &bull; after seven.",
        "Shirly sells &bull; preshrunk shirts &bull; at the sweatshirt shop.",
        "Neither &bull; of Ned's nieces' knees &bull; was knobby &bull; but Nellie's nephew's &bull; were.",
        "The minister's &bull; sinister &bull; moustache &bull; frustrated most sincere parishioners.",
        "The short-sleeved shirt &bull; should wash &bull; with the shorts &bull; and sheets &bull; in the wash.",
        "Phone friendly Fred &bull; at his toll-free number &bull; for fresh fried fish &bull; for Friday",
        "Sheep shouldn't sleep &bull; in chick shacks &bull; they should sleep &bull; in the sheep shacks.",
        "There's no biz &bull; like show biz &bull; on a no-show &bull; slow &bull; biz quiz show.",
        "Cheryl &bull; should choose &bull; new shoes &bull; her dog shouldn't choose &bull; to chew.",
        "The burger bun &bull; is buttered better &bull; because Betty bought &bull; better butter.",
        "The flea and the fly &bull; who flew in the flue &bull; got stuck &bull; in some super glue goo.",
        "Linda looked &bull; for lots of literary literature &bull; at the local library."
    ]
},
{
    "title": "Danish Speech: Slow &#9679; Loud &#9679; Articulate &#9679; Pause",
    "question_type": "simple",
    "data": [
        "Fem flade flødeboller på et fladt flødebollefad.",
        "Rødgrød med fløde.",
        "Kæmpe kæppe knækker næppe.",
        "Bløde, blege bøgeblade.",
        "Bløde, Glatte blå gadeplakater.",
        "Stativ, stakit, kasket.",
        "Ringeren i Ringe ringer ringere end ringeren ringer i Ringsted.",
        "Du kan ikke altid plukke frisk frugt med en brugt frugtplukker.",
        "Fisker Frits fisker friske fisk.",
        "Døde røde rødøjede rådne røgede ørreder med fløde."
    ]
},
{
    "title": "Cognitive: Category Expansions",
    "question_type": "simple",
    "data": [
        "In 1 minute:<br>Name as many animals as you can.",
        "In 1 minute:<br>Name as many countries as you can.",
        "In 1 minute:<br>Name as many U.S. states as you can.",
        "In 1 minute:<br>Name as many countries in Europe as you can.",
        "In 1 minute:<br>Name as many countries in Africa as you can.",
        "In 1 minute:<br>Name as many countries in North America as you can.",
        "In 1 minute:<br>Name as many countries in South America as you can.",
        "In 1 minute:<br>Name as many countries in Asia as you can.",
        "In 1 minute:<br>Name as many countries in Antarctica as you can.",
        "LOL! 😂",
        "In 1 minute:<br>Name as many countries in Australia as you can.",
        "Gotcha again! 😂",
        "In 1 minute, name as many as you can:<br>Cities",
        "In 1 minute, name as many as you can:<br>Senators & Congresspeople",
        "In 1 minute, name as many as you can:<br>Supreme Court Justices",
        "In 1 minute, name as many as you can:<br>Planets & Moons",
        "In 1 minute, name as many as you can:<br>Rock bands",
        "In 1 minute, name as many as you can:<br>Colors",
        "In 1 minute, name as many as you can:<br>Tools",
        "In 1 minute, name as many as you can:<br>Beers",
        "In 1 minute, name as many as you can:<br>Geometric shapes",
        "In 1 minute, name as many as you can:<br>Oceans & Rivers",
        "In 1 minute, name as many as you can:<br>Fruits & Vegetables",
        "In 1 minute, name as many as you can:<br>Kitchen appliances",
        "In 1 minute, name as many as you can:<br>Household appliances",
        "In 1 minute, name as many as you can:<br>Diving gear",
        "In 1 minute, name as many as you can:<br>Cuts of beef",
        "In 1 minute, name as many as you can:<br>Types of seafood",
        "In 1 minute, name as many as you can:<br>Types of wine",
        "In 1 minute, name as many as you can:<br>Heads of state",
        "Good job!"
    ]
},
{
    "title": "Cognitive: What am I?",
    "question_type": "simple",
    "data": [
        "This animal is black and white, is from China, and eats bamboo.",
        "Panda",
        "This person was a president who wore a big hat and was alive during the Civil War.",
        "Abraham Lincoln",
        "This place is an island in the Pacific Ocean known for sushi and is called the land of the rising sun.",
        "Japan",
        "This instrument is silver, plays high pitched notes, and is similar to the piccolo",
        "Flute",
        "This article of clothing is worn over your shirt on cold days and is often filled with down.",
        "A coat or jacket",
        "This food is typically eaten for breakfast, comes from a pig, and is usually fried until crispy.",
        "Bacon",
        "This drink is usually hot and is very popular in England, you can add cream and honey to it.",
        "Tea",
        "This job involves going house to house and delivering letters, these people are employed by USPS.",
        "Mailman",
        "This object rings at a certain time in order to wake you up in the morning.",
        "Alarm clock",
        "This vehicle has a sail, steering wheel, and anchor.",
        "Boat, ship"
    ]
},
{
    "title": "Cognitive: Family Questions",
    "question_type": "simple",
    "data": [
        "What is your name?",
        "What is your wife's name?",
        "What are your children's names?",
        "What are your children's spouses names?",
        "What are your niece and nephew's names?",
        "What is your granddaughter's name?",
        "What are the names of your cats?",
        "What was the name of your first cat?",
        "What are the names of all the cats you've ever had?"
    ]
},
{
    "title": "Cognitive: General Knowledge",
    "question_type": "simple",
    "data": [
        "What year is it?",
        "What day of the week is it?",
        "When is your birthday?",
        "What month is it?",
        "What's the date?",
        "What day will it be tomorrow?",
        "Who is the president of the United States?",
        "Who is the prime minister of the United Kingdom?"
    ]
},
{
    "title": "Cognitive: General Reasoning",
    "question_type": "simple",
    "data": [
        "Are grandparents typically younger than their grandchildren?",
        "If you're chopping wood, what tool would you use?",
        "If you take $100 to the store and buy a candy bar for $3 and a shirt for $20, how many dollars did you spend?",
        "$23",
        "How many dollars do you have left?",
        "$77"
    ]
},
{
    "title": "Cognitive: Sentence Completion",
    "question_type": "completion",
    "data": [
        "The room is either too hot or too ____.",
        "My plants are either too short or too ____.",
        "I am either right or _____.",
        "She is either sad or _____.",
        "The answer can be true or _____.",
        "You can go either up or _____.",
        "You can find it on either the top or the _____.",
        "Not evertyhing is either black or _____.",
        "I can't tell if it's night or _____.",
        "The towel is wet or _____.",
        "I am tired, so I am going to take a _____.",
        "It is so cold, please turn on the _____.",
        "It is dark in here, turn on the _____.",
        "I grabbed the comb and combed my _____.",
        "I wash my hands with soap and _____.",
        "Take out the pot and boil some _____.",
        "I haven't seen you in a long _____.",
        "When I feel sick, I go visit the _____.",
        "My neighbor fell and broke his _____.",
        "I could not sleep last night, I feel so _____."
    ]
},
{
    "title": "Cognitive: Object Naming",
    "question_type": "simple",
    "data": [
        "Name the objects you see in the room.",
        "Direct me to the grocery store.",
        "Name the objects you see around the room.",
    ]
},
{
    "title": "Cognitive: Conversation",
    "question_type": "simple",
    "data": [
        "What would you do if...<br><br>You inherited a million dollars?",
        "What would you do if...<br><br>You could go to university for free?",
        "What would you do if...<br><br>You had a superpower? What superpower would you have?",
        "What would you do if...<br><br>You were a famous celebrity?",
        "What would you do if...<br><br>You were the President of the U.S.?",
        "What would you do if...<br><br>You never had to sleep again?",
        "What would you do if...<br><br>You knew the world was going to end in 3 days?",
        "What would you do if...<br><br>You were 25 again?",
        "What would you do if...<br><br>You were invisible?",
        "What would you do if...<br><br>You could travel anywhere in the world?",
    ]
},
{
    "title": "Cognitive: Situational Sentences",
    "question_type": "simple",
    "data": [
        "You're at a restaurant and your bowl of soup arrives. However, you don't have any utensils. You turn to your waiter and say...",
        "You're at a friend's house watching TV. The voices coming from the TV are so quiet that you can't understand the story. You turn to your friend and say...",
        "You go to a restaurant and order a chicken breast. When you cut into the chicken, it is bright pink and bloody. You speak with the waiter and say...",
        "Your clothes are done washing in the washer but you're not able to get to the machine to move them. You call up your daughter and say...",
        "Your headache is getting worse and worse and you can no longer concentrate. You turn to your spouse and say...",
        "It's your turn to order at McDonald's. You walk up to the cashier and say...",
        "You find a credit card on the ground. A few minutes later you see someone frantically searching his pockets. You walk up to him and say...",
        "You decide to go watch a movie but the people sitting in front of you are talking and you can't hear the movie. You tap them on the shoulders and say...",
        "You go to the bank with $200 cash in your pocket. You hand the cash to the teller and say...",
        "You have an important appointment Monday morning. Your friend calls and asks if it's okay to visit on Monday around breakfast. You say..."
    ]
}
];