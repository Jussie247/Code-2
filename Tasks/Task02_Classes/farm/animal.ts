namespace MacDonald {
    export class Animal {
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
            return this.name + " the " + this.species + " sings: Old MacDonald had a " + this.species + ", E-I-E-I-O! With a " + this.sound + "-" + this.sound + " here and a " + this.sound + "-" + this.sound + " there...";
        }

        eat(_farm: Farm): string {
            if (_farm.foodSupplies[this.food] >= this.foodConsumption) {
                _farm.foodSupplies[this.food] -= this.foodConsumption;
                return this.name + " ate " + this.foodConsumption + " units of " + this.food + ". Remaining: " + _farm.foodSupplies[this.food];
            } else {
                return "Not enough " + this.food + " for " + this.name + "!";
            }
        }
    }
}
