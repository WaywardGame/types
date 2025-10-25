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
import type Entity from "@wayward/game/game/entity/Entity";
export declare enum AiType {
    None = 0,
    /** Only attacks randomly when player is adjacent */
    Neutral = 32768,
    /** Adds Fleeing when in range of a player */
    Scared = 2,
    /** Attacks player. Adds Chasing when in range of a player */
    Hostile = 1,
    /** Never becomes scared, loses interest less often, becomes interested again faster */
    Fearless = 16,
    HostileFearless = 17,
    /** Flees from player, or chases player, based on whether the creature is scared or hostile */
    Alerted = 256,
    /** Does not move */
    Waiting = 512,
    /** Can't be seen */
    Hidden = 8,
    /** Cannot attack */
    Pacified = 32,
    /** Can swap tiles with the player */
    CanSwapWith = 4,
    /** Can move between z layers via cave entrances */
    CanSwapLayers = 65536,
    /** Follows the player at a close distance */
    FollowClose = 64,
    /** Follows the player at a far distance */
    FollowFar = 1024,
    /** Never move */
    Stay = 2048,
    /** Attacks adjacent enemies (creatures when tamed) */
    AttackAdjacent = 4096,
    /** Attacks enemies in sight(creatures when tamed) */
    AttackInSight = 8192,
    /** Stays in place and attacks things that pass by it */
    Defend = 6144,
    /** Follows the owner and attacks enemies it sees */
    Attack = 8256,
    /** Follows the owner and never attacks, even when attacked itself or sees owner attacked */
    Heel = 16384,
    /** Not currently wandering. This AI type is managed by the wander system. Do not put it in AI masks. */
    Idle = 128
}
declare namespace AI {
    function debugString(ai: AiType): string;
    function maskDebugString(...masks: AiMaskType[]): string;
}
export default AI;
export type AiTypeBase = AiType.Neutral | AiType.Scared | AiType.Hostile | (AiType.Hostile & AiType.Fearless);
export declare enum AiMaskType {
    Pacified = 0,
    HostileIfAberrant = 1,
    NeutralIfScaredDisabled = 2,
    ScaredIfLowHealth = 3,
    Hidden = 4,
    IfTamed = 5,
    Released = 6,
    LostInterest = 7,
    ScaredInDaylight = 8,
    Frenzied = 9,
    WaitingForNoPlayerAdjacent = 10,
    Angered = 11,
    RecentlyAlerted = 12,
    WrongLayerForZone = 13,
    RecentlySwappedLayers = 14,
    CanSwapLayersIfTamed = 15,
    NeutralDueToEvent = 16,
    HostileDueToEvent = 17
}
export declare enum AiMaskOrder {
    Released = 0,
    NeutralIfScaredDisabled = 1,
    ScaredIfLowHealth = 2,
    HostileIfAberrant = 3,
    ScaredInDaylight = 4,
    LostInterest = 5,
    IfTamed = 6,
    Hidden = 7,
    Frenzied = 8,
    NeutralDueToEvent = 9,
    HostileDueToEvent = 10,
    Pacified = 11,
    WaitingForNoPlayerAdjacent = 12,
    Angered = 13,
    RecentlyAlerted = 14,
    WrongLayerForZone = 15,
    RecentlySwappedLayers = 16,
    CanSwapLayersIfTamed = 17
}
export interface IAiMaskDescription {
    /**
     * AiType flags to add to the creature
     */
    include?: AiType;
    /**
     * AiType flags to remove from the creature
     */
    exclude?: AiType;
    /**
     * The priority of this mask as opposed to others. Higher priority masks are applied last. Defaults to 0
     */
    priority?: number;
    /**
     * Whether this AI mask should currently be applied
     */
    condition?(entity: Entity): boolean;
    /**
     * Called when changing whether the AI mask is applied to the entity
     */
    onChange?(entity: Entity, change: ChangeAiType): void;
}
export declare const aiMaskDescriptions: OptionalDescriptions<AiMaskType, IAiMaskDescription>;
export declare enum ChangeAiType {
    Remove = 0,
    Add = 1
}
/** The chance to start wandering after being idle */
export declare const AI_WANDER_CHANCE: number;
/** The chance to start idling */
export declare const AI_WANDER_IDLE_CHANCE: number;
/** The chance to decide to wander in a new direction */
export declare const AI_WANDER_REROLL_CHANCE: number;
/** The smaller the number, tighter the range, ie the more likely the entity goes directly towards home (for creatures, zone centre) */
export declare const AI_WANDER_DIRECTION_MAXIMUM_HOME_PRIORITY = 0.5;
/** The bigger the number, the looser the range, ie the more likely the entity is to wander anywhere. Bigger numbers stop having much of an effect around 12-16. */
export declare const AI_WANDER_DIRECTION_MINIMUM_HOME_PRIORITY = 16;
