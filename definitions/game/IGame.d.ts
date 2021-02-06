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
import Doodad from "doodad/Doodad";
import Corpse from "entity/creature/corpse/Corpse";
import Creature from "entity/creature/Creature";
import { ICharacter, ICrafted } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import { PlayerState } from "entity/player/IPlayer";
import Game from "game/Game";
import { BiomeType } from "game/IBiome";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import Item from "item/Item";
import { IMultiplayerOptions, IMultiplayerWorldData, ServerInfo } from "multiplayer/IMultiplayer";
import World from "renderer/World";
import { IReplayLogEntry } from "replay/IReplayLogEntry";
import { IHighscoreOld, IOptions } from "save/data/ISaveDataGlobal";
import { ITile, ITileContainer, ITileData, TerrainType } from "tile/ITerrain";
import TileEvent from "tile/TileEvent";
import { IVector2, IVector3 } from "utilities/math/IVector";
import { IRange } from "utilities/math/Range";
import Vector3 from "utilities/math/Vector3";
import TimeManager from "./TimeManager";
export interface IGameEvents {
    play(): any;
    preSaveGame(saveType: SaveType): any;
    postSaveGame(saveType: SaveType): any;
    /**
     * Called when the game is ending
     * @param state The state of the player (why the game is ending)
     */
    end(state: PlayerState): any;
    createWorld(world: World): any;
    loadStep(): any;
    pause(): any;
    resume(): any;
    tickStart(tickFlag: TickFlag, ticks: number): any;
    tickEnd(tickFlag: TickFlag, ticks: number): any;
    /**
     * Called when getting the position to render at. By default, this is the player's location.
     * @param position The player's location
     * @returns The new position to render at, or undefined to use the player's location
     */
    getCameraPosition(position: IVector2): IVector2 | undefined;
    /**
     * Called when setting the zoom level.
     */
    getZoomLevel(): number | undefined;
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
    glLostContext(): any;
    glSetup(restored: boolean): any;
    glInitialized(): any;
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
    PlayerStatuses = 256,
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
    options?: IOptions;
    initialSpawnPosition?: IVector3;
    respawnPosition?: IVector3;
    character: ICharacter;
    crafted?: Record<number, ICrafted>;
    milestoneModifiers?: Set<Milestone>;
}
export interface IMapRequest {
    /**
     * The item containing the map.
     */
    item: Item;
    /**
     * The tile position of the top-left corner of the map.
     */
    tilePosition: Vector3;
    /**
     * Whether you are decoding a map or reading a drawn map. Defaults to false.
     */
    decoding?: boolean;
}
export interface ITravelToIslandOptions {
    spawnPosition?: IVector2;
    newWorldBiomeTypeOverride?: BiomeType;
}
export interface ITravelingToIslandInfo {
    id: string;
    travelTime?: number;
    newWorldBiomeTypeOverride?: BiomeType;
}
export interface IWell {
    quantity: number;
    waterType: WaterType;
}
export declare enum WaterType {
    None = 0,
    FreshWater = 1,
    Seawater = 2
}
export declare enum UpdateRenderFlag {
    None = 0,
    World = 1,
    FieldOfView = 2,
    FieldOfViewForced = 4,
    Particles = 8,
    Notifier = 16,
    SteamOverlay = 32,
    All = 255
}
export declare enum RenderSource {
    ActionManager = 0,
    ActionsMenu = 1,
    AmbientLightLevelUpdate = 2,
    AttackAnimationStart = 3,
    FadeIn = 4,
    FovTransition = 5,
    FovUpdate = 6,
    FovUpdateRadius = 7,
    GameAnimating = 8,
    GamePassTurn = 9,
    GameResumed = 10,
    GameTick = 11,
    GlobalSlotReady = 12,
    HiddenMob = 13,
    InspectOverlay = 14,
    ItemEquip = 15,
    ItemEquipEffect = 16,
    ItemMovement = 17,
    ItemUnequip = 18,
    Loop = 19,
    MapDecode = 20,
    Mod = 21,
    MovementCreature = 22,
    MovementNPC = 23,
    MovementPlayerPost = 24,
    MovementPlayerPre = 25,
    MovementPlayerZPost = 26,
    MovementPlayerZPre = 27,
    MovementTileEvent = 28,
    MultiplayerDisconnect = 29,
    Notifier = 30,
    NotifierAddCreature = 31,
    NotifierAddItem = 32,
    NotifierAddNotifierIcon = 33,
    NotifierAddStat = 34,
    NotifierAddStatusType = 35,
    OptionHeadgear = 36,
    OptionVisionMode = 37,
    OptionZoomLevel = 38,
    Particles = 39,
    ParticleSpawn = 40,
    PlayerAdd = 41,
    PlayerKill = 42,
    PlayerProcessMovement = 43,
    PlayerReady = 44,
    PlayerRemove = 45,
    PlayerRespawn = 46,
    PlayerRest = 47,
    PlayerRestStart = 48,
    PlayerRestStop = 49,
    PlayerWalkToTilePath = 50,
    PlayerWalkToTilePathOverburdened = 51,
    PlayerWalkToTilePathPreview = 52,
    PlayerWalkToTilePathReset = 53,
    RemoveBlood = 54,
    Resize = 55,
    SetupGl = 56,
    StartGame = 57,
    Steamworks = 58,
    Thumbnail = 59,
    WorldLayerRendererFlush = 60
}
export declare enum FireType {
    None = 0,
    Doodad = 1,
    Fire = 2,
    Lava = 3,
    CoolingLava = 4
}
export interface ISeeds {
    base: number;
    saved: number;
    milestoneModifierSaved: number;
}
export declare enum SaveType {
    InGame = 0,
    Death = 1,
    Quit = 2,
    BackToMainMenu = 3,
    Multiplayer = 4,
    Challenge = 5,
    Traveling = 6,
    ReplayConvert = 7
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
    TileEvent = 5
}
export interface IWaterFill {
    count: number;
    tiles: Record<number, Record<number, boolean>>;
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
export declare const DEFAULT_MAP_SIZE = 512;
export declare const LINE_OF_SIGHT_RADIUS = 15;
export declare const LINE_OF_SIGHT_RADIUS_MAX = 20;
export declare const LINE_OF_SIGHT_DETAIL = 4;
export declare const INTERVAL = 16.6666;
export declare const TURN_DELAY_MAX: number;
export declare const TURN_DELAY_DEFAULT: number;
export declare const AUTO_SAVE_TIMER_DEFAULT = 2000;
export declare const AUTO_SAVE_REST_THRESHOLD = 0.75;
export declare const AUTO_SAVE_REST_THRESHOLD_MINIMUM = 200;
export declare const LIGHT_COLOR_DEFAULT: import("../utilities/Color").IRGB;
export declare const TOOLTIP_DELAY_DEFAULT = 170;
export declare const ZOOM_LEVEL_MAX = 8;
export declare const ZOOM_LEVEL_MIN = 1;
export declare const DEFAULT_ISLAND_ID = "0,0";
export declare const DEFAULT_ISLAND_POSITION: IVector2;
export declare const DEFAULT_ISLAND_TRAVEL_TIME = 150;
