"use strict";
//Class for Animal
class Animal {
    constructor(_name, _species, _food, _foodConsumption, _sound) {
        this.name = _name;
        this.species = _species;
        this.food = _food;
        this.foodConsumption = _foodConsumption;
        this.sound = _sound;
    }
    sing() {
        return this.name + " the " + this.species + " sings: Old MacDonald had a " + this.species + ", E-I-E-I-O! With a " + this.sound + "-" + this.sound + " here and a " + this.sound + "-" + this.sound + " there... ";
    }
    eat(_farm) {
        if (_farm.foodSupplies[this.food] >= this.foodConsumption) {
            _farm.foodSupplies[this.food] -= this.foodConsumption;
            console.log(_farm.foodSupplies, this.foodConsumption);
            return this.name + " ate " + this.foodConsumption + " units of " + this.food + ". Remaining: " + _farm.foodSupplies[this.food];
        }
        else {
            return "Not enough " + this.food + " for " + this.name + "!";
        }
    }
}
class Farm {
    constructor() {
        this.animals = [];
        this.foodSupplies = { "Grass": 100, "Grains": 100, "Meat": 50, "Junk": 30 };
        this.loadFarm();
        this.installClickListener();
    }
    loadFarm() {
        this.animals.push(new Animal("Helga", "Cow", "Grass", 10, "Moo"));
        this.animals.push(new Animal("Chuck", "Chicken", "Grains", 3, "Gack"));
        this.animals.push(new Animal("Sir Barksalittle the IV", "Dog", "Meat", 5, "Bark"));
        this.animals.push(new Animal("Sherlock Hooves", "Horse", "Grass", 15, "Neigh"));
        this.animals.push(new Animal("Porky", "Pig", "Junk", 8, "Oink"));
        this.animals.push(new Animal("Don Hee-Haw", "Donkey", "Grains", 8, "Hee-Haw"));
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
        if (output) {
            output.innerHTML = "";
        }
        if (foodStatus) {
            foodStatus.innerHTML = "";
        }
        for (let i = 0; i < this.animals.length; i++) {
            const animal = this.animals[i];
            this.handleAnimalActions(animal, output, foodStatus);
        }
    }
    handleAnimalActions(_animal, _output, _foodStatus) {
        if (_output) {
            _output.innerHTML += "<p>" + _animal.sing() + "</p>";
        }
        const foodMessage = _animal.eat(this);
        if (_foodStatus) {
            _foodStatus.innerHTML += "<p>" + foodMessage + "</p>";
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    new Farm();
});
//# sourceMappingURL=farm.js.map