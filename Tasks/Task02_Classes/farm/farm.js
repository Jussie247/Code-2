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
        return this.name + " the " + this.species + " sings: Old MacDonald had a " + this.species + ", E-I-E-I-O! With a " + this.sound + "-" + this.sound + " here and a" + this.sound + "-" + this.sound + "there...";
    }
}
//# sourceMappingURL=farm.js.map