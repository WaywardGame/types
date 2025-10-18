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
export declare enum InspectType {
    Self = 0,
    Player = 1,
    NPC = 2,
    Creature = 3,
    Doodad = 4,
    TileEvent = 5,
    Ghost = 6,
    EquipSlot = 7,
    Item = 8,
    Recipe = 9,
    Dismantle = 10,
    ItemType = 11,
    Action = 12,
    Items = 13,
    Corpse = 14,
    Corpses = 15,
    TileEventMinor = 16,
    Tile = 17,
    Skill = 18,
    Milestone = 19,
    Stat = 20,
    Island = 21,
    Deity = 22,
    Quality = 23,
    Magic = 24,
    MagicCurse = 25,
    Status = 26,
    Damage = 27
}
/**
 * A convenience object for the priority of an inspection compared to other inspections. Useful to make an inspection priority
 * relative to a vanilla inspection type.
 */
export declare const basicInspectionPriorities: Readonly<Record<InspectType, number>>;
export declare enum InfoIcon {
    Magical = 0,
    Protected = 1,
    PinSelf = 2,
    PinFriend = 3,
    PinMap = 4,
    PinLighthouse = 5,
    Curse = 6
}
