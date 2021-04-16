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
export default undefined;
declare global {
    type LiterallyJustTheSameThing<T> = {
        [K in keyof T]: T[K];
    };
    type Mutable<T> = {
        -readonly [P in keyof T]: T[P];
    };
    type PropertyOf<T, K extends string | number | symbol> = T extends {
        [key in K]: infer V;
    } ? V : never;
    type Falsy = undefined | null | 0 | "" | false;
    type Nullish = undefined | null;
    type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
}
