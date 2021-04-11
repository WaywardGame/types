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
declare type EntryMapper<T = any, R = any, A extends any[] = any[]> = (v: T, ...args: A) => R;
declare type SortFallback<T = any, R = any, A extends any[] = any[]> = (a: T, b: T, valueA: R, valueB: R, ...args: A) => number;
export interface ISorter<T, R> {
    (a: T, b: T): number;
    /**
     * Sets this sort to be reversed
     */
    setReverse(): this;
    /**
     * Sets whether this sort should be reversed
     */
    setReverse(reverse: boolean): this;
    /**
     * Sets a fallback sorter for when two items are in the same position
     */
    addFallback<A extends any[]>(fallback?: SortFallback<T, R, A>, ...args: A): this;
    /**
     * Sets a custom sorter to override the default sort functionality
     *
     * Note: When a custom sorter is used, fallbacks registered in `setFallback` will not be.
     */
    setSorter<A extends any[]>(sorter?: SortFallback<T, R, A>, ...args: A): this;
    /**
     * Sets a custom entry mapper, which takes an item to sort and returns a string or number representing its "sort value",
     * which is what is *actually* compared.
     *
     * These values are cached by the sorter
     */
    setMapper<A extends any[]>(mapper: EntryMapper<T, R, A>, ...args: A): this;
}
export default function <T extends string | number>(): ISorter<T, T>;
export default function <T, R, A extends any[]>(mapper?: EntryMapper<T, R, A>, ...args: A): ISorter<T, R>;
export {};
