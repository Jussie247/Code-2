"use strict";
var T03_Asteroids;
(function (T03_Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        T03_Asteroids.crc2 = canvas.getContext("2d");
        T03_Asteroids.crc2.fillStyle = "black";
        T03_Asteroids.crc2.strokeStyle = "white";
        T03_Asteroids.crc2.fillRect(0, 0, T03_Asteroids.crc2.canvas.width, T03_Asteroids.crc2.canvas.height);
        T03_Asteroids.createPaths();
        console.log("Asteroids paths: ", T03_Asteroids.asteroidPaths);
        createAsteroids(5);
        /*   createShip();
  
          canvas.addEventListener("mousedown", loadLaser);
          canvas.addEventListener("mouseup", shootLaser);
          canvas.addEventListener("keypress", handleKeypress);
          canvas.addEventListener("mousemove", setHeading); */
        window.setInterval(update, 20);
    }
    function createAsteroids(_nAsteriods) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteriods; i++) {
            let asteroid = new T03_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("update");
        T03_Asteroids.crc2.fillRect(0, 0, T03_Asteroids.crc2.canvas.width, T03_Asteroids.crc2.canvas.height);
        /* ship.draw();
        handleCollisions(); */
    }
})(T03_Asteroids || (T03_Asteroids = {}));
//# sourceMappingURL=Main.js.map