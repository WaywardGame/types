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
import type { Game } from "@wayward/game/game/Game";
import type { IGameOld } from "@wayward/game/game/IGame";
import { Quality } from "@wayward/game/game/IObject";
import { TickHelper } from "@wayward/game/game/TickHelper";
import type { BiomeTypes, IBiomeDescription } from "@wayward/game/game/biome/IBiome";
import DoodadManager from "@wayward/game/game/doodad/DoodadManager";
import Human from "@wayward/game/game/entity/Human";
import type { SkillType } from "../entity/skill/ISkills";
import Creature from "@wayward/game/game/entity/creature/Creature";
import CreatureManager from "@wayward/game/game/entity/creature/CreatureManager";
import type { IDamageInfo, IDamageOutcome, IDamageOutcomeInput } from "@wayward/game/game/entity/creature/ICreature";
import CorpseManager from "@wayward/game/game/entity/creature/corpse/CorpseManager";
import CreatureZoneManager from "@wayward/game/game/entity/creature/zone/CreatureZoneManager";
import FlowFieldManager from "@wayward/game/game/entity/flowfield/FlowFieldManager";
import NPCManager from "@wayward/game/game/entity/npc/NPCManager";
import type { TurnTypeFlag } from "@wayward/game/game/entity/player/IPlayer";
import type { IIslandEvents, IIslandFastForwardOptions, IIslandLoadOptions, IIslandTickOptions, IMobCheck, ISeeds, IslandId, IWaterContamination, IWaterFill, IWaterFillReturn, IWell } from "@wayward/game/game/island/IIsland";
import { WaterType } from "@wayward/game/game/island/IIsland";
import { PortManager } from "@wayward/game/game/island/Port";
import type { ILiquidGather, IRangedResolvedDirection } from "@wayward/game/game/item/IItem";
import type { IRequirementInfo } from "@wayward/game/game/item/IItemManager";
import ItemManager from "@wayward/game/game/item/ItemManager";
import type DrawnMap from "@wayward/game/game/mapping/DrawnMap";
import type { IGameOptions, IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import type { IslandModifiersCollection } from "@wayward/game/game/options/modifiers/island/IslandModifiers";
import type { IReferenceable } from "@wayward/game/game/reference/IReferenceManager";
import TemperatureManager from "@wayward/game/game/temperature/TemperatureManager";
import type { ITerrainDescription, ITileContainer, ITileData } from "@wayward/game/game/tile/ITerrain";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { ITerrainLoot, ITerrainLootItem } from "@wayward/game/game/tile/TerrainResources";
import Tile from "@wayward/game/game/tile/Tile";
import TileEventManager from "@wayward/game/game/tile/TileEventManager";
import Translation from "@wayward/game/language/Translation";
import World from "@wayward/game/renderer/world/World";
import type { IPostSerializeCallback, IPreSerializeCallback, ISerializer } from "@wayward/game/save/serializer/ISerializer";
import type { IVersionInfo } from "@wayward/utilities/Version";
import Version from "@wayward/utilities/Version";
import { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { IBuildId } from "@wayward/hosts/shared/globalTypes";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { Random } from "@wayward/utilities/random/Random";
import type { LegacySeededGenerator } from "@wayward/utilities/random/generators/LegacySeededGenerator";
import type { PCGSeededGenerator } from "@wayward/utilities/random/generators/PCGSeededGenerator";
import Curse from "@wayward/game/game/curse/Curse";
export interface IIslandDetails {
    seed: number;
    biomeType: BiomeTypes;
    offset: IVector2;
}
export declare namespace IIslandDetails {
    const NOOP: IIslandDetails;
}
/**
 * Represents the worlds island
 * Items, Creatures, Npcs, etc.. all exist on the island
 */
export default class Island extends EventEmitter.Host<IIslandEvents> implements IReferenceable, IPreSerializeCallback, IPostSerializeCallback {
    readonly corpses: CorpseManager;
    readonly creatures: CreatureManager;
    readonly doodads: DoodadManager;
    readonly flowFieldManager: FlowFieldManager;
    readonly items: ItemManager;
    readonly npcs: NPCManager;
    readonly ports: PortManager;
    readonly temperature: TemperatureManager;
    readonly tileEvents: TileEventManager;
    readonly world: World;
    readonly zones: CreatureZoneManager;
    /**
     * The version this island was originally made on
     */
    version: Version.String;
    /**
     * The version the mapgen for this island uses
     */
    mapGenVersion: Version.String;
    mapGenBuildTime?: number;
    mapGenBuildId?: IBuildId;
    /**
     * The version this island was last loaded on
     */
    saveVersion: Version.String;
    saveBuildTime: number;
    saveBuildId: IBuildId | undefined;
    biomeOptions?: unknown;
    biomeType: BiomeTypes;
    contaminatedWater: IWaterContamination[];
    curse: Curse;
    lastPlayerGameTimeTicks?: number;
    loadCount: number;
    name?: string;
    position: IVector2;
    readonly mapSize: number;
    readonly treasureMaps: DrawnMap[];
    readonly wellData: SaferNumberIndexedObject<IWell>;
    referenceId?: number;
    tileContainers: ITileContainer[];
    tileData: SaferNumberIndexedObject<SaferNumberIndexedObject<SaferNumberIndexedObject<ITileData[]>>>;
    readonly seeds: ISeeds;
    get mapGenVersionInfo(): Version.Info;
    readonly seededRandom: Random<LegacySeededGenerator | PCGSeededGenerator>;
    readonly game: Game;
    /**
     * Set of players on this island
     */
    readonly players: Set<Human<unknown, number, import("@wayward/game/game/reference/IReferenceManager").ReferenceType.NPC | import("@wayward/game/game/reference/IReferenceManager").ReferenceType.Player, unknown>>;
    /**
     * Entity move types in fov on this island
     */
    readonly moveTypesInFov: Map<"-1-0" | "-1-1" | "-1-2" | "-1-4" | "-1-8" | "-1-16" | "-1-32" | "-1-64" | "-1-128" | "-1-256" | "-1-512" | "-1-1024" | "-1-2048" | "-1-4096" | "-1-8192" | "-1-15" | "0-0" | "0-1" | "0-2" | "0-4" | "0-8" | "0-16" | "0-32" | "0-64" | "0-128" | "0-256" | "0-512" | "0-1024" | "0-2048" | "0-4096" | "0-8192" | "0-15" | "1-0" | "1-1" | "1-2" | "1-4" | "1-8" | "1-16" | "1-32" | "1-64" | "1-128" | "1-256" | "1-512" | "1-1024" | "1-2048" | "1-4096" | "1-8192" | "1-15", Set<Human<unknown, number, import("@wayward/game/game/reference/IReferenceManager").ReferenceType.NPC | import("@wayward/game/game/reference/IReferenceManager").ReferenceType.Player, unknown>>>;
    /**
     * Helps instruct when to tick when in simulated turn mode
     */
    readonly simulatedTickHelper: TickHelper;
    previousSaveVersion: IVersionInfo | undefined;
    brokenReferencesCount: number;
    readonly id: IslandId;
    readonly mapSizeSq: number;
    spawnPoint: IVector3;
    private _activated;
    private _tiles;
    modifiersCollection?: IslandModifiersCollection;
    details?: IIslandDetails;
    private _ranUpgrade;
    private readonly serializedSizeTracker;
    private _isFastForwarding;
    get isFastForwarding(): boolean;
    constructor(game?: Game, position?: IVector2, seed?: number, mapSize?: number);
    toString(): string;
    createStaticRandom(seed?: number, advance?: number): Random<PCGSeededGenerator>;
    private registerMemoryLeakDetector;
    preSerializeObject(serializer: ISerializer): void;
    postSerializeObject(serializer: ISerializer): void;
    preSerializeProperty(serializer: ISerializer, key: string): void;
    postSerializeProperty(serializer: ISerializer, key: string): void;
    onUnserialized(serializer: ISerializer): void;
    get biome(): IBiomeDescription;
    get isLoaded(): boolean;
    get tiles(): SaferNumberIndexedObject<Tile>;
    get isLocalIsland(): boolean;
    /**
     * Check if this island has players on it
     */
    get isActive(): boolean;
    get isDefaultIsland(): boolean;
    get isTransient(): boolean;
    getDetails(): IIslandDetails;
    /**
     * Activates the island.
     * Islands should be activated when a player is going to load onto it
     */
    private activate;
    /**
     * Runs some logic while ensuring the island is activated
     */
    private runWhileActivated;
    /**
     * Deactivates the island.
     * Islands should be deactivated when the last player leaves it or when it's being unloaded.
     */
    private deactivate;
    private gameOptionsCached?;
    private gameOptionsWithoutModifiersCached?;
    /** A game options modifier that always returns an empty array by default, to be injected into */
    getAdditionalGameOptionsSources(): IGameOptionsPartial[];
    getGameOptions(): ImmutableObject<IGameOptions>;
    getGameOptionsWithoutModifiers(): ImmutableObject<IGameOptions>;
    clearGameOptionsCache(): void;
    rename(human: Human, newName: string): void;
    private generatedName?;
    getName(useGenerated?: boolean): string;
    private getNameDescriptor;
    private getNameNoun;
    getNeighboringIslands(): Island[];
    ensureUpgraded(isSynced: boolean): void;
    /**
     * Loads the island
     */
    load(options: IIslandLoadOptions): Promise<void>;
    private initializeIslandModifiers;
    /**
     * Unload the island from memory
     * Removes all players and stores tiles references
     * @param resetState True if the game state is resetting
     */
    unload(): void;
    delete(): void;
    private deleteIfDeserialized;
    hydrateFromOldGame(oldGame: IGameOld): void;
    /**
     * Gets the total distance away the current island is from 0, 0 as a positive value.
     * @returns The distance as a positive number.
     */
    getIslandDistance(): number;
    /**
     * Gets the default terrain type that should be under a tile (in the case of melting or removing it in some way).
     * @param tile Tile that we are getting the default terrain type for.
     * @returns The default terrain type with a fallback to dirt (which shouldn't happen without mods or bugs).
     */
    getDefaultTerrainType(tile: Tile): TerrainType;
    getDirectionFromMovement(x: number, y: number): Direction.East | Direction.North | Direction.West | Direction.South;
    getTileFromPoint(point: IVector3): Tile;
    getTile(x: number, y: number, z: number, disableLog?: boolean): Tile;
    getTileSafe(x: number, y: number, z: number): Tile | undefined;
    createTile(x: number, y: number, z: number, index: number, rendererData: number, quality: Quality): Tile;
    setTile(x: number, y: number, z: number, tile: Tile): Tile;
    getOrCreateTile(index: number, x: number, y: number, z: number, rendererData: number, quality: Quality): Tile;
    /**
     * Checks if island.tileData is synced with Tile.data
     */
    checkTileState(): void;
    processWaterContamination(): void;
    addPlayer(human: Human, refreshStatuses?: boolean): void;
    removePlayer(human: Human, isAbsentPlayer?: boolean): void;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): Human[];
    /**
     * Calculates the average of a value for all players on the island
     * @param valueSupplier A function that returns the value for a given player. `undefined` values are skipped
     * @returns The average value, or `undefined` if no players provided a value
     */
    getPlayerAverage(valueSupplier: (playingHuman: Human) => number | undefined): number | undefined;
    /**
     * Calculates the average of a value for all players that can see a given tile, if provided
     * @param seeingTile The tile that all players must see. If `undefined`, calculates from all players
     * @param valueSupplier A function that returns the value for a given player. `undefined` values are skipped
     * @returns The average value, or `undefined` if no players provided a value
     */
    getPlayerAverage(seeingTile: Tile | undefined, valueSupplier: (playingHuman: Human) => number | undefined): number | undefined;
    getPlayerAverageLuck(seeingTile?: Tile): number;
    getPlayerAverageMaxHealth(): number;
    getPlayerAverageMaxWeight(): number;
    getPlayerAverageSkillPercent(skill: SkillType): number;
    /**
     * Check the amount of water tiles there is connected to a supplied x/y area
     */
    checkWaterFill(tile: Tile, needed: number, waterType: WaterType, waterFill?: IWaterFill): IWaterFillReturn;
    getSpawnPoint(): Tile;
    getSuitableSpawnPoint(): Tile;
    calculateDamageOutcome(input: IDamageOutcomeInput): IDamageOutcome | undefined;
    damage(target: Human | Creature, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    /**
     * Calculates the light level and light color of a tile.
     * @returns 32bit number representing RED GREEN BLUE ALPHA
     */
    calculateTileLightLevel(tile: Tile): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    /**
     * @param tile The tile to apply from
     * @param towardsTileOrDirection The `Tile`, `Vector2` (direction vector, not point), or `Direction` to do the ranged action towards
     * @param range The range to use the action at. If `towardsTileOrDirection` is a `Tile`, this will be capped by the tile's distance
     * @param accuracy 1.0 = perfectly accurate in target direction, 0.5 = can be perpendicular, 0.0 = can be in any direction around the check tile
     */
    applyRangedAccuracy(tile: Tile, towardsTileOrDirection: Tile | Vector2 | Direction, range: number, accuracy?: number): IRangedResolvedDirection;
    /**
     * @param tile The tile to apply from
     * @param towardsTileOrDirection The `Tile`, `Vector2` (direction vector, not point), or `Direction` to do the ranged action towards
     * @param range The range to use the action at. If `towardsTileOrDirection` is a `Tile`, this will be capped by the tile's distance
     * @param accuracy 1.0 = perfectly accurate in target direction, 0.5 = can be perpendicular, 0.0 = can be in any direction around the check tile
     * @param clientSide Returns a list of directions to raycast to that ensures that all potential end tiles will be tested against
     */
    applyRangedAccuracy(tile: Tile, towardsTileOrDirection: Tile | Vector2 | Direction, range: number, accuracy: number | undefined, clientSide: true): IRangedResolvedDirection[];
    /**
     * @param tile The tile to check from
     * @param ranged The range & direction vector to check towards. Generate this information using `applyRangedAccuracy`
     * @param includePlayers Whether players can be hit by this check
     */
    checkForTargetInRange(tile: Tile, ranged: IRangedResolvedDirection, includePlayers?: boolean): IMobCheck;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation, human?: Human): void;
    coolFires(requirements: IRequirementInfo, human: Human): void;
    /**
     * Gets the growing speed (or chance to grow more every tick).
     * @param quality Quality of the item or tile to check the growing speed of.
     */
    getGrowingSpeed(terrainType: TerrainType, quality?: Quality, magicValue?: number): number;
    /**
     * This is called on each active island on each game tick (16ms) when in simulated mode
     */
    processSimulateTick(timeStamp: number): void;
    triggerTickPacket(playingHumans?: Human[]): void;
    /**
     * Called when the island is ticking during simulated or real-time mode
     */
    tickRealtime(): void;
    /**
     * Marks that the human had a turn
     * In manual turn mode, it will tick the humans stat timers & the game
     */
    passTurn(human: Human, turnType?: TurnTypeFlag, dueToAction?: boolean): void;
    private travelTimeFastForward;
    /**
     * Fast forwards an island by running lots of ticks.
     * Defaults to IslandFastForward tick flag with no playing humans.
     */
    fastForward(options: IIslandFastForwardOptions): Promise<void>;
    /**
     * Collection of things to perform on each tick
     */
    tick(options?: IIslandTickOptions): void;
    /**
     * Collection of things to perform on each tick
     */
    private tickAsync;
    private processTickFlags;
    private processTickFlagsAsync;
    private updateTablesAndWeight;
    private updateEntityFov;
    /**
     * Compute lights around each human
     */
    private processLights;
    private processTimers;
    private runRandomEvents;
    /**
     * Synchronizes player events
     * Usually called when a new player joins
     */
    synchronizeStates(playerIds: number[]): void;
    /**
     * @returns a range value for the weapon being shot based on the weapon range and the players skill with that weapon type. This value then becomes the maximum potential range of the current shot.
     */
    rangeFinder(weaponRange: number, human: Human, skillUse: SkillType, get?: "random" | "min" | "max"): number;
    getRandomQuality(bonusQuality?: number): Quality.None | Quality.Superior | Quality.Remarkable | Quality.Exceptional;
    getQualityDurabilityBonus(quality: Quality, itemDurability: number, getMax?: boolean): number;
    /**
     * Only allow loading references once
     * Even if an island is unloaded, the loaded references will remain
     */
    loadReferences(allowFixes: boolean): void;
    /**
     * Gets the items/resources from terrain based on the TerrainResources definition and checks if it is based on the current biome type.
     * @param terrainLoot The resource to check.
     * @returns undefined if nothing set, or an array of ITerrainLootItem.
     */
    getTerrainItems(terrainLoot?: ITerrainLoot): ITerrainLootItem[] | undefined;
    calculateWell(position: IVector3, existingWell?: IWell): IWell;
    /**
     * Returns the type of liquid that can be gathered from the tile
     */
    getLiquidGatherType(terrainType: TerrainType, terrainDescription: ITerrainDescription): keyof ILiquidGather | undefined;
    /**
     * Calculate the maximum travel time (derived currently from the maximum growth time of doodads - we don't need to simulate past that value).
     * @returns number equal to the maximum travel time.
     */
    getMaximumTravelTime(): number;
    canMelt(terrainType: TerrainType, tile: Tile): boolean;
}
