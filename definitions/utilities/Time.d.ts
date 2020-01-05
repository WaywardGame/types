/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
export declare function seconds(a: number): number;
export declare function minutes(a: number): number;
export declare function hours(a: number): number;
export declare function days(a: number): number;
export declare function weeks(a: number): number;
export declare function months(a: number): number;
export declare function years(a: number): number;
export declare function decades(a: number): number;
export declare function centuries(a: number): number;
export declare function never(): number;
declare module Time {
    function ago(date: Date | number): string;
    function total(time: number): string;
}
export default Time;
