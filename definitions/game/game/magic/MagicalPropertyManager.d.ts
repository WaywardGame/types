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
import EventEmitter from "event/EventEmitter";
import type { MagicalPropertyTypeSubTypeMap } from "game/magic/MagicalPropertyType";
import { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import type { ListEnder } from "language/ITranslation";
import Translation from "language/Translation";
export interface IHasMagic {
    magic?: MagicalPropertyManager;
}
export interface IMagicalProperty {
    value: number;
}
declare const SYMBOL_SUB_PROPERTY_TYPES: unique symbol;
declare const SYMBOL_SUB_PROPERTY_ENTRIES: unique symbol;
export interface IMagicalSubProperty<T extends number> {
    subPropertyCount: number;
    subProperties: Partial<Record<T, number>>;
    [SYMBOL_SUB_PROPERTY_TYPES]: readonly T[];
    [SYMBOL_SUB_PROPERTY_ENTRIES]: ReadonlyArray<{
        type: T;
        value: number;
    }>;
}
export type MagicalProperty<T extends MagicalPropertyType> = MagicalPropertyTypeSubTypeMap extends {
    [key in T]: any;
} ? IMagicalSubProperty<MagicalPropertyTypeSubTypeMap[T]> : IMagicalProperty;
type MagicalNormalPropertyEntry = {
    type: MagicalNormalPropertyTypes;
    value: number;
};
type MagicalSubPropertyEntry = {
    [K in MagicalSubPropertyTypes]: {
        type: K;
        subType: MagicalPropertyTypeSubTypeMap[K];
        value: number;
    };
}[MagicalSubPropertyTypes];
export type MagicalPropertyEntry = MagicalNormalPropertyEntry | MagicalSubPropertyEntry;
export declare module MagicalPropertyEntry {
    function isSubType(entry: MagicalPropertyEntry): entry is MagicalSubPropertyEntry;
    function identity(entry: MagicalPropertyEntry): MagicalPropertyIdentity<[]>;
}
export type MagicalPropertyEntryIntersection = {
    type: MagicalPropertyType;
    subType?: MagicalSubPropertySubTypes;
    value: number;
};
export type AnyMagicalProperty = Partial<IMagicalProperty> & PartialValues<{
    [K in MagicalSubPropertyTypes]: IMagicalSubProperty<MagicalPropertyTypeSubTypeMap[K]>;
}>;
export type MagicalSubPropertyTypes = keyof MagicalPropertyTypeSubTypeMap;
export type MagicalNormalPropertyTypes = Exclude<MagicalPropertyType, MagicalSubPropertyTypes>;
export type MagicalSubPropertySubTypes = MagicalPropertyTypeSubTypeMap[MagicalSubPropertyTypes];
type MagicalSubPropertyTypesResult = {
    [K in MagicalSubPropertyTypes]: {
        type: K;
        subTypes: ReadonlyArray<MagicalPropertyTypeSubTypeMap[K]>;
    };
}[MagicalSubPropertyTypes];
export type MagicalPropertyIdentity<A extends any[] = []> = [MagicalPropertyType, ...A] | {
    [Key in MagicalSubPropertyTypes]: [Key, MagicalPropertyTypeSubTypeMap[Key], ...A];
}[MagicalSubPropertyTypes];
export type MagicalPropertyIdentityFlat = MagicalNormalPropertyTypes | MagicalSubPropertyTypes | {
    [Key in MagicalSubPropertyTypes]: [Key, MagicalPropertyTypeSubTypeMap[Key]];
}[MagicalSubPropertyTypes];
export declare module MagicalPropertyIdentity {
    function equals(...identities: MagicalPropertyIdentity[]): boolean;
}
export interface IMagicalPropertyManagerEvents {
    /**
     * Emitted when a property was removed
     */
    remove(...identity: MagicalPropertyIdentity): any;
    /**
     * Emitted when a property was set, and the value it was set to
     */
    set(...args: MagicalPropertyIdentity<[value: number]>): any;
    /**
     * Emitted when a property was changed or removed
     */
    change(...identity: MagicalPropertyIdentity): any;
    /**
     * Emitted when removing all magical properties
     */
    clear(): any;
    /**
     * Emitted when inheriting magic from another property manager
     */
    inherit(from: MagicalPropertyManager): any;
}
export default class MagicalPropertyManager extends EventEmitter.Host<IMagicalPropertyManagerEvents> {
    private properties;
    private cachedCount?;
    private cachedEntries?;
    private cachedTypes?;
    private cachedNormalTypes?;
    private cachedSubTypes?;
    private cachedHash?;
    static inherit(source: IHasMagic | MagicalPropertyManager | undefined, target: IHasMagic): void;
    constructor(properties?: Partial<Record<MagicalPropertyType, AnyMagicalProperty>>);
    /**
     * @returns the number of magical properties on this object
     */
    count(): number;
    /**
     * @returns if this object has any magical properties
     */
    hasAny(): boolean;
    /**
     * @returns if this object has any of the given magical property types
     */
    hasAny(...types: MagicalPropertyIdentityFlat[]): boolean;
    /**
     * @returns whether the given type of magical property is present on this object
     */
    has(type: MagicalPropertyType): boolean;
    /**
     * @returns whether the given type of magical sub-property is present on this object
     */
    has<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): boolean;
    has(...identity: MagicalPropertyIdentity): boolean;
    /**
     * @returns a magical property on this object, if it exists
     */
    get<T extends MagicalNormalPropertyTypes>(type: T): number | undefined;
    /**
     * @returns a magical sub-property on this object, if it exists
     */
    get<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): number | undefined;
    get(...identity: MagicalPropertyIdentity): number | undefined;
    /**
     * Sets a magical property on this object. Replaces any existing magical property of that type
     */
    set<T extends MagicalNormalPropertyTypes>(type: T, value: number): this;
    /**
     * Sets a magical sub-property on this object. Replaces any existing magical sub-property of that type
     */
    set<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T], value: number): this;
    /**
     * Removes a magical property on this object, if it exists
     * @returns whether the magical property was removed — ie, if it existed
     */
    remove(type: MagicalPropertyType): boolean;
    /**
     * Removes a magical sub-property on this object, if it exists. If all sub-properties are removed, the super-property is too.
     * @returns whether the magical sub-property was removed — ie, if it existed
     */
    remove<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): boolean;
    /**
     * Removes any magical properties on this object
     * @returns the number of magical properties removed
     */
    clear(): number;
    /**
     * Removes any magical properties on this object and replaces them with magical properties on the given object
     */
    inherit(magic: MagicalPropertyManager): this;
    /**
     * @returns a list of all the magical property types on this object
     */
    types(): MagicalPropertyType[];
    /**
     * @returns a list of all the "normal" magical property types on this object — ie, the ones without subtypes
     */
    normalTypes(): MagicalNormalPropertyTypes[];
    /**
     * @returns a list of all the magical sub-property types of the given supertype on this object
     */
    subTypes(): readonly MagicalSubPropertyTypesResult[];
    /**
     * @returns a list of all the magical sub-property types of the given supertype on this object
     */
    subTypes<T extends MagicalSubPropertyTypes>(type: T): ReadonlyArray<MagicalPropertyTypeSubTypeMap[T]>;
    /**
     * @returns a list of all the magical sub-properties for the given type on this object, if any
     */
    subProperties<T extends MagicalSubPropertyTypes>(type: T): ReadonlyArray<{
        type: MagicalPropertyTypeSubTypeMap[T];
        value: number;
    }>;
    /**
     * @returns a list of all the magical properties on this object
     */
    all(): MagicalPropertyEntry[];
    /**
     * @returns a list of all the magical properties on this object,
     */
    all(intersectionType: true): MagicalPropertyEntryIntersection[];
    /**
     * Translates a list of the magical properties on this object, including sub-properties
     * @param ender The way to end this list translation, ie and/or
     * @param format A formatting-translation to apply to each magical property
     */
    translate(ender?: ListEnder | false, format?: Translation | ((type: MagicalPropertyType, subType?: MagicalSubPropertySubTypes) => Translation)): import("../../language/impl/TranslationImpl").default;
    /**
     * @returns a translation for a magical property type
     */
    static translate(type: MagicalNormalPropertyTypes): Translation;
    /**
     * @returns a translation for a magical sub-property type
     */
    static translate<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): Translation;
    static translate(...identity: MagicalPropertyIdentity): Translation;
    /**
     * @returns a translation for a magical property type
     */
    static translateTooltip(type: MagicalNormalPropertyTypes): Translation;
    /**
     * @returns a translation for a magical sub-property type
     */
    static translateTooltip<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): Translation;
    hash(): string;
    private clearCachedArrays;
}
export {};
