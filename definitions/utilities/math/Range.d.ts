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
/**
 * Returns a range with `0` for minimum (inclusive).
 * @param maximum Exclusive
 */
export default function range(maximum: number): IRange;
/**
 * @param minimum Inclusive
 * @param maximum Exclusive
 */
export default function range(minimum: number, maximum: number): IRange;
export interface IRange<T = number> {
    minimum: T;
    maximum: T;
}
export declare namespace IRange {
    const ZERO: Readonly<IRange>;
    const ONE: Readonly<IRange>;
    function is(value: unknown): value is IRange;
    function lerp(t: number, range: IRange): number;
    function unlerp(lerped: number, range: IRange): number;
    function add(...rangesOrNumbers: Array<IRange | number>): IRange;
    function flatten(rangeOrNumber: IRange | number): IRange | number;
    function flatten(rangeOrNumber: IRange | number | undefined): IRange | number | undefined;
    function multiply(range: IRange, by: number, into?: IRange<number>): IRange;
    function ceil(range: IRange, into?: IRange<number>): IRange;
    function floor(range: IRange, into?: IRange<number>): IRange;
    function average(range: IRange): number;
    namespace Optional {
        function simplify(value: number | IRange): number | IRange;
        function add(a: number | IRange, b: number | IRange): number | IRange;
        function subtract(a: number | IRange, b: number | IRange): number | IRange;
        function mult(a: number | IRange, b: number | IRange): number | IRange;
    }
}
export interface IRangeRange {
    minimum: IRange;
    maximum: IRange;
}
export declare namespace IRangeRange {
    function lerp(t: number, range: IRangeRange): IRange;
}
export declare function rangeRange(minimum: IRange, maximum: IRange): IRangeRange;
