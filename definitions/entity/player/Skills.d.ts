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
import { DamageType } from "entity/IEntity";
import { SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
import { IModdable } from "mod/ModRegistry";
export interface ISkillLevel {
    bonus: number;
    core: number;
}
export declare type ISkillSet = OptionalDescriptions<SkillType, ISkillLevel>;
export interface ISkillDescription extends IModdable {
    attribute?: Stat;
    reputation?: number;
    defaultDamageType?: DamageType;
}
export declare function skillSet(): ISkillSet;
export declare const skillDescriptions: OptionalDescriptions<SkillType, ISkillDescription>;
