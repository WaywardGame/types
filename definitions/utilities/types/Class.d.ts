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
    type AbstractNullaryClass<T> = abstract new (...args: any[]) => T;
    type NullaryClass<T> = new (...args: any[]) => T;
    type Class<T, A extends any[] = any[]> = new (...args: A) => T;
    type AbstractClass<T, A extends any[] = any[]> = abstract new (...args: A) => T;
    type AnyClass<T> = (Function & {
        prototype: T;
    });
    type InstanceOf<T extends Class<any> | AnyClass<any>> = T extends Class<any> ? InstanceType<T> : T extends {
        prototype: infer P;
    } ? P : never;
}
declare const _default: {};
export default _default;
