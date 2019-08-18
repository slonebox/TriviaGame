
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

//Functions and Variables that keep and display the time

var delay = 3000;

//Sets initial timer to the 
var timeLeft = 3;
var intervalID;

function run () {
    clearInterval(intervalID);
    intervalId = setInterval(decrement, 1000)
};

function decrement() {
    timeLeft--;
    $("#time-remaining-element").html("Time: " + timeLeft);
    if (timeLeft === 0) {
        stop();
    };
};

function stop() {
    clearInterval(intervalId);
    console.log(intervalID);
};

//Click event function that starts the game and begins running the clock
var i = 0;

$("#start-button").click(function() {
    run();
    displayQuyestion(i);
    $(questionsArray).each(function(i) {
        setTimeout(function() {
            i++;
            displayQuyestion(i)
            run();
        }, delay);
        delay += 3000;
    });
});


//Function to display game values 
function displayQuyestion(i) {
    //Displays scoreboard
    $("#question-number-element").text("Question #" + (i+1));
    $("#correct-number-element").text("Correct: " + correctAnswers);
    $("#incorrect-number-element").text("Incorrect: " + incorrectAnswers);
    $("#time-remaining-element").html("Time: " + timeLeft);

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
}