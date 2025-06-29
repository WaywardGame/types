/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Music, SfxType } from "@wayward/game/audio/IAudio";
import type EnumCursor from "@wayward/game/utilities/enum/EnumCursor";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export declare enum Fading {
    None = 0,
    In = 1,
    Out = 2
}
export interface IAudioEvents {
    init(): any;
    /**
     * Called when a ui sound effect is played
     * @param type The sound effect type
     * @returns False to cancel the sound effect, a sound effect to play instead of the given one, or undefined to use the default logic
     */
    playUiSoundEffect?(type: SfxType): SfxType | boolean | undefined;
    /**
     * Called when a game sound effect is queued
     * @param type The sound effect type
     * @param position The position of the sound effect
     * @returns False to cancel the sound effect, a sound effect to play instead of the given one, or undefined to use the default logic
     */
    queueGameSoundEffect?(type: SfxType, position: IVector4): SfxType | boolean | undefined;
}
export default class WAudio extends EventEmitter.Host<IAudioEvents> {
    private readonly _musicInfo;
    private readonly _sfxInfo;
    private readonly _soundQueue;
    private readonly _recentlyPlayedGameSounds;
    private readonly _fileFormat;
    private _onInitializedPromise;
    private _audioContext;
    private _musicGainNode;
    private _effectsGainNode;
    private _suspended;
    private _musicSpeed;
    private _soundDelay;
    private _musicHandler;
    constructor();
    /**
     * Returns the current music handler, an instance of `EnumCursor<Music>`
     */
    getMusicHandler(): EnumCursor<Music>;
    /**
     * Sets the music handler to the provided instance of `EnumCursor<Music>`. Causes any playing music to stop.
     */
    setMusicHandler(musicHandler: EnumCursor<Music>): Promise<void>;
    /**
     * Resets the music handler to its original state.
     */
    resetMusicHandler(): Promise<void>;
    suspendSoundEffects(): void;
    resumeSoundEffects(): void;
    /**
     * Sets the current track to the first in the current music handler.
     */
    playMusic(): Promise<void>;
    stopMusic(): void;
    updateMusicSpeed(speed: number): Promise<void>;
    updateVolume(): void;
    updatePosition(): Promise<void>;
    /**
     * Plays a ui sound effect (a sound effect with no position)
     */
    playUiSoundEffect(sfxType: SfxType, speed?: number): Promise<void>;
    /**
     * Plays a sound effect (game / location based)
     */
    queueGameSoundEffect(type: SfxType, position: IVector4, delay?: number, speed?: number): void;
    processGameSounds(): void;
    private _stopMusic;
    private _playMusic;
    private _playSound;
    private _isComparableSound;
    private _getAudioBuffer;
    private initializeAudio;
    private waitForAudioContext;
}
