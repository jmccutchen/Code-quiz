var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-btns");

var shuffledQuestions;
var currentQuestionIndex;

startButton.addEventListener("click", startGame);

// only the Start button is visible at start, when clicked, 
// the questions become visible
function startGame(){
    startButton.classList.add("hide");
    // below to shuffle questions at random based on number above or below zero
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    // makes questions visible once start button is clicked
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}; 

function showQuestion(question){
    //populates question text 
    questionElement.innerText = question.question; 
    question.answers.forEach(answer => {
// creates a button for each question, adds text of each answer, adds class of btn, 
// checks if answer is correct and adds data attribute if correct
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
// checks if answer is correct and adds data attribute if correct   
    if (answer.correct){
        button.dataset.correct = answer.correct
    };
    button.addEventListener("click", selectAnswer);
    answserButtonsElement.appendChild(button);
    });
};

function setNextQuestion(){
// resets questions
    resetState();
    // gets shuffled question at current index 
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function resetState() {
    // hides the next button
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
};

function selectAnswer(){

};

var questions = [
    {
      question: "What is the '!' called if used in a comparison?",
      answers: [
          {text: "Bang", correct: true},
          {text: "Equals", correct: false},
          {text: "EQUALS!", correct: false},
          {text: "Line dot", correct: false}
      ],  

      question: "Which is most specific?",
      answers: [
          {text: "ID", correct: true},
          {text: "class", correct: false},
          {text: "element", correct: false},
          {text: "minute", correct: false}
      ],

      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
          {text: "script", correct: true},
          {text: "js", correct: false},
          {text: "scripting", correct: false},
          {text: "link", correct: false}
      ],

      question: "How do you write \"Hello World\" in an alert box?",
      answers: [
          {text: "alert(\"Hello World\");", correct: true},
          {text: "msgBox(\"Hello World\");", correct: false},
          {text: "confirm(\"Hello World\");", correct: false},
          {text: "function(\"Hello World\");", correct: false}
      ],

      question: "How can you add a comment in a JavaScript?",
      answers: [
          {text: "//This is a comment", correct: true},
          {text: "<!--This is a comment-->", correct: false},
          {text: "'This is a comment'", correct: false},
          {text: "!This is a comment!", correct: false}
      ]
    }

]
