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
import EventEmitter from "event/EventEmitter";
import type { Game } from "game/Game";
import type { IGameOld } from "game/IGame";
import { TickFlag, TileUpdateType } from "game/IGame";
import { Quality } from "game/IObject";
import type { BiomeTypes } from "game/biome/IBiome";
import type { ITemplateBiomeOptions } from "game/biome/template/Template";
import DoodadManager from "game/doodad/DoodadManager";
import Human from "game/entity/Human";
import type { SkillType } from "game/entity/IHuman";
import Creature from "game/entity/creature/Creature";
import CreatureManager from "game/entity/creature/CreatureManager";
import type { IDamageInfo, IDamageOutcome, IDamageOutcomeInput } from "game/entity/creature/ICreature";
import CorpseManager from "game/entity/creature/corpse/CorpseManager";
import FlowFieldManager from "game/entity/flowfield/FlowFieldManager";
import NPCManager from "game/entity/npc/NPCManager";
import type { IIslandEvents, IIslandLoadOptions, IMobCheck, ISeeds, IWaterContamination, IWaterFill, IWaterFillReturn, IWell, IslandId } from "game/island/IIsland";
import { WaterType } from "game/island/IIsland";
import { PortManager } from "game/island/Port";
import type { ILiquidGather } from "game/item/IItem";
import type { IRequirementInfo } from "game/item/IItemManager";
import ItemManager from "game/item/ItemManager";
import type DrawnMap from "game/mapping/DrawnMap";
import type { IGameOptions } from "game/options/IGameOptions";
import type { IslandModifiersCollection } from "game/options/modifiers/island/IslandModifiers";
import type { IReferenceable } from "game/reference/IReferenceManager";
import TemperatureManager from "game/temperature/TemperatureManager";
import type { ITerrainDescription, ITileContainer, ITileData } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import type { ITerrainLoot, ITerrainLootItem } from "game/tile/TerrainResources";
import Tile from "game/tile/Tile";
import TileEventManager from "game/tile/TileEventManager";
import TimeManager from "game/time/TimeManager";
import Translation from "language/Translation";
import World from "renderer/world/World";
import type { IPostSerializeCallback, IPreSerializeCallback, ISerializer } from "save/serializer/ISerializer";
import type { IVersionInfo } from "utilities/Version";
import { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import type { Random } from "utilities/random/Random";
import type { LegacySeededGenerator } from "utilities/random/generators/LegacySeededGenerator";
import type { PCGSeededGenerator } from "utilities/random/generators/PCGSeededGenerator";
export interface IIslandDetails {
    seed: number;
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
    readonly time: TimeManager;
    readonly world: World;
    saveBuildTime?: number;
    saveVersion: string;
    biomeType: BiomeTypes;
    civilizationScore: number;
    civilizationScoreTiles: Record<number, number>;
    contaminatedWater: IWaterContamination[];
    creatureSpawnTimer: number;
    loadCount: number;
    mapGenVersion: string;
    name?: string;
    position: IVector2;
    readonly mapSize: number;
    readonly treasureMaps: DrawnMap[];
    readonly wellData: SaferNumberIndexedObject<IWell>;
    referenceId?: number;
    templateBiomeOptions: ITemplateBiomeOptions | undefined;
    tileContainers: ITileContainer[];
    version: string;
    tileData: SaferNumberIndexedObject<SaferNumberIndexedObject<SaferNumberIndexedObject<ITileData[]>>>;
    readonly seeds: ISeeds;
    readonly seededRandom: Random<LegacySeededGenerator | PCGSeededGenerator>;
    readonly game: Game;
    /**
     * Set of players on this island
     */
    readonly players: Set<Human<number>>;
    /**
     * Entity move types in fov on this island
     */
    readonly moveTypesInFov: Map<"-1-0" | "-1-1" | "-1-2" | "-1-4" | "-1-8" | "-1-16" | "-1-32" | "-1-64" | "-1-128" | "-1-256" | "-1-512" | "-1-1024" | "-1-15" | "0-0" | "0-1" | "0-2" | "0-4" | "0-8" | "0-16" | "0-32" | "0-64" | "0-128" | "0-256" | "0-512" | "0-1024" | "0-15" | "1-0" | "1-1" | "1-2" | "1-4" | "1-8" | "1-16" | "1-32" | "1-64" | "1-128" | "1-256" | "1-512" | "1-1024" | "1-15", Set<Human<number>>>;
    previousSaveVersion: IVersionInfo | undefined;
    brokenReferencesCount: number;
    readonly id: IslandId;
    readonly mapSizeSq: number;
    spawnPoint: IVector3;
    private _activated;
    private _loadedReferences;
    private _tiles;
    modifiersCollection?: IslandModifiersCollection;
    details?: IIslandDetails;
    private _ranUpgrade;
    private serializeObjectStats?;
    constructor(game?: Game, position?: IVector2, seed?: number, mapSize?: number);
    toString(): string;
    private registerMemoryLeakDetector;
    preSerializeObject(serializer: ISerializer): void;
    postSerializeObject(serializer: ISerializer): void;
    preSerializeProperty(serializer: ISerializer, key: string): void;
    postSerializeProperty(serializer: ISerializer, key: string): void;
    onUnserialized(serializer: ISerializer): void;
    get biome(): import("game/biome/IBiome").IBiomeDescription;
    get isLoaded(): boolean;
    get tiles(): Record<number, Tile | undefined>;
    get hasLoadedItemReferences(): boolean;
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
    getGameOptions(): IGameOptions;
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
    private fastForward;
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
    createTile(x: number, y: number, z: number, index: number): Tile;
    setTile(x: number, y: number, z: number, tile: Tile): Tile;
    getOrCreateTile(index: number, x: number, y: number, z: number): Tile;
    updateFlowFieldTile(tile: Tile, tileUpdateType: TileUpdateType, updatedRenderer?: boolean): void;
    /**
     * Checks if island.tileData is synced with Tile.data
     */
    checkTileState(): void;
    processWaterContamination(): void;
    addPlayer(human: Human, refreshStatusEffects?: boolean): void;
    removePlayer(human: Human, isAbsentPlayer?: boolean): void;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): Human[];
    getReputation(): number;
    getMalignity(): number;
    getBenignity(): number;
    getMaxHealth(): number;
    getMaxWeight(): number;
    getSkillPercent(skill: SkillType): number;
    getPlayerAverage(calc: (player: Human) => number | undefined, round?: boolean): number;
    updateReputation(reputation: number): void;
    /**
     * Check the amount of water tiles there is connected to a supplied x/y area
     */
    checkWaterFill(tile: Tile, needed: number, waterType: WaterType, waterFill?: IWaterFill): IWaterFillReturn;
    getSpawnPoint(): Tile;
    getSuitableSpawnPoint(): Tile;
    calculateDamageOutcome(input: IDamageOutcomeInput): IDamageOutcome | undefined;
    damage(target: Human | Creature, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    /**
     * Calculates the light level of a tile.
     * @returns 32bit number representing RED GREEN BLUE ALPHA
     */
    calculateTileLightLevel(tile: Tile): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    checkForTargetInRange(tile: Tile, direction: Direction.Cardinal, range: number, includePlayers?: boolean): IMobCheck;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation, player?: boolean): void;
    coolFires(requirements: IRequirementInfo, human: Human): void;
    /**
     * Resets & recalculates the civilization score
     */
    recalculateCivilizationScore(): void;
    /**
     * Refreshes the provided civ score for the given tile
     */
    refreshTileCivilizationScore(tile: Tile, isRecalculating?: boolean): void;
    /**
     * Adds civilization score
     */
    addCivilizationScore(score: number, source: string | undefined): void;
    /**
     * Gets the growing speed (or chance to grow more every tick).
     * @param quality Quality of the item or tile to check the growing speed of.
     */
    getGrowingSpeed(terrainType: TerrainType, quality?: Quality, magicValue?: number): number;
    processTickFlags(tickFlag: TickFlag, ticks: number, playingHumans: Human[]): void;
    processTickFlagsAsync(tickFlag: TickFlag, ticks: number, playingHumans: Human[], onProgress: (progess: number) => Promise<void>): Promise<void>;
    private updateEntityFov;
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
    rangeFinder(weaponRange: number, playerSkillLevel: number, get?: "random" | "min" | "max"): number;
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
}
