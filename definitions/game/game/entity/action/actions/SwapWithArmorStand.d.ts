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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
export interface ISwapEquipment extends IActionUsable {
    doodad: Doodad;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.Doodad]], import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, boolean, ISwapEquipment, [(Doodad | undefined)?]>;
export default _default;
