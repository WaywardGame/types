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
export interface ICraftCanUse extends IActionUsable {
    requirementInfo: IRequirementInfo;
}
declare const _default: Action<[ActionArgument.ItemType, ActionArgument.ItemArrayNearby, ActionArgument.ItemArrayNearby, [ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../../Human").default, void, ICraftCanUse, [import("../../../item/IItem").ItemType, import("../../../item/Item").default[], import("../../../item/Item").default[], (import("../../../item/Item").default | undefined)?, (boolean | undefined)?]>;
export default _default;
