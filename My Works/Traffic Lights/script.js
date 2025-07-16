'use strict';

// 1. Button press Event
// 2. Blink lights sequentially
//      - Clear lights, Blink red lights
//      - Clear lights, Blink yellow lights
//      - Clear lights, Blink green lights

const clearLights = () => {
    const trafficLights = document.querySelectorAll('.traffic-light');

    for (let i = 0; i < 3; i ++) {
        const lights = trafficLights[i].querySelectorAll('.light');
        for(let j = 0; j < 3; j ++) {
            lights[j].classList.remove('red-light');
            lights[j].classList.remove('yellow-light');
            lights[j].classList.remove('green-light');
        }
    }
};

const blinkRedLights = () => {
    const trafficLights = document.querySelectorAll('.traffic-light');

    for (let i = 0; i < 3; i ++) {
        const lights = trafficLights[i].querySelectorAll('.light');
        lights[0].classList.add('red-light');
    }
}

const blinkYellowLights = () => {
    const trafficLights = document.querySelectorAll('.traffic-light');
    
    for (let i = 0; i < 3; i ++) {
        const lights = trafficLights[i].querySelectorAll('.light');
        lights[1].classList.add('yellow-light');
    }
}

const blinkGreenLights = () => {
    const trafficLights = document.querySelectorAll('.traffic-light');
    
    for (let i = 0; i < 3; i ++) {
        const lights = trafficLights[i].querySelectorAll('.light');
        lights[2].classList.add('green-light');
    }
}

const blinkLights = () => {
    const trafficLights = document.querySelectorAll('.traffic-light');
    clearLights();
    setTimeout(blinkRedLights, 1000);
    clearLights();
    setTimeout(blinkYellowLights, 2000);
    clearLights();
    setTimeout(blinkGreenLights, 3000);
};

// 1. Button Press Event
const startButton = document.querySelector('.start');
startButton.addEventListener('click', () => {
    console.log('Start Button');
    blinkLights();
});