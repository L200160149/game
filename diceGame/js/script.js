'use strict';

// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let score, currentScore, activePlayer, playing;

// const init = function() {
//     // starting condition
//     score = [0,0];
//     currentScore = 0;
//     activePlayer = 0;
//     playing = true;
    
//     score0El.textContent = 0;
//     score1El.textContent = 0;
//     current0El.textContent = 0;
//     current1El.textContent = 0;
//     diceEl.classList.add('hidden')
//     player0El.classList.remove('player--winner')
//     player1El.classList.remove('player--winner')
//     player0El.classList.add('player--active')
//     player1El.classList.remove('player--active')
// }

// init();


// const switchPlayer = function() {
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//         currentScore = 0;
//         activePlayer = activePlayer === 0 ? 1 : 0;
//         player0El.classList.toggle('player--active')
//         player1El.classList.toggle('player--active')
// }

// // rolling dice functionality
// btnRoll.addEventListener('click', function() {
//     if(playing) {
//     // 1. random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     // console.log(dice)
//     // 2. Display Dice
//     diceEl.classList.remove('hidden')
//     diceEl.src = `dice-${dice}.png`
//     // 3. check rolled 1
//     if (dice !== 1) {
//         currentScore += dice;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     } else {
//         // switch next player
//         switchPlayer();
//     }
// }
// })

// // save score
// btnHold.addEventListener('click', function() {
//     if(playing) {
//     score[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

//     // The Winner
//     if (score[activePlayer] >= 10) {
//         playing = false;
//         diceEl.classList.add('hidden')
//         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
//         document.querySelector(`player--${activePlayer}`).classList.remove('player--active')
//     } else {
//         // switch to next player
//         switchPlayer();
//     }
// }
// })

// // reset game
// btnNew.addEventListener('click', init)

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

let score, currentScore, activePlayer, playing;
const init = function(){
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
};

init();

const switchPlayer = function() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function() {
    if (playing) {
        const randNumber = Math.trunc(Math.random() * 6 ) + 1;
        dice.src = `images/dice-${randNumber}.png`;
        if (randNumber !== 1) {
            currentScore += randNumber
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer()
        }
    }
})

btnHold.addEventListener('click', function() {
    if (playing) {
        score[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
    }
    // The Winner
    if (score[activePlayer] >= 50) {
        playing = false;
        dice.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`player--${activePlayer}`).classList.remove('player--active')
    } else {
    // switch to next player
        switchPlayer();
    }
})

btnNew.addEventListener('click', init)