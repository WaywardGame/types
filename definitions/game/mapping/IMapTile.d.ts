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
import { IHasImagePath } from "game/IObject";
import { TerrainType } from "game/tile/ITerrain";
import { IModdable } from "mod/ModRegistry";
import { Direction } from "utilities/math/Direction";
import Vector2 from "utilities/math/Vector2";
import { Random } from "utilities/random/Random";
export declare enum MapTile {
    Unknown = 0,
    Land = 1,
    Water = 2,
    Mountain = 3,
    TreeForest = 4,
    TreeBeach = 5,
    TreeEvergreen = 6,
    PlantDesert = 7,
    PlantCoastal = 8,
    Path = 9,
    HiddenTreasure = 10,
    CaveEntrance = 11,
    CaveWall = 12,
    Obfuscation = 13,
    DiscoveredTreasure = 14
}
export declare const DRAWN_MAP_TILES_SAVED: Set<MapTile>;
export interface IMapTileData {
    terrain: TerrainType;
    decoration: MapTile;
}
export interface IMapTileRenderApi {
    data: IMapTileData;
    random: Random;
    get(direction: Direction, diagonalDirection?: Direction): IMapTileData;
    plot(strategy: IMapTileRenderStrategy): IMapTileRenderConfiguration[];
}
export interface IMapTileRenderConfiguration {
    spriteOffset: Vector2;
    spriteSize: Vector2;
    drawOffset?: Vector2;
}
export interface IMapTileRenderStrategy extends IModdable, IHasImagePath {
    configurations?: IMapTileRenderConfiguration[];
    plot?(api: IMapTileRenderApi): IMapTileRenderConfiguration[] | undefined;
}
export declare const DRAWN_MAP_TILE_SIZE = 16;
export declare const DRAWN_MAP_TILE_SIZE_VEC: Vector2;
