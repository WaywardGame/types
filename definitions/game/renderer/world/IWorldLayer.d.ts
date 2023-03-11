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
import type DoodadInfo from "game/doodad/DoodadInfo";
import type { DoodadType, IDoodadDescription } from "game/doodad/IDoodad";
import type { TerrainType } from "game/tile/ITerrain";
import type ExploreMap from "renderer/exploreMap/ExploreMap";
export interface ITileUpdate {
    terrainType: TerrainType;
    terrainMasks: TerrainMask;
    blockLight: boolean;
    doodadUpdate: IDoodadUpdate;
}
export interface IDoodadUpdate {
    doodadDescription: IDoodadDescription | undefined;
    doodadType: DoodadType | undefined;
    doodadInfo: DoodadInfo | undefined;
    doodadVariationX: number;
    doodadVariationY: number;
    hasGraphicVariation: boolean;
    terrainMasks: TerrainMask;
}
export type onTileUpdateDelegate = (x: number, y: number, flushImmediate: boolean, debug?: boolean) => void;
export type onDoodadUpdateDelegate = (x: number, y: number, flushImmediate: boolean, doodadUpdate: IDoodadUpdate) => void;
export type TerrainData = number;
export declare enum TerrainMask {
    None = 0,
    Type = 134217727,
    DoodadAnimationDisabled = 134217728,
    DoodadOverHidden = 268435456,
    Tilled = 536870912,
    Wall = 1073741824,
    Fence = 2147483648
}
export interface IWorldLayerOld {
    exploredMap?: ExploreMap;
}
export declare const stillContainerOrder: Record<number, number>;
