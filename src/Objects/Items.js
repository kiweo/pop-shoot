import { game } from '../../app.js';
import { ITEMSHUD } from '../Assets/Hud.js';

export const ITEMS = {
    airstrike: {
        name: 'airstrike',
        activate: () => (game.itemactioncontroller.airstrike = true),
        icon: ITEMSHUD.AIRSTRIKE_ICON,
        pause: ITEMSHUD.AIRSTRIKE_PAUSE,
        notification: ITEMSHUD.AIRSTRIKE_NOTIFICATION,
    },
    bomb: {
        name: 'bomb',
        activate: () => (game.itemactioncontroller.bomb = true),
        icon: ITEMSHUD.BOMBS_ICON,
        pause: ITEMSHUD.BOMBS_PAUSE,
        notification: ITEMSHUD.BOMBS_NOTIFICATION,
    },
    clock: {
        name: 'clock',
        activate: () => (game.player.clock.owned = true),
        icon: ITEMSHUD.CLOCK_ICON,
        pause: ITEMSHUD.CLOCK_PAUSE,
        notification: ITEMSHUD.CLOCK_NOTIFICATION,
    },
    darts: {
        name: 'darts',
        activate: () => (game.itemactioncontroller.darts = true),
        icon: ITEMSHUD.DARTS_ICON,
        pause: ITEMSHUD.DARTS_PAUSE,
        notification: ITEMSHUD.DARTS_NOTIFICATION,
    },
    emp: {
        name: 'emp',
        activate: () => (game.itemactioncontroller.emp = true),
        icon: ITEMSHUD.EMP_ICON,
        pause: ITEMSHUD.EMP_PAUSE,
        notification: ITEMSHUD.EMP_NOTIFICATION,
    },
    greed: {
        name: 'greed',
        activate: () => (game.itemactioncontroller.greed = true),
        icon: ITEMSHUD.GREED_ICON,
        pause: ITEMSHUD.GREED_PAUSE,
        notification: ITEMSHUD.GREED_NOTIFICATION,
    },
    grenade: {
        name: 'grenade',
        activate: () => (game.player.grenade.owned = true),
        icon: ITEMSHUD.GRENADE_ICON,
        pause: ITEMSHUD.GRENADE_PAUSE,
        notification: ITEMSHUD.GRENADE_NOTIFICATION,
    },
    loopers: {
        name: 'loopers',
        activate: () => (game.itemactioncontroller.loopers = true),
        icon: ITEMSHUD.LOOPERS_ICON,
        pause: ITEMSHUD.LOOPERS_PAUSE,
        notification: ITEMSHUD.LOOPERS_NOTIFICATION,
    },
    machinegun: {
        name: 'machinegun',
        activate: () => (game.itemactioncontroller.machinegun = true),
        icon: ITEMSHUD.MACHINEGUN_ICON,
        pause: ITEMSHUD.MACHINEGUN_PAUSE,
        notification: ITEMSHUD.MACHINEGUN_NOTIFICATION,
    },
    metalshield: {
        name: 'metalshield',
        activate: () => (game.itemactioncontroller.metalshield = true),
        icon: ITEMSHUD.METALSHIELD_ICON,
        pause: ITEMSHUD.METALSHIELD_PAUSE,
        notification: ITEMSHUD.METALSHIELD_NOTIFICATION,
    },
    multiplydamage: {
        name: 'multiplydamage',
        activate: () => game.itemactioncontroller.incrementDamageMultiplier(),
        icon: ITEMSHUD.DAMAGE_ICON,
        pause: ITEMSHUD.DAMAGE_PAUSE,
        notification: ITEMSHUD.DAMAGE_NOTIFICATION,
    },
    nitrogen: {
        name: 'nitrogen',
        activate: () => (game.itemactioncontroller.nitrogen = true),
        icon: ITEMSHUD.NITROGEN_ICON,
        pause: ITEMSHUD.NITROGEN_PAUSE,
        notification: ITEMSHUD.NITROGEN_NOTIFICATION,
    },
    rocket: {
        name: 'rocket',
        activate: () => (game.itemactioncontroller.rocket = true),
        icon: ITEMSHUD.ROCKET_ICON,
        pause: ITEMSHUD.ROCKET_PAUSE,
        notification: ITEMSHUD.ROCKET_NOTIFICATION,
    },
    seekers: {
        name: 'seekers',
        activate: () => (game.itemactioncontroller.seekers = true),
        icon: ITEMSHUD.SEEKERS_ICON,
        pause: ITEMSHUD.SEEKERS_PAUSE,
        notification: ITEMSHUD.SEEKERS_NOTIFICATION,
    },
    slicer: {
        name: 'slicer',
        activate: () => (game.itemactioncontroller.slicer = true),
        icon: ITEMSHUD.SLICER_ICON,
        pause: ITEMSHUD.SLICER_PAUSE,
        notification: ITEMSHUD.SLICER_NOTIFICATION,
    },
    shotgun: {
        name: 'shotgun',
        activate: () => (game.player.shotgun.owned = true),
        icon: ITEMSHUD.SHOTGUN_ICON,
        pause: ITEMSHUD.SHOTGUN_PAUSE,
        notification: ITEMSHUD.SHOTGUN_NOTIFICATION,
    },
    spray: {
        name: 'spray',
        activate: () => game.itemactioncontroller.spray++,
        icon: ITEMSHUD.SPRAY_ICON,
        pause: ITEMSHUD.SPRAY_PAUSE,
        notification: ITEMSHUD.SPRAY_NOTIFICATION,
    },
    timefreeze: {
        name: 'timefreeze',
        activate: () => (game.slowmocontroller.slowmorate = 0.05),
        icon: ITEMSHUD.TIMEFREEZE_ICON,
        pause: ITEMSHUD.TIMEFREEZE_PAUSE,
        notification: ITEMSHUD.TIMEFREEZE_NOTIFICATION,
    },
    toxic: {
        name: 'toxic',
        activate: () => (game.itemactioncontroller.toxic = true),
        icon: ITEMSHUD.TOXIC_ICON,
        pause: ITEMSHUD.TOXIC_PAUSE,
        notification: ITEMSHUD.TOXIC_NOTIFICATION,
    },
    uranium: {
        name: 'uranium',
        activate: () => (game.itemactioncontroller.uranium = true),
        icon: ITEMSHUD.URANIUM_ICON,
        pause: ITEMSHUD.URANIUM_PAUSE,
        notification: ITEMSHUD.URANIUM_NOTIFICATION,
    },
};
