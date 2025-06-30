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
export declare function isIterable(obj: any): obj is Iterable<any>;
export declare function shortestIterable<I extends Iterable<any>, IN extends Array<Iterable<any>>>(iterable: I, ...iterables: IN): I | IN[number];
export declare function longestIterable<I extends Iterable<any>, IN extends Array<Iterable<any>>>(iterable: I, ...iterables: IN): I | IN[number];
export declare function length(iterable: Iterable<any>): number;
export declare namespace Guard {
    function instanceOf<T>(cls: Class<T>): (val: unknown) => val is T;
}
