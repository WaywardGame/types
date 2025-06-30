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
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import type { ITileAdaptation, ITileAdaptor } from "@wayward/game/renderer/tile/TileAdaptors";
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
import type { IRendererContext } from "@wayward/game/renderer/context/IRendererContext";
export default class DefaultTileAdaptor implements ITileAdaptor {
    protected readonly context: IRendererContext;
    constructor(context: IRendererContext);
    adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    protected getTerrainBeneathTile(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, ignoreWater?: boolean): TerrainType;
}
