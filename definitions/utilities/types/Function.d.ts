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
    type AnyFunction<R = any> = (...args: any[]) => R;
    type NullaryFunction<O = any> = () => O;
    type UnaryFunction<I = any, O = any> = (input: I) => O;
    type SortingFunction<T> = (a: T, b: T) => number;
    type GetterOfOr<T> = T | (() => T);
    type Supplier<R, A extends any[] = []> = (...args: A) => R;
    type SupplierOr<R, A extends any[] = []> = R | ((...args: A) => R);
    /**
     * Gets the arguments tuple of a function.
     */
    type ArgumentsOf<T> = Extract<Parameters<Extract<T, AnyFunction>>, any[]>;
    type ReturnTypeOrT<T> = T extends (...args: any[]) => infer R ? R : T;
    /**
     * Changes the return type of the given function, or creates a new function from the given arguments and return type.
     */
    type MaskReturn<F extends any[] | AnyFunction, R> = F extends (...args: infer A) => any ? (...args: A) => R : (...args: Extract<F, any[]>) => R;
    type FunctionOrNoParams<H extends AnyFunction> = H | (() => ReturnType<H>);
    type FunctionAnyOtherParams<H extends AnyFunction> = (...args: [...Parameters<H>, ...any[]]) => ReturnType<H>;
}
declare const _default: {};
export default _default;
