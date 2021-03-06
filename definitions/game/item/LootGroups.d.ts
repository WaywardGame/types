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
import { ItemType } from "game/item/IItem";
export declare enum LootGroupType {
    ChestHigh = 0,
    ChestLow = 1,
    ChestMedium = 2,
    FireElemental = 3,
    High = 4,
    Highest = 5,
    Low = 6,
    SeaTreasure = 7,
    VeryHigh = 8
}
export declare const lootGroup: (ItemType[] | undefined)[];
export default lootGroup;
