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
import { SavePropertyFlag } from "save/ISerializer";
export interface ISaveInfo {
    slot: number;
    bytes?: number;
    saveObject?: ISaveObject;
}
export declare enum SaveSort {
    SaveTime = 0,
    Name = 1,
    TurnCount = 2,
    CreatedTime = 3
}
export declare enum SortDirection {
    More = 1,
    Less = -1
}
export declare const SLOT_CHALLENGE = -1;
export declare const SLOT_GLOBAL = 26;
export declare const SLOT_MULTIPLAYER = 27;
export declare const SLOT_REPLAY = 28;
export declare const SLOT_COUNT_MAX = 20;
export declare const propertiesToSerialize: ISerializeProperty[];
export declare const propertiesToSerializeGlobal: ISerializeProperty[];
export interface ISaveObject {
    version: string;
    isCompressed: boolean;
    data: Record<string, any>;
}
export interface ISerializeProperty {
    key: string;
    property: string[];
    skipCompression?: boolean;
    savePropertyFlag?: SavePropertyFlag;
    shouldSerialize?(): boolean;
}
export interface ISaveManagerEvents {
    /**
     * When the global slot is loaded (is not called if the global slot didn't previously exist)
     */
    globalSlotLoaded(slot: number): any;
    /**
     * When the global slot is ready (after `globalSlotLoaded` event)
     */
    globalSlotReady(slot: number): any;
}
