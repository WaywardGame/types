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
import type { RuneChance } from "@wayward/game/game/deity/IDeities";
import { DamageType } from "@wayward/game/game/entity/IEntity";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import { Stat } from "@wayward/game/game/entity/IStats";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
export interface ISkillLevel {
    bonus: number;
    core: number;
    turn?: number;
}
export interface ISkillDescription extends IModdable {
    attribute?: Stat | ISkillAttribute;
    runeChance?: RuneChance;
    defaultDamageType?: DamageType;
    alignmentImpact?: number;
}
export interface ISkillAttribute {
    stat: Stat;
    gainChanceOffset?: number;
    gainMultiplier?: number;
}
export declare const skillDescriptions: OptionalDescriptions<SkillType, ISkillDescription>;
