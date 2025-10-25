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
import { SkillType } from "./ISkills";
import type { ISkillLevel } from "@wayward/game/game/entity/skill/ISkills";
import type Island from "@wayward/game/game/island/Island";
import type EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface ISkillConfiguration {
    getSkillGainMultiplier?(skill: SkillType): number;
    canSkillGain?(skill: SkillType): boolean;
    onSkillGain?(skill: SkillType, fromValue: number, toValue: number, mod: number, times: number): any;
}
export interface ISkillEvents {
    /**
     * @param skill The skill that is being checked
     * @param check The desired value that needs to pass
     * @param actionTier Optional action tier
     * @return True if the skill check should pass, false if it shouldn't, undefined if it should be random
     */
    skillCheck(skill: SkillType, check: number, actionTier?: number): boolean | undefined;
    /**
     * @param skill The skill that is changing
     * @param value The new skill value (core + bonus)
     * @param oldValue The previous skill value (previous core + bonus)
     */
    skillChange(skill: SkillType, value: number, oldValue: number): any;
}
export type SkillSet = Record<SkillType, ISkillLevel>;
export interface ISkillHost extends EventEmitter.Host<ISkillEvents> {
    readonly id: number;
    readonly island: Island;
    readonly turns: number;
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
    get(skill?: SkillType): number;
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
    getModificationTurn(skill: SkillType): number;
    all(): Array<{
        bonus: number;
        core: number;
        type: SkillType;
    }>;
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
    private calculateRandomSkillGain;
    gain(skill: SkillType, multiplier?: number, actionTier?: number, bypass?: boolean, times?: number, decimalPlace?: number): void;
    setAll(skills: SkillSet): void;
}
