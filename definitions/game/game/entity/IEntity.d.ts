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
import type { IMovementTime } from "@wayward/game/game/IGame";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { Delay, MovingState } from "@wayward/game/game/entity/IHuman";
import type { SkillType } from "./skill/ISkills";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import type { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type Island from "@wayward/game/game/island/Island";
import type { IUncastableContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
export interface IEntityEvents extends IEventSubscriberEvents {
    /**
     * Called when the entity is created in the game
     * Also called for players that "rejoin" the game
     */
    created(): void;
    /**
     * Called when the entity is renamed
     */
    renamed(): void;
    /**
     * Called when the entity is removed from the game
     */
    removed(): void;
    updateHistoricalActionCount(action: ActionType, count: number, oldCount: number): any;
}
export interface IEntityConstructorOptions<TypeType extends number> {
    id: number;
    type: TypeType;
    tile: Tile;
}
export declare function asEntity(value?: unknown): Entity | undefined;
export interface ICastable {
    get island(): Island;
    get asEntity(): Entity | undefined;
    get asUnion(): Corpse | Creature | Doodad | Human | NPC | Player | TileEvent | Item | Tile | undefined;
    get asCorpse(): Corpse | undefined;
    get asCreature(): Creature | undefined;
    get asDoodad(): Doodad | undefined;
    get asHuman(): Human | undefined;
    get asNPC(): NPC | undefined;
    get asPlayer(): Player | undefined;
    get asLocalPlayer(): Player | undefined;
    get asTileEvent(): TileEvent | undefined;
    get asItem(): Item | undefined;
    get asTile(): Tile | undefined;
    get asContainer(): (this & IUncastableContainer) | undefined;
    isEntity(): this is Entity;
    isCorpse(): this is Corpse;
    isCreature(): this is Creature;
    isDoodad(): this is Doodad;
    isHuman(): this is Human;
    isNPC(): this is NPC;
    isPlayer(): this is Player;
    get isLocalPlayer(): boolean;
    isTileEvent(): this is TileEvent;
    isItem(): this is Item;
    isTile(): this is Tile;
    isContainer(): this is IUncastableContainer;
}
export declare enum StatusChangeReason {
    Gained = 0,
    Passed = 1,
    Treated = 2
}
export declare enum StatChangeReason {
    Normal = 0,
    ChangeTimer = 1,
    BonusChanged = 2,
    Upgrade = 3,
    Dynamic = 4
}
export interface IStatChangeInfo<T = any> {
    /**
     * Uses `StatChangeReason.Normal` when not provided
     */
    reason?: StatChangeReason;
    /**
     * Whether this change is "important" (for example, used when actions affect stats)
     */
    important?: boolean;
}
export declare namespace IStatChangeInfo {
    /**
     * Creates a stat change info object
     * @param reasonOrInfo A `StatChangeReason`, or an already created `IStatChangeInfo` object.
     * @param important Whether this change should be marked as important
     */
    function get<T = any>(reasonOrInfo: StatChangeReason | IStatChangeInfo, important?: boolean): IStatChangeInfo<T>;
    /**
     * Creates a stat change info object
     * @param important Marked as "important" if true
     */
    function get<T = any>(important: boolean): IStatChangeInfo<T>;
}
export type IStatus = Record<keyof typeof StatusType, number>;
export interface ICausesStatus {
    causesStatus?: Array<StatusType | [status: StatusType, level: number]>;
}
export interface ICausesDamage {
    damage?: number;
}
export declare enum EntityType {
    Player = 0,
    Creature = 1,
    NPC = 2,
    Human = 3,
    Doodad = 4,
    TileEvent = 5,
    Corpse = 6,
    Item = 7
}
export interface EntityTypeMap {
    [EntityType.Corpse]: Corpse;
    [EntityType.Creature]: Creature;
    [EntityType.Doodad]: Doodad;
    [EntityType.Human]: Human;
    [EntityType.Item]: Item;
    [EntityType.NPC]: NPC;
    [EntityType.Player]: Player;
    [EntityType.TileEvent]: TileEvent;
}
export type EntityTypeType<TYPE extends EntityType> = EntityTypeMap[TYPE] extends Entity<any, infer TYPETYPE, any, any> ? TYPETYPE : never;
export declare enum MoveType {
    None = 0,
    Water = 1,
    ShallowWater = 2,
    Land = 4,
    Tree = 8,
    Mountain = 16,
    Fire = 32,
    /**
     * If set, this entity will damage facing doodads when moving randomly.
     */
    DamageFacingDoodads = 64,
    /**
     * If set, this entity will randomly damage facing items (only if the tile is full) as well as items on they have stepped on.
     */
    DamageAnyNearbyItems = 128,
    WetLand = 256,
    Void = 512,
    /**
     * Will not attempt to move towards targets on land.
     */
    LandBlind = 1024,
    Hole = 2048,
    Fast = 4096,
    /**
     * If set, this entity will damage any crushable item they have stepped on.
     */
    DamageCrushableTileItems = 8192,
    /** Warning: This is a combination of other MoveType's, so when checking make sure to check that *all* flags are present */
    Flying = 15
}
export declare enum AttackType {
    /**
     * Melee weapon
     */
    MeleeWeapon = 0,
    /**
     * Hand to hand (no weapon)
     */
    HandToHand = 1,
    /**
     * Ranged weapon with ammo
     */
    RangedWeapon = 2,
    /**
     * Throwing an item
     */
    ThrowItem = 3
}
export declare enum DamageType {
    None = 0,
    Blunt = 1,
    Slashing = 2,
    Piercing = 4,
    Fire = 8,
    Cold = 16,
    True = 32
}
export declare namespace DamageType {
    function getAll(...damageTypes: DamageType[]): DamageType[];
}
export declare const RESIST_IMMUNITY = 99;
export declare const RESIST_REGEN = 100;
export declare class Defense {
    base: number;
    resist: Attributes;
    vulnerable: Attributes;
    constructor(base: number);
    setResistance(damageTypes: DamageType, amount: number): this;
    setImmunity(damageTypes: DamageType): this;
    setRegen(damageTypes: DamageType): this;
    setVulnerability(damageTypes: DamageType, amount: number): this;
    copy(): Defense;
    equals(defense: Defense): boolean;
}
export type Attributes = AttributesImpl & Record<DamageType, number>;
declare class AttributesImpl {
    static create(): Attributes;
    private constructor();
    set(damageTypes: DamageType, amount: number): this;
    add(attributes: Attributes): this;
    reset(amount?: number): void;
    all(): Array<[DamageType, number]>;
    types(): DamageType[];
    has(type?: DamageType): boolean;
    /**
     * Returns true if any of the given damage types are exactly the given value.
     */
    hasTypeAtValue(damage: DamageType, exactly: number): boolean;
    copy(): Attributes;
    equals(attrs: Attributes): boolean;
}
export interface IAttack {
    attack: AttackType;
    type: DamageType;
    tactics: number;
    mainHand?: IAttackMainHand;
    offHand?: IAttackOffHand;
    skillBonus?: IAttackSkillBonus;
    multiplier?: number;
}
export interface IAttackMainHand {
    item: Item;
    type: DamageType;
    value: number;
}
export interface IAttackOffHand {
    item: Item;
    type: DamageType;
    raw: number;
    skill: number;
    result: number;
}
export interface IAttackSkillBonus {
    skill: SkillType;
    value: number;
}
export declare enum EntityTag {
    None = 0
}
export interface IMovingData {
    /**
     * The state of what the client thinks is happening to this entity (regarding movement)
     * undefined = NoInput = Idle
     */
    state?: MovingState;
    /**
     * Start and end timestamps of the current movement
     */
    time?: IMovementTime;
    options?: IMoveToOptions;
}
export interface IAttackAnimationData {
    time: IMovementTime;
    damageType: DamageType;
}
export interface IMoveToOptions {
    disallowCancelation?: boolean;
    movementDelay?: Delay | number;
    animation?: MoveAnimation;
    onMoveCompletedTileForParticles?: Tile;
    /**
     * What caused the move?
     */
    flags?: MoveFlag;
    /**
     * The target position.
     * This overrides this.x/y
     */
    toX?: number;
    toY?: number;
    skipExtinguishTorches?: boolean;
}
export declare enum MoveAnimation {
    Normal = 0,
    Jump = 1,
    Teleport = 2
}
export declare enum MoveFlag {
    None = 0,
    /**
     * Skips damage due to movement
     */
    SkipEncumberedChecks = 1,
    /**
     * Immediate movement
     */
    Teleport = 2
}
export declare enum SlippingSpeed {
    Normal = 0,
    DoubleSpeed = 1
}
export interface ISlippingData {
    speed: SlippingSpeed;
    direction: Direction.Cardinal;
    count: number;
}
export declare const MAX_HUMAN_NORMAL_SPEED_SLIP = 25;
export declare const MAX_HUMAN_DOUBLE_SPEED_SLIP = 50;
export declare const MAX_CREATURE_SLIP = 20;
export declare const MAX_DEFAULT_SLIP = 20;
export {};
