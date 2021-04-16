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
    Tile = 12,
    Skill = 13,
    Milestone = 14,
    Recipe = 15,
    ItemType = 16,
    Dismantle = 17,
    Stat = 18
}
/**
 * A convenience object for the priority of an inspection compared to other inspections. Useful to make an inspection priority
 * relative to a vanilla inspection type.
 */
export declare const basicInspectionPriorities: Readonly<Record<InspectType, number>>;
export declare enum InfoIcon {
    Magical = 0,
    Protected = 1
}
