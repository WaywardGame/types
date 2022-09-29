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
import type { BiomeTypes } from "game/biome/IBiome";
import type Doodad from "game/doodad/Doodad";
import type Corpse from "game/entity/creature/corpse/Corpse";
import type Creature from "game/entity/creature/Creature";
import type { ICharacter, ICrafted } from "game/entity/IHuman";
import type NPC from "game/entity/npc/NPC";
import type { PlayerState } from "game/entity/player/IPlayer";
import type { Game } from "game/Game";
import type { ISeeds, IslandId, IWell } from "game/island/IIsland";
import type Item from "game/item/Item";
import type { Milestone } from "game/milestones/IMilestone";
import type { GameMode, IGameOptions } from "game/options/IGameOptions";
import type { ITileContainer, ITileData } from "game/tile/ITerrain";
import type TileEvent from "game/tile/TileEvent";
import type TimeManager from "game/time/TimeManager";
import type { IMultiplayerOptions, IMultiplayerWorldData, ServerInfo } from "multiplayer/IMultiplayer";
import type { IReplayLogEntry } from "replay/IReplayLogEntry";
import type { IHighscoreOld, IOptions } from "save/data/ISaveDataGlobal";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import type { IRange } from "utilities/math/Range";
export interface IGameEvents {
    /**
     * Called when the game is starting
     * @param isLoadingSave True if a save game was loaded
     * @param playedCount The number of times the player has played the game (globally, not per slot)
     */
    play(isLoadingSave: boolean, playedCount: number): any;
    /**
     * Called when the local player clicks "explore world as ghost"
     */
    exploreAsGhost(): any;
    preSaveGame(saveType: SaveType): any;
    postSaveGame(saveType: SaveType): any;
    /**
     * Called when the game is stopping being played
     * @param state The state of the player (why the game is ending)
     */
    stoppingPlay(state: PlayerState): any;
    /**
     * Called when the game has stopped being played
     * @param state The state of the player (why the game ended)
     */
    stopPlay(state: PlayerState): any;
    loadStep(): any;
    /**
     * Called when all game state was reset
     */
    reset(): any;
    /**
     * Called when getting the biome type distribution for random biome selection
     */
    getBiomeTypeChances(): Array<[number, BiomeTypes]> | undefined;
    /**
     * Called when selecting the biome type for and island
     * @param positon Island position
     * @param biomeType Biome type
     */
    getBiomeType(positon: IVector2, biomeType: BiomeTypes): BiomeTypes | undefined;
    pause(): any;
    resume(): any;
    tickStart(tickFlag: TickFlag, ticks: number, dueToAction: boolean): any;
    tickEnd(tickFlag: TickFlag, ticks: number, dueToAction: boolean): any;
    /**
     * Called when the playing entity count changes
     */
    playingEntityChange(): any;
    /**
     * Called when the turn mode is set
     */
    setTurnMode(turnMode: TurnMode): any;
    glLostContext(): any;
    glSetup(restored: boolean): any;
    glInitialized(): any;
    /**
     * Called after the field of view has initialized
     */
    postFieldOfView?(): void;
}
export declare enum TickFlag {
    None = 0,
    Timers = 1,
    WaterContamination = 2,
    TileEvents = 4,
    Corpses = 8,
    Doodads = 16,
    Creatures = 32,
    NPCs = 64,
    RandomEvents = 128,
    StatusEffects = 256,
    FlowFields = 512,
    PlayerNotes = 1024,
    Items = 2048,
    IslandTimeAdjustment = 2078,
    All = 4095
}
/**
 * This number * game.interval (16.666) is the tick time in milliseconds
 */
export declare enum TickSpeed {
    Min = 10,
    Default = 50,
    Max = 140
}
export declare enum TurnMode {
    Manual = 0,
    Simulated = 1,
    RealTime = 2
}
export declare type IGameOld = Partial<Game> & Partial<{
    dayNight: number;
    dayNightSwitch: 0 | 1;
    monsters: Creature[];
    tamedCreatures: number[];
    options: IOptions;
    lastPlayedVersion: string | undefined;
    highscores: IHighscoreOld[];
    playedCount: number;
    dailyChallenge: boolean;
    isRealTime: boolean;
    realTimeTickSpeed: TickSpeed;
    crafted: Record<number, ICrafted>;
    contaminatedWater: IVector3[];
    corpses: SaferArray<Corpse>;
    creatures: SaferArray<Creature>;
    creatureSpawnTimer: number;
    doodads: SaferArray<Doodad>;
    items: Item[];
    lastCreationIds: Record<number, number>;
    mapGenVersion: string;
    npcs: SaferArray<NPC>;
    saveVersion: string;
    seeds: ISeeds;
    tileContainers: ITileContainer[];
    tileData: Record<number, Record<number, Record<number, ITileData[]>>>;
    tileEvents: SaferArray<TileEvent>;
    time: TimeManager;
    wellData: Record<number, IWell | undefined>;
}>;
export interface IPlayOptions {
    slot: number | undefined;
    name: string;
    seed: string | number | undefined;
    difficulty: GameMode;
    difficultyOptions?: IGameOptions;
    milestoneModifiers: Set<Milestone>;
    character: ICharacter;
    multiplayer: IMultiplayerOptions | true | undefined;
    multiplayerServerToJoin: ServerInfo | undefined;
    turnMode: TurnMode;
    realTimeTickSpeed: number;
    customMilestoneModifiersAllowed: boolean;
    mapSize: number | undefined;
    recordReplay: boolean;
    multiplayerWorld?: IMultiplayerWorldData;
    replayLog?: IReplayLogEntry[];
    replyCompletedMilestoneCount?: number;
}
export interface IPlayerOptions {
    id?: number;
    identifier?: string;
    absentPlayerIndex?: number;
    options?: Readonly<IOptions>;
    spawnIslandId?: IslandId;
    spawnPosition?: IVector3;
    character: ICharacter;
    crafted?: Record<number, ICrafted>;
    milestoneModifiers?: Set<Milestone>;
}
export declare enum FireType {
    None = 0,
    Doodad = 1,
    Fire = 2,
    Lava = 3,
    CoolingLava = 4
}
export declare enum SaveType {
    InGame = 0,
    Death = 1,
    Quit = 2,
    BackToMainMenu = 3,
    Multiplayer = 4,
    ReplayConvert = 5
}
export declare enum TileUpdateType {
    Batch = 0,
    CorpseManager = 1,
    Creature = 2,
    CreatureSpawn = 3,
    DoodadAttachStillContainer = 4,
    DoodadChangeType = 5,
    DoodadCreate = 6,
    DoodadDetachStillContainer = 7,
    DoodadEmbers = 8,
    DoodadGatherReady = 9,
    DoodadGrowingStage = 10,
    DoodadOrientation = 11,
    DoodadOverHidden = 12,
    DoodadRemove = 13,
    Item = 14,
    ItemDrop = 15,
    Mod = 16,
    NPC = 17,
    NPCSpawn = 18,
    Player = 19,
    Terrain = 20,
    TileEventManager = 21,
    Tilled = 22
}
export declare enum CreationId {
    Doodad = 0,
    Creature = 1,
    Corpse = 2,
    NPC = 3,
    Item = 4,
    TileEvent = 5,
    Player = 6
}
export declare enum PauseSource {
    /**
     * Used for pauses that the player will be able to turn on / off / override
     */
    Generic = 0,
    IslandLoad = 1,
    Mod = 2,
    PlayerMoveToIsland = 3,
    SyncGameState = 4,
    WebGlContextLost = 5,
    MultiplayerConnect = 6
}
/**
 * For items and terrain that can decay, the temperature range that controls the rate of decay.
 * If not provided for items, they will always decays no matter the temperature.
 * If not provided for terrain, they will not decay (or melt).
 *
 * Example:
 * ```ts
 * decayTemperatureRange: {
 * 	temperature: range(Temperature.Cold, Temperature.Normal),
 * 	decayChance: range(0, 1),
 * },
 * ```
 */
export interface IDecayTemperatureRange {
    /**
     * The temperature range that determines the rate of decay. IE, when using a `decayChance` of `range(0, 1)`,
     * when at or below the minimum temperature, the item doesn't decay, and when at or above the maximum temperature,
     * the item decays at the maximum rate of `1`.
     */
    temperature: IRange;
    /**
     * The decay chance based on the temperature. IE, when at or below the minimum temperature, uses the minimum decay chance,
     * and when at or above the maximum temperature, uses the maximum decay chance.
     *
     * Defaults to `range(0, 1)`
     */
    decayChance?: IRange;
}
export interface ISynchronizeState {
    id: string;
    state: Map<IslandId, number[]>;
}
export interface IMovementTime {
    start: number;
    end: number;
}
export declare const DEFAULT_MAP_SIZE = 512;
export declare const DEFAULT_MAP_SIZE_SQUARED: number;
export declare const LINE_OF_SIGHT_RADIUS = 15;
export declare const LINE_OF_SIGHT_RADIUS_MAX = 20;
export declare const LINE_OF_SIGHT_DETAIL = 4;
export declare const INTERVAL = 16.6666;
export declare const TURN_DELAY_MAX: number;
export declare const TURN_DELAY_DEFAULT: number;
export declare const LIGHT_COLOR_DEFAULT: import("utilities/Color").IRGB;
export declare const TOOLTIP_DELAY_DEFAULT = 170;
export declare const ZOOM_LEVEL_MAX = 16;
export declare const ZOOM_LEVEL_MIN = 1;
