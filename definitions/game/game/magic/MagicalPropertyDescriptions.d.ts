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
import type { ItemType, IItemDescription, IMagicalPropertyInfo } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { MagicalNormalPropertyTypes, MagicalSubPropertyTypes, MagicalPropertyIdentity } from "@wayward/game/game/magic/IMagicalProperty";
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import type TranslationClass from "@wayward/game/language/Translation";
export declare namespace MagicalPropertyInfoHelper {
    function isNormalProperty(property: MagicalPropertyType): property is MagicalNormalPropertyTypes;
    function isSubProperty(property: MagicalPropertyType): property is MagicalSubPropertyTypes;
    /**
     * Creates a partial `IMagicalPropertyDescription` that generates an integer value from min (inclusive) to max (exclusive),
     * with an *actual* max for the magical property using `max`. (1 higher)
     */
    function intRange(item: Item | ItemType, min: number, max: number, generatedMax?: number): {
        min: number;
        max: number;
        value: () => number;
    };
    function randomInt(item: Item | ItemType, maxExclusive: number): number;
    function randomInt(item: Item | ItemType, min: number, maxExclusive: number): number;
    function randomIntInRange(item: Item | ItemType, max: number): number;
    function randomIntInRange(item: Item | ItemType, min: number, maxInclusive: number): number;
    function randomFloat(item: Item | ItemType, maxExclusive: number): number;
    function randomFloat(item: Item | ItemType, min: number, maxExclusive: number): number;
    function functionRequiringItem<T>(item: Item | ItemType, fn: (item: Item) => T): () => T;
}
export interface IMagicalPropertyDescription {
    /**
     * Whether this magical property is applicable for the given item.
     */
    isApplicable(item: Item, description: IItemDescription): boolean;
    /**
     * Generates the magical property value when added.
     */
    getInfo(item: Item | ItemType, description: IItemDescription): IMagicalPropertyInfo | undefined;
    /**
     * By default, all magical property types can be inscribed. This allows disabling that feature for this magical property type.
     */
    disableInscription?: true;
    /**
     * If set, this magical property cannot appear as a "curse" (inverted value) magical property.
     */
    disableCurse?: true;
    subTypeEnum?: Record<string, string | number>;
    notBasicEnum?: boolean;
    isValidEnum?(enumValue: number): boolean;
    translateArgs?(...identity: MagicalPropertyIdentity): TranslationArg[];
}
export declare const magicalPropertyDescriptions: PartialRecord<MagicalPropertyType, IMagicalPropertyDescription>;
declare let Translation: typeof TranslationClass | undefined;
export declare namespace IMagicalPropertyDescription {
    function setTranslation(_Translation: typeof Translation): void;
}
export {};
