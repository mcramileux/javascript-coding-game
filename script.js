//IDENTIFY THE GLOBAL VARIABLES
var _questionID = 0;
var _correctCount = 0;
var _secondsLeft = 60; //changing to 10seconds for debugging

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
      D: "$"
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
  var showTimer = document.querySelector("show-timer");
  var timer = document.getElementById("timer");
  var timeEl = document.getElementById("timer-score");
  var timerInterval;

  function setTime() {
    timerInterval = setInterval (function() {
      _secondsLeft--;
      timeEl.textContent = _secondsLeft;

      if (_secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert("TIME'S UP!");
        timeEl.textContent = _secondsLeft;

    document.getElementById("final-score-page").style.display = "block";
    document.getElementById("question-page").style.display = "none";
    endQuiz();
      }
    },  1000);
  
    //var timerInterval = setInterval(updateShowTimer, 1000);
  }

  function sendMessage(){
    //alert the user that the time is up
 }
  
  //START EVENT LISTENER
  //when the start button clicks, the timer and question start
    document.getElementById("start-quiz-button").addEventListener("click", function() {
    setQuizQuestions(); 
    document.getElementById("instructions-page").style.display = "none";
    document.getElementById("question-page").style.display = "block";
      setTime(); 
});

    document.getElementById("answer-buttons").addEventListener("click", function(ev) {
      if(ev.target.tagName == "DIV"){
        return
      } else {
        checkAnswers(ev.target.dataset.answer);
      }   
  });
  
  //QUESTION FUNCTION
  // will display questions and multiple choice answers
  function setQuizQuestions() {
    //debugger;
    var html = "";
    var answers = _questions[_questionID].answers;
    document.getElementById("question").innerHTML = _questions[_questionID].question;
    //document.getElementById("quiz-feedback").innerHTML = "";
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
      _secondsLeft -= 10;
    }
    document.getElementById("my-score").innerHTML = _correctCount;

     
    if (_questionID < _questions.length - 1){
      _questionID = _questionID + 1;
      setQuizQuestions();
    }
    else {
    document.getElementById("final-score-page").style.display = "block";
    document.getElementById("question-page").style.display = "none";
    endQuiz();
    }
  }

  //SHOW HIGH SCORES---ADD MORE
  // function endQuiz() {
  //   clearInterval(timerInterval);
  //   showHighScores();
  //   document.getElementById("question").style.display = "none";
  //   document.getElementById("my-score").textContent
  // }

  //ENTER INITIALS---ADD MORE
    var enterInitials = document.getElementById("main-button");
    var initials = document.getElementById("enter-initials");
    enterInitials.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(initials.value);
    });
    saveHighScore = ev => {
      console.log("clicked the submit button");
      ev.preventDefault();
    };

  //SAVING THE SCORE 
  saveSubmitButton.addEventListener('click', function () {
    var users = JSON.parse(localStorage.getItem("enterInitials")) || [];
    var nameUser = document.getElementById('enterInitials').value;
    var data = { name: enterInitials, score: saveScores };

    enterInitials.push(data);
    localStorage.setItem('enterInitials', JSON.stringify(users));
    confirm ("Your score has been saved");
    document.getElementById("confirmButton").addEventListener("click", function() {
        document.getElementById("enterInitials").value = "";
      });

  });

  // // Retrieve the high scores from local storage
  //   function showHighScores() {
  //    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
      
  //    var highScoresRank = document.getElementById('high-scores-rank');
  //     highScoresList.innerHTML = '';
      
  //     highScores.forEach(score => {
  //       var li = document.createElement('li');
  //       li.innerText = `${initials} - ${score}`;
  //       highScoresRank.appendChild(li);
  //     });
  //   }
    // clearInterval(timerInterval);
    // showHighScores();
    // document.getElementById("question").style.display = "none";
    // document.getElementById("my-score").textContent
//STILL MISSING FROM THE ACCEPTANCE CRITERIA
  //NEED LOCAL STORAGE
  //VIEW HIGH SCORES IN FRONT PAGE
  //CLEAR HIGH SCORES
  //SHOW HIGH SCORES
  //CAN Click HIGH SCORES FROM THE MAIN PAGE
  

