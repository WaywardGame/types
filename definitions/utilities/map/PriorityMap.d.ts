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
/**
 * Used for ordering a list of items by "priority". Higher priorities come before lower priorities.
 */
export declare class PriorityMap<T> {
    static streamAll<T extends Iterable<any>>(...lists: Array<PriorityMap<T>>): import("@wayward/goodstream/Stream").default<T>;
    private readonly priorities;
    private readonly map;
    get size(): number;
    getOrDefault(priority: number): T | undefined;
    getOrDefault(priority: number, orDefault: (priority: number) => T, assign?: boolean): T;
    getOrDefault(priority: number, orDefault?: (priority: number) => T, assign?: boolean): T | undefined;
    delete(priority: number): boolean;
    /**
     * Retains the entries from this set that match the given predicate function, any other entries will be deleted.
     * @param predicate A predicate that takes a key and a value, and returns a value which will be checked for truthiness.
     * @returns whether any entries remain.
     */
    retainWhere(predicate: (val: T, key: number) => any): boolean;
    /**
     * If this map contains the given key, checks whether the entry matches the given predicate.
     * If it does, it is kept. If not, it's deleted.
     * @param predicate A predicate that takes a key and a value, and returns a value which will be checked for truthiness.
     * @returns whether any entries remain in this map.
     */
    retainWhere(key: number, predicate: (val: T, key: number) => any): boolean;
    /**
     * Returns an iterator of the items in this list.
     */
    stream(direction?: PriorityListStreamDirection): import("@wayward/goodstream/Stream").default<T>;
    getInternalMap(): {
        [key: number]: T;
    };
}
export declare enum PriorityListStreamDirection {
    HighestToLowest = -1,
    LowestToHighest = 1
}
