/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
import type { ITileAdaptation } from "@wayward/game/renderer/tile/TileAdaptors";
import DefaultTileAdaptor from "@wayward/game/renderer/tile/adaptors/Default";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
export default class WaterTileAdaptor extends DefaultTileAdaptor {
    adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation, debug?: boolean): void;
    private diagonalMatcher;
}
