"use strict";

// 1. Button press Event
// 2. Blink lights sequentially
//      - Clear lights, Blink red lights
//      - Clear lights, Blink yellow lights
//      - Clear lights, Blink green lights

// Light Colors
const RED = 0;
const YELLOW = 1;
const GREEN = 2;
const lightClasses = ["red-light", "yellow-light", "green-light"];

const trafficLights = document.querySelectorAll(".traffic-light");
let lightColor = RED;

const clearLights = () => {
  for (let i = 0; i < 3; i++) {
    const lights = trafficLights[i].querySelectorAll(".light");
    for (let j = 0; j < 3; j++) {
      lights[j].classList.remove("red-light");
      lights[j].classList.remove("yellow-light");
      lights[j].classList.remove("green-light");
    }
  }
};

const glowLights = (lightColor) => {
  for (let i = 0; i < 3; i++) {
    const lights = trafficLights[i].querySelectorAll(".light");
    lights[lightColor].classList.add(lightClasses[lightColor]);
  }
};

/* 
// DRY Principle

const blinkRedLights = () => {
  for (let i = 0; i < 3; i++) {
    const lights = trafficLights[i].querySelectorAll(".light");
    lights[0].classList.add("red-light");
  }
};

const blinkYellowLights = () => {
  for (let i = 0; i < 3; i++) {
    const lights = trafficLights[i].querySelectorAll(".light");
    lights[1].classList.add("yellow-light");
  }
};

const blinkGreenLights = () => {
  for (let i = 0; i < 3; i++) {
    const lights = trafficLights[i].querySelectorAll(".light");
    lights[2].classList.add("green-light");
  }
};
*/

const blinkLights = () => {
  clearLights();
  //   setInterval(blinkRedLights, 1000);
  //   setInterval(blinkYellowLights, 1000);
  //   setInterval(blinkGreenLights, 1000);
  setTimeout(() => glowLights(RED), 1000);
  setTimeout(() => glowLights(YELLOW), 2000);
  setTimeout(() => glowLights(GREEN), 3000);
};

// 1. Button Press Event
const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  blinkLights();
});
