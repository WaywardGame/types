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
import type { IReplayLogEntry } from "replay/IReplayLogEntry";
import type { ISerializable, ISerializer } from "save/serializer/ISerializer";
import type { IRandomHistory } from "utilities/random/IRandom";
export declare class ReplayLogEntry implements IReplayLogEntry, ISerializable {
    time: number;
    beforeSeed: number | Uint16Array;
    tickRealtime?: boolean | undefined;
    action?: Uint8Array | undefined;
    playbackTime?: number | undefined;
    gameState?: string | undefined;
    randomHistory?: Array<IRandomHistory<any>> | undefined;
    static create(recordingStartTime?: number): ReplayLogEntry;
    /**
     * Custom serializer to reduce save data size
     */
    serializeObject(serializer: ISerializer): undefined;
    /**
     * Custom serializer to reduce save data size
     */
    deserializeObject(serializer: ISerializer): boolean;
}
