import { game } from '../../../app.js';
import { SLASHES } from '../../Assets/Effects.js';
import { randomInRange } from '../../Logic/Helpers.js';

const DURATION = 5;
const CRITDURATION = 50;

export class Slash {
    constructor(x, y, crit) {
        this.x = x;
        this.y = y;
        this.duration = crit ? CRITDURATION : DURATION;

        if (crit) {
            this.sprite = SLASHES.crit[randomInRange(0, SLASHES.crit.length - 1)];
        } else if (game.buffcontroller.quaddamage) {
            this.sprite = SLASHES.quad[randomInRange(0, SLASHES.quad.length - 1)];
        } else {
            this.sprite = SLASHES.normal[randomInRange(0, SLASHES.normal.length - 1)];
        }
    }

    move() {
        this.duration--;
    }
}
