/*!
 * Copyright 2011-2023 Unlok
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
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type NPC from "game/entity/npc/NPC";
import type ShipperNPC from "game/entity/npc/npcs/Shipper";
import type { IContainer } from "game/item/IItem";
import Item from "game/item/Item";
export interface IToggleContainerCanUse extends IActionUsable {
    container: Doodad | Item;
    shipper?: ShipperNPC;
}
declare const _default: Action<[[ActionArgument.Container, ActionArgument.NPCNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../../Human").default<number>, void, IToggleContainerCanUse, [(IContainer | NPC | undefined)?, (boolean | undefined)?]>;
export default _default;
