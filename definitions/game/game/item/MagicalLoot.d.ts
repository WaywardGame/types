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
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
export declare enum MagicalLootType {
    All = 0,
    VeryLow = 1,
    Low = 2,
    Medium = 3,
    High = 4,
    VeryHigh = 5
}
export declare const magicalLootGroup: Array<Array<[number, MagicalPropertyType | undefined]>>;
export default magicalLootGroup;
