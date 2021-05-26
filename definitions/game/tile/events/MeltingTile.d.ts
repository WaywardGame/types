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
import { ITile, TerrainType } from "game/tile/ITerrain";
import { TileEventType } from "game/tile/ITileEvent";
import TileEvent from "game/tile/TileEvent";
import { IVector3 } from "utilities/math/IVector";
declare const _default: {
    internal: boolean;
    /**
     * Gets the decay rate of a terrain type based on the temperature (returns as a default of 0).
     * @param terrainType The terrain type to check.
     * @param point The point of the terrain/tile.
     * @returns The number of decay reduction of the terrain given the temperature of the point.
     */
    getMeltRate(terrainType: TerrainType, point: IVector3): number;
    canMelt(terrainType: TerrainType, point: IVector3): boolean;
    canCreate(type: TileEventType, tile: ITile, tileType: TerrainType, x: number, y: number, z: number): boolean;
    update(tileEvent: TileEvent): void;
};
export default _default;
