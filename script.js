var quiz_section = document.querySelectorAll(".quiz-section");

//Start
var coverPage = document.getElementById("cover-page");
var startQuiz = document.getElementById("start-quiz");

//Questions
var choices = document.getElementById("choices");
var timeLeft = document.getElementById("timeLeft");
var choice = document.querySelectorAll(".choice");
var correct = document.getElementById("correct");

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
if (!localStorage.getItem("scores")) {
    localStorage.setItem("scores", "");

}


//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var timeLeft = 75;
var timerInterval;

    function setTime() {
  // Sets interval in variable
        timerInterval = setInterval(function() {
          timeLeft--;
          timeEl.textContent = "Time: " + timeLeft ;
      
          if(timeLeft === 0) {
            gameOver();
          }
      
        }, 1000);
      }
    


//Questions
var myQuestions = [
    {
        question:"In which year did Taylor Swift release her debut self-titled album?",
        choices:['2005', '2006', '2007', '2008'],
        answer: '2006'

    },
    {
        question:"Which album features the hit single 'Shake It Off,' one of Taylor Swift's most successful and recognizable songs?",
        choices:  ['Speak Now', 'Fearless', '1989', 'Red'],
        answer: '1989'

    },
    {
        question: "How many Grammy Awards has Taylor Swift won as of 2023?",
        choices: ['12', '13', '22', '52'],
        answer: '12'

    },
    {
        question: "What is the title of Taylor Swift's documentary that premiered on Netflix in 2020, providing an intimate look into her life and career?",
        choices: ['Teardrops From My Guitar', 'The ERAS Tour', 'Miss Americana', 'Taylor Swift: The Story of Us'],
        answer: 'Miss Americana'

    },
    {
        question: "Who is the number 1 enemy of Taylor Swift and her fandom?",
        choices: ['Joe Alwyn', 'Scooter Braun', 'Beyonce', 'Selena Gomez'],
        answer: 'Scooter Braun'

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
    myQuestionsIndex = 0;
    timeLeft = 75;
    numberCorrect = 0;
    document.getElementById("correct").classList.add("hidden");
    document.getElementById("incorrect").classList.add("hidden");
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
document.getElementById("view").addEventListener("click", view);
document.getElementById("clear").addEventListener("click", clear);

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
    document.getElementById("timer").innerHTML = "Time: 0";
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

function view() {
    document.getElementById("end").style.display = "none";
    document.getElementById("scores").style.display = "block";
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("cover-page").style.display = "none";
    var records = localStorage.getItem("scores");
    document.getElementById("scoreboard").innerHTML = records; 
    document.getElementById("timer").innerHTML = "Time: 0";
    clearInterval(timerInterval);
    document.getElementById("correct").classList.add("hidden");
    document.getElementById("incorrect").classList.add("hidden");

}

function clear() {
    document.getElementById("scoreboard").innerHTML = ""; 
    localStorage.setItem("scores", "");
}

