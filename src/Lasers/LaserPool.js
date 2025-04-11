import { CANVAS } from '../Assets/Other.js';
import { game } from '../../app.js';

export class LaserPool {
    constructor() {
        this.liveLasers = [];
    }

    add(laser) {
        this.liveLasers.push(laser);

        if (game.state.slowmo) {
            game.slowmocontroller.applyToOneLaser(laser);
        }
    }

    clear() {
        this.liveLasers.forEach((laser) => laser.shatter());
    }

    move() {
        if (!game.player.clock.active) {
            this.liveLasers.forEach((laser) => laser.move());
        }
    }

    // remove lasers that are shattered or out of screen
    refresh() {
        this.liveLasers = this.liveLasers.filter((laser) => {
            const isInScreen = laser.y >= 0 && laser.y <= CANVAS.height && laser.x >= 0 && laser.x <= CANVAS.width;
            if (laser.shattered || !isInScreen) {
                return false;
            }
            return true;
        });
    }
}
