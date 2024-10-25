
//Class for Animal
class Animal {
    name: string;
    species: string;
    food: string;
    foodConsumption: number;
    sound: string;


    constructor(_name: string, _species: string, _food: string, _foodConsumption: number, _sound: string) {

        this.name = _name;
        this.species = _species;
        this.food = _food;
        this.foodConsumption = _foodConsumption;
        this.sound = _sound;
    }
    sing(): string {
        return this.name + " the " + this.species + " sings: Old MacDonald had a " + this.species + ", E-I-E-I-O! With a " + this.sound + "-" + this.sound + " here and a" + this.sound + "-" + this.sound + "there...";
    }

    eat(farm: Farm): string {
        if (farm.foodSupplies[this.food] >= this.foodConsumption) {
            farm.foodSupplies[this.food] -= this.foodConsumption;
            return this.name + " ate " + this.foodConsumption + " units of " + this.food + ". Remaining: " + farm.foodSupplies[this.food];
        } else {
            return "Not enough " + this.food + " for " + this.name + "!";

        }

    }

}

class Farm {
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
}
