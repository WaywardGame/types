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
import IWorldLayer from "renderer/IWorldLayer";
import { ITileAdaptation, ITileAdaptor } from "renderer/TileAdaptors";
export default class Default implements ITileAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    protected getTerrainBeneathTile(x: number, y: number, ignoreWater?: boolean): TerrainType;
}
