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
export declare function TupleType<T>(): {
    create: <T2 extends T[]>(...items: T2) => T2;
};
export declare function Tuple<T extends any[]>(...items: T): T;
export declare module Tuple {
    export function is<T extends any[]>(value: unknown): value is T;
    export type TupleFilter<I extends 0 | 1 | 2 | 3 | 4 | 5, NOT> = <A extends any[]>(value: A) => value is Extract<[...Slice<A>[I], Exclude<A[I], NOT>, ...SliceAfter<A>[IAddOne[I]]], A>;
    export type TupleNullishFilter<I extends 0 | 1 | 2 | 3 | 4 | 5> = TupleFilter<I, undefined | null>;
    export function filterNullish<I extends 0 | 1 | 2 | 3 | 4 | 5>(index: I): TupleNullishFilter<I>;
    export type TupleFalsyFilter<I extends 0 | 1 | 2 | 3 | 4 | 5> = TupleFilter<I, Falsy>;
    export function filterFalsy<I extends 0 | 1 | 2 | 3 | 4 | 5>(index: I): TupleFalsyFilter<I>;
    interface Slice<A extends any[]> {
        [0]: [];
        [1]: [A[0]];
        [2]: [A[0], A[1]];
        [3]: [A[0], A[1], A[2]];
        [4]: [A[0], A[1], A[2], A[3]];
        [5]: [A[0], A[1], A[2], A[3], A[4]];
    }
    interface SliceAfter<A extends any[]> {
        [1]: A extends [any, ...infer R] ? R : never;
        [2]: A extends [any, any, ...infer R] ? R : never;
        [3]: A extends [any, any, any, ...infer R] ? R : never;
        [4]: A extends [any, any, any, any, ...infer R] ? R : never;
        [5]: A extends [any, any, any, any, any, ...infer R] ? R : never;
        [6]: A extends [any, any, any, any, any, any, ...infer R] ? R : never;
    }
    interface IAddOne {
        [0]: 1;
        [1]: 2;
        [2]: 3;
        [3]: 4;
        [4]: 5;
        [5]: 6;
    }
    export type Twice<T> = [T, T];
    export {};
}
declare module Arrays {
    type Value<A extends any[]> = A extends Array<infer T> ? T : never;
    const EMPTY: readonly undefined[];
    function repeat<A extends any[]>(count: number, ...values: A): Array<A[number]>;
    /**
     * Produces an array of the numbers @param min (inclusive) to @param max (exclusive), in steps of @param step
     * @param min A number, inclusive
     * @param max A number, exclusive
     * @param step The difference between each step between min and max, defaulting to 1
     */
    function range(min: number, max: number, step: number): number[];
    /**
     * Produces an array of the numbers @param min (inclusive) to @param max (exclusive)
     * @param min A number, inclusive
     * @param max A number, exclusive
     */
    function range(min: number, max: number): number[];
    /**
     * Produces an array of the numbers 0 through @param max (exclusive)
     * @param max A number, exclusive
     */
    function range(max: number): number[];
    function equals(array1: ArrayLike<number> | undefined, array2: ArrayLike<number> | undefined): boolean;
    /**
     * Returns a new array containing random choices from a given array.
     * @param arr The array to return items from
     * @param count The number of items to return in the array
     * @param seeded Whether the random choices should be seeded. Defaults to true.
     *
     * Note: Be careful. This method can be very slow if used on a big array with a high count.
     */
    function random<T = any>(arr: T[], count: number, seeded?: boolean): T[];
    /**
     * Shuffles the contents of the given array using the Fisher-Yates Shuffle: https://bost.ocks.org/mike/shuffle/
     * @returns The given array after shuffling its contents.
     */
    function shuffle<T>(arr: T[], r?: () => number): T[];
    /**
     * Toggles the given value in the given array.
     * @param arr The array to toggle the value in.
     * @param value The value to toggle in the array.
     * @param includes Whether the value should be present in the array.
     * - `true` — include in the array
     * - `false` — remove from the array
     * - `undefined` — toggle whether it's in the array.
     *   (If it currently is, remove it. If it's not, add it.)
     */
    function toggle<T>(arr: T[], value: T, includes?: boolean): number;
    /**
     * Given a *sorted* array, a value, and a sorting function, returns the index where the value should be inserted.
     *
     * Notes:
     * - If the input array is not sorted, it won't work. There is no validation to make sure that the array you put in is sorted, either.
     * - The algorithm works in a similar way to quicksort. It pivots on the centre of the array, and figures out which side the
     * value will fall on, then pivots on the centre of that side, then again and again until the correct location is found. This
     * has the effect of heavily reducing the number of required sorting function calls.
     */
    function getSortedIndex<T>(array: ArrayLike<T>, value: T, sorter: (a: T, b: T) => number): number;
    function pushTo<T>(arr: T[]): (...items: T[]) => number;
    function arrayOr<T>(value: T | T[]): T[];
    function tupleOr<A>(value: A): A extends any[] ? A : [A];
    function concat<T>(...arrays: T[][]): T[];
}
export default Arrays;
