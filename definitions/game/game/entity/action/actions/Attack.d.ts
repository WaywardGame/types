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
import { AttackType } from "game/entity/IEntity";
import Player from "game/entity/player/Player";
import type Item from "game/item/Item";
declare const _default: Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.AttackType, ActionArgument.Undefined]], Player | import("../../npc/NPC").default, void, [(Item | undefined)?, (AttackType | undefined)?]>;
export default _default;