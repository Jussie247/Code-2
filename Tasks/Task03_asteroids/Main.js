"use strict";
var T03_Asteroids;
(function (T03_Asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        T03_Asteroids.crc2 = canvas.getContext("2d");
        T03_Asteroids.crc2.fillStyle = "black";
        T03_Asteroids.crc2.strokeStyle = "white";
        T03_Asteroids.createPaths();
        console.log("Asteroids paths: ", T03_Asteroids.asteroidPaths);
        let asteroid = new T03_Asteroids.Asteroid(1);
        console.log(asteroid);
    }
})(T03_Asteroids || (T03_Asteroids = {}));
//# sourceMappingURL=Main.js.map