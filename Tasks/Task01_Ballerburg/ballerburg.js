"use strict";
//interfaces&variables
let balls = [];
let pressedKey = "";
let cannonMouse = {
    index: 1,
    angle: 45,
    power: 50,
    ballInAir: false
};
let cannonKeyboard = {
    index: 0,
    angle: 45,
    power: 50,
    ballInAir: false
};
const keyboardAngle = document.getElementById("angle1");
const keyboardPower = document.getElementById("power1");
const mouseAngle = document.getElementById("angle2");
const mousePower = document.getElementById("power2");
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    //set up canvas
    const canvas = document.getElementsByTagName("canvas")[0];
    const ctx = canvas.getContext("2d");
    //add event listeners
    document.addEventListener("keydown", processKeyboardInput);
    for (let i = 0; i <= (document.getElementsByTagName("button")).length; i++) {
        const button = document.getElementsByTagName("button")[i];
        switch (button.innerHTML) {
            case "Shoot":
                button.addEventListener("click", shoot);
                break;
            case "How to Play":
                button.addEventListener("click", displayHelp);
                break;
            case "Restart":
                button.addEventListener("click", restartGame);
                break;
            default:
                console.log("extra button????????");
                break;
        }
    }
}
function processKeyboardInput(_event) {
    pressedKey = _event.key;
}
function shoot(_event) {
}
function displayHelp(_event) {
}
function restartGame(_event) {
}
for (let i = 0; i <= (document.getElementsByTagName("input")).length; i++) {
    const slider = document.getElementsByTagName("input")[i];
    slider.onchange = function () {
        const val = Number(slider.value);
        switch (slider.id) {
            case "angle1":
                cannonKeyboard.angle = val;
                break;
            case "power1":
                cannonKeyboard.power = val;
                break;
            case "angle2":
                cannonMouse.angle = val;
                break;
            case "power2":
                cannonMouse.power = val;
                break;
            default:
                console.log("end my suffering why doesnt the id match");
                break;
        }
        console.log("changed slider with id" + slider.id + "to value" + slider.value);
    };
}
