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
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import TreasureGathering from "@wayward/game/game/entity/action/actions/helper/TreasureGathering";
import type { IRangedDescription } from "@wayward/game/game/item/IItem";
export interface ICastCanUse extends IActionUsable {
    ranged: IRangedDescription;
    accuracy: number;
    itemRange: number;
    maxFishingRange: number;
    canGatherTreasure?: TreasureGathering.ICanGather;
}
declare const _default: Action<[ActionArgument.ItemInventory], ActionType.Cast, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, ICastCanUse, [import("../../../item/Item").default]>;
export default _default;
