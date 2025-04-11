import { game } from '../../../app.js';
import { AUDIO } from '../../Assets/Audio.js';

const MUSIC = {
    stage0: AUDIO.MUSICS0,
    stage1: AUDIO.MUSICS1,
    stage2: AUDIO.MUSICS2,
    stage3: AUDIO.MUSICS3,
    stage4: AUDIO.MUSICS4,
    boss0: AUDIO.MUSICBOSS0,
    boss1: AUDIO.MUSICBOSS1,
    boss2: AUDIO.MUSICBOSS2,
    boss3: AUDIO.MUSICBOSS3,
    boss4: AUDIO.MUSICBOSS4,
    gameover: AUDIO.MUSICGAMEOVER,
    clock: AUDIO.MUSICCLOCK,
};

const SOUNDFX = {
    // optional properties:
    // rewind: bool - on next playback, the sound will play from beginning instead of resuming.
    // clone: bool - as many instances as needed will be played (without waiting for previous instance to finish).
    // loop: bool - self-explanatory. the sound will keep looping.
    // limit: int - limit how many instances of the sound can be played at the same time.

    anxiety: {
        audio: AUDIO.ANXIETYSOUND,
        volume: 1,
    },
    appear: {
        audio: AUDIO.APPEARSOUND,
        volume: 1,
    },
    beep: {
        audio: AUDIO.BEEPSOUND,
        volume: 1,
    },
    beepRed: {
        audio: AUDIO.BEEPREDSOUND,
        volume: 1,
        clone: true,
    },
    beepOrange: {
        audio: AUDIO.BEEPORANGESOUND,
        volume: 1,
    },
    bigThunder: {
        audio: AUDIO.THUNDER0SOUND,
        volume: 1,
    },
    coin: {
        audio: AUDIO.COINSOUND,
        clone: true,
        volume: 1,
        limit: 10,
    },
    diver: {
        audio: AUDIO.DIVERSOUND,
        volume: 1,
    },
    drain: {
        audio: AUDIO.DRAINSOUND,
        volume: 1,
        clone: true,
    },
    empscream: {
        audio: AUDIO.EMPSCREAMSOUND,
        volume: 1,
    },
    explosion: {
        audio: AUDIO.EXPLOSIONSOUND,
        clone: true,
        volume: 1,
    },
    familiarMg: {
        audio: AUDIO.FAMILIARMGSOUND,
        rewind: true,
        volume: 1,
    },
    glitch: {
        audio: AUDIO.GLITCHSOUND,
        volume: 1,
    },
    harvey: {
        audio: AUDIO.HARVEYSOUND,
        volume: 1,
    },
    hit: {
        audio: AUDIO.HITSOUND,
        clone: true,
        volume: 0.5,
        limit: 5,
    },
    hitMetal: {
        audio: AUDIO.HITMETALSOUND,
        clone: true,
        volume: 0.5,
        limit: 5,
    },
    hitQuad: {
        audio: AUDIO.HITQUADSOUND,
        clone: true,
        volume: 0.5,
        limit: 5,
    },
    icu: {
        audio: AUDIO.ICUSOUND,
        volume: 1,
    },
    laser: {
        audio: AUDIO.LASERSOUND,
        clone: true,
        volume: 0.7,
        limit: 5,
    },
    matrix: {
        audio: AUDIO.MATRIXSOUND,
        volume: 0.5,
        loop: true,
    },
    mirage: {
        audio: AUDIO.MIRAGESOUND,
        volume: 1,
    },
    noammo: {
        audio: AUDIO.NOAMMOSOUND,
        volume: 1,
    },
    phase: {
        audio: AUDIO.PHASESOUND,
        clone: true,
        volume: 1,
    },
    phew: {
        audio: AUDIO.PHEWSOUND,
        clone: true,
        volume: 1,
    },
    powerDown: {
        audio: AUDIO.POWERDOWNSOUND,
        volume: 1,
    },
    rain: {
        audio: AUDIO.RAINSOUND,
        volume: 1,
        loop: true,
    },
    ray: {
        audio: AUDIO.RAYSOUND,
        clone: true,
        volume: 0.6,
    },
    ready: {
        audio: AUDIO.READYSOUND,
        clone: true,
        volume: 1,
    },
    reload: {
        audio: AUDIO.RELOADSOUND,
        clone: true,
        volume: 0.6,
    },
    sand: {
        audio: AUDIO.SANDSOUND,
        volume: 1,
        loop: true,
    },
    shieldDown: {
        audio: AUDIO.SHIELDDOWNSOUND,
        volume: 1,
    },
    shieldUp: {
        audio: AUDIO.SHIELDUPSOUND,
        volume: 1,
    },
    siren: {
        audio: AUDIO.SIRENSOUND,
        rewind: true,
        volume: 0.7,
        loop: true,
    },
    slowmo: {
        audio: AUDIO.SLOWMOSOUND,
        rewind: true,
        volume: 1,
    },
    slowmoCharge: {
        audio: AUDIO.SLOWMOCHARGESOUND,
        rewind: true,
        volume: 1,
    },
    slowmoEmpty: {
        audio: AUDIO.SLOWMOEMPTYSOUND,
        clone: true,
        volume: 1,
    },
    smallThunder: {
        audio: AUDIO.THUNDER1SOUND,
        volume: 1,
    },
    smoke: {
        audio: AUDIO.SMOKESOUND,
        clone: true,
        volume: 1,
    },
    snipershot: {
        audio: AUDIO.SNIPERSHOTSOUND,
        volume: 1,
    },
    splash: {
        audio: AUDIO.SPLASHSOUND,
        clone: true,
        volume: 1,
    },
    steam: {
        audio: AUDIO.STEAMSOUND,
        volume: 1,
    },
    swoosh: {
        audio: AUDIO.SWOOSHSOUND,
        clone: true,
        volume: 1,
    },
    vortex: {
        audio: AUDIO.VORTEXSOUND,
        volume: 0.3,
        loop: true,
    },
    wind: {
        audio: AUDIO.WINDSOUND,
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
        for (const key in SOUNDFX) {
            if (SOUNDFX[key].loop) {
                SOUNDFX[key].audio.loop = true;
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

    // SOUNDFX

    playSound(type) {
        const sound = SOUNDFX[type].clone ? SOUNDFX[type].audio.cloneNode() : SOUNDFX[type].audio;
        sound.volume = SOUNDFX[type].volume;

        if (SOUNDFX[type].limit) {
            if (this.limits[type] === undefined) {
                this.limits[type] = 0;
            }

            sound.onended = () => {
                this.limits[type]--;
            };
            if (this.limits[type] <= SOUNDFX[type].limit) {
                this.limits[type]++;
                sound.play();
            }
        } else {
            sound.play();
        }
    }

    stopSound(type) {
        const sound = SOUNDFX[type];
        if (sound.rewind) {
            sound.audio.currentTime = 0;
        }
        sound.audio.pause();
    }
}
