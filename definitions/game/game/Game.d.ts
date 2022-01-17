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
import EventEmitter from "event/EventEmitter";
import type Entity from "game/entity/Entity";
import type { Defense } from "game/entity/IEntity";
import { DamageType } from "game/entity/IEntity";
import { Delay, SkillType } from "game/entity/IHuman";
import type { TurnType } from "game/entity/player/IPlayer";
import type Player from "game/entity/player/Player";
import type { IGameEvents, IPlayOptions, ISynchronizeState } from "game/IGame";
import { SaveType, TickFlag, TurnMode, PauseSource } from "game/IGame";
import type Island from "game/island/Island";
import IslandManager from "game/island/IslandManager";
import type { MultiplayerLoadingDescription } from "game/meta/Loading";
import type { Milestone } from "game/milestones/IMilestone";
import type { IGameOptions } from "game/options/IGameOptions";
import { GameMode } from "game/options/IGameOptions";
import type { ChallengeModifiersCollection } from "game/options/modifiers/challenge/ChallengeModifiers";
import type { GameplayModifiersCollection } from "game/options/modifiers/GameplayModifiersManager";
import type MilestoneModifier from "game/options/modifiers/milestone/MilestoneModifier";
import ReferenceManager from "game/reference/ReferenceManager";
import TimeManager from "game/time/TimeManager";
import VotingManager from "game/VotingManager";
import { RenderSource } from "renderer/IRenderer";
import type ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import type WebGlContext from "renderer/WebGlContext";
import ReplayManager from "replay/ReplayManager";
import type { IOptions } from "save/data/ISaveDataGlobal";
import type StringTokenizer from "save/serializer/StringTokenizer";
import ItemStylesheetHandler from "ui/screen/screens/game/util/item/ItemStylesheet";
import type { IVersionInfo } from "utilities/Version";
export declare class Game extends EventEmitter.Host<IGameEvents> {
    get isChallenge(): boolean;
    islands: IslandManager;
    customMilestoneModifiersAllowed: boolean;
    difficulty: GameMode;
    shouldUpdateTablesAndWeight: boolean;
    tickSpeed: number;
    turnMode: TurnMode;
    time: TimeManager;
    references: ReferenceManager;
    replay: ReplayManager | undefined;
    originalPlayOptions: Partial<IPlayOptions>;
    saveVersion: string;
    upgrades: string[];
    /**
     * The version the save was originally created on
     */
    version: string;
    worldId: string;
    private difficultyOptions;
    readonly interval = 16.6666;
    slot: number | undefined;
    absoluteTime: number;
    paused: Set<PauseSource>;
    playing: boolean;
    nextTickTime: number | undefined;
    lastTickTime: number | undefined;
    saveClear: boolean;
    tileDecorations: Uint16Array;
    initialThumbnailTimeout: NodeJS.Timer | undefined;
    mapSize: number;
    mapSizeSq: number;
    readonly itemStylesheetHandler: ItemStylesheetHandler | undefined;
    readonly voting: VotingManager;
    milestonesCollection?: GameplayModifiersCollection<MilestoneModifier, Milestone>;
    challengeCollection?: ChallengeModifiersCollection;
    debugRenderer: ITextureDebugRenderer | undefined;
    webGlContext: WebGlContext | undefined;
    visible: boolean;
    previousSaveVersion: IVersionInfo;
    saveSize?: string;
    canvas: HTMLCanvasElement | undefined;
    private queueDedicatedServerFovUpdate?;
    private gameOptionsCached?;
    private synchronizeStateId;
    protected stringTokenizer: StringTokenizer | undefined;
    toString(): string;
    get isPaused(): boolean;
    initializeRenderer(): void;
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
    gameLogicLoop: () => void;
    isSimulatedOrRealTimeMode(): boolean;
    getTurnMode(): TurnMode;
    setTurnMode(turnMode: TurnMode): void;
    getTickSpeed(): number;
    setTickSpeed(tickSpeed: number): void;
    updateTablesAndWeightNextTick(): void;
    updateReputation(reputation: number): void;
    getGameMode(): GameMode;
    getGameOptionsBeforeModifiers(): IGameOptions;
    getGameOptions(): IGameOptions;
    updateGameUpdates(gameOptions: IGameOptions): void;
    initializeGameOptions(seed: string | number, mode?: GameMode, options?: IGameOptions, milestoneModifiers?: Set<Milestone>): void;
    initializeModifiers(): void;
    getReputation(): number;
    getMalignity(): number;
    getBenignity(): number;
    getMaxHealth(): number;
    getMaxWeight(): number;
    getTactics(): number;
    getSkillPercent(skill: SkillType): number;
    getPlayerAverage(calc: (player: Player) => number | undefined, round?: boolean): number;
    getMovementFinishTime(delay?: Delay | number): number;
    getMovementProgress(timeStamp: number, finishTime: number | undefined, delay?: Delay | number): number;
    getAnimationProgress(timeStamp: number, finishTime: number | undefined, delay: Delay | number): number;
    getSynchronizeState(identifier: string): ISynchronizeState;
    synchronizeState(synchronizeState: ISynchronizeState): void;
    /**
     * Marks that the player had a turn
     * In manual turn mode, it will tick the players stat timers & the game
     * @param player
     * @param turnType
     */
    passTurn(player: Player, turnType?: TurnType): void;
    tickRealtime(): void;
    updateView(source: RenderSource, updateFov?: boolean, computeSpritesNow?: boolean): void;
    /**
     * AVOID USING THIS. USE updateTablesAndWeightNextTick INSTEAD!
     * For most cases you don't need this
     */
    updateTablesAndWeight(deferTableUpdates?: boolean): void;
    /**
     * Gets the largest damage type weaknesses of a human or creature based on a type and damage value
     * @param defense Defense of the human or creature
     * @param damageTypes Measures the weaknesses compared to damage types passed
     * @param damage The damage value given to the human or creature
     * @returns returns DamageType array or undefined if there are no weaknesses
     */
    getGreatestWeaknesses(defense: Defense, damageTypes: DamageType, damage: number): DamageType[];
    updateOption(player: Player | undefined, id: keyof IOptions, value: boolean | number): void;
    /**
     * Do not call this directly. Use updateOption instead
     */
    updateOptionInternal(id: keyof IOptions, value: boolean | number, player?: Player): void;
    /**
     * Collection of things to perform on each tick
     */
    tick(ticks?: number, realPlayers?: Player[], tickFlag?: TickFlag): void;
    /**
     * Collection of things to perform on each tick
     */
    tickAsync(island: Island, ticks: number, realPlayers: Player[] | undefined, tickFlag: TickFlag | undefined, onProgress: (progess: number) => Promise<void>): Promise<void>;
    createRenderer(entity: Entity): void;
    /**
     * Resets the game state. This should be called when returning to the main menu from a game and/or right before starting/joining a game.
     * This method should be able to be called multiple times in a row and nothing unexpected should occur.
     * @param saveType Saves the game with the specified save type. Set to false to not save. Defaults to BackToMainMenu.
     * @param shouldDisconnect Marks if the game should disconnect from multiplayer. Defaults to true.
     * @param hasDisconnected Marks if the game just disconnected from multiplayer. Defaults to false.
     */
    reset(saveType?: SaveType | false, shouldDisconnect?: boolean, hasDisconnected?: boolean): Promise<void>;
    fastForwardIsland(island: Island, ticks: number, multiplayerLoadingDescription?: MultiplayerLoadingDescription): Promise<void>;
}
