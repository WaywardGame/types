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
interface IClassSerializer<T, S> {
    serialize(instance: T): S;
    deserialize(obj: S): T;
}
export default class FancyJsonSerializer {
    private static _log;
    private static get log();
    private static serializedObjects;
    private static currentPath;
    private static resultObj;
    private static readonly serializationRegistry;
    private static readonly classMap;
    static registerClassSerializer<T, S>(cls: Class<T>, classSerializer: IClassSerializer<T, S>): void;
    static hasClassSerializer(cls: Class<any>): boolean;
    static getClassSerializer(cls: Class<any>): IClassSerializer<any, any> | undefined;
    static serialize(obj: any, pretty?: boolean): string;
    static deserialize(json: string): unknown;
    private static serializeValue;
    private static deserializeValue;
    private static fakeBigInt;
}
export {};
