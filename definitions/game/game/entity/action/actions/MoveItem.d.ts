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
import { MoveItemFilterArgument } from "@wayward/game/game/entity/action/actions/moveItem/MoveItemFilterArgument";
import { MoveItemOptionsArgument } from "@wayward/game/game/entity/action/actions/moveItem/MoveItemOptionsArgument";
import MoveItemsSourceArgument from "@wayward/game/game/entity/action/actions/moveItem/MoveItemsSourceArgument";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type { IContainer } from "@wayward/game/game/item/IItem";
import Item from "@wayward/game/game/item/Item";
export interface IMoveItemCanUse extends IActionUsable {
    items: Item[];
    targetContainer: IContainer;
    index?: number;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.ItemNearbyIncludingTradeContainer, ActionArgument.ItemArrayNearbyIncludingTradeContainer, MoveItemsSourceArgument], [arg1: ActionArgument.Undefined, ActionArgument.Container], [arg1: ActionArgument.Undefined, ActionArgument.Integer32], [arg1: ActionArgument.Undefined, MoveItemFilterArgument<import("@wayward/game/game/entity/action/actions/moveItem/MoveItemFilterArgument").IMoveItemFilterArgument>], [arg1: ActionArgument.Undefined, MoveItemOptionsArgument]], ActionType.MoveItem, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IMoveItemCanUse, [(Item | Item[] | import("@wayward/game/game/entity/action/actions/moveItem/MoveItemsSourceArgument").IMoveItemsSourceArgument | undefined)?, (IContainer | undefined)?, (number | undefined)?, (import("@wayward/game/game/entity/action/actions/moveItem/MoveItemFilterArgument").IMoveItemFilterArgument | undefined)?, (import("@wayward/game/game/entity/action/actions/moveItem/MoveItemOptionsArgument").IMoveItemOptionsArgument | undefined)?]>;
export default _default;
