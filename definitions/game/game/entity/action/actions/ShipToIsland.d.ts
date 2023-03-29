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
import type Human from "game/entity/Human";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type ShipperNPC from "game/entity/npc/npcs/Shipper";
import type { IIslandPort } from "game/island/IIsland";
import type { IVector2 } from "utilities/math/IVector";
export interface IShipToIslandCanUse extends IActionUsable {
    shipper: ShipperNPC;
    path?: IVector2[];
    port?: IIslandPort;
}
declare const _default: Action<[ActionArgument.NPCNearby, [ActionArgument.Island, ActionArgument.Undefined], [ActionArgument.Integer32, ActionArgument.Undefined]], Human<number>, void, IShipToIslandCanUse, [import("../../npc/NPC").default, (import("../../../island/Island").default | undefined)?, (number | undefined)?]>;
export default _default;
