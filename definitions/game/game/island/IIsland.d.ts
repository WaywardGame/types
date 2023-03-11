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
import type Doodad from "game/doodad/Doodad";
import type Human from "game/entity/Human";
import type { IIslandTemplate, TickFlag, TileUpdateType } from "game/IGame";
import type { MultiplayerLoadingDescription } from "game/meta/Loading";
import type { TerrainType } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
import type { ISerializedTranslation } from "language/ITranslation";
import type World from "renderer/world/World";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import type { SeedType } from "utilities/random/IRandom";
export type IslandId = `${number},${number}`;
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
     * Called when the island is unloaded
     */
    unloaded(): void;
    /**
     * Called when the island is deleted
     */
    delete(): void;
    tickStart(tickFlag: TickFlag, ticks: number): any;
    tickEnd(tickFlag: TickFlag, ticks: number): any;
    /**
     * Called when a tile is updated (tile type changed, doodad created on it, etc)
     * @param tile The tile that was updated
     * @param tileUpdateType The tile update type
     */
    tileUpdate(tile: Tile, tileUpdateType: TileUpdateType): void;
    /**
     * Called when a tile type changes.
     */
    terrainChange(tile: Tile, oldType: TerrainType): any;
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
    rename(human: Human, newName?: string, oldName?: string): any;
    /**
     * Emitted when island ports have changed
     * @param doodad Doodad that caused the change
     */
    portsChanged(doodad: Doodad): any;
}
export interface ILegacySeeds {
    type: SeedType.Legacy;
    base: number;
    saved: number;
}
export interface IPCGSeeds {
    type: SeedType.PCG;
    base: number;
    saved: Uint16Array;
}
export type ISeeds = ILegacySeeds | IPCGSeeds;
export interface IIslandLoadOptions {
    /**
     * Set to true when the island load is happening for everyone eveywhere all at once
     */
    isSynced: boolean;
    isNewSave?: boolean;
    travelTime?: number;
    pauseAndShowLoadingScreen?: boolean;
    multiplayerLoadingDescription?: MultiplayerLoadingDescription;
    newIslandOverrides?: Partial<INewIslandOverrides>;
}
export interface IMoveToIslandOptions {
    spawnPosition: IVector2;
    noTravelingEffects: true;
    noTravelingTime: true;
    distanceFromEdge: number;
    respawn: boolean;
    newIslandOverrides: Partial<INewIslandOverrides>;
}
export interface INewIslandOverrides {
    biomeType: BiomeType;
    template: IIslandTemplate;
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
    Seawater = 2,
    SwampWater = 3
}
export declare enum LiquidType {
    Seawater = 0,
    FreshWater = 1,
    Milk = 2,
    SwampWater = 3
}
export declare const ISLAND_NAME_MAX_LENGTH = 32;
export declare const DEFAULT_ISLAND_ID = "0,0";
export declare const DEFAULT_ISLAND_MAP_SIZE = 512;
export declare const TRAVEL_ANIMATION_ISLAND_ID: IslandId;
export interface IIslandPort {
    id: number;
    name: string | ISerializedTranslation;
    position: IVector3;
}
