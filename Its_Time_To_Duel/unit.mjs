import Card from "./card.mjs"

class Unit extends Card {
    constructor(name, cost, power, resiliance = 4){
        super(name, cost);
        this.power = power; 
        this.resiliance = resiliance;
    }
    //methods-------------------------------------------
    showStats() {
        console.log("Name:", this.name);
        console.log("Power:", this.power);
        console.log("Resiliance:", this.resiliance);
    }

    attack (target) {
        target.resiliance -= this.power;
        if (target.resiliance < this.power) {
            console.log("Oh no!", target.name, "is down!")
        } else {
            console.log(target.name, "takes the damage,", target.name, "has", target.resiliance, "hp left!" )
        }
    }
}
export default Unit;