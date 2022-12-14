var questionEl = document.getElementById('question');
var timerEl = document.getElementById('timer');
var timeleft = 10;
var welcomeDiv = document.getElementById('welcome')
var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var anwersButton = document.getElementById('answer-buttons')
var nextClear = document.getElementById('next-clear')
// trying another way

var choiceOneEL = document.getElementById('btn-1');
var choiceTwoEL = document.getElementById('btn-2');
var choiceTreeEL = document.getElementById('btn-3');
var choiceFourEL = document.getElementById('btn-4');
 var questionIndex = 0;

 choiceOneEL.addEventListener('click', selectAnswer);
 choiceTwoEL.addEventListener('click', selectAnswer);
 choiceTreeEL.addEventListener('click', selectAnswer);
 choiceFourEL.addEventListener('click', selectAnswer);

startButton.addEventListener('click', startGame)


// question sections

var questionVar = [ {
    question: "Commonly used data types DO NOT include:",
    answers: [ 
         "1.quotes",
         "2.quotes",
         "3.quotes",
         "4.quotes"
   ]

 },
 {
    
        question: "skkslCommonly used data types DO NOT include:",
        answers: [ 
             "1.slskskquotes",
             "2.mkaquotes",
             "3.asmquotes",
             "4.sa,mquotes",
        ]

 }

]

//  button function
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    welcomeDiv.classList.add('hide')
    nextClear.classList.add('hide')
    
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  
    setTime();
   
}
// timer section

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
    questionIndex++
    questionEl.textContent = questionVar[questionIndex].text;
    choiceOneEL.textContent = questionVar[questionIndex].answers[0];
    choiceTwoEL.textContent = questionVar[questionIndex].answers[1];
    choiceTreeEL.textContent = questionVar[questionIndex].answers[2];
    choiceFourEL.textContent = questionVar[questionIndex].answers[3];
}
function selectAnswer(event) {
    event.preventDefault();
    console.log(event)

}
setCounterText();
// setTime();