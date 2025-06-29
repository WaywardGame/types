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
/**
 * Strong keys are stored in a Map.
 * Weak keys are stored in a WeakMap.
 * Based on https://github.com/tc39/proposal-weakrefs?tab=readme-ov-file#iterable-weakmaps
 */
export declare class IterableWeakMap<K, V> implements Iterable<[K, V]> {
    #private;
    constructor(iterable?: Iterable<[K, V]>);
    /**
     * This is more of an estimate since we might be waiting for some garbage collection to happen
     */
    get size(): number;
    /**
     * This will cause keys that are cleaned up via garbage collection to be logged
     */
    enableLogging(): IterableWeakMap<K, V>;
    get(key: K): V | undefined;
    set(key: K, value: V): this;
    delete(key: K): boolean;
    [Symbol.iterator](): Generator<[K, V]>;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    private isWeakKey;
}
