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
import { TerrainType } from "game/tile/ITerrain";
import type WorldLayer from "renderer/world/WorldLayer";
import type { ITileAdaptation } from "renderer/tile/TileAdaptors";
import Default from "renderer/tile/adaptors/Default";
import type TileAtlas from "renderer/tile/atlas/TileAtlas";
export default class Floor extends Default {
    adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation, debug?: boolean): void;
}
