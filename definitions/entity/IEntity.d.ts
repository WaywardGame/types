/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IStatEvents } from "entity/IStats";
import { ITile } from "tile/ITerrain";
export interface IEntityEvents extends IStatEvents {
    /**
     * Called when this entity gets or loses a status effect
     * @param entity The object this event is emitted from
     * @param status The type of status effect that was gained or lost
     * @param hasStatus Whether the entity now has the status effect
     * @param reason The reason for the change
     */
    statusChange(status: StatusType, hasStatus: boolean, reason: StatusEffectChangeReason): void;
    /**
     * Called when the entity is removed from the game
     */
    removed(): void;
    preMove(fromX: number, fromY: number, fromZ: number, fromTile: ITile, toX: number, toY: number, toZ: number, toTile: ITile): boolean | undefined | void;
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
    Upgrade = 3
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
    Dehydrated = 6
}
export declare type IStatus = Record<keyof typeof StatusType, boolean>;
export interface ICausesStatusEffect {
    causesStatus?: StatusType[];
}
export interface ICausesDamage {
    damage?: number;
}
export declare enum Property {
    Credit = 0,
    Talked = 1
}
export declare type IProperties = Map<Property, any>;
export declare enum EntityType {
    Player = 0,
    Creature = 1,
    NPC = 2
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
    Flying = 15
}
export declare enum AttackType {
    Melee = 0,
    HandToHand = 1,
    Shoot = 2,
    Sling = 3,
    Fire = 4,
    ThrowItem = 5,
    Generic = 6
}
export declare enum DamageType {
    Blunt = 1,
    Slashing = 2,
    Piercing = 4,
    Fire = 8,
    True = 16
}
export declare class Defense {
    base: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, resist: Resistances, vulnerable: Vulnerabilities);
}
export declare class Vulnerabilities {
    [index: number]: number;
    constructor(...args: any[]);
}
export declare class Resistances {
    [index: number]: number;
    constructor(...args: any[]);
}
