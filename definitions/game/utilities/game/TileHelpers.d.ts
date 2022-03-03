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
import { TileGroup } from "game/entity/creature/ICreature";
import type Island from "game/island/Island";
import type { IOverlayInfo, ITile } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import type { IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
declare module TileHelpers {
    const maskGfx = 31;
    const maskType = 131040;
    const maskTypeShift = 5;
    const maskTilled = 131072;
    const maskTilledShift: number;
    const maskDoodadOverHidden = 262144;
    const maskDoodadOverHiddenShift: number;
    const maskDoodadAnimationDisabled = 524288;
    const maskDoodadAnimationDisabledShift: number;
    function getGfx(tile: ITile): number;
    /**
     * This should only be called if you know what you're doing
     * Use game.changeTile or game.removeTopTile when modifying tiles
     * Otherwise the game state could get out of sync
     */
    function setGfx(tile: ITile, value: number): void;
    /**
     * This should only be called from MapGen code
     */
    function setGfxRaw(data: number, value: number): number;
    function getType(tile: ITile): TerrainType;
    function getTypeRaw(data: number): TerrainType;
    /**
     * This should only be called if you know what you're doing
     * Use game.changeTile or game.removeTopTile when modifying tiles
     * Otherwise the game state could get out of sync
     */
    function setType(tile: ITile, value: TerrainType): void;
    /**
     * This should only be called from MapGen code
     */
    function setTypeRaw(data: number, value: TerrainType): number;
    /**
     * This should only be called from the rendering code
     * Use Island.isTilled for other scenarios
     */
    function isTilled(tile: ITile): boolean;
    /**
     * This should only be called if you know what you're doing
     * Ensure a tile data with tilled is created
     * Otherwise the game state could get out of sync
     */
    function setTilled(tile: ITile, value: boolean): void;
    function isDoodadOverHidden(tile: ITile): boolean;
    function setDoodadOverHidden(tile: ITile, value: boolean): void;
    function isDoodadAnimationDisabled(tile: ITile): boolean;
    function isDoodadAnimationDisabledRaw(data: number): boolean;
    function setDoodadAnimationDisabled(tile: ITile, value: boolean): void;
    function setDoodadAnimationDisabledRaw(data: number, value: number): number;
    function getTileVariation(x: number, y: number): number;
    function isTypeInGroup(tile: ITile | TerrainType, group: TileGroup): boolean;
    module Overlay {
        function add(tile: ITile, overlay: IOverlayInfo, ifNotExist?: (overlay: IOverlayInfo) => boolean): boolean;
        function has(tile: ITile, filter: (overlay: IOverlayInfo) => boolean): boolean | undefined;
        function remove(tile: ITile, overlay: IOverlayInfo): boolean;
        function remove(tile: ITile, filter: (overlay: IOverlayInfo) => boolean): boolean;
    }
    function findMatchingTile(island: Island, start: IVector3, isMatchingTile: (island: Island, point: IVector3, tile: ITile) => boolean, options?: {
        maxTilesChecked?: number;
        canVisitTile?: (island: Island, point: IVector3, tile: ITile) => boolean;
    }): IVector3 | undefined;
    function findMatchingTiles(island: Island, start: IVector3, isMatchingTile: (island: Island, point: IVector3, tile: ITile) => boolean, options?: {
        maxTiles?: number;
        maxTilesChecked?: number;
        canVisitTile?: (island: Island, point: IVector3, tile: ITile) => boolean;
    }): Array<{
        point: IVector3;
        tile: ITile;
    }>;
    /**
     * Check is a tile is open
     */
    function isOpenTile(island: Island, point: IVector3, tile?: ITile): boolean;
    /**
     * Refreshes the provided civ score for the given tile
     */
    function refreshCivilizationScore(island: Island, x: number, y: number, z: number): void;
    /**
     * Check if a tile is a suitable spawn point
     */
    function isSuitableSpawnPointTile(island: Island, point: IVector3, tile: ITile): boolean;
    /**
     * Check if a tile is a suitable spawn point
     */
    function isSuitableSpawnPointTileForMultiplayer(island: Island, point: IVector3, tile: ITile, disallowWater?: boolean): boolean;
    function getSuitableSpawnPoint(island: Island): IVector3;
    function getPointsAround(point: IVector3, includeCurrentTile?: boolean, includeCorners?: boolean): IVector3[];
    /**
     * Array version of TileHelpers.tilesAround
     */
    function getTilesAround(island: Island, point: IVector3, includeCurrentTile?: boolean, includeCorners?: boolean): ITile[];
    /**
     * IterableIterator version of TileHelpers.getTilesAround
     */
    function tilesAround(island: Island, point: IVector3, includeCurrentTile?: boolean, includeCorners?: boolean): Generator<ITile, void, unknown>;
    function tilesInRange(island: Island, point: IVector3, range: number, includeCurrentTile?: boolean): import("@wayward/goodstream").default<[Vector3, ITile]>;
    function openTileInRange(island: Island, point: IVector3, range: number, includeCurrentTile?: boolean): [Vector3, ITile] | undefined;
    function forTilesInRange(point: IVector3, range: number, consumer: (vec: IVector3, tileValue: number) => any): void;
    function forTilesInRange(point: IVector3, range: number, includeCenter: true, consumer: (vec: IVector3, tileValue: number) => any): void;
    /**
     * Check if the tile is blocked (impassable terrain or doodads that cause blocked movement).
     */
    function isTileBlocked(island: Island, point: IVector3): boolean;
    /**
     * Checks whether a player can dig at a certain location or not.
     * @param tile of the ITile to check where to dig.
     * @returns True if a player can dig the tile.
     */
    function canDig(tile: ITile): boolean;
}
export default TileHelpers;
