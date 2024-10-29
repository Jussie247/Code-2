"use strict";
var MacDonald;
(function (MacDonald) {
    class Animal {
        constructor(_name, _species, _food, _foodConsumption, _sound) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.foodConsumption = _foodConsumption;
            this.sound = _sound;
        }
        sing() {
            return this.name + " the " + this.species + " sings: Old MacDonald had a " + this.species + ", E-I-E-I-O! With a " + this.sound + "-" + this.sound + " here and a " + this.sound + "-" + this.sound + " there...";
        }
        eat(_farm) {
            if (_farm.foodSupplies[this.food] >= this.foodConsumption) {
                _farm.foodSupplies[this.food] -= this.foodConsumption;
                return this.name + " ate " + this.foodConsumption + " units of " + this.food + ". Remaining: " + _farm.foodSupplies[this.food];
            }
            else {
                return "Not enough " + this.food + " for " + this.name + "!";
            }
        }
        doSpecialAction() {
            return this.name + " has no special action today.";
        }
    }
    MacDonald.Animal = Animal;
    class Cow extends Animal {
        constructor(_name) {
            super(_name, "Cow", "Grass", 10, "Moo");
        }
        doSpecialAction() {
            return this.name + " gives fresh milk today!";
        }
    }
    MacDonald.Cow = Cow;
    class Chicken extends Animal {
        constructor(_name) {
            super(_name, "Chicken", "Grains", 3, "Gack");
        }
        doSpecialAction() {
            return this.name + " laid an egg today!";
        }
    }
    MacDonald.Chicken = Chicken;
    class Dog extends Animal {
        constructor(_name) {
            super(_name, "Dog", "Meat", 5, "Bark");
        }
        doSpecialAction() {
            return this.name + " guarded the farm bravely today!";
        }
    }
    MacDonald.Dog = Dog;
    class Horse extends Animal {
        constructor(_name) {
            super(_name, "Horse", "Grass", 15, "Neigh");
        }
        doSpecialAction() {
            return this.name + " jelped plow the fields today!";
        }
    }
    MacDonald.Horse = Horse;
})(MacDonald || (MacDonald = {}));
//# sourceMappingURL=Animal.js.map