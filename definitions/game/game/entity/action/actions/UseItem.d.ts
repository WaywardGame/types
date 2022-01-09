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
import { ActionArgument, ActionType } from "game/entity/action/IAction";
declare const _default: Action<[ActionArgument.ItemNearby, ActionArgument.ActionType], import("../../npc/NPC").default | import("../../player/Player").default, void, [import("../../../item/Item").default, ActionType]>;
export default _default;
