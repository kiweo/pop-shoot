import { randomInRange } from '../../Logic/Helpers.js';
import { Movement } from '../../Logic/Motion/Movement.js';

const DURATION = 20;
const SPEED = 5;
const CRITSPEED = 0.5;
const CRITDURATION = 50;

export class DamageNumber {
    constructor(x, y, damage, crit) {
        this.x = x;
        this.y = y;

        this.crit = crit;
        this.speed = crit ? CRITSPEED : SPEED;
        this.duration = crit ? CRITDURATION : DURATION;
        this.text = Math.round(damage);
        this.direction = randomInRange(0, 360);
    }

    move() {
        this.x += Movement.move(this.direction, this.speed).x;
        this.y += Movement.move(this.direction, this.speed).y;
        this.duration--;
    }
}
