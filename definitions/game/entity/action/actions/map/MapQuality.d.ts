/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export declare enum MapQuality {
    VeryLow = 0,
    Low = 1,
    Average = 2,
    High = 3,
    VeryHigh = 4
}
export declare module MapQuality {
    function get(number: number): MapQuality;
}