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
import type Version from "@wayward/utilities/Version";
export interface ISerializer {
    readonly game: Game;
    readonly version: Version.String;
    readonly metadata: Map<SerializerMetadataKey, any>;
    readonly dataView: DataView;
    byteOffset: number;
    saveToUint8Array(object: any, objectKey: any): Uint8Array<ArrayBuffer> | undefined;
    saveToString(object: any, objectKey: any): string | undefined;
    convertUint8ArrayToString(bytes: Uint8Array): string;
    load(object: any, objectKey: any, data: string | Uint8Array): void;
    loadFromUint8Array(object: any, objectKey: any, bytes: Uint8Array): void;
    loadFromString(object: any, objectKey: any, data: string): void;
    readProperty(object: any, key: any): void;
    writeProperty(object: any, key: any): void;
    readMap(object: any, key: any): Map<any, any>;
    writeMap(value: Map<any, any>): void;
    readString(): string;
    writeString(value: string): void;
}
export declare enum SerializerMetadataKey {
    Island = 0,
    TypesStats = 1,
    JITDeserialize = 2,
    StringStats = 3
}
export interface ISerializerOptions {
    version: Version.String;
    includeFlags?: SavePropertyFlag;
    emptyObjectMode?: boolean;
    disableJitDeserialization?: boolean;
    enableDuplicateObjectDetection?: boolean;
    enableStats?: boolean;
    stringTokenizationProperty?: string;
    forceSuccess?: boolean;
    swallowErrors?: boolean;
}
export interface ISerializable {
    serializeObject(serializer: ISerializer): object | undefined;
    deserializeObject(serializer: ISerializer, dataType: Types): boolean | undefined;
}
export interface IPreSerializeCallback {
    preSerializeObject(serializer: ISerializer): void;
    preSerializeProperty?(serializer: ISerializer, key: string): void;
}
export interface IPostSerializeCallback {
    postSerializeObject(serializer: ISerializer): void;
    postSerializeProperty?(serializer: ISerializer, key: string): void;
}
export interface IUnserializedCallback {
    onUnserialized(serializer: ISerializer): void;
}
/**
 * Note 1: Do not add anything to this list unless Spacetech approves it
 * Note 2: Max of 255 types before the game breaks
 * Note 3: NEVER reorder or remove things from this
 */
export declare enum Types {
    Invalid = 0,
    Undefined = 1,
    Null = 2,
    Boolean = 3,
    ByteSigned = 4,
    ByteUnsigned = 5,
    ShortSigned = 6,
    ShortUnsigned = 7,
    IntegerSigned = 8,
    IntegerUnsigned = 9,
    Float32 = 10,
    Float64 = 11,
    String = 12,
    Array = 13,
    Object = 14,
    ArrayBuffer = 15,
    Item = 16,
    Creature = 17,
    TimeManager = 18,
    Player = 19,
    ArrayV2 = 20,
    Doodad = 21,
    NPC = 22,
    Map = 23,
    DoodadV2 = 24,
    MessageManager = 25,
    Function = 26,
    ClientStore = 27,
    Vector3 = 28,
    Vector2 = 29,
    Set = 30,
    RandomRange = 31,
    RandomItem = 32,
    DefaultMap = 33,
    Island = 34,
    JITDeserialization = 35,
    TileEvent = 36,
    ArrayV3 = 37,
    EndMarker = 38,
    ReplayLogEntry = 39,
    DrawnMap = 40,
    Corpse = 41,
    ArrayV4 = 42,
    SavedTilesSerializer = 43,
    FlowField = 44,
    ItemReference = 45,
    StringTokenizer = 46,
    MagicalPropertyManager = 47,
    ItemMapManager = 48,
    WorldLayer = 49,
    CreatureZone = 50,
    AiManager = 51
}
export declare const SYMBOL_SAVE_PROPERTIES: unique symbol;
export declare const SYMBOL_SAVE_PROPERTY_FLAGS: unique symbol;
export declare const SYMBOL_SAVE_ALL_PROPERTIES: unique symbol;
export declare const SYMBOL_JIT_DESERIALIZE_SAVE_PROPERTIES: unique symbol;
export declare const SYMBOL_JIT_PROPERTIES: unique symbol;
export declare const SYMBOL_DISALLOW_SERIALIZATION: unique symbol;
export declare enum SavePropertyFlag {
    /**
     * Normal property
     */
    Normal = 1,
    /**
     * Exclude this property from being included in the game state json
     * This likely means the property is not fully synced between the server and client
     */
    ExcludeFromGameStateJson = 2,
    /**
     * Exclude this property from being included in the game state json when in singleplayer
     * This should be used for certain properties that can change between new games that use the same seed
     */
    ExcludeFromGameStateJsonInSingleplayer = 4,
    /**
     * Deserialize the property the first time it's used
     */
    JITDeserialization = 8,
    /**
     * Explicitly excludes the property from using JIT Deserialization (overrides JITDeserialization flag)
     */
    ExcludeFromJITDeserialization = 16,
    /**
     * Make this object and it's children all JIT deserialize
     */
    JITDeserializationNested = 32,
    All = 65535
}
export declare function SaveProperty(flags?: SavePropertyFlag): PropertyDecorator;
export declare function DisallowSerialization(): ClassDecorator;
export declare function SaveAllProperties(): ClassDecorator;
export declare function JITDeserializeSaveProperties(): ClassDecorator;
/**
 * Returns true if the key in the object was deserialized
 * It might not be deserialized if it's setup for JIT deserialization
 */
export declare function isDeserialized<T extends object>(object: T, key: keyof T): boolean;
