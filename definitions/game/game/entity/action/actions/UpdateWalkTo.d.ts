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
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type Entity from "@wayward/game/game/entity/Entity";
import type { IWalkToPathInProgress } from "@wayward/game/game/entity/player/IPlayer";
export declare class WalkToArgument extends ActionArgumentCustom<IWalkToPathInProgress> {
    validate(executor: Entity | undefined, value: unknown): value is IWalkToPathInProgress;
    read(executor: Entity | undefined): IWalkToPathInProgress;
    write(executor: Entity | undefined, value: IWalkToPathInProgress): void;
    private readOptionalRange;
    private writeOptionalRange;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, WalkToArgument]], ActionType.UpdateWalkTo, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [(IWalkToPathInProgress | undefined)?]>;
export default _default;
