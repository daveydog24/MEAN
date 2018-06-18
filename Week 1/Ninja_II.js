function Ninja(name){
    this.name = name;
    this.health = 100;
    let speed = 3;
    let strength = 3;

    this.kick = function(ninja_kicked){
        const damage_amount = strength * 5;
        ninja_kicked.health -= damage_amount;
        console.log(ninja_kicked.name + " was kicked by " + this.name + "and lost" + damage_amount + "health");
        return this;
    }

    this.showStats = function() {
        console.log("My ninja name is " + this.name + "!");
        console.log("My strength is " + this.strength + "!");
        console.log("My speed is " + this.speed + "!");
        console.log("My speed is " + this.health + "!");
        return this;
    }
}

Ninja.prototype.sayName = function() {
    console.log("My ninja name is " + this.name + "!");
    return this;
}

Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
}

Ninja.prototype.punch = function(ninja_punched){
    ninja_punched.health -= 5;
    console.log(ninja_punched.name + " was punched by " + this.name + "and lost 5 health");
    return this;
}

// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
blueNinja.sayName();
redNinja.sayName();

blueNinja.punch(redNinja);
redNinja.kick(blueNinja);

blueNinja.showStats();
redNinja.showStats();

