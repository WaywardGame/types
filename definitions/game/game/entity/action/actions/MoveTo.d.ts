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
import { Delay } from "@wayward/game/game/entity/IHuman";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionApi } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import { Direction } from "@wayward/game/utilities/math/Direction";
declare const _default: Action<[ActionArgument.Vector2, [arg1: ActionArgument.Undefined, ActionArgument.Direction], [arg1: ActionArgument.Undefined, ActionArgument.Boolean]], ActionType.MoveTo, Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, {
    usable: true;
}, [import("../../../../utilities/math/IVector").IVector2, (Direction.None | Direction.East | Direction.North | Direction.West | Direction.South | undefined)?, (boolean | undefined)?]>;
export default _default;
export declare function blockMove(action: IActionApi<Human>, delay?: Delay): void;
