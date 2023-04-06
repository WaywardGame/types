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
export interface IRange {
    minimum: number;
    maximum: number;
}
export declare module IRange {
    const ZERO: Readonly<IRange>;
    const ONE: Readonly<IRange>;
    function lerp(t: number, range: IRange): number;
    function unlerp(lerped: number, range: IRange): number;
    function add(...rangesOrNumbers: Array<IRange | number>): IRange;
    function flatten(rangeOrNumber: IRange | number): IRange | number;
    function flatten(rangeOrNumber: IRange | number | undefined): IRange | number | undefined;
    function multiply(range: IRange, by: number, into?: IRange): IRange;
    function ceil(range: IRange, into?: IRange): IRange;
    function average(range: IRange): number;
}
