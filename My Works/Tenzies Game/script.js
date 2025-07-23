'use strict';

/*
GAME LOGIC
    1. Click the button to roll the dice.
    2. 'Rolls' counts the number of times rolled.
    3. Timer starts
    4. Best time for the session is recorded and displayed by 'Best Time'
    5. Click on a die to select it and hold from rolling in future, Another click on the selected die will disselect it.
    6. If all the dies selected are showing the same number, it's a win. Else continue playing.
*/

/*
1. Click the button to roll the dice.
    Req: 
    - Button click event
    - Roll the dice logic
        - Select a random number (1 - 6)
        - Display that number on the die.
            - Add the 'dot' class to the die 'div' element.
        - Repeat for all the dice.
*/

/* 
2. 'Rolls' counts the number of times rolled.
    Req:
    - Increment the counts when the button is clicked.
*/

/*
3. Timer starts
    Req:
    - Start the timer and display it when the first time the button is clicked.
*/

/*
4. Best time for the session is recorded and displayed by 'Best Time'
    Req:
    - A global value that stores and display the best time of the session.
    - Initial best time should be 0
*/

/* 
5. Click on a die to select it and hold from rolling in future, Another click on the selected die will disselect it.
    Req:
    - Every die should be clickable.
    - Change the color of the die when selected.
    - When selected, don't roll it in future.
*/

/*
6. If all the dies selected are showing the same number, it's a win. Else continue playing.
    Req:
    - When all the dice are selected, check the number it's showing and declare win.
*/

const dotPositions = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
};

const roll = () => {
    const randInt = Math.trunc(Math.random() * 6) + 1;
    return randInt;
};

const clearDie = die => {
    let dots = die.querySelectorAll('div');
    // Clear all the dots
    for(let i = 0; i < dots.length; i ++) {
        dots[i].classList.remove('dot');
    }
};

const showNumber = (die, num) => {
    let dots = die.querySelectorAll('div');
    // Show a number on the die
    for(let pos = 0; pos < dotPositions[num].length; pos ++) {
        dots[dotPositions[num][pos]].classList.add('dot');
    }
};

const rollDice = () => {
    // Clear and roll all dice
    for(let i = 0; i < dice.length; i ++) {
        let die = dice[i];
        if (die.classList.contains('freeze') === false) {
            clearDie(die);
            let num = roll();
            diceFaces[i] = num;
            showNumber(die, num);
        }
    }
};

const updateRolls = () => {
    noOfRolls ++;
    rolls.textContent = noOfRolls;
};

const checkIfWin = () => {
    let firstFace = diceFaces[0];
    if (firstFace !== -1 && diceFaces.every(face => face === firstFace)){
        clearInterval(intervalID);
        rollDiceButton.textContent = 'New Game';
        rollDiceButton.classList.add('new-game-button');
    }
};

const defreezeAll = () => {
    for (let i = 0; i < dice.length; i ++) {
        dice[i].classList.remove('freeze');
    }
}

const initializeGame = () => {
    noOfRolls = 0;
    freezeCount = 0;
    if (bestSessionTime === 0) 
        bestSessionTime = timer;
    else if (timer < bestSessionTime)
        bestSessionTime = timer;
    timer = 0;
    bestTime.textContent = bestSessionTime + 's';
    rollDiceButton.textContent = 'Roll Dice';
    rollDiceButton.classList.remove('new-game-button');
    defreezeAll();
    rollDice();
    startTimer();
};

const setTime = () => {
    timer ++;
    time.textContent = timer + 's';
}

const startTimer = () => {
    intervalID = setInterval(setTime, 1000);
}

let noOfRolls = 0;
let bestSessionTime = 0;
let diceFaces = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
let freezeCount = 0;
let timer = 0;
let intervalID;

const dice = document.querySelectorAll('.die');
const rollDiceButton = document.getElementById('roll-dice-button');
const rolls = document.getElementById('rolls');
const bestTime = document.getElementById('best-time');
const time = document.getElementById('time');

initializeGame();

// Button event
rollDiceButton.addEventListener('click', () => {
    if(freezeCount !== dice.length) {
        rollDice();
        updateRolls();
    } else {
        initializeGame();
    }
});

for (let i = 0; i < dice.length; i ++) {
    dice[i].addEventListener('click', () => {
        const die = dice[i].classList
        if (die.contains('freeze')) {
            die.remove('freeze');
            freezeCount --;
        } else {
            die.add('freeze');
            freezeCount ++;
            if (freezeCount === dice.length) {
                checkIfWin();
            }
        }
    });
}

