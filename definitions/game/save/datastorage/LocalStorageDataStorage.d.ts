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
import type IDataStorage from "@wayward/game/save/datastorage/IDataStorage";
import type { ISaveObject } from "@wayward/game/save/ISaveManager";
export default class LocalStorageDataStorage implements IDataStorage {
    static clearLocalStorage(): void;
    initialize(): void;
    isEnabled(): boolean;
    isSlotUsed(slot: number, _interval?: number): boolean;
    getUsedSlots(): number[];
    saveToSlot(slot: number, saveObject: ISaveObject, specificKeys?: Set<string>): number;
    saveToSlotSynchronous(slot: number, saveObject: ISaveObject, specificKeys?: Set<string>): number;
    loadFromSlot(slot: number, specificKeys?: Set<string>): ISaveObject;
    loadFromSlots(slots: number[], specificKeys?: Set<string>): ISaveObject[];
    deleteSlot(slot: number): void;
    deleteAllSlots(): void;
    deleteAllData(): void;
    /**
     * Enumerates all the keys in local storage for the given slot
     * @param slot Slot number
     */
    private getLocalStorageSlotKeys;
}
