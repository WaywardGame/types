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
import type { IEventEmitter } from "event/EventEmitter";
import type Doodad from "game/doodad/Doodad";
import type { ActionType } from "game/entity/action/IAction";
import Creature from "game/entity/creature/Creature";
import { CreatureType } from "game/entity/creature/ICreature";
import Human from "game/entity/Human";
import { EntityType, IStatChangeInfo, StatusEffectChangeReason, StatusType } from "game/entity/IEntity";
import type { ICheckUnderOptions, IRestData } from "game/entity/IHuman";
import { EquipType, RestCancelReason, SkillType } from "game/entity/IHuman";
import type { IStat } from "game/entity/IStats";
import { Stat } from "game/entity/IStats";
import type { ILoadOnIslandOptions, IMovementIntent, IPlayerEvents } from "game/entity/player/IPlayer";
import { TurnType } from "game/entity/player/IPlayer";
import MessageManager from "game/entity/player/MessageManager";
import NoteManager from "game/entity/player/note/NoteManager";
import QuestManager from "game/entity/player/quest/QuestManager";
import type { StatChangeCurrentTimerStrategy, StatChangeTimerFactory } from "game/entity/StatFactory";
import { TileUpdateType } from "game/IGame";
import type { IMoveToIslandOptions, IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { IContainer, RecipeLevel } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import { Milestone } from "game/milestones/IMilestone";
import type { IGameOptionsPlayer } from "game/options/IGameOptions";
import Message from "language/dictionary/Message";
import type ExploreMap from "renderer/exploreMap/ExploreMap";
import FieldOfView from "renderer/fieldOfView/FieldOfView";
import type { CanASeeBType } from "renderer/fieldOfView/IFieldOfView";
import type IClientStore from "save/clientStore/IClientStore";
import type { IOptions } from "save/data/ISaveDataGlobal";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
import type { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/old/IOldUi";
import { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import type { IVector4 } from "utilities/math/Vector4";
export default class Player extends Human implements IUnserializedCallback {
    event: IEventEmitter<this, IPlayerEvents>;
    readonly entityType: EntityType.Player;
    readonly tileUpdateType = TileUpdateType.Player;
    absentLastUsedTime: number;
    containerSortInfo: Record<string, IContainerSortInfo>;
    dialogContainerInfo: Record<number, IDialogInfo>;
    dialogInfo: Record<string, IDialogInfo>;
    hintSeen: boolean[];
    isConnecting: boolean;
    islandId: IslandId;
    traveled: boolean;
    isMoving: boolean;
    lastAttackedBy: Human | Creature | undefined;
    movementCompleteZ: number | undefined;
    name: string;
    quickSlotInfo: IQuickSlotInfo[];
    realTimeTickActionDelay: number;
    revealedItems: Record<number, boolean>;
    respawnPoint: IVector4 | undefined;
    tamedCreatures: Map<string, number[]>;
    turns: number;
    walkSoundCounter: number;
    milestoneModifiers: Set<Milestone>;
    quests: QuestManager;
    messages: MessageManager;
    notes: NoteManager;
    exploredMap: ExploreMap[] | undefined;
    finishedMovingClientside: boolean;
    nextX: number;
    nextY: number;
    movementProgress: number;
    movementFinishTime: number;
    nextMoveTime: number;
    nextMoveDirection: Direction.Cardinal | Direction.None | undefined;
    displayCreature?: CreatureType;
    private readonly milestonesCollection;
    private gameOptionsCached?;
    private handEquippedToLast;
    private cachedMovementPenalty?;
    private updateTablesOnNoInput?;
    constructor(identifier?: string);
    onUnserialized(): void;
    delete(): void;
    get island(): Island;
    get clientStore(): IClientStore;
    setOptions(options: IOptions): void;
    createNoteManager(): NoteManager;
    createMessageManager(): MessageManager;
    createQuestManager(): QuestManager;
    getGameOptionsBeforeModifiers(): IGameOptionsPlayer;
    getGameOptions(): IGameOptionsPlayer;
    getDisplayCreature(): CreatureType | undefined;
    setStatChangeTimerIgnoreDifficultyOptions(stat: Stat | IStat, timer: number, amt?: number): void;
    setStatus(status: StatusType, hasStatus: boolean, reason: StatusEffectChangeReason): void;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): boolean;
    /**
     * Updates caused by status effects such as bleeding, poison, and burns.
     */
    tickStatuses(): void;
    resetMovementStates(): void;
    changeId(id: number): void;
    setPaddling(item: Item | undefined, extinguishTorches?: boolean): boolean;
    checkSkillMilestones(): void;
    addMilestone(milestone: Milestone, data?: number, update?: boolean): void;
    hasTamedCreature(creature: Creature): boolean;
    hasHandToUse(): boolean;
    getAndSwitchHandToUse(): EquipType | undefined;
    /**
     * Ensure handToUse is valid given the players options
     */
    updateHandToUse(): void;
    equip(item: Item, slot: EquipType, internal?: boolean, switchingHands?: boolean): boolean;
    unequip(item: Item, internal?: boolean, skipMessage?: boolean, skipRevertItem?: boolean): void;
    unequipAll(): void;
    updateMovementIntent(movementIntent: IMovementIntent): boolean;
    resetStatTimers(type?: StatChangeCurrentTimerStrategy): void;
    /**
     * Gets the max health of the player.
     *
     * Returns the result of the `"getMaxHealth"` event, or the `max` in `Stat.Health`,
     * if the result of the hook is `undefined`.
     */
    getMaxHealth(): number;
    getCraftingDifficulty(level: RecipeLevel): number;
    /**
     * Gets the strength of the player.
     *
     * Returns the result of `Hook.GetPlayerStrength`, or the `max` in `Stat.Health`,
     * if the result of the hook is `undefined`.
     *
     * Used internally for `Stat.Weight.max`
     */
    getMaxWeight(): number;
    load(): void;
    setup(spawnPoint: IVector3): void;
    updateReputation(reputation: number): void;
    getWeightOrStaminaMovementPenalty(): number;
    /**
     * Check if there is a still in front of the player.
     * @param withWater Check if the still has water in it?
     * @param isLit Check if the still is lit?
     */
    checkForStill(withWater?: boolean, isLit?: boolean): boolean;
    checkForWell(): boolean;
    checkForGather(): Doodad | undefined;
    onNoInput(): void;
    updateTables(deferUpdate?: boolean): void;
    updateCraftTable(adjacentContainers?: IContainer[]): void;
    updateDismantleTable(adjacentContainers?: IContainer[], force?: boolean): void;
    updateWeight(source: string): void;
    updateTablesAndWeight(source: string, deferTableUpdates?: boolean): void;
    checkReputationMilestones(): void;
    checkTravelMilestones(): void;
    hurtHands(damageMessage: Message, toolMessage?: Message, hurtHandsMessage?: Message): boolean;
    setTamedCreatureEnemy(enemy: Player | Creature): void;
    setPosition(point: IVector3): void;
    getNextPosition(): IVector3;
    isGhost(): boolean;
    isDead(): boolean;
    /**
     * Returns true if this is the special dedicated server player
     */
    isServer(): boolean;
    isMultiplayerHost(): boolean;
    getName(): import("../../../language/impl/TranslationImpl").default;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    markAsExplored(points: IVector2[]): boolean | undefined;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction, contextActionSlot?: number, contextActionType?: ActionType, canUseProtected?: boolean): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    passTurn(turnType?: TurnType): void;
    tick(isPassTurn?: boolean): void;
    kill(): void;
    respawn(reset: boolean): Promise<void>;
    getMovementProgress(): number;
    checkUnder(inFacingDirection?: boolean, options?: ICheckUnderOptions): ICheckUnderOptions;
    walkAlongPath(path: IVector2[] | undefined, force?: boolean): void;
    /**
     * This is only ran on the server
     */
    processInput(timeStamp: number): IMovementIntent | undefined;
    /**
     * Returns true if the player changed their facing direction.
     */
    faceDirection(direction: Direction.Cardinal | Direction.None, turnDelay?: number): boolean;
    revealItem(itemType: ItemType): void;
    getMovementFinishTime(timeStamp: number): number;
    healthSyncCheck(reason: string): void;
    /**
     * This needs to be called whenever the player's strength requires an update.
     *
     * Example usage includes:
     * 1. When max health changes. Max health is used in calculating the strength.
     * 2. If a mod is using the `GetPlayerStrength` hook and the calculation needs to be refreshed.
     */
    updateStrength(): void;
    /**
     * Check if a position is marked as explored
     * Only use this clientside
     */
    isExploredClientSide(x: number, y: number, z: number): boolean;
    /**
     * Multiply the reputation amount with whatever is set via milestone modifiers or custom game options for this player.
     * @param reputation A number or undefined to be mutiplied.
     * @returns A number or undefined if a reputation number was not passed.
     */
    getReputationMultiplier(reputation: number | undefined): number | undefined;
    /**
     * @deprecated Do not call this with players.
     */
    moveTo(): boolean;
    protected canSkillGain(): boolean;
    protected onSkillGain(skill: SkillType, mod: number): void;
    protected getSkillGainMultiplier(skillType: SkillType): number;
    protected getApplicableStatusEffects(): Set<StatusType>;
    protected getBaseStatBonuses(): OptionalDescriptions<Stat, number>;
    protected calculateStats(): void;
    protected swimAndSootheCheck(): void;
    /**
     * Event handler for when a status effect is applied or removed.
     */
    protected onStatusEffectChanged(status: StatusType, has: boolean): void;
    /**
     * Event handler for `EntityEvent.StatChanged`. Handles special functionality when stats are increased:
     * 1. When resting & stamina is full, resting will be cancelled.
     * 2. Health is sync-checked.
     * 3. When hunger > maximum, damage will be dealt, stamina will be decreased, and a message will be displayed.
     * 4. When thirst > maximum, damage will be dealt, stamina will be decreased, and a message will be displayed.
     */
    protected onStatChange(stat: IStat, oldValue: number, info: IStatChangeInfo): void;
    /**
     * Applies stat change timer multipliers from game difficulty options
     */
    protected onSetStatChangeTimer(stat: Stat | IStat, change: StatChangeTimerFactory): false | undefined;
    private slitherSuckerDamage;
    private processMovement;
    /**
     * Event handler for when resting begins, weight changes, or strength changes.
     */
    private onStaminaUseChanged;
    private restTick;
    private staminaSyncCheck;
    private canWriteInHours;
    private canWriteNote;
    private onWriteNote;
    private onReadNote;
    private shouldDisplayMessage;
    private onDisplayMessage;
    get asNPC(): undefined;
    get asPlayer(): this;
    get asLocalPlayer(): this | undefined;
    moveTowardsIsland(direction: Direction.Cardinal | Direction.None, options?: IMoveToIslandOptions): Promise<void>;
    moveToIslandPosition(position: IVector2, options?: IMoveToIslandOptions): Promise<void>;
    /**
     * Moves this player to another island
     */
    moveToIslandId(islandId: IslandId, options?: IMoveToIslandOptions): Promise<void>;
    /**
     * Loads the player onto an island
     * Called when the game is initially loading and moving a player to another island
     */
    loadOnIsland(island: Island, options?: Partial<ILoadOnIslandOptions>): void;
    /**
     * Loads ui. Should only be called if this player is local
     */
    loadUi(): void;
    /**
     * Moves the players items to the target island
     * This should be called before switching islands
     */
    private moveItemsToIsland;
}
