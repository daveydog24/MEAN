class Ninja {
    constructor(name) {
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }

    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        return this;
    }

}

// Part II
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
        this.health = 200;
    }

    speakWisdom() {
        super.drinkSake();
        let x = Math.trunc(Math.random() * 10)
        let arr = [
            "What one programmer can do in one month, \ntwo programmers can do in two months.\n",
            "The night is darkest before the dawn\n",
            "Hello Instructor\n",
            "The early bird gets the worm\n",
            "You cant feel joy without pain\n",
            "Live, Laugh, Love, Learn\n",
            "To be or not to be\n",
            "Never give up, never surrender\n",
            "Live life to the fullest\n",
            "The richest place is the potential ideas within the graveyard\n",
            "Stay Positive\n"
        ]
        console.log(arr[x])
    }

    showStats() {
        console.log(
            `Name: ${this.name},\nHealth: ${this.health},\nSpeed: ${this.speed},\nStrength: ${this.strength},\nWisdom: ${this.wisdom}`
        );
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

