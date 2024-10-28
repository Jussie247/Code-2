"use strict";
var T03_Asteroids;
(function (T03_Asteroids) {
    class Asteroid {
        constructor(_size) {
            console.log("Asteroid constructor");
            this.position = new T03_Asteroids.Vector(0, 0);
            this.velocity = new T03_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Asteroid move");
            let offset = new T03_Asteroids.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += T03_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += T03_Asteroids.crc2.canvas.height;
            if (this.position.x > T03_Asteroids.crc2.canvas.width)
                this.position.x -= T03_Asteroids.crc2.canvas.width;
            if (this.position.y > T03_Asteroids.crc2.canvas.height)
                this.position.y -= T03_Asteroids.crc2.canvas.height;
        }
        draw() {
            console.log("Asteroid draw");
            T03_Asteroids.crc2.save();
            T03_Asteroids.crc2.translate(this.position.x, this.position.y);
            T03_Asteroids.crc2.scale(this.size, this.size);
            T03_Asteroids.crc2.translate(-50, -50);
            T03_Asteroids.crc2.stroke(T03_Asteroids.asteroidPaths[this.type]);
            T03_Asteroids.crc2.restore();
        }
    }
    T03_Asteroids.Asteroid = Asteroid;
})(T03_Asteroids || (T03_Asteroids = {}));
//# sourceMappingURL=Asteroids.js.map