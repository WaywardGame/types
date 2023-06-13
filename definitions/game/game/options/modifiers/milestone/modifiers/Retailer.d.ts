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
import type Player from "game/entity/player/Player";
import type { Milestone } from "game/milestones/IMilestone";
import type { IGameOptionsPartial } from "game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierGroup, MilestoneModifierInstance } from "game/options/modifiers/milestone/MilestoneModifier";
export default class Retailer extends MilestoneModifier {
    getOptions(): IGameOptionsPartial;
    instantiate(id: Milestone, player?: Player): RetailerMilestoneModifierInstance | undefined;
    getGroup(): MilestoneModifierGroup;
}
declare class RetailerMilestoneModifierInstance extends MilestoneModifierInstance {
    onSpawnPlayer(player: Player): void;
}
export {};
