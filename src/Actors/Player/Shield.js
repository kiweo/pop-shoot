import { game } from '../../../app.js';
import { SHIELD } from '../../Assets/Player.js';

const UNDERFIRETIME = 1; // default invincibility time if no metalshield upgrade, in seconds
const CHARGERATE = 2; // default charging rate

export class Shield {
    constructor() {
        this.init();
        this.setObserver();
    }

    init() {
        this.charge = 100;
        this.underfire = false;
        this.sprite = SHIELD.SHIELDSPRITE;
    }

    setObserver() {
        let fn = () => {
            this.setSprite();
            if (!game.state.paused && !this.isCharged) {
                this.startCharging();
                if (this.isCharged) {
                    game.audiocontroller.playSound('shieldUp');
                }
            }
        };
        setInterval(fn, 50);
    }

    startCharging() {
        let rate = CHARGERATE;

        if (game.state.slowmo) {
            rate *= game.slowmocontroller.slowmorate;
        }

        if (!game.buffcontroller.noshield) {
            this.charge += rate;
        }

        if (this.charge > 100 || game.buffcontroller.invincibility) {
            this.charge = 100;
        }
    }

    deplete() {
        const underfiretime = game.itemactioncontroller.metalshield
            ? game.itemactioncontroller.metalshieldtime
            : UNDERFIRETIME;

        if (!game.buffcontroller.invincibility && !this.underfire) {
            game.audiocontroller.playSound('shieldDown');
            this.underfire = true;
            setTimeout(() => {
                this.charge = 0;
                this.underfire = false;
            }, underfiretime * 1000);
        }
    }

    setSprite() {
        if (this.underfire) {
            return (this.sprite = SHIELD.SHIELDUNDERFIRESPRITE);
        }
        if (game.buffcontroller.invincibility) {
            return (this.sprite = SHIELD.SHIELDINVINCIBILITYSPRITE);
        }
        if (this.isCharged && game.player.grenade.isReady) {
            return (this.sprite = SHIELD.SHIELDGRENADESPRITE);
        }
        if (game.itemactioncontroller.emp) {
            return (this.sprite = SHIELD.SHIELDEMPSPRITE);
        }
        this.sprite = SHIELD.SHIELDSPRITE;
    }

    get isCharged() {
        return this.charge === 100;
    }

    get currentCharge() {
        return Math.round(this.charge);
    }
}
