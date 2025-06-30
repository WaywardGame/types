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
export default class HashMap<K, V> extends Map<K, V> {
    private readonly hash;
    private readonly hashes;
    constructor(hash: (key: K) => string);
    has(key: K): boolean;
    get(key: K): V | undefined;
    /**
     * If the given key is present in this map, returns the value associated with it. If the given key is not present,
     * the `defaultGenerator` parameter is called and returned.
     * @param key The key.
     * @param defaultGenerator A function which will return the value for this key if it is not present.
     */
    getOrDefault<K2 extends K, V2>(key: K2, defaultGenerator: (key: K2) => V2): V2 extends never[] ? V extends any[] ? V : (V extends V2 ? V : V | V2) : (V extends V2 ? V : V | V2);
    /**
     * If the given key is present in this map, returns the value associated with it. If the given key is not present,
     * the `defaultGenerator` parameter is called and returned.
     * @param key The key.
     * @param defaultGenerator A function which will return the value for this key if it is not present.
     * @param assign Whether the generated default will be stored in the map.
     */
    getOrDefault<K2 extends K>(key: K2, defaultGenerator: (key: K2) => V, assign: true): V;
    set(key: K, value: V): this;
    delete(key: K): boolean;
    clear(): void;
    /**
     * Retains the entries from this map that match the given predicate function, any other entries will be deleted.
     * @param predicate A predicate that takes a key and a value, and returns a value which will be checked for truthiness.
     * @returns whether any entries remain.
     */
    retainWhere(predicate: (val: V, key: K) => any): boolean;
    /**
     * If this map contains the given key, checks whether the entry matches the given predicate.
     * If it does, it is kept. If not, it's deleted.
     * @param predicate A predicate that takes a key and a value, and returns a value which will be checked for truthiness.
     * @returns whether any entries remain in this map.
     */
    retainWhere(key: K, predicate: (val: V, key: K) => any): boolean;
    private deleteInternal;
}
