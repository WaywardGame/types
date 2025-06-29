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
declare namespace Arrays {
    type Value<A extends any[]> = A extends Array<infer T> ? T : never;
    const EMPTY: readonly [];
    function repeat<A extends any[]>(count: number, ...values: A): Array<A[number]>;
    /**
     * Produces an array of the numbers `min` (inclusive) to `max` (exclusive), in steps of `step`
     * @param min A number, inclusive
     * @param max A number, exclusive
     * @param step The difference between each step between min and max, defaulting to 1
     */
    function range(min: number, max: number, step: number): number[];
    /**
     * Produces an array of the numbers `min` (inclusive) to `max` (exclusive)
     * @param min A number, inclusive
     * @param max A number, exclusive
     */
    function range(min: number, max: number): number[];
    /**
     * Produces an array of the numbers 0 through `max` (exclusive)
     * @param max A number, exclusive
     */
    function range(max: number): number[];
    /**
     * Produces an array of the numbers `min` (inclusive) to `max` (exclusive), in steps of `step`
     * @param min A number, inclusive
     * @param max A number, exclusive
     * @param step The difference between each step between min and max, defaulting to 1
     */
    function range<T>(min: number, max: number, step: number, mapper?: (index: number, array: T[]) => T): T[];
    /**
     * Produces an array of the numbers `min` (inclusive) to `max` (exclusive)
     * @param min A number, inclusive
     * @param max A number, exclusive
     */
    function range<T>(min: number, max: number, mapper?: (index: number, array: T[]) => T): T[];
    /**
     * Produces an array of the numbers 0 through `max` (exclusive)
     * @param max A number, exclusive
     */
    function range<T>(max: number, mapper?: (index: number, array: T[]) => T): T[];
    function equalsOr<T>(arrayOr1: ArrayLike<T> | T | undefined, arrayOr2: ArrayLike<T> | T | undefined, valueEquals: (a: T, b: T) => any): boolean;
    function equalsOr(arrayOr1: any | undefined, arrayOr2: any | undefined): boolean;
    function equals<T>(array1: ArrayLike<T> | undefined, array2: ArrayLike<T> | undefined, valueEquals: (a: T, b: T) => any): boolean;
    /**
     * Note: This does not perform any deep checking
     */
    function equals(array1: ArrayLike<any> | undefined, array2: ArrayLike<any> | undefined): boolean;
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
    function objectValuesOr<T>(value: T | Record<PropertyKey, T>): T[];
    function concat<T>(...arrays: T[][]): T[];
    function lerp<T>(array: readonly T[], t: number): T;
    function permutations<T>(...items: T[]): T[][];
    function groups<T>(size: number, items: T[]): T[][];
    function count(arr: any[], item: any, stopAtCount?: number): number;
}
export default Arrays;
