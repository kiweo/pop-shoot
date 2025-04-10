import { game } from '../../../app.js';
import {
    LASERSOUND,
    RELOADSOUND,
    SHIELDDOWNSOUND,
    SHIELDUPSOUND,
    MUSICS0,
    MUSICS1,
    MUSICS2,
    MUSICS3,
    MUSICBOSS0,
    MUSICBOSS1,
    MUSICBOSS2,
    MUSICGAMEOVER,
    HITSOUND,
    HITQUADSOUND,
    HITMETALSOUND,
    MUSICCLOCK,
    MUSICBOSS3,
    MUSICBOSS4,
    MUSICS4,
    DIVERSOUND,
    SLOWMOCHARGESOUND,
    SLOWMOEMPTYSOUND,
    RAINSOUND,
    THUNDER0SOUND,
    THUNDER1SOUND,
    WINDSOUND,
    SANDSOUND,
    MIRAGESOUND,
    VORTEXSOUND,
    GLITCHSOUND,
    MATRIXSOUND,
    ANXIETYSOUND,
    PHASESOUND,
    SPLASHSOUND,
    PHEWSOUND,
    EXPLOSIONSOUND,
    SMOKESOUND,
    SWOOSHSOUND,
    STEAMSOUND,
    BEEPREDSOUND,
    BEEPORANGESOUND,
    POWERDOWNSOUND,
    FAMILIARMGSOUND,
    SIRENSOUND,
    COINSOUND,
    DRAINSOUND,
    NOAMMOSOUND,
    RAYSOUND,
    EMPSCREAMSOUND,
    HARVEYSOUND,
    ICUSOUND,
    APPEARSOUND,
    SNIPERSHOTSOUND,
    BEEPSOUND,
    READYSOUND,
    SLOWMOSOUND,
} from '../../Assets/Audio.js';

const MUSIC = {
    stage0: MUSICS0,
    stage1: MUSICS1,
    stage2: MUSICS2,
    stage3: MUSICS3,
    stage4: MUSICS4,
    boss0: MUSICBOSS0,
    boss1: MUSICBOSS1,
    boss2: MUSICBOSS2,
    boss3: MUSICBOSS3,
    boss4: MUSICBOSS4,
    gameover: MUSICGAMEOVER,
    clock: MUSICCLOCK,
};

const SOUNDS = {
    // optional properties:
    // rewind: bool - on next playback, the sound will play from beginning instead of resuming.
    // clone: bool - as many instances as needed will be played (without waiting for previous instance to finish).
    // loop: bool - self-explanatory. the sound will keep looping.
    // limit: int - limit how many instances of the sound can be played at the same time.

    anxiety: {
        audio: ANXIETYSOUND,
        volume: 1,
    },
    appear: {
        audio: APPEARSOUND,
        volume: 1,
    },
    beep: {
        audio: BEEPSOUND,
        volume: 1,
    },
    beepRed: {
        audio: BEEPREDSOUND,
        volume: 1,
        clone: true,
    },
    beepOrange: {
        audio: BEEPORANGESOUND,
        volume: 1,
    },
    bigThunder: {
        audio: THUNDER0SOUND,
        volume: 1,
    },
    coin: {
        audio: COINSOUND,
        clone: true,
        volume: 1,
        limit: 10,
    },
    diver: {
        audio: DIVERSOUND,
        volume: 1,
    },
    drain: {
        audio: DRAINSOUND,
        volume: 1,
        clone: true,
    },
    empscream: {
        audio: EMPSCREAMSOUND,
        volume: 1,
    },
    explosion: {
        audio: EXPLOSIONSOUND,
        clone: true,
        volume: 1,
    },
    familiarMg: {
        audio: FAMILIARMGSOUND,
        rewind: true,
        volume: 1,
    },
    glitch: {
        audio: GLITCHSOUND,
        volume: 1,
    },
    harvey: {
        audio: HARVEYSOUND,
        volume: 1,
    },
    hit: {
        audio: HITSOUND,
        clone: true,
        volume: 0.5,
        limit: 5,
    },
    hitMetal: {
        audio: HITMETALSOUND,
        clone: true,
        volume: 0.5,
        limit: 5,
    },
    hitQuad: {
        audio: HITQUADSOUND,
        clone: true,
        volume: 0.5,
        limit: 5,
    },
    icu: {
        audio: ICUSOUND,
        volume: 1,
    },
    laser: {
        audio: LASERSOUND,
        clone: true,
        volume: 0.7,
        limit: 5,
    },
    matrix: {
        audio: MATRIXSOUND,
        volume: 0.5,
        loop: true,
    },
    mirage: {
        audio: MIRAGESOUND,
        volume: 1,
    },
    noammo: {
        audio: NOAMMOSOUND,
        volume: 1,
    },
    phase: {
        audio: PHASESOUND,
        clone: true,
        volume: 1,
    },
    phew: {
        audio: PHEWSOUND,
        clone: true,
        volume: 1,
    },
    powerDown: {
        audio: POWERDOWNSOUND,
        volume: 1,
    },
    rain: {
        audio: RAINSOUND,
        volume: 1,
        loop: true,
    },
    ray: {
        audio: RAYSOUND,
        clone: true,
        volume: 0.6,
    },
    ready: {
        audio: READYSOUND,
        clone: true,
        volume: 1,
    },
    reload: {
        audio: RELOADSOUND,
        clone: true,
        volume: 1,
    },
    sand: {
        audio: SANDSOUND,
        volume: 1,
        loop: true,
    },
    shieldDown: {
        audio: SHIELDDOWNSOUND,
        volume: 1,
    },
    shieldUp: {
        audio: SHIELDUPSOUND,
        volume: 1,
    },
    siren: {
        audio: SIRENSOUND,
        rewind: true,
        volume: 0.7,
        loop: true,
    },
    slowmo: {
        audio: SLOWMOSOUND,
        rewind: true,
        volume: 1,
    },
    slowmoCharge: {
        audio: SLOWMOCHARGESOUND,
        rewind: true,
        volume: 1,
    },
    slowmoEmpty: {
        audio: SLOWMOEMPTYSOUND,
        clone: true,
        volume: 1,
    },
    smallThunder: {
        audio: THUNDER1SOUND,
        volume: 1,
    },
    smoke: {
        audio: SMOKESOUND,
        clone: true,
        volume: 1,
    },
    snipershot: {
        audio: SNIPERSHOTSOUND,
        volume: 1,
    },
    splash: {
        audio: SPLASHSOUND,
        clone: true,
        volume: 1,
    },
    steam: {
        audio: STEAMSOUND,
        volume: 1,
    },
    swoosh: {
        audio: SWOOSHSOUND,
        clone: true,
        volume: 1,
    },
    vortex: {
        audio: VORTEXSOUND,
        volume: 0.3,
        loop: true,
    },
    wind: {
        audio: WINDSOUND,
        volume: 1,
        loop: true,
    },
};

export class AudioController {
    constructor() {
        // set all music to loop
        for (const key in MUSIC) {
            MUSIC[key].loop = true;
        }

        // set all sounds with 'loop' property to loop
        for (const key in SOUNDS) {
            if (SOUNDS[key].loop) {
                SOUNDS[key].audio.loop = true;
            }
        }

        // used to keep track of limited sounds
        this.limits = {};
    }

    // MUSIC

    updateMusic() {
        // pause all tracks
        for (const key in MUSIC) MUSIC[key].pause();

        // play corresponding track according to game state
        if (game.state.over) {
            MUSIC['gameover'].play();
        } else if (game.player.clock.active) {
            MUSIC['clock'].play();
        } else if (game.state.boss) {
            return MUSIC[`boss${game.state.stage}`].play();
        } else {
            MUSIC[`stage${game.state.stage}`].play();
        }
    }

    lowerMusicVolume() {
        for (const key in MUSIC) MUSIC[key].volume = 0.4;
    }

    restoreMusicVolume() {
        for (const key in MUSIC) MUSIC[key].volume = 1;
    }

    rewindMusic() {
        for (const key in MUSIC) {
            MUSIC[key].currentTime = 0;
        }
    }

    // SOUNDS

    playSound(type) {
        const sound = SOUNDS[type].clone ? SOUNDS[type].audio.cloneNode() : SOUNDS[type].audio;
        sound.volume = SOUNDS[type].volume;

        if (SOUNDS[type].limit) {
            if (this.limits[type] === undefined) {
                this.limits[type] = 0;
            }

            sound.onended = () => {
                this.limits[type]--;
            };
            if (this.limits[type] <= SOUNDS[type].limit) {
                this.limits[type]++;
                sound.play();
            }
        } else {
            sound.play();
        }
    }

    stopSound(type) {
        const sound = SOUNDS[type];
        if (sound.rewind) {
            sound.audio.currentTime = 0;
        }
        sound.audio.pause();
    }
}
