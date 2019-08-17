
//Variables to track the user's score
var correctAnswers = 0;
var incorrectAnswers = 0;
var score = correctAnswers/incorrectAnswers;

//"Super Object" to contain all trivia questions, correct answers, and incorrect options
var questionsArray = [
    {   //QUESTION 0
        questionText: 'The name "hippopotamus" is a combination of Greek words meaning...',
        answers: {
            option1: {
                optionText: "Water Bull",
                correct: false,
            },
            option2: {
                optionText: "River Horse",
                correct: true,
            },
            option3: { 
                optionText: "Creek Cow",
                correct: false,
            },
            option4: {
                optionText: "Wet Donkey",
                correct: false,
            }
        }
    },
    {//QUESTION 1
        questionText: "What is the average lifespan of a hippopotamus?",
        answers: {
            option1: {
                optionText: "20 years",
                correct: false,
            },
            option2: {
                optionText: "30 years",
                correct: false,
            },
            option3: { 
                optionText: "40 years",
                correct: true,
            },
            option4: {
                optionText: "50 years",
                correct: false,
            }
        }


    },
    {//QUESTION 2
        questionText: "How much time does a hippopotamus spend submerged in water each day?",
        answers: {
            option1: {
                optionText: "8 hours",
                correct: false,
            },
            option2: {
                optionText: "12 hours",
                correct: false,
            },
            option3: { 
                optionText: "16 hours",
                correct: true,
            },
            option4: {
                optionText: "20 hours",
                correct: false,
            }
        }

    },
    {//QUESTION 3
        questionText: "How long can a hippopotamus hold its breath underwater?",
        answers: {
            option1: {
                optionText: "5 minutes",
                correct: true,
            },
            option2: {
                optionText: "10 minutes",
                correct: false,
            },
            option3: { 
                optionText: "15 minutes",
                correct: false,
            },
            option4: {
                optionText: "20 minutes",
                correct: false,
            }
        }
    },
    {//QUESTION 4
        questionText: "What term best describes the diet of a hippopotamus?",
        answers: {
            option1: {
                optionText: "Herbivorous",
                correct: true,
            },
            option2: {
                optionText: "Carnivorous",
                correct: false,
            },
            option3: { 
                optionText: "Omnivorous",
                correct: false,
            },
            option4: {
                optionText: "Paleo",
                correct: false,
            }
        }
    }
];

//Function that starts the timer and begins iterating through the questions
var i = 0;

function questionLoop() {
    setTimeout(function() {
        $("#question-number-element").text("Question #" + (i+1));
        $("#correct-number-element").text("Correct: " + correctAnswers);
        $("#incorrect-number-element").text("Incorrect: " + incorrectAnswers);
        $("#time-remaining-element").html("Time: ");


        //Empties card header and inserts question text
        $("#question-element").empty();
        $("#question-element").text(questionsArray[i].questionText);

        //Empties card body and inserts options
        $("#options-element").empty();
        answersElement = $("<div>").addClass("btn-group-vertical col-5");
        option1Element = $("<div>").addClass("btn btn-light mb-1").text(questionsArray[i].answers.option1.optionText);
        option2Element = $("<div>").addClass("btn btn-light mb-1").text(questionsArray[i].answers.option2.optionText);
        option3Element = $("<div>").addClass("btn btn-light mb-1").text(questionsArray[i].answers.option3.optionText);
        option4Element = $("<div>").addClass("btn btn-light mb-1").text(questionsArray[i].answers.option4.optionText);
        
        //Adds options buttons to verticl button group
        $(answersElement).append(option1Element, option2Element, option3Element, option4Element);
        
        //Insets button group to the card body
        $("#options-element").html(answersElement);
        i++;
        if (i < questionsArray.length) {
            questionLoop();
        };
    }, 5000)};


$(document).ready(function() {
    $("#start-button").on("click", questionLoop());
});
