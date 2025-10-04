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
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { IDamageInfo } from "@wayward/game/game/entity/creature/ICreature";
import type Human from "@wayward/game/game/entity/Human";
import { StatusChangeReason } from "@wayward/game/game/entity/IEntity";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IStatusDescription } from "@wayward/game/game/entity/status/IStatus";
import { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type IStatusContext from "@wayward/game/game/entity/status/IStatusContext";
import type Status from "@wayward/game/game/entity/status/Status";
import StatusInspection from "@wayward/game/game/inspection/inspections/StatusInspection";
import type Island from "@wayward/game/game/island/Island";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { IGameOptionsPartial, IGameOptionsStatus } from "@wayward/game/game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierInstance } from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/IMilestoneModifier";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import type { IInjectionApi } from "@wayward/game/utilities/Inject";
export default class Exsanguinated extends MilestoneModifier {
    getOptions(): IGameOptionsPartial;
    getTranslationArgs(): TranslationArg[] | undefined;
    getGroup(): MilestoneModifierGroup;
    instantiate(id: Milestone, player?: Player): ExsanguinatedMilestoneModifierInstance | undefined;
}
interface IStatusInspectionInjectable {
    getAllPossibleLevels(): number[];
}
declare const StatusInspectionInjectable: Class<Merge<StatusInspection, IStatusInspectionInjectable>, any[]>;
type StatusInspectionInjectable = InstanceType<typeof StatusInspectionInjectable>;
declare class ExsanguinatedMilestoneModifierInstance extends MilestoneModifierInstance<number> {
    private addStacks;
    private reduceStacks;
    protected onDamage(island: Island, target: Creature | Human, damageInfo: IDamageInfo, attackOutcome: number): false | void;
    protected onStatusChange(player: Player, status: StatusType, level: number, reason: StatusChangeReason): void;
    protected onBleedingGetDamageRange(api: IInjectionApi<IStatusDescription, "getDamageRange">, status: IStatusContext): void;
    protected onBleedingTick(api: IInjectionApi<IStatusDescription, "onTick">, status: Status, options: IGameOptionsStatus): void;
    protected onGetAllPossibleLevels(api: IInjectionApi<StatusInspectionInjectable, "getAllPossibleLevels">): void;
}
export {};
