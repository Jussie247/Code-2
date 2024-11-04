"use strict";
var Solarsystem;
(function (Solarsystem) {
    window.addEventListener("load", handleLoad);
    let timespeed = 0.5;
    const astrobodies1 = []; // for the sun and its planets
    const astrobodies2 = []; // for the inner planets
    const astrobodies3 = []; // for the moons
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Solarsystem.crc2 = canvas.getContext("2d");
        Solarsystem.crc2.fillStyle = "black";
        Solarsystem.crc2.strokeStyle = "white";
        Solarsystem.crc2.fillRect(0, 0, Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height);
        canvas.addEventListener("click", handleClick);
        const slider = document.getElementsByTagName("input")[0];
        slider.onchange = function () {
            timespeed = Number(slider.value);
        };
        createPlanets();
        setInterval(update, 20);
    }
    function createPlanets() {
        // Create moons for various planets
        const earthMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 17, "Earth has 1 moon.", "Earth's Moon");
        const marsMoons = [];
        for (let i = 0; i < 2; i++) {
            const marsMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 11, "Mars has 2 moons.", "Mars Moon");
            marsMoon.positionrad = (2 * Math.PI) / 2 * i;
            marsMoons.push(marsMoon);
            astrobodies3.push(marsMoon);
        }
        const jupiterMoons = [];
        for (let i = 0; i < 4; i++) {
            const jupiterMoon = new Solarsystem.Astrobody([], 2, "lightgray", 12 * 6 * Math.PI / 180, 30, "Jupiter has many moons.", "Jupiter Moon");
            jupiterMoon.positionrad = (2 * Math.PI) / 4 * i;
            jupiterMoons.push(jupiterMoon);
            astrobodies3.push(jupiterMoon);
        }
        const saturnMoons = [];
        for (let i = 0; i < 8; i++) {
            const saturnMoon = new Solarsystem.Astrobody([], 2, "lightgray", 12 * 6 * Math.PI / 180, 35, "Saturn has many moons.", "Saturn Moon");
            saturnMoon.positionrad = (2 * Math.PI) / 8 * i;
            saturnMoons.push(saturnMoon);
            astrobodies3.push(saturnMoon);
        }
        const uranusMoons = [];
        for (let i = 0; i < 5; i++) {
            const uranusMoon = new Solarsystem.Astrobody([], 2, "lightgray", 12 * 6 * Math.PI / 180, 30, "Uranus has many moons.", "Uranus Moon");
            uranusMoon.positionrad = (2 * Math.PI) / 5 * i;
            uranusMoons.push(uranusMoon);
            astrobodies3.push(uranusMoon);
        }
        const neptuneMoons = [];
        for (let i = 0; i < 14; i++) {
            const neptuneMoon = new Solarsystem.Astrobody([], 2, "lightgray", 12 * 6 * Math.PI / 180, 30, "Neptune has many moons.", "Neptune Moon");
            neptuneMoon.positionrad = (2 * Math.PI) / 14 * i;
            neptuneMoons.push(neptuneMoon);
            astrobodies3.push(neptuneMoon);
        }
        // Create planets
        const mercury = new Solarsystem.Astrobody([], 4.9, "#b1adad", (6 * Math.PI / 180) / 0.3, 0.3 * 100, "Mercury's description...", "Mercury");
        const venus = new Solarsystem.Astrobody([], 12.1, "#e3bb76", (6 * Math.PI / 180) / 0.6, 0.65 * 100, "Venus's description...", "Venus");
        const earth = new Solarsystem.Astrobody([earthMoon], 12.76, "#6b93d6", 6 * Math.PI / 180, 1 * 100, "Earth's description...", "Earth");
        const mars = new Solarsystem.Astrobody(marsMoons, 6.8, "#e77d11", (6 * Math.PI / 180) / 2, 1.52 * 100, "Mars's description...", "Mars");
        const jupiter = new Solarsystem.Astrobody(jupiterMoons, 139.82, "#d18f34", (6 * Math.PI / 180) / 11.86, 5.2 * 100, "Jupiter's description...", "Jupiter");
        const saturn = new Solarsystem.Astrobody(saturnMoons, 116.46, "#c2a45e", (6 * Math.PI / 180) / 29.46, 9.58 * 100, "Saturn's description...", "Saturn");
        const uranus = new Solarsystem.Astrobody(uranusMoons, 50.73, "#72c2e1", (6 * Math.PI / 180) / 84.01, 19.22 * 100, "Uranus's description...", "Uranus");
        const neptune = new Solarsystem.Astrobody(neptuneMoons, 49.24, "#455d85", (6 * Math.PI / 180) / 164.79, 30.05 * 100, "Neptune's description...", "Neptune");
        // Create sun
        const sun = new Solarsystem.Astrobody([mercury, venus, earth, mars, jupiter, saturn, uranus, neptune], 20, "yellow", 0, 0, "The Sun's description...", "Sun", new Solarsystem.Vector(850, 400));
        astrobodies1.push(sun);
        astrobodies2.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
        astrobodies3.push(earthMoon, ...marsMoons, ...jupiterMoons, ...saturnMoons, ...uranusMoons, ...neptuneMoons);
    }
    function update() {
        Solarsystem.crc2.fillStyle = "black";
        Solarsystem.crc2.fillRect(0, 0, Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height);
        for (const element of astrobodies1) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
        for (const element of astrobodies2) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
        for (const element of astrobodies3) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
    }
    function handleClick(_event) {
        const div = document.getElementsByTagName("div")[0];
        const click = new Solarsystem.Vector(_event.clientX - Solarsystem.crc2.canvas.offsetLeft, _event.clientY - Solarsystem.crc2.canvas.offsetTop);
        for (const element of astrobodies1) {
            element.checkClick(click, div);
        }
        for (const element of astrobodies2) {
            element.checkClick(click, div);
        }
        for (const element of astrobodies3) {
            element.checkClick(click, div);
        }
    }
})(Solarsystem || (Solarsystem = {}));
