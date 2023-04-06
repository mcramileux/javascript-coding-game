var questionContainer = document.getElementById('question');
var submitButton = document.getElementById('submit');

var questions = [
  {
    question: "Which of the following is not a JavaScript data type?",
    answers: {
      a: "String",
      b: "Boolean",
      c: "Integer",
      d: "Object"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the output of the following code?\n\nconsole.log(typeof 42);",
    answers: {
      a: "\"number\"",
      b: "\"string\"",
      c: "\"boolean\"",
      d: "\"undefined\""
    },
    correctAnswer: "a"
  },
  {
    question: "What is the correct syntax to declare a JavaScript variable?",
    answers: {
      a: "var = myVariable;",
      b: "myVariable = var;",
      c: "var myVariable;",
      d: "myVariable var;"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following is used to add a comment in JavaScript?",
    answers: {
      a: "//",
      b: "#",
      c: "/",
      d: "<!-- -->"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answers: {
      a: "To check if a variable is undefined",
      b: "To convert a variable to a string",
      c: "To check the data type of a variable",
      d: "To assign a value to a variable"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following is a method of the `Array` object in JavaScript?",
    answers: {
      a: "length()",
      b: "reverse()",
      c: "toUpperCase()",
      d: "concat()"
    },
    correctAnswer: "b"
  }]

  addEventListener