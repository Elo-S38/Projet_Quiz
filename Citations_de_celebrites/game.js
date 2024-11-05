import { QUIZ } from './questions.js';

const question = document.querySelector ('.question')
const options = document.querySelector ('.options')

let currentQuestionIndex = 0
let timer = 10
let nextButton = document.getElementById ("next-button")
let replay = document.getElementById ("replay-button")
let score = 0
let currentBar = currentQuestionIndex + 1
let progressionBar = document.getElementById ("ProgressBar");


function loadQuestion () {
	console.log(currentQuestionIndex)
	nextButton.disabled = true
	//document.querySelector('.options').style.pointerEvents = 'auto'
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
			//document.querySelector('.options').style.pointerEvents = 'none'    => disable tt les buttons comme j'avais fait de base
			//document.querySelector('.options button').disabled = true    => disable tt les buttons sans tous les recup
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

nextButton.addEventListener('click', () => {
    // Incrémenter l'index de la question
    //currentQuestionIndex ++;
	currentBar ++;
    progressionBar.value = currentBar  
	clearInterval(ID)
    // Vérifier s'il reste des questions
	if (currentQuestionIndex < QUIZ.questions.length) {
		// Afficher la question suivante
		clearInterval(TimerID)
		loadQuestion()
		timer = 10
		document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
		TimerID = setInterval(() => {
				timer--;
				document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
			}, 1000)
		ID = setInterval(() => {
			clearInterval(TimerID)
			document.querySelector('#timer').innerText = ''
			if (currentQuestionIndex < QUIZ.questions.length) {
				// Afficher la question suivante
				currentBar ++;
   			 	progressionBar.value = currentBar 
				loadQuestion()
			}
			else {
				clearInterval(ID)
				if (score == QUIZ.questions.length)
					{
						question.innerText = "Bravo! Vous avez parfaitement maitrisé ce thème, votre score : " + score + ' / ' + QUIZ.questions.length
						confetti({
							particleCount: 150,
							spread: 180
						})
					}
				else if (score >= (QUIZ.questions.length/2))
				{
					question.innerText = "Bravo! Vous avez répondu correctement à au moins la moitié des questions, Votre score: " + score + ' / ' + QUIZ.questions.length
				}
				else {
					question.innerText = "Votre score: " + score + ' / ' + QUIZ.questions.length + ", moins de la moyenne..., il va falloir revoir vos connaissances sur ce Quiz"
				}
				options.innerHTML = ''; // Effacer les options
				nextButton.style.display = 'none'; // Cacher le bouton Suivant
				document.querySelector('h1').innerText = ''
				replay.style.display = 'inline-block'
			}
		}, 10000)
	}
	else {
		clearInterval(ID)
		clearInterval(TimerID)
		document.querySelector('#timer').innerText = ''
		if (score == QUIZ.questions.length)
			{
				question.innerText = "Bravo! Vous avez parfaitement maitrisé ce thème, votre score : " + score + ' / ' + QUIZ.questions.length
				confetti({
					particleCount: 150,
					spread: 180
				})
			}
		else if (score >= (QUIZ.questions.length/2))
		{
			question.innerText = "Bravo! Vous avez répondu correctement à au moins la moitié des questions, Votre score: " + score + ' / ' + QUIZ.questions.length
		}
		else {
			question.innerText = "Votre score: " + score + ' / ' + QUIZ.questions.length + ", moins de la moyenne..., il va falloir revoir vos connaissances sur ce Quiz"
		}
		options.innerHTML = ''; // Effacer les options
		nextButton.style.display = 'none'; // Cacher le bouton Suivant
		document.querySelector('h1').innerText = ''
		replay.style.display = 'inline-block'
	}
});

replay.addEventListener ('click', () =>{
	clearInterval(ID)
	clearInterval(TimerID)
	currentQuestionIndex = 0;
	currentBar= 1; 
        progressionBar.value = currentBar
    replay.style.display = 'none';
    nextButton.style.display = 'inline-block';
    document.querySelector('h1').innerText = 'Qui a dit?'
	score = 0
	timer = 10
	document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
	loadQuestion()
	TimerID = setInterval(() => {
		timer--;
		document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
	}, 1000)
    ID = setInterval(() => {
		if (currentQuestionIndex < QUIZ.questions.length) {
			// Afficher la question suivante
			currentBar ++;
   			 progressionBar.value = currentBar 
			clearInterval(TimerID)
			timer = 10
			document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
			TimerID = setInterval(() => {
				timer--;
				document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
			}, 1000)
			loadQuestion()
		}
		else {
			clearInterval(ID)
			clearInterval(TimerID)
			document.querySelector('#timer').innerText = ''
			if (score == QUIZ.questions.length)
				{
					question.innerText = "Bravo! Vous avez parfaitement maitrisé ce thème, votre score : " + score + ' / ' + QUIZ.questions.length
					confetti({
						particleCount: 150,
						spread: 180
					})
				}
			else if (score >= (QUIZ.questions.length/2))
			{
				question.innerText = "Bravo! Vous avez répondu correctement à au moins la moitié des questions, Votre score: " + score + ' / ' + QUIZ.questions.length
			}
			else {
				question.innerText = "Votre score: " + score + ' / ' + QUIZ.questions.length + ", moins de la moyenne..., il va falloir revoir vos connaissances sur ce Quiz"
			}
			options.innerHTML = ''; // Effacer les options
			nextButton.style.display = 'none'; // Cacher le bouton Suivant
			document.querySelector('h1').innerText = ''
			replay.style.display = 'inline-block'
		}
	}, 10000)
})

loadQuestion()
document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
let TimerID = setInterval(() => {
	timer--;
	document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
}, 1000)
let ID = setInterval(() => {
	if (currentQuestionIndex < QUIZ.questions.length) {
		// Afficher la question suivante
		currentBar ++;
   			 progressionBar.value = currentBar 
		clearInterval(TimerID)
		timer = 10
		document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
		loadQuestion()
		TimerID = setInterval(() => {
			timer--;
			document.querySelector('#timer').innerText = timer + "s restante(s) pour répondre"
		}, 1000)
	}
	else {
		clearInterval(ID)
		clearInterval(TimerID)
		document.querySelector('#timer').innerText = ''
		if (score == QUIZ.questions.length)
			{
				question.innerText = "Bravo! Vous avez parfaitement maitrisé ce thème, votre score : " + score + ' / ' + QUIZ.questions.length
				confetti({
					particleCount: 150,
					spread: 180
				})
			}
		else if (score >= (QUIZ.questions.length/2))
		{
			question.innerText = "Bravo! Vous avez répondu correctement à au moins la moitié des questions, Votre score: " + score + ' / ' + QUIZ.questions.length
		}
		else {
			question.innerText = "Votre score: " + score + ' / ' + QUIZ.questions.length + ", moins de la moyenne..., il va falloir revoir vos connaissances sur ce Quiz"
		}
		options.innerHTML = ''; // Effacer les options
    	nextButton.style.display = 'none'; // Cacher le bouton Suivant
    	document.querySelector('h1').innerText = ''
    	replay.style.display = 'inline-block'
	}
}, 10000)