var quiz_section = document.querySelectorAll(".quiz-section");

//Start
var coverPage = document.getElementById("cover-page");
var startQuiz = document.getElementById("start-quiz");

//Questions
// var question = document.getElementById("question");
var choices = document.getElementById("choices");
var timeLeft = document.getElementById("timeLeft");
var choice = document.querySelectorAll(".choice");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var questions = document.getElementById("questions");
var myQuestionsIndex = 0;

//Game Over
var submitButton = document.getElementById('submit');
var end = document.getElementById("end");
var endMessage = document.getElementById("end-message");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var error = document.getElementById("error-warning");



//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var timeLeft = 75;
var timerInterval = 0;

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



//Quiz

function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer){

    }

    function showResults(questions, quizContainer, resultsContainer){

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer,resultsContainer);
    }
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
//function showQuestions (questions, quizContainer)
function showQuestions() {
    var currentQ = myQuestions[myQuestionsIndex]

    console.log(questions)
    var yield = [];
    var choices;
    //nested loop -  using .length property to return specific number of elements in the array
    for(var i=0; i<questions.length; i++){
        choices = [];

    for(letter in questions[i].choices) {
        choices.push(            //I DON'T KNOW WHAT TO DO
            `<label>` + `<input type="button" name="question`+i+`" value="`+ letter+'">' + letter + ` : ` + questions[i].choices[letter] + `</label>`
        );
        }
    }

    //the push() method adds the specified elements to the end of an array and returns the new length of the array.
    yield.push(
        `<div class="questions">` + questions[myQuestionsIndex].question + `</div>` + `<div class="choices">` + choices.join('') + `</div>`
    );
    //join() method creates and returns a new string by concat 
    quizContainer.innerHTML = yield.join('');
}

//Start Quiz

startQuiz.addEventListener("click", 
function(){
    showQuestions(myQuestions, quizContainer);
       nextQuestion();   
    });  

//Next Question

var nextQuestion = function() {
    myQuestionsIndex++;

    if (myQuestionsIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }

}





//Results
function showResults (questions, quizContainer, resultsContainer) {
    var answerCon = quizContainer.querySelectorAll('.choices');

    var playerAnswer = '';
    var numberCorrect = 0;

    for(var i=0; i<questions.length; i++){
        playerAnswer = (answerCon[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if(playerAnswer===questions[i].correctAnswer){
            numberCorrect++;

            answerCon[i].style.color = 'lilac';
        }
        else{
            answerCon[i].style.color = 'red';
        }
    }

    resultsContainer.innerHTML = numberCorrect + ' out of ' + questions.length;
}

//generateQuiz
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);







// //DOM elements

// var quiz = document.querySelector("#quiz");

// // Other dom elements
// var questionsEl = document.querySelector("#questions");
// var choicesEl = document.querySelector("#options");
// var timerId;
// var currentQuestionIndex = 0;



// startQuiz.addEventListener("click", function(){
//     question1();
    
// });  

// function question1(){
//     var quiz = document.querySelector("#quiz"); 
//     coverPage.innerHTML = ``;
//     quiz.innerHTML += `
//         <h1>Commonly used data types DO NOT include:</h1>
//         <ol>
//             <li> <button id="wrong">Strings</button> </li>
//             <li> <button id="wrong">Boolean</button> </li>
//             <li> <button id="correct">Alerts</button> </li>
//             <li> <button id="wrong">Numbers</button> </li>
//         </ol>
//         <br>
//     `

//     var answer = document.querySelector("#correct");
//     var incorrect = document.querySelector("#wrong");


//     answer.addEventListener("click", function() {
//         if (answer){
//             return quiz.innerHTML += `<p>Correct!</p>`;
//         } 
//     });

// }

// // incorrect.addEventListener("click", function() {
// //     if (incorrect) {
// //         return quiz.innerHTML += 'Wrong';
// //     }
// // })

// quiz.addEventListener("click", function(){
//     question2();
// });

// function question2() {
//         var quiz = document.querySelector("#quiz"); 
//         quiz.innerHTML = ``;
//         quiz.innerHTML += `
//             <h1>The condition in an if / else statement is enclosed with ___________.</h1>
//             <ol>
//                 <li> <button id="wrong">quotes</button> </li>
//                 <li> <button id="wrong">curly brackets</button> </li>
//                 <li> <button id="correct">parenthesis</button> </li>
//                 <li> <button id="wrong">square brackets</button> </li>
//             </ol>
//             <br>
//         `
    
//         var answer = document.querySelector("#correct");
//         var incorrect = document.querySelector("#wrong");
    
//         answer.addEventListener("click", function() {
//             if (answer){  
//                 quiz.innerHTML += `<p>Correct!</p>`
//             } else if (incorrect){
//                 quiz.innerHTML += `<p>Wrong!</p>`
//             }
//         });

//     }

//     quiz.addEventListener("click", function(){
//         question3();
//     });

//     function question3() {
//         var quiz = document.querySelector("#quiz"); 
//         quiz.innerHTML = ``;
//         quiz.innerHTML += `
//             <h1>A very useful tool used during development and debugging for printing content to the debugger is:</h1>
//             <ol>
//                 <li> <button id="wrong">JavaScript</button> </li>
//                 <li> <button id="wrong">terminal/bash</button> </li>
//                 <li> <button id="wrong">for loops</button> </li>
//                 <li> <button id="correct">console.log</button> </li>
//             </ol>
//             <br>
//         `
    
//         var answer = document.querySelector("#correct");
//         var incorrect = document.querySelector("#wrong");
    
//         answer.addEventListener("click", function() {
//             if (answer){  
//                 quiz.innerHTML += `<p>Correct!</p>`
//             } else if (incorrect){
//                 quiz.innerHTML += `<p>Wrong!</p>`
//             }
//         });

//     }