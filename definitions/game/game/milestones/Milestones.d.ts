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
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import MilestoneDefinition from "@wayward/game/game/milestones/MilestoneDefinition";
import Dictionary from "@wayward/game/language/Dictionary";
export declare const MILESTONES_HOSTILE_CREATURES: CreatureType[];
export declare const milestoneDescriptions: Descriptions<Milestone, MilestoneDefinition>;
export declare const milestoneDictionaries: Partial<Record<Milestone, Dictionary>>;
export declare namespace Milestones {
    function initializeDynamic(): void;
}
