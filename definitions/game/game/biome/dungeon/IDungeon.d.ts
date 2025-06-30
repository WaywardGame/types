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
export declare enum DungeonRoomType {
    /**
     * Main room.
     * Guaranteed to be traversable
     */
    MainRoomInMainPath = 0,
    /**
     * A main room that is not in the maximum spanning tree
     */
    MainRoomInSidePath = 1,
    /**
     * Side room that is connected to a hallway
     */
    SideRoom = 2
}
