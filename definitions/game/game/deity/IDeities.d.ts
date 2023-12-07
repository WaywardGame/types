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
import { Deity } from "@wayward/game/game/deity/Deity";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Human from "@wayward/game/game/entity/Human";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
import { IRange } from "@wayward/utilities/math/Range";
export type RuneChance = [alignment: Deity, chance: number];
/**
 * The maximum chance of a rune dropping that can come from the base chance.
 * IE, given a maxed chance (1.0), that results in an actual 10% chance of a rune dropping.
 *
 * The base chance is combined with the piety chance in the rune dropping calculation.
 */
export declare const DEITY_RUNE_CHANCE_BASE_MAX = 0.1;
/**
 * The maximum chance of a rune dropping that can come from the Piety skill.
 * IE, if the skill is at 100%, that results in an actual 6% chance of a rune dropping.
 *
 * The piety chance is combined with the base chance in the rune dropping calculation.
 */
export declare const DEITY_RUNE_CHANCE_PIETY_MAX = 0.1;
/**
 * The chance that a rune drop is replaced with a neutral rune drop.
 */
export declare const DEITY_RUNE_CHANCE_NEUTRAL = 0.1;
/**
 * The range of evil alignment gained per night between at start and once it's ramped up.
 */
export declare const DEITY_ALIGNMENT_EVIL_NIGHTLY_RAMP_RANGE: IRange;
/**
 * The number of days it takes for nightly evil alignment to fully ramp up.
 */
export declare const DEITY_ALIGNMENT_EVIL_NIGHTLY_RAMP_TIME = 50;
/**
 * A multiplier for chance values that get added to the nightly evil multiplier.
 */
export declare const DEITY_ALIGNMENT_EVIL_NIGHTLY_MULTIPLIER_CHANCE_VALUE_MULTIPLIER: number;
/**
 * The chance of adding to the nightly evil multiplier.
 */
export declare const DEITY_ALIGNMENT_EVIL_NIGHTLY_MULTIPLIER_CHANCE_VALUE_CHANCE: number;
export interface IReadableAlignment {
    /**
     * The current Deity aligned to.
     * - Negative = `Deity.Evil`
     * - 0 = `Deity.Neutral`
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
    /**
     * Modifies the alignment gained based on the trend of actions the player did over the course of the day.
     */
    readonly nightlyEvilMultiplier: number;
}
export declare const DEITY_ALIGNMENT_DEFAULT_CAP = 64000;
export declare namespace IReadableAlignment {
    function of(source?: Human | Island): IReadableAlignment;
    function project(alignment: IReadableAlignment, sacrifice: ISacrifice, human: Human): IReadableAlignment;
}
export interface ISacrifice {
    altar: Doodad;
    deity: Deity;
}
export declare namespace ISacrifice {
    interface IItemCalculation {
        item: Item;
        worth: number;
    }
    interface ICalculation {
        deity: Deity;
        invokeValue: number;
        itemValue: number;
        totalValue: number;
        items: IItemCalculation[];
    }
    function calculate(sacrifice: ISacrifice, human: Human): ICalculation;
    function getWorth(deity: Deity, item: Item, from: Human): number;
}
export declare enum DeityAlignmentLevel {
    Neutral = 0,// 0 - 7999 alignment
    TouchedBy = 1,// 8000 - 15999 alignment
    AlignedTo = 2,// 16000 - 23999
    ReverentTo = 3,// 24000 - 31999
    AcolyteOf = 4,// 32000 - 39999
    DevotedTo = 5,// 40000 - 47999
    ZealotOf = 6,// 48000 - 55999
    ConsecratedBy = 7,// 56000 - 63999
    FacetOf = 8
}
export declare namespace DeityAlignmentLevel {
    function lerp(source?: Human | Island | number): DeityAlignmentLevel;
    const translate: (source?: number | Human<number, import("../reference/IReferenceManager").ReferenceType.NPC | import("../reference/IReferenceManager").ReferenceType.Player> | Island | undefined, context?: any) => import("../../language/impl/TranslationImpl").default;
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
