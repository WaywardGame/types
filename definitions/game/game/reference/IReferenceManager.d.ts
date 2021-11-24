/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export interface IReferenceable {
    /**
     * Do not use this property directly, instead use `game.references.getReference()
     */
    referenceId?: number;
}
export declare enum ReferenceType {
    Item = 0,
    Creature = 1,
    Doodad = 2,
    NPC = 3,
    Player = 4,
    TileEvent = 5,
    Island = 6,
    Corpse = 7,
    Skill = 8,
    Milestone = 9,
    Recipe = 10,
    ItemType = 11,
    Dismantle = 12,
    Stat = 13
}
