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
 * Map class that uses weakmap for keys that support it (objects, functions, symbols), and uses a normal map otherwise.
 * Not iterable.
 */
export default class WeakishMap<K, V> {
    #private;
    set(key: K, value: V): this;
    get(key: K): V | undefined;
    compute(key: K, computer: (key: K) => V): V;
    delete(key: K): boolean;
    has(key: K): boolean;
    clear(): this;
}
