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
import type { SavePropertyFlag } from "@wayward/game/save/serializer/ISerializer";
import type Version from "@wayward/utilities/Version";
export declare const SLOT_MIN = 0;
export declare const SLOT_GLOBAL = -1;
export declare const SLOT_MULTIPLAYER = -2;
export declare const SLOT_CHALLENGE = -3;
export declare const SLOT_REPLAY = -4;
export declare const SLOT_GLOBAL_OLD = 26;
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
    Ascending = 1,
    Descending = -1
}
export declare enum CompressionType {
    None = 0,
    LZStringBase64 = 1,
    LZStringUTF16 = 2,
    PakoDeflate = 3
}
export declare const defaultCompressionType = CompressionType.PakoDeflate;
export interface ISaveObject {
    version: Version.String;
    compressionType: CompressionType;
    data: Record<string, any>;
}
export interface ISerializeProperty {
    property: string[];
    stringTokenizationProperty?: string;
    enableStats?: boolean;
    skipCompression?: boolean;
    savePropertyFlag?: SavePropertyFlag;
    shouldSerialize?(version: Version.String): boolean;
    shouldDeserialize?(version: Version.String): boolean;
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
    saveObjectToSlot(slot: number): any;
}
export declare enum SaveImportErrorReason {
    UnknownError = 0,
    IncorrectFileType = 1,
    NoFreeSlots = 2,
    UploadFailed = 3,
    IncorrectSaveType = 4,
    NotWaywardSave = 5,
    InvalidJson = 6
}
export interface IPartialSaveImportResult {
    file: File;
    slot?: number;
    bytes?: number;
    error?: SaveImportErrorReason;
}
export interface ISaveImportSuccess extends IPartialSaveImportResult {
    slot: number;
    bytes: number;
    error?: undefined;
}
export interface ISaveImportFailure extends IPartialSaveImportResult {
    slot?: undefined;
    bytes?: undefined;
    error: SaveImportErrorReason;
}
export type SaveImportResult = ISaveImportSuccess | ISaveImportFailure;
/**
 * Verifies and fixes save objects that were made on older games
 */
export declare function ensureHealthySaveObject(saveObject: ISaveObject, legacyCompressionType: CompressionType): void;
