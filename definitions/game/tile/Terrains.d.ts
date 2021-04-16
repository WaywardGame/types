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
import { ITerrainDescription, TerrainType } from "game/tile/ITerrain";
export interface ILeftOverTile {
    terrainType: TerrainType;
    chance?: number;
}
export declare const DEFAULT_FISH_AVAILABLE = 6;
declare const terrainDescriptions: OptionalDescriptions<TerrainType, ITerrainDescription>;
export default terrainDescriptions;
