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
import type { ISerializer, ISerializerOptions } from "save/serializer/ISerializer";
import { SerializerMetadataKey, SavePropertyFlag, Types } from "save/serializer/ISerializer";
import StringTokenizer from "save/serializer/StringTokenizer";
export default class Serializer implements ISerializer {
    private readonly options;
    private readonly stringTokenizer?;
    static convertStringToUint8Array(data: string): Uint8Array;
    private static array;
    private static usingArray;
    private static readonly savedObjectCache;
    readonly metadata: Map<SerializerMetadataKey, any>;
    dataView: DataView;
    byteOffset: number;
    readonly version: string;
    private readonly includeFlags;
    private readonly emptyObjectMode;
    private readonly disableJitDeserialization;
    constructor(options: ISerializerOptions, stringTokenizer?: StringTokenizer | undefined);
    private get isDeveloperMode();
    saveToUint8Array(object: any, objectKey: any): Uint8Array | undefined;
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
    readArrayBuffer(): any;
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
    private isInteger;
    private isByteSigned;
    private isByteUnsigned;
    private isShortSigned;
    private isShortUnsigned;
    private isIntegerSigned;
    private isIntegerUnsigned;
    private setupJitDeserialization;
    private incrementTypesStats;
}
