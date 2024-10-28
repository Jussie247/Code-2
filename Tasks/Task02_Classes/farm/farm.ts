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
            this.animals.push(new Animal("Helga", "Cow", "Grass", 10, "Moo"));
            this.animals.push(new Animal("Chuck", "Chicken", "Grains", 3, "Gack"));
            this.animals.push(new Animal("Sir Barksalittle the IV", "Dog", "Meat", 5, "Bark"));
            this.animals.push(new Animal("Sherlock Hooves", "Horse", "Grass", 15, "Neigh"));
            this.animals.push(new Animal("Porky", "Pig", "Junk", 8, "Oink"));
            this.animals.push(new Animal("Don Hee-Haw", "Donkey", "Grains", 8, "Hee-Haw"));
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

            for (let i = 0; i < this.animals.length; i++) {
                const animal = this.animals[i];
                this.handleAnimalActions(animal, output, foodStatus);
            }
        }

        handleAnimalActions(_animal: Animal, _output: HTMLDivElement, _foodStatus: HTMLDivElement): void {
            if (_output) {
                _output.innerHTML += "<p>" + _animal.sing() + "</p>";
            }

            const foodMessage = _animal.eat(this);

            if (_foodStatus) {
                _foodStatus.innerHTML += "<p>" + foodMessage + "</p>";
            }
        }
    }
}