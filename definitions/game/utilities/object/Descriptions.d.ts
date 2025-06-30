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
declare namespace Descriptions {
    /**
     * Returns an array that iterates over the entries of a Descriptions object, in key-value tuples.
     */
    function array<E extends number, T>(obj?: Descriptions<E, T>): Array<[E, T]>;
}
export default Descriptions;
