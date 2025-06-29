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
export default class HashSet<T> {
    private readonly hash;
    private readonly internalMap;
    get size(): number;
    constructor(hash: (value: T) => string);
    add(...values: T[]): this;
    addAll(...valuesIterables: Array<Iterable<T> | Falsy>): this;
    /**
     * Adds the given values to the set, first removing any values that share the same hashes.
     */
    replace(...values: T[]): this;
    /**
     * Adds the given values to the set, first removing any values that share the same hashes.
     */
    replaceAll(...valuesIterables: Array<Iterable<T> | Falsy>): this;
    remove(...values: T[]): boolean;
    removeAll(...valuesIterables: Array<Iterable<T> | Falsy>): boolean;
    toggle(has: boolean, ...values: T[]): this;
    toggleAll(has: boolean, ...valuesIterables: Array<Iterable<T> | Falsy>): this;
    has(...values: T[]): boolean;
    hasAll(...valuesIterables: Array<Iterable<T> | Falsy>): boolean;
    clear(): this;
    keys(): IteratorObject<string>;
    values(): IteratorObject<T>;
    entries(): IteratorObject<[string, T]>;
    forEach(consumer: (value: T, key: string) => any): void;
    [Symbol.iterator](): IteratorObject<T>;
    toArray(): T[];
    retainNot(value: T): boolean;
    get(hash: string): T | undefined;
    intersects(set: HashSet<T>): boolean;
}
