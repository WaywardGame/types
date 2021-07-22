/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import EventEmitter from "event/EventEmitter";
import { SkillType } from "game/entity/IHuman";
import { ISkillLevel } from "game/entity/skill/ISkills";
export interface ISkillConfiguration {
    id: GetterOfOr<string | number>;
    getSkillGainMultiplier?(skill: SkillType): number;
    canSkillGain?(skill: SkillType): boolean;
    onSkillGain?(skill: SkillType, mod: number): any;
}
export interface ISkillEvents {
    /**
     * @param skill The skill that is changing
     * @param value The new skill value (core + bonus)
     * @param oldValue The previous skill value (previous core + bonus)
     */
    skillChange(skill: SkillType, value: number, oldValue: number): any;
}
export declare type SkillSet = Record<SkillType, ISkillLevel>;
export default class SkillManager {
    private readonly eventHost;
    private readonly configuration;
    private skills;
    private cachedTotalSkill?;
    constructor(eventHost: EventEmitter.Host<ISkillEvents>, configuration: ISkillConfiguration);
    has(skill: SkillType): boolean;
    /**
     * @returns whether the given skill is maxed-out. Ignores bonus.
     */
    isMaxed(skill: SkillType): boolean;
    /**
     * @returns The value of the given skill, the sum of the base value and any bonuses from magical equipment
     */
    get(skill: SkillType): number;
    /**
     * @returns the "base value" of the skill (ignoring any bonuses applied by magical equipment)
     */
    getCore(skill: SkillType): number;
    /**
     * @returns the skill bonus applied by magical equipment
     */
    getBonus(skill: SkillType): number;
    /**
     * @returns The total skill (combination of all other skills). Ignores skill bonuses.
     */
    getTotal(): number;
    all(): {
        bonus: number;
        core: number;
        type: SkillType;
    }[];
    set(skill: SkillType, core?: number, bonus?: number): this;
    /**
     * Sets the "base value" of the skill (ignoring any bonuses applied by magical equipment)
     * @param skill The skill to set the base value of.
     * @param value The value (between 0 and 100) to set the skill to.
     */
    setCore(skill: SkillType, value: number): this;
    setBonus(skill: SkillType, bonus: number): this;
    setBonuses(bonuses: Map<SkillType, number>): this;
    /**
     * @returns Whether the skill of this human is more than or equal to a random number between `0` and the value of `check`.
     */
    skillAndActionTierCheck(skill: SkillType, check: number, actionTier?: number): boolean;
    getSkillAndActionTierValue(skill: SkillType, actionTier?: number): number;
    gain(skill: SkillType, mod?: number, actionTier?: number, bypass?: boolean): void;
    setAll(skills: SkillSet): void;
    private getId;
}
