var startButton = document.getElementById("start-button")
var nextButton = document.getElementById("next-button")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", ( => {
  currentQuestionIndex++
  setNextQuestion()
}))

function startGame() {
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(()=> Math.random () - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion () {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("button")

    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answer.ButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer (e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1)
 nextButton.classList.remove("hide")
} else {
  startButton.innerText = "Restart"
  startButton.classList.remove("hide")
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}
var questions = [
  {
    question: "Which language runs in a web browser?",
    answer: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answer: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Integer", correct: true },
      { text: "Object", correct: false }
    ]
  },
  {
    question: "What is the output of the following code?\n\nconsole.log(typeof 42);",
    answer: [
      { text: "\"number\"", correct: true },
      { text: "\"string\"", correct: false },
      { text: "\"boolean\"", correct: false },
      { text: "\"undefined\"", correct: false }
    ]
  },
  {
    question: "What is the correct syntax to declare a JavaScript variable?",
    answer: [
      { text: "var = myVariable;", correct: false },
      { text: "myVariable = var;", correct: false },
      { text: "var myVariable;", correct: true },
      { text: "myVariable var;", correct: false }
    ]
  },
  {
    question: "Which of the following is used to add a comment in JavaScript?",
    answer: [
      { text: "//", correct: true },
      { text: "#", correct: false },
      { text: "/", correct: false },
      { text: "<!-- -->", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answer: [
      { text: "To check if a variable is undefined", correct: false },
      { text: "To convert a variable to a string", correct: false },
      { text: "To check the data type of a variable", correct: true },
      { text: "To assign a value to a variable", correct: false }
    ]
  },
  {
    question: "Which of the following is a method of the `Array` object in JavaScript?",
    answer: [
      { text: "length()", correct: false },
      { text: "reverse()", correct: true },
      { text: "toUpperCase()", correct: false },
      { text: "concat()", correct: false }
    ]
  },



]