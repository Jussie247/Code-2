namespace Solarsystem {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let timespeed: number = 0.5;

    const astrobodies1: Astrobody[] = []; // for the sun and its planets
    const astrobodies2: Astrobody[] = []; // for the inner planets
    const astrobodies3: Astrobody[] = []; // for the moons

    function handleLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        if (!canvas) {
            return;
        }
        crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        canvas.addEventListener("click", handleClick);

        const slider: HTMLInputElement = document.getElementsByTagName("input")[0];
        slider.onchange = function (): void {
            timespeed = Number(slider.value);
        };

        createPlanets();
        setInterval(update, 20);
    }

    function createPlanets(): void {
        // Create moons for various planets
        const earthMoon: Astrobody = new Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 17, "Earth has 1 moon.", "Earth's Moon");

        const marsMoons: Astrobody[] = [];
        for (let i: number = 0; i < 2; i++) {
            const marsMoon: Astrobody = new Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 11, "Mars has 2 moons.", "Mars Moon");
            marsMoon.positionrad = (2 * Math.PI) / 2 * i;
            marsMoons.push(marsMoon);
            astrobodies3.push(marsMoon);
        }

        const jupiterMoons: Astrobody[] = [];
        for (let i: number = 0; i < 4; i++) {
            const jupiterMoon: Astrobody = new Astrobody([], 2, "lightgray", 12 * 6 * Math.PI / 180, 30, "Jupiter has many moons.", "Jupiter Moon");
            jupiterMoon.positionrad = (2 * Math.PI) / 4 * i;
            jupiterMoons.push(jupiterMoon);
            astrobodies3.push(jupiterMoon);
        }

        const saturnMoons: Astrobody[] = [];
        for (let i: number = 0; i < 8; i++) {
            const saturnMoon: Astrobody = new Astrobody([], 2, "lightgray", 12 * 6 * Math.PI / 180, 35, "Saturn has many moons.", "Saturn Moon");
            saturnMoon.positionrad = (2 * Math.PI) / 8 * i;
            saturnMoons.push(saturnMoon);
            astrobodies3.push(saturnMoon);
        }

        const uranusMoons: Astrobody[] = [];
        for (let i: number = 0; i < 5; i++) {
            const uranusMoon: Astrobody = new Astrobody([], 2, "lightgray", 12 * 6 * Math.PI / 180, 30, "Uranus has many moons.", "Uranus Moon");
            uranusMoon.positionrad = (2 * Math.PI) / 5 * i;
            uranusMoons.push(uranusMoon);
            astrobodies3.push(uranusMoon);
        }

        const neptuneMoons: Astrobody[] = [];
        for (let i: number = 0; i < 14; i++) {
            const neptuneMoon: Astrobody = new Astrobody([], 2, "lightgray", 12 * 6 * Math.PI / 180, 30, "Neptune has many moons.", "Neptune Moon");
            neptuneMoon.positionrad = (2 * Math.PI) / 14 * i;
            neptuneMoons.push(neptuneMoon);
            astrobodies3.push(neptuneMoon);
        }

        // Create planets
        const mercury: Astrobody = new Astrobody([], 4.9, "#b1adad", (6 * Math.PI / 180) / 0.3, 0.3 * 100, "Mercury's description...", "Mercury");
        const venus: Astrobody = new Astrobody([], 12.1, "#e3bb76", (6 * Math.PI / 180) / 0.6, 0.65 * 100, "Venus's description...", "Venus");
        const earth: Astrobody = new Astrobody([earthMoon], 12.76, "#6b93d6", 6 * Math.PI / 180, 1 * 100, "Earth's description...", "Earth");
        const mars: Astrobody = new Astrobody(marsMoons, 6.8, "#e77d11", (6 * Math.PI / 180) / 2, 1.52 * 100, "Mars's description...", "Mars");
        const jupiter: Astrobody = new Astrobody(jupiterMoons, 139.82, "#d18f34", (6 * Math.PI / 180) / 11.86, 5.2 * 100, "Jupiter's description...", "Jupiter");
        const saturn: Astrobody = new Astrobody(saturnMoons, 116.46, "#c2a45e", (6 * Math.PI / 180) / 29.46, 9.58 * 100, "Saturn's description...", "Saturn");
        const uranus: Astrobody = new Astrobody(uranusMoons, 50.73, "#72c2e1", (6 * Math.PI / 180) / 84.01, 19.22 * 100, "Uranus's description...", "Uranus");
        const neptune: Astrobody = new Astrobody(neptuneMoons, 49.24, "#455d85", (6 * Math.PI / 180) / 164.79, 30.05 * 100, "Neptune's description...", "Neptune");

        // Create sun
        const sun: Astrobody = new Astrobody(
            [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune], 20, "yellow", 0, 0, "The Sun's description...", "Sun",
            new Vector(850, 400)
        );

        astrobodies1.push(sun);
        astrobodies2.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
        astrobodies3.push(earthMoon, ...marsMoons, ...jupiterMoons, ...saturnMoons, ...uranusMoons, ...neptuneMoons);
    }

    function update(): void {
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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

    function handleClick(_event: MouseEvent): void {
        const div: HTMLDivElement = document.getElementsByTagName("div")[0];
        const click: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
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
}
