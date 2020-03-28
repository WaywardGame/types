/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
export default class CustomSet<T> {
    private readonly hash;
    private readonly internalMap;
    get size(): number;
    constructor(hash: (value: T) => string);
    add(...values: T[]): this;
    addAll(...valuesIterables: Array<Iterable<T>>): this;
    /**
     * Adds the given values to the set, first removing any values that share the same hashes.
     */
    replace(...values: T[]): this;
    /**
     * Adds the given values to the set, first removing any values that share the same hashes.
     */
    replaceAll(...valuesIterables: Array<Iterable<T>>): this;
    remove(...values: T[]): boolean;
    removeAll(...valuesIterables: Array<Iterable<T>>): boolean;
    toggle(has: boolean, ...values: T[]): this;
    toggleAll(has: boolean, ...valuesIterables: Array<Iterable<T>>): this;
    has(...values: T[]): boolean;
    hasAll(...valuesIterables: Array<Iterable<T>>): boolean;
    clear(): this;
    keys(): IterableIterator<string>;
    values(): IterableIterator<T>;
    entries(): IterableIterator<[string, T]>;
    keyStream(): import("@wayward/goodstream/Stream").default<string>;
    valueStream(): import("@wayward/goodstream/Stream").default<T>;
    entryStream(): T extends T ? import("@wayward/goodstream/Stream").default<[string, T]> : never;
    forEach(consumer: (value: T, key: string) => any): void;
    [Symbol.iterator](): IterableIterator<T>;
}
