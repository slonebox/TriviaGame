//Variables to track the user's score
var correctAnswers = 0;
var incorrectAnswers = 0;
var score = correctAnswers/incorrectAnswers;

//"Super Object" to contain all trivia questions, correct answers, and incorrect options
var questionsArray = [
    {
        //QUESTION 0
        questionText: 'The name "hippopotamus" is a combination of Greek words meaning...',
        incorrect1:	"Water Bull",
        correct: "River Horse",
        incorrect2:	"Aqua Cow",
        incorrect3:	"Sea Donkey"
    },
    {
        //QUESTION 1
        questionText: "What is the average lifespan of a hippopotamus?",
        incorrect1:	"20 years",
        incorrect2: "30 years",
        correct: "40 years",
        incorrect3:	"50 years"
    },
    {
        //QUESTION 2
        questionText: "How much time does a hippopotamus spend submerged in water each day?",
        incorrect1:	"8 hours",
        incorrect2: "12 hours",
        correct: "16 hours",
        incorrect3:	"20 hours"
    },
    {
        //QUESTION 3
        questionText: "How long can a hippopotamus hold its breath underwater?",
        correct:	"5 minutes",
        incorrect1: "10 minutes",
        incorrect2: "15 minutes",
        incorrect3:	"20 minutes"
    },
    {
        //QUESTION 4
        questionText: "What term best describes the diet of a hippopotamus?",
        correct: "Herbivorous",
        incorrect1: "Carnivorous",
        incorrect2: "Omnivorous",
        incorrect3:	"Paleo"
    }
];
var x = 1;

console.log(questionsArray[1].questionText);
console.log(questionsArray[1].correct);

//Function to begin timed sequence of cards 