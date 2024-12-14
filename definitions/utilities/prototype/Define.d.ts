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
type Implementation<P, K extends keyof P> = (this: P, ...args: P[K] extends (...args: infer A) => any ? A : []) => P[K] extends (...args: any[]) => infer R ? R : never;
declare function Define<P, K extends string & keyof P>(proto: P, key: K, implementation: Implementation<P, K>): void;
declare namespace Define {
    export function all<P, K extends string & keyof P>(protos: P[], key: K, implementation: Implementation<P, K>): void;
    interface IMagicImplementation<O, K extends string & keyof O> {
        get(this: O): O[K];
        set(this: O, value: O[K]): void;
    }
    export function magic<O, K extends string & keyof O>(obj: O, key: K, implementation: IMagicImplementation<O, K>): void;
    export {};
}
export default Define;
