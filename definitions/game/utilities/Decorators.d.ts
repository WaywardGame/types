/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export declare function Bound<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
export declare function Final<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
/**
 * Prevents the decorated method from being called at a high speed. Example:
 * 1. Method is called.
 * 2. `ms` amount of time is waited. If the method is called again in this time, cancel.
 * 3. Allow the method to be called again.
 *
 * WARNING: This also binds the method to the host, a la `@Bound`. Do not use both decorators.
 */
/**
 * Prevents the decorated method from being called at a high speed. Example:
 * 1. Method is called.
 * 2. `ms` amount of time is waited. If the method is called again in this time, cancel.
 * 3. If the method was not called after `ms`, *actually* call the method.
 *
 * WARNING: This also binds the method to the host, a la `@Bound`. Do not use both decorators.
 */
export declare function Debounce(time: number, initial?: boolean, returnIfCancelled?: (...args: any[]) => any): (target: any, key: any, descriptor: any) => {
    configurable: boolean;
    get(): any;
    set(value: any): void;
};
