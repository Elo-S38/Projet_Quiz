import { QUIZ1 } from './questions.js';
import { QUIZ2 } from './questions2.js';
import { QUIZ3 } from './questions3.js';

let QUIZ = QUIZ1
let message = document.querySelector('h1').innerText;

if (window.sessionStorage.QUIZ)
{
	if (window.sessionStorage.getItem('QUIZ') == "1")
	{
		QUIZ = QUIZ1
		message = "Qui a dit ?"
	}
	else if (window.sessionStorage.getItem('QUIZ') == "2")
	{
		QUIZ = QUIZ2
		message = "Le sais-tu ?"
	}
	else
	{
		QUIZ = QUIZ3
		message = "Complète cette phrase"
	}
}

const question = document.querySelector ('.question')
const options = document.querySelector ('.options')

let theme1 = document.querySelector('.NavBar #menu .nav-btn1')
let theme2 = document.querySelector('.NavBar #menu .nav-btn2')
let theme3 = document.querySelector('.NavBar #menu .nav-btn3')

theme1.addEventListener('click', () => {
	window.sessionStorage.setItem('QUIZ', "1")
})
theme2.addEventListener('click', () => {
	window.sessionStorage.setItem('QUIZ', "2")
})
theme3.addEventListener('click', () => {
	window.sessionStorage.setItem('QUIZ', "3")
})

let currentQuestionIndex = 0
let timer = 15
let nextButton = document.getElementById ("next-button")
let replay = document.getElementById ("replay-button")
let score = 0
let currentBar = currentQuestionIndex + 1
let progressionBar = document.getElementById ("ProgressBar");
document.querySelector('h1').innerText = message

function Score(){
	let scoreArray = []
	let nbTentatives = 0
	if (window.localStorage.scoreArray)
	{
		scoreArray = JSON.parse(window.localStorage.getItem("scoreArray"))
	}
	if (window.localStorage.nbTentatives)
	{
		nbTentatives = window.localStorage.getItem('nbTentatives')
	}
	else
	{
		window.localStorage.setItem("nbTentatives", nbTentatives)
	}
	if (window.localStorage.score)
	{
		scoreArray.push(localStorage.getItem('score'))
		window.localStorage.setItem("scoreArray", JSON.stringify(scoreArray))
		nbTentatives++
		window.localStorage.setItem('nbTentatives', nbTentatives)
	}
}

function loadQuestion () {
	nextButton.disabled = true
    options.innerHTML = '';
    const actualQuestion = QUIZ.questions[currentQuestionIndex]
    question.innerText = actualQuestion.text
    for (const elt of actualQuestion.options)
    {
        const button = document.createElement('button');		
    	button.innerText = elt;
		button.addEventListener('click', () => {
			clearInterval(ID)
			clearInterval(TimerID)
			nextButton.disabled = false
			if (checkAnswer(button.innerText) == true)
			{
				score++
				button.style.borderColor = "green"
			}
			else
			{
				button.style.borderColor = "red"
				colorCorrectQuestion()
			}
			disableAllButton()       // disable tt les buttons en les recuperant tous et en les desactivants un par un
		})
    	options.appendChild(button);
		
    }
	currentQuestionIndex ++;
}

function checkAnswer(selectedOption) {
	if (selectedOption == QUIZ.questions[currentQuestionIndex - 1].correct_answer)
	{
		return (true)
	}
	else
	{
		return (false)
	}
}

function disableAllButton() {
	const elt = document.querySelector('.options')
	const allButton = elt.getElementsByTagName('button')
	for (let button of allButton) {
		button.disabled = true
	}
}

function colorCorrectQuestion()
{
	const elt = document.querySelector('.options')
	const allButton = elt.getElementsByTagName('button')
	for (let button of allButton) {
		if (checkAnswer(button.innerText) == true)
		{
			button.style.borderColor = "green"
		}
	}
}

function endMessage(){
	if (score == QUIZ.questions.length)
		{
			question.innerText = "Bravo! Vous avez parfaitement maitrisé ce thème, votre score : " + score + ' / ' + QUIZ.questions.length
			confetti({
				particleCount: 150,
				spread: 180,
				origin: {
					x: 0.5,
					y: 0.7
				}
			})
		}
	else if (score >= (QUIZ.questions.length/2))
	{
		question.innerText = "Bravo! Vous avez répondu correctement à au moins la moitié des questions, Votre score: " + score + ' / ' + QUIZ.questions.length
	}
	else {
		question.innerText = "Votre score: " + score + ' / ' + QUIZ.questions.length + ", moins de la moyenne..., il va falloir revoir vos connaissances sur ce Quiz"
	}
}

function reset(){
	options.innerHTML = ''; // Effacer les options
	nextButton.style.display = 'none'; // Cacher le bouton Suivant
	document.querySelector('h1').innerText = ''
	replay.style.display = 'inline-block'
}

function Quiz(){
	currentBar ++;
    progressionBar.value = currentBar
	clearInterval(TimerID)
	if (currentQuestionIndex < QUIZ.questions.length)
	{
		timer = 15
		document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
		clearInterval(TimerID)
		loadQuestion()
		TimerID = setTimer()
	}
	else
	{
		clearInterval(ID)
		clearInterval(TimerID)
		document.querySelector('#timer').innerText = ''
		endMessage()
		reset()	
		window.localStorage.setItem ("score", score)
		Score()
	}
}

function startInterval(){
	return (setInterval(() => {
		Quiz()
	}, 15000))
}

function setTimer() {
	return (setInterval(() => {
		timer--;
		document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
	}, 1000))
}

nextButton.addEventListener('click', () => {
	clearInterval(ID)
	clearInterval(TimerID)
	Quiz()
	ID = startInterval()
});

replay.addEventListener ('click', () =>{
	clearInterval(ID)
	clearInterval(TimerID)
	currentQuestionIndex = 0;
	currentBar= 1; 
    progressionBar.value = currentBar
    replay.style.display = 'none';
    nextButton.style.display = 'inline-block';
    document.querySelector('h1').innerText = message
	score = 0
	timer = 15
	document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
	loadQuestion()
	TimerID = setTimer()
    ID = startInterval()
})

loadQuestion()
document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"

let TimerID = setTimer()
let ID = startInterval()
