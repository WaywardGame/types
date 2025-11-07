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
import type { IHasMagic, AnyMagicalProperty, MagicalSubPropertyTypes, MagicalSubPropertyTypesResult, MagicalPropertyIdentityFlat, MagicalNormalPropertyTypes, MagicalPropertyEntryIntersection } from "@wayward/game/game/magic/IMagicalProperty";
import { MagicalPropertyIdentity } from "@wayward/game/game/magic/IMagicalProperty";
import { MagicalPropertyEntry } from "@wayward/game/game/magic/IMagicalProperty";
import type { MagicalPropertyTypeSubTypeMap } from "@wayward/game/game/magic/MagicalPropertyType";
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { ListEnder } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import type { IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IMagicalPropertyManagerEvents extends IEventSubscriberEvents {
    /**
     * Emitted when a property was removed and the value of it
     */
    remove(...identity: MagicalPropertyIdentity<[value: number]>): any;
    /**
     * Emitted when a property was added
     */
    add(...args: MagicalPropertyIdentity<[value: number, curse?: true]>): any;
    /**
     * Emitted when a property was set, and the value it was set to, and what it was before
     */
    set(...args: MagicalPropertyIdentity<[value: number, previousValue?: number, curse?: true]>): any;
    /**
     * Emitted when a property was set or removed
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
    static getNormalTypes(): MagicalNormalPropertyTypes[];
    static getSubTypes(): MagicalSubPropertyTypes[];
    static isNormalProperty(property: MagicalPropertyType): property is MagicalNormalPropertyTypes;
    static isSubProperty(property: MagicalPropertyType): property is MagicalSubPropertyTypes;
    static init(): void;
    private properties;
    private inert?;
    private cachedCount?;
    private cachedEntries?;
    private cachedTypes?;
    private cachedNormalTypes?;
    private cachedSubTypes?;
    private cachedHash?;
    static inherit(source: IHasMagic | MagicalPropertyManager | undefined, target: IHasMagic, event?: boolean): void;
    constructor(properties?: Partial<Record<MagicalPropertyType, AnyMagicalProperty>>);
    setInert(inert?: boolean): this;
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
     * @returns if this object has any uncursed magical properties
     */
    hasUncursed(): boolean;
    /**
     * @returns if this object has any of the given uncursed magical property types
     */
    hasUncursed(...types: MagicalPropertyIdentityFlat[]): boolean;
    /**
     * @returns if this object has any cursed magical properties
     */
    hasCursed(): boolean;
    /**
     * @returns if this object has any of the given cursed magical property types
     */
    hasCursed(...types: MagicalPropertyIdentityFlat[]): boolean;
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
    getInert<T extends MagicalNormalPropertyTypes>(type: T): number | undefined;
    /**
     * @returns a magical sub-property on this object, if it exists
     */
    getInert<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): number | undefined;
    getInert(...identity: MagicalPropertyIdentity): number | undefined;
    /**
     * @returns a magical property on this object, if it exists
     */
    get<T extends MagicalNormalPropertyTypes>(type: T): number | undefined;
    /**
     * @returns a magical sub-property on this object, if it exists
     */
    get<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): number | undefined;
    get(...identity: MagicalPropertyIdentity): number | undefined;
    isCurse(...identity: MagicalPropertyIdentity): boolean;
    /**
     * Sets a magical property on this object. Replaces any existing magical property of that type
     */
    set<T extends MagicalNormalPropertyTypes>(type: T, value: number, curse?: true): this;
    /**
     * Sets a magical sub-property on this object. Replaces any existing magical sub-property of that type
     */
    set<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T], value: number, curse?: true): this;
    /**
     * Sets a magical property or sub-property on this object. Replaces any existing of that type
     */
    set(...identityAndValueAndCurse: MagicalPropertyIdentity<[value: number, curse?: true]>): this;
    setCurse<T extends MagicalNormalPropertyTypes>(type: T, curse?: boolean): this;
    setCurse<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T], curse?: boolean): this;
    setCurse(...identityAndCurse: MagicalPropertyIdentity<[curse?: boolean]>): this;
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
    remove(...identity: MagicalPropertyIdentity): boolean;
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
     * @returns a list of all the magical property identities on this object `[type, subtype?]`
     */
    identities(): MagicalPropertyIdentity[];
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
        curse?: true;
    }>;
    /**
     * @returns a list of all the magical properties on this object
     */
    all(): readonly MagicalPropertyEntry[];
    /**
     * @returns a list of all the magical properties on this object,
     */
    all(intersectionType: true): readonly MagicalPropertyEntryIntersection[];
    /**
     * Translates a list of the magical properties on this object, including sub-properties
     * @param ender The way to end this list translation, ie and/or
     * @param format A formatting-translation to apply to each magical property
     */
    translate(ender?: ListEnder | false, format?: Translation | ((...identity: MagicalPropertyIdentity) => Translation), curseFilter?: "cursed" | "uncursed"): TranslationImpl;
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
     * @returns a curse translation for a magical property type
     */
    static translateCurse(type: MagicalNormalPropertyTypes): Translation;
    /**
     * @returns a curse translation for a magical sub-property type
     */
    static translateCurse<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): Translation;
    static translateCurse(...identity: MagicalPropertyIdentity): Translation;
    /**
     * @returns a translation for a magical property type
     */
    static getDescription(type: MagicalNormalPropertyTypes): Translation;
    /**
     * @returns a translation for a magical sub-property type
     */
    static getDescription<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): Translation;
    static getDescription(...identity: MagicalPropertyIdentity): Translation;
    private static translateInternal;
    hash(): string;
    private clearCachedArrays;
}
