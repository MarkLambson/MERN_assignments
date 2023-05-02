import Ninja from "./ninja.mjs";

class Sensei extends Ninja {
//only pass into constructor the name!! set default values for other attributes
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
//methods
    speakWisdom () {
        return super.drinkSake() + console.log("If the shoe fits, it must be your size...");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
superSensei.sayName();