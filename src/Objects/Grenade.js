import { game } from '../../app.js';
import { SceneUtils } from '../Scene/SceneUtils.js';

const CHARGING_TIME = 60;

// grenade behaviour: If the player is hit while grenade is ready
// all enemies on screen will blow up

export class Grenade {
    constructor() {
        this.init();
    }

    init() {
        clearInterval(this.charger);
        this.owned = false;
        this.countdown = 0;
    }

    blow() {
        game.enemies.clear();
        SceneUtils.shakeScreen(3, 1);
        game.audiocontroller.playSound('snipershot');
        this.startCharging();
    }

    startCharging() {
        this.countdown = CHARGING_TIME;
        this.charger = setInterval(() => {
            if (!game.state.paused) {
                this.countdown--;
            }
            if (this.countdown <= 0) {
                clearInterval(this.charger);
            }
        }, 1000);
    }

    get isReady() {
        return this.owned && this.countdown === 0;
    }
}
