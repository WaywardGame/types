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
import { WorldZ } from "game/WorldZ";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import IExploreMap from "renderer/IExploreMap";
import { TerrainData } from "renderer/IWorld";
import { IWorldLayer, onDoodadUpdateDelegate, onTileUpdateDelegate, TerrainMask } from "renderer/IWorldLayer";
import { ITile, TerrainType } from "tile/ITerrain";
export default class WorldLayer implements IWorldLayer {
    readonly width: number;
    readonly height: number;
    readonly level: WorldZ;
    readonly lightLevelMap: IColorGrid;
    readonly lightBlockMap: IByteGrid;
    exploredMap: IExploreMap | undefined;
    onTileUpdate: onTileUpdateDelegate;
    onDoodadUpdate: onDoodadUpdateDelegate;
    private readonly terrainMap;
    private readonly instance;
    constructor(width: number, height: number, level: WorldZ);
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
    updateTile(x: number, y: number, tile: ITile, shouldUpdate?: boolean, updateNeighbors?: boolean, flushImmediate?: boolean, recentlyUpdatedFiles?: Set<string>, debug?: boolean): void;
    private mapIndex;
    private setTileInternal;
}
