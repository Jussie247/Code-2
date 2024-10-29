"use strict";
var MacDonald;
(function (MacDonald) {
    class Farm {
        constructor() {
            this.animals = [];
            this.foodSupplies = { "Grass": 100, "Grains": 100, "Meat": 50, "Junk": 30 };
            this.loadFarm();
            this.installClickListener();
        }
        loadFarm() {
            this.animals.push(new MacDonald.Animal("Helga", "Cow", "Grass", 10, "Moo"));
            this.animals.push(new MacDonald.Animal("Chuck", "Chicken", "Grains", 3, "Gack"));
            this.animals.push(new MacDonald.Animal("Sir Barksalittle the IV", "Dog", "Meat", 5, "Bark"));
            this.animals.push(new MacDonald.Animal("Sherlock Hooves", "Horse", "Grass", 15, "Neigh"));
            this.animals.push(new MacDonald.Animal("Porky", "Pig", "Junk", 8, "Oink"));
            this.animals.push(new MacDonald.Animal("Don Hee-Haw", "Donkey", "Grains", 8, "Hee-Haw"));
        }
        installClickListener() {
            document.getElementById("startDay").addEventListener("click", this.onButtonClick.bind(this));
        }
        onButtonClick() {
            this.simulateDay();
        }
        simulateDay() {
            const output = document.getElementById("animalOutput");
            const foodStatus = document.getElementById("foodStatus");
            if (output)
                output.innerHTML = "";
            if (foodStatus)
                foodStatus.innerHTML = "";
            for (let i = 0; i < this.animals.length; i++) {
                const animal = this.animals[i];
                this.handleAnimalActions(animal, output, foodStatus);
            }
        }
        handleAnimalActions(_animal, _output, _foodStatus) {
            if (_output) {
                _output.innerHTML += "<p>" + _animal.sing() + "</p>";
                _output.innerHTML += "<p>" + _animal.doSpecialAction() + "</p>";
            }
            const foodMessage = _animal.eat(this);
            if (_foodStatus) {
                _foodStatus.innerHTML += "<p>" + foodMessage + "</p>";
            }
        }
    }
    MacDonald.Farm = Farm;
})(MacDonald || (MacDonald = {}));
//# sourceMappingURL=Farm.js.map