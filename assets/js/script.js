
///Global variables

var secondsLeft = 10
var countDownDom = document.querySelector(".countdown")
var scoreCounter = 0;
var answeredQuestions = 0;
var questionDom = document.querySelector(".question-box");
var questionBank = [["Question 1 :   Javascript was first known as?","A - SuperScript","B - LiveScript","C - Netscape Scripter","D - non of the above ","b"],["Question 2:    All of the following are benefits of using JavaScript except:","A - Less server interation thus less server traffic","B - Visitors do nor have to wait for the page to reload","C - Increased interactivity like reactions when users hover over an element","D - Supports multithreading","d"],["Question 3:    What tag is used to link a JavaScript file to a website?","A - <script>….</script>","B - <script>","C - <Jscript>…</Jscript>","D - <JayScripter>…</JayScripter","a"],["Question 4:    Which of the following are the two scopes variables can have in JavaScript?","A - Intenational and local","B - Large and small","C - Global and local","D - Global and remote","c"],["Question 5:    All of the following are primitive data types in JavaScript except","A - Numbers","B - Strings","C - Boolean","D - Null","d"],["Question 6:    Which of the following is a reserved word in JavaScript?","A - Volatility","B - Case","C - Continuation","D - without","b"],["Question 7:    Which of the following is not a supported opeator in JavaScript?","A - Arithmetic Operators","B - Comparison Operators","C - Smooth Operators","D - Logical Operators","c"],["Question 8:    What is a function in JavaScript?","A - Built-on code snippets that can be used in your program","B - Arithemetic calculators like sum and average","C - A group of reusable code that can can called anywhere in your program","D - An event ","c"],["Question 9:    A return statement in a function is:","A - Always required","B - Only required if a FOR LOOP is used in the function","C - Never included in a function","D - Required if you want to return a value from the function","d"],["Question 10:    Which of the following is a string method?","A - CharAt()","B - pop()","C - map()","D - unshift()","a"]];
var questionNumber = 0;

/////////////////////////////////////////////
//////COUNT DOWN TIMER///////////////////////

function setTimer() {
    var initialsDom = document.querySelector(".initialsInput");
    var timerInterval = setInterval(function() {
      secondsLeft--;
    if(secondsLeft <= 0 || answeredQuestions === questionBank.length) {
      clearInterval(timerInterval)
            endOfQuizMessage();
            questionDom.setAttribute("style", "display: none");
            initialsDom.setAttribute("style", "display: flex");
             }
        
        document.getElementById('counter').innerHTML =  secondsLeft;
        
  }, 1000);
}

//Sets start quiz function.  This removes the welcome message and start quiz button and starts the quiz./////// 

function startQuiz() {

    var welcomeDom = document.querySelector(".welcome-message")
    welcomeDom.setAttribute("style", "display: none");
    questionDom.setAttribute("style", "display: block");
    countDownDom.setAttribute("style", "display:block")
    setTimer();
    displayQuestionBox();

};

//This function displays the question and multiple answers based on the question number. 

function displayQuestionBox (){
    
    var answerDom = document.querySelector(".submission-form");
    questionDom.children[0].textContent = questionBank[questionNumber][0];
    answerDom.children[1].textContent = questionBank[questionNumber][1];
    answerDom.children[4].textContent = questionBank[questionNumber][2];
    answerDom.children[7].textContent = questionBank[questionNumber][3];
    answerDom.children[10].textContent = questionBank[questionNumber][4];
};


//This function adds the end of quiz messgae after the timer reaches the end////////////////////////////

function endOfQuizMessage(){
    document.getElementById('end-of-quiz-message').innerHTML = "The time is over and the quiz is done.  Your Score was: " + scoreCounter;
    countDownDom.setAttribute("style", "display: none");
};

//This function obtains value of selected radio and compares to the answer bank /////////////////////

function submitAnswer(){
        //WORKED BEFORE THE TEST OF THE SUBMIT BUTTON ONLY APPROACH
    var actualAnswerSelected = document.querySelector('input[type="radio"][name="answer-choice"]:checked').value;


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
    var touncheckRadio = document.querySelector('input[type="radio"][name="answer-choice"]:checked');
    touncheckRadio.checked = false;
}

//  localStorage.clear();

//This function allows user to input initials and have those initials added to a leaderboard in local storage. 
///Score to LeaderBoard///////////////////////////

var existingleaderBoard = JSON.parse(localStorage.getItem("leaderBoard"));


function initialsInput(){

    var initialsThatWereInput = document.querySelector('input[type="text-box"][name="initials-input"]').value;
    var newScore = {"initials" : initialsThatWereInput, "score" : scoreCounter , "percentage": (scoreCounter /= questionBank.length).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})};

    if(initialsThatWereInput.length === 0 || !isNaN(initialsThatWereInput)){
        alert("Please enter your initials");
    } else {
     
    if(existingleaderBoard == null) existingleaderBoard = [];
    
    existingleaderBoard.push(newScore);
    localStorage.setItem("leaderBoard", JSON.stringify(existingleaderBoard));
    existingleaderBoard.sort((a,b)=> (a.score - b.score));
        displayLeaderboard();
    }
}

//////This function displays the leaderboard ///////////////

function displayLeaderboard(){

    var initialsDom = document.querySelector(".initialsInput");
    initialsDom.setAttribute("style", "display: none");
    var leaderDom = document.querySelector(".leaderboard-table")
    leaderDom.setAttribute("style", "display: block");
    var table = document.getElementById("leaderboard-table");

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



