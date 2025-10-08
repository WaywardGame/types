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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import { UsableActionType } from "@wayward/game/game/entity/action/usable/UsableActionType";
import { type ITerrainDescription } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
export interface IExcavateCollapseTile extends IActionUsable {
    type: "Tile";
    tile: Tile;
    terrainDescription?: ITerrainDescription;
    actionType: UsableActionType;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.ItemInventory]], ActionType.ExcavateCollapse, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IExcavateCollapseTile, [(import("../../../item/Item").default | undefined)?]>;
export default _default;
