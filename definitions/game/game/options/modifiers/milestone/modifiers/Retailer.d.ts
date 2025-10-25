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
import type Player from "@wayward/game/game/entity/player/Player";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierInstance } from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/IMilestoneModifier";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
export default class Retailer extends MilestoneModifier {
    getOptions(): IGameOptionsPartial;
    getTranslationArgs(): TranslationArg[] | undefined;
    instantiate(id: Milestone, player?: Player): RetailerMilestoneModifierInstance | undefined;
    getGroup(): MilestoneModifierGroup;
}
declare class RetailerMilestoneModifierInstance extends MilestoneModifierInstance {
    onSpawnPlayer(player: Player): void;
}
export {};
