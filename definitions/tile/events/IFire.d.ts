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
export declare enum FireStage {
    Embers = 0,
    AlmostExtinguished = 1,
    Struggling = 2,
    Thriving = 3,
    Healthy = 4,
    Raging = 5
}
export declare module FireStage {
    function get(decay: number): FireStage;
    function getTemperature(stage: FireStage): number;
}
