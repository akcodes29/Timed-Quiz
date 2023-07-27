var quiz_section = document.querySelectorAll(".quiz-section");

//Start
var coverPage = document.getElementById("cover-page");
var startQuiz = document.getElementById("start-quiz");

//Questions
var choices = document.getElementById("choices");
var timeLeft = document.getElementById("timeLeft");
var choice = document.querySelectorAll(".choice");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var questions = document.getElementById("questions");
var myQuestionsIndex = 0;
var numberCorrect = 0;

//Game Over
var submitButton = document.getElementById('submit');
var end = document.getElementById("end");
var endMessage = document.getElementById("end-message");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var error = document.getElementById("error-warning");

//Storage
localStorage.setItem("scores", "");


//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var timeLeft = 75;
var timerInterval;

    function setTime() {
  
// Sets interval in variable
        timerInterval = setInterval(function() {
          timeLeft--;
          timeEl.textContent = timeLeft ;
      
          if(timeLeft === 0) {
            clearInterval(timerInterval);
          }
      
        }, 1000);
      }
    


//Questions
var myQuestions = [
    {
        question:"Commonly used data types DO NOT include:",
        choices:['Strings', 'Boolean', 'Alert', 'Number'],
        answer: 'Alert'

    },
    {
        question:"The condition in an if/else statement is enclosed with ________.",
        choices:  ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 'curly brackets'

    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'

    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 'quotes'

    },
    {
        question: "Arrays in JavaScript can be arranged to store:",
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'

    },
   
];

//Show  Questions
function showQuestions() {
    var currentQ = myQuestions[myQuestionsIndex]
    document.getElementById("question").innerHTML = currentQ.question;
    document.getElementById("a").textContent = currentQ.choices[0];
    document.getElementById("b").textContent = currentQ.choices[1];
    document.getElementById("c").textContent = currentQ.choices[2];
    document.getElementById("d").textContent = currentQ.choices[3];

}

//Start Quiz & hide quiz section
startQuiz.addEventListener("click", 
function(){
    setTime();
    document.getElementById("quizSection").style.display = "block";
    document.getElementById("cover-page").style.display = "none";
    showQuestions();
    });  

document.getElementById("a").addEventListener("click", checkAnswer);
document.getElementById("b").addEventListener("click", checkAnswer);
document.getElementById("c").addEventListener("click", checkAnswer);
document.getElementById("d").addEventListener("click", checkAnswer);

// Submit button
document.getElementById("showScores").addEventListener("click", showScores);

// Back to Quiz button
document.getElementById("back").addEventListener("click", back);

//Next Question
var nextQuestion = function() {
    myQuestionsIndex++;

    if (myQuestionsIndex < myQuestions.length) {
        showQuestions();
    } else {
        gameOver();
    }
}

//Check answers & take 10 seconds away for incorrect
function checkAnswer() {
    var answer = this.textContent;
    document.getElementById("results").style.display = "block";
    document.getElementById("correct").classList.add("hidden");
    document.getElementById("incorrect").classList.add("hidden");
    if(answer===myQuestions[myQuestionsIndex].answer){
        numberCorrect++;
        document.getElementById("correct").classList.remove("hidden");
        document.getElementById("correct").style.color = 'darkgreen';
    }
    else{
        document.getElementById("incorrect").classList.remove("hidden");
        document.getElementById("incorrect").style.color = 'red';
        timeLeft -= 10;
    }
 
 nextQuestion();
}

//Stops timer 
function gameOver() {
  clearInterval(timerInterval);
  showResults();
}

//Results
function showResults () {
    document.getElementById("results").style.display = "none";
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("score").innerHTML = numberCorrect + ' out of ' + myQuestions.length;
}

function showScores() {
    document.getElementById("end").style.display = "none";
    document.getElementById("scores").style.display = "block";
    var initials = document.getElementById("initials").value;
    var record = initials + " " + numberCorrect +"<br>";
    var records = localStorage.getItem("scores");
    records += record;
    console.log(records);
    localStorage.setItem("scores", records);
    document.getElementById("scoreboard").innerHTML = records; 
}

//Restart quiz
function back() {
    document.getElementById("scores").style.display = "none";
    document.getElementById("cover-page").style.display = "block";
}

