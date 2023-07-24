var quiz_section = document.querySelectorAll(".quiz-section");

//Start
var coverPage = document.getElementById("cover-page");
var startQuiz = document.getElementById("start-quiz");

//Questions
var quiz = document.getElementById("quiz");
var question = document.getElementById("prompt");
var choices = document.getElementById("choices");
var timeLeft = document.getElementById("timeLeft");
var choice = document.querySelectorAll(".choice");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

//Game Over
var end = document.getElementById("end");
var endMessage = document.getElementById("end-message");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var submitScore = document.getElementById("submit");
var error = document.getElementById("error-warning");



//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var timeLeft = 75;
var timerInterval = 0;





//Timer
    function setTime() {
  
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          timeLeft--;
          timeEl.textContent = timeLeft ;
      
          if(timeLeft === 0) {
            clearInterval(timerInterval);
          }
      
        }, 1000);
      }
    
      setTime();






//DOM elements

var quiz = document.querySelector("#quiz");

// Other dom elements
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#options");
var timerId;
var currentQuestionIndex = 0;



startQuiz.addEventListener("click", function(){
    question1();
    
});  

function question1(){
    var quiz = document.querySelector("#quiz"); 
    coverPage.innerHTML = ``;
    quiz.innerHTML += `
        <h1>Commonly used data types DO NOT include:</h1>
        <ol>
            <li> <button id="wrong">Strings</button> </li>
            <li> <button id="wrong">Boolean</button> </li>
            <li> <button id="correct">Alerts</button> </li>
            <li> <button id="wrong">Numbers</button> </li>
        </ol>
        <br>
    `

    var answer = document.querySelector("#correct");
    var incorrect = document.querySelector("#wrong");


    answer.addEventListener("click", function() {
        if (answer){
            return quiz.innerHTML += `<p>Correct!</p>`;
        } 
    });

}

// incorrect.addEventListener("click", function() {
//     if (incorrect) {
//         return quiz.innerHTML += 'Wrong';
//     }
// })

quiz.addEventListener("click", function(){
    question2();
});

function question2() {
        var quiz = document.querySelector("#quiz"); 
        quiz.innerHTML = ``;
        quiz.innerHTML += `
            <h1>The condition in an if / else statement is enclosed with ___________.</h1>
            <ol>
                <li> <button id="wrong">quotes</button> </li>
                <li> <button id="wrong">curly brackets</button> </li>
                <li> <button id="correct">parenthesis</button> </li>
                <li> <button id="wrong">square brackets</button> </li>
            </ol>
            <br>
        `
    
        var answer = document.querySelector("#correct");
        var incorrect = document.querySelector("#wrong");
    
        answer.addEventListener("click", function() {
            if (answer){  
                quiz.innerHTML += `<p>Correct!</p>`
            } else if (incorrect){
                quiz.innerHTML += `<p>Wrong!</p>`
            }
        });

    }

    quiz.addEventListener("click", function(){
        question3();
    });

    function question3() {
        var quiz = document.querySelector("#quiz"); 
        quiz.innerHTML = ``;
        quiz.innerHTML += `
            <h1>A very useful tool used during development and debugging for printing content to the debugger is:</h1>
            <ol>
                <li> <button id="wrong">JavaScript</button> </li>
                <li> <button id="wrong">terminal/bash</button> </li>
                <li> <button id="wrong">for loops</button> </li>
                <li> <button id="correct">console.log</button> </li>
            </ol>
            <br>
        `
    
        var answer = document.querySelector("#correct");
        var incorrect = document.querySelector("#wrong");
    
        answer.addEventListener("click", function() {
            if (answer){  
                quiz.innerHTML += `<p>Correct!</p>`
            } else if (incorrect){
                quiz.innerHTML += `<p>Wrong!</p>`
            }
        });

    }