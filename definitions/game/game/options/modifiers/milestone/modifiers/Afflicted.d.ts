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
import { Stat } from "@wayward/game/game/entity/IStats";
import type Player from "@wayward/game/game/entity/player/Player";
import { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierInstance } from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/IMilestoneModifier";
import { type TranslationArg } from "@wayward/game/language/ITranslation";
export default class Afflicted extends MilestoneModifier {
    getOptions(): IGameOptionsPartial;
    getGroup(): MilestoneModifierGroup;
    protected getTranslationArgs(): TranslationArg[] | undefined;
    instantiate(id: Milestone, player?: Player): AfflictedMilestoneModifierInstance | undefined;
}
interface IAfflictedEffects {
    stat: Stat;
    effect: number | Record<number, number>;
}
export declare const AFFLICTED_EFFECTS: PartialRecord<StatusType, IAfflictedEffects>;
declare class AfflictedMilestoneModifierInstance extends MilestoneModifierInstance<OptionalDescriptions<Stat, number>> {
    initialize(): void;
    private getBaseStatBonuses;
    private getBaseAttack;
    private getDefense;
    private onStatusChange;
    private applyStatBonus;
    private getEffectValue;
    private getStatBaseValue;
}
export {};
