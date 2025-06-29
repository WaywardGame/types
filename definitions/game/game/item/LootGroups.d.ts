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
import { ItemType } from "@wayward/game/game/item/IItem";
export declare enum LootGroupType {
    ChestHigh = 0,
    ChestLow = 1,
    ChestMedium = 2,
    FireElemental = 3,
    High = 4,
    Highest = 5,
    Low = 6,
    SeaTreasure = 7,
    SeedsSpores = 8,
    VeryHigh = 9
}
export declare const lootGroup: (ItemType[] | undefined)[];
export default lootGroup;
