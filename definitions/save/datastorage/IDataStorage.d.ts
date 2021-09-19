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
import { ISaveObject } from "save/ISaveManager";
export default interface IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    isSlotUsed(slot: number, interval?: number): boolean;
    saveToSlot(slot: number, saveObject: ISaveObject, fakeSave?: boolean): number;
    loadFromSlot(slot: number): ISaveObject;
    deleteSlot(slot: number): boolean;
    deleteAllSlots(): boolean;
    deleteAllData(): void;
}
