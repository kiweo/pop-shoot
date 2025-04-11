import { game } from '../../../app.js';
import { BLACKSCREENSPRITE, HIEROGLYPHSPRITE } from '../../Assets/Effects.js';
import { BACKGROUNDS, CANVAS, FOG } from '../../Assets/Other.js';
import { Sand } from '../../Effects/Weather/Sand.js';

const PARALLAX_SPEED = 3;

export class BackgroundGfx {
    static drawBack() {
        // stars
        game.scene.ctx.drawImage(
            BACKGROUNDS[`stage${game.state.stage}`].back,
            game.scene.bgScrollOffset + game.scene.shake,
            game.scene.shake,
        );
        game.scene.ctx.drawImage(
            BACKGROUNDS[`stage${game.state.stage}`].back,
            game.scene.bgScrollOffset + CANVAS.width + game.scene.shake,
            game.scene.shake,
        );

        // reset offset in case the stars-sprite reaches the end while scrolling
        if (game.scene.bgScrollOffset <= -CANVAS.width) {
            game.scene.bgScrollOffset = 0;
        }

        // darkness
        if (game.weathercontroller.weatherActive) {
            game.scene.ctx.drawImage(BLACKSCREENSPRITE, 0, 0);
        }
    }

    static drawMid() {
        if (game.state.boss) {
            game.scene.ctx.drawImage(BACKGROUNDS[`stage${game.state.stage}`].mid, game.scene.shake, game.scene.shake);
        }
    }

    static drawFront() {
        game.scene.ctx.drawImage(BACKGROUNDS[`stage${game.state.stage}`].front, game.scene.shake, game.scene.shake);

        // only during stage3 sand-weather
        if (game.weathercontroller.weatherActive.constructor === Sand) {
            game.scene.ctx.drawImage(HIEROGLYPHSPRITE, game.scene.shake, game.scene.shake);
        }
    }

    static drawFog() {
        if (game.state.slowmo || !game.state.time) {
            game.scene.ctx.drawImage(FOG, -game.scene.bgScrollOffset - CANVAS.width, 0);
            game.scene.ctx.drawImage(FOG, -game.scene.bgScrollOffset, 0);
        }
    }

    static updateScrollOffset() {
        if (game.state.slowmo || !game.state.time || game.player.clock.active) {
            game.scene.bgScrollOffset -= game.slowmocontroller.slowmorate;
        } else {
            game.scene.bgScrollOffset -= PARALLAX_SPEED;
        }
    }
}
