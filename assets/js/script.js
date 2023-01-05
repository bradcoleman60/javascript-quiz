//Global variables

//Set the time alotment in seconds
var secondsLeft = 1000

//This array holds the questions position[0], the 5 possible answers (positions [1-4] and the actual answer (position[5])
var questionBank = [["Question 1 :   Javascript was first known as?"," SuperScript","LiveScript","Netscape Scripter","none of the above ","b"],["Question 2:    All of the following are benefits of using JavaScript except:"," Less server traffic","Visitors do not have to wait for the page to reload","Increased interactivity like reactions when users hover over an element","Supports multithreading","d"],["Question 3:    What tag is used to link a JavaScript file to a website?"," <script>….</script>","<script>","<Jscript>…</Jscript>","<JayScripter>…</JayScripter","a"],["Question 4:    Which of the following are the two scopes variables can have in JavaScript?"," Intenational and local","Large and small","Global and local","Global and remote","c"],["Question 5:    All of the following are primitive data types in JavaScript except"," Numbers","Strings","Boolean","Null","d"],["Question 6:    Which of the following is a reserved word in JavaScript?"," Volatility","Case","Continuation","without","b"],["Question 7:    Which of the following is not a supported opeator in JavaScript?"," Arithmetic Operators","Comparison Operators","Smooth Operators","Logical Operators","c"],["Question 8:    What is a function in JavaScript?"," Built-on code snippets that can be used in your program","Arithemetic calculators like sum and average","A group of reusable code that can can called anywhere in your program","An event ","c"],["Question 9:    A return statement in a function is:"," Always required","Only required if a FOR LOOP is used in the function","Never included in a function","Required if you want to return a value from the function","d"],["Question 10:    Which of the following is a string method?"," CharAt()","pop()","map()","unshift()","a"],
];

//Other global variable
var questionNumber = 0;
var scoreCounter = 0;
var answeredQuestions = 0;

//This function creates the coundwon timer
function setTimer() {
      var timerInterval = setInterval(function() {
      secondsLeft--;
      //This IF statement ends the quiz of the secondsLeft is zero or all question have been answered  
      if(secondsLeft <= 0 || answeredQuestions === questionBank.length) {
      clearInterval(timerInterval)
            endOfQuizMessage();
            $(".question-box").attr("style", "display: none");
            $(".initialsInput").attr("style", "display: flex");
             }
        
             $("#counter").text(secondsLeft);
    
        
  }, 1000);
}

//Sets start quiz function.  This removes the welcome message and start quiz button and starts the quiz.

$(".welcome-message").click(function(){
    $(".welcome-message").attr("style", "display: none");
    $(".question-box").attr("style", "display: flex");
    $(".countdown").attr("style", "display: block")
setTimer();
displayQuestionBox();

});

//This function displays the question and multiple answers based on the question number. 
function displayQuestionBox (){
       
    $("p.the-question").text(questionBank[questionNumber][0]);
    $("li:eq(0)").text(questionBank[questionNumber][1]);
    $("li:eq(1)").text(questionBank[questionNumber][2]);
    $("li:eq(2)").text(questionBank[questionNumber][3]);
    $("li:eq(3)").text(questionBank[questionNumber][4]);
};

//This function adds the end of quiz messgae after the timer reaches the end
function endOfQuizMessage(){
    
    $("#end-of-quiz-message").text("Thanks for taking the quiz. Your Score was: " + scoreCounter + " out of " + questionBank.length + ".")
    $(".countdown").attr("style", "display: none");
    };

//This function obtains value of selected radio input and compares to the answer bank

$("li").click(function(){

    var actualAnswerSelected = $(this).attr("value");
    
    if (actualAnswerSelected === questionBank[questionNumber][5]){
        scoreCounter++;
        answeredQuestions++;
        
    } else {
        secondsLeft = secondsLeft - 5;
        answeredQuestions++;
    };
    
    if (answeredQuestions < questionBank.length){
        questionNumber++;
        displayQuestionBox();
    }
    
});

//This function allows user to input initials at the completion of the quiz
var existingleaderBoard = JSON.parse(localStorage.getItem("leaderBoard"));

$("#initials-submit-btn").click(function(){
    var initialsThatWereInput =$("#initials-submit-text").val();
    var newScore = {"initials" : initialsThatWereInput, "score" : scoreCounter , "percentage": (scoreCounter /= questionBank.length).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})};

    //This checks to ensure that letters are input and that the string is not a number
    if(initialsThatWereInput.length === 0 || !isNaN(initialsThatWereInput)){
    alert("Please enter your initials");
    } else {
 
    //This checks to see if local storage has an existing leaderboard, if not an array 
    //is created to hold the leaderboard    
    if(existingleaderBoard == null) existingleaderBoard = [];

    //This pushes the new score into the existing leaderboard
    existingleaderBoard.push(newScore);
    localStorage.setItem("leaderBoard", JSON.stringify(existingleaderBoard));
    existingleaderBoard.sort((a,b)=> (a.score - b.score));
    displayLeaderboard();
}
}
    
);

//This function creates and displays the leaderboard 

function displayLeaderboard(){
    //This removes the intials input box and submit button
    
    $(".initialsInput").attr("style", "display: none");
    
    //This displays the leaderboard
    $(".leaderboard-table").attr("style", "display: flex");

    var table = document.getElementById("leaderboard-table");

    //This FOR loop iterates around the locally stored leaderboard and creates a table
    //The use of toUpperCase sets initails to ALL CAPS
    for (let i = 0; i < existingleaderBoard.length; i++){
        var row = table.insertRow(1);
        var initialsCell = row.insertCell(0);
        var scoreCell = row.insertCell(1);
        var percentageCell = row.insertCell(2);
        initialsCell.innerHTML = existingleaderBoard[i].initials.toUpperCase();
        scoreCell.innerHTML = existingleaderBoard[i].score;
        percentageCell.innerHTML = existingleaderBoard[i].percentage;
    }

}

//This function reloards the page to get back to the take the quiz 
$("#back-to-start").click (function (){
        location.reload();
});

// localStorage.clear();
