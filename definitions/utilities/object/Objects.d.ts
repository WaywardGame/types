/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
declare module Objects {
    function keys<K extends string | number | symbol>(o: {
        [key in K]?: any;
    }): K[];
    function keys<O>(o: O): Array<keyof O>;
    function values<O>(o: O): Array<O[keyof O]>;
    function entries<O>(o: O): Array<[keyof O, O[keyof O]]>;
    function fromEntries<K extends string | number | symbol, V>(entriesIterable: Iterable<[K, V] | readonly [K, V]>): { [key in K]: V; };
    function windowKeysToObject(windowKeys: string[]): any;
    function windowKeysToParentObject(windowKeys: string[]): any;
    function deepClone<T>(obj: T): T;
    function addProperty(property: string, value: any): (object: any) => any;
    function followDirections<T>(target: any, directions: string[]): T | undefined;
    function stringify(object: any, pretty?: boolean, noDepth?: boolean): string;
    function mutable<T>(object: T): Mutable<T>;
}
export default Objects;
export interface IPrivateStore<T> {
    set<K extends keyof T>(key: K, value: T[K]): void;
    get<K extends keyof T>(key: K): T[K];
}
export declare function initializePrivateStore(target: any, key: string | number | symbol, initializer?: Array<[symbol, any]>): void;
