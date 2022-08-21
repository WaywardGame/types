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
import type IAsyncDataStorage from "save/datastorage/IAsyncDataStorage";
import type { ISaveObject } from "save/ISaveManager";
export default class IndexedDbDataStorage implements IAsyncDataStorage {
    private readonly databaseV1Name;
    private readonly databaseV1VersionV1;
    private readonly databaseV2Name;
    private readonly databaseName;
    private readonly objectStoreNameSaves;
    private readonly slotIndexName;
    private readonly uniqueSlotsIndexName;
    private database;
    private readonly dataStorageLocalStorage;
    constructor();
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
    private open;
    private transferSaves;
    private transferFromLocalStorageToIndexedDb;
    private createTransation;
    private createSaveToSlotRequests;
    private runRequest;
    private migrateV1Database;
}
