namespace T03_Asteroids {

    export class Asteroid {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Asteroid constructor");
            this.position = new Vector(0, 0);

        }

        move(_timeslice: number): void {
            console.log("Asteroid move");
        }

        draw(): void {
            console.log("Asteroid draw");
        }

    }
}