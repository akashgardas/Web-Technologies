'use strict';

/*

1:15pm - 2:15pm

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
    console.log(randInt);
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
}

const rollDice = () => {
    const dice = document.querySelectorAll('.die');

    // Clear and roll all dice
    for(let i = 0; i < dice.length; i ++) {
        let die = dice[i];
        clearDie(die);
        showNumber(die, roll());
    }
}

const updateRolls = () => {
    noOfRolls ++;
    rolls.textContent = noOfRolls;
}

let noOfRolls = 0;

const rollDiceButton = document.getElementById('roll-dice-button');
const rolls = document.getElementById('rolls');

// Button event
rollDiceButton.addEventListener('click', () => {
    rollDice();
    updateRolls();
});

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

