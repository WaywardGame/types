/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type DefaultMap from "@wayward/game/utilities/collection/map/DefaultMap";
import type RandomValueGenerator from "@wayward/game/utilities/random/RandomValueGenerator";
export type RecursivePartial<T> = {
    map: T extends Map<infer K, infer V> ? Map<K, RecursivePartial<V>> : never;
    defaultmap: T extends DefaultMap<infer K, infer V> ? DefaultMap<K, RecursivePartial<V>> : never;
    set: T extends Set<infer V> ? Set<RecursivePartial<V>> : never;
    object: {
        [P in keyof T]?: RecursivePartial<T[P]>;
    };
    other: T | undefined;
}[T extends Map<any, any> ? "map" : T extends DefaultMap<any, any> ? "defaultmap" : T extends Set<any> ? "set" : T extends RandomValueGenerator<any> ? "other" : T extends object ? "object" : "other"];
