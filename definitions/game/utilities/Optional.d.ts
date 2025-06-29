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
export type Optional<T> = T | undefined;
interface ITypeofTypes {
    undefined: undefined;
    string: string;
    number: number;
    bigint: bigint;
    boolean: boolean;
    symbol: symbol;
    function: AnyFunction;
    object: object;
}
export declare function asType<T, TYPENAME extends keyof ITypeofTypes>(value: T, type: TYPENAME): Extract<T, ITypeofTypes[TYPENAME]> | undefined;
export declare function notType<T, TYPENAME extends keyof ITypeofTypes>(value: T, type: TYPENAME): Exclude<T, ITypeofTypes[TYPENAME]> | undefined;
export declare function asInstance<T, CLS extends abstract new (...args: any) => any>(value: T, cls: CLS): Extract<T, InstanceType<CLS>> | undefined;
export declare function notInstance<T, CLS extends abstract new (...args: any) => any>(value: T, cls: CLS): Exclude<T, InstanceType<CLS>> | undefined;
export {};
