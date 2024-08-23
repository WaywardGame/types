/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Creature from "@wayward/game/game/entity/creature/Creature";
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
    /** Doesn't move, can't be seen */
    Hidden = 8,
    /** Do nothing until there are no players next to the entity */
    Waiting = 512,
    /** An override to allows swapping tiles with this creature */
    CanSwapWith = 4,
    /** This creature cannot attack */
    Pacified = 32,
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
    Unused2 = 128
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
    Frenzied = 9
}
export declare enum AiMaskOrder {
    NeutralIfScaredDisabled = 0,
    ScaredIfLowHealth = 1,
    HostileIfAberrant = 2,
    ScaredInDaylight = 3,
    LostInterest = 4,
    IfTamed = 5,
    Released = 6,
    Hidden = 7,
    Frenzied = 8,
    Pacified = 9
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
    condition?(creature: Creature): boolean;
}
export declare const aiMaskDescriptions: OptionalDescriptions<AiMaskType, IAiMaskDescription>;
