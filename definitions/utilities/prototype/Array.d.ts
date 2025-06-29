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
import type { ISorter } from "@wayward/utilities/collection/sort/Sorter";
import SortingFunction from "@wayward/utilities/prototype/util/SortingFunction";
declare global {
    interface Array<T> {
        /**
         * Toggles the given value in this array.
         * @param arr The array to toggle the value in.
         * @param value The value to toggle in the array.
         * @param includes Whether the value should be present in the array.
         * - `true` — include in the array
         * - `false` — remove from the array
         * - `undefined` — toggle whether it's in the array.
         *   (If it currently is, remove it. If it's not, add it.)
         */
        toggle(value: T, includes?: boolean): void;
        awaitAll(): Promise<Array<Awaited<T>>>;
        layerSort(sortInitializer: (sorter: ISorter<T>) => any): T[];
        groupBy<GROUP>(grouper: (value: T, index: number, array: T[]) => GROUP): Array<[GROUP, T[]]>;
        groupBy<GROUP, R>(grouper: (value: T, index: number, array: T[]) => GROUP, mapper: (values: T[], group: GROUP) => R): Array<[GROUP, R]>;
        /**
         * Alias of `.toSet().toArray()`
         */
        distinct(mapper?: (value: T) => any): T[];
        /**
         * Alias of `.toMap(value => [mapper(value), value]).values().toArray()`
         */
        distinct(mapper?: (value: T) => any): T[];
        /**
         * Sorts an array in place.
         * This method mutates the array and returns a reference to the same array.
         *
         * @param sorters You may provide any number of sorter functions.
         * If no functions are provided, the elements are sorted in ascending, ASCII character order.
         *
         * Each sorter function is used in sequence until a difference is found between a set of two items.
         *
         * When a sorter function accepts 2 parameters, it is assumed to be a normal sorter function which will compare
         * the given set of two items. It is expected to return a negative value if the first argument is less than
         * the second argument, zero if they're equal, and a positive value otherwise.
         * ```ts
         * [11,2,22,1].sort((a, b) => a - b)
         * ```
         *
         * When a sorter function accepts 1 parameter, it is assumed to be a "mapper" function.
         * The mapper will be called for each of the two items to compare, and then the produced numbers of each will be compared.
         */
        sort(...sorters: SortingFunction.List<T>): this;
        /**
         * Gets the index that the given item would occupy in this array, assuming this array is sorted by the given list of sort functions.
         * @param value The item to get the index of.
         * @param sorters See {@link sort} for more information
         */
        getSortedIndex(value: T, ...sorters: SortingFunction.List<T>): number;
        /**
         * Inserts a single item in this array, at the sorted position as is calculated by the given list of sort functions.
         * @param value The item to insert.
         * @param sorters See {@link sort} for more information
         * @returns The new array length
         */
        insertSorted(value: T, ...sorters: SortingFunction.List<T>): number;
        indexOfOrElse(value: T): number | undefined;
        findIndexOrElse(predicate: (value: T) => any): number | undefined;
    }
}
export default function (): void;
