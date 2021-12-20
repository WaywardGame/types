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
import type EventEmitter from "event/EventEmitter";
import { SkillType } from "game/entity/IHuman";
import type { ISkillLevel } from "game/entity/skill/ISkills";
import type Island from "game/island/Island";
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
export interface ISkillHost extends EventEmitter.Host<ISkillEvents> {
    readonly island: Island;
}
export default class SkillManager {
    private readonly configuration;
    private skills;
    private cachedTotalSkill?;
    private readonly _host;
    constructor(host: ISkillHost, configuration: ISkillConfiguration);
    private get host();
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
     * @returns The value of the given skill, represented as a decimal number 0-1, where 0 is 0% and 1 is 100%.
     * The value may exceed 1 given skill bonuses.
     */
    getFraction(skill: SkillType): number;
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
    gain(skill: SkillType, multiplier?: number, actionTier?: number, bypass?: boolean): void;
    setAll(skills: SkillSet): void;
    private getId;
}
