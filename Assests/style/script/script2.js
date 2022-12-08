var startButton = document.getElementById("start-btn");

var questionContainer = document.getElementById("questions-container");

var questionElement = document.getElementById("questions");


var answerBtn = document.getElementById("answer-btn");

var score = 0;

var randomQuestion, questionIndex;

startButton.addEventListener("click", startGame);

var highScore = JSON.parse(localStorage.getItem('score'));

function startGame() {
  clearQuestion();
console.log(startGame)
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  questionIndex = 0;
  randomQuestion = questions.sort(() => Math.random() - 0.5);
  displayQuestion(randomQuestion[questionIndex]);
  document.getElementById('score').textContent = "Score: " + score;
  document.getElementById('high-score').textContent = "High score:" + highScore
  var timeleft = 15;
    var downTimer = setInterval(function () {
      if (timeleft <= -1) {
        clearInterval(downTimer);
        clearQuestion();
        document.getElementById('questions').textContent = " Your Score : " + score;
        startButton.innerText = "Game Over";
        startButton.classList.remove("hide");
        
       
      } else {
        document.getElementById("countdown").innerHTML =
          timeleft + " seconds remaining  ";

      }

      timeleft -= 1;
    }, 1000);


}

function setNextQuestion() {
clearQuestion()
  if (questionIndex < randomQuestion.length) {
    displayQuestion(randomQuestion[questionIndex]);
  } else {
    endGame();
  }
}

function endGame() {

  
  
  document.getElementById('questions').textContent = " Your Score : " + score;
  
  startButton.innerText = "Game Over";
  startButton.classList.remove("hide");
  
  clearQuestion()


  }
  




function displayQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerBtn.appendChild(button);
  });
}

function clearQuestion() {
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
 while(questionElement.firstChild){
    questionElement.removeChild(questionElement.firstChild)
    startButton.innerText = "Restart Qiuz";
    startButton.classList.add("hide");
  }
}}


function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  if (correct) {
    score+=10;
    console.log(score)
    document.getElementById('score').textContent = "Score: " + score;
   localStorage.setItem('score' , JSON.stringify(score));
  }

  questionIndex++;
  setNextQuestion();
}









var questions = [
  {
    question: "Hg is the chemical symbol of which element?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Iron", wrong: false },
      { text: "Oxygen", wrong: false },
      { text: "Gold", wrong: false },
    ],
  },
  {
    question: "Which email service is owned by Microsoft?",
    answers: [
      { text: "Gmail", wrong: false },
      { text: "Yahoo", wrong: false },
      { text: "Hotmail", correct: true },
      { text: "aol", cwrong: false },
    ],
  },
  {
    question: "Which country produces the most coffee in the world?",
    answers: [
      { text: "colombia", wrong: false },
      { text: "Mexico", wrong: false },
      { text: "USA", wrong: false },
      { text: "Brazil", correct: true },
    ],
  },
  {
    question: "What is the capital of the us",
    answers: [
      { text: "Washington", wrong: false },
      { text: "New York", wrong: false },
      { text: "California", wrong: false },
      { text: "Washington DC", correct: true },
    ],
  },
  {
    question: "What is the third sign of the zodiac?",
    answers: [
      { text: "cancer", wrong: false },
      { text: "Leo", wrong: false },
      { text: "Gemini", correct: true },
      { text: "Scorpio", wrong: false },
    ],
  },
  {
    question: "How long does it take to hard boil an egg?",
    answers: [
      { text: "7 minutes", correct: true },
      { text: "3 minutes", wrong: false },
      { text: "10 minutes", wrong: false },
      { text: "15 minutes", wrong: false },
    ],
  },
  {
    question: "Kodiak island is in which US state?",
    answers: [
      { text: "Florida", wrong: false },
      { text: "Texes", wrong: false },
      { text: "Alaska", correct: true },
      { text: "Vermont", wrong: false },
    ],
  },
  {
    question: "How many pairs of wings does a bee have?",
    answers: [
      { text: "One", wrong: false },
      { text: "Four", wrong: false },
      { text: "Two", correct: true },
      { text: "Three", wrong: false },
    ],
  },
  {
    question: "Who starts first in chess?",
    answers: [
      { text: "Black", wrong: false },
      { text: "Best Wins", wrong: false },
      { text: "Coin Flip", wrong: false },
      { text: "White", correct: true },
    ],
  },
  {
    question: "Which country invented tea?",
    answers: [
      { text: "Spain", wrong: false },
      { text: "China", correct: true },
      { text: "Asia", wrong: false },
      { text: "Englan", wrong: false },
    ],
  }]
