
/////////////////////////////////////////////
//////COUNT DOWN TIMER///////////////////////

function setTimer() {
    var secondsLeft = 5
    var timerInterval = setInterval(function() {
      secondsLeft--;
    if(secondsLeft === 0) {
      clearInterval(timerInterval)
            endOfQuizMessage();
     
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



questionDom.children[0].textContent = questionBank[questionNumber][0];
answerAdom.children[1].textContent = questionBank[questionNumber][1];
answerAdom.children[4].textContent = questionBank[questionNumber][2];
answerAdom.children[7].textContent = questionBank[questionNumber][3];
answerAdom.children[10].textContent = questionBank[questionNumber][4];


//Sets start quiz function.  This removes the welcome message and start quiz button and starts the quiz./////// 
var welcomeDom = document.querySelector(".welcome-message")

function startQuiz() {
welcomeDom.setAttribute("style", "display: none");
questionDom.setAttribute("style", "display: block");
setTimer()
}


//This function adds the end of quiz messgae after the timer reaches the end////////////////////////////

function endOfQuizMessage(){
    document.getElementById('end-of-quiz-message').innerHTML = "The time is over and the quiz is done";
};


//Gets value of selected radio and compares to the answer bank /////////////////////

var answerBank = ["a","b","c","d"];

function submitAnswer(){
        
    var actualAnswerSelected = document.querySelector('input[name="test-box"]:checked').value;

    console.log("questionNumber = " + questionNumber);
    console.log("THIS IS IT: " + actualAnswerSelected)
    document.getElementById("result").innerHTML = actualAnswerSelected;
    questionNumber++;
    questionAnswerBox();
    console.log("new number for question number :  " +questionNumber);
    

    if (actualAnswerSelected === answerBank[questionNumber])
    {
        console.log("YOU DID IT")
    } else {
        console.log("YOU CRAPPED OUT")
    };
}


