import { game } from '../../../app.js';
import { InputActions } from './InputActions.js';

// GAMEPLAY
const UP = 'KeyW';
const DOWN = 'KeyS';
const LEFT = 'KeyA';
const RIGHT = 'KeyD';
const SHOOT = 'KeyK';
const SLOWMO = 'ShiftLeft';
const PAUSE = 'Space';

// DEBUGGING
const RESPAWN = 'KeyP';
const DROPITEM = 'Enter';
const CLEARITEMS = 'KeyC';
const REDPACKAGE = 'KeyR';
const ORANGEPACKAGE = 'KeyO';
const CLEARENEMIES = 'KeyX';
const TOGGLEWEATHER = 'KeyV';
const BOSS = 'KeyB';
const STAGEBUTTONS = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5'];

export class InputDetection {
    constructor() {
        this.pressedMovementKeys = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.addKeydownListener();
        this.addKeyupListener();
    }

    addKeydownListener() {
        document.addEventListener('keydown', (e) => {
            if (e.repeat) return; // prevent repeating action while holding down key

            // movement
            if (e.code === UP) this.pressedMovementKeys.up = true;
            if (e.code === DOWN) this.pressedMovementKeys.down = true;
            if (e.code === LEFT) this.pressedMovementKeys.left = true;
            if (e.code === RIGHT) this.pressedMovementKeys.right = true;

            // actions
            if (e.code === SHOOT) InputActions.shootDown();
            if (e.code === SLOWMO) InputActions.slowmoDown();
            if (e.code === PAUSE) InputActions.pauseDown();

            // debugging
            if (e.code === RESPAWN) InputActions.respawn();
            if (e.code === DROPITEM) InputActions.dropItem();
            if (e.code === CLEARITEMS) InputActions.clearItems();
            if (e.code === REDPACKAGE) InputActions.spawnRedPackage();
            if (e.code === ORANGEPACKAGE) InputActions.spawnOrangePackage();
            if (e.code === CLEARENEMIES) InputActions.clearEnemies();
            if (e.code === TOGGLEWEATHER) InputActions.toggleWeather();
            if (e.code === BOSS) InputActions.warpToStage({ stage: game.state.stage, boss: true });
            STAGEBUTTONS.forEach((button, index) => {
                if (e.code === button) InputActions.warpToStage({ stage: index, boss: false });
            });
        });
    }

    addKeyupListener() {
        document.addEventListener('keyup', (e) => {
            // movement
            if (e.code === UP) this.pressedMovementKeys.up = false;
            if (e.code === DOWN) this.pressedMovementKeys.down = false;
            if (e.code === LEFT) this.pressedMovementKeys.left = false;
            if (e.code === RIGHT) this.pressedMovementKeys.right = false;

            // actions
            if (e.code === SHOOT) InputActions.shootUp();
            if (e.code === SLOWMO) InputActions.slowmoUp();
        });
    }
}
