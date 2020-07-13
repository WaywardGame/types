/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Doodad from "doodad/Doodad";
import { ICorpse } from "entity/creature/corpse/ICorpse";
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
import { IHighscoreOld, IOptions } from "save/data/ISaveDataGlobal";
import { ITile, ITileContainer, ITileData } from "tile/ITerrain";
import TileEvent from "tile/TileEvent";
import { IVector2, IVector3 } from "utilities/math/IVector";
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
export declare enum TickSpeed {
    Min = 10,
    Default = 50,
    Max = 80
}
export declare enum TurnMode {
    Manual = 0,
    Simulated = 1,
    RealTime = 2
}
export declare type IGameOld = Partial<Game> & {
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
    crafted: {
        [index: number]: ICrafted;
    };
    contaminatedWater: IVector3[];
    corpses: SaferArray<ICorpse>;
    creatures: SaferArray<Creature>;
    creatureSpawnTimer: number;
    doodads: SaferArray<Doodad>;
    items: Item[];
    lastCreationIds: {
        [index: number]: number;
    };
    mapGenVersion: string;
    npcs: SaferArray<NPC>;
    saveVersion: string;
    seeds: ISeeds;
    tileContainers: ITileContainer[];
    tileData: {
        [index: number]: {
            [index: number]: {
                [index: number]: ITileData[];
            };
        };
    };
    tileEvents: SaferArray<TileEvent>;
    time: TimeManager;
    wellData: {
        [index: number]: IWell | undefined;
    };
};
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
    multiplayerWorld?: IMultiplayerWorldData;
}
export interface IPlayerOptions {
    id?: number;
    identifier?: string;
    options?: IOptions;
    respawnPosition?: IVector3;
    character: ICharacter;
    crafted?: {
        [index: number]: ICrafted;
    };
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
    AmbientLightLevelUpdate = 1,
    FadeIn = 2,
    FovTransition = 3,
    FovUpdate = 4,
    FovUpdateRadius = 5,
    GamePassTurn = 6,
    GameResumed = 7,
    GameTick = 8,
    GlobalSlotReady = 9,
    HiddenMob = 10,
    InspectOverlay = 11,
    ItemEquip = 12,
    ItemEquipEffect = 13,
    ItemMovement = 14,
    ItemUnequip = 15,
    Loop = 16,
    MapDecode = 17,
    Mod = 18,
    MovementCreature = 19,
    MovementNPC = 20,
    MovementPlayerPost = 21,
    MovementPlayerPre = 22,
    MovementPlayerZPost = 23,
    MovementPlayerZPre = 24,
    MovementTileEvent = 25,
    MultiplayerDisconnect = 26,
    Notifier = 27,
    NotifierAddItem = 28,
    NotifierAddStat = 29,
    OptionHeadgear = 30,
    OptionVisionMode = 31,
    OptionZoomLevel = 32,
    Particles = 33,
    ParticleSpawn = 34,
    PlayerAdd = 35,
    PlayerKill = 36,
    PlayerProcessMovement = 37,
    PlayerReady = 38,
    PlayerRemove = 39,
    PlayerRest = 40,
    PlayerRestStart = 41,
    PlayerRestStop = 42,
    PlayerWalkToTilePath = 43,
    PlayerWalkToTilePathOverburdened = 44,
    PlayerWalkToTilePathPreview = 45,
    PlayerWalkToTilePathReset = 46,
    RemoveBlood = 47,
    Resize = 48,
    SetupGl = 49,
    StartGame = 50,
    Steamworks = 51,
    Thumbnail = 52,
    WorldLayerRendererFlush = 53
}
export declare enum FireType {
    None = 0,
    Doodad = 1,
    Fire = 2,
    Lava = 3,
    CoolingLava = 4
}
export interface ISeeds {
    base: number | string;
    saved: number;
}
export declare enum SaveType {
    InGame = 0,
    Death = 1,
    Quit = 2,
    BackToMainMenu = 3,
    Multiplayer = 4,
    Challenge = 5,
    Traveling = 6
}
export declare enum TileUpdateType {
    Batch = 0,
    Corpse = 1,
    CorpseManager = 2,
    Creature = 3,
    CreatureManager = 4,
    Doodad = 5,
    DoodadChangeType = 6,
    DoodadEmbers = 7,
    DoodadGatherReady = 8,
    DoodadGrowingStage = 9,
    DoodadManager = 10,
    DoodadOrientation = 11,
    DoodadOverHidden = 12,
    DoodadStillContainer = 13,
    Item = 14,
    Mod = 15,
    NPC = 16,
    Player = 17,
    Terrain = 18,
    TileEventManager = 19,
    Tilled = 20
}
export interface IWaterFill {
    count: number;
    tiles: {
        [index: number]: {
            [index: number]: boolean;
        };
    };
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
export declare const ISLAND_TRAVEL_TIME = 50;
