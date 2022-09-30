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
import type Doodad from "game/doodad/Doodad";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type { IItemDescription } from "game/item/IItem";
import type { IRequirementInfo } from "game/item/IItemManager";
import type Item from "game/item/Item";
export interface IRepairCanUse extends IActionUsable {
    repairee: Item | Doodad;
    requirementInfo?: IRequirementInfo;
    itemDescription?: IItemDescription;
    repaireeIsItem: boolean;
}
declare const _default: Action<[ActionArgument.ItemNearby, [ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Undefined]], import("../../Human").default, void, IRepairCanUse, [Item, (Item | Doodad | undefined)?]>;
export default _default;
