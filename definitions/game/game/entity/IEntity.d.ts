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
import type Doodad from "game/doodad/Doodad";
import type Entity from "game/entity/Entity";
import type { Delay, SkillType } from "game/entity/IHuman";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
import type { IRGB } from "utilities/Color";
export interface IEntityEvents {
    /**
     * Called when an entity is killed by another entity.
     */
    kill?(attacker: Entity | Doodad): void;
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
}
export interface IEntityConstructorOptions<TypeType extends number> {
    id: number;
    type: TypeType;
    tile: Tile;
}
export declare enum StatusEffectChangeReason {
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
export declare module IStatChangeInfo {
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
export declare enum StatusType {
    Bleeding = 0,
    Poisoned = 1,
    Burned = 2,
    Encumbered = 3,
    Exhausted = 4,
    Starving = 5,
    Dehydrated = 6,
    Overheating = 7,
    Freezing = 8,
    Frostbitten = 9
}
export type IStatus = Record<keyof typeof StatusType, number>;
export interface ICausesStatusEffect {
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
export declare enum AiType {
    /**
     * Doesn't attack
     */
    Neutral = 0,
    /**
     * Attacks player
     */
    Hostile = 1,
    /**
     * Move like neutral - become fleeing within 10 tiles of a player
     */
    Scared = 2,
    /**
     * Moves in random direction
     */
    Random = 4,
    /**
     * Doesn't move, can't be seen
     */
    Hidden = 8,
    /**
     * Never scared
     */
    Fearless = 16,
    /**
     * Monster is tamed
     */
    Tamed = 32,
    /**
     * Follows the player at a close distance
     */
    FollowClose = 64,
    /**
     * Retaliates the player when attacked
     */
    Retaliate = 128,
    /**
     * Run away from the player
     */
    Fleeing = 256,
    /**
     * Do nothing until there are no players next to the entity
     */
    Waiting = 512,
    /**
     * Follows the player at a far distance
     */
    FollowFar = 1024,
    /**
     * Never move
     */
    Stay = 2048,
    /**
     * Attacks adjacent enemies (creatures when tamed)
     */
    AttackAdjacent = 4096,
    /**
     * Attacks enemies in sight(creatures when tamed)
     */
    AttackInSight = 8192,
    /**
     * Stays in place and attacks things that pass by it
     */
    Defend = 6144,
    /**
     * Follows the owner and attacks enemies it sees
     */
    Attack = 8256
}
export declare enum MoveType {
    None = 0,
    Water = 1,
    ShallowWater = 2,
    Land = 4,
    Tree = 8,
    Mountain = 16,
    Fire = 32,
    BreakDoodads = 64,
    BreakItems = 128,
    WetLand = 256,
    Void = 512,
    LandBlind = 1024,
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
export declare module DamageType {
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
    all(): [DamageType, number][];
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
export interface IMoveToOptions {
    disallowCancelation?: boolean;
    movementDelay?: Delay | number;
    animation?: MoveAnimation;
    onMoveCompletedParticles?: IRGB;
    /**
     * What caused the move?
     */
    flags?: MoveFlag;
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
    SkipEncumberedChecks = 1
}
export {};
