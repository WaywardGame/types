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
export type StringableObject = object & {
    toString(): string;
};
export declare function weakRefify<T>(value: T): T extends object ? WeakRef<T> : T;
export declare function deWeakRefify<T>(value: T | (T extends WeakKey ? WeakRef<T> : never)): T | (T extends WeakKey ? undefined : never);
export type UnWeakRefified<ARGS extends any[]> = {
    [INDEX in keyof ARGS]: ARGS[INDEX] | (ARGS[INDEX] extends WeakKey ? undefined : never);
};
declare namespace Objects {
    function keys<K extends string | number | symbol>(o: {
        [key in K]?: any;
    }): K[];
    function keys<O extends object>(o: O): Array<keyof O>;
    function values<O extends object>(o: O): Array<O[keyof O]>;
    function entries<O extends object>(o: O): Array<[keyof O, O[keyof O]]>;
    function fromEntries<K extends string | number | symbol, V>(entriesIterable: Iterable<[K, V] | readonly [K, V]>): Record<K, V>;
    function windowKeysToParentObject(windowKeys: string[]): unknown;
    function anyAreObjects(things: any[]): boolean;
    function deepClone<T>(obj: T): T;
    const SYMBOL_CLONE: unique symbol;
    interface ICloneable {
        [SYMBOL_CLONE](clone: typeof deepClone): this;
    }
    namespace ICloneable {
        function is(value: unknown): value is ICloneable;
    }
    function addProperty(property: string, value: any): (object: any) => any;
    function followDirections<T>(target: any, directions: string[]): {
        hasValue: true;
        value: T;
    } | {
        hasValue: false;
        value?: undefined;
    };
    function getDirections(target: any, within: any): Generator<string[]>;
    function stringify(object: any, pretty?: boolean, noDepth?: boolean, maxIterations?: number): string;
    function mutable<T>(object: T): Mutable<T>;
    function removeUndefinedProperties<T extends object>(object: T): T;
    function filterProperties<T extends object>(object: T, filter: (key: keyof T, value: T[keyof T]) => any): T;
    function bind<T>(obj: T): T;
}
export default Objects;
export interface IPrivateStore<T> {
    set<K extends keyof T>(key: K, value: T[K]): void;
    get<K extends keyof T>(key: K): T[K];
}
export declare function initializePrivateStore(target: any, key: string | number | symbol, initializer?: Array<[symbol, any]>): void;
