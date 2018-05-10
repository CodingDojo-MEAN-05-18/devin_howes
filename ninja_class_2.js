function Ninja (name, health = 100, speed = 3, strength = 3) { 
    // health, speed, strength have default values
    this.name = name;
    this.health = health;
    var speed = speed; 
    // make speed = default value of 3 and make "private"
    var strength = strength; 
    // make strength = default value of 3 and make "private"
    this.kick = kick

    this.showStats = function() { 
        // this.showStats shows the statistics for the current ninja
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

    function kick(target) {
        const lostHealth = (15 * strength)
        target.health -= lostHealth;
        console.log(this.name, "kicked", target.name, "and reduced his health by", lostHealth, "to", target.health)
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

    Ninja.prototype.punch = function(target) {
        target.health -= 5;
        console.log(this.name, "punched", target.name, "and reduced his health by 5 to", target.health)
    }

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Bob", 50, 1, 4);

// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

ninja1.punch(ninja2);
ninja1.punch(ninja2);
ninja2.punch(ninja1);

ninja2.kick(ninja1);