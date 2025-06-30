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
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type Item from "@wayward/game/game/item/Item";
export interface IReinforceCanUse extends IActionUsable {
    maxReinforcement: number;
    maxDurability: number;
    actionTier: number;
    reinforcee: Item;
}
declare const _default: Action<[ActionArgument.ItemNearby, [arg1: ActionArgument.Undefined, ActionArgument.ItemNearby]], import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, IReinforceCanUse, [Item, (Item | undefined)?]>;
export default _default;
