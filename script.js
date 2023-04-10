//IDENTIFY THE GLOBAL VARIABLES
var _questionID = 0;
var _correctCount = 0;

//QUESTIONS AND ANSWERS
var _questions = [
  {
    question: "Which of the following is not a JavaScript data type?",
    answers: {
      A: "String",
      B: "Boolean",
      C: "Integer",
      D: "Object"
    },
    correctAnswer: "C"
  },
  {
    question: "What is the output of the following code?\n\nconsole.log(typeof 42);",
    answers: {
      A: "\"number\"",
      B: "\"string\"",
      C: "\"boolean\"",
      D: "\"undefined\""
    },
    correctAnswer: "A"
  },
  {
    question: "Which of the following is used to add a comment in JavaScript?",
    answers: {
      A: "//",
      B: "#",
      C: "/",
      D: "<!-- -->"
    },
    correctAnswer: "A"
  },
  {
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answers: {
      A: "To check if a variable is undefined",
      B: "To convert a variable to a string",
      C: "To check the data type of a variable",
      D: "To assign a value to a variable"
    },
    correctAnswer: "C"
  },
  {
    question: "Which of the following is a method of the `Array` object in JavaScript?",
    answers: {
      A: "length()",
      B: "reverse()",
      C: "toUpperCase()",
      D: "concat()"
    },
    correctAnswer: "B"
  }];

  //SETTING UP THE TIMER AND ITS INTERVAL

  //var showTimerInterval = setInterval (setShowTimer, 1000);

  //UPDATE AND DISPLAY THE TIMER ON A WEBPAGE.
  function setShowTimer() {

    if (time_start)//has been defined and is not null
    time--; //decrements the value of variable by 1
    if(time<= 0) { //the value of "time" is less than or equal to 0
    end_quiz(); //end_quiz" function is responsible for stopping the quiz and displaying the user's score.
    time = 0;    
    }
    document.getElementById("timer").innerHTML = time; //updates the timer displayed on the web page
}

  //START EVENT LISTENER
  //when the start button clicks, the timer and question start
  document.getElementById("start-quiz-button").addEventListener("click", function() {
    setQuizQuestions(); 
    document.getElementById("instructions-page").style.display = "none";
    document.getElementById("question-page").style.display = "block";
});


  document.getElementById("answer-buttons").addEventListener("click", function(ev) {
    checkAnswers(ev.target.dataset.answer);
    
});

  //QUESTION FUNCTION
  // will display questions and multiple choice answers
  function setQuizQuestions() {
    debugger;
    var html = "";
    var answers = _questions[_questionID].answers;
    document.getElementById("question").innerHTML = _questions[_questionID].question;
    document.getElementById("quiz-feedback").innerHTML = "";
    for (var answer in answers) {     
      html += '<button data-answer="'+answer +'" class="button">'+answer + ": "+ answers[answer]+'</button>';
      }
      document.getElementById("answer-buttons").innerHTML = html;
};

  function checkAnswers(aID){ 
    
    var feedback = document.getElementById("quiz-feedback");
    if (_questions[_questionID].correctAnswer == aID) {
      feedback.innerHTML = "Correct!";
      _correctCount = _correctCount + 1;
    }
    else{
      feedback.innerHTML = "Wrong!";
    }
    document.getElementById("my-score").innerHTML = _correctCount;

     
    if (_questionID < _questions.length - 1){
      _questionID = _questionID + 1;
      setQuizQuestions();
    }
    else {
      document.getElementById("final-score-page").style.display = "block";
    document.getElementById("question-page").style.display = "none";
    }
  }




  //NEED LOCAL STORAGE

  //SHOW HIGHSCORES
  

  //ENTER INITIALS
