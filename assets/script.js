var timerEl = document.getElementById('timer');
var timeleft = 10;
var welcomeDiv = document.getElementById('welcome')
var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var anwersButton = document.getElementById('answer-buttons')
var nextClear = document.getElementById('next-clear')
// anwersButton.addEventListener("click",)
startButton.addEventListener('click', startGame)

// // var question = [ {
// //     text: "question mark",
// //     choice1: "1.quotes",
// //     choice2: "2.quotes",
// //     choice3: "3.quotes",
// //     choice4: "4.quotes"

// // }

// ]

//  button function
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    welcomeDiv.classList.add('hide')
    nextClear.classList.add('hide')
    
    questionContainerElement.classList.remove('hide')
  
    setTime();
   
}


function setCounterText() {
    timerEl.textContent = timeleft
}


function setTime() {  
    var timerInterval = setInterval(function() {
   timerEl.textContent--;
   if (timerEl.textContent == 0) {
clearInterval(timerInterval);
   }
    },1000); 
    
}



function setNextQuestion() {

}
function selectAnswer() {

}
setCounterText();
// setTime();