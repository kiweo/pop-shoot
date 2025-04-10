import { CANVAS } from '../../Assets/Other.js';
import { game } from '../../../app.js';
import { SceneUtils } from '../../Scene/SceneUtils.js';
import { WEATHERS } from '../../Assets/Effects.js';

const MIRAGEFREQUENCY = 1000; // in ticks, higher = longer

export class Sand {
    constructor() {
        this.x = CANVAS.width / 2;
        this.y = CANVAS.height / 2;
        this.ticks = 0;
        this.duration = 1;
        this.sprite = WEATHERS.sand[this.ticks % WEATHERS.sand.length];
        game.audiocontroller.playSound('sand');
    }

    move() {
        this.ticks++;
        this.sprite = WEATHERS.sand[this.ticks % WEATHERS.sand.length];

        if (this.ticks % MIRAGEFREQUENCY === 0) {
            SceneUtils.shakeScreen(500, 0.25);
            game.audiocontroller.playSound('mirage');
            SceneUtils.flashScreen();
        }
    }

    stop() {
        this.duration = 0;
        game.audiocontroller.stopSound('sand');
    }
}
