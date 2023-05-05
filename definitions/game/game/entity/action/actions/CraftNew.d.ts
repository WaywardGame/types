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
import { ActionArgument } from "game/entity/action/IAction";
import Human from "game/entity/Human";
import Item from "game/item/Item";
import type { RecipeType } from "game/item/recipe/RecipeRegistry";
declare const _default: Action<[ActionArgument.RecipeType, ActionArgument.ItemArrayNearby, [ActionArgument.Undefined, ActionArgument.ItemType]], Human<number>, void, import("game/entity/action/IAction").IActionUsable, [RecipeType, Item[], (import("game/item/IItem").ItemType | undefined)?]>;
export default _default;
