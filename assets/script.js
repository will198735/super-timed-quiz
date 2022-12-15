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
         "1.strings",
         "2.booleans",
         "3.alerts",
         "4.numbers"
   ]

 },
 {
    
        question: "The acondition in an if / else statement is enclosed within______.",
        answers: [ 
             "1.quotes",
             "2.curly brackets",
             "3.parenthesse",
             "4.square brackets",
        ]

 },
 {
    question: "Arrays in JavaScript can be used to store______.",
    answers: [ 
         "1.numbers and strings",
         "2.others arrays",
         "3.booleans ",
         "4.all of the above",
    ]

 },
 {
    question: "String values must be enclosed  within______ when being assigned to variables.",
    answers: [ 
         "1.commas ",
         "2.curly brackets",
         "3.parenthesse",
         "4.couotes",
    ]

 },
 {
    question: "A very useful tool used during development and debugging for printing  content to the debugger is:",
    answers: [ 
         "1.javascript ",
         "2.terminal /bash",
         "3.for loops",
         "4.console.log",
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
    questionEl.textContent = questionVar[questionIndex].question
    choiceOneEL.textContent = questionVar[questionIndex].answers[0];
    choiceTwoEL.textContent = questionVar[questionIndex].answers[1];
    choiceTreeEL.textContent = questionVar[questionIndex].answers[2];
    choiceFourEL.textContent = questionVar[questionIndex].answers[3];
}
function selectAnswer(event) {
    
    

}
setCounterText();
// setTime();