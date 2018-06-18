function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

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

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


