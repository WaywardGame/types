/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { DamageType } from "game/entity/IEntity";
import { SkillType } from "game/entity/IHuman";
import { Stat } from "game/entity/IStats";
import type { IItemDescription, IMagicalPropertyInfo } from "game/item/IItem";
import type Item from "game/item/Item";
export declare enum MagicalPropertyType {
    Attack = 0,
    Defense = 1,
    Illumination = 2,
    WeightCapacity = 3,
    ItemWeight = 4,
    Stat = 5,
    Skill = 6,
    Reputation = 7,
    Unused = 8,
    Range = 9,
    UseBenefits = 10,
    Worth = 11,
    TrapDamage = 12,
    MaxWeight = 13,
    ContainerWeight = 14,
    PreservationRate = 15,
    MaxDecay = 16,
    ItemDamage = 17,
    StokeValue = 18,
    Insulation = 19,
    /**
     * Adds damage, range, and reduces stamina used when throwing items. It also removes the heavy item reduction when calculating the range.
     */
    ThrowingBonus = 20,
    /**
     * Adds tame length and disables chance to fail taming when attempting to offer to aberrant creatures.
     */
    Offering = 21,
    /**
     * Increased effectiveness (quality and chance) of crafts when using this in crafts.
     */
    CraftingBonus = 22,
    /**
     * Has a chance to regenerate durability every turn.
     */
    ItemRegeneration = 23,
    /**
     * Adds a bonus to the item's civilization score value.
     */
    CivilizationBonus = 24,
    /**
     * Adds a bonus to the growth speed for plants and mushrooms planted on it.
     */
    GrowingSpeed = 25,
    /**
     * Adds "light" to any piece of equipment/weapon.
     */
    Glowing = 26,
    /**
     * Adds a property that emits skill bonus to anybody within range (3x3 square) of the doodad.
     */
    DoodadSkill = 27,
    ElementalDamage = 28
}
export interface IMagicalPropertyDescription {
    /**
     * Whether this magical property is applicable for the given item.
     */
    isApplicable(item: Item, description: IItemDescription): boolean;
    /**
     * Generates the magical property value when added.
     */
    getInfo(item: Item, description: IItemDescription): IMagicalPropertyInfo | undefined;
    /**
     * By default, all magical property types can be inscribed. This allows disabling that feature for this magical property type.
     */
    disableInscription?: true;
    subTypeEnum?: any;
}
export interface MagicalPropertyTypeSubTypeMap {
    [MagicalPropertyType.Stat]: Stat;
    [MagicalPropertyType.Skill]: SkillType;
    [MagicalPropertyType.Reputation]: Stat;
    [MagicalPropertyType.DoodadSkill]: SkillType;
    [MagicalPropertyType.ElementalDamage]: DamageType;
}
export declare const magicalPropertyDescriptions: PartialRecord<MagicalPropertyType, IMagicalPropertyDescription>;
