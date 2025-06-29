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
declare namespace Time {
    function ago(date: Date | number): string;
    function total(ms: number): string;
}
export default Time;
