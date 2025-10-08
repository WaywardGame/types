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
import type { IItemDescription, IItemDisassembleResult } from "@wayward/game/game/item/IItem";
import type { IRequirementInfo } from "@wayward/game/game/item/IItemManager";
import type Item from "@wayward/game/game/item/Item";
export interface IDisassembleCanUse extends IActionUsable {
    description: IItemDescription;
    requirementInfo: IRequirementInfo;
    disassemblyResult: IItemDisassembleResult;
}
declare const _default: Action<[ActionArgument.ItemNearby, [arg1: ActionArgument.Undefined, ActionArgument.OptionalItemArrayNearby]], ActionType.Disassemble, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IDisassembleCanUse, [Item, ((Item | undefined)[] | undefined)?]>;
export default _default;
