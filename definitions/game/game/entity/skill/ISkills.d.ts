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
import type { IModdable } from "mod/ModRegistry";
export interface ISkillLevel {
    bonus: number;
    core: number;
}
export interface ISkillDescription extends IModdable {
    attribute?: Stat | ISkillAttribute;
    reputation?: number;
    defaultDamageType?: DamageType;
}
export interface ISkillAttribute {
    stat: Stat;
    gainChanceOffset?: number;
    gainMultiplier?: number;
}
export declare const skillDescriptions: OptionalDescriptions<SkillType, ISkillDescription>;
