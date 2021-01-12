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
    Corpse = 7
}
