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
interface IChanceRandom {
    chance(decimal: number): boolean;
}
/**
 * Normalizes endurance durability-loss chances into the effective per-event proc chance.
 * Cursed endurance uses the same magnitude as uncursed endurance, but applies an extra loss proc instead of preventing one.
 */
export declare function getEffectiveDurabilityLossChance(durabilityLossChance?: number): number;
/**
 * Returns the number of durability-loss procs for a single endurance check.
 * Uncursed endurance can prevent the event entirely, while cursed endurance can add at most one extra proc.
 */
export declare function getDurabilityLossProcCount(random: IChanceRandom, durabilityLossChance?: number): number;
export {};
