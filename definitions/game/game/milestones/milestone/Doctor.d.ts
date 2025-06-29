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
import { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { DoctorId, DoctorType, IDoctorId } from "@wayward/game/game/milestones/milestone/IDoctor";
import MilestoneDefinition from "@wayward/game/game/milestones/MilestoneDefinition";
declare const _default: (() => MilestoneDefinition) & {
    readonly id: <TYPE extends DoctorType>(type: TYPE, ...params: IDoctorId[TYPE]) => `${TYPE}:${string}`;
    readonly getStatuses: () => StatusType[];
    readonly getCures: (status: StatusType) => (`method:${string}` | `item:${string}`)[];
    readonly translate: (id: DoctorId) => import("../../../language/impl/TranslationImpl").default;
    readonly isDiscovered: <TYPE extends DoctorType>(type: TYPE, ...params: IDoctorId[TYPE]) => boolean;
    readonly translateCuresList: (status: StatusType) => import("../../../language/impl/TranslationImpl").default[];
};
export default _default;
