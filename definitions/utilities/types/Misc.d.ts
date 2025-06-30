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
    type Mutable<T> = {
        -readonly [P in keyof T]: T[P];
    };
    type PropertyOf<T, K extends string | number | symbol> = T extends Record<K, infer V> ? V : never;
    type Falsy = undefined | null | 0 | "" | false;
    type Nullish = undefined | null;
    type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
    type DecimalDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    type PromiseOr<T> = T | Promise<T>;
}
declare const _default: {};
export default _default;
