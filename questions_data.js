const questions = [
  {
    "title": "Breathing Exercises",
    "question_type": "simple",
    "data": [
      "Take 10 deep breaths.<br>Count them out loud.",
      "Did you take the breaths?",
      "Good job!"
    ]
  },
  {
    "title": "Incentive Spirometer",
    "question_type": "simple",
    "data": [
      "Take a deep breath with the spirometer.",
      "Take one more deep breath with the spirometer.",
      "Take a third deep breath with the spirometer.",
      "Great job!",
      "Remember to do this 10x per hour."
    ]
  },
  {
    "title": "In Bed Physical Therapy: Legs",
    "question_type": "simple",
    "data": [
      "Set 1",
      "Knee raises left leg<br>(10x)",
      "Knee raises right leg<br>(10x)",
      "Ankle pumps, thrusting both feet down<br>(10x)",
      "Alternating ankle pumps<br>(10x)",
      "Press and hold right foot down<br>(5 seconds)",
      "Press and hold left foot down<br>(5 seconds)",
      "Set 2",
      "Knee raises left leg<br>(10x)",
      "Knee raises right leg<br>(10x)",
      "Ankle pumps, thrusting both feet down<br>(10x)",
      "Alternating ankle pumps<br>(10x)",
      "Press and hold right foot down<br>(5 seconds)",
      "Press and hold left foot down<br>(5 seconds)",
      "Set 3",
      "Knee raises left leg<br>(10x)",
      "Knee raises right leg<br>(10x)",
      "Ankle pumps, thrusting both feet down<br>(10x)",
      "Alternating ankle pumps<br>(10x)",
      "Press and hold right foot down<br>(5 seconds)",
      "Press and hold left foot down<br>(5 seconds)",
      "Awesome job!"
    ]
  },
  {
    "title": "Sitting Physical Therapy: Legs",
    "question_type": "simple",
    "data": [
      "Set 1",
      "Extend left leg<br>(10x)",
      "Extend right leg<br>(10x)",
      "Press ankles on the floor<br>(10x)",
      "Set 2",
      "Extend left leg, hold 3 seconds<br>(10x)",
      "Extend right leg, hold 3 seconds<br>(10x)",
      "Press ankles on the floor<br>(10x)",
      "Set 3",
      "Extend left leg<br>(10x)",
      "Extend right leg<br>(10x)",
      "Press ankles on the floor<br>(10x)",
      "Woo! Awesome!"
    ]
  },
  {
    "title": "Physical Therapy: Right arm",
    "question_type": "simple",
    "data": [
      "Set 1",
      "Raise right arm as high as possible<br>(10x)",
      "Right arm curl<br>(Dumbbell curl)<br>(10x)",
      "Extend right arm and move wrist up, down, around<br>(Full range of motion)",
      "&ldquo;Pulling your BC inflator&rdquo;<br>Reach right arm up to your shoulder and down.<br>(5x)",
      "&ldquo;Reach for your sword&rdquo;<br>Reach right arm up to your shoulder and down.<br>(5x)",
      "Set 2",
      "Raise right arm as high as possible<br>(10x)",
      "Right arm curl<br>(Dumbbell curl)<br>(10x)",
      "Extend right arm and move wrist up, down, around<br>(Full range of motion)",
      "&ldquo;Pulling your BC inflator&rdquo;<br>Reach right arm up to your shoulder and down.<br>(5x)",
      "&ldquo;Reach for your sword&rdquo;<br>Reach right arm up to your shoulder and down.<br>(5x)",
      "Set 3",
      "Raise right arm as high as possible<br>(10x)",
      "Right arm curl<br>(Dumbbell curl)<br>(10x)",
      "Extend right arm and move wrist up, down, around<br>(Full range of motion)",
      "&ldquo;Pulling your BC inflator&rdquo;<br>Reach right arm up to your shoulder and down.<br>(5x)",
      "&ldquo;Reach for your sword&rdquo;<br>Reach right arm up to your shoulder and down.<br>(5x)",
      "Done!"
    ]
  },
  {
    "title": "Physical Therapy: Arms together",
    "question_type": "simple",
    "data": [
      "Place a towel or sheet on the table.<br>Placing both hands on sheet, move forward and backward.<br>(10x)",
      "Both arms forward, fingers together.<br>Move arms together from your waist up over your head.<br>(5x)",
      "Both arms forward, fingers together.<br>Move your wrists all the way to the right, left, and in a circle.<br>(5x)"
    ]
  },
  {
    "title": "Occupational Therapy: Right hand",
    "question_type": "simple",
    "data": [
      "Open and close right hand.<br>(5x)",
      "Squeeze red squishy ball.<br>(5x)",
      "Give me a firm handshake.",
      "Squeeze two fingers as hard as possible."
    ]
  },
  {
    "title": "Occupational Therapy: Hand gestures",
    "question_type": "simple",
    "data": [
      "👌<br>Dive &ldquo;OK&rdquo; sign",
      "👍<br>Thumbs up sign",
      "Touch each finger to thumb in order",
      "🖖<br>&ldquo;Live long and prosper&rdquo; sign",
      "🤘<br>Heavy metal sign",
      "With computer:&nbsp;<a target='_blank' href='https://www.youtube.com/watch?v=cGavOVNDj1s'>ASL Alphabet</a>",
      "With computer:&nbsp;<a target='_blank' href='https://www.youtube.com/watch?v=cJ6UFIP-Vt0'>ASL Numbers</a>",
      "🙌<br>Woo-hoo! Done!"
    ]
  },
  {
    "title": "Family Questions",
    "question_type": "simple",
    "data": [
      "What is your name?",
      "What is your wife's name?",
      "What are your children's names?",
      "What are your children's spouses names?",
      "What are you niece and nephew's names?",
      "What is your granddaughter's name?",
      "What are the names of your cats?",
      "What was the name of your first cat?",
      "What are the names of all the cats you've ever had?"
    ]
  },
  {
    "title": "General Knowledge",
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
    "title": "Sentence Completion",
    "question_type": "completion",
    "data": [
      "The room is either too hot or too ____",
      "My plants are either too short or too ____"
    ]
  },
  {
    "title": "Speech therapy: say out loud",
    "question_type": "simple",
    "data": [
      "Puh-tuh-kuh<br>Puh-tuh-kuh<br>Puh-tuh-kuh",
      "Puh puh puh",
      "Tuh tuh tuh",
      "Kuh kuh kuh"
    ]
  }
];
