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
export interface IDungeonBiomeOptions {
    /**
     * Number of rooms to spawn at the start of the algorithm
     */
    numberOfRooms: number;
    /**
     * Minimum number of main rooms
     * Main rooms are guaranteed to be traversable to each other
     */
    minimumNumberOfMainRooms: number;
    /**
     * Size of rooms during generation
     */
    roomMinWidth: number;
    roomMinHeight: number;
    roomMaxWidth: number;
    roomMaxHeight: number;
    /**
     * Size that designates what is considered a main room
     */
    mainRoomMinWidth: number;
    mainRoomMinHeight: number;
    /**
     * Spawn all the rooms within this ellipse (from the center of the map)
     * This is before separation
     */
    ellipseWidth: number;
    ellipseHeight: number;
    /**
     * Number of times try separating out the rooms
     */
    maxSeperationIterations: number;
    /**
     * Percent of non-optimal edges to add back.
     * This makes the dungeon not perfectly linear
     */
    randomEdgesAddedBackPercent: number;
    /**
     * Extra width of the hall.
     */
    hallwayExtraWidth: number;
}
export declare const defaultDungeonBiomeOptions: IDungeonBiomeOptions;
