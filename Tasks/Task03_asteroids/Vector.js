"use strict";
var T03_Asteroids;
(function (T03_Asteroids) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    T03_Asteroids.Vector = Vector;
})(T03_Asteroids || (T03_Asteroids = {}));
//# sourceMappingURL=Vector.js.map