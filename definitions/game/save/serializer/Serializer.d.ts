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
import type { ISerializer, ISerializerOptions } from "@wayward/game/save/serializer/ISerializer";
import { SavePropertyFlag, SerializerMetadataKey, Types } from "@wayward/game/save/serializer/ISerializer";
import StringTokenizer from "@wayward/game/save/serializer/StringTokenizer";
import type Version from "@wayward/utilities/Version";
export default class Serializer implements ISerializer {
    readonly game: Game;
    private readonly options;
    stringTokenizer?: StringTokenizer | undefined;
    static convertStringToUint8Array(data: string): Uint8Array;
    private static array;
    private static usingArray;
    private static alertUserAboutError;
    private static savedObjectCache;
    readonly metadata: Map<SerializerMetadataKey, any>;
    dataView: DataView;
    byteOffset: number;
    readonly version: Version.String;
    private readonly includeFlags;
    private readonly emptyObjectMode;
    private readonly disableJitDeserialization;
    constructor(game: Game, options: ISerializerOptions, stringTokenizer?: StringTokenizer | undefined);
    private get isDeveloperMode();
    saveToUint8Array(object: any, objectKey: any, forceEnableChainLogging?: boolean): Uint8Array<ArrayBuffer> | undefined;
    saveToString(object: any, objectKey: any): string | undefined;
    convertUint8ArrayToString(bytes: Uint8Array, length?: number): string;
    load(object: any, objectKey: any, data: string | Uint8Array): void;
    loadFromUint8Array(object: any, objectKey: any, bytes: Uint8Array): void;
    loadFromString(object: any, objectKey: any, data: string): void;
    readProperty(object: any, key: any): void;
    writeProperty(object: any, key: any, chain?: string[], flags?: SavePropertyFlag, propertyIsJitDeserialized?: boolean): void;
    readObject(object: any, key: any, dataType: Types): void;
    readString(): string;
    readArrayV2(object: any, key: any): void;
    readArrayV3(object: any, key: any): void;
    readArrayV4(object: any, key: any): void;
    readArrayBuffer(): ArrayBufferLike;
    readMap(object: any, key: any): Map<any, any>;
    readSet(object: any, key: any): Set<any>;
    writeObject(object: any, objectKey: string, parentObject: any, chain?: string[]): void;
    writeString(value: string): void;
    writeArrayV4(value: any[], chain?: string[], flags?: SavePropertyFlag): void;
    writeArrayBuffer(typedArray: {
        BYTES_PER_ELEMENT: number;
        byteLength: number;
        length: number;
        buffer: ArrayBufferLike;
    }): void;
    writeMap(value: Map<any, any>, chain?: string[]): void;
    writeSet(value: Set<any>, chain?: string[]): void;
    private determineSerializationProperties;
    private setupJitDeserialization;
    private incrementTypesStats;
}
