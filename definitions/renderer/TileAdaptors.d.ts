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
import Doodad from "doodad/Doodad";
import { DoodadType } from "doodad/IDoodad";
import IWorldLayer from "renderer/IWorldLayer";
import { TerrainTileInfo } from "renderer/TerrainTileInfo";
import { TerrainType } from "tile/ITerrain";
import Vector2 from "utilities/math/Vector2";
export interface ITileAdaptation {
    TLFG: Vector2;
    TRFG: Vector2;
    BLFG: Vector2;
    BRFG: Vector2;
    TLBG: Vector2;
    TRBG: Vector2;
    BLBG: Vector2;
    BRBG: Vector2;
    overLayerFGTall?: true;
    TLFO?: Vector2;
    TRFO?: Vector2;
    BLFO?: Vector2;
    BRFO?: Vector2;
    overLayerBGTall?: true;
    TLBO?: Vector2;
    TRBO?: Vector2;
    BLBO?: Vector2;
    BRBO?: Vector2;
}
export interface ITileAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation, debug?: boolean): void;
}
export interface IDoodadAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
}
export declare let defaultBackground: TerrainTileInfo;
export declare let defaultBackgroundType: TerrainType;
export declare function setDefaultBackground(terrainType: TerrainType): void;
export declare function isDoor(doodad?: Doodad): boolean;
export declare function baseWaterTypesMatch(baseWaterType: TerrainType, comparisonBaseWaterType: TerrainType): boolean;
export declare const emptyTileAdaptor: ITileAdaptation;
