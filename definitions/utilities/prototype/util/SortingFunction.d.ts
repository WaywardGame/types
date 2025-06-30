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
declare namespace SortingFunction {
    type List<T = any> = Array<((a: T, b: T) => number) | undefined>;
    interface ISortingFunction<T = any> {
        sort(a: T, b: T): number;
        cleanup(): void;
    }
    function get<T>(...sorters: List<T>): ISortingFunction<T>;
}
export default SortingFunction;
