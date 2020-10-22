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
import Creature from "entity/creature/Creature";
import { IDamageInfo } from "entity/creature/ICreature";
import Entity from "entity/Entity";
import Human from "entity/Human";
import { DamageType, Defense } from "entity/IEntity";
import { Delay, SkillType } from "entity/IHuman";
import { TurnType } from "entity/player/IPlayer";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { FireType, IGameEvents, IMapRequest, IPlayOptions, ITravelingToIslandInfo, ITravelToIslandOptions, IWaterFill, RenderSource, SaveType, TileUpdateType, TurnMode, UpdateRenderFlag } from "game/IGame";
import { Quality } from "game/IObject";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import { ChallengeModifiersCollection } from "game/options/modifiers/challenge/ChallengeModifiers";
import TimeManager from "game/TimeManager";
import VotingManager from "game/VotingManager";
import Interrupt from "language/dictionary/Interrupt";
import Translation from "language/Translation";
import { CanASeeBType } from "renderer/fieldofview/IFieldOfView";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { IOptions } from "save/data/ISaveDataGlobal";
import { ISaveInfo } from "save/ISaveManager";
import { ITile, ITileArray, ITileData, TerrainType } from "tile/ITerrain";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
import "utilities/Performance";
import { IVersionInfo } from "utilities/Version";
import Island from "./Island";
export default class Game extends EventEmitter.Host<IGameEvents> {
    get isChallenge(): boolean;
    get isTravelingToIsland(): boolean;
    readonly interval = 16.6666;
    slot: number | undefined;
    previousSaveVersion: IVersionInfo | undefined;
    absoluteTime: number;
    autoSaveTimer: number;
    autoSaveLastSave: number;
    fadeInAmount: number | undefined;
    isLoadingSave: boolean;
    paused: boolean;
    playing: boolean;
    nextTickTime: number | undefined;
    lastTickTime: number | undefined;
    saveClear: boolean;
    spawnCoords: IVector3;
    tile: ITileArray;
    tileDecorations: Uint16Array;
    mapSize: number;
    mapSizeSq: number;
    currentIslandId: string;
    islands: Map<string, Island>;
    travelingToIsland: ITravelingToIslandInfo | undefined;
    customMilestoneModifiersAllowed: boolean;
    difficulty: GameMode;
    flowFieldSyncCount: number;
    shouldUpdateTablesAndWeight: boolean;
    tickSpeed: number;
    turnMode: TurnMode;
    time: TimeManager;
    saveVersion: string | undefined;
    upgrades: string[];
    version: string;
    worldId: string;
    readonly voting: VotingManager;
    readonly milestonesCollection: import("./options/modifiers/GameplayModifiersManager").GameplayModifiersCollection<import("./milestones/IMilestone").Milestone, import("./options/modifiers/milestone/MilestoneModifier").default>;
    challengeCollection?: ChallengeModifiersCollection;
    cartographyTexture: WebGLTexture;
    debugRenderer: ITextureDebugRenderer;
    glContext: WebGL2RenderingContext | null;
    glVersion: number;
    notifier: INotifier;
    particle: IParticle;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vector2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vector2;
    visible: boolean;
    lastBuildTime: number;
    lastSaveVersion: IVersionInfo;
    saveSize?: string;
    private difficultyOptions;
    private gameCanvas;
    private thumbnailResolve?;
    private _animationTimer;
    private renderingEnabled;
    private _updateRendering;
    private gameOptionsCached?;
    private playOptions;
    private ambientLightLevelCache;
    initialize(): void;
    initGl(): Promise<void>;
    setupGl(restoring: boolean): Promise<void>;
    resetWebGL(): void;
    setGlContextSize(width: number, height: number): void;
    resizeRenderer(): void;
    /**
     * Check the amount of water tiles there is connected to a supplied x/y area
     */
    checkWaterFill(x: number, y: number, z: number, needed: number, waterFill?: IWaterFill): number;
    getDailyChallengeSeed(): number;
    consumeWaterTile(x: number, y: number, z: number): void;
    checkForHiddenMob(human: Human, x: number, y: number, z: number): void;
    ensureValidPoint<T extends IVector2>(point?: T): T | undefined;
    getTileFromPoint(point: IVector3): ITile;
    getTile(x: number, y: number, z: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    getOrCreateTile(index: number): ITile;
    setPaused(paused: boolean, showChatMessage?: boolean): void;
    updateRender(source: RenderSource, flag: UpdateRenderFlag): void;
    hasRenderFlag(flag: UpdateRenderFlag): boolean;
    clearRenderFlag(flag: UpdateRenderFlag): void;
    requestAnimationFrame(source: RenderSource): void;
    /**
     * Game render loop
     * Not executed for the host in dedicated servers
     */
    gameRenderLoop: (timeStamp: number) => void;
    gameLogicLoop: () => void;
    shouldUpdateWorldRender(timeStamp: number): RenderSource | undefined;
    saveGame(saveType: SaveType, interrupt?: Interrupt): Promise<ISaveInfo | undefined>;
    updateThumbnail(): Promise<void>;
    addZoomLevel(amount: number): void;
    updateZoomLevel(): void;
    requestPlay(options: Partial<IPlayOptions> & {
        slot: number;
    }): Promise<boolean>;
    play(options: Partial<IPlayOptions>): Promise<boolean>;
    isSimulatedOrRealTimeMode(): boolean;
    getTurnMode(): TurnMode;
    setTurnMode(turnMode: TurnMode): void;
    getTickSpeed(): number;
    setTickSpeed(tickSpeed: number): void;
    synchronizeFlowFields(plys: Player[]): void;
    enableFlowFieldDebug(): void;
    resetGameState(saveType?: SaveType | false): Promise<void>;
    shouldRender(): number;
    makeLavaPassage(player: Player): TerrainType | undefined;
    makeCaveEntrance(player: Player, chance?: number): TerrainType | undefined;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    updateTablesAndWeightNextTick(): void;
    makeMiniMap(mapRequest: IMapRequest): HTMLCanvasElement;
    getBlackness(): number;
    /**
     * Note: Don't inject here. This gets called ten million times. If you want to override this functionality,
     * use `calculateAmbientLightLevel`
     */
    getAmbientLightLevel(z: number): number;
    updateAmbientLightLevel(z: number): number;
    calculateAmbientLightLevel(player: Player | undefined, z: number): number;
    updateReputation(reputation: number): void;
    getGameMode(): GameMode;
    getGameOptionsBeforeModifiers(): IGameOptions;
    getGameOptions(): IGameOptions;
    getReputation(): number;
    getMalignity(): number;
    getBenignity(): number;
    getMaxHealth(): number;
    getMaxWeight(): number;
    getTactics(): number;
    getSkillPercent(skill: SkillType): number;
    getPlayerAverage(calc: (player: Player) => number | undefined, round?: boolean): number;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean, skipCaveDirt?: boolean): void;
    isPositionFull(x: number, y: number, z: number): boolean;
    isTileFull(tile: ITile): boolean;
    isOnFire(tile: ITile): FireType;
    isTileEmpty(tile: ITile): boolean;
    isPositionEmpty(x: number, y: number, z: number): boolean;
    processWaterContamination(): void;
    getMovementFinishTime(delay?: Delay | number): number;
    getMovementProgress(timeStamp: number, finishTime: number | undefined, delay?: Delay | number): number;
    getAnimationProgress(timeStamp: number, finishTime: number | undefined, delay: Delay | number): number;
    passTurn(player: Player, turnType?: TurnType): void;
    tickRealtime(): void;
    updateView(source: RenderSource, updateFov?: boolean): void;
    /**
     * AVOID USING THIS. USE updateTablesAndWeightNextTick INSTEAD!
     * For most cases you don't need this
     */
    updateTablesAndWeight(deferTableUpdates?: boolean): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    /**
     * Gets the largest damage type weaknesses of a human or creature based on a type and damage value
     * @param defense Defense of the human or creature
     * @param damageTypes Measures the weaknesses compared to damage types passed
     * @param damage The damage value given to the human or creature
     * @returns returns DamageType array or undefined if there are no weaknesses
     */
    getGreatestWeaknesses(defense: Defense, damageTypes: DamageType, damage: number): DamageType[];
    damage(target: Human | Creature, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    isPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    getPlayersAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtPosition(position: IVector3, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersThatSeePosition(x: number, y: number, z: number): Player[];
    canASeeB(type: CanASeeBType, sourceEntity: Entity | undefined, aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number): boolean;
    /**
     * Gets the nearest player based on x/y/z coordinates.
     * @param x The x coord to get the closest player.
     * @param y The y coord to get the closest player.
     * @param z The z coord to get the closest player.
     * @param canSee If set to true, check if the player can see the x/y/z coords. Defaults to false.
     */
    getNearestPlayer(x: number, y: number, z?: number, canSee?: boolean, includeConnecting?: boolean): {
        player?: Player;
        distance?: number;
    };
    getPlayerByPid(pid: number): Player | undefined;
    getPlayerByIdentifier(identifier: string, includeAbsent?: boolean): Player | undefined;
    getPlayerByName(name: string): Player | undefined;
    getValidPlayerName(name: string | undefined): string;
    getHeight(z0: number, z1: number, d: number): number;
    /**
     * Calculates the light level of a tile.
     * @returns 32bit number representing RED GREEN BLUE ALPHA
     */
    calculateTileLightLevel(tile: ITile, x: number, y: number, z: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    setupSave(): void;
    onGlobalSlotReady(): Promise<void>;
    directionToMovement(direction: Direction): IVector2;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation, player?: boolean): void;
    updateOption(player: Player | undefined, id: keyof IOptions, value: boolean | number): void;
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number, tileUpdateType: TileUpdateType, updatedRenderer?: boolean): void;
    emitTileUpdate(tile: ITile, x: number, y: number, z: number, tileUpdateType: TileUpdateType, updatedRenderer?: boolean): void;
    packGround(x: number, y: number, z: number): void;
    getRandomQuality(bonusQuality?: number): Quality.None | Quality.Remarkable | Quality.Exceptional | Quality.Legendary;
    getQualityDurabilityBonus(quality: Quality, itemDurability: number, getMax?: boolean): number;
    doLavaEvents(x: number, y: number, z: number): void;
    isFlammable(x: number, y: number, z: number): boolean;
    getCameraPosition(): IVector2;
    getExactCameraPosition(): Vector2;
    restartDedicatedServer(): boolean;
    travelToIslandId(islandId: string, options?: ITravelToIslandOptions): Promise<void>;
    travelToIslandPosition(position: IVector2, options?: ITravelToIslandOptions): Promise<void>;
    travelTowardsIsland(direction: Direction, options?: ITravelToIslandOptions): Promise<void>;
    protected onRestEnd(): void;
    private updateOptionInternal;
    private tick;
    private processTickFlags;
    private updateEntityFov;
    private processTimers;
    private processAutoSave;
    private isTimeForAutosave;
    private isAutosaveWithinRestThreshold;
    private runRandomEvents;
    private prePlay;
    private playPostSeed;
    private render;
    private createWorld;
    private createWorldRenderer;
    private initializeGameState;
    private startGame;
    private initializeDedicatedServer;
    private dedicatedServerExit;
    private dedicatedServerNewGame;
}
