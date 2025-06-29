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
export declare function Bound<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>;
export declare function Final<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>;
/**
 * @deprecated
 */
export declare function Debounce<TARGET>(time: (target: TARGET) => number, initial?: boolean, returnIfCancelled?: (...args: any[]) => any): (target: TARGET, key: any, descriptor: any) => void;
/**
 * @deprecated
 */
export declare function Debounce(time: number, initial?: boolean, returnIfCancelled?: (...args: any[]) => any): (target: any, key: any, descriptor: any) => void;
