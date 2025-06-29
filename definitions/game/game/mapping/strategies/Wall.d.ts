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
import type { IMapTileRenderApi, IMapTileRenderConfiguration, IMapTileRenderStrategy } from "@wayward/game/game/mapping/IMapTile";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import Vector2 from "@wayward/game/utilities/math/Vector2";
export declare namespace WallStrategy {
    function hash(east: boolean, north: boolean, west: boolean, south: boolean): string;
    function hashByDirections(directions: {
        east?: boolean;
        north?: boolean;
        west?: boolean;
        south?: boolean;
    }): string;
    const NONE: string;
}
export declare const enum WallStrategyDifference {
    Terrain = 0,
    Decoration = 1
}
declare function wallStrategy(difference: WallStrategyDifference | string | ((api: IMapTileRenderApi) => string), solidRenderStrategy?: false | IMapTileRenderStrategy, override?: (api: IMapTileRenderApi, adaption: false | Vector2) => false | Vector2, overrideConfigurations?: (api: IMapTileRenderApi, configuration: IMapTileRenderConfiguration | undefined) => ArrayOr<IMapTileRenderConfiguration> | undefined): IMapTileRenderStrategy;
declare namespace wallStrategy {
    function isSameTerrain(terrain1: TerrainType, terrain2: TerrainType): boolean;
    function plot(difference: WallStrategyDifference | string | ((api: IMapTileRenderApi) => string), solidRenderStrategy: (false | IMapTileRenderStrategy) | undefined, overrideAdaption: ((api: IMapTileRenderApi, adaption: false | Vector2) => false | Vector2) | undefined, overrideConfigurations: ((api: IMapTileRenderApi, configurations: IMapTileRenderConfiguration | undefined) => ArrayOr<IMapTileRenderConfiguration> | undefined) | undefined, api: IMapTileRenderApi): IMapTileRenderConfiguration[] | undefined;
}
export default wallStrategy;
