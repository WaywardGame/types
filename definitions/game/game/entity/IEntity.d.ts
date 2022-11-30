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
import type Doodad from "game/doodad/Doodad";
import type Entity from "game/entity/Entity";
import type { SkillType } from "game/entity/IHuman";
import type { IStatEvents } from "game/entity/IStats";
import type Item from "game/item/Item";
import type { ITile } from "game/tile/ITerrain";
export interface IEntityEvents extends IStatEvents {
    /**
     * Called when an entity is killed by another entity.
     */
    kill?(attacker: Entity | Doodad): void;
    /**
     * Called when this entity gets or loses a status effect
     * @param entity The object this event is emitted from
     * @param status The type of status effect that was gained or lost
     * @param level Whether the entity now has the status effect
     * @param reason The reason for the change
     */
    statusChange(status: StatusType, level: number, reason: StatusEffectChangeReason): void;
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
    /**
     * Called before moving.
     * Can be called twice for humans
     * @param isMoving True the second time it's called, right as the entity is about to actually move
     */
    preMove(fromX: number, fromY: number, fromZ: number, fromTile: ITile, toX: number, toY: number, toZ: number, toTile: ITile, isMoving: boolean): boolean | undefined | void;
    postMove(fromX: number, fromY: number, fromZ: number, fromTile: ITile, toX: number, toY: number, toZ: number, toTile: ITile): void;
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
     * @param important Marked as "important" if true
     */
    function get<T = any>(important: boolean): IStatChangeInfo<T>;
    /**
     * Creates a stat change info object
     * @param reasonOrInfo A `StatChangeReason`, or an already created `IStatChangeInfo` object.
     * @param important Whether this change should be marked as important
     */
    function get<T = any>(reasonOrInfo: StatChangeReason | IStatChangeInfo, important?: boolean): IStatChangeInfo<T>;
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
export declare enum Property {
    Credit = 0,
    Talked = 1
}
export type IProperties = Map<Property, any>;
export declare enum EntityType {
    Player = 0,
    Creature = 1,
    NPC = 2,
    Human = 3
}
export declare enum AiType {
    Neutral = 0,
    Hostile = 1,
    Scared = 2,
    Random = 4,
    Hidden = 8,
    Fearless = 16,
    Tamed = 32,
    Follower = 64,
    Defender = 128,
    Fleeing = 256,
    Waiting = 512
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
    WetLand = 128,
    Void = 256,
    LandBlind = 512,
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
export declare class Defense {
    base: number;
    resist: Attributes;
    vulnerable: Attributes;
    constructor(base: number);
    setResistance(damageTypes: DamageType, amount: number): this;
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
    has(): boolean;
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
export {};
