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
import EventEmitter from "event/EventEmitter";
import Player from "game/entity/player/Player";
import IClientStore from "save/clientStore/IClientStore";
import { ISaveInfo, ISaveManagerEvents, ISaveObject, SaveSort, SortDirection } from "save/ISaveManager";
import ISerializer from "save/ISerializer";
import { IVersionInfo } from "utilities/Version";
export default class SaveManager extends EventEmitter.Host<ISaveManagerEvents> {
    lastLoadedVersion: IVersionInfo;
    private loadedGlobalSlot;
    private readonly dataStorage;
    private multiplayerSlotData;
    private readonly serializer;
    clearMultiplayerSlotData(): void;
    isEnabled(): boolean;
    initialize(): Promise<void>;
    /**
     * Returns an array where the index is the slot number, and the value is whether or not the slot is filled
     */
    getSlots(): Promise<boolean[]>;
    /**
     * Returns the indices of the used slots
     */
    getUsedSlots(): Promise<number[]>;
    /**
     * Returns whether or not the slot is used
     */
    isSlotUsed(slot: number): Promise<boolean>;
    /**
     * Returns the number of filled slots
     */
    getSaveCount(): Promise<number>;
    /**
     * Returns the index of the first free slot
     */
    getFirstFreeSlot(): Promise<number | undefined>;
    /**
     * Returns the players ClientStore
     */
    getClientStore(player?: Player): IClientStore;
    /**
     * Gets the used slots, ordered by one of a few properties of the saveData in that slot
     */
    getUsedSlotsSorted(sortBy: SaveSort, direction?: SortDirection): Promise<number[]>;
    /**
     * Gets the most recently saved slot
     */
    getMostRecentSlot(): Promise<number>;
    /**
     * Returns a tuple [bytes: number, saveObject: ISaveObject]
     */
    save(slot: number, unloading?: boolean): Promise<ISaveInfo>;
    /**
     * Returns whether or not it succeeded
     */
    load(slot: number): Promise<boolean>;
    loadPartial(slot: number): Promise<ISaveObject>;
    loadPartialData(saveObject: ISaveObject, object: any, key: string, saveObjectKey?: string, skipCompression?: boolean, importing?: boolean): void;
    /**
     * Returns the number of bytes the save takes up
     */
    savePartialData(slot: number, object: any, key: string, saveObjectKey: string): Promise<number>;
    /**
     *  Returns the number of bytes the save takes up
     */
    savePartialDataInside(slot: number, saveObjectKey: string, key: string, value: any): Promise<number>;
    exportSave(slot: number): Promise<Uint8Array>;
    exportSaveObject(saveObject: ISaveObject): Uint8Array;
    exportSaveAsCompressedSaveObject(slot: number): Promise<ISaveObject>;
    /**
     * Imports saves from multiple formats
     * 1. ISaveObject - games imported while joining a multiplayer server
     * 2. string - From legacy exported save games to files or to steam
     * 3. Uint8Array - From exported save games
     * @returns the number of bytes the save takes up, or undefined, if an error occurs
     */
    importSave(slot: number, saveObject: ISaveObject | string | Uint8Array): Promise<number | undefined>;
    copySave(slot?: number, target?: number): Promise<number | undefined>;
    deleteSlot(slot?: number): Promise<boolean | undefined>;
    deleteAllSlots(): Promise<boolean | undefined>;
    deleteAllData(): Promise<void>;
    compressSave(slot: number, saveObject: ISaveObject, exporting?: boolean): void;
    decompressSave(slot: number, saveObject: ISaveObject, importing?: boolean): void;
    getSerializer(): ISerializer;
    getGameStateAsJson(cleanup?: boolean, pretty?: boolean): string;
    downloadGameStateAsJson(cleanup?: boolean): void;
    private getPropertiesToSerialize;
    private compressString;
    private decompressString;
    private createSaveObject;
    private saveSlot;
    /**
     * Returns the number of bytes the save takes up
     */
    private saveObjectToSlot;
    private backupSlot;
}
