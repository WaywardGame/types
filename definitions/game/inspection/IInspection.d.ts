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
export declare enum InspectType {
    Self = 0,
    Player = 1,
    NPC = 2,
    Creature = 3,
    Doodad = 4,
    TileEvent = 5,
    Ghost = 6,
    Item = 7,
    Items = 8,
    Corpse = 9,
    Corpses = 10,
    TileEventMinor = 11,
    Tile = 12
}
export declare const basicInspectionPriorities: Record<InspectType, number>;
