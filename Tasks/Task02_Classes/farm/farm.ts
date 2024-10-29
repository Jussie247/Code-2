namespace MacDonald {
    export class Farm {
        animals: Animal[] = [];
        foodSupplies: { [key: string]: number };

        constructor() {
            this.foodSupplies = { "Grass": 100, "Grains": 100, "Meat": 50, "Junk": 30 };
            this.loadFarm();
            this.installClickListener();
        }

        loadFarm(): void {
            this.animals.push(new Cow("Helga"));
            this.animals.push(new Chicken("Chuck"));
            this.animals.push(new Dog("Sir Barksalittle the IV"));
            this.animals.push(new Horse("Sherlock Hooves"));
            this.animals.push(new Pig("Porky"));
            this.animals.push(new Donkey("Don Hee-Haw"));
        }

        installClickListener(): void {
            (document.getElementById("startDay") as HTMLElement).addEventListener("click", this.onButtonClick.bind(this));
        }

        onButtonClick(): void {
            this.simulateDay();
        }

        simulateDay(): void {
            const output: HTMLDivElement = <HTMLDivElement>document.getElementById("animalOutput");
            const foodStatus: HTMLDivElement = <HTMLDivElement>document.getElementById("foodStatus");

            if (output) output.innerHTML = "";
            if (foodStatus) foodStatus.innerHTML = "";

            for (let i: number = 0; i < this.animals.length; i++) {
                const animal: Animal = this.animals[i];
                this.handleAnimalActions(animal, output, foodStatus);
            }
        }

        handleAnimalActions(_animal: Animal, _output: HTMLDivElement, _foodStatus: HTMLDivElement): void {
            if (_output) {
                _output.innerHTML += "<p>" + _animal.sing() + "</p>";
                _output.innerHTML += "<p>" + _animal.doSpecialAction() + "</p>";

            }

            const foodMessage: string = _animal.eat(this);

            if (_foodStatus) {
                _foodStatus.innerHTML += "<p>" + foodMessage + "</p>";
            }

        }
    }
}