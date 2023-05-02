import Unit from "./unit.mjs";
import Effect from "./effect.mjs";


//⁡⁣⁢ ⁣Unit⁡ instances
// const redBelt = new Unit("Red Belt Ninja", 3, 3);
// const blackBelt = new Unit("Black Belt Ninja", 4, 5);


//⁡⁣⁢⁣ Effect⁡ instances
const hardAlgo = new Effect("Hard Algorithim", 3, "increase target's resiliance by 3", "resiliance", +3);
const promReject = new Effect("Unhandled Promise Rejection", 1, "reduce target's resiliance by 2", "resiliance", -2);
const pairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);


//---------------------⁡⁢⁣⁢SCENARIO⁡---------------------//⁡
const blackBelt = new Unit("Black Belt Ninja", 4, 5);
const redBelt = new Unit("Red Belt Ninja", 3, 3);
hardAlgo.play(redBelt);
redBelt.showStats();//checking to see if resiliance changed
promReject.play(redBelt);
redBelt.showStats();//checking to see if resiliance changed
pairProg.playPow(redBelt);
redBelt.showStats();//checking to see if resiliance changed
redBelt.attack(blackBelt);