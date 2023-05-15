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
import { Action } from "game/entity/action/Action";
import type { IActionApi } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Human from "game/entity/Human";
import { Direction } from "utilities/math/Direction";
declare const _default: Action<[ActionArgument.Vector2, [ActionArgument.Direction, ActionArgument.Undefined]], Human<number>, void, {
    usable: true;
}, [import("../../../../utilities/math/IVector").IVector2, (Direction.None | Direction.East | Direction.North | Direction.West | Direction.South | undefined)?]>;
export default _default;
export declare function blockMove(action: IActionApi<Human>): void;
