
startButton.addEventListener("click", countDown);

function endScreen(){
    questionContainerElement.classList.add("hide");
    endContainer.classList.remove("hide");
    startOverButton.classList.remove("hide");
    clearHighButton.classList.remove("hide");
}
var myInterval= "";
var timeLeft = 75;

function countDown() {
    
    myInterval = setInterval(function() {
        timerValue.textContent = "Timer: " + timeLeft;
    
        if (timeLeft <= 0) {
            clearInterval(myInterval);
            endScreen();
        }
        else {
            timeLeft--;
           }
        }, 1000);
}