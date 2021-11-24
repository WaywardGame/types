/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type IAudio from "audio/IAudio";
import { Music, SfxType } from "audio/IAudio";
import EventEmitter from "event/EventEmitter";
import type Island from "game/island/Island";
import type EnumCursor from "utilities/enum/EnumCursor";
export declare enum Fading {
    None = 0,
    In = 1,
    Out = 2
}
export interface IAudioEvents {
    init(): any;
    /**
     * Called when a sound effect is queued
     * @param type The sound effect type
     * @param x The x location in the world for the effect
     * @param y The y location in the world for the effect
     * @param z The z location in the world for the effect
     * @returns False to cancel the sound effect, a sound effect to play instead of the given one, or undefined to use the default logic
     */
    queueSoundEffect?(type: SfxType, x: number, y: number, z: number): SfxType | boolean | undefined;
}
export default class WAudio extends EventEmitter.Host<IAudioEvents> implements IAudio {
    private readonly _musicInfo;
    private readonly _sfxInfo;
    private readonly _soundQueue;
    private readonly _recentlyPlayedSounds;
    private readonly _fileFormat;
    private _onInitializedPromise;
    private _audioContext;
    private _musicGainNode;
    private _effectsGainNode;
    private _musicSpeed;
    private _soundDelay;
    private _musicHandler;
    constructor();
    /**
     * Returns the current music handler, an instance of `EnumCursor<Music>`
     */
    getMusicHandler(): EnumCursor<Music, string>;
    /**
     * Sets the music handler to the provided instance of `EnumCursor<Music>`. Causes any playing music to stop.
     */
    setMusicHandler(musicHandler: EnumCursor<Music>): Promise<void>;
    /**
     * Resets the music handler to its original state.
     */
    resetMusicHandler(): Promise<void>;
    /**
     * Sets the current track to the first in the current music handler.
     */
    playMusic(): Promise<void>;
    stopMusic(): void;
    updateMusicSpeed(speed: number): Promise<void>;
    updateVolume(): void;
    updatePosition(): Promise<void>;
    queueEffect(type: SfxType, island: Island | undefined, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean, force?: boolean): void;
    processEffects(): void;
    private _stopMusic;
    private _playMusic;
    private _playEffect;
    private _isComparableSound;
    private _getAudioBuffer;
    private initializeAudio;
    private waitForAudioContext;
}
