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
import Creature from "game/entity/creature/Creature";
import type Item from "game/item/Item";
declare const _default: Action<[[ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Creature, ActionArgument.NPC], ActionArgument.String], import("../../Human").default, void, import("game/entity/action/IAction").IActionUsable, [Item | Creature | import("../../../doodad/Doodad").default | import("../../npc/NPC").default, string]>;
export default _default;
