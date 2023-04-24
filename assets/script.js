// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerId = document.getElementById("timerId");
let start = document.getElementById("start");
let quizContainer = document.getElementById("quiz-container");
let quizQuestion = document.getElementById("quiz-question");
let quizOptions = document.getElementById("quiz-options");
let quizScore = document.getElementById("quiz-score");
let startButton = document.getElementById("start-button");
let gameOver = document.getElementById("game-over");
let initialsInput = document.getElementById("initials");
let saveScore = document.getElementById("save-score");

const quizData = [
    {
      question: "Who is the Chargers franchise leader in rushing yards?",
      options: ["Darren Sproles", "LaDainian Tomlinson", "Ryan Matthews", "Austin Ekeler"],
      answer: "LaDainian Tomlinson",
    },
    {
      question: "In what year was the Chargers franchise founded?",
      options: ["1988", "1954", "1972", "1960"],
      answer: "1960",
    },
    {
      question: "How many super bowls have the Chargers won?",
      options: ["the Chargers have never won a super bowl.", "1", "2", "3"],
      answer: "the Chargers have never won a super bowl.",
    },
  ];

startButton.addEventListener("click", startQuiz)
function startQuiz() {
    start.style.display = "none";
    quizContainer.style.display = "block";
  showQuestion();
  startTimer();
}

function startTimer() {
    const timerInterval = setInterval(function () {
      timeLeft--;
      timerId.textContent = timeLeft;
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        showScore();
      }
  
    }, 1000);
  }

function showQuestion() {
    let question = quizData[currentQuestion];
    quizQuestion.innerText = question.question;
    quizOptions.innerHTML = "";
    for (let i = 0; i < question.options.length; i++) {
      const option = document.createElement("button");
      option.innerText = question.options[i];
      option.addEventListener("click", function () {
        checkAnswer();
      });
      quizOptions.appendChild(option);
    }
  }
  
  option.addEventListener("click", checkAnswer)
  function checkAnswer(selectedOption) {
    let question = quizData[currentQuestion];
    if (selectedOption === question.answer) {
      score++;
      quizScore.textContent = "Score: " + score;
    } else {
      timeLeft -= 10;
      timerId.textContent = timeLeft;
    }
    currentQuestion++;
    if (currentQuestion === quizData.length) {
      showScore();
    } else {
      showQuestion();
    }
  }
