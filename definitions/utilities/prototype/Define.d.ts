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
type Implementation<P, K extends keyof P> = (this: P, ...args: P[K] extends (...args: infer A) => any ? A : []) => P[K] extends (...args: any[]) => infer R ? R : never;
declare function Define<P, K extends string & keyof P>(proto: P, key: K, implementation: Implementation<P, K>): void;
declare namespace Define {
    export function set<P, K extends string & keyof P>(proto: P, key: K, value: P[K]): P[K];
    export function set<V>(proto: any, key: PropertyKey, value: V): V;
    export function all<P, K extends string & keyof P>(protos: P[], key: K, implementation: Implementation<P, K>): void;
    interface IMagicImplementationReadonly<O, K extends string & keyof O> {
        get(this: O): O[K];
    }
    interface IMagicImplementation<O, K extends string & keyof O> extends IMagicImplementationReadonly<O, K> {
        set(this: O, value: O[K]): void;
    }
    export function magic<O, K extends string & keyof O>(obj: O, key: K, implementation: IMagicImplementationReadonly<O, K> | IMagicImplementation<O, K>): void;
    export {};
}
export default Define;
