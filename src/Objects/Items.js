import { game } from '../../app.js';
import { ITEMSHUD } from '../Assets/Hud.js';

export const ITEMS = {
    airstrike: {
        name: 'airstrike',
        activate: () => (game.itemactioncontroller.airstrike = true),
        icon: ITEMSHUD.AIRSTRIKE_ICON,
        notification: ITEMSHUD.AIRSTRIKE_NOTIFICATION,
    },
    bomb: {
        name: 'bomb',
        activate: () => (game.itemactioncontroller.bomb = true),
        icon: ITEMSHUD.BOMBS_ICON,
        notification: ITEMSHUD.BOMBS_NOTIFICATION,
    },
    clock: {
        name: 'clock',
        activate: () => (game.player.clock.owned = true),
        icon: ITEMSHUD.CLOCK_ICON,
        notification: ITEMSHUD.CLOCK_NOTIFICATION,
    },
    darts: {
        name: 'darts',
        activate: () => (game.itemactioncontroller.darts = true),
        icon: ITEMSHUD.DARTS_ICON,
        notification: ITEMSHUD.DARTS_NOTIFICATION,
    },
    emp: {
        name: 'emp',
        activate: () => (game.itemactioncontroller.emp = true),
        icon: ITEMSHUD.EMP_ICON,
        notification: ITEMSHUD.EMP_NOTIFICATION,
    },
    greed: {
        name: 'greed',
        activate: () => (game.itemactioncontroller.greed = true),
        icon: ITEMSHUD.GREED_ICON,
        notification: ITEMSHUD.GREED_NOTIFICATION,
    },
    grenade: {
        name: 'grenade',
        activate: () => (game.player.grenade.owned = true),
        icon: ITEMSHUD.GRENADE_ICON,
        notification: ITEMSHUD.GRENADE_NOTIFICATION,
    },
    loopers: {
        name: 'loopers',
        activate: () => (game.itemactioncontroller.loopers = true),
        icon: ITEMSHUD.LOOPERS_ICON,
        notification: ITEMSHUD.LOOPERS_NOTIFICATION,
    },
    machinegun: {
        name: 'machinegun',
        activate: () => (game.itemactioncontroller.machinegun = true),
        icon: ITEMSHUD.MACHINEGUN_ICON,
        notification: ITEMSHUD.MACHINEGUN_NOTIFICATION,
    },
    metalshield: {
        name: 'metalshield',
        activate: () => (game.itemactioncontroller.metalshield = true),
        icon: ITEMSHUD.METALSHIELD_ICON,
        notification: ITEMSHUD.METALSHIELD_NOTIFICATION,
    },
    multiplydamage: {
        name: 'multiplydamage',
        activate: () => game.itemactioncontroller.incrementDamageMultiplier(),
        icon: ITEMSHUD.DAMAGE_ICON,
        notification: ITEMSHUD.DAMAGE_NOTIFICATION,
    },
    rocket: {
        name: 'rocket',
        activate: () => (game.itemactioncontroller.rocket = true),
        icon: ITEMSHUD.ROCKET_ICON,
        notification: ITEMSHUD.ROCKET_NOTIFICATION,
    },
    seekers: {
        name: 'seekers',
        activate: () => (game.itemactioncontroller.seekers = true),
        icon: ITEMSHUD.SEEKERS_ICON,
        notification: ITEMSHUD.SEEKERS_NOTIFICATION,
    },
    slicer: {
        name: 'slicer',
        activate: () => (game.itemactioncontroller.slicer = true),
        icon: ITEMSHUD.SLICER_ICON,
        notification: ITEMSHUD.SLICER_NOTIFICATION,
    },
    shotgun: {
        name: 'shotgun',
        activate: () => (game.player.shotgun.owned = true),
        icon: ITEMSHUD.SHOTGUN_ICON,
        notification: ITEMSHUD.SHOTGUN_NOTIFICATION,
    },
    spray: {
        name: 'spray',
        activate: () => game.itemactioncontroller.spray++,
        icon: ITEMSHUD.SPRAY_ICON,
        notification: ITEMSHUD.SPRAY_NOTIFICATION,
    },
    timefreeze: {
        name: 'timefreeze',
        activate: () => (game.slowmocontroller.slowmorate = 0.05),
        icon: ITEMSHUD.TIMEFREEZE_ICON,
        notification: ITEMSHUD.TIMEFREEZE_NOTIFICATION,
    },
    toxic: {
        name: 'toxic',
        activate: () => (game.itemactioncontroller.toxic = true),
        icon: ITEMSHUD.TOXIC_ICON,
        notification: ITEMSHUD.TOXIC_NOTIFICATION,
    },
    uranium: {
        name: 'uranium',
        activate: () => (game.itemactioncontroller.uranium = true),
        icon: ITEMSHUD.URANIUM_ICON,
        notification: ITEMSHUD.URANIUM_NOTIFICATION,
    },
};
