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
import type Island from "game/island/Island";
import type { ITile } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import { WorldZ } from "game/WorldZ";
import type ExploreMap from "renderer/exploreMap/ExploreMap";
import type { IByteGrid } from "renderer/fieldOfView/IByteGrid";
import type { ITileUpdate, onDoodadUpdateDelegate, onTileUpdateDelegate, TerrainData } from "renderer/world/IWorldLayer";
import { TerrainMask } from "renderer/world/IWorldLayer";
import type { IColorGrid, IWorldLayerCPP } from "@cplusplus/index";
export default class WorldLayer {
    readonly island: Island;
    readonly width: number;
    readonly height: number;
    readonly level: WorldZ;
    readonly lightLevelMap: IColorGrid;
    readonly lightBlockMap: IByteGrid;
    exploredMap: ExploreMap | undefined;
    onTileUpdates: Map<number, onTileUpdateDelegate>;
    onDoodadUpdates: Map<number, onDoodadUpdateDelegate>;
    private readonly terrainMap;
    readonly instance: IWorldLayerCPP;
    constructor(island: Island, width: number, height: number, level: WorldZ);
    delete(): void;
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
    updateTile(x: number, y: number, tile: ITile, shouldUpdate?: boolean, updateNeighbors?: boolean, flushImmediate?: boolean, recentlyUpdatedTiles?: Set<string>, debug?: boolean): void;
    getTileUpdate(x: number, y: number, tile?: ITile): ITileUpdate;
    private setTileInternal;
    /**
     * This must be synced with the loop in WorldLayer::BatchUpdateLightBlockValues c++
     */
    private mapIndex;
}