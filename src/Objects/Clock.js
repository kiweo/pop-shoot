import { game } from '../../app.js';
import { SceneUtils } from '../Scene/SceneUtils.js';

const CHARGING_TIME = 90;
const ACTIVE_TIME = 10;

// clock behaviour: If the player is hit while the shield is down,
// the clock will stop time for ACTIVE_TIME seconds

export class Clock {
    constructor() {
        this.init();
    }

    init() {
        clearInterval(this.charger);
        this.owned = false;
        this.active = false;
        this.charge = CHARGING_TIME;
    }

    activate() {
        SceneUtils.flashScreen();
        this.active = true;
        game.state.stopSlowmo();
        game.audiocontroller.updateMusic();
        // start counting down
        setTimeout(() => {
            this.deactivate();
            this.startCharging();
        }, ACTIVE_TIME * 1000);
    }

    deactivate() {
        SceneUtils.flashScreen();
        this.active = false;
        game.audiocontroller.updateMusic();
    }

    startCharging() {
        this.charge = 0;
        this.charger = setInterval(() => {
            if (!game.state.paused) {
                this.charge++;
            }
            if (this.charge >= CHARGING_TIME) {
                game.audiocontroller.playSound('ready');
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
