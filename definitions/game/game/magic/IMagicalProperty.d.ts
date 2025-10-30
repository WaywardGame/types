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
import type MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import type { MagicalPropertyTypeSubTypeMap } from "@wayward/game/game/magic/MagicalPropertyType";
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export interface IHasMagic {
    magic?: MagicalPropertyManager;
}
export interface IMagicalProperty {
    value: number;
    curse?: true;
}
export declare const SYMBOL_MAGIC_SUB_PROPERTY_TYPES: unique symbol;
export declare const SYMBOL_MAGIC_SUB_PROPERTY_ENTRIES: unique symbol;
export interface IMagicalSubProperty<T extends number> {
    subPropertyCount: number;
    subProperties: Partial<Record<T, IMagicalProperty>>;
    [SYMBOL_MAGIC_SUB_PROPERTY_TYPES]: readonly T[];
    [SYMBOL_MAGIC_SUB_PROPERTY_ENTRIES]: ReadonlyArray<{
        type: T;
        value: number;
        curse?: true;
    }>;
}
export type MagicalProperty<T extends MagicalPropertyType> = MagicalPropertyTypeSubTypeMap extends Record<T, any> ? IMagicalSubProperty<MagicalPropertyTypeSubTypeMap[T]> : IMagicalProperty;
export interface MagicalNormalPropertyEntry {
    type: MagicalNormalPropertyTypes;
    value: number;
    curse?: true;
}
export type MagicalSubPropertyEntry = {
    [K in MagicalSubPropertyTypes]: {
        type: K;
        subType: MagicalPropertyTypeSubTypeMap[K];
        value: number;
        curse?: true;
    };
}[MagicalSubPropertyTypes];
export type MagicalPropertyEntry = MagicalNormalPropertyEntry | MagicalSubPropertyEntry;
export declare namespace MagicalPropertyEntry {
    function isSubType(entry: MagicalPropertyEntry): entry is MagicalSubPropertyEntry;
    function identity(entry: MagicalPropertyEntry): MagicalPropertyIdentity;
}
export interface MagicalPropertyEntryIntersection {
    type: MagicalPropertyType;
    subType?: MagicalSubPropertySubTypes;
    value: number;
    curse?: true;
}
export type AnyMagicalProperty = Partial<IMagicalProperty> & PartialValues<{
    [K in MagicalSubPropertyTypes]: IMagicalSubProperty<MagicalPropertyTypeSubTypeMap[K]>;
}>;
export type MagicalSubPropertyTypes = keyof MagicalPropertyTypeSubTypeMap;
export type MagicalNormalPropertyTypes = Exclude<MagicalPropertyType, MagicalSubPropertyTypes>;
export type MagicalSubPropertySubTypes = MagicalPropertyTypeSubTypeMap[MagicalSubPropertyTypes];
export type MagicalSubPropertyTypesResult = {
    [K in MagicalSubPropertyTypes]: {
        type: K;
        subTypes: ReadonlyArray<MagicalPropertyTypeSubTypeMap[K]>;
    };
}[MagicalSubPropertyTypes];
export type MagicalNormalPropertyIdentity<A extends any[] = []> = [MagicalNormalPropertyTypes, ...A];
export type MagicalSubPropertyIdentity<A extends any[] = []> = {
    [Key in MagicalSubPropertyTypes]: [Key, MagicalPropertyTypeSubTypeMap[Key], ...A];
}[MagicalSubPropertyTypes];
export type MagicalSubPropertyIdentitySimple<A extends any[] = []> = [MagicalSubPropertyTypes, MagicalSubPropertySubTypes, ...A];
export type MagicalPropertyIdentity<A extends any[] = []> = [MagicalPropertyType, ...A] | MagicalSubPropertyIdentity<A>;
export type MagicalPropertyIdentityFlat = MagicalNormalPropertyTypes | MagicalSubPropertyTypes | {
    [Key in MagicalSubPropertyTypes]: [Key, MagicalPropertyTypeSubTypeMap[Key]];
}[MagicalSubPropertyTypes];
export type MagicalPropertyIdentityHash = `${MagicalNormalPropertyTypes}` | {
    [Key in MagicalSubPropertyTypes]: `${Key}:${MagicalPropertyTypeSubTypeMap[Key]}`;
}[MagicalSubPropertyTypes];
export declare namespace MagicalPropertyIdentity {
    function isNormalProperty(identity: MagicalPropertyIdentity): identity is MagicalNormalPropertyIdentity;
    function isSubProperty(identity: MagicalPropertyIdentity): identity is MagicalSubPropertyIdentity;
    function hash(...[type, subType]: MagicalPropertyIdentity): MagicalPropertyIdentityHash;
    function hash(type: MagicalSubPropertyTypes, subType: MagicalSubPropertySubTypes): MagicalPropertyIdentityHash;
    function translationHash(...identity: MagicalPropertyIdentity): string;
    function unhash(hash: MagicalPropertyIdentityHash): MagicalPropertyIdentity | undefined;
    function equals(...identities: MagicalPropertyIdentity[]): boolean;
    function getSubTypeTranslationDictionaryAndKey(identity: MagicalPropertyIdentity): TranslationImpl | undefined;
}
