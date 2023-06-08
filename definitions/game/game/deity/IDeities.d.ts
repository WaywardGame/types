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
export declare enum Deity {
    Evil = 0,
    Neutral = 1,
    Good = 2
}
export type RuneChance = [alignment: Deity, chance: number];
/**
 * The maximum chance of a rune dropping that can come from the base chance.
 * IE, given a maxed chance (1.0), that results in an actual 30% chance of a rune dropping.
 *
 * The base chance is combined with the piety chance in the rune dropping calculation.
 */
export declare const DEITY_RUNE_CHANCE_BASE_MAX = 0.3;
/**
 * The maximum chance of a rune dropping that can come from the Piety skill.
 * IE, if the skill is at 100%, that results in an actual 30% chance of a rune dropping.
 *
 * The piety chance is combined with the base chance in the rune dropping calculation.
 */
export declare const DEITY_RUNE_CHANCE_PIETY_MAX = 0.3;
/**
 * The chance that a rune drop is replaced with a neutral rune drop.
 */
export declare const DEITY_RUNE_CHANCE_NEUTRAL = 0.1;
/**
 * The range of evil alignment gained per night between at start and once it's ramped up.
 */
export declare const DEITY_ALIGNMENT_EVIL_NIGHTLY_RAMP_RANGE: import("utilities/math/Range").IRange;
/**
 * The number of days it takes for nightly evil alignment to fully ramp up.
 */
export declare const DEITY_ALIGNMENT_EVIL_NIGHTLY_RAMP_TIME = 10;
export declare enum DeityAlignmentLevel {
    Neutral = 0,
    AlignedTo = 1,
    ReverentTo = 2,
    AcolyteOf = 3,
    DevotedTo = 4,
    ZealotOf = 5
}
export declare enum FerocityLevel {
    Minimal = 0,
    Low = 1,
    Moderate = 2,
    High = 3,
    VeryHigh = 4,
    Nightmare = 5
}
/**
 *
 * A record defining maximum thresholds for each alignment danger level.
 *
 * The current danger level is the first level above the current alignment value.
 *
 * When no thresholds are applicable, `AlignmentDangerLevel.Minimal` is used.
 */
export type FerocityLevelThresholds = Record<Exclude<FerocityLevel, FerocityLevel.Minimal>, number>;
export declare const DEFAULT_FEROCITY_LEVEL_THRESHOLDS: FerocityLevelThresholds;
