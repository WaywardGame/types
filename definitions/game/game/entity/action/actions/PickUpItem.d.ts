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
import type Item from "@wayward/game/game/item/Item";
export interface IPickUpItemCanUse extends IActionUsable {
    pickUpItem: Item | Item[];
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.Boolean], [arg1: ActionArgument.Undefined, ActionArgument.ItemArrayNearby]], ActionType.PickUpItem, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IPickUpItemCanUse, [(boolean | undefined)?, (Item[] | undefined)?]>;
export default _default;
