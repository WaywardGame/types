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
import DoodadInfo from "doodad/DoodadInfo";
import { DoodadType, IDoodadDescription } from "doodad/IDoodad";
import { WorldZ } from "game/WorldZ";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import IExploreMap from "renderer/IExploreMap";
import { TerrainData } from "renderer/IWorld";
import { ITile, TerrainType } from "tile/ITerrain";
export declare type onTileUpdateDelegate = (x: number, y: number, flushImmediate: boolean, debug?: boolean) => void;
export declare type onDoodadUpdateDelegate = (x: number, y: number, doodadDescription: IDoodadDescription | undefined, doodadType: DoodadType | undefined, doodadInfo: DoodadInfo | undefined, doodadVariationX: number, doodadVariationY: number, hasGraphicVariation: boolean, terrainMasks: TerrainMask, flushImmediate: boolean) => void;
export interface IWorldLayer {
    width: number;
    height: number;
    level: WorldZ;
    lightLevelMap: IColorGrid;
    lightBlockMap: IByteGrid;
    exploredMap: IExploreMap | undefined;
    onTileUpdate: onTileUpdateDelegate;
    onDoodadUpdate: onDoodadUpdateDelegate;
    getTile(x: number, y: number): TerrainData;
    getTileType(x: number, y: number): TerrainType;
    getType(terrain: TerrainData): TerrainType;
    isFence(terrain: TerrainData): boolean;
    isTilled(terrain: TerrainData): boolean;
    isWall(terrain: TerrainData): boolean;
    isDoodadOverHidden(terrain: TerrainData): boolean;
    getTileDecoration(x: number, y: number): number;
    setTile(x: number, y: number, terrainType: TerrainType | undefined, terrainMasks?: TerrainMask): void;
    updateAll(): void;
    updateTile(x: number, y: number, tile: ITile, shouldUpdate?: boolean, updateNeighbors?: boolean, flushImmediate?: boolean, recentlyUpdatedFiles?: Set<string>, debug?: boolean): void;
    delete(): void;
}
export default IWorldLayer;
export declare enum TerrainMask {
    None = 0,
    Type = 134217727,
    DoodadAnimationDisabled = 134217728,
    DoodadOverHidden = 268435456,
    Tilled = 536870912,
    Wall = 1073741824,
    Fence = 2147483648
}
export declare const stillContainerOrder: Record<number, number>;
