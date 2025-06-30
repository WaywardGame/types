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
import SortingFunction from "@wayward/utilities/prototype/util/SortingFunction";
declare global {
    interface Element {
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
        sortChildren(...sorters: SortingFunction.List<Element>): void;
    }
}
export default function (): void;
