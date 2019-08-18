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

//Variables to track the user's score
var correctAnswers = 0;
var incorrectAnswers = 0;
var score = correctAnswers/questionsArray.length + "%";

//Functions and Variables that keep and display the time

var delay = 3000;

//Sets initial timer to the 
var originalTime = 3;
var betweenTime = 5;
var timeLeft = originalTime;
var intervalID;

function run () {
    clearInterval(intervalID);
    intervalId = setInterval(decrement, 1000);
    if (timeLeft === 0) {
        stop();
        incorrectAnswers++;
        $("#incorrect-number-element").text("Incorrect: " + incorrectAnswers);
    }
};

function decrement() {
    timeLeft--;
    $("#time-remaining-element").html("Time: " + timeLeft);
};

function stop() {
    clearInterval(intervalId);
    timeLeft = originalTime;
    $("#time-remaining-element").html("Time: " + timeLeft);
};

//Click event function that starts the game and begins running the clock
var i = 0;

$("#start-button").click(function() {
    console.log(i)
    displayQuyestion(i);
    run();
    $(questionsArray).each(function(i) {
        setTimeout(function() {
            i++;
            displayQuyestion(i)
            run();
            console.log(i)
        }, delay);
        delay += 3000;
        if (i === questionsArray.Length) {
            console.log("Cool");
        }
    });
    
});


//Function to display game values 
function displayQuyestion(i) {
        if ( i < questionsArray.length) {
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
        else {
            endGame();
        }
}


//Runs display upon conclusion of game
function endGame () {
    //Empties card header and displays message
    $("#question-element").empty();
    $("#question-element").text("End of Game");

    //Empties card body
    $("#options-element").empty();

    //Clears the Scoreboard
    $("#scoreboard").empty();

    //Creates various table elements to store final score data; assembles and displays table in card body
    finalScoreTable = $("<table>").addClass("table");
    finalScoreHead = $("<thead>");
    finalScoreHeadRow = $("<tr>");
    finalScoreTableHeaders = [$("<th>").text("Correct"),$("<th>").text("Incorrect"),$("<th>").text("Score")];
    finalScoreBody = $("<tbody>");
    finalScoreBodyRow = $("<tr>");
    finalScoreBodyTableData = [$("<td>").text(correctAnswers), $("<td>").text(incorrectAnswers), $("<td>").text(score)];
    finalScoreHeadRow.append(finalScoreTableHeaders[0], finalScoreTableHeaders[1], finalScoreTableHeaders[2]);
    finalScoreBodyRow.append(finalScoreBodyTableData[0], finalScoreBodyTableData[1], finalScoreBodyTableData[2]);
    finalScoreHead.append(finalScoreHeadRow);
    finalScoreBody.append(finalScoreBodyRow);
    finalScoreTable.append(finalScoreHead, finalScoreBody);
    $("#options-element").html(finalScoreTable);
}