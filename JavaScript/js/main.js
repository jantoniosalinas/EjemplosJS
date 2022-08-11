/* Obtener valor random*/
let randomNumber = Math.floor(Math.random() * 100) + 1;


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
         const userGuess = Number(guessField.value);

         if ( guessCount === 1 ) {
              guesses.textContent = 'Tus números: ';
         }

         if ( isNaN(guessField.value) ) {
              lastResult.textContent = 'El valor ingresado NO es un Número !!!';
              lastResult.style.backgroundColor = 'violet';
              guesses.textContent += userGuess + ' ';
         }
         else {
              guesses.textContent += userGuess + ' ';
              if ( userGuess === randomNumber ) {
                   lastResult.textContent = 'Felicidades !!! Mi número era: ' + randomNumber + ' !!!';
                   lastResult.style.backgroundColor = 'green';
                   lowOrHi.textContent = '';
                   setGameOver();
              }
              else {
                   lastResult.textContent = 'Número incorrecto !!!';
                   lastResult.style.backgroundColor = 'red';
                   if ( userGuess < randomNumber ) {
                        lowOrHi.textContent = 'Tú último número fue menor !!!' ;
                   }
                   else if ( userGuess > randomNumber ) {
                             lowOrHi.textContent = 'Tú último número fue mayor !!!';
                   }
              }
         }
         if ( guessCount === 10 ) {
              lastResult.textContent = '!!!GAME OVER!!!';
              lowOrHi.textContent = '';
              setGameOver();
         }

         guessCount++;
         guessField.value = '';
         guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
         guessField.disabled = true;
         guessSubmit.disabled = true;
         
         resetButton = document.createElement('button');
         resetButton.textContent = 'Nuevo Juego';
         resetButton.style.color = 'green';
         document.body.appendChild(resetButton);
         resetButton.addEventListener('click', resetGame);
}

function resetGame() {
         guessCount = 1;
         
         const resetParas = document.querySelectorAll('.resultParas p');
         for ( const resetPara of resetParas ) {
               resetPara.textContent = '';
         }

         resetButton.parentNode.removeChild(resetButton);
         guessField.disabled = false;
         guessSubmit.disabled = false;
         guessField.value = '';
         guessField.focus();
         lastResult.style.backgroundColor = 'white';

         randomNumber = Math.floor(Math.random() * 100) + 1;
}