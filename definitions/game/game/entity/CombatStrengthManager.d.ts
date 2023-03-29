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
import type Human from "game/entity/Human";
import type Creature from "game/entity/creature/Creature";
import { CreatureType } from "game/entity/creature/ICreature";
export declare enum CombatStrength {
    Tier0 = 0,
    Tier1 = 1,
    Tier2 = 2,
    Tier3 = 3,
    Tier4 = 4,
    Tier5 = 5,
    Tier6 = 6,
    Tier7 = 7,
    Tier8 = 8,
    Tier9 = 9
}
export declare enum CombatDangerLevel {
    Low = 0,
    Medium = 1,
    High = 2,
    VeryHigh = 3,
    Extreme = 4
}
export default class CombatStrengthManager {
    readonly minimumCreatureValue: number;
    readonly maximumCreatureValue: number;
    constructor();
    /**
     * Given a combat strength decimal, from 0 to 1, returns a CombatStrength tier
     */
    getTier(strength: number): CombatStrength;
    /**
     * Given a combat strength decimal, from 0 to 1, returns a CombatDangerLevel
     */
    getDangerLevel(difficulty: number): CombatDangerLevel;
    /**
     * Calculates a float value between 0 and 1 representing a creature's difficulty.
     */
    getCreature(creature: Creature | CreatureType, aberrant?: boolean): number;
    getCreatureDifficultyAgainstHuman(creature: Creature | CreatureType, aberrant?: boolean, human?: Human): number;
    /**
     * Calculates a value representing a creature's combat strength.
     *
     * The following factors are included in the current calculation at time of writing:
     * `+` The average of the current and maximum health of the creature.
     * `+` The average attack value of the creature multiplied by 20.
     * `+` The defense of the creature multiplied by 5.
     * `+` The current health bonus from any taming or MP bonuses.
     * `+` Any resist values multiplied by 5.
     * `-` Any vulnerability values multiplied by 5.
     * `*` A multiplier based on the status effects the creature can apply. Poison is the highest multiplier, then bleed, then burn.
     * `*` The value is doubled if the creature is hostile.
     * `/` The value is halved if the creature is scared.
     * `*` The value is doubled if the creature is aberrant.
     */
    private calculateCreatureValue;
}
