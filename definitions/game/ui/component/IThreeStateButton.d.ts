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
export declare enum ThreeStateButtonState {
    Null = 0,
    On = 1,
    Off = 2
}
export declare namespace ThreeStateButtonState {
    function boolean(state: ThreeStateButtonState): boolean | undefined;
    function get(bool: boolean | undefined | null): ThreeStateButtonState;
}
