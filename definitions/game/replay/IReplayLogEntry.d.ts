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
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type { IRandomHistory } from "@wayward/utilities/random/IRandom";
export interface IReplayLogEntry {
    time: number;
    beforeSeed: number | Uint16Array;
    tickRealtime?: IslandId;
    action?: Uint8Array;
    playbackTime?: number;
    gameState?: string;
    randomHistory?: Array<IRandomHistory<any>>;
}
export interface IPlaybackState {
    running: boolean | number;
    logIndex: number;
    speed: number;
    startTime?: number;
    speedWarning?: boolean;
    maxLogEntryIndex?: number;
}
