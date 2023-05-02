import Card from "./card.mjs"
import Unit from "./unit.mjs";

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    //methods------------------------------
    play(target) {
        if (target instanceof Unit) {
            console.log(this.text);
            target.resiliance += this.magnitude;
        } else {
            throw new Error( "Target must not be a unit! Try again..." )
        }
    }

    playPow(target) {
        if (target instanceof Unit) {
            console.log(this.text);
            target.power += this.magnitude;
        } else {
            throw new Error("Target must not be a unit! Try again...")
        }
    }
}
export default Effect