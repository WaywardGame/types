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
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type { IStatusDescription, StatusThreatLevel, StatusType } from "@wayward/game/game/entity/status/IStatus";
import type Status from "@wayward/game/game/entity/status/Status";
import { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import type { IGameOptionsStatus } from "@wayward/game/game/options/IGameOptions";
interface IStatusContext {
    type: StatusType;
    definition?: IStatusDescription;
    options: IGameOptionsStatus;
    status?: Status;
    entity?: EntityWithStats;
    level?: number;
    threatLevel?: StatusThreatLevel;
}
declare namespace IStatusContext {
    function fromStatus(status: Status): IStatusContext;
    function fromType(status: StatusType, entity?: EntityWithStats): IStatusContext;
    function withLevel(status: IStatusContext, level: number): IStatusContext;
    function getInterval(status: IStatusContext): number;
    function getOptions(type: StatusType, entity?: EntityWithStats): IGameOptionsStatus;
    function getEffects(status: IStatusContext): StatusEffectList;
}
export default IStatusContext;
