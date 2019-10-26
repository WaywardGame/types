/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ISerializer, SavePropertyFlag } from "save/ISerializer";
export default class Serializer implements ISerializer {
    static readonly maxBytes = 100000000;
    private static readonly buffer;
    private static usingBuffer;
    private static readonly savedObjectCache;
    dataView: DataView;
    byteOffset: number;
    private readonly version;
    private readonly skipOnUnserialized;
    private readonly includeFlags;
    constructor(version: string, skipOnUnserialized?: boolean, includeFlags?: SavePropertyFlag);
    saveToUint8Array(object: any, objectKey: any): Uint8Array | undefined;
    saveToString(object: any, objectKey: any): string | undefined;
    load(object: any, objectKey: any, data: string | Uint8Array): void;
    loadFromUint8Array(object: any, objectKey: any, bytes: Uint8Array): void;
    loadFromString(object: any, objectKey: any, data: string): void;
    readProperty(object: any, key: any): void;
    writeProperty(object: any, key: any): void;
    readObject(object: any, key: any): void;
    readString(): string;
    readArrayV2(object: any, key: any): void;
    readArrayBuffer(): any;
    readMap(object: any, key: any): Map<any, any>;
    readSet(object: any, key: any): Set<any>;
    writeObject(object: any, objectKey: string, parentObject: any): void;
    writeString(value: string): void;
    writeArrayV2(value: any[]): void;
    writeArrayBuffer(object: any): void;
    writeMap(value: Map<any, any>): void;
    writeSet(value: Set<any>): void;
    private getSerializationProperties;
    private isInteger;
    private isByteSigned;
    private isByteUnsigned;
    private isShortSigned;
    private isShortUnsigned;
    private isIntegerSigned;
    private isIntegerUnsigned;
}
