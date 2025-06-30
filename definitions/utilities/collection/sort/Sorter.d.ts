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
export type SortEntryMapper<T = any, A extends any[] = any[]> = (v: T, ...args: A) => string | number;
export type SortFunction<T = any, A extends any[] = any[]> = (a: T, b: T, ...args: A) => number;
export interface ISorter<T> {
    (a: T, b: T): number;
    /**
     * Sets this entire sort to be reversed.
     */
    setReverse(reversed?: boolean): this;
    /**
     * Sets a fallback entry mapper for sorting for when two items are in the same position
     */
    addFallback<A extends any[]>(fallback: SortEntryMapper<T, A>, ...args: A): this;
    /**
     * Sets a reversed fallback entry mapper for sorting for when two items are in the same position
     */
    addFallback<A extends any[]>(reverse: true, fallback: SortEntryMapper<T, A>, ...args: A): this;
    /**
     * Sets a fallback sorting function for when two items are in the same position
     */
    addSortFunctionFallback<A extends any[]>(fallback: (a: T, b: T, ...args: A) => number, ...args: A): this;
    /**
     * Sets a reversed fallback sorting function for when two items are in the same position
     */
    addSortFunctionFallback<A extends any[]>(reverse: true, fallback: (a: T, b: T, ...args: A) => number, ...args: A): this;
    /**
     * Returns the sort index of a new value into a sorted array
     */
    getIndex(sortedArray: T[], value: T): number;
}
export default function <T, A extends any[]>(reverse: boolean, mapper?: SortEntryMapper<T, A>, ...args: A): ISorter<T>;
export default function <T, A extends any[]>(mapper?: SortEntryMapper<T, A>, ...args: A): ISorter<T>;
