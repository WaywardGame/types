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
declare const _default: Action<[ActionArgument.ItemNearby, ActionArgument.Boolean], import("../../player/Player").default | import("../../npc/NPC").default, void, [import("../../../item/Item").default, boolean]>;
export default _default;
