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
import { Milestone } from "game/milestones/IMilestone";
import type { IGameOptionsPartial } from "game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
export default class Boundless extends MilestoneModifier {
    after: Milestone[];
    getOptions(): IGameOptionsPartial;
    getGroup(): MilestoneModifierGroup;
}
