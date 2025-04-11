import { game } from '../../../app.js';
import { ROCKETSPRITE } from '../../Assets/Lasers.js';
import { Animation } from '../../Effects/Misc/Animation.js';
import { BlueLaser } from './BlueLaser.js';

const SPEED = 6;

export class Rocket extends BlueLaser {
    constructor(x, y, direction) {
        super(x, y, direction);
        this.sprite = ROCKETSPRITE;
        this.damage *= game.itemactioncontroller.rocketdamage;
        this.speed = SPEED;
    }

    shatter() {
        this.shattered = true;
        game.effects.add(new Animation(this.x, this.y, 'explosion_normal'));
    }
}
