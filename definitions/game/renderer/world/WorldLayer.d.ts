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
import type { IColorGrid, IWorldLayerCPP } from "@wayward/cplusplus/index";
import type Island from "@wayward/game/game/island/Island";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import WorldZ from "@wayward/utilities/game/WorldZ";
import type { IByteGrid } from "@wayward/game/renderer/fieldOfView/IByteGrid";
import type { ITileUpdate, onDoodadUpdateDelegate, onTileUpdateDelegate, TerrainData } from "@wayward/game/renderer/world/IWorldLayer";
import { TerrainMask } from "@wayward/game/renderer/world/IWorldLayer";
import type { IPreSerializeCallback } from "@wayward/game/save/serializer/ISerializer";
import type World from "@wayward/game/renderer/world/World";
import type Human from "@wayward/game/game/entity/Human";
export declare class WorldLayer implements IPreSerializeCallback {
    /**
     * Run length encoded light level map to ensure FieldOfView.canSeePosition is always synced correctly.
     */
    encodedLightLevelMap: Uint32Array | undefined;
    /**
     * Run length encoded light block map to ensure FieldOfView.canSeePosition is always synced correctly.
     */
    encodedLightBlockMap: Uint32Array | undefined;
    readonly width: number;
    readonly height: number;
    readonly z: WorldZ;
    /**
     * Light level for the renderer.
     * Updated in FieldOfView.computeLightMap
     */
    lightLevelMap: IColorGrid;
    /**
     * Light blocks - changed via tileUpdate event
     */
    lightBlockMap: IByteGrid;
    island: Island;
    onTileUpdates: Map<number, onTileUpdateDelegate>;
    onDoodadUpdates: Map<number, onDoodadUpdateDelegate>;
    private terrainMap;
    instance: IWorldLayerCPP | undefined;
    private _loadedLightBlockMap;
    constructor(width: number | undefined, height: number, z: WorldZ);
    preSerializeObject(): void;
    load(world: World): void;
    unload(): void;
    getTileType(x: number, y: number): TerrainType;
    getTile(x: number, y: number): TerrainData;
    getType(terrain: TerrainData): TerrainType;
    getTileDecoration(x: number, y: number): number;
    isWall(terrain: TerrainData): boolean;
    isFence(terrain: TerrainData): boolean;
    isTilled(terrain: TerrainData): boolean;
    isDoodadOverHidden(terrain: TerrainData): boolean;
    isDoodadAnimationDisabled(terrain: TerrainData): boolean;
    terrainTypesMatch(terrain: TerrainData, otherTerrainType: TerrainType): boolean;
    baseWaterTypesMatch(baseWaterType: TerrainType, comparisonBaseWaterType: TerrainType): boolean;
    setTile(x: number, y: number, terrainType: TerrainType, terrainMasks?: TerrainMask): void;
    updateAll(): void;
    /**
     * Updates the rendered tile.
     * All neighbors are updated by default, but the neighbor tile update is only done when updateNeighbors is true
     */
    updateTile(tile: Tile, shouldUpdate: boolean, updateNeighbors: boolean, flushTileImmediately: boolean, isUpdatingNeighbors?: boolean, debug?: boolean): void;
    getTileUpdate(tile: Tile): ITileUpdate;
    private setTileInternal;
    /**
     * This must be synced with the loop in WorldLayer::BatchUpdateLightBlockValues c++
     */
    private mapIndex;
    /**
     * The pointer to the views might change when emscripten grows memory
     * So we need to refetch it sometimes
     * The array length is 0 when the view is invalid
     */
    private updateViews;
    computeLights(human: Human): void;
}
