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
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
import { Direction } from "@wayward/game/utilities/math/Direction";
declare const _default: Action<[ActionArgument.Direction, [ActionArgument.Integer32, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, {
    usable: true;
}, [Direction.None | Direction.East | Direction.North | Direction.West | Direction.South, (number | undefined)?, (boolean | undefined)?]>;
export default _default;
export declare function UpdateDirectionInternal(human: Human, direction: Direction.Cardinal): void;
