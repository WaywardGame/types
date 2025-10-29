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
import type Deity from "@wayward/game/game/deity/Deity";
import type { DamageType } from "@wayward/game/game/entity/IEntity";
import type { SkillType } from "../entity/skill/ISkills";
import { Stat } from "@wayward/game/game/entity/IStats";
export declare const MAGICAL_PROPERTY_GLOWING_LIGHT_BONUS = 5;
declare enum MagicalPropertyType {
    /** Increases attack value (for weapons and ammo) */
    Power_Attack = 0,
    /** Increases defense value for anything equippable */
    Guarding_Defense = 1,
    /** Increases the illumination strength of torches/candles */
    Illumination_LightItemLightBonus = 2,
    /** Increases the amount of weight/items that can be contained */
    Magnitude_WeightCapacity = 3,
    /** Decreases item weight (minimum weight is 0.1) */
    Featherweight = 4,
    /** Increases a stat when equipped */
    Stat = 5,
    /** Increases a skill when equipped */
    Skill = 6,
    /** Improves invoking and sacrifice chances */
    Fanaticism_Deity = 7,
    /** Increased the scare radius of the scarecrow */
    Terror_ScareRadius = 8,
    /** Increases the range in which a weapon can shoot a projectile or fishing pole/net can be thrown */
    Range = 9,
    /** Increases the stats normally gained when consuming/using an item */
    Potency_ImproveConsumableStats = 10,
    /** Increases the credit awarded by merchants when selling this item */
    Worth = 11,
    /** Increases a trap's damage */
    Ensnaring_TrapDamage = 12,
    /** Increases the player's max weight when equipped */
    Lightening_PlayerWeightMax = 13,
    /**
     * Reduces the weight of each item contained within by a certain percentage if the item has reducedStoredItemsWeight set.
     * This does not change the container's weight capacity.
     */
    Storing_ContainedItemsWeight = 14,
    /** Increases the preservation rate of a container of all contained items */
    Preservation_ContainedItemsDecayRate = 15,
    /** Increases an item's decay value, making it last longer */
    Hoarding_MaxDecay = 16,
    /** Adds a chance in which an item does reduce in durability when taking damage */
    Endurance_DurabilityLossChance = 17,
    /** Increases the stoking value of an item, adding more decay to a fire source */
    Stoking = 18,
    /** Increases the insulation effect of any equippable item or container */
    Insulation = 19,
    /**
     * Adds damage, range, and reduces stamina used when throwing items.
     * It also removes the heavy item reduction when calculating the range.
     */
    Hurling_ThrowDamage = 20,
    /** Adds tame length and disables chance to fail taming when attempting to offer to aberrant creatures */
    Offering = 21,
    /** Increased effectiveness (quality and chance) of crafts when using this in crafts */
    Aptitude_CraftingBonus = 22,
    /** Has a chance to regenerate durability every turn */
    Regeneration_DurabilityRegen = 23,
    /** Adds a bonus to the item's civilization score value */
    Progress_CivScore = 24,
    /** Adds a bonus to the growth speed for plants and mushrooms planted on it */
    Prosperity_TerrainGrowingSpeed = 25,
    /** Adds "light" to any piece of equipment/weapon */
    Glowing_EquipmentLightBonus = 26,
    /** Adds a property that emits skill bonus to anybody within range (3x3 square) of the doodad */
    Encircling_DoodadSkill = 27,
    /** Adds a cold or fire damage type to a weapon */
    ElementalDamage = 28,
    /** Adds a property to equippables that will enhance the effect of consumables in a given stat */
    StatPotency_EquipmentImproveConsumableStats = 29,
    /** Adds bonus durability to an item */
    Persistence_MaxDurability = 30,
    /** Adds a chance in which an item does reduce in decay when passing a turn */
    Perpetuity_DecayLossChance = 31
}
export default MagicalPropertyType;
export declare enum MagicalPropertyStat {
    Health = -10,
    Stamina = -9,
    Metabolism = -8
}
export declare const magicalPropertyStatMap: {
    [-8]: Stat.Metabolism;
    [-10]: Stat.Health;
    [-9]: Stat.Stamina;
    0: MagicalPropertyStat.Health;
    1: MagicalPropertyStat.Stamina;
    5: MagicalPropertyStat.Metabolism;
};
export interface MagicalPropertyTypeSubTypeMap {
    [MagicalPropertyType.Stat]: MagicalPropertyStat;
    [MagicalPropertyType.Skill]: SkillType;
    [MagicalPropertyType.Fanaticism_Deity]: Deity;
    [MagicalPropertyType.Encircling_DoodadSkill]: SkillType;
    [MagicalPropertyType.ElementalDamage]: DamageType;
    [MagicalPropertyType.StatPotency_EquipmentImproveConsumableStats]: MagicalPropertyStat;
}
