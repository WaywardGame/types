/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
export declare enum MagicalPropertyType {
    Attack = 0,
    Defense = 1,
    Illumination = 2,
    WeightCapacity = 3,
    ItemWeight = 4,
    Stat = 5,
    Skill = 6,
    Benignity = 7,
    Malignity = 8,
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
    Insulation = 19
}
/**
 * A map of magical property types that contain sub-properties to the corresponding sub property enum
 */
export declare const magicalPropertyTypeSubTypeMap: {
    6: typeof SkillType;
    5: typeof Stat;
};
