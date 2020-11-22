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
import { Action } from "entity/action/Action";
import { ActionArgument } from "entity/action/IAction";
import Item from "item/Item";
declare const _default: Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../../player/Player").default | import("../../npc/NPC").default, void, [(Item | undefined)?]>;
export default _default;
