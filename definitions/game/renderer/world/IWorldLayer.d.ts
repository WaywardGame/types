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
import type DoodadInfo from "@wayward/game/game/doodad/DoodadInfo";
import type { IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import type { StillContainerBaseItemType } from "@wayward/game/game/item/IItem";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type ExploreMap from "@wayward/game/renderer/exploreMap/ExploreMap";
export interface ITileUpdate {
    terrainType: TerrainType;
    terrainMasks: TerrainMask;
    blockLight: boolean;
    doodadUpdate: IDoodadUpdate;
}
export interface IDoodadUpdate {
    doodadDescription: IDoodadDescription | undefined;
    doodadInfo: DoodadInfo | undefined;
    doodadVariationX: number;
    doodadVariationY: number;
    terrainMasks: TerrainMask;
}
export type onTileUpdateDelegate = (tile: Tile, flushTileImmediately: boolean, debug?: boolean) => void;
export type onDoodadUpdateDelegate = (tile: Tile, flushTileImmediately: boolean, doodadUpdate: IDoodadUpdate) => void;
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
export declare const stillContainerOrder: Record<StillContainerBaseItemType, number>;
export declare const tileAnimatedOffset = 127;
