var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var viewScores = document.querySelector("#highScores");
var startOverButton = document.querySelector("#start-over-btn");
var clearHighButton = document.querySelector("#clear-high-btn");
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-btns");
var startContainer = document.querySelector("#start-container");
var endContainer = document.querySelector("#end-container");
var endButton = document.querySelector("#end-button");
var yourScore = document.querySelector("#yourScore");
var startOver = document.querySelector("#start-over-btn");
var submitButton = document.querySelector("#submit-score");
var timerValue = document.querySelector("#timer");
var wrongMessage = document.querySelector("#wrongMessage");
var correctMessage = document.querySelector("#correctMessage");
var initials = document.querySelector("#initials");
var scoreContainer = document.querySelector("#scoreBox");
var scoreBoard = document.querySelector("#scoreBoard");
var closeButton = document.querySelector("#close-btn");
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
    startContainer.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}; 

function showQuestion(question){
    //populates question text 
    questionElement.innerText = question.question 
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
    answerButtonsElement.appendChild(button);
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
    // loop through child elements of answerButtonsElement
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
};

function selectAnswer(e){
    // what button was clicked on
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
// converts answers to an array and sets the status based on if answer was correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    // if there are more questions then show Next button
    if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove("hide");
    } else {

        endButton.classList.remove("hide");
    }

    // if answer clicked is correct, give correct message, if not then wrong answer
    if (e.target= correct){
        correctMessage.classList.remove ("hide");
        var correctAudio = new Audio('070-who2.wav');
        correctAudio.play();
    }  else {
        wrongMessage.classList.remove ("hide");
        function wrongAnswer(){
            timeLeft -=15;
        };
        wrongAnswer();
        var wrongAudio = new Audio('haha.mp3');
        wrongAudio.play();
       
    }
    
};
// hide end content and reveal beginning content 
startOver.addEventListener("click", function(){
        endContainer.classList.add("hide");
        startOverButton.classList.add("hide");
        clearHighButton.classList.add("hide");
        startContainer.classList.remove("hide");
        startButton.classList.remove("hide");
        submitButton.classList.add("hide");
        timerValue.textContent = "Timer: 75";
        scoreContainer.classList.add("hide")
});

endButton.addEventListener("click", function(){
        questionContainerElement.classList.add("hide");
        endContainer.classList.remove("hide");
        startOverButton.classList.remove("hide");
        clearHighButton.classList.remove("hide");
        submitButton.classList.remove("hide");
        endButton.classList.add("hide");
        clearInterval(myInterval);
        var theScore = timeLeft + 1;
        yourScore.textContent= "Your score is: " + theScore;
        wrongMessage.classList.add ("hide");
        correctMessage.classList.add ("hide");

});




var scores = []

submitButton.addEventListener("click", function(){
    // creates object for scores and pushes to array scores
    ;
    var scoreObj = {
        name: initials.value,
        score: timeLeft +1
    }
    scores.push(scoreObj);
    // empties initial box
    initials.value= "";
    var scoreJSON = JSON.stringify(scores);
    localStorage.setItem("scores", scoreJSON);
    
})


clearHighButton.addEventListener("click", function(){
    localStorage.clear();
});

viewScores.addEventListener("click", function(){
    // event.preventDefault();
    scoreContainer.classList.remove("hide");
    var storedScore = JSON.parse(localStorage.getItem("scores"));
    

    // I can't get this fn thing to work, spent 3 hours on it, I give up

    // create a new li for each storedScore
    for (let i = 0; i < scores.length; i++) {
        var newli= document.createElement("li");
        var init = localStorage.scores(i);
        var scoreNumber = localStorage.getItem(init);
        newli.textContent = (init + "   " + scoreNumber);
        newli.setAttribute("data-index", i);
        scoreBoard.appendChild(newli);
       
    }
    
})

// when next button clicked, it increments question index
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
    wrongMessage.classList.add ("hide");
    correctMessage.classList.add ("hide");

});

// function used above to set status
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
    ;
}

// closes the scoreboard
closeButton.addEventListener("click", function (){
    scoreContainer.classList.add("hide");
})

var questions = [
    {
      question: "What is the '!' called if used in a comparison?",
      answers: [
          {text: "Bang", correct: true},
          {text: "Equals", correct: false},
          {text: "EQUALS!", correct: false},
          {text: "Line dot", correct: false}
      ]
    },  
    {
      question: "Which is most specific?",
      answers: [
          {text: "class", correct: false},
          {text: "ID", correct: true},
          {text: "element", correct: false},
          {text: "minute", correct: false}
      ]
    },
    {

      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
          {text: "script", correct: true},
          {text: "js", correct: false},
          {text: "scripting", correct: false},
          {text: "link", correct: false}
      ]
    },
    {

      question: "How do you write \"Hello World\" in an alert box?",
      answers: [
          {text: "alert(\"Hello World\");", correct: true},
          {text: "msgBox(\"Hello World\");", correct: false},
          {text: "confirm(\"Hello World\");", correct: false},
          {text: "function(\"Hello World\");", correct: false}
      ]
    },
    {

      question: "How can you add a comment in a JavaScript?",
      answers: [
          {text: "<!--This is a comment-->", correct: false},
          {text: "'This is a comment'", correct: false},
          {text: "!This is a comment!", correct: false},
          {text: "//This is a comment", correct: true}
      ]
    }

]
