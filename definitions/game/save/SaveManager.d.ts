/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IWaywardPreload } from "@hosts/shared/interfaces";
import EventEmitter from "event/EventEmitter";
import type Player from "game/entity/player/Player";
import type { Game } from "game/Game";
import type IClientStore from "save/clientStore/IClientStore";
import type { ISaveImportSuccess, ISaveInfo, ISaveManagerEvents, ISaveObject, SaveImportResult } from "save/ISaveManager";
import { SaveSort, SortDirection } from "save/ISaveManager";
import type { ISerializer } from "save/serializer/ISerializer";
import type { AnyPropertyToSerialize } from "save/serializer/PropertiesToSerialize";
import Files from "utilities/Files";
import type { IVersionInfo } from "utilities/Version";
export default class SaveManager extends EventEmitter.Host<ISaveManagerEvents> {
    readonly game: Game;
    lastLoadedVersion: IVersionInfo;
    private loadedGlobalSlot;
    private readonly dataStorage;
    private multiplayerSlotData;
    private readonly serializer;
    private _isLoading;
    get isLoading(): boolean;
    constructor(game: Game, waywardPreload: IWaywardPreload | undefined);
    clearMultiplayerSlotData(): void;
    isEnabled(): boolean;
    initialize(): Promise<void>;
    /**
     * Returns the indices of the used slots
     */
    getUsedSlots(): Promise<number[]>;
    /**
     * Returns whether or not the slot is used
     */
    isSlotUsed(slot: number): Promise<boolean>;
    /**
     * Returns the index of the first free slot
     */
    getFirstFreeSlot(): Promise<number>;
    /**
     * Returns the players ClientStore
     */
    getClientStore(player: Player): IClientStore;
    /**
     * Gets the used slots, ordered by one of a few properties of the savedData in that slot
     */
    getUsedSlotsSorted(sortBy: SaveSort, direction?: SortDirection): Promise<number[]>;
    /**
     * Gets the most recently saved slot
     */
    getMostRecentSlot(): Promise<number | undefined>;
    /**
     * Saves
     * Keep this in sync with saveSynchronous
     */
    save(slot: number): Promise<ISaveInfo | undefined>;
    /**
     * Saves synchronously
     * Keep this in sync with save
     */
    saveSynchronous(slot: number): ISaveInfo | undefined;
    /**
     * Returns whether or not it succeeded
     */
    load(slot: number): Promise<boolean>;
    loadSpecificData(slot: number, keys: Set<AnyPropertyToSerialize>): Promise<Record<AnyPropertyToSerialize, any>>;
    /**
     * Attempts to load all the given keys from the slot at once. Upon failure, instead loads each separately.
     * @returns an object of results, and an object of errors, both indexed by the given keys.
     */
    loadSpecificDataResilient(slot: number, keys: Set<AnyPropertyToSerialize>): Promise<{
        result: Record<string, any>;
        errors: Map<string, Error>;
    }>;
    loadSpecificDatas(slots: number[], keys: Set<AnyPropertyToSerialize>): Promise<Map<number, Record<AnyPropertyToSerialize, any>>>;
    /**
     * Returns the number of bytes the save takes up
     */
    saveSpecificData(slot: number, object: any, keys: Set<AnyPropertyToSerialize>): Promise<number>;
    /**
     * Exports the specified slot into a Uint8Array format that can be used with importSave
     */
    exportSlotAsUint8Array(slot: number): Promise<Uint8Array>;
    /**
     * Exports a saveObject into a Uint8Array format that can be used with importSave
     */
    exportSaveObjectAsUint8Array(saveObject: ISaveObject): Uint8Array;
    /**
     * Converts a Uint8Array into a SaveObject
     * Used in conjection with exportSlotAsUint8Array / exportSaveObjectAsUint8Array
     */
    getSaveObjectFromUint8Array(slot: number, data: Uint8Array): ISaveObject;
    importSaves(saveObjects: Files.FileUploadResult[], onImportSave?: (result: ISaveImportSuccess, index: number) => any): Promise<SaveImportResult[]>;
    /**
     * Imports saves from multiple formats
     * 1. ISaveObject - games imported while joining a multiplayer server
     * 2. string - From legacy exported save games to files or to steam
     * 3. Uint8Array - From exported save games
     * @returns the number of bytes the save takes up, or undefined, if an error occurs
     */
    importSave(slot: number, saveObject: ISaveObject | string | Uint8Array): Promise<number | undefined>;
    copySave(slot?: number, target?: number): Promise<number | undefined>;
    deleteSlot(slot?: number): Promise<void>;
    deleteAllSlots(): Promise<void>;
    deleteAllData(): Promise<void>;
    compressSave(slot: number, saveObject: ISaveObject): void;
    decompressSave(slot: number, saveObject: ISaveObject, legacyDecompressAllProperties?: boolean): void;
    getSerializer(): ISerializer;
    private setupGameSave;
    getGameStateAsJson(cleanup: boolean | undefined, pretty: boolean | undefined, compress: true): Uint8Array;
    getGameStateAsJson(cleanup?: boolean, pretty?: boolean, compress?: false): string;
    downloadGameStateAsJson(cleanup?: boolean): void;
    private loadFromSlot;
    private getPropertiesToSerialize;
    private compressData;
    private decompressData;
    private createSaveObject;
    /**
     * Saves a specific slot
     * Keep in sync with saveSlotSynchronous
     */
    private saveSlot;
    /**
     * Saves a specific slot synchronously
     * Keep in sync with saveSlot
     */
    private saveSlotSynchronous;
    /**
     * Returns the number of bytes the save takes up
     * Keep in sync with saveObjectToSlot
     */
    private saveObjectToSlot;
    /**
     * Returns the number of bytes the save takes up
     * Keep in sync with saveObjectToSlot
     */
    private saveObjectToSlotSynchronous;
    private backupSlot;
}
