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
import type Island from "@wayward/game/game/island/Island";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
declare const _default: {
    internal: boolean;
    /**
     * Gets the decay rate of a terrain type based on the temperature (returns as a default of 0).
     * @param terrainType The terrain type to check.
     * @param tile The tile.
     * @returns The number of decay reduction of the terrain given the temperature of the point.
     */
    getMeltRate(island: Island, terrainType: TerrainType, tile: Tile): number;
    canCreate(island: Island, type: TileEventType, tile: Tile, tileType: TerrainType): boolean;
    update(tileEvent: TileEvent, ticks: number): void;
};
export default _default;
