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
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { CreatureType, IDamageInfo, IDamageOutcome, IDamageOutcomeInput } from "@wayward/game/game/entity/creature/ICreature";
import type Human from "@wayward/game/game/entity/Human";
import type { DamageType, Defense } from "@wayward/game/game/entity/IEntity";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { TickFlag, TileUpdateType } from "@wayward/game/game/IGame";
import type Port from "@wayward/game/game/island/Port";
import type { MultiplayerLoadingDescription } from "@wayward/game/game/meta/Loading";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type World from "@wayward/game/renderer/world/World";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import type { SeedType } from "@wayward/utilities/random/IRandom";
export type IslandId = `${number},${number}`;
export declare namespace IslandPosition {
    function toId(position: IVector2): IslandId;
    function fromId(id: IslandId): IVector2 | undefined;
    function isTransient(id: IslandId): boolean;
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
    tickStart(options: IIslandTickOptions): any;
    tickEnd(options: IIslandTickOptions): any;
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
     * Called when the world is created
     * @param world World object
     */
    createWorld(world: World): any;
    /**
     * Called when right before the world is loaded
     * @param world World object
     */
    preLoadWorld(world: World): any;
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
     */
    portsChanged(addedPort?: Port, removedPort?: Port): any;
    getDefense(defense: Defense | undefined, target: Human | Creature | CreatureType, damageType?: DamageType): Defense | undefined;
    calculateAttackOutcome(damageOutcome: IDamageOutcome, input: IDamageOutcomeInput, attackValue: number, defenseValue: number): IDamageOutcome | undefined;
    /**
     * Called when determining how many ticks to process when fast forwarding an island
     * @param fastForwardAmount Fast forward amount
     */
    getFastForwardAmount(fastForwardAmount: number): number | undefined;
    fastForwardStart(): any;
    fastForwardEnd(): any;
    /**
     * Emitted when random events are attempting to run on a tile.
     * @returns `false` to cancel default events
     */
    randomEvents(tile: Tile, human: Human): boolean | undefined | void;
    /**
     * Called when damaging an entity
     * @returns `false` to cancel default damage
     */
    damage(target: Human | Creature, damageInfo: IDamageInfo, attackOutcome: number): false | void;
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
    isTransient?: boolean;
    travelTime?: number;
    pauseAndShowLoadingScreen?: boolean;
    multiplayerLoadingDescription?: MultiplayerLoadingDescription;
    newIslandOverrides?: Partial<INewIslandOverrides>;
    disableLoadingScreen?: boolean;
}
export interface IMoveToIslandOptions {
    spawnPosition: IVector2;
    noTravelingEffects: true;
    noTravelingTime: true;
    distanceFromEdge: number;
    respawn: boolean;
    newIslandOverrides: Partial<INewIslandOverrides>;
    targetPortId: number;
    disableLoadingScreen: boolean;
    nestedTravelCount: number;
}
export interface INewIslandOverrides {
    mapSize: number;
    biomeType: BiomeType;
    biomeOptions: unknown;
}
export interface IWell {
    quantity: number;
    waterType: WaterType;
}
export interface IWaterFill {
    count: number;
    tiles: Record<number, Record<number, boolean>>;
    tile?: Tile;
}
export interface IWaterFillReturn {
    count: number;
    tile?: Tile;
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
export declare const GENERIC_TRANSIENT_ISLAND_ID_START: IslandId;
export declare const TRAVEL_ANIMATION_ISLAND_ID: IslandId;
export interface IIslandPort {
    id: number;
    name: string | ISerializedTranslation;
    position: IVector3;
}
export interface IMobCheck extends IVector3 {
    tile: Tile;
    creature?: Creature;
    player?: Human;
    npc?: NPC;
    obstacle?: boolean;
    water?: boolean;
    freshWater?: boolean;
    shallowWater?: boolean;
    swampWater?: boolean;
    noTile?: boolean;
    waterTiles?: number;
    voidTiles?: number;
}
/**
 * Allows choosing what to copy from the human.
 * All options default to true
 */
export interface ICopyHumanOptions {
    human: Human;
    copyCustomizations?: false;
    copyItemsAndEquipment?: false;
    copyStats?: false;
    copyStatus?: false;
}
export interface IIslandTickOptions {
    ticks: number;
    tickFlags?: TickFlag;
    playingHumans?: Human[];
    dueToAction?: Human;
}
export interface IIslandTickAsyncOptions extends IIslandTickOptions {
    onProgress?: (progess: number) => Promise<void>;
}
export interface IIslandFastForwardOptions extends IIslandTickAsyncOptions {
    multiplayerLoadingDescription?: MultiplayerLoadingDescription;
}
