import { game, gameloop } from '../../../app.js';
import { OrangePackage } from '../../Actors/Packages/OrangePackage.js';
import { RedPackage } from '../../Actors/Packages/RedPackage.js';
import { CANVAS } from '../../Assets/Other.js';
import { SceneUtils } from '../../Scene/SceneUtils.js';

export class InputActions {
    // GAMEPLAY

    static shootDown() {
        if (!game.state.time) {
            game.state.startGame();
            CANVAS.requestFullscreen();
        }
        game.player.unsetShoot(); // used to prevent stuck to autoshooting by accident
        game.player.setShoot();
    }

    static shootUp() {
        game.player.unsetShoot();
    }

    static slowmoDown() {
        game.state.startSlowmo();
    }

    static slowmoUp() {
        game.state.stopSlowmo();
    }

    static pauseDown() {
        if (!game.state.over) {
            game.state.togglePause();
        } else {
            game.state.replay();
        }
    }

    // DEBUGGING

    static debugging = false;
    static drawHitboxes = false;

    static toggleWeather() {
        game.weathercontroller.toggleWeather();
    }

    static clearEnemies() {
        game.enemies.clear();
    }

    static respawn() {
        if (game.state.over) {
            game.state.over = false;
            game.firelasers.clear();
            game.player.shield.charge = 100;
            window.requestAnimationFrame(gameloop);
            game.audiocontroller.updateMusic();
        }
    }

    static spawnRedPackage() {
        game.enemies.add(new RedPackage());
    }

    static spawnOrangePackage() {
        game.enemies.add(new OrangePackage());
    }

    static dropItem() {
        game.itemdropcontroller.drop();
    }

    static clearItems() {
        game.itemdropcontroller.init();
        game.itemactioncontroller.init();
        game.slowmocontroller.init();
        game.player.clock.init();
        game.player.shotgun.init();
        game.player.grenade.init();
    }

    static warpToStage({ stage, boss }) {
        SceneUtils.flashScreen();
        SceneUtils.shakeScreen(3, 1);
        game.state.boss = false;
        game.state.stage = stage;
        game.state.time = boss ? 300 * stage + 290 : 300 * stage + 1;
        game.audiocontroller.rewindMusic();
        game.audiocontroller.updateMusic();
        game.weathercontroller.stopWeather();
        game.buffcontroller.init();
        game.enemies.clear(true);
        game.firelasers.clear();
        game.bluelasers.clear();
        game.effects.clear();
        game.state.addStageNotification();
    }
}
