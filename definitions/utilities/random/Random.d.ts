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
import type { IRange } from "@wayward/utilities/math/Range";
import type { IRandomGenerator, RandomSychronizationCheck, WeightedOption } from "@wayward/utilities/random/IRandom";
export declare class Random<G extends IRandomGenerator = IRandomGenerator> {
    generator: G;
    constructor(generator: G);
    /**
     * Generates a random number between 0 (inclusive) and 1 (exclusive)
     */
    float(): number;
    /**
     * Generates a random number between 0 (inclusive) and max (exclusive)
     */
    float(max: number): number;
    /**
     * Generates a random number between min (inclusive) and max (exclusive)
     */
    float(min: number, max: number): number;
    /**
     * Generates a random number from the given range.
     */
    float(range: IRange): number;
    /**
     * Generates a random integer between 0 (inclusive) and max (exclusive)
     */
    int(max: number): number;
    /**
     * Generates a random integer between min (inclusive) and max (exclusive)
     */
    int(min: number, max: number): number;
    /**
     * Generates a random integer from the given range.
     */
    int(range: IRange): number;
    /**
     * Generates a random integer between min and max (inclusive)
     */
    intInRange(min: number, max: number): number;
    intInRange(range: IRange): number;
    intInRange(range?: IRange): number | undefined;
    /**
     * Generates a random boolean
     */
    bool(): boolean;
    /**
     * Get a percentage for something
     * Returns a number between 1 and 100 (inclusive, if minOffset is not set)
     */
    percent(minOffset?: number, chanceOutOf?: number, ceil?: boolean): number;
    /**
     * Returns whether a chance passes, given a decimal number.
     *
     * Example: `chance(0.1)` is a `1/10` chance, `chance(0.8)` is a `4/5` chance
     */
    chance(decimal: number): boolean;
    /**
     * Returns the number procs that should happen, given a decimal number.
     *
     * Example: `procs(0.1)` is a `1/10` chance for one proc, `procs(1.8)` is 1 guaranteed and `4/5` chance of another
     */
    procs(decimal: number): number;
    /**
     * Chooses a random entry in an array and returns it
     */
    choice<A extends any[]>(...from: A): A[number];
    /**
     * Returns a new array containing random choices from a given array.
     * @param arr The array to return items from
     * @param count The number of items to return in the array
     *
     * Using a count >= arr.length will return a shuffled array of all choices.
     */
    sampling<T = any>(arr: T[], count: number): T[];
    /**
     * Returns a new shuffled array
     */
    shuffle<T>(array: readonly T[]): T[];
    /**
     * Modifies an array and shuffles it
     */
    shuffleInPlace<T>(array: T[]): T[];
    getElement<T>(array: T[]): T;
    /**
     * Returns a random T from the given choices, where each choice is weighted by a number. Higher numbers = higher chance.
     */
    weightedChoice<T>(choices: Array<WeightedOption<T>>): T;
    /**
     * Returns a sampling of random T's from the given choices, where each choice is weighted by a number. Higher numbers = higher chance.
     *
     * Using a count >= choices.length will return a shuffled array of all choices.
     */
    weightedSampling<T>(choices: Array<WeightedOption<T>>, count: number): T[];
    private getWeightedChoiceTuple;
    withGenerator<T>(generator: G, execute: () => T): T;
    clone<T>(requiresSynchronization?: RandomSychronizationCheck<T>, initialState?: T): Random<G>;
    /**
     * Generates a rounded number between a range of numbers using exponential interpolation with optional weight.
     * Note: Thanks ChatGPT!
     * @param min Minimum number of range.
     * @param max Maximum number of range.
     * @param steepness Steepness of the curve.
     * @returns number between provided min/max, rounded.
     */
    intInRangeExponential(min: number, max: number, steepness?: number): number;
    advance(times?: number): this;
}
