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
import type Human from "@wayward/game/game/entity/Human";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import GameplayModifiersManager from "@wayward/game/game/options/modifiers/GameplayModifiersManager";
import type { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import MilestoneModifier from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
declare class MilestoneModifiersManager extends GameplayModifiersManager<MilestoneModifier, Milestone, [Human?]> {
    constructor();
    has(milestone: Milestone): boolean;
    getUnlocked(): Milestone[];
    getAll(): Milestone[];
    isGlobal(milestone: Milestone): boolean;
    isNotGlobal(milestone: Milestone): boolean;
    getGroup(milestone: Milestone): MilestoneModifierGroup | undefined;
    sort(a: Milestone, b: Milestone): 0 | 1 | -1;
}
declare const _default: MilestoneModifiersManager;
export default _default;
