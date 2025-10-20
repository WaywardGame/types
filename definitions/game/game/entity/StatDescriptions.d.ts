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
import type Human from "@wayward/game/game/entity/Human";
import type { SkillType } from "./skill/ISkills";
import { Stat } from "@wayward/game/game/entity/IStats";
export interface IStatGainInfo {
    amount?: number;
}
export interface IStatDescription {
    /**
     * A multiplier for stat gain
     */
    gainMultiplier?: number;
    /**
     * When a human "gains" stat (ie from skill use), if this method is defined, it will be called.
     * @param human The human that "gains" stat
     * @param gainAmount The amount to gain. This will usually be 1. You should respect this if possible.
     * @param sourceSkill The skill that caused this stat gain, if any.
     * @returns Whether the stat was truly gained
     *
     * **Note:** When implementing this, it is recommended to use
     */
    gain?(human: Human, gainAmount: number, sourceSkill?: SkillType): boolean;
    /**
     * When a human performs an action that has a chance of raising a stat, the chance is `1 / getGainChanceOffset()`
     *
     * When `getGainChanceOffset` is not implemented, the stat max will be used instead.
     * When the stat is not an `IStatMax`, the current value will be used instead.
     */
    getGainChanceOffset?(human: Human, defaultGainChanceOffset: number): number;
}
export declare const statDescriptions: PartialRecord<Stat, IStatDescription>;
