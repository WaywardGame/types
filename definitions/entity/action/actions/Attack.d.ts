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
import { AttackType } from "entity/IEntity";
import Player from "entity/player/Player";
import Item from "item/Item";
declare const _default: Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.AttackType, ActionArgument.Undefined]], Player | import("../../npc/NPC").default, void, [(Item | undefined)?, (AttackType | undefined)?]>;
export default _default;
