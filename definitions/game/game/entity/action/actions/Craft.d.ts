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
import type { IRequirementInfo } from "game/item/IItemManager";
import type Item from "game/item/Item";
export interface ICraftCanUse extends IActionUsable {
    requirementInfo: IRequirementInfo;
    componentsRequired: Item[];
    componentsConsumed: Item[];
    baseComponent: Item | undefined;
    canBurn: boolean;
}
declare const _default: Action<[ActionArgument.ItemType, [ActionArgument.ItemArrayNearby, ActionArgument.Undefined], [ActionArgument.ItemArrayNearby, ActionArgument.Undefined], [ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../../Human").default, void, ICraftCanUse, [import("../../../item/IItem").ItemType, (Item[] | undefined)?, (Item[] | undefined)?, (Item | undefined)?, (boolean | undefined)?]>;
export default _default;
