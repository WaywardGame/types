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
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { ITileAdaptation } from "@wayward/game/renderer/tile/TileAdaptors";
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
export default class DugTileAdaptor {
    static adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, tile: Tile, depth: number, terrainType: TerrainType, result: ITileAdaptation): boolean;
}
