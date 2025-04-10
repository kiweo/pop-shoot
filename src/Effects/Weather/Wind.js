import { CANVAS } from '../../Assets/Other.js';
import { game } from '../../../app.js';
import { SceneUtils } from '../../Scene/SceneUtils.js';
import { WEATHERS } from '../../Assets/Effects.js';

const SHAKEFREQUENCY = 50; // in ticks, higher = longer

export class Wind {
    constructor() {
        this.x = CANVAS.width / 2;
        this.y = CANVAS.height / 2;
        this.ticks = 0;
        this.duration = 1;
        this.sprite = WEATHERS.wind[this.ticks % WEATHERS.wind.length];
        game.audiocontroller.playSound('wind');
    }

    move() {
        this.ticks++;
        this.sprite = WEATHERS.wind[this.ticks % WEATHERS.wind.length];

        if (this.ticks % SHAKEFREQUENCY === 0) {
            SceneUtils.shakeScreen(2, 1);
        }
    }

    stop() {
        game.audiocontroller.stopSound('wind');
        this.duration = 0;
    }
}
