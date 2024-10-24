
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
}