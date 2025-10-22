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
import { Uninit } from "@wayward/game/Uninit";
import CommandManager from "@wayward/game/command/CommandManager";
import type { IGameEvents, IGameUpgradeState, IMovementTime, IPlayOptions, ISynchronizeState } from "@wayward/game/game/IGame";
import { PauseSource, SaveType, TurnMode } from "@wayward/game/game/IGame";
import { TickHelper } from "@wayward/game/game/TickHelper";
import type { BiomeTypes } from "@wayward/game/game/biome/IBiome";
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { Defense } from "@wayward/game/game/entity/IEntity";
import { DamageType } from "@wayward/game/game/entity/IEntity";
import type { Delay } from "@wayward/game/game/entity/IHuman";
import ActionExecutor from "@wayward/game/game/entity/action/ActionExecutor";
import IActionContext from "@wayward/game/game/entity/action/IActionContext";
import PlayerManager from "@wayward/game/game/entity/player/PlayerManager";
import IslandManager from "@wayward/game/game/island/IslandManager";
import { AutoSave } from "@wayward/game/game/meta/AutoSave";
import { SaveLoad } from "@wayward/game/game/meta/SaveLoad";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import { MilestoneManager } from "@wayward/game/game/milestones/MilestoneManager";
import type { IGameOptions, IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import { GameMode } from "@wayward/game/game/options/IGameOptions";
import type { GameplayModifiersCollection } from "@wayward/game/game/options/modifiers/GameplayModifiersManager";
import type { ChallengeModifiersCollection } from "@wayward/game/game/options/modifiers/challenge/ChallengeModifiers";
import type MilestoneModifier from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import ReferenceManager from "@wayward/game/game/reference/ReferenceManager";
import TimeManager from "@wayward/game/game/time/TimeManager";
import LanguageManager from "@wayward/game/language/LanguageManager";
import ModManager from "@wayward/game/mod/ModManager";
import type { IRendererOrigin } from "@wayward/game/renderer/context/RendererOrigin";
import type { WebGlContext } from "@wayward/game/renderer/platform/webgl/WebGlContext";
import ReplayManager from "@wayward/game/replay/ReplayManager";
import SaveManager from "@wayward/game/save/SaveManager";
import type { IOptions } from "@wayward/game/save/data/ISaveDataGlobal";
import type { ISerializer } from "@wayward/game/save/serializer/ISerializer";
import type StringTokenizer from "@wayward/game/save/serializer/StringTokenizer";
import Steamworks from "@wayward/game/steamworks/Steamworks";
import type { IVersionInfo } from "@wayward/utilities/Version";
import Version from "@wayward/utilities/Version";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import { WebWorkerManager } from "@wayward/game/webWorker/WebWorkerManager";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { Random } from "@wayward/utilities/random/Random";
export declare class Game extends EventEmitter.Host<IGameEvents> {
    get isChallenge(): boolean;
    private difficultyOptions;
    customMilestoneModifiersAllowed: boolean;
    difficulty: GameMode;
    gameplayModifierData: SaferNumberIndexedObject<any>;
    history: IActionContext[];
    replay: ReplayManager | undefined;
    saveVersion: Version.String;
    tickSpeed: number;
    time: TimeManager;
    turnMode: TurnMode;
    upgrades: string[];
    originalPlayOptions: Partial<IPlayOptions>;
    worldId: string;
    /**
     * The version the save was originally created on
     */
    version: Version.String;
    /**
     * Set when a game save upgrade is running
     */
    upgradeState?: IGameUpgradeState;
    readonly interval = 16.6666;
    readonly autoSave: AutoSave;
    readonly commandManager: CommandManager;
    readonly languageManager: LanguageManager;
    readonly milestoneManager: MilestoneManager;
    readonly modManager: ModManager;
    readonly saveLoad: SaveLoad;
    readonly saveManager: SaveManager;
    readonly steamworks: Steamworks;
    readonly uninit: Uninit;
    readonly webWorkerManager: WebWorkerManager;
    /**
     * Helps instruct when to increment the time in simulated and real-time mode
     */
    readonly tickHelper: TickHelper;
    get actionExecutor(): typeof ActionExecutor;
    readonly islands: IslandManager;
    readonly playerManager: PlayerManager;
    readonly references: ReferenceManager;
    absoluteTime: number;
    challengeCollection?: ChallengeModifiersCollection;
    initialThumbnailTimeout: number | undefined;
    milestonesCollection?: GameplayModifiersCollection<MilestoneModifier, Milestone>;
    paused: Set<PauseSource>;
    playing: boolean;
    resetting: Promise<void> | undefined;
    previousSaveVersion: IVersionInfo;
    saveClear: boolean;
    saveSize?: string;
    slot: number | undefined;
    tileDecorations: Uint16Array;
    protected stringTokenizer: StringTokenizer | undefined;
    private gameOptionsCached?;
    private synchronizeStateId;
    visible: boolean;
    webGlContext: WebGlContext | undefined;
    private rendererCanvasElement;
    private initializedGlCount;
    private gameLoopLogicTimer;
    private readonly serializedSizeTracker;
    initialize(): Promise<void>;
    uninitialize(): Promise<void>;
    toString(): string;
    get isPaused(): boolean;
    private get shouldCreateRenderer();
    /**
     * Get humans in the game; ie, players, NPCs, and other non-player humans.
     * Parameters include additional players that may not be relevant, such as ghosts, connecting players, absent players, the dedicated server fake player.
     * Only want players? @see {@link PlayerManager.getAll}
     * @param includeGhosts True to include players that are ghosts
     * @param includeConnecting True to include players that are connecting
     * @param includeDedicatedServer True to include the dedicated server fake player
     * @param includeAbsent True to include the absent players
     * @returns Array of Human objects
     */
    getPlayingHumans(includeGhosts?: boolean, includeConnecting?: boolean, includeDedicatedServer?: boolean, includeAbsent?: boolean): Human[];
    getNonPlayerHumans(excludeTransientIslands?: boolean): Human[];
    getPlayingHuman(identifier: string): Human | undefined;
    /**
     * It's important that this is lowest, so that it happens after modManager's globalSlotReady event
     */
    globalSlotReady(): void;
    initializeRenderer(options?: {
        clearSpritePackCache?: boolean;
    }): Promise<void>;
    /**
     * Initializes WebGl
     * @param forceWebGlVersion Set to force a specific webgl version
     */
    private initializeWebGl;
    /**
     * Initializes WebGpu
     */
    private initializeWebGpu;
    loseWebGlContext(): void;
    updateRendererSizes(): void;
    private setRendererContextSize;
    private setRendererCanvasSize;
    updateRendererViewportSize(): void;
    setPaused(pause: boolean, source: PauseSource): void;
    onPlayingEntityChange(_manager: any, entity: Entity): void;
    gameLogicLoop: () => void;
    /**
     * Stops the game logic loop timer
     */
    stopGameLogicLoop(): void;
    /**
     * Triggers a game logic loop to run in the next javascript event loop
     */
    triggerGameLogicLoop(): void;
    get isSimulatedOrRealTimeMode(): boolean;
    getTurnMode(): TurnMode;
    setTurnMode(turnMode: TurnMode): void;
    /**
     * Changes the turn mode if it's not correct
     */
    ensureTurnMode(): void;
    isTurnModeAllowed(turnMode: TurnMode): boolean;
    getTickSpeed(): number;
    setTickSpeed(tickSpeed: number): void;
    selectBiome(position: IVector2 | undefined, random: Random): BiomeTypes;
    getGameMode(): GameMode;
    getGameOptionsBeforeModifiers(): IGameOptions;
    getCustomGameOptionsPartial(): IGameOptionsPartial;
    /** A game options modifier that always returns an empty array by default, to be injected into */
    getAdditionalGameOptionsSources(): IGameOptionsPartial[];
    getGameOptions(): IGameOptions;
    uncacheGameOptions(): void;
    updateGameOptions(gameOptions: IGameOptions): void;
    initializeGameOptions(seed: string | number, mode?: GameMode, options?: IGameOptions, milestoneModifiers?: Set<Milestone>): void;
    initializeModifiers(): void;
    getMovementTime(delay: Delay | number, timestamp?: number): IMovementTime;
    getMovementProgress(timeStamp: number, movementTime: IMovementTime | undefined): number;
    getSynchronizeState(identifier: string): ISynchronizeState;
    synchronizeState(synchronizeState: ISynchronizeState): void;
    /**
     * Gets the largest damage type weaknesses of a human or creature based on a type and damage value
     * @param defense Defense of the human or creature
     * @param damageTypes Measures the weaknesses compared to damage types passed
     * @param damage The damage value given to the human or creature
     * @returns returns DamageType array or undefined if there are no weaknesses
     */
    getGreatestWeaknesses(defense: Defense, damageTypes: DamageType, damage: number): DamageType[];
    updateOption(human: Human | undefined, id: keyof IOptions, value: boolean | number): void;
    /**
     * Do not call this directly. Use updateOption instead
     */
    updateOptionInternal(id: keyof IOptions, value: boolean | number, human?: Human): void;
    /**
     * Creates the renderer.
     * Should only be called once when starting / loading a save
     */
    createRenderer(origin: IRendererOrigin): Promise<void>;
    /**
     * Resets the game state. This should be called when returning to the main menu from a game and/or right before starting/joining a game.
     * This method should be able to be called multiple times in a row and nothing unexpected should occur.
     * @param saveType Saves the game with the specified save type. Set to false to not save. Defaults to BackToMainMenu.
     * @param shouldDisconnect Marks if the game should disconnect from multiplayer. Defaults to true.
     * @param hasDisconnected Marks if the game just disconnected from multiplayer. Defaults to false.
     */
    reset(saveType?: SaveType | false, shouldDisconnect?: boolean, hasDisconnected?: boolean): Promise<void>;
    testFastForwardSpeed(ticks?: number, biomeType?: BiomeType): Promise<void>;
    /**
     * This is called on each game tick (16ms) when in simulated mode.
     * Time ticks are desychronized with island ticks.
     * Each island can tick on its own schedule.
     */
    private processSimulatedTick;
    /**
     * This is called on each game tick (16ms) when in real-time mode.
     * Time ticks are synchronized with island ticks.
     * All islands tick at the same time.
     */
    private processRealtimeTick;
    /**
     * Called when an Island is ticking.
     * Always tick time immediately in manual mode.
     * Schedules a time tick in simulated mode.
     * @param isIslandTimeAdjustment True if it's due to island fast forwarding
     */
    tickTime(isIslandTimeAdjustment: boolean): void;
    addHistory(executor: Entity, context: IActionContext): void;
    /**
     * Serialization tracking
     */
    preSerializeObject(serializer: ISerializer): void;
    postSerializeObject(serializer: ISerializer): void;
    preSerializeProperty(serializer: ISerializer, key: string): void;
    postSerializeProperty(serializer: ISerializer, key: string): void;
}
