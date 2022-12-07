
var startButton = document.getElementById("start-btn");

var questionContainer = document.getElementById("questions-container");

var questionelement = document.getElementById("questions");

var answerBtn = document.getElementById("answer-btn");


var nextButton = document.getElementById("next-btn");

var points = document.getElementById("points");

var randomQuestion, questionIndex;

nextButton.addEventListener("click", () => {
    questionIndex++;
    setNextQuestion();
});


score.classList.add("hide");


startButton.addEventListener("click", startGame);
function startGame() {

    
console.log('start')
}


function setNextQuestion(){

}


function displayQuestion(){

}

function clearQuestion() {

}


function selectAnswer(e) {

}

function setStatusClass(_element) {
    if (randomQuestion.length = questionIndex + 1) {
        nextButton.classList.remove("hide");
      } else {
        startButton.innerText = "Restart Qiuz";
        startButton.classList.remove("hide");
      }
}

function clearStatusClass(_element) {
  _element.classList.remove("correct");
  _element.classList.remove("wrong");
}









































































var questions = [
  {
    question: "Hg is the chemical symbol of which element?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Iron", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Gold", correct: false },
    ],
  },
  {
    question: "Which email service is owned by Microsoft?",
    answers: [
      { text: "Gmail", correct: false },
      { text: "Yahoo", correct: false },
      { text: "Hotmail", correct: true },
      { text: "aol", correct: false },
    ],
  },
  {
    question: "Which country produces the most coffee in the world?",
    answers: [
      { text: "colombia", correct: false },
      { text: "Mexico", correct: false },
      { text: "USA", correct: false },
      { text: "Brazil", correct: true },
    ],
  },
  {
    question: "What is the capital of the us",
    answers: [
      { text: "Washington", correct: false },
      { text: "New York", correct: false },
      { text: "California", correct: false },
      { text: "Washington DC", correct: true },
    ],
  },
  {
    question: "What is the third sign of the zodiac?",
    answers: [
      { text: "cancer", correct: false },
      { text: "Leo", correct: false },
      { text: "Gemini", correct: true },
      { text: "Scorpio", correct: false },
    ],
  },
  {
    question: "How long does it take to hard boil an egg?",
    answers: [
      { text: "7 minutes", correct: true },
      { text: "3 minutes", correct: false },
      { text: "10 minutes", correct: false },
      { text: "15 minutes", correct: false },
    ],
  },
  {
    question: "Kodiak island is in which US state?",
    answers: [
      { text: "Florida", correct: false },
      { text: "Texes", correct: false },
      { text: "Alaska", correct: true },
      { text: "Vermont", correct: false },
    ],
  },
  {
    question: "How many pairs of wings does a bee have?",
    answers: [
      { text: "One", correct: false },
      { text: "Four", correct: false },
      { text: "Two", correct: true },
      { text: "Three", correct: false },
    ],
  },
  {
    question: "Who starts first in chess?",
    answers: [
      { text: "Black", correct: false },
      { text: "Best Wins", correct: false },
      { text: "Coin Flip", correct: false },
      { text: "White", correct: true },
    ],
  },
  {
    question: "Which country invented tea?",
    answers: [
      { text: "Spain", correct: false },
      { text: "China", correct: true },
      { text: "Asia", correct: false },
      { text: "Englan", correct: false },
    ],
  },
];
