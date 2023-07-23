var quiz_section = document.querySelectorAll(".quiz-section");

//Start
var coverPage = document.getElementById("cover-page");
var startButton = document.getElementById("start-quiz");

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





//  //Questions
// class Question {
//     constructor(question, choices, indexOfCorrectChoice) {
//       this.question = question;
//       this.choices = choices;
//       this.indexOfCorrectChoice = indexOfCorrectChoice;
//     }
//   }
//   const QUESTION_1 = new Question("Commonly used data types DO NOT include: ", 
//     ["Strings", "Booleans", "Alerts", "Numbers"], 2);
//   const QUESTION_2 = new Question("The condition in an if / else statement is enclosed within ____.", 
//     ["Quotes", "Curly brackets", "Parentheses", "Square brackets"], 2);
//   const QUESTION_3 = new Question("Arrays in JavaScript can be used to store ____.", 
//     ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], 3);
//   const QUESTION_4 = new Question("String values must be enclosed within _____ when being assigned to variables.", 
//     ["Commas", "Curly brackets", "Quotes", "Parentheses"], 2);
//   const QUESTION_5 = new Question("A very useful tool used during development and debugging for printing content to the debugger is: ", 
//     ["JavaScript", "Terminal/Bash", "For Loops", "console.log"], 3);
//   const QUESTION_LIST = [QUESTION_1, QUESTION_2, QUESTION_3, QUESTION_4, QUESTION_5];
  
//   let currentQuestion = 0;
  
//   let totalTime = 75;
//   let totalTimeInterval;
//   let choiceStatusTimeout; 

// var processChoices;
// var processInput = document.getElementById("processInput");

// startButton.addEventListener('click', startButton);
// choices.addEventListener('click', processChoices);
// submitScore.addEventListener('submit', processInput);

// //start game
//     function startButton() {
//         showElement(quiz);
        
//         setTime();  
//         displayQuestion();
      
//         startTimer();
//       }


// //Timer
//     function setTime() {
  
//         // Sets interval in variable
//         var timerInterval = setInterval(function() {
//           timeLeft--;
//           timeEl.textContent = timeLeft ;
      
//           if(timeLeft === 0) {
//             clearInterval(timerInterval);
//           }
      
//         }, 1000);
//       }
    
//       setTime();

// //hide elements? 
// function showElement(siblingList, showElement) {
//     for (element of siblingList) {
//       hideElement(element);
//     }
//     showElement.classList.remove("hidden");
//   } 
  
//   function hideElement(element) {
//     if (!element.classList.contains("hidden")) {
//       element.classList.add("hidden");
//     }
//   }


//   /******** QUESTIONS ********/ 
// function displayQuestion() {
//     QUESTION.textContent = QUESTION_LIST[currentQuestion].question;
  
//     displayChoiceList();
//   }
  
//   function displayChoiceList() {
//     CHOICES.innerHTML = "";
  
//     QUESTION_LIST[currentQuestion].choices.forEach(function(answer, index) {
//       const li = document.createElement("li");
//       li.dataset.index = index;
//       const button = document.createElement("button");
//       button.textContent = (index + 1) + ". " + answer;
//       li.appendChild(button);
//       CHOICES.appendChild(li);
//     });
//   }
  
//   //when user answers a question
//   function processChoice(event) {
//     const userChoice = parseInt(event.target.parentElement.dataset.index);
  
//     resetChoiceStatusEffects();
//     checkChoice(userChoice);
//     getNextQuestion();
//   }
  
//   //Displaying choice statuses
//   function resetChoiceStatusEffects() {
//     clearTimeout(choiceStatusTimeout);
//     styleTimeRemainingDefault();
//   }
  
//   function styleTimeRemainingDefault() {
//     TIME_REMAINING.style.color = "#4616E8";
//   }
  
//   function styleTimeRemainingWrong() {
//     TIME_REMAINING.style.color = "#E81648";
//   }
  
//   function checkChoice(userChoice) {
//     if (isChoiceCorrect(userChoice)) {
//       displayCorrectChoiceEffects();
//     } else {
//       displayWrongChoiceEffects();
//     }
//   }
  
//   function isChoiceCorrect(choice) {
//     return choice === QUESTION_LIST[currentQuestion].indexOfCorrectChoice;
//   }
  
//   function displayWrongChoiceEffects() {
//     deductTimeBy(10);
  
//     styleTimeRemainingWrong();
//     showElement(CHOICE_STATUSES, WRONG);
  
//     choiceStatusTimeout = setTimeout(function() {
//       hideElement(WRONG);
//       styleTimeRemainingDefault();
//     }, 1000);
//   }
  
//   function deductTimeBy(seconds) {
//     timeLeft -= seconds;
//     checkTime();
//     displayTime();
//   }
  
//   function displayCorrectChoiceEffects() {
//     showElement(CHOICE_STATUSES, CORRECT);
  
//     choiceStatusTimeout = setTimeout(function() {
//       hideElement(CORRECT);
//     }, 1000);
//   }
  
//   //Get next question
//   function getNextQuestion() {
//     currentQuestion++;
//     if (currentQuestion >= QUESTION_LIST.length) {
//       endGame();
//     } else {
//       displayQuestion();
//     }
//   }


    //Start quiz

    // function startQuiz(){
    //     getQuestion();
    // }

    // function getQuestion() {
    //     var currentQuestion = questions[currentQuestionIndex];
    //     var promptEl = document.getElementById("prompt")
    //         promptEl.textContent = currentQuestion.prompt;
    //         choicesEl.innerHTML = "";
    //         currentQuestion.options.forEach(function(choice, i){
    //             var choiceBtn = document.createElement("button");
    //             choiceBtn.setAttribute("value", choice);
    //             choiceBtn.textContent = i + 1 + "." + choice;
    //             choiceBtn.onclick = questionClick;
    //             choicesEl.appendChild (choiceBtn);
    //         });
    // }













//DOM elements

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