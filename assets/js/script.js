
/////////////////////////////////////////////
//////COUNT DOWN TIMER///////////////////////

var secondsLeft = 20

function setTimer() {
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
    if(secondsLeft <= 0) {
      clearInterval(timerInterval)
            endOfQuizMessage();
            questionDom.setAttribute("style", "display: none");
        }
    document.getElementById('counter').innerHTML = "Seconds Remaining = " + secondsLeft;
        
  }, 1000);
  
//   console.log(secondsLeft)
}

//This JS sets the question and answer array and pushes the sets of questions and answers to the webpage based on the questionNumber1 variable////////

var questionDom = document.querySelector(".question-box");
var answerAdom = document.querySelector(".submission-form")
var questionBank = [["Question 1 :   What is Javascript?","A - a coffee","B - a car","C - a plane ","D - non of the above "],["Question 2:    What is MYSQL?","A - A plane ","B - a system of items","C - absolutely nothing ","D - All of the above "],["Question 3:    How is an Array different than an Object?","A - An array is longer","B - An object is a noun","C - they are the same","D - An array is a ray of light"],["Question 4:    What does the method BIKE do?","A - Assigns a value to a variable","B - Takes mom to lunch","C - Goes on a bike ride ","D - Never eats at McDonalds"]];
var questionNumber = 0;

//Sets start quiz function.  This removes the welcome message and start quiz button and starts the quiz./////// 
var welcomeDom = document.querySelector(".welcome-message")

function startQuiz() {
welcomeDom.setAttribute("style", "display: none");
questionDom.setAttribute("style", "display: block");
setTimer();
// submitAnswer();
displayQuestionBox();



}

//This function displays the question and multiple answers based on the question number. 
function displayQuestionBox (){
    
    questionDom.children[0].textContent = questionBank[questionNumber][0];
    answerAdom.children[1].textContent = questionBank[questionNumber][1];
    answerAdom.children[4].textContent = questionBank[questionNumber][2];
    answerAdom.children[7].textContent = questionBank[questionNumber][3];
    answerAdom.children[10].textContent = questionBank[questionNumber][4];
}



//This function adds the end of quiz messgae after the timer reaches the end////////////////////////////

function endOfQuizMessage(){
    document.getElementById('end-of-quiz-message').innerHTML = "The time is over and the quiz is done.  Your Score was:" + scoreCounter;
};


//Gets value of selected radio and compares to the answer bank /////////////////////

var answerBank = ["a","b","c","d"];

var scoreCounter = 0;

function submitAnswer(){
        
    var actualAnswerSelected = document.querySelector('input[type="radio"][name="test-box"]:checked').value;

    console.log("questionNumber = " + questionNumber);
    console.log("CHOICE SELECTED: " + actualAnswerSelected);
    console.log("THE CORRECT ANSWER IS:  "  + answerBank[questionNumber]);
    // document.getElementById("result").innerHTML = actualAnswerSelected;
    
    
    
    if (actualAnswerSelected == answerBank[questionNumber])
    {
        scoreCounter++;
        console.log("YOU DID IT")
    } else {
        secondsLeft = secondsLeft - 5;
        console.log("YOU MISSED THE ANSEWR")
    };
    
    questionNumber++;
    console.log("new number for question number :  " + questionNumber);
    displayQuestionBox();
    console.log(actualAnswerSelected);
    console.log("Score Counter = " + scoreCounter);
    
}

//  localStorage.clear();

function initialsInput(){

    var initialsThatWereInput = document.querySelector('input[type="text-box"][name="initials-input"]').value;
     
    var existingleaderBoard = JSON.parse(localStorage.getItem("leaderBoard"));

    if(existingleaderBoard == null) existingleaderBoard = [];

    var newScore = {"initials" : initialsThatWereInput, "score" : scoreCounter } ;

    existingleaderBoard.push(newScore);

    localStorage.setItem("leaderBoard", JSON.stringify(existingleaderBoard));

    console.log(JSON.parse(localStorage.getItem("leaderBoard")))

}