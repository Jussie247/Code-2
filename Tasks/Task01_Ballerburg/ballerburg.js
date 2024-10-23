"use strict";
//interfaces&variables
;
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
//set up canvas
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    //add event listeners
    document.addEventListener("keydown", processKeyboardInput);
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
            console.log("changed slider with id " + slider.id + " to value " + slider.value);
        };
    }
    newMap();
}
function processKeyboardInput(_event) {
    pressedKey = _event.key;
    console.log("pressed " + pressedKey);
}
function shoot(_index) {
    if (_index === 0) {
        console.log("shoot keyboard");
    }
    else {
        console.log("shoot mouse");
    }
}
function displayHelp(_event) {
    console.log("display help");
}
function restartGame(_event) {
    console.log("restart game");
}
function newMap() {
    //
    // Make sure canvas size matches CSS size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    // Create fixed points for the terrain
    const createTerrainPoints = () => {
        const points = [];
        // Start point (left side)
        points.push({
            x: 0,
            y: canvas.height - 150
        });
        // Middle points
        points.push({
            x: canvas.width / 3,
            y: canvas.height - 250 + (Math.random() * 50)
        });
        points.push({
            x: canvas.width / 2,
            y: canvas.height - 350 + (Math.random() * 50)
        });
        points.push({
            x: (canvas.width / 3) * 2,
            y: canvas.height - 150 + (Math.random() * 50)
        });
        // End point (right side)
        points.push({
            x: canvas.width,
            y: canvas.height - 50
        });
        return points;
    };
    // Draw the terrain
    const drawTerrain = () => {
        if (!ctx)
            return;
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Get terrain points
        const points = createTerrainPoints();
        // Start drawing
        ctx.beginPath();
        // Start from bottom left
        ctx.moveTo(0, canvas.height);
        // Draw lines through all points
        points.forEach((_point) => {
            ctx.lineTo(_point.x, _point.y);
        });
        // Complete the shape
        ctx.lineTo(canvas.width, canvas.height);
        // Fill green
        ctx.fillStyle = 'green';
        ctx.fill();
    };
    // Draw initial terrain
    drawTerrain();
    //cannons+elevations
}
