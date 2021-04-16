/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import Item from "game/item/Item";
import { RecipeType } from "game/item/recipe/RecipeRegistry";
declare const _default: Action<[ActionArgument.RecipeType, ActionArgument.ItemArrayNearby, [ActionArgument.Undefined, ActionArgument.ItemType]], import("../../player/Player").default | import("../../creature/Creature").default | import("../../npc/NPC").default, void, [RecipeType, Item[], (import("../../../item/IItem").ItemType | undefined)?]>;
export default _default;
