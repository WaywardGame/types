/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Human from "@wayward/game/game/entity/Human";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type ShipperNPC from "@wayward/game/game/entity/npc/npcs/Shipper";
import type { IIslandPort } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export interface IShipToIslandCanUse extends IActionUsable {
    shipper: ShipperNPC;
    path?: IVector2[];
    port?: IIslandPort;
    island?: Island;
}
declare const _default: Action<[ActionArgument.NPCNearby, [arg1: ActionArgument.Undefined, ActionArgument.Island, ActionArgument.Vector2], [arg1: ActionArgument.Undefined, ActionArgument.Integer32]], ActionType.ShipToIsland, Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IShipToIslandCanUse, [import("../../npc/NPC").default, (Island | IVector2 | undefined)?, (number | undefined)?]>;
export default _default;
