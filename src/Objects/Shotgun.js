import { game } from '../../app.js';
import { SceneUtils } from '../Scene/SceneUtils.js';
import { Shell } from '../Lasers/Friendly/Shell.js';

const RELOADSPEED = 20; // in ms. charge increases by 1 for every 'reloadspeed' ms

export class Shotgun {
    constructor() {
        this.init();
    }

    init() {
        this.charge = 100;
        this.owned = false;
    }

    shoot() {
        this.startCharging();
        SceneUtils.shakeScreen(4, 0.5);
        game.audiocontroller.playSound('reload');

        // fire shells
        for (let i = 0; i < 100; i += 5) {
            setTimeout(() => {
                game.bluelasers.add(new Shell());
            }, i);
        }
    }

    startCharging() {
        this.charge = 0;
        this.charger = setInterval(() => {
            if (!game.state.paused) {
                this.charge++;
            }
            if (this.charge == 100) {
                clearInterval(this.charger);
            }
        }, RELOADSPEED);
    }

    get isLoaded() {
        return this.charge === 100;
    }

    get chargeRatio() {
        return this.charge / 100;
    }
}
