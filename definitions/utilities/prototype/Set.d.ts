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
declare global {
    interface Set<T> {
        /**
         * Returns a new set containing all items present in this set and all other given sets.
         */
        intersecting(...sets: Array<Set<T>>): Set<T>;
        /**
         * An equivalent to array.some
         */
        some(predicate: (value: T) => any): boolean;
        /**
         * An equivalent to array.every
         */
        every(predicate: (value: T) => any): boolean;
    }
}
export default function (): void;
