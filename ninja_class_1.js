function Ninja (name, health = 100, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    var speed = speed;
    var strength = strength;
    
    this.sayName = function() {
        console.log("My ninja name is", this.name)
    }

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }

    this.drinkSake = function() {
        this.health += 10;
        console.log("You drank Sake and increased your health by 10 to:", this.health);
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();