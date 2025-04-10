import { ANIMATIONS } from '../../Assets/Animations.js';

export class Animation {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;

        this.duration = ANIMATIONS[this.type].length - 1;
        this.sprite = ANIMATIONS[this.type][this.duration];
    }

    move() {
        this.sprite = ANIMATIONS[this.type][this.duration];
        this.duration--;
    }
}
