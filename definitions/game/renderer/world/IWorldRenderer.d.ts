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
import type { IBound3 } from "@wayward/game/utilities/math/Bound3";
export declare enum SpriteBatchLayer {
    Corpse = 0,
    Item = 1,
    ItemMoving = 2,
    PlayerCreature = 3,
    TileEvent = 4,
    CreatureFlying = 5,
    Overlay = 6,
    OverTrees = 7,
    BelowDoodads = 8,
    Vehicle = 9
}
export declare enum RenderFlag {
    None = 0,
    Corpse = 1,
    Item = 2,
    Player = 4,
    Creature = 8,
    Terrain = 16,
    Overlay = 32,
    OverTrees = 64,
    TileEvent = 128,
    BelowDoodads = 256,
    Doodads = 512,
    NPC = 1024,
    Vehicle = 2048,
    All = 65535
}
export declare enum RenderLayerFlag {
    None = 0,
    Terrain = 1,
    TerrainOver = 2,
    TerrainDecoration = 4,
    Doodad = 8,
    DoodadOver = 16,
    Mod = 32,
    TerrainCover = 64,
    All = 255,
    ExcludeDoodad = 247
}
export declare enum TileLayerType {
    Terrain = 0,
    TerrainOver = 1,
    TerrainDecoration = 2,
    Doodad = 3,
    DoodadOver = 4,
    TerrainCover = 5
}
export interface IBounds {
    viewportBounds: IBound3;
    startX: number;
    endX: number;
    startY: number;
    endY: number;
}
