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
import type { RuneChance } from "@wayward/game/game/deity/IDeities";
import { DamageType } from "@wayward/game/game/entity/IEntity";
import { Stat } from "@wayward/game/game/entity/IStats";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
export declare enum SkillType {
    None = 0,
    Chemistry = 1,
    Anatomy = 2,
    Marksmanship = 3,
    Blacksmithing = 4,
    Botany = 5,
    Camping = 6,
    Cartography = 7,
    Claythrowing = 8,
    Cooking = 9,
    Fishing = 10,
    Fletching = 11,
    Glassblowing = 12,
    Leatherworking = 13,
    Lockpicking = 14,
    Lumberjacking = 15,
    Mining = 16,
    Mycology = 17,
    Parrying = 18,
    Stonecrafting = 19,
    Swimming = 20,
    Tactics = 21,
    Tailoring = 22,
    Throwing = 23,
    Tinkering = 24,
    Trapping = 25,
    Woodworking = 26,
    Taming = 27,
    Horticulture = 28,
    Bartering = 29,
    Seafaring = 30,
    Thaumaturgy = 31,
    DualWielding = 32,
    Theurgy = 33
}
export interface ISkillLevel {
    bonus: number;
    core: number;
    turn?: number;
}
export interface ISkillDescription extends IModdable {
    attribute?: Stat | ISkillAttribute;
    runeChance?: RuneChance;
    defaultDamageType?: DamageType;
    progressionImpact?: number;
}
export interface ISkillAttribute {
    stat: Stat;
    gainChanceOffset?: number;
    gainMultiplier?: number;
}
export declare const skillDescriptions: OptionalDescriptions<SkillType, ISkillDescription>;
