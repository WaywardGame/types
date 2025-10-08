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
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Human from "@wayward/game/game/entity/Human";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import { type IItemDescription, type IItemOnUse } from "@wayward/game/game/item/IItem";
export interface IHealOtherCanUse extends IActionUsable {
    itemDescription: IItemDescription;
    target: Creature | Human | NPC;
    onUse: IItemOnUse;
    creature?: Creature;
    npc?: NPC;
}
declare const _default: Action<[ActionArgument.ItemInventory], ActionType.HealOther, Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IHealOtherCanUse, [import("../../../item/Item").default]>;
export default _default;
