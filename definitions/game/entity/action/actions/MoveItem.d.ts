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
import NPC from "game/entity/npc/NPC";
import { IContainer } from "game/item/IItem";
import Item from "game/item/Item";
declare const _default: Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Container, ActionArgument.Undefined], [ActionArgument.ItemType, ActionArgument.Undefined], [ActionArgument.Quality, ActionArgument.Undefined], [ActionArgument.String, ActionArgument.Undefined]], import("../../player/Player").default | NPC, void, [(Item | undefined)?, (IContainer | undefined)?, (import("game/item/IItem").ItemType | undefined)?, (import("../../../IObject").Quality | undefined)?, (string | undefined)?]>;
export default _default;
