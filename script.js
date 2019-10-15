var startButton = document.querySelector("#start-btn");
var questionContainerElement = document.querySelector(".question-container");


startButton.addEventListener("click", startGame);

// only the Start button is visible at start, when clicked, 
// the questions become visible
function startGame(){
    console.log("started");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    nextQuestion()
}; 

function nextQuestion(){

};

function selectAnswer(){

}

var questions = [
    {
      question: ,
      answsers: [
          {text: , correct: true},
          {text: , correct: false},
          {text: , correct: false},
          {text: , correct: false},
      ],  

      question: ,
      answsers: [
          {text: , correct: true},
          {text: , correct: false},
          {text: , correct: false},
          {text: , correct: false},
      ],

      question: ,
      answsers: [
          {text: , correct: true},
          {text: , correct: false},
          {text: , correct: false},
          {text: , correct: false},
      ],

      question: ,
      answsers: [
          {text: , correct: true},
          {text: , correct: false},
          {text: , correct: false},
          {text: , correct: false},
      ],

      question: ,
      answsers: [
          {text: , correct: true},
          {text: , correct: false},
          {text: , correct: false},
          {text: , correct: false},
      ]
    }

]
