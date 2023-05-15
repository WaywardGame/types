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
import { ActionArgument } from "game/entity/action/IAction";
import { Direction } from "utilities/math/Direction";
declare const _default: Action<[ActionArgument.Direction, [ActionArgument.Integer32, ActionArgument.Undefined]], import("../../Human").default<number>, void, {
    usable: true;
}, [Direction.None | Direction.East | Direction.North | Direction.West | Direction.South, (number | undefined)?]>;
export default _default;
