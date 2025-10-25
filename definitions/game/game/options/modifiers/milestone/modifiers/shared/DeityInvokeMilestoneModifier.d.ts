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
import type Human from "@wayward/game/game/entity/Human";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import MilestoneModifier, { MilestoneModifierInstance } from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/IMilestoneModifier";
export default abstract class DeityInvokeMilestoneModifier extends MilestoneModifier {
    getGroup(): MilestoneModifierGroup;
    protected abstract getClass(): Class<DeityInvokeMilestoneModifierInstance>;
    instantiate(id: Milestone, human?: Human): MilestoneModifierInstance | undefined;
}
export declare abstract class DeityInvokeMilestoneModifierInstance extends MilestoneModifierInstance {
    protected abstract getChance(): number;
    protected abstract apply(): void;
    protected onTickEnd(): void;
}
