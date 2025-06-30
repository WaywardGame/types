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
import type { DungeonRoom } from "@wayward/game/game/biome/dungeon/DungeonRoom";
import type Edge from "@wayward/game/utilities/math/shapes/Edge";
export declare enum DungeonHallwayOrientation {
    Horizontal = 0,
    Vertical = 1
}
export declare enum DungeonHallwayType {
    Straight = 0,
    LShape = 1
}
export interface IDungeonHallway {
    type: DungeonHallwayType;
    edges: Array<{
        edge: Edge;
        orientation: DungeonHallwayOrientation;
    }>;
    room1: DungeonRoom;
    room2: DungeonRoom;
}
