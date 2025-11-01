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
import type { RecursivePartial } from "@wayward/game/utilities/types/Recursive";
import Objects from "@wayward/utilities/object/Objects";
declare function Merge<T>(...objs: Array<RecursivePartial<T>>): T;
declare function Merge<T>(...objs: T[]): T;
declare function Merge<O extends any[]>(...objs: O): O[number];
declare namespace Merge {
    function value<T>(value?: T | Mergeable<T>): T | undefined;
}
export declare class Mergeable<T> implements Objects.ICloneable {
    readonly merge: (value: T | undefined) => T;
    constructor(merge: (value: T | undefined) => T);
    mask(): this & T;
    [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
}
declare namespace Merge {
    /**
     * Replaces the existing value with the given value.
     */
    function REPLACE<T>(value: T): Mergeable<T> & T;
    /**
     * Applies the given mapping function to the existing value, replacing it with the result.
     */
    function FUNCTION<T>(mappingFunction: (value?: T) => T): Mergeable<T> & T;
    function ADD(amt: number, maxValue?: number): Mergeable<number> & number;
    function SUBTRACT(amt: number, minValue?: number): Mergeable<number> & number;
    function MULTIPLY(amt: number): Mergeable<number> & number;
    /**
     * If the existing value is `0`, uses the given amt. If else, uses `existing * amt`
     */
    function MULTIPLY_NON_ZERO(amt: number): Mergeable<number> & number;
    function DIVIDE(amt: number): Mergeable<number> & number;
    function MIN(amt: number): Mergeable<number> & number;
    function MAX(amt: number): Mergeable<number> & number;
    function CONCAT(str: string): Mergeable<string> & string;
    /**
     * Note: "PUSH" is used by default for merging array values.
     */
    function PUSH<T>(...values: T[]): Mergeable<T[]> & T[];
    /**
     * Every value in the existing array is merged with the value in new array by index.
     *
     * Note: Tuples (created with `Tuple()`) use "MERGE_ARRAY" by default.
     */
    function MERGE_ARRAY<A extends any[]>(...values: A): Mergeable<A>;
    function diff<T, D = RecursivePartial<T>>(optionsA: T, optionsB: T): D;
    function has<T, P = RecursivePartial<T>>(source: T, search: P): boolean;
}
export default Merge;
export type MergeFunction = (a: unknown, b: unknown) => unknown;
export type DiffFunction = <T, M = RecursivePartial<T>>(optionsA: T, optionsB: T) => M;
export declare const SYMBOL_MERGE_OVER: unique symbol;
export declare const SYMBOL_MERGE_INTO: unique symbol;
export declare const SYMBOL_MERGE_DIFF: unique symbol;
export interface IMergeable<T> {
    [SYMBOL_MERGE_OVER]?(value: unknown, merge: MergeFunction): T;
    [SYMBOL_MERGE_INTO]?(value: unknown, merge: MergeFunction): unknown;
    [SYMBOL_MERGE_DIFF]?(b: T, diff: DiffFunction): unknown;
}
