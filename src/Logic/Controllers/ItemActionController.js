import { game } from '../../../app.js';
import { DamageNumber } from '../../Effects/Misc/DamageNumber.js';
import { Slash } from '../../Effects/Misc/Slash.js';
import { Airstrike } from '../../Lasers/Friendly/Airstrike.js';
import { BlueLaser } from '../../Lasers/Friendly/BlueLaser.js';
import { Dart } from '../../Lasers/Friendly/Dart.js';
import { Rocket } from '../../Lasers/Friendly/Rocket.js';
import { Seeker } from '../../Lasers/Friendly/Seeker.js';
import { SceneUtils } from '../../Scene/SceneUtils.js';
import { getClosestEnemyTo, randomInRange } from '../Helpers.js';

// OFFENSIVE ITEMS MODIFIERS
const AIRSTRIKECHANCE = 10; // % of triggering an airstrike
const AIRSTRIKERATE = 2; // damage multiplier dealt by airstrike (1 = full damage);
const BOMBRATE = 0.2; // damage multiplier dealt to other enemies on screen (1 = full damage)
const DARTSRATE = 0.5; // damage multiplier dealt by darts when stun successful (1 = full damage)
const DARTSSTUNCHANCE = 15; // % to stun enemy when darts is upgraded
const EMPRATE = 0.4; // damage multiplier dealt by emp to enemies when player is hit (1 = full damage)
const MACHINEGUNRATE = 110; // shooting-rate of the machine gun. lower = faster (rate without upgrade is 150)
const ROCKETCHANCE = 15; // % of firing a rocket
const ROCKETDAMAGE = 4; // damage multiplier dealth by rocket (1 = full damage)
const SLICERCHANCE = 5; // % of dealing slicer crit
const SLICERRATE = 4; // damage multiplier dealt by slicer
const SEEKERRATE = 0.7; // damage multiplier dealt by seekers (1 = full damage)
const SPRAYDISTANCE = 5; // distance between laser streams when spray upgrade is acquired
const STUNTIME = 1250; // time to stun enemies in ms
const TOXICRATE = 0.4; // damage multiplier dealt to enemies by toxic slowmo (1 = full damage)

// DEFENSIVE ITEMS MODIFIERS
const GREEDCHANCE = 20; // % of receiving double coins
const METALSHIELDTIME = 2; // invincibility time after being hit, in seconds (time without upgrade is 1)
const URANIUMRATE = 0.6; // rate at which slowmo depletes (lower = slower. default without upgrade is 0.75)

export class ItemActionController {
    constructor() {
        this.init();

        // set toxic-waste observer
        this.toxicObserver = setInterval(() => {
            if (game.state.slowmo && this.toxic) {
                game.enemies.damageAll(randomInRange(2, 6) * this.damageMultiplier * this.toxicrate);
            }
        }, 500);
    }

    init() {
        this.airstrike = false;
        this.bomb = false;
        this.darts = false;
        this.emp = false;
        this.greed = false;
        this.grenade = false;
        this.loopers = false;
        this.machinegun = false;
        this.metalshield = false;
        this.rocket = false;
        this.slicer = false;
        this.toxic = false;
        this.seekers = false;
        this.uranium = false;

        this.airstrikechance = AIRSTRIKECHANCE;
        this.airstrikerate = AIRSTRIKERATE;
        this.bombdamagerate = BOMBRATE;
        this.dartsrate = DARTSRATE;
        this.dartsstunchance = DARTSSTUNCHANCE;
        this.emprate = EMPRATE;
        this.greedchance = GREEDCHANCE;
        this.machinegunrate = MACHINEGUNRATE;
        this.metalshieldtime = METALSHIELDTIME;
        this.rocketdamage = ROCKETDAMAGE;
        this.rocketchance = ROCKETCHANCE;
        this.slicerchance = SLICERCHANCE;
        this.slicerrate = SLICERRATE;
        this.seekerrate = SEEKERRATE;
        this.stuntime = STUNTIME;
        this.toxicrate = TOXICRATE;
        this.uraniumrate = URANIUMRATE;

        this.spray = 0;
        this.dmgMultiplier = 1;
    }

    blowEmp() {
        game.enemies.damageAll(randomInRange(2, 6) * this.damageMultiplier * this.emprate);
        game.firelasers.clear();
    }

    bombAll(laser) {
        game.enemies.damageAll(laser.damage * this.bombdamagerate);
    }

    get damageMultiplier() {
        if (game.buffcontroller.quaddamage) {
            return this.dmgMultiplier * 4;
        }
        if (game.buffcontroller.thorshammer) {
            return this.dmgMultiplier * 2;
        }
        return this.dmgMultiplier;
    }

    get greedMultiplier() {
        const greedroll = randomInRange(0, 100);
        if (this.greed && greedroll < this.greedchance) {
            return 2;
        }
        return 1;
    }

    incrementDamageMultiplier() {
        this.dmgMultiplier += 0.5;
    }

    sendAirstrike(laser) {
        const airstrikeroll = randomInRange(0, 100);
        if (
            game.enemies.enemiesOnScreen() &&
            airstrikeroll < this.airstrikechance &&
            laser.constructor !== Airstrike &&
            laser.constructor !== Dart
        ) {
            game.enemies.liveEnemies.forEach((enemy, index) => {
                setTimeout(() => {
                    game.bluelasers.add(new Airstrike(enemy));
                }, 100 * index);
            });
        }
    }

    shootDart() {
        game.bluelasers.add(new Dart());
    }

    shootRocket() {
        const rocketroll = randomInRange(0, 100);
        if (rocketroll < this.rocketchance) {
            game.bluelasers.add(new Rocket());
        }
    }

    shootSeeker() {
        game.bluelasers.add(new Seeker(getClosestEnemyTo(game.player)));
    }

    shootSpray() {
        const NORTH = 270;

        // if the spray number is even, skew the laser's angle by 2.5 degrees
        let direction = this.spray % 2 ? NORTH - 2.5 : NORTH;

        // fire the first laser
        game.bluelasers.add(new BlueLaser(direction));

        // calculate the remaning sprays directions & fire them
        let spraycount = 1;
        for (let i = 0; i < this.spray; i++) {
            // spray left
            if (i % 2) {
                game.bluelasers.add(new BlueLaser(direction - SPRAYDISTANCE * spraycount));
                spraycount++;
            }
            // spray right
            else {
                game.bluelasers.add(new BlueLaser(direction + SPRAYDISTANCE * spraycount));
            }
        }
    }

    slice(laser, enemy) {
        const slicerroll = randomInRange(0, 100);
        if (slicerroll < this.slicerchance) {
            game.audiocontroller.playSound('swoosh');
            game.effects.add(new Slash(enemy.x, enemy.y, true));
            game.effects.add(new DamageNumber(enemy.x, enemy.y, laser.damage * this.slicerrate, true));
            SceneUtils.shakeScreen(2, 0.5);
            enemy.takeDamage(laser.damage * this.slicerrate);
        }
    }

    stunWithDart(laser, enemy) {
        const stunroll = randomInRange(0, 100);
        if (stunroll < this.dartsstunchance) {
            enemy.stun();
            enemy.takeDamage(laser.damage * this.dartsrate);
        }
    }
}
