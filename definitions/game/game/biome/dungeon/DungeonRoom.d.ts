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
import type { DungeonRoomType } from "@wayward/game/game/biome/dungeon/IDungeon";
import { Vertex } from "@wayward/game/utilities/collection/graph/Vertex";
import type Rectangle from "@wayward/game/utilities/math/shapes/Rectangle";
/**
 * A room in a dungeon
 */
export declare class DungeonRoom {
    readonly id: number;
    type: DungeonRoomType;
    readonly rectangle: Rectangle;
    /**
     * Center of the room.
     * Vertex data points back to this object
     */
    readonly vertex: Vertex<DungeonRoom>;
    /**
     * List of rooms connected to this room in the MST.
     * It may be empty for rooms not in the MST.
     */
    readonly minimumSpanningTreeConnections: Set<DungeonRoom>;
    constructor(id: number, type: DungeonRoomType, rectangle: Rectangle);
}
