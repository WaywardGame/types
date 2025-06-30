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
import type { ISaveObject } from "@wayward/game/save/ISaveManager";
export default interface IAsyncDataStorage {
    initialize(): Promise<void>;
    isEnabled(): boolean;
    getUsedSlots(): Promise<number[]>;
    isSlotUsed(slot: number, interval?: number): Promise<boolean>;
    saveToSlot(slot: number, saveObject: ISaveObject, specificKeys?: Set<string>): Promise<number>;
    saveToSlotSynchronous(slot: number, saveObject: ISaveObject, specificKeys?: Set<string>): number;
    loadFromSlot(slot: number, specificKeys?: Set<string>): Promise<ISaveObject>;
    loadFromSlots(slot: number[], specificKeys: Set<string>): Promise<ISaveObject[]>;
    deleteSlot(slot: number): Promise<void>;
    deleteAllSlots(): Promise<void>;
    deleteAllData(): Promise<void>;
}
