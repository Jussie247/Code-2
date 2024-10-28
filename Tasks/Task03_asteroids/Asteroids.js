"use strict";
var T03_Asteroids;
(function (T03_Asteroids) {
    class Asteroid {
        constructor(_size) {
            console.log("Asteroid constructor");
        }
        moveBy(_timeslice) {
            console.log("Asteroid move");
        }
        draw() {
            console.log("Asteroid draw");
        }
    }
    T03_Asteroids.Asteroid = Asteroid;
})(T03_Asteroids || (T03_Asteroids = {}));
//# sourceMappingURL=Asteroids.js.map