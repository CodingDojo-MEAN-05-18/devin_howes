function Ninja (name, health = 100, speed = 3, strength = 3) { 
    // health, speed, strength have default values
    this.name = name;
    this.health = health;
    var speed = speed; 
    // make speed = default value of 3 and make "private"
    var strength = strength; 
    // make strength = default value of 3 and make "private"

    this.showStats = function() { 
        // this.showStats shows the statistics for the current ninja
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }
}

    Ninja.prototype.sayName = function () {
        // prototype for sayName since all Ninjas can use this
        console.log("My ninja name is", this.name)
        return this;
        // return this so it can be used with the constructor above
    }

    Ninja.prototype.drinkSake = function() {
        // prototype for drinkSake since all Ninjas can drink sake
        this.health += 10;
        console.log("You drank Sake and increased your health by 10 to:", this.health);
        return this;
    }

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();