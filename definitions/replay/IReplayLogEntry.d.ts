/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IRandomHistory } from "utilities/random/Random";
export interface IReplayLogEntry {
    time: number;
    beforeSeed: number;
    tickRealtime?: boolean;
    action?: Uint8Array;
    playbackTime?: number;
    gameState?: string;
    randomHistory?: IRandomHistory[];
}
export interface IPlaybackState {
    running: boolean | number;
    logIndex: number;
    speed: number;
    startTime?: number;
    speedWarning?: boolean;
    maxLogEntryIndex?: number;
}
