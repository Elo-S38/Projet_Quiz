import { QUIZ  
} from './questions.js';

const question = document.querySelector ('.question')
const options = document.querySelector ('.options')

/* const firstQuestion = QUIZ.questions[0]

question.innerText = firstQuestion.text

for (const elt of firstQuestion.options)
    {
        const button = document.createElement('button');
  button.innerText = elt;
  options.appendChild(button);
    } */

let currentQuestionIndex = 0

let nextButton = document.getElementById ("next-button")
let replay = document.getElementById ("replay-button")

function loadQuestion () {
    options.innerHTML = ''
    const actualQuestion = QUIZ.questions[currentQuestionIndex]
    question.innerText = actualQuestion.text
    for (const elt of actualQuestion.options)
        {
            const button = document.createElement('button');
      button.innerText = elt;
      options.appendChild(button);
        }
}

loadQuestion()

nextButton.addEventListener('click', () => {
    // Incrémenter l'index de la question
    currentQuestionIndex ++;
  
    // Vérifier s'il reste des questions
    if (currentQuestionIndex < QUIZ.questions.length) {
      // Afficher la question suivante
      loadQuestion();
    } else {
      // Si plus de questions, indiquer la fin du quiz
      question.innerText = 'Merci de votre participation';
      options.innerHTML = ''; // Effacer les options
      nextButton.style.display = 'none'; // Cacher le bouton Suivant
      document.querySelector('h1').innerText = ''
      replay.style.display = 'inline-block'
    }
     });

     replay.addEventListener ('click',() =>{
        currentQuestionIndex = 0;
        replay.style.display = 'none';
        nextButton.style.display = 'inline-block';
        document.querySelector('h1').innerText = 'Qui a dit?'
        loadQuestion()

     })


  
