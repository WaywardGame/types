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
import { FireType } from "@wayward/game/game/IGame";
import type { Quality } from "@wayward/game/game/IObject";
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import Deity from "@wayward/game/game/deity/Deity";
import Doodad from "@wayward/game/game/doodad/Doodad";
import type Entity from "@wayward/game/game/entity/Entity";
import EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type { IAttack, ICausesDamage, IEntityConstructorOptions, IMovingData, MoveFlag } from "@wayward/game/game/entity/IEntity";
import { AttackType, DamageType, IStatChangeInfo, StatusChangeReason } from "@wayward/game/game/entity/IEntity";
import type { HumanTag, ICheckUnderOptions as ICheckUnderOptions, ICrafted, ICustomizations, IHumanEvents, ILoadOnIslandOptions, IRestData, IVoyageInfo, WalkToChangeReason } from "@wayward/game/game/entity/IHuman";
import { EquipType, RestCancelReason } from "@wayward/game/game/entity/IHuman";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import type { IStat } from "@wayward/game/game/entity/IStats";
import { Stat } from "@wayward/game/game/entity/IStats";
import type { StatChangeTimerFactory } from "@wayward/game/game/entity/StatFactory";
import { StatChangeCurrentTimerStrategy } from "@wayward/game/game/entity/StatFactory";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import IActionContext from "@wayward/game/game/entity/action/IActionContext";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { CreatureType, IDamageInfo } from "@wayward/game/game/entity/creature/ICreature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type { IMessageManager } from "@wayward/game/game/entity/player/IMessageManager";
import type { IMovementIntent, IWalkToPathInProgress } from "@wayward/game/game/entity/player/IPlayer";
import { PlayerState, TurnTypeFlag, WeightStatus } from "@wayward/game/game/entity/player/IPlayer";
import PlayerDefense from "@wayward/game/game/entity/player/PlayerDefense";
import type { INoteManager } from "@wayward/game/game/entity/player/note/NoteManager";
import type { IQuestManager } from "@wayward/game/game/entity/player/quest/QuestManager";
import type { ISkillAttribute } from "@wayward/game/game/entity/skill/ISkills";
import SkillManager from "@wayward/game/game/entity/skill/SkillManager";
import { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { IMobCheck, IMoveToIslandOptions, IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { ContainerSort, ContainerType, EquipEffectByType, EquipEffects, IContainer, IRangedInProgress, IRangedResolvedDistance, IUncastableContainer, RecipeLevel } from "@wayward/game/game/item/IItem";
import { EquipEffect, ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import ItemReference from "@wayward/game/game/item/ItemReference";
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import Runekeeper from "@wayward/game/game/milestones/milestone/Runekeeper";
import type { IGameOptionsPartial, IGameOptionsPlayer } from "@wayward/game/game/options/IGameOptions";
import type { Reference, ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type { IHasInsulation, IInsulationResult } from "@wayward/game/game/temperature/ITemperature";
import { TempType } from "@wayward/game/game/temperature/ITemperature";
import type { FindPathRange } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { ICanSailAwayResult } from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import Message from "@wayward/game/language/dictionary/Message";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import { CanASeeBType } from "@wayward/game/renderer/fieldOfView/IFieldOfView";
import type { SortDirection } from "@wayward/game/save/ISaveManager";
import type { IOptions } from "@wayward/game/save/data/ISaveDataGlobal";
import Debug from "@wayward/game/utilities/dev/Debug";
import { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import type { RuneEffectType } from "@wayward/game/game/item/runes/RuneEffects";
interface IEquip {
    item: Item;
    equipType: EquipType;
}
export default abstract class Human<DescriptionType = unknown, TypeType extends number = number, EntityReferenceType extends ReferenceType.Player | ReferenceType.NPC = ReferenceType.Player | ReferenceType.NPC, TagType = unknown> extends EntityWithStats<DescriptionType, TypeType, EntityReferenceType, TagType> implements IHasInsulation, IContainer {
    static getNameTranslation(): TranslationImpl;
    event: IEventEmitter<this, IHumanEvents>;
    anim: number;
    direction: Vector2;
    facingDirection: Direction.Cardinal;
    /**
     * Note: This might not be a whole number.
     */
    fromX: number;
    /**
     * Note: This might not be a whole number.
     */
    fromY: number;
    crafted: SaferNumberIndexedObject<ICrafted>;
    customization: ICustomizations;
    deathBy: ISerializedTranslation;
    private readonly defense;
    defenses: number[];
    equippedOffHandDisabled?: ItemReference;
    equippedReferences: Map<EquipType, ItemReference>;
    fastMovingDelay?: number;
    handEquippedToLast: EquipType.OffHand | EquipType.MainHand;
    isConnecting: boolean;
    lastAttackedByReference?: Reference;
    manualTickActionDelay?: number;
    options: ImmutableObject<IOptions>;
    islandId: IslandId;
    readonly equipEffects: Map<EquipEffect, EquipEffects>;
    realTimeTickActionDelay: number;
    respawnPoint: IVector4 | undefined;
    restData: IRestData | undefined;
    score: number;
    state: PlayerState;
    protected swimming: boolean;
    tamedCreatures: Map<`${number},${number}`, Set<number>>;
    ticksSpent: Map<`${number},${number}`, number>;
    turns: number;
    activeTurns: number;
    vehicleItemReference: ItemReference | undefined;
    connectedVehicleId?: number;
    walkSoundCounter: number;
    containedItems: Item[];
    sort?: ContainerSort;
    sortDirection?: SortDirection;
    lastReceivedRune?: Deity;
    lastGainedStat?: Stat;
    invocations?: PartialRecord<RuneEffectType, number>;
    lastUsedCaveEntrance?: IVector3;
    readonly movementIntent: IMovementIntent;
    walkToInProgress?: IWalkToPathInProgress;
    identifier: string;
    skill: SkillManager;
    quests: IQuestManager;
    messages: IMessageManager;
    notes: INoteManager;
    itemDiscovered: ItemType[];
    private _humanTags?;
    /** @deprecated (use the entity itself) */
    readonly inventory: IContainer;
    /**
     * Used for delays, which are calculated on the server
     */
    private nextProcessInput;
    containerType?: ContainerType;
    nextMoveTime: number;
    nextMoveDirection?: Direction.Cardinal | Direction.None;
    private lastVehicleMoveDirection?;
    /**
     * Only tracked serverside for dangerous bouncing
     */
    private preventedBadMovement?;
    /**
     * Flag that will prevent a humans vehicle from showing up until the movement finishews
     */
    isMovingSuppressVehicleClientside: boolean;
    protected readonly milestonesCollection: import("../options/modifiers/GameplayModifiersManager").GameplayModifiersCollection<import("../options/modifiers/milestone/MilestoneModifier").default, Milestone, import("../options/modifiers/milestone/MilestoneModifier").MilestoneModifierInstance<any>, [(Human<unknown, number, ReferenceType.NPC | ReferenceType.Player, unknown> | undefined)?]>;
    protected gameOptionsCached?: IGameOptionsPlayer;
    protected cachedMovementPenalty?: number;
    constructor(entityOptions?: IEntityConstructorOptions<TypeType>);
    abstract createNoteManager(): INoteManager;
    abstract createMessageManager(): IMessageManager;
    abstract createQuestManager(): IQuestManager;
    abstract addMilestone(milestone: Milestone, data?: number | string, update?: boolean): void;
    createSkillManager(): SkillManager;
    get isLocalPlayer(): boolean;
    get isResting(): boolean;
    get isRestingCancelled(): boolean;
    get isGhost(): boolean;
    get isDead(): boolean;
    /**
     * @returns True if this is the special dedicated server player
     */
    get isServer(): boolean;
    /**
     * @returns True if this player is the host of the multiplayer game or if there is no multiplayer game active
     */
    get isHost(): boolean;
    get days(): number;
    get maelstromLevel(): number;
    /**
     * Gets the last attacked entity
     */
    get lastAttackedByEntity(): Human | Creature | Doodad | TileEvent | undefined;
    /**
     * Gets the last attacked entity as a human (from combat, creature owners, doodad builders, firestarters).
     */
    get lastAttackedByEntityHuman(): Human | undefined;
    getDefense(): PlayerDefense;
    /** A game options modifier that always returns an empty array by default, to be injected into */
    getAdditionalGameOptionsSources(): IGameOptionsPartial[];
    getGameOptionsBeforeModifiers(): ImmutableObject<IGameOptionsPlayer>;
    getGameOptions(): ImmutableObject<IGameOptionsPlayer>;
    clearGameOptionsCache(): void;
    setOptions(options: IOptions): void;
    getEquipEffect<E extends EquipEffect>(type: E): FirstIfOne<EquipEffectByType<E>>;
    /**
     * Luck is a multiplier applied to some random chance calculations.
     */
    get luck(): number;
    get debug(): Debug.JIT<[]>;
    updateDirection(tile: Tile | Direction.Cardinal, updateVehicleDirection?: boolean): Direction.Cardinal;
    /**
     * Not recommended for regular usage. Use the UpdateDirection action
     */
    updateDirectionPropertiesInternal(direction: Direction.Cardinal): void;
    protected onMovementCompleted(movingData: IMovingData): void;
    moveTowardsIsland(direction: Direction.Cardinal | Direction.None, options?: Partial<IMoveToIslandOptions>): Promise<void>;
    moveToIslandPosition(position: IVector2, options?: Partial<IMoveToIslandOptions>): Promise<void>;
    /**
     * Moves this player to another island
     */
    moveToIslandId(islandId: IslandId, options?: Partial<IMoveToIslandOptions>): Promise<void>;
    /**
     * Starts the travel animation for the player
     * @param direction Direction they are traveling
     * @returns A method that you should invoke to end the animation
     */
    private startTravelAnimation;
    /**
     * Loads the player onto an island
     * Called when the game is initially loading and moving a player to another island
     */
    loadOnIsland(island: Island, options?: Partial<ILoadOnIslandOptions>, voyageInfo?: IVoyageInfo): void;
    protected abstract moveToIsland(targetTile: Tile): void;
    /**
     * Loads ui. Should only be called if this player is local
     */
    loadUi(): void;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): boolean;
    findPathToPort(portId: number, options?: Partial<{
        startReversed: boolean;
        requireBoat: boolean;
    }>): Tile[] | undefined;
    addTamedCreature(creature: Creature): void;
    removeTamedCreature(creature: Creature): boolean;
    resetMovementIntent(): void;
    createItemInInventory(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, quality?: Quality, context?: IActionContext): Item;
    cloneItemIntoInventory(itemToClone: Item, itemType?: ItemType): Item;
    damageRandomEquipment(): void;
    getDamageModifier(): number;
    calculateDamageAmount(attackType: AttackType, weapon?: Item, ammoItem?: Item): number;
    isDualWielding(): boolean;
    getAttack(attack?: AttackType, weapon?: Item, offHandWeapon?: Item): IAttack;
    getSimplifiedCumulativeAttack(): number;
    getSimplifiedCumulativeDefense(defense?: PlayerDefense): number;
    getCombatStrength(): number;
    private getAttackType;
    private getAttackSkillBonus;
    private getAttackSkill;
    damage(damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    /**
     * Gets the use benefits for all equipped items.
     * Stat.Hunger and Stat.Thirst get converted to check for Stat.Metabolism as the type for MagicalPropertyType.StatPotency_EquipmentImproveConsumableStats
     * @param stat to check use benefits for.
     * @returns number that is the bonus amount the player recieves when consuming.
     */
    getEquippedUseBenefits(stat: Stat): {
        amount: number;
        items: Item[];
    } | undefined;
    getEquippedItems(includeDisabled?: true): Item[];
    getEquippedItem(slot: EquipType, includeDisabled?: true): Item | undefined;
    isOffHandDisabled(): boolean;
    getEquipSlotForItem(item: Item, includeDisabled?: true): EquipType | undefined;
    getFanaticism(deity: Deity): number;
    getCurse(refresh?: true): number;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    /**
     * Gets the max health of the player.
     *
     * Returns the result of the `"getMaxHealth"` event, or the `max` in `Stat.Health`,
     * if the result of the hook is `undefined`.
     */
    getMaxHealth(withBonus?: boolean): number;
    getCraftingDifficulty(level: RecipeLevel): number;
    updateStatsAndAttributes(): void;
    getMovementDelay(): number;
    faceDirection(direction: Direction.Cardinal | Entity | Tile): Promise<boolean>;
    get isWalkingTo(): boolean;
    /**
     * Returns a promise that resolves once the walk finishes
     */
    waitForWalkTo(): Promise<void>;
    walkToTile(tile: Tile, range?: FindPathRange, isClientSide?: boolean): Promise<boolean>;
    walkToEntity(entity: Entity, range?: FindPathRange, isClientSide?: boolean): Promise<boolean>;
    private walkTo;
    /**
     * Converts a WalkTo into a IWalkToPathInProgress
     */
    private calculateWalkToPath;
    /**
     * Updates the walkTo (automatic pathing) for the human.
     * Use walkToTile/walkToEntity methods when client side.
     */
    updateWalkTo(walkTo: IWalkToPathInProgress | undefined, reason?: WalkToChangeReason): void;
    /**
     * Attempt to walk along a path. Returns false when failed to start walking
     */
    /**
     * Note: The noInput event would be emitted before moveComplete.
     * Ordering is done via EmitHumanEventPacket
     */
    protected onNoInput(): void;
    /**
     * This is only ran on the server
     */
    processInput(timeStamp: number): IMovementIntent | undefined;
    staminaReduction(skill?: SkillType, level?: number): void;
    /**
     * @param deity The deity to potentially give a rune for
     * @param chance A chance multiplier on top of the base rune chance of 10% (an additional 30% chance may be added by theurgy)
     * @returns whether the rune was given
     */
    giveRune(deity: ArrayOr<DeityReal>, chance: number, domain: Runekeeper.DomainData, context: IActionContext, times?: number): boolean;
    private actuallyGiveRune;
    /**
     * All the milestones we need to check on game load.
     */
    protected checkOnLoadMilestones(): void;
    setVehicle(item: Item | undefined, extinguishTorches?: boolean): boolean;
    getWeightStatus(): WeightStatus;
    /**
     * Extinguishes all torches the player is holding of they are swimming.
     */
    extinguishTorchesIfSwimming(): void;
    getRangedAccuracy(weapon: Item | undefined, ranged: IRangedInProgress | undefined, skillType: SkillType, which?: "base" | "skill" | "calc"): number;
    rangeAction(weapon: Item | undefined, ranged: IRangedInProgress | undefined, bonusMagicalType: MagicalPropertyType, skillType: SkillType, useMaxRange?: boolean): IRangedResolvedDistance;
    rangeAction(weapon: Item | undefined, ranged: IRangedInProgress | undefined, bonusMagicalType: MagicalPropertyType, skillType: SkillType, useMaxRange: boolean | undefined, clientSide: true): IRangedResolvedDistance[];
    checkForTargetInRange(towardsTile: Tile | undefined, range: number, accuracy: number | undefined, includePlayers?: boolean): IMobCheck;
    checkForTargetInRange(towardsTile: Tile | undefined, range: number, accuracy: number | undefined, includePlayers: boolean | undefined, clientSide: true): IMobCheck[];
    getBurnDamage(fireType: FireType, skipParry?: boolean, equipType?: EquipType): number;
    /**
     * Burn the player/NPC
     */
    burn(fireType: FireType, skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean, level?: number, thing?: Doodad | TileEvent): number | undefined;
    /**
     * @param effects If true, adds a delay to the player, clears any particles, and updates the view. (Default: true)
     */
    setZ(z: number, allowCancelation?: boolean, updateFlowField?: boolean): boolean;
    /**
     * Note: This is usually only ran on the server
     */
    getMovementIntent(): IMovementIntent;
    updateMovementIntent(movementIntent: IMovementIntent): boolean;
    protected onDie(): void;
    checkUnder(inFacingDirection?: boolean, options?: ICheckUnderOptions): ICheckUnderOptions;
    damageByInteractingWith(thing: Doodad | TileEvent, options: ICheckUnderOptions | undefined, damageLocation: EquipType): ICheckUnderOptions;
    equip(item: Item, slot: EquipType, internal?: boolean, skipRevertItem?: boolean): boolean;
    /**
     * Unequips an item.
     * Note: This is safe to call even if the item isn't equipped. it'll do nothing in that case.
     */
    unequip(item: Item, internal?: boolean, skipMessage?: boolean, skipRevertItem?: boolean, isArmorStandSwap?: boolean): boolean;
    private updateOffHandState;
    /**
     * Unequip all equipment
     */
    unequipAll(displayMessage?: boolean, isArmorStandSwap?: boolean): IEquip[];
    getJumpTile(): Tile | undefined;
    hasDelay(): boolean;
    addDelay(delay: number, replace?: boolean, addStaminaDelay?: boolean, cap?: number): void;
    ensureDelay(delay: number): void;
    /**
     * Removese input processing delay (due to actions) and movement delays.
     * This won't do much from clientside in a mp game since the server is in charge.
     */
    removeDelays(): void;
    /**
     * Gets a stamina penalty delay to be used for slowed actions and movement.
     * @param staminaToStartAddingDelayAt Stat value where delays start getting added from.
     */
    getStaminaDelay(staminaToStartAddingDelayAt?: number): number;
    getConsumeBonus(item: Item | undefined, skillUse?: SkillType): number;
    getSkillBonus(skillUse?: SkillType): number;
    getRangedSkillBonus(skillUse?: SkillType): number;
    getQualityBonus(item: Item | undefined): number;
    setTamedCreatureEnemy(enemy: Human | Creature): void;
    checkForGatherFire(action: ActionType): Translation | undefined;
    /**
     * Check if there is a still in front of the player.
     * @param withWater Check if the still has water in it?
     * @param isLit Check if the still is lit?
     */
    checkForStill(withWater?: boolean, isLit?: boolean): boolean;
    checkForWell(): boolean;
    checkForGather(): Doodad | undefined;
    calculateEquipmentStats(): void;
    private getEquipmentInsulation;
    discoverRecipe(itemType: ItemType, forceUnlock?: boolean, crafted?: ICrafted): void;
    incrementIslandTickCount(): void;
    protected onPostMove(lastTile: Tile, tile: Tile, flags?: MoveFlag, skipExtinguishTorches?: boolean): void;
    passTurn(turnType?: TurnTypeFlag): void;
    /**
     * Ticks a player
     * @returns True if the game should tick after this
     */
    tick(isPassTurn?: boolean, turnType?: TurnTypeFlag): boolean;
    private restTick;
    getDamage(causesDamage: ICausesDamage, equipType?: EquipType): number;
    private slitherSuckerDamage;
    /**
     * Event handler for when resting begins, weight changes, or strength changes.
     */
    protected onStaminaUseChanged(): void;
    updateWeight(source: string): void;
    updateTablesAndWeight(source: string): void;
    /**
     * Updates caused by status effects such as bleeding, poison, and burns.
     */
    tickStatuses(): void;
    setStatus(status: StatusType, level: number | boolean, reason: StatusChangeReason, force?: boolean): boolean;
    causeStatus(thing: Doodad | TileEvent, equipForProtection?: EquipType): void;
    hurtHands(damageMessage: Message, toolMessage?: Message): boolean;
    getAsHuman(): Human;
    /**
     * Gets if the human is swimming (and not on a boat)
     */
    get isSwimming(): boolean;
    updateSwimming(): void;
    updateVehicle(): void;
    getWeightOrStaminaMovementPenalty(): number;
    canSailAway(): ICanSailAwayResult;
    canSailTo(x: number, y: number): boolean;
    canCombatTides(): true | Message.ActionSailToIslandCannotUseNotEnoughSwimmingSkill | Message.ActionSailToIslandCannotUseNotEnoughStamina;
    protected calculateVoyageInfo(destination?: Island, distanceFromEdge?: number): IVoyageInfo;
    /**
     * Applies traveling effects to the player
     * - Loses stamina, hunger, and thirst
     * - Damages spyglass, golden sextant, and boat if it's being used
     * - Decays items in the player's inventory
     */
    applyTravelingEffects(voyage: IVoyageInfo): void;
    /**
     * - If the player is in a boat, restores their stamina to the maximum minus a reduction calculated with the boat's tier
     * - If the player is not in a boat, reduces their stamina based on their swimming skill
     * - Applies a reduction to metabolic stats based on travel time
     * - If the player starts sailing with a metabolic stat at zero or below, reduces the player's health by the new metabolic stat value
     * - Caps the player health at a minimum of 1
     */
    private applyStatLoss;
    private applyStatRestore;
    /**
     * Returns the bartering bonus for a given credit value
     */
    getBarteringBonus(baseCredits: number): number;
    getProducedTemperature(): number | undefined;
    getInsulation(type: TempType): IInsulationResult;
    resetStatTimers(type?: StatChangeCurrentTimerStrategy, isNPC?: boolean): void;
    resetChangeTimers(): void;
    private getBaseStatBonuses;
    private getSkillGainMultiplier;
    private canSkillGain;
    protected onSkillGain(skill: SkillType, fromValue: number, toValue: number, mod: number, times?: number): void;
    setStatChangeTimerIgnoreDifficultyOptions(stat: Stat | IStat, timer: number, amt?: number): void;
    /**
     * Improve one of the core player stats
     */
    protected statGain(stat: Stat | ISkillAttribute, bypass: boolean, sourceSkill?: SkillType, times?: number): void;
    protected calculateStats(): void;
    kill(): void;
    protected resetDefense(): void;
    protected sootheChecks(): void;
    private swimSootheCheck;
    /**
     * Chance to stop frostbite when next to a fire
     */
    private fireSootheCheck;
    /**
     * Event handler for when a status effect is applied or removed.
     */
    protected onStatusChanged(status: StatusType, level: number): void;
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
    healthSyncCheck(reason: string): void;
    protected staminaSyncCheck(reason: string): void;
    /**
     * This needs to be called whenever the player's strength requires an update.
     *
     * Example usage includes:
     * 1. When max health changes. Max health is used in calculating the strength.
     * 2. If a mod is using the `GetPlayerStrength` hook and the calculation needs to be refreshed.
     */
    updateStrength(): void;
    /**
     * Gets the strength of the player.
     *
     * Returns the result of `Hook.GetPlayerStrength`, or the `max` in `Stat.Health`,
     * if the result of the hook is `undefined`.
     *
     * Used internally for `Stat.Weight.max`
     */
    getMaxWeight(): number;
    /**
     * Gets this human's current carried weight, scaled down to what it would be without any weight bonuses applied
     */
    getScaledWeight(): number;
    hasDiscoveredVulnOrResist(creatureType: CreatureType, damageType: DamageType): boolean;
    discoverVulnOrResist(creatureType: CreatureType, damageType: DamageType): void;
    getDiscoveredVulnsAndResists(): Map<CreatureType, Set<DamageType>>;
    getDiscoveredVulnsAndResists(creatureType: CreatureType): Set<DamageType>;
    get connectedVehicle(): Doodad | undefined;
    connectVehicle(vehicle: Doodad): void;
    disconnectVehicle(animate?: boolean): void;
    /**
     * Creates a fire at a given tile and assigns the player as its creator.
     */
    createFire(tile: Tile): TileEvent | undefined;
    hasHumanTag(tag: HumanTag): boolean;
    addHumanTag(tag: HumanTag): void;
    removeHumanTag(tag: HumanTag): void;
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): undefined;
    get asHuman(): this;
    get asGenericHuman(): Human;
    get asTileEvent(): undefined;
    get asItem(): undefined;
    get asTile(): undefined;
    get asContainer(): this & IUncastableContainer;
    isCorpse(): this is Corpse;
    isCreature(): this is Creature;
    isDoodad(): this is Doodad;
    isHuman(): this is Human;
    isTileEvent(): this is TileEvent;
    isItem(): this is Item;
    isTile(): this is Tile;
    isContainer(): this is IUncastableContainer;
    get point(): IVector3;
    get tile(): Tile;
    /**
     * Recompute lights around the human
     */
    computeLights(z?: number): void;
    /**
     * Moves inventory items to the target island
     * This should be called before switching islands
     */
    private moveItemsToIsland;
}
export {};
