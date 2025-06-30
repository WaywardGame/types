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
    interface Map<K, V> {
        compute<ARGS extends any[]>(key: K, computer: (key: K, ...args: any[]) => V, ...args: ARGS): V;
        getKey(value: V): K | undefined;
        findKey(predicate: (value: V) => unknown): K | undefined;
    }
    interface WeakMap<K, V> {
        compute<ARGS extends any[]>(key: K, computer: (key: K, ...args: any[]) => V, ...args: ARGS): V;
    }
}
export default function (): void;
