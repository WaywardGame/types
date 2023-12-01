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
import type { ISorter } from "@wayward/utilities/collection/sort/Sorter";
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
    }
}
export default function (): void;
