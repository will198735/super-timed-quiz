var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}




function setNextQuestion() {

}
function selectAnswer() {

}