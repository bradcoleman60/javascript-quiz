
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

/////////////////////////////////////////////////////////////
///////////////TEST QUESTION AND ANSWERS - Set up as a Nested Array/////////////////////
////THIS ALSO uses textContent to update the HTML based on the question Nmber//////////////

var questionDom = document.querySelector(".question-box");
var answerAdom = document.querySelector(".answer-box")
var questionBank = [["Question 1 :   What is Javascript?","A - a coffrer","B - a car","C - a plane ","D - non of the above "],["Question 2:    What is MYSQL?","A - A plane ","B - a system of items","C - absolutely nothing ","D - All of the above "],["Question 3:    How is an Array different than an Object?","A - An array is longer","B - An object is a noun","C - they are the same","D - An array is a ray of light"],["Question 4:    What does the method BIKE do?","A - Assigns a value to a variable","B - Takes mom to lunch","C - Goes on a bike ride ","D - Never eats at McDonalds"]];
var questionNumber = 3;

questionDom.children[0].textContent = questionBank[questionNumber][0];
answerAdom.children[0].textContent = questionBank[questionNumber][1];
answerAdom.children[1].textContent = questionBank[questionNumber][2];
answerAdom.children[2].textContent = questionBank[questionNumber][3];
answerAdom.children[3].textContent = questionBank[questionNumber][4];

console.log(questionDom);
console.log(answerAdom);

///////////////////////////////////////////////////////////

//////Sets start quiz function.  This removes the welcome message and start quiz button and starts the quiz./////// 
var welcomeDom = document.querySelector(".welcome-message")

function startQuiz() {
welcomeDom.setAttribute("style", "display: none");
questionDom.setAttribute("style", "display: block");
setTimer()
}

console.log(welcomeDom)

/////////////////////////////////////////////////////////

///////////This function adds the end of quiz messgae after the timer reaches the end////////////////////////////

// var endOfQuizDom = document.querySelector(".end-of-quiz-message");
// var counter = document.querySelector(".countdown")

// console.log("end of quix dom:  " + endOfQuizDom);
// console.log("this is the counter DOM" + counter)

// function endOfQuizMessage(){
//     document.getElementById('end-of-quiz-message').innerHTML = "The time is over and the quiz is done";

// };


//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


//////////////////////Testing of radio button submit feature/////////////////////

function radiofunction(){
    var choiceMade = document.getElementsByName('test-box');

    for (i=0; i < choiceMade.length; i++){
        if(brad[i].checked)
        document.getElementById("result").innerHTML = "The answer is:" + choiceMade[i].value;
        
    }
    console.log("brad length:  " + choiceMade.length)
        console.log(choiceMade)
        console.log(choiceMade[0].checked)
        console.log(choiceMade[1].checked)
        console.log(choiceMade[2].checked)
        console.log(choiceMade[3].checked)
}

var brad = document.getElementsByName("test-box");
console.log(brad.length)

///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
