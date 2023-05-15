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
/// <reference types="node" />
import CommandManager from "command/CommandManager";
import EventEmitter from "event/EventEmitter";
import type { BiomeTypes } from "game/biome/IBiome";
import { BiomeType } from "game/biome/IBiome";
import type Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import type { Defense } from "game/entity/IEntity";
import { DamageType } from "game/entity/IEntity";
import type { Delay } from "game/entity/IHuman";
import type { TurnTypeFlag } from "game/entity/player/IPlayer";
import PlayerManager from "game/entity/player/PlayerManager";
import type { IGameEvents, IMovementTime, IPlayOptions, ISynchronizeState } from "game/IGame";
import { PauseSource, SaveType, TickFlag, TurnMode } from "game/IGame";
import type Island from "game/island/Island";
import IslandManager from "game/island/IslandManager";
import { AutoSave } from "game/meta/AutoSave";
import type { MultiplayerLoadingDescription } from "game/meta/Loading";
import { SaveLoad } from "game/meta/SaveLoad";
import { Milestone } from "game/milestones/IMilestone";
import { MilestoneManager } from "game/milestones/MilestoneManager";
import type { IGameOptions } from "game/options/IGameOptions";
import { GameMode } from "game/options/IGameOptions";
import type { ChallengeModifiersCollection } from "game/options/modifiers/challenge/ChallengeModifiers";
import type { GameplayModifiersCollection } from "game/options/modifiers/GameplayModifiersManager";
import type MilestoneModifier from "game/options/modifiers/milestone/MilestoneModifier";
import ReferenceManager from "game/reference/ReferenceManager";
import TimeManager from "game/time/TimeManager";
import ModManager from "mod/ModManager";
import type { IRendererOrigin } from "renderer/context/RendererOrigin";
import type WebGlContext from "renderer/WebGlContext";
import ReplayManager from "replay/ReplayManager";
import type { IOptions } from "save/data/ISaveDataGlobal";
import SaveManager from "save/SaveManager";
import type StringTokenizer from "save/serializer/StringTokenizer";
import Steamworks from "steamworks/Steamworks";
import ItemStylesheetHandler from "ui/screen/screens/game/util/item/ItemStylesheet";
import { Uninit } from "Uninit";
import type { IVector2 } from "utilities/math/IVector";
import type { Random } from "utilities/random/Random";
import type { IVersionInfo } from "utilities/Version";
import { WebWorkerManager } from "webWorker/WebWorkerManager";
export declare class Game extends EventEmitter.Host<IGameEvents> {
    get isChallenge(): boolean;
    private difficultyOptions;
    customMilestoneModifiersAllowed: boolean;
    difficulty: GameMode;
    gameplayModifierData: Record<number, any>;
    replay: ReplayManager | undefined;
    saveVersion: string;
    shouldUpdateTablesAndWeight: boolean;
    tickSpeed: number;
    time: TimeManager;
    turnMode: TurnMode;
    upgrades: string[];
    originalPlayOptions: Partial<IPlayOptions>;
    worldId: string;
    /**
     * The version the save was originally created on
     */
    version: string;
    readonly interval = 16.6666;
    readonly autoSave: AutoSave;
    readonly commandManager: CommandManager;
    readonly milestoneManager: MilestoneManager;
    readonly modManager: ModManager;
    readonly saveLoad: SaveLoad;
    readonly saveManager: SaveManager;
    readonly steamworks: Steamworks;
    readonly uninit: Uninit;
    readonly webWorkerManager: WebWorkerManager;
    readonly islands: IslandManager;
    readonly playerManager: PlayerManager;
    readonly references: ReferenceManager;
    absoluteTime: number;
    challengeCollection?: ChallengeModifiersCollection;
    initialThumbnailTimeout: NodeJS.Timer | undefined;
    lastTickTime: number | undefined;
    milestonesCollection?: GameplayModifiersCollection<MilestoneModifier, Milestone>;
    nextTickTime: number | undefined;
    paused: Set<PauseSource>;
    playing: boolean;
    previousSaveVersion: IVersionInfo;
    saveClear: boolean;
    saveSize?: string;
    slot: number | undefined;
    tileDecorations: Uint16Array;
    protected stringTokenizer: StringTokenizer | undefined;
    private gameOptionsCached?;
    private synchronizeStateId;
    readonly itemStylesheetHandler: ItemStylesheetHandler | undefined;
    visible: boolean;
    webGlContext: WebGlContext | undefined;
    canvasElement: HTMLCanvasElement | undefined;
    private gameLoopLogicTimer;
    initialize(): Promise<void>;
    uninitialize(): Promise<void>;
    toString(): string;
    get isPaused(): boolean;
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
    getNonPlayerHumans(): Human[];
    getPlayingHuman(identifier: string): Human<number> | undefined;
    initializeRenderer(): void;
    /**
     * It's important that this is lowest, so that it happens after modManager's globalSlotReady event
     */
    globalSlotReady(): void;
    /**
     * Initializes WebGl
     * @param forceWebGlVersion Set to force a specific webgl version
     */
    initGl(forceWebGlVersion?: number): Promise<void>;
    /**
     * Compiles webgl programs / shaders and creates renderers
     */
    setupGl(restoring: boolean): Promise<void>;
    resetWebGL(): void;
    setGlContextSize(): void;
    resizeRenderer(): void;
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
    isSimulatedOrRealTimeMode(): boolean;
    getTurnMode(): TurnMode;
    setTurnMode(turnMode: TurnMode): void;
    /**
     * Changes the turn mode if it's not correct
     */
    ensureTurnMode(): void;
    isTurnModeAllowed(turnMode: TurnMode): boolean;
    getTickSpeed(): number;
    setTickSpeed(tickSpeed: number): void;
    selectBiome(position: IVector2, random: Random): BiomeTypes;
    getGameMode(): GameMode;
    getGameOptionsBeforeModifiers(): IGameOptions;
    getGameOptions(): IGameOptions;
    updateGameOptions(gameOptions: IGameOptions): void;
    initializeGameOptions(seed: string | number, mode?: GameMode, options?: IGameOptions, milestoneModifiers?: Set<Milestone>): void;
    initializeModifiers(): void;
    getMovementTime(delay: Delay | number, timestamp?: number): IMovementTime;
    getMovementProgress(timeStamp: number, movementTime: IMovementTime | undefined): number;
    getSynchronizeState(identifier: string): ISynchronizeState;
    synchronizeState(synchronizeState: ISynchronizeState): void;
    /**
     * Marks that the human had a turn
     * In manual turn mode, it will tick the humans stat timers & the game
     */
    passTurn(human: Human, turnType?: TurnTypeFlag, dueToAction?: boolean): void;
    tickRealtime(): void;
    updateTablesAndWeight(): void;
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
     * Collection of things to perform on each tick
     */
    tick(ticks?: number, playingHumans?: Human[], tickFlag?: TickFlag, dueToAction?: boolean): void;
    /**
     * Collection of things to perform on each tick
     */
    tickAsync(island: Island, ticks: number, playingHumans: Human<number>[] | undefined, tickFlag: TickFlag | undefined, onProgress: (progess: number) => Promise<void>, dueToAction?: boolean): Promise<void>;
    /**
     * Creates the renderer.
     * Should only be called once when starting / loading a save
     */
    createRenderer(origin: IRendererOrigin): void;
    /**
     * Resets the game state. This should be called when returning to the main menu from a game and/or right before starting/joining a game.
     * This method should be able to be called multiple times in a row and nothing unexpected should occur.
     * @param saveType Saves the game with the specified save type. Set to false to not save. Defaults to BackToMainMenu.
     * @param shouldDisconnect Marks if the game should disconnect from multiplayer. Defaults to true.
     * @param hasDisconnected Marks if the game just disconnected from multiplayer. Defaults to false.
     */
    reset(saveType?: SaveType | false, shouldDisconnect?: boolean, hasDisconnected?: boolean): Promise<void>;
    fastForwardIsland(island: Island, ticks: number, multiplayerLoadingDescription?: MultiplayerLoadingDescription): Promise<void>;
    testFastForwardSpeed(ticks?: number, biomeType?: BiomeType): Promise<void>;
    unlockAllMilestones(): void;
}
