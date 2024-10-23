"use strict";
// Interfaces & Variables
let balls = [];
let pressedKey = "";
let cannonMouse = {
    index: 1,
    angle: 45,
    power: 50,
    ballInAir: false,
};
let cannonKeyboard = {
    index: 0,
    angle: 45,
    power: 50,
    ballInAir: false,
};
let keyboardFocusAngle = true;
// Set up canvas
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
window.addEventListener("load", handleLoad);
function newMap() {
    if (!canvas || !ctx) {
        console.error("Canvas or context not found.");
        return;
    }
    // Ensure canvas size matches CSS size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    // Create fixed points for the terrain
    const createTerrainPoints = () => {
        const points = [];
        // Start point (left side)
        points.push({
            x: 0,
            y: canvas.height - 150,
        });
        // Middle points
        points.push({
            x: canvas.width / 3,
            y: canvas.height - 250 + Math.random() * 50,
        });
        points.push({
            x: canvas.width / 2,
            y: canvas.height - 350 + Math.random() * 50,
        });
        points.push({
            x: (canvas.width / 3) * 2,
            y: canvas.height - 150 + Math.random() * 50,
        });
        // End point (right side)
        points.push({
            x: canvas.width,
            y: canvas.height - 50,
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
        // Start drawing the terrain
        ctx.beginPath();
        // Start from bottom left corner
        ctx.moveTo(0, canvas.height);
        // Draw lines between the points
        points.forEach((point) => {
            ctx.lineTo(point.x, point.y);
        });
        // Close the shape by connecting to the bottom-right corner
        ctx.lineTo(canvas.width, canvas.height);
        // Fill the terrain shape with green color
        ctx.fillStyle = "green";
        ctx.fill();
    };
    // Call drawTerrain to render the initial map
    drawTerrain();
}
function handleLoad(_event) {
    // Disable keyboard sliders & button
    const disabledSlider = document.getElementById("angle1");
    disabledSlider.disabled = true;
    const disabledPowerSlider = document.getElementById("power1");
    disabledPowerSlider.disabled = true;
    const disabledButton = document.getElementById("shoot1");
    disabledButton.disabled = true;
    // Add event listeners for user input
    document.addEventListener("keydown", processKeyboardInput);
    // Initialize sliders to control cannon parameters
    const sliders = document.getElementsByTagName("input");
    for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i];
        slider.onchange = function () {
            const val = Number(slider.value);
            switch (slider.id) {
                case "angle2":
                    cannonMouse.angle = val;
                    break;
                case "power2":
                    cannonMouse.power = val;
                    break;
                default:
                    console.log("Unexpected slider ID:", slider.id);
                    break;
            }
        };
    }
    // Call newMap to generate the terrain
    newMap();
}
function processKeyboardInput(_event) {
    pressedKey = _event.key;
    const angleslider = document.getElementById("angle1");
    const powerslider = document.getElementById("power1");
    // Switch between both sliders with W and S
    if (pressedKey === "w" || pressedKey === "s") {
        keyboardFocusAngle = !keyboardFocusAngle;
        if (keyboardFocusAngle) {
            angleslider.style.border = "4px solid red"; // Highlights the angle slider
            powerslider.style.border = "none";
        }
        else {
            angleslider.style.border = "none";
            powerslider.style.border = "4px solid red"; // Highlights the power slider
        }
    }
    // Adjust angle or power with A and D
    else if (pressedKey === "a") {
        if (keyboardFocusAngle) {
            angleslider.stepDown();
            cannonKeyboard.angle = Number(angleslider.value);
        }
        else {
            powerslider.stepDown();
            cannonKeyboard.power = Number(powerslider.value);
        }
    }
    else if (pressedKey === "d") {
        if (keyboardFocusAngle) {
            angleslider.stepUp();
            cannonKeyboard.angle = Number(angleslider.value);
        }
        else {
            powerslider.stepUp();
            cannonKeyboard.power = Number(powerslider.value);
        }
    }
    // Shoot with Enter
    else if (pressedKey === "Enter") {
        const shootBtn = document.getElementById("shoot1");
        shootBtn.disabled = false;
        shootBtn.click();
        shootBtn.disabled = true;
    }
    console.log("Pressed " + pressedKey);
}
function shoot(_index) {
    if (_index === 0) {
        console.log("Shoot keyboard");
    }
    else {
        console.log("Shoot mouse");
    }
}
function displayHelp(_event) {
    alert("Player 1 Use WASD to adjust the angle and power and press ENTER to shoot");
    console.log("Display help");
}
function restartGame(_event) {
    newMap();
    console.log("Restart game");
}
//# sourceMappingURL=ballerburg.js.map