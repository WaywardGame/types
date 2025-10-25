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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
export interface ISailToIslandCanUse extends IActionUsable {
    isLocalIslandSailing?: boolean;
    distanceFromEdge?: number;
}
declare const _default: Action<[ActionArgument.Integer32, ActionArgument.Integer32, [arg1: ActionArgument.Undefined, ActionArgument.Integer32]], ActionType.SailToIsland, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, ISailToIslandCanUse, [number, number, (number | undefined)?]>;
export default _default;
