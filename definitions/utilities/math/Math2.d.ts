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
export declare const π: number;
export declare const τ: number;
declare namespace Math2 {
    /**
     * Szudzik's function (signed)
     */
    function hash2(x: number, y: number): number;
    function parseLocalizedFloat(str: string): number;
    /**
     * Clamps the given number in the given range
     */
    function clamp(min: number, max: number, value: number): number;
    /**
     * Clamps the given number in the range 0-1
     */
    const clamp1: (value: number) => number;
    /**
     * Clamps the given number in the range 0-255
     */
    const clamp255: (value: number) => number;
    /**
     * Returns a number rounded to a certain number of decimal places.
     *
     * Example: `roundNumber(1.24999999, 2): 1.25`
     */
    function roundNumber(num: number, places: number): number;
    /**
     * Returns a number floored to a certain number of decimal places.
     *
     * Example: `floorNumber(1.24999999, 2): 1.24`
     */
    function floorNumber(num: number, places: number): number;
    /**
     * Returns a number ceiled to a certain number of decimal places.
     *
     * Example: `ceilNumber(1.24111111, 2): 1.25`
     */
    function ceilNumber(num: number, places: number): number;
    /**
     * Returns a number rounded to a multiple
     *
     * Example: `roundNumberToMultiple(97, 10): 100`
     */
    function roundNumberToMultiple(num: number, multiple: number): number;
    function listLerp(t: number, ...values: number[]): number;
    /**
     * Return a number between `from` and `to`, using the decimal `t`
     *
     * Example: `lerp(1, 2, .5): 1.5`
     *
     * When `t` is out of the range `0` to `1`, values outside `from` and `to` are returned instead
     *
     * Example: `lerp(1, 2, 1.5): 2.5`
     */
    function lerp(from: number, to: number, t: number): number;
    /**
     * Return a number between `from` and `to`, using the decimal `t`
     *
     * Example: `clerp(1, 2, .5): 1.5`
     *
     * When `t` is out of the range `0` to `1`, the result is clamped to `from` or `to`
     *
     * Example: `clerp(1, 2, 1.5): 2`
     */
    function clerp(from: number, to: number, t: number): number;
    /**
     * Given a number between `from` and `to`, returns a decimal how far it is, `t`.
     */
    function unlerp(from: number, to: number, lerped: number): number;
    /**
     * Given a number between `from` and `to`, returns a decimal how far it is, `t`, clamped between 0 and 1.
     */
    function unclerp(from: number, to: number, lerped: number): number;
    /**
     * Curve the value t exponentially (IE, starts gentle, ends steep)
     * @param from Rather than starting the curve at 0, start it here
     * @param to Rather than ending the curve at 1, end it here
     * @param t A decimal value from 0 to 1 representing how far along the curve's x axis to return the y position of
     * @param steepness A value representing how steep the curve should be. Defaults to 4 (this value does not behave the same as it does for `logarithmicLerp`)
     *
     * ### Also see:
     * - {@link logarithmicLerp} — Steep to gentle, logarithmically
     * - {@link curve2} — Steep to gentle, shaped like the circumference of a quarter circle
     * - {@link curve4} — Gentle to steep, shaped like the circumference of a quarter circle
     *
     * See this suite of curves [graphed on desmos](https://www.desmos.com/calculator/rqx0u7xjtm)
     */
    function exponentialLerp(from: number, to: number, t: number, steepness?: number): number;
    /**
     * Curve the value t exponentially (IE, starts steep, ends gentle)
     * @param from Rather than starting the curve at 0, start it here
     * @param to Rather than ending the curve at 1, end it here
     * @param t A decimal value from 0 to 1 representing how far along the curve's x axis to return the y position of
     * @param steepness A value representing how steep the curve should be. Defaults to 50 (this value does not behave the same as it does for `exponentialLerp`)
     *
     * ### Also see:
     * - {@link exponentialLerp} — Gentle to steep, exponentially
     * - {@link curve2} — Steep to gentle, shaped like the circumference of a quarter circle
     * - {@link curve4} — Gentle to steep, shaped like the circumference of a quarter circle
     *
     * See this suite of curves [graphed on desmos](https://www.desmos.com/calculator/rqx0u7xjtm)
     */
    function logarithmicLerp(from: number, to: number, t: number, steepness?: number): number;
    /**
     * Curve the value t (0-1) along the second quadrant of a rounded square/circle. (IE, starts steep, ends gentle)
     * @param from Rather than starting the curve at 0, start it here
     * @param to Rather than ending the curve at 1, end it here
     * @param t A decimal value from 0 to 1 representing how far along the curve's x axis to return the y position of
     * @param steepness How rounded the square/circle is.
     * - `1` — linear/a diamond
     * - `2` (default) — a circle
     * - Further reduces the curve's portion of the square
     *
     * ### Also see:
     * - {@link curve4} — Gentle to steep, shaped like the circumference of a quarter circle
     * - {@link exponentialLerp} — Gentle to steep, exponentially
     * - {@link logarithmicLerp} — Steep to gentle, logarithmically
     *
     * See this suite of curves [graphed on desmos](https://www.desmos.com/calculator/rqx0u7xjtm)
     */
    function curve2(from: number, to: number, t: number, steepness?: number): number;
    /**
     * Curve the value t (0-1) along the fourth quadrant of a rounded square/circle. (IE, starts gentle, ends steep)
     * @param from Rather than starting the curve at 0, start it here
     * @param to Rather than ending the curve at 1, end it here
     * @param t A decimal value from 0 to 1 representing how far along the curve's x axis to return the y position of
     * @param steepness How rounded the square/circle is.
     * - `1` — linear/a diamond
     * - `2` (default) — a circle
     * - Further reduces the curve's portion of the square
     *
     * ### Also see:
     * - {@link curve2} — Steep to gentle, shaped like the circumference of a quarter circle
     * - {@link exponentialLerp} — Gentle to steep, exponentially
     * - {@link logarithmicLerp} — Steep to gentle, logarithmically
     *
     * See this suite of curves [graphed on desmos](https://www.desmos.com/calculator/rqx0u7xjtm)
     */
    function curve4(from: number, to: number, t: number, steepness?: number): number;
    function mod(n1: number, n2: number): number;
    function average(...ns: number[]): number;
    function sum(...ns: number[]): number;
    function mult(...ns: number[]): number;
    /**
     * https://stackoverflow.com/a/5732390
     */
    function map(value: number, inputStart: number, inputEnd: number, outputStart: number, outputEnd: number): number;
    /**}
     * Takes an any number of `[weight, number]` tuples, and returns the "weighted average".
     * @param ns Any number of `[weight, number]` tuples.
     *
     * **For example**:
     * `weightedAverage([1, 0], [3, 1])` returns `0.75`.
     * - One part `0`, three parts `1`. That adds up to four parts, which means each part is worth `0.25`.
     * - Three parts `1` means `0.25 * 3`, one part `0` means `0 * 1`.
     * - `0.75 + 0` is `0.75`.
     */
    function weightedAverage(...ns: Array<[number, number]>): number;
    interface IWeightedAverageWithExclusionInputOptions {
        excludeIfLowering?: boolean;
        excludeIfRaising?: boolean;
    }
    type WeightedAverageWithExclusionInput = [weight: number, value: number, options?: IWeightedAverageWithExclusionInputOptions];
    interface WeightedAverageWithExclusionOutput {
        averageValue: number;
        totalValue: number;
        totalWeight: number;
        includedInputsCount: number;
        inputs: Array<{
            included: boolean;
        }>;
    }
    /**
     * Takes an any number of `[weight, number]` tuples, and returns the "weighted average".
     * @param ns Any number of `[weight, number]` tuples.
     *
     * **For example**:
     * `weightedAverage([1, 0], [3, 1])` returns `0.75`.
     * - One part `0`, three parts `1`. That adds up to four parts, which means each part is worth `0.25`.
     * - Three parts `1` means `0.25 * 3`, one part `0` means `0 * 1`.
     * - `0.75 + 0` is `0.75`.
     */
    function weightedAverageWithExclusion(...ns: WeightedAverageWithExclusionInput[]): number;
    function weightedAverageWithExclusion(returnDetail: true, ...ns: WeightedAverageWithExclusionInput[]): WeightedAverageWithExclusionOutput;
    function radians(degrees: number): number;
    function degrees(radians: number): number;
    function rotateTowards(direction: number, targetDirection: number, maxAmount: number): number;
    function bits<FLAG_TYPE extends number>(number: FLAG_TYPE): BitsSet<FLAG_TYPE>;
    class BitsSet<FLAG_TYPE extends number> extends Set<FLAG_TYPE> {
        everyIn(type?: FLAG_TYPE): boolean;
        someIn(type?: FLAG_TYPE): boolean;
        every(predicate: (type: FLAG_TYPE) => any): boolean;
        some(predicate: (type: FLAG_TYPE) => any): boolean;
    }
    function isInteger(nVal: number): boolean;
    function isByteSigned(num: number): boolean;
    function isByteUnsigned(num: number): boolean;
    function isShortSigned(num: number): boolean;
    function isShortUnsigned(num: number): boolean;
    function isIntegerSigned(num: number): boolean;
    function isIntegerUnsigned(num: number): boolean;
    function normalizeRadians(radians: number): number;
}
export default Math2;
