//timer
var timeEl = document.querySelector("#timer");
var mainEl = document.getElementById("main");
var timeLeft = 75;
var timerInterval = 1;
var coverPage = document.querySelector("#cover-page");
var quiz = document.querySelector("#quiz");

var startQuiz = document.querySelector("#start-quiz");



startQuiz.addEventListener("click", function(){
    question1();
    
});  

function question1(){
    var coverPage = document.querySelector("#cover-page"); 
    coverPage.innerHTML = ``;
    coverPage.innerHTML += `
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
            
            coverPage.innerHTML += `<p>Correct!</p>`
        }
    });
}

