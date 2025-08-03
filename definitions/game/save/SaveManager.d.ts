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
import type { Game } from "@wayward/game/game/Game";
import type Player from "@wayward/game/game/entity/player/Player";
import type { ISaveImportSuccess, ISaveInfo, ISaveManagerEvents, ISaveObject, SaveImportResult } from "@wayward/game/save/ISaveManager";
import { SaveImportErrorReason, SaveSort, SortDirection } from "@wayward/game/save/ISaveManager";
import type IClientStore from "@wayward/game/save/clientStore/IClientStore";
import type { ISerializer } from "@wayward/game/save/serializer/ISerializer";
import type { AnyPropertyToSerialize } from "@wayward/game/save/serializer/PropertiesToSerialize";
import Files from "@wayward/game/utilities/Files";
import Version from "@wayward/utilities/Version";
import type { IWaywardPreload } from "@wayward/hosts/shared/interfaces";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export default class SaveManager extends EventEmitter.Host<ISaveManagerEvents> {
    readonly game: Game;
    lastLoadedVersion: Version.Info;
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
    loadSpecificData(slotOrSaveObject: number | ISaveObject, keys: Set<AnyPropertyToSerialize>): Promise<Record<AnyPropertyToSerialize, any>>;
    /**
     * Attempts to load all the given keys from the slot at once. Upon failure, instead loads each separately.
     * @returns an object of results, and an object of errors, both indexed by the given keys.
     */
    loadSpecificDataResilient(slotOrSaveObject: number | ISaveObject, keys: Set<AnyPropertyToSerialize>): Promise<{
        result: Record<AnyPropertyToSerialize, any>;
        errors: Map<AnyPropertyToSerialize, Error>;
    }>;
    loadSpecificDatas(slots: number[], keys: Set<AnyPropertyToSerialize>): Promise<Map<number, Record<AnyPropertyToSerialize, any>>>;
    /**
     * Returns the number of bytes the save takes up
     */
    saveSpecificData(slot: number, object: any, keys: Set<AnyPropertyToSerialize | "checksums">): Promise<number>;
    /**
     * Exports the specified slot into a Uint8Array format that can be used with importSave
     */
    exportSlotAsUint8Array(slot: number): Promise<Uint8Array<ArrayBuffer>>;
    /**
     * Exports a saveObject into a Uint8Array format that can be used with importSave
     */
    exportSaveObjectAsUint8Array(saveObject: ISaveObject): Uint8Array<ArrayBuffer>;
    /**
     * Converts a Uint8Array into a SaveObject
     * Used in conjection with exportSlotAsUint8Array / exportSaveObjectAsUint8Array
     */
    getSaveObjectFromUint8Array(data: Uint8Array): ISaveObject;
    importSaves(saveObjects: Files.FileUploadResult[], onImportSave?: (result: ISaveImportSuccess, index: number) => any): Promise<SaveImportResult[]>;
    /**
     * Imports saves from multiple formats
     * 1. ISaveObject - games imported while joining a multiplayer server
     * 2. string - From legacy exported save games to files or to steam
     * 3. Uint8Array - From exported save games
     * @returns the number of bytes the save takes up, or undefined, if an error occurs
     */
    importSave(slot: number, saveObject: ISaveObject | string | Uint8Array): Promise<{
        bytes: number;
    } | {
        error: SaveImportErrorReason;
    }>;
    importSaveToObject(slot: number | undefined, saveObject: ISaveObject | string | Uint8Array): ISaveObject | {
        error: SaveImportErrorReason;
    };
    copySave(slot?: number, target?: number): Promise<{
        bytes: number;
    } | {
        error: SaveImportErrorReason;
    }>;
    deleteSlot(slot?: number): Promise<void>;
    deleteAllSlots(): Promise<void>;
    deleteAllData(): Promise<void>;
    compressSave(slot: number, saveObject: ISaveObject): void;
    doesSaveLookWaywardy(saveObject: ISaveObject, slot?: number): boolean;
    decompressSave(slot: number | undefined, saveObject: ISaveObject, legacyDecompressAllProperties?: boolean): void;
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
