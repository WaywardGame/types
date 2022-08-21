/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Item from "game/item/Item";
export interface ITransmogrifyCanUse extends IActionUsable {
    transmogrifyTarget: Item;
}
declare const _default: Action<[ActionArgument.ItemInventory, [ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../../Human").default, void, ITransmogrifyCanUse, [Item, (Item | undefined)?]>;
export default _default;
