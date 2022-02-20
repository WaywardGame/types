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
import EventEmitter from "event/EventEmitter";
import type { BiomeTypes } from "game/biome/IBiome";
import DoodadManager from "game/doodad/DoodadManager";
import CorpseManager from "game/entity/creature/corpse/CorpseManager";
import Creature from "game/entity/creature/Creature";
import CreatureManager from "game/entity/creature/CreatureManager";
import type { IDamageInfo } from "game/entity/creature/ICreature";
import FlowFieldManager from "game/entity/flowfield/FlowFieldManager";
import type Human from "game/entity/Human";
import { SkillType } from "game/entity/IHuman";
import NPCManager from "game/entity/npc/NPCManager";
import Player from "game/entity/player/Player";
import type { IGameOld } from "game/IGame";
import { CreationId, FireType, TickFlag, TileUpdateType } from "game/IGame";
import { Quality } from "game/IObject";
import type { IIslandEvents, IIslandLoadOptions, ISeeds, IWaterContamination, IWaterFill, IWell } from "game/island/IIsland";
import { WaterType } from "game/island/IIsland";
import type { IRequirementInfo } from "game/item/IItemManager";
import ItemManager from "game/item/ItemManager";
import type DrawnMap from "game/mapping/DrawnMap";
import type { ObjectManager } from "game/ObjectManager";
import type { IGameOptions } from "game/options/IGameOptions";
import type { IslandModifiersCollection } from "game/options/modifiers/island/IslandModifiers";
import type { IReferenceable } from "game/reference/IReferenceManager";
import TemperatureManager from "game/temperature/TemperatureManager";
import type { ITile, ITileContainer, ITileData } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import TileEventManager from "game/tile/TileEventManager";
import TimeManager from "game/time/TimeManager";
import Translation from "language/Translation";
import World from "renderer/world/World";
import type { IPreSerializeCallback, ISerializer } from "save/serializer/ISerializer";
import { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import { Random, SeededGenerator } from "utilities/random/Random";
import type { IVersionInfo } from "utilities/Version";
export interface IIslandDetails {
    seed: number;
    random: Random;
    biomeType: BiomeTypes;
    offset: IVector2;
}
export declare module IIslandDetails {
    const NOOP: IIslandDetails;
}
/**
 * Represents the worlds island
 * Items, Creatures, Npcs, etc.. all exist on the island
 */
export default class Island extends EventEmitter.Host<IIslandEvents> implements IReferenceable, IPreSerializeCallback {
    static getBiomeType(x: number, y: number): BiomeTypes;
    static getDetails(x: number, y: number): IIslandDetails;
    static generateDetails(position: IVector2, seed?: number): IIslandDetails;
    corpses: CorpseManager;
    creatures: CreatureManager;
    doodads: DoodadManager;
    flowFieldManager: FlowFieldManager;
    items: ItemManager;
    npcs: NPCManager;
    temperature: TemperatureManager;
    tileEvents: TileEventManager;
    time: TimeManager;
    biomeType: BiomeTypes;
    contaminatedWater: IWaterContamination[];
    creatureSpawnTimer: number;
    lastCreationIds: SaferNumberIndexedObject<number>;
    mapGenVersion: string;
    name?: string;
    position: IVector2;
    referenceId?: number;
    saveVersion: string;
    tileContainers: ITileContainer[];
    tileData: SaferNumberIndexedObject<SaferNumberIndexedObject<SaferNumberIndexedObject<ITileData[]>>>;
    treasureMaps: DrawnMap[];
    version: string;
    wellData: SaferNumberIndexedObject<IWell>;
    loadCount: number;
    seeds: ISeeds;
    readonly seededRandom: Random<SeededGenerator>;
    /**
     * Random for milestone modifiers. You should only use the one in the default island
     * todo: remove since this is no longer used
     */
    readonly seededMilestoneModifiersRandom: Random<SeededGenerator>;
    /**
     * Set of players on this island
     */
    readonly players: Set<Player>;
    /**
     * Entity move types in fov on this island
     * `${z}-${moveType}` -> Players
     */
    readonly moveTypesInFov: Map<string, Set<Player>>;
    previousSaveVersion: IVersionInfo | undefined;
    brokenReferencesCount: number;
    civilizationScore: number;
    spawnPoint: IVector3;
    private _loadedReferences;
    private _tiles;
    private _world;
    modifiersCollection?: IslandModifiersCollection;
    details?: IIslandDetails;
    constructor(position?: IVector2, seed?: number);
    toString(): string;
    private registerMemoryLeakDetector;
    preSerializeObject(serializer: ISerializer): void;
    onUnserialized(): void;
    get id(): `${number},${number}`;
    get biome(): import("game/biome/IBiome").IBiomeDescription;
    get isLoaded(): boolean;
    get hasLoadedItemReferences(): boolean;
    get isLocalIsland(): boolean;
    get world(): World;
    /**
     * Check if this island has players on it
     */
    get isActive(): boolean;
    get isDefaultIsland(): boolean;
    getDetails(): IIslandDetails;
    registerEventBus(): void;
    unregisterEventBus(): void;
    private gameOptionsCached?;
    getGameOptions(): IGameOptions;
    clearGameOptionsCache(): void;
    rename(player: Player, newName: string): void;
    private generatedName?;
    getName(useGenerated?: boolean): string;
    getNeighboringIslands(): Island[];
    load(options?: Partial<IIslandLoadOptions>): Promise<void>;
    private initializeIslandModifiers;
    /**
     * Unload the island from memory
     * Removes all players and stores tiles references
     * @param resetState True if the game state is resetting
     */
    unload(): void;
    delete(): void;
    private deleteIfDeserialized;
    private fastForward;
    hydrateFromOldGame(oldGame: IGameOld): void;
    findUnusedId<T extends object>(creationId: CreationId, things: ObjectManager<T, any>): number;
    /**
     * Gets the total distance away the current island is from 0, 0 as a positive value.
     * @returns The distance as a positive number.
     */
    getIslandDistance(): number;
    /**
     * Gets the default terrain type that should be under a tile (in the case of melting or removing it in some way).
     * @param tile ITile that we are getting the default terrain type for.
     * @returns The default terrain type with a fallback to dirt (which shouldn't happen without mods or bugs).
     */
    getDefaultTerrainType(tile: ITile): TerrainType;
    checkForHiddenMob(human: Human, x: number, y: number, z: number): void;
    isMapEdge(x: number, y: number): boolean;
    ensureValidPoint<T extends IVector2>(point?: T): T | undefined;
    getTileFromPoint(point: IVector3): ITile;
    getTile(x: number, y: number, z: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    setTiles(tiles: ITile[]): void;
    getOrCreateTile(index: number): ITile;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean, skipCaveDirt?: boolean): void;
    makeLavaPassage(human: Human): TerrainType | undefined;
    makeCaveEntrance(human: Human, chance?: number): TerrainType | undefined;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number, tileUpdateType: TileUpdateType, updatedRenderer?: boolean): void;
    emitTileUpdate(tile: ITile, x: number, y: number, z: number, tileUpdateType: TileUpdateType, updatedRenderer?: boolean): void;
    isTilled(x: number, y: number, z: number): boolean;
    packGround(x: number, y: number, z: number): void;
    /**
     * Removes the top tiledata (index 0) from the tile
     * If there is no remaining tile data, a new tile data will be added with the newTileTypeWhenEmpty type
     */
    removeTopTile(x: number, y: number, z: number, newTileTypeWhenEmpty: TerrainType | ((tile: ITile) => TerrainType)): void;
    /**
     * Checks if island.tileData is synced with ITile.data
     */
    checkTileState(): void;
    isPositionFull(x: number, y: number, z: number): boolean;
    isTileFull(tile: ITile): boolean;
    isOnFire(tile: ITile): FireType;
    isTileEmpty(tile: ITile): boolean;
    isPositionEmpty(x: number, y: number, z: number): boolean;
    processWaterContamination(): void;
    addPlayer(player: Player, refreshStatusEffects?: boolean): void;
    removePlayer(player: Player, isAbsentPlayer?: boolean): void;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    isPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    getPlayersAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtPosition(position: IVector3, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersThatSeePosition(x: number, y: number, z: number): Player[];
    /**
     * Gets the nearest player based on x/y/z coordinates.
     * @param x The x coord to get the closest player.
     * @param y The y coord to get the closest player.
     * @param z The z coord to get the closest player.
     * @param canSee If set to true, check if the player can see the x/y/z coords. Defaults to false.
     */
    getNearestPlayer(x: number, y: number, z?: number, canSee?: boolean, includeGhosts?: boolean, includeConnecting?: boolean): {
        player?: Player;
        distance?: number;
    };
    getReputation(): number;
    getMalignity(): number;
    getBenignity(): number;
    getMaxHealth(): number;
    getMaxWeight(): number;
    getTactics(): number;
    getSkillPercent(skill: SkillType): number;
    getPlayerAverage(calc: (player: Player) => number | undefined, round?: boolean): number;
    /**
     * Check the amount of water tiles there is connected to a supplied x/y area
     */
    checkWaterFill(x: number, y: number, z: number, needed: number, waterType: WaterType, waterFill?: IWaterFill): number;
    getSpawnPoint(): IVector3;
    consumeWaterTile(x: number, y: number, z: number): void;
    damage(target: Human | Creature, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    /**
     * Calculates the light level of a tile.
     * @returns 32bit number representing RED GREEN BLUE ALPHA
     */
    calculateTileLightLevel(tile: ITile, x: number, y: number, z: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation, player?: boolean): void;
    coolFires(requirements: IRequirementInfo, human: Human): void;
    isFlammable(x: number, y: number, z: number): boolean;
    /**
     * Converts shallow single bodies of fresh water into seawater.
     * @param point x/y/z of the tile to check against.
     */
    contaminateFreshWater(point: IVector3): void;
    /**
     * Create puddles around a point and limit them (so they can't expand infinitely).
     * @param point x/y/z of the splash/puddle source.
     */
    createPuddles(point: IVector3): void;
    /**
     * Contaminate water sources when new ones are created based on the surrounding water.
     * @param point x/y/z of the water tile created.
     */
    contaminateWater(point: IVector3): void;
    /**
     * Adds civilization score
     */
    addCivilizationScore(score: number, source: string | undefined): void;
    processTickFlags(tickFlag: TickFlag, ticks: number, realPlayers: Player[]): void;
    processTickFlagsAsync(tickFlag: TickFlag, ticks: number, realPlayers: Player[], onProgress: (progess: number) => Promise<void>): Promise<void>;
    private updateEntityFov;
    private processTimers;
    private runRandomEvents;
    /**
     * Plants a random seed at the given coordinates based on what can grow on that tile naturally. This will replace any doodad that is there.
     * @param x X coordinates.
     * @param y Y coordinates.
     * @param z Z coordinates.
     * @returns True if a seed was planted.
     */
    plantRandomSeed(x: number, y: number, z: number): boolean;
    /**
     * Synchronizes player events
     * Usually called when a new player joins
     */
    synchronizeStates(playerIds: number[]): void;
    /**
     * @returns a range value for the weapon being shot based on the weapon range and the players skill with that weapon type. This value then becomes the maximum potential range of the current shot.
     */
    rangeFinder(weaponRange: number, playerSkillLevel: number, useMaxRange?: boolean): number;
    getRandomQuality(bonusQuality?: number): Quality.None | Quality.Superior | Quality.Remarkable | Quality.Exceptional;
    getQualityDurabilityBonus(quality: Quality, itemDurability: number, getMax?: boolean): number;
    /**
     * Only allow loading references once
     * Even if an island is unloaded, the loaded references will remain
     */
    loadReferences(): void;
}
