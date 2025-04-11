import { game } from '../../../app.js';
import { InputActions } from '../../Logic/Motion/InputActions.js';
import { SceneUtils } from '../SceneUtils.js';

const MIN_SLOWMO_CHARGE = 15; // min charge that slowmo should be at in order for the flame to be drawn

export class PlayerGfx {
    static drawJetFlame() {
        if (game.player.slowmogauge.charge > MIN_SLOWMO_CHARGE) {
            game.scene.ctx.drawImage(
                game.player.flame.sprite,
                SceneUtils.offsetCoordinates(game.player.flame).x + game.weathercontroller.glitchOffset.x,
                SceneUtils.offsetCoordinates(game.player.flame).y + game.weathercontroller.glitchOffset.y,
            );
        }
    }

    static drawPlayer() {
        game.scene.ctx.drawImage(
            game.player.sprite,
            SceneUtils.offsetCoordinates(game.player).x + game.weathercontroller.glitchOffset.x,
            SceneUtils.offsetCoordinates(game.player).y + game.weathercontroller.glitchOffset.y,
        );

        // debugging - draw hitbox if enabled
        if (InputActions.drawHitboxes) SceneUtils.drawCircle(game.player.x, game.player.y, game.player.radius);
    }

    static drawShield() {
        if (game.player.shield.isCharged()) {
            game.scene.ctx.drawImage(
                game.player.shield.sprite,
                SceneUtils.offsetCoordinates(game.player).x + game.weathercontroller.glitchOffset.x,
                SceneUtils.offsetCoordinates(game.player).y + game.weathercontroller.glitchOffset.y,
            );
        }
    }
}
