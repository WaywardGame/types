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
    type ImmutablePrimitive = undefined | null | boolean | string | number | Function;
    type Immutable<T> = T extends ImmutablePrimitive ? T : T extends Array<infer U> ? ImmutableArray<U> : T extends Map<infer K, infer V> ? ImmutableMap<K, V> : T extends Set<infer M> ? ImmutableSet<M> : ImmutableObject<T>;
    type ImmutableArray<T> = ReadonlyArray<Immutable<T>>;
    type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>;
    type ImmutableSet<T> = ReadonlySet<Immutable<T>>;
    type ImmutableObject<T> = {
        readonly [K in keyof T]: Immutable<T[K]>;
    };
}
declare const _default: {};
export default _default;
