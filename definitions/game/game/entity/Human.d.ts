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
import type { IEventEmitter } from "event/EventEmitter";
import Doodad from "game/doodad/Doodad";
import type Creature from "game/entity/creature/Creature";
import type { IDamageInfo } from "game/entity/creature/ICreature";
import { CreatureType } from "game/entity/creature/ICreature";
import EntityWithStats from "game/entity/EntityWithStats";
import type { IAttack, ICausesDamage, IEntityConstructorOptions } from "game/entity/IEntity";
import { AttackType, DamageType, IStatChangeInfo, StatusEffectChangeReason, StatusType } from "game/entity/IEntity";
import type { ICheckUnderOptions, ICrafted, ICustomizations, IHumanEvents, ILoadOnIslandOptions, IRestData, IVoyageInfo } from "game/entity/IHuman";
import { EquipType, RestCancelReason, SkillType } from "game/entity/IHuman";
import type { IStat } from "game/entity/IStats";
import { Stat } from "game/entity/IStats";
import type { IMessageManager } from "game/entity/player/IMessageManager";
import type { IMovementIntent, IWalkPath } from "game/entity/player/IPlayer";
import { PlayerState, TurnTypeFlag, WeightStatus } from "game/entity/player/IPlayer";
import type { INoteManager } from "game/entity/player/note/NoteManager";
import PlayerDefense from "game/entity/player/PlayerDefense";
import type { IQuestManager } from "game/entity/player/quest/QuestManager";
import type { ISkillAttribute } from "game/entity/skill/ISkills";
import SkillManager from "game/entity/skill/SkillManager";
import type { StatChangeTimerFactory } from "game/entity/StatFactory";
import { StatChangeCurrentTimerStrategy } from "game/entity/StatFactory";
import StatusEffect from "game/entity/status/StatusEffect";
import { FireType } from "game/IGame";
import type { Quality } from "game/IObject";
import type { IMobCheck, IMoveToIslandOptions, IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { EquipEffectByType, EquipEffects, IContainer, IRanged, RecipeLevel } from "game/item/IItem";
import { EquipEffect, ItemType, ItemTypeGroup } from "game/item/IItem";
import type Item from "game/item/Item";
import ItemReference from "game/item/ItemReference";
import { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import { Milestone } from "game/milestones/IMilestone";
import type { IGameOptionsPlayer } from "game/options/IGameOptions";
import type { Reference } from "game/reference/IReferenceManager";
import type { IHasInsulation } from "game/temperature/ITemperature";
import { TempType } from "game/temperature/ITemperature";
import type Tile from "game/tile/Tile";
import type { ICanSailAwayResult } from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
import Message from "language/dictionary/Message";
import type { ISerializedTranslation } from "language/ITranslation";
import Translation from "language/Translation";
import type FieldOfView from "renderer/fieldOfView/FieldOfView";
import { CanASeeBType } from "renderer/fieldOfView/IFieldOfView";
import type { IOptions } from "save/data/ISaveDataGlobal";
import { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
import type { IVector4 } from "utilities/math/Vector4";
export declare const REPUTATION_MAX = 64000;
export default abstract class Human<TypeType extends number = number> extends EntityWithStats<unknown, TypeType> implements IHasInsulation {
    static getNameTranslation(): import("../../language/impl/TranslationImpl").default;
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
    crafted: Record<number, ICrafted>;
    customization: ICustomizations;
    deathBy: ISerializedTranslation;
    defense: PlayerDefense;
    defenses: number[];
    equippedOffHandDisabled?: ItemReference;
    equippedReferences: Map<EquipType, ItemReference>;
    flyingDelay?: number;
    handEquippedToLast: EquipType.OffHand | EquipType.MainHand;
    inventory: IContainer;
    isConnecting: boolean;
    lastAttackedByReference?: Reference;
    manualTickActionDelay?: number;
    options: Readonly<IOptions>;
    islandId: IslandId;
    readonly equipEffects: Map<EquipEffect, EquipEffects>;
    realTimeTickActionDelay: number;
    respawnPoint: IVector4 | undefined;
    restData: IRestData | undefined;
    score: number;
    state: PlayerState;
    swimming: boolean;
    tamedCreatures: Map<`${number},${number}`, Set<number>>;
    ticksSpent: Map<`${number},${number}`, number>;
    turns: number;
    vehicleItemReference: ItemReference | undefined;
    walkSoundCounter: number;
    readonly movementIntent: IMovementIntent;
    walkPath?: IWalkPath;
    identifier: string;
    skill: SkillManager;
    quests: IQuestManager;
    messages: IMessageManager;
    notes: INoteManager;
    private readonly privateStore;
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
    protected readonly milestonesCollection: import("../options/modifiers/GameplayModifiersManager").GameplayModifiersCollection<import("../options/modifiers/milestone/MilestoneModifier").default, Milestone, import("../options/modifiers/milestone/MilestoneModifier").MilestoneModifierInstance<any>, [(Human<number> | undefined)?]>;
    protected gameOptionsCached?: IGameOptionsPlayer;
    protected cachedMovementPenalty?: number;
    constructor(entityOptions?: IEntityConstructorOptions<TypeType>);
    protected getDescription(): void;
    abstract createNoteManager(): INoteManager;
    abstract createMessageManager(): IMessageManager;
    abstract createQuestManager(): IQuestManager;
    abstract addMilestone(milestone: Milestone, data?: number | string, update?: boolean): void;
    createSkillManager(): SkillManager;
    isLocalPlayer(): boolean;
    getGameOptionsBeforeModifiers(): IGameOptionsPlayer;
    getGameOptions(): IGameOptionsPlayer;
    setOptions(options: IOptions): void;
    /**
     * Multiply the reputation amount with whatever is set via milestone modifiers or custom game options for this player.
     * @param reputation A number or undefined to be mutiplied.
     * @returns A number or undefined if a reputation number was not passed.
     */
    getReputationMultiplier(reputation: number | undefined): number | undefined;
    getEquipEffect<E extends EquipEffect>(type: E): FirstIfOne<EquipEffectByType<E>>;
    getReputation(): number;
    isResting(): boolean;
    isRestingCancelled(): boolean;
    isGhost(): boolean;
    isDead(): boolean;
    /**
     * Returns true if this is the special dedicated server player
     */
    isServer(): boolean;
    isHost(): boolean;
    updateDirection(tile: Tile, updateVehicleDirection?: boolean): void;
    protected onMovementCompleted(): void;
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
    createItemInInventory(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, quality?: Quality, updateTables?: boolean): Item;
    damageRandomEquipment(): void;
    getDamageModifier(): number;
    calculateDamageAmount(attackType: AttackType, weapon?: Item, ammoItem?: Item): number;
    isDualWielding(): boolean;
    getAttack(attack?: AttackType, weapon?: Item): IAttack;
    getSimplifiedCumulativeAttack(): number;
    getCombatStrength(): number;
    private getAttackType;
    private getAttackSkillBonus;
    private getAttackSkill;
    damage(damageInfoOrAmount: IDamageInfo | number): number | undefined;
    /**
     * @deprecated provide a full IDamageInfo object yourself you lazy fiend
     */
    damage(damageInfoOrAmount: IDamageInfo | number, damageMessage?: Message | Translation, soundDelay?: number, causesBlood?: boolean, statusEffect?: StatusEffect): number | undefined;
    getEquippedItems(includeDisabled?: true): Item[];
    getEquippedItem(slot: EquipType, includeDisabled?: true): Item | undefined;
    isOffHandDisabled(): boolean;
    getEquipSlotForItem(item: Item, includeDisabled?: true): EquipType | undefined;
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
    /**
     * Note: The noInput event would be emitted before moveComplete.
     * Ordering is done via EmitHumanEventPacket
     */
    protected onNoInput(): void;
    protected onMoveComplete(): void;
    /**
     * This is only ran on the server
     */
    processInput(timeStamp: number): IMovementIntent | undefined;
    staminaReduction(skill?: SkillType, level?: number): void;
    updateReputationForAttackingWithTamedCreature(target: Creature, attacker: Creature): void;
    updateReputation(reputation: number): void;
    protected checkOnLoadMilestones(): void;
    capReputation(): void;
    setVehicle(item: Item | undefined, extinguishTorches?: boolean): boolean;
    getWeightStatus(): WeightStatus;
    /**
     * Extinguishes all torches the player is holding.
     */
    extinguishTorches(): void;
    rangeAction(weapon: Item | undefined, ranged: IRanged | undefined, bonusMagicalType: MagicalPropertyType, skillType: SkillType, useMaxRange?: boolean): {
        mobCheck: IMobCheck;
        bonusRange: number;
        actionRange: number;
    };
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    getBurnDamage(fireType: FireType, skipParry?: boolean, equipType?: EquipType): number;
    /**
     * Burn the player
     */
    burn(fireType: FireType, skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean, level?: number): number | undefined;
    setPosition(tile: Tile): void;
    /**
     * @param effects If true, adds a delay to the player, clears any particles, and updates the view. (Default: true)
     */
    setZ(z: number, allowCancelation?: boolean, effects?: boolean, updateFlowField?: boolean): boolean;
    getMovementIntent(): IMovementIntent;
    updateMovementIntent(movementIntent: IMovementIntent): boolean;
    hasWalkPath(): boolean;
    setWalkPath(path: IVector2[] | undefined, force?: boolean): void;
    protected onDie(): void;
    checkUnder(inFacingDirection?: boolean, options?: ICheckUnderOptions): ICheckUnderOptions;
    trampleFire(fireEvent: TileEvent): void;
    damageByInteractingWith(thing: Doodad | TileEvent, options: ICheckUnderOptions | undefined, damageLocation: EquipType): ICheckUnderOptions;
    equip(item: Item, slot: EquipType, internal?: boolean): boolean;
    /**
     * Unequips an item.
     * Note: This is safe to call even if the item isn't equipped. it'll do nothing in that case.
     */
    unequip(item: Item, internal?: boolean, skipMessage?: boolean, skipRevertItem?: boolean): void;
    private updateOffHandState;
    unequipAll(): void;
    getJumpTile(): Tile | undefined;
    hasDelay(): boolean;
    addDelay(delay: number, replace?: boolean, addStaminaDelay?: boolean): void;
    /**
     * Gets a stamina penalty delay to be used for slowed actions and movement.
     * @param staminaToStartAddingDelayAt Stat value where delays start getting added from.
     */
    getStaminaDelay(staminaToStartAddingDelayAt?: number): number;
    getConsumeBonus(item: Item | undefined, skillUse?: SkillType): number;
    getSkillBonus(skillUse?: SkillType): number;
    getQualityBonus(item: Item | undefined): number;
    setTamedCreatureEnemy(enemy: Human | Creature): void;
    checkForGatherFire(): Translation | undefined;
    /**
     * Check if there is a still in front of the player.
     * @param withWater Check if the still has water in it?
     * @param isLit Check if the still is lit?
     */
    checkForStill(withWater?: boolean, isLit?: boolean): boolean;
    checkForWell(): boolean;
    checkForGather(): Doodad | undefined;
    calculateEquipmentStats(): void;
    private recalculateInsulation;
    private getEquipmentInsulation;
    discoverRecipe(recipeType: ItemType, crafted?: ICrafted, discoveredClientSide?: boolean): void;
    incrementIslandTickCount(): void;
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
    setStatus(status: StatusType, level: number | boolean, reason: StatusEffectChangeReason): boolean;
    causeStatus(thing: Doodad | TileEvent, equipForProtection?: EquipType): void;
    hurtHands(damageMessage: Message, toolMessage?: Message): boolean;
    getAsHuman(): Human;
    /**
     * Gets if the human is swimming (and not on a boat)
     */
    isSwimming(): boolean;
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
    getInsulation(type: TempType): number;
    resetStatTimers(type?: StatChangeCurrentTimerStrategy): void;
    private getBaseStatBonuses;
    protected getApplicableStatusEffects(): Set<StatusType> | undefined;
    private getSkillGainMultiplier;
    private canSkillGain;
    protected onSkillGain(skill: SkillType, fromValue: number, toValue: number, mod: number): void;
    setStatChangeTimerIgnoreDifficultyOptions(stat: Stat | IStat, timer: number, amt?: number): void;
    /**
     * Improve one of the core player stats
     */
    protected statGain(stat: Stat | ISkillAttribute, bypass: boolean): void;
    protected calculateStats(): void;
    kill(): void;
    protected resetDefense(skipStatChangedEvent?: boolean): void;
    protected swimAndSootheCheck(): void;
    /**
     * Chance to stop frostbite when next to a fire
     */
    protected fireSootheCheck(): void;
    /**
     * Event handler for when a status effect is applied or removed.
     */
    protected onStatusEffectChanged(status: StatusType, level: number): void;
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
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): undefined;
    get asHuman(): Human;
    get asTileEvent(): undefined;
    get asItem(): undefined;
    get point(): IVector3;
    get tile(): Tile;
    /**
     * Moves inventory items to the target island
     * This should be called before switching islands
     */
    private moveItemsToIsland;
}
