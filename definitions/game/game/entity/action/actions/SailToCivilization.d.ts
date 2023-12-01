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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type Item from "@wayward/game/game/item/Item";
export interface ISailToCivilizationCanUse extends IActionUsable {
    itemsToRemove?: Item[];
}
declare const _default: Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../../player/Player").default, void, ISailToCivilizationCanUse, [(Item | undefined)?, (boolean | undefined)?]>;
export default _default;
