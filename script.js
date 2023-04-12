//IDENTIFY THE GLOBAL VARIABLES
var _questionID = 0;
var _correctCount = 0;
var _secondsLeft = 60; //changing to 10seconds for debugging
var _qWait = 0;

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
      _secondsLeft -= 10;
    }
    document.getElementById("my-score").innerHTML = _correctCount;

    
    _qWait = setTimeout(function() {
        if (_questionID < _questions.length - 1){
        _questionID = _questionID + 1;
        setQuizQuestions();
    }
       else {
        document.getElementById("final-score-page").style.display = "block";
        document.getElementById("question-page").style.display = "none";
        endQuiz();
    }
      }, 4000);
      
  };

  //SHOW HIGH SCORES---ADD MORE
  function endQuiz() {
    timeEl.textContent = "0";
    clearInterval(timerInterval);
    showHighScores();
  }

  //ENTER INITIALS---ADD MORE
    document.getElementById("main-button").addEventListener("click", (e) => {
      e.preventDefault();
      console.log(document.getElementById("enter-initials").value);
      document.getElementById("final-score-page").style.display = "none";
      saveHighScore();
      showHighScores();
    });

    //SAVING THE SCORE 
    function saveHighScore() {
    var highScoreList = localStorage.getItem("highScoreList");
    var initials = document.getElementById("enter-initials").value;
    var data = { name: initials, score: _correctCount };
        if (highScoreList == null) {
          highScoreList = [];  
    } 
    else {
      highScoreList = JSON.parse(highScoreList); 
    }

    highScoreList.push(data);
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
    _correctCount = 0;
    };

    // Retrieve the high scores from local storage
    function showHighScores() {
      var highScoreList = localStorage.getItem("highScoreList");
      var html = "";
      document.getElementById("high-score-page").style.display = "block";
      if (highScoreList != null) {
           highScoreList = JSON.parse(highScoreList);
      }

    //  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
      
    //  var highScoresRank = document.getElementById('high-scores-rank');
    //   highScoresList.innerHTML = '';
      
      highScoreList.forEach(data => {
        html += '<li>'+data.name + '-'+data.score+'</li>';
      });
      if (html !=""){
        document.getElementById('show-highscores').innerHTML = '<ul>'+html+'</ul>';
    }
  //STILL MISSING FROM THE ACCEPTANCE CRITERIA
  //VIEW HIGH SCORES IN FRONT PAGE
  //CLEAR HIGH SCORES
  //SHOW HIGH SCORES
  //CAN Click HIGH SCORES FROM THE MAIN PAGE
  
  };