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
import ISerializer, { ISerializable } from "save/ISerializer";
import { IRandomHistory } from "utilities/Random";
import { IReplayLogEntry } from "replay/IReplayLogEntry";
export declare class ReplayLogEntry implements IReplayLogEntry, ISerializable {
    time: number;
    beforeSeed: number;
    tickRealtime?: boolean | undefined;
    action?: Uint8Array | undefined;
    playbackTime?: number | undefined;
    gameState?: string | undefined;
    randomHistory?: IRandomHistory[] | undefined;
    static create(recordingStartTime?: number): ReplayLogEntry;
    /**
     * Custom serializer to reduce save data size
     */
    serializeObject(serializer: ISerializer): void;
    /**
     * Custom serializer to reduce save data size
     */
    deserializeObject(serializer: ISerializer): void;
}
