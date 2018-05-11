class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    showStats() {
        console.log(`Name: ${ this.name }, Health: ${ this.health }, Speed: ${ this.speed }, Strength: ${ this.strength }`);
        return this;
    }

    sayName() {
        console.log(`My ninja name is, ${ this.name }`)
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log(`${ this.name } drank Sake and increased your health by 10 to: ${ this.health }`);
        return this;
    }

    kick(target) {
        const lostHealth = (15 * this.strength)
        target.health -= lostHealth;
        console.log(`${ this.name} kicked ${ target.name } and reduced his health by ${ lostHealth } to ${ target.health }`)
    }

    punch(target) {
        target.health -= 5;
        console.log(`${ this.name } punched ${ target.name } and reduced his health by 5 to ${ target.health }`)
    }
}
// child Sensei class
class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10) {
        super(name, health, speed, strength);
    }

    speakWisdom() {
        super.drinkSake();
        console.log('"What one programmer can do in one month, two programmers can do in two months"');
    }
}


const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Bob", 50, 1, 4);

ninja1.sayName();
ninja1.showStats();
console.log('----------');

ninja2.sayName();
ninja2.showStats();
console.log('----------');

ninja1.drinkSake();
console.log('----------');

ninja1.punch(ninja2);
ninja1.punch(ninja2);
ninja2.punch(ninja1);
console.log('----------');

ninja2.kick(ninja1);
console.log('----------');

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
