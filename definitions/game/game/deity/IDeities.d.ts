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
import type Deity from "@wayward/game/game/deity/Deity";
import type { DeityReal } from "@wayward/game/game/deity/Deity";
export type RuneChance = [deity: ArrayOr<DeityReal>, chance: number];
/**
 * The maximum chance of a rune dropping that can come from the base chance.
 * IE, given a maxed chance (1.0), that results in an actual 10% chance of a rune dropping.
 *
 * The base chance is combined with the theurgy chance in the rune dropping calculation.
 */
export declare const DEITY_RUNE_CHANCE_BASE_MAX = 0.1;
/**
 * The maximum chance of a rune dropping that can come from the Theurgy skill.
 * IE, if the skill is at 100%, that results in an actual 6% chance of a rune dropping.
 *
 * The theurgy chance is combined with the base chance in the rune dropping calculation.
 */
export declare const DEITY_RUNE_CHANCE_THEURGY_MAX = 0.1;
/**
 * The chance of a rune dropping from a zone is multiplied by this value for each tier of the zone.
 * For example, if this is set to 0.5, a zone of tier 1 would have a 50% less of a chance of dropping a rune, and a zone of tier 2 would have no reduced chance at dropping a rune (since it would be at 1).
 *
 * Zone 0 will always have a 0% chance of dropping a rune.
 */
export declare const DEITY_RUNE_CHANCE_ZONE_TIER_MULTIPLIER = 0.5;
export interface IReadableAlignment {
    /**
     * The current Deity aligned to.
     * - Negative = `Deity.Evil`
     * - 0 = `Deity.Chaos`
     * - Positive = `Deity.Good`
     */
    readonly deity: Deity;
    /**
     * The current *actual* alignment of the player. Good + Evil.
     */
    readonly value: number;
    /**
     * The current "good" of the player. A positive integer from 0 to maximum value.
     * @deprecated Are you sure you want to use this instead of `value` raw?
     */
    readonly good: number;
    /**
     * The current "evil" of the player. A positive integer from 0 to maximum value.
     * @deprecated Are you sure you want to use this instead of `value` raw?
     */
    readonly evil: number;
    /**
     * The maximum "good" that the player can have naturally (without bonuses). A positive integer.
     */
    readonly goodCap: number;
    /**
     * The maximum "evil" that the player can have naturally (without bonuses). A positive integer.
     */
    readonly evilCap: number;
    /**
     * A decimal number, 0 = neutral alignment, -1 = capped evil, 1 = capped good.
     */
    readonly fraction: number;
    /**
     * The number of days since the last invocation/sacrifice.
     */
    readonly cursed: number;
}
