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
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import { ItemTypeGroup, RecipeLevel } from "@wayward/game/game/item/IItem";
export declare const ACTION_LEARN_RECIPE_OF_ISLAND_MULTIPLIER = 8;
export declare const ACTION_LEARN_RECIPE_WORTH_PENALTY_MULTIPLIER = 2;
export declare const ACTION_LEARN_RECIPE_LEVEL_WEIGHTS: Record<RecipeLevel, number>;
export declare const ACTION_LEARN_RECIPE_ITEM_GROUP_WEIGHTS: PartialRecord<ItemTypeGroup, number>;
declare const _default: Action<[ActionArgument.ItemNearby], ActionType.Learn, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, {
    usable: true;
}, [import("../../../item/Item").default]>;
export default _default;
