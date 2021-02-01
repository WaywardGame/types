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
export declare enum InfoDisplayLevel {
    NonVerbose = -2,
    NonExtra = -1,
    Always = 0,
    Extra = 1,
    Verbose = 2
}
export declare module InfoDisplayLevel {
    function canDisplay(level: InfoDisplayLevel, ...toDisplay: InfoDisplayLevel[]): boolean;
}
