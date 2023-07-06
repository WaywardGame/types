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
    /**
     * Increases attack value (for weapons and ammo).
     */
    Attack = 0,
    /**
     * Increases defense value for anything equippable.
     */
    Defense = 1,
    /**
     * Increases the illumination strength of torches/candles.
     */
    Illumination = 2,
    /**
     * Increases the amount of weight/items that can be contained.
     */
    WeightCapacity = 3,
    /**
     * Decreases item weight to a minimum of 0.1.
     */
    ItemWeight = 4,
    /**
     * Increases a stat when equipped.
     */
    Stat = 5,
    /**
     * Increases a skill when equipped.
     */
    Skill = 6,
    /**
     * Increases malignity or benignity when equipped (and past the normal cap).
     */
    Reputation = 7,
    Unused = 8,
    /**
     * Increases the range in which a weapon can shoot a projectile or fishing pole/net can be thrown.
     */
    Range = 9,
    /**
     * Increases the stats normally gained when consuming/using an item.
     */
    UseBenefits = 10,
    /**
     * Increases the merchant sell value on an item.
     */
    Worth = 11,
    /**
     * Increases a trap's damage.
     */
    TrapDamage = 12,
    /**
     * Increases the player's max weight when equipped.
     */
    MaxWeight = 13,
    /**
     * Reduces the weight of each item contained within by a certain percentage.
     */
    ContainerWeight = 14,
    /**
     * Increases the preservation rate of a container of all contained items.
     */
    PreservationRate = 15,
    /**
     * Increases an item's decay value, making it last longer.
     */
    MaxDecay = 16,
    /**
     * Adds a chance in which an item does reduce in durability when taking damage.
     */
    ItemDamage = 17,
    /**
     * Increases the stoking value of an item, adding more decay to a fire source.
     */
    StokeValue = 18,
    /**
     * Increases the insulation effect of any equippable item or container.
     */
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
    /**
     * Adds a cold or fire damage type to a weapon.
     */
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
    isValidEnum?(enumValue: number): boolean;
}
export interface MagicalPropertyTypeSubTypeMap {
    [MagicalPropertyType.Stat]: Stat;
    [MagicalPropertyType.Skill]: SkillType;
    [MagicalPropertyType.Reputation]: Stat;
    [MagicalPropertyType.DoodadSkill]: SkillType;
    [MagicalPropertyType.ElementalDamage]: DamageType;
}
export declare const magicalPropertyDescriptions: PartialRecord<MagicalPropertyType, IMagicalPropertyDescription>;
