import { game } from '../../../app.js';
import {
    SLASH0SPRITE,
    SLASH1SPRITE,
    SLASH2SPRITE,
    SLASH3SPRITE,
    SLASHCRIT0SPRITE,
    SLASHCRIT1SPRITE,
    SLASHCRIT2SPRITE,
    SLASHCRIT3SPRITE,
    SLASHQUAD0SPRITE,
    SLASHQUAD1SPRITE,
    SLASHQUAD2SPRITE,
    SLASHQUAD3SPRITE,
} from '../../Assets/Effects.js';
import { randomInRange } from '../../Logic/Helpers.js';

const DURATION = 5;
const CRITDURATION = 50;
const SPRITE = [SLASH0SPRITE, SLASH1SPRITE, SLASH2SPRITE, SLASH3SPRITE];
const QUADSPRITE = [SLASHQUAD0SPRITE, SLASHQUAD1SPRITE, SLASHQUAD2SPRITE, SLASHQUAD3SPRITE];
const CRITSPRITE = [SLASHCRIT1SPRITE, SLASHCRIT2SPRITE, SLASHCRIT3SPRITE, SLASHCRIT0SPRITE];

export class Slash {
    constructor(x, y, crit) {
        this.x = x;
        this.y = y;
        this.duration = crit ? CRITDURATION : DURATION;

        if (crit) {
            this.sprite = CRITSPRITE[randomInRange(0, 3)];
        } else if (game.buffcontroller.quaddamage) {
            this.sprite = QUADSPRITE[randomInRange(0, 3)];
        } else {
            this.sprite = SPRITE[randomInRange(0, 3)];
        }
    }

    move() {
        this.duration--;
    }
}
