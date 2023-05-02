class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
//methods
    sayName () {
        console.log(this.name);
    }

    showStats () {
        console.log(this.name);
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health);
    }

    drinkSake () {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();