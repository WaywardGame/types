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
import type { BiomeType } from "game/biome/IBiome";
import type Player from "game/entity/player/Player";
import type { TickFlag, TileUpdateType } from "game/IGame";
import type { MultiplayerLoadingDescription } from "game/meta/Loading";
import type { ITile, TerrainType } from "game/tile/ITerrain";
import type World from "renderer/world/World";
import type { IVector2 } from "utilities/math/IVector";
export declare type IslandId = `${number},${number}`;
export declare module IslandPosition {
    function toId(position: IVector2): IslandId;
    function fromId(id: IslandId): IVector2 | undefined;
    function calculateBaseSeed(x: number, y: number, initialSeed: number): number;
}
export interface IIslandEvents {
    /**
     * Called when the island is activated
     * This means a player loaded onto the island
     */
    activated(): void;
    /**
     * CValled when the island is deactivated
     * This means there are no longer players on the island
     */
    deactivated(): void;
    /**
     * Called when the island is deleted
     */
    delete(): void;
    tickStart(tickFlag: TickFlag, ticks: number): any;
    tickEnd(tickFlag: TickFlag, ticks: number): any;
    /**
     * Called when a tile is updated (tile type changed, doodad created on it, etc)
     * @param tile The tile that was updated
     * @param x The x position of the updated tile
     * @param y The y position of the updated tile
     * @param z The z position of the updated tile
     * @param tileUpdateType The tile update type
     */
    tileUpdate(tile: ITile, x: number, y: number, z: number, tileUpdateType: TileUpdateType): void;
    /**
     * Called when a tile type changes.
     */
    terrainChange(x: number, y: number, z: number, tile: ITile, oldType: TerrainType): any;
    /**
     * Called when item references are loaded
     */
    loadedReferences(): void;
    /**
     * Called when loading an island and the world is created
     * @param world World object
     */
    createWorld(world: World): any;
    /**
     * Called after the world is generating
     * @param generateNewWorld True if a new world is being generated
     */
    postGenerateWorld?(generateNewWorld: boolean): void;
    /**
     * Called before loading world differences
     * Loading differences involving setting up corpses, creatures, doodads, and related things onto the world
     * @param generateNewWorld True if a new world is being generated
     */
    preLoadWorldDifferences?(generateNewWorld: boolean): void;
    /**
     * Emitted when an island is renamed
     */
    rename(player: Player, newName?: string, oldName?: string): any;
}
export interface ISeeds {
    base: number;
    saved: number;
    milestoneModifierSaved: number;
}
export interface IIslandLoadOptions {
    isNewSave: boolean;
    travelTime: number;
    newWorldBiomeTypeOverride: BiomeType;
    pauseAndShowLoadingScreen: boolean;
    multiplayerLoadingDescription?: MultiplayerLoadingDescription;
}
export interface IMoveToIslandOptions {
    spawnPosition?: IVector2;
    newWorldBiomeTypeOverride?: BiomeType;
    noTravelingEffects?: true;
}
export interface IWell {
    quantity: number;
    waterType: WaterType;
}
export interface IWaterFill {
    count: number;
    tiles: Record<number, Record<number, boolean>>;
}
export interface IWaterContamination {
    x: number;
    y: number;
    z: number;
    type: WaterType;
    expected?: number;
    count?: number;
}
export declare enum WaterType {
    None = 0,
    FreshWater = 1,
    Seawater = 2
}
export declare enum LiquidType {
    Seawater = 0,
    FreshWater = 1,
    Milk = 2
}
export declare const ISLAND_NAME_MAX_LENGTH = 32;
export declare const DEFAULT_ISLAND_ID = "0,0";
export declare const DEFAULT_ISLAND_POSITION: IVector2;
