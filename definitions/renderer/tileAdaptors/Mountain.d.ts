/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { TerrainType } from "game/tile/ITerrain";
import IWorldLayer from "renderer/IWorldLayer";
import { ITileAdaptation } from "renderer/TileAdaptors";
import Default from "renderer/tileAdaptors/Default";
export default class Mountain extends Default {
    private mountainTopFlag;
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    private getTileType;
}
