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
import type { IWaywardPreload } from "@wayward/hosts/shared/interfaces";
import type IAsyncDataStorage from "@wayward/game/save/datastorage/IAsyncDataStorage";
import type { ISaveObject } from "@wayward/game/save/ISaveManager";
import type SaveManager from "@wayward/game/save/SaveManager";
export default class FileDataStorage implements IAsyncDataStorage {
    private readonly saveManager;
    private readonly waywardPreload;
    constructor(saveManager: SaveManager, waywardPreload: IWaywardPreload);
    initialize(): Promise<void>;
    isEnabled(): boolean;
    isSlotUsed(slot: number): Promise<boolean>;
    getUsedSlots(): Promise<number[]>;
    saveToSlot(slot: number, saveObject: ISaveObject, specificKeys?: Set<string>): Promise<number>;
    saveToSlotSynchronous(slot: number, saveObject: ISaveObject, specificKeys?: Set<string>): number;
    loadFromSlot(slot: number, specificKeys?: Set<string>): Promise<ISaveObject>;
    loadFromSlots(slots: number[], specificKeys?: Set<string>): Promise<ISaveObject[]>;
    deleteSlot(slot: number): Promise<void>;
    deleteAllSlots(): Promise<void>;
    deleteAllData(): Promise<void>;
    private getSaveFolderPath;
    private getSaveSlotFilePath;
}
