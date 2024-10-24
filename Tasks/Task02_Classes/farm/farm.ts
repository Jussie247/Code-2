
//Class for Animal
class Animal {
    name: string;
    type: string;
    food: string;
    foodConsumption: number;
    sound: string;


    constructor(name: string, type: string, food: string, foodConsumption: number, sound: string) {

        this.name = name;
        this.type = type;
        this.food = food;
        this.foodConsumption = foodConsumption;
        this.sound = sound;
    }
    sing(): string {
        return this.name + " the " + this.type + " sings: Old MacDonald had a " + this.type + ", E-I-E-I-O! With a " + this.sound + "-" + this.sound + " here...";
    }

}
