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
import Doodad from "game/doodad/Doodad";
import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import Item from "game/item/Item";
declare const _default: Action<[ActionArgument.ItemNearby, [ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Undefined]], import("../../player/Player").default | import("../../npc/NPC").default, void, [Item, (Doodad | Item | undefined)?]>;
export default _default;
