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
import type { ITerrainDescription } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
export interface ILeftOverTile {
    terrainType: TerrainType;
    chance?: number;
}
export declare const DEFAULT_FISH_AVAILABLE = 6;
export declare const terrainDescriptions: OptionalDescriptions<TerrainType, ITerrainDescription>;
