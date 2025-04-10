import { game } from '../../../app.js';
import { RedInvader } from '../../Actors/Enemies/Types/RedInvader.js';
import { GreenInvader } from '../../Actors/Enemies/Types/GreenInvader.js';
import { GreenTerror } from '../../Actors/Enemies/Types/GreenTerror.js';
import { GreenEmperor } from '../../Actors/Enemies/Types/GreenEmperor.js';
import { GreenUfo } from '../../Actors/Enemies/Types/GreenUfo.js';
import { GreenPlacer } from '../../Actors/Enemies/Types/GreenPlacer.js';
import { RedUfo } from '../../Actors/Enemies/Types/RedUfo.js';
import { RedEmperor } from '../../Actors/Enemies/Types/RedEmperor.js';
import { RedTerror } from '../../Actors/Enemies/Types/RedTerror.js';
import { BlackEmperor } from '../../Actors/Enemies/Types/BlackEmperor.js';
import { BlackPlacer } from '../../Actors/Enemies/Types/BlackPlacer.js';
import { BlackInvader } from '../../Actors/Enemies/Types/BlackInvader.js';
import { RedPlacer } from '../../Actors/Enemies/Types/RedPlacer.js';
import { BlackTerror } from '../../Actors/Enemies/Types/BlackTerror.js';
import { YellowUfo } from '../../Actors/Enemies/Types/YellowUfo.js';
import { FamiliarSight } from '../../Actors/Enemies/Bosses/FamiliarSight.js';
import { OrangePackage } from '../../Actors/Packages/OrangePackage.js';
import { Abuser } from '../../Actors/Enemies/Bosses/Abuser.js';
import { BlueInvader } from '../../Actors/Enemies/Types/BlueInvader.js';
import { BlueUfo } from '../../Actors/Enemies/Types/BlueUfo.js';
import { BluePlacer } from '../../Actors/Enemies/Types/BluePlacer.js';
import { BlueEmperor } from '../../Actors/Enemies/Types/BlueEmperor.js';
import { BlueTerror } from '../../Actors/Enemies/Types/BlueTerror.js';
import { Fk77 } from '../../Actors/Enemies/Bosses/Fk77.js';
import { Diver } from '../../Actors/Enemies/Types/Diver.js';
import { GreasyHarvey } from '../../Actors/Enemies/Bosses/GreasyHarvey.js';
import { MetalEmperor } from '../../Actors/Enemies/Bosses/MetalEmperor.js';

const ENEMIES = [
    // STAGE 1
    { type: GreenInvader, start: 4, end: 290, interval: 4 },
    { type: GreenUfo, start: 17, end: 290, interval: 11 },
    { type: Diver, start: 60, end: 290, interval: 60 },
    { type: GreenTerror, start: 45, end: 290, interval: 45 },
    { type: GreenPlacer, start: 60, end: 290, interval: 50 },
    { type: GreenEmperor, start: 120, end: 290, interval: 55 },
    { type: BlueInvader, start: 90, end: 290, interval: 35 },
    { type: BlueUfo, start: 90, end: 290, interval: 40 },
    { type: OrangePackage, start: 180, end: 270, interval: 90 },
    { type: GreasyHarvey, start: 300, boss: true },

    // STAGE 2
    { type: GreenInvader, start: 301, end: 590, interval: 4 },
    { type: GreenUfo, start: 301, end: 590, interval: 11 },
    { type: Diver, start: 360, end: 590, interval: 60 },
    { type: BlueInvader, start: 317, end: 590, interval: 11 },
    { type: BlueUfo, start: 330, end: 590, interval: 17 },
    { type: BlueTerror, start: 365, end: 590, interval: 40 },
    { type: BluePlacer, start: 360, end: 590, interval: 35 },
    { type: BlueEmperor, start: 420, end: 590, interval: 45 },
    { type: RedInvader, start: 390, end: 590, interval: 25 },
    { type: RedUfo, start: 415, end: 590, interval: 25 },
    { type: OrangePackage, start: 360, end: 570, interval: 90 },
    { type: MetalEmperor, start: 600, boss: true },

    // STAGE 3
    { type: BlueInvader, start: 601, end: 890, interval: 4 },
    { type: BlueUfo, start: 601, end: 890, interval: 11 },
    { type: Diver, start: 660, end: 890, interval: 60 },
    { type: RedInvader, start: 605, end: 890, interval: 11 },
    { type: RedUfo, start: 635, end: 890, interval: 14 },
    { type: RedTerror, start: 740, end: 890, interval: 40 },
    { type: RedPlacer, start: 685, end: 890, interval: 35 },
    { type: RedEmperor, start: 730, end: 890, interval: 45 },
    { type: OrangePackage, start: 630, end: 870, interval: 90 },
    { type: FamiliarSight, start: 900, boss: true },

    // STAGE 4
    { type: RedInvader, start: 905, end: 1185, interval: 4 },
    { type: RedUfo, start: 910, end: 1185, interval: 11 },
    { type: RedPlacer, start: 960, end: 1185, interval: 30 },
    { type: RedEmperor, start: 990, end: 1185, interval: 40 },
    { type: RedTerror, start: 1050, end: 1185, interval: 35 },
    { type: Diver, start: 960, end: 1185, interval: 60 },
    { type: BlackInvader, start: 1050, end: 1185, interval: 20 },
    { type: YellowUfo, start: 1050, end: 1185, interval: 14 },
    { type: OrangePackage, start: 950, end: 1170, interval: 90 },
    { type: Fk77, start: 1200, boss: true },

    // STAGE 5
    { type: BlackInvader, start: 1205, end: 1490, interval: 4 },
    { type: Diver, start: 1260, end: 1490, interval: 60 },
    { type: YellowUfo, start: 1210, end: 1490, interval: 11 },
    { type: BlackPlacer, start: 1260, end: 1490, interval: 30 },
    { type: BlackEmperor, start: 1290, end: 1490, interval: 40 },
    { type: BlackTerror, start: 1320, end: 1490, interval: 35 },
    { type: OrangePackage, start: 1250, end: 1470, interval: 90 },
    { type: Abuser, start: 1500, boss: true },
];

export class EnemyController {
    constructor() {
        setInterval(() => {
            ENEMIES.forEach((enemy) => {
                if (this.shouldSpawn(enemy)) game.enemies.add(new enemy.type());
            });
        }, 1000);
    }

    shouldSpawn(enemy) {
        // enemy is boss
        const isBossTime = game.state.time === enemy.start && !game.state.boss && enemy.boss;

        // enemy is in specified time bracket
        const isInRange = game.state.time >= enemy.start && game.state.time <= enemy.end;

        // game is not in boss/paused/clock state
        const isInState = !game.state.boss && !game.state.paused && !game.player.clock.active;

        // enemy's interval is reached (not in slowmo mode)
        const isInSpawnTime = game.state.time % enemy.interval === 0 && !game.state.slowmo;

        // enemy's interval is reached (in slowmo mode)
        const isInSlowmoSpawntime =
            game.state.time % (enemy.interval / game.slowmocontroller.slowmorate) === 0 && game.state.slowmo;

        // check for all conditions
        return isBossTime || (isInRange && isInState && (isInSpawnTime || isInSlowmoSpawntime));
    }
}
