import { game } from '../../app.js';
import { SceneUtils } from '../Scene/SceneUtils.js';

const CHARGING_TIME = 45;

// grenade behaviour: If the player is hit while grenade is ready
// all enemies on screen will blow up

export class Grenade {
    constructor() {
        this.init();
    }

    init() {
        clearInterval(this.charger);
        this.owned = false;
        this.charge = CHARGING_TIME;
    }

    blow() {
        game.enemies.clear();
        SceneUtils.shakeScreen(3, 1);
        game.audiocontroller.playSound('snipershot');
        this.startCharging();
    }

    startCharging() {
        this.charge = 0;
        this.charger = setInterval(() => {
            if (!game.state.paused) {
                this.charge++;
            }
            if (this.charge >= CHARGING_TIME) {
                clearInterval(this.charger);
            }
        }, 1000);
    }

    get isReady() {
        return this.owned && this.charge === CHARGING_TIME;
    }

    get chargeRatio() {
        return this.charge / CHARGING_TIME;
    }
}
