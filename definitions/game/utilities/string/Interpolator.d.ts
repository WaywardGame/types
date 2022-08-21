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
import type { ISerializedIcon } from "game/inspection/InfoProvider";
import type { Reference } from "game/reference/ReferenceManager";
import type { Random } from "utilities/random/Random";
export interface ISegmentApi extends Readonly<IInterpolationOptions> {
    matchedEnds: Ends;
    random: Random;
    interpolate(str: string, ...args: any[]): IStringSection[];
    interpolateString(str: string, ...args: any[]): string;
    with(options: IInterpolationOptions): ISegmentApi;
    formatValue(value: unknown): string | Iterable<IStringSection>;
}
export interface IInterpolationOptions {
    formatNumbers?: boolean;
    formatDates?: boolean;
}
export declare type Ends = [start: string, end?: string, endAtStringEnd?: true];
export interface ISegment {
    ends?: Ends[];
    trimTrailingWhitespace?: true;
    match?: RegExp;
    handle(match: RegExpMatchArray, segment: string, api: ISegmentApi, ...args: any[]): string | IStringSection | Iterable<IStringSection>;
}
export interface IStringSection {
    content: string;
    classes?: Set<string>;
    icon?: ISerializedIcon;
    forceInclude?: true;
}
export interface IReferenceSection extends IStringSection {
    reference: Reference;
}
declare class Interpolator {
    private options;
    private readonly savedOptions;
    get formatNumbers(): boolean | undefined;
    get formatDates(): boolean | undefined;
    private readonly _segments;
    get segments(): ISegment[];
    random: Random<{
        get: () => number;
    }>;
    matchedEnds?: Ends;
    constructor(...segments: ISegment[]);
    setRandom(random: Random): this;
    interpolate(str: string, ...args: any[]): IStringSection[];
    interpolateString(str: string, ...args: any[]): string;
    with(options: IInterpolationOptions): this;
    formatValue(value: unknown): string | Iterable<IStringSection>;
    private handleChar;
    static combineLikeSections(sections: IStringSection[], ignoreKeys?: string[]): void;
}
declare module Interpolator {
    function getArgument(keyMap: string, ...args: any[]): {
        hasValue: false;
        value?: undefined;
    } | {
        hasValue: true;
        value: any;
    };
    /**
     * Returns the index of the first occurrence of character in the provided string which is not inside a segment `{}`.
     * Returns `-1` if there is no occurrence.
     */
    function getIndexOfTopLevel(character: string, segment: string, start?: number): number;
}
export default Interpolator;
/**
 * Prints values from the arguments passed to the interpolator. If the keys don't map to a provided argument,
 * an empty string is returned.
 *
 * - `"{0}" => args[0]`
 * - `"{test}" => args[0]["test"]`
 * - `"{3.test.4.wow}" => args[3]["test"][4]["wow"]`
 */
export declare const argumentSegment: ISegment;
export declare type InterpolationConditionalSegmentOperator = InterpolationConditionalSegmentOperatorEquivalence | InterpolationConditionalSegmentOperatorNumeric;
export declare type InterpolationConditionalSegmentOperatorEquivalence = "=" | "!=";
export declare type InterpolationConditionalSegmentOperatorNumeric = "<" | ">" | "<=" | ">=";
export declare const conditionalSegment: ISegment;
export declare const falsyCoalescingSegment: ISegment;
export declare const classSegment: ISegment;
export declare const basicInterpolator: Interpolator;
export declare function interpolateSectioned(str: string, ...args: any[]): IStringSection[];
export declare function interpolate(str: string, ...args: any[]): string;
