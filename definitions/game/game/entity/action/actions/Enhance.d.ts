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
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Item from "game/item/Item";
export interface IEnhanceCanUse extends IActionUsable {
    enhanceTarget: Item;
}
declare const _default: Action<[ActionArgument.ItemInventory, [ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../../Human").default<number>, void, IEnhanceCanUse, [Item, (Item | undefined)?]>;
export default _default;
