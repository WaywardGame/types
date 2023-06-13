/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Island from "game/island/Island";
import { TerrainType } from "game/tile/ITerrain";
import { WorldZ } from "game/WorldZ";
import type { IByteGrid } from "renderer/fieldOfView/IByteGrid";
import type { ITileUpdate, onDoodadUpdateDelegate, onTileUpdateDelegate, TerrainData } from "renderer/world/IWorldLayer";
import { TerrainMask } from "renderer/world/IWorldLayer";
import type { IColorGrid, IWorldLayerCPP } from "@cplusplus/index";
import type Tile from "game/tile/Tile";
import type { IPreSerializeCallback } from "save/serializer/ISerializer";
import type World from "renderer/world/World";
export default class WorldLayer implements IPreSerializeCallback {
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
    private _loadedLighting;
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
}
