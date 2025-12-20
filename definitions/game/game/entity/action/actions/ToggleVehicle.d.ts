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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import { ItemType } from "@wayward/game/game/item/IItem";
import Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
export interface ToggleVehicleDoodadCanUse extends IActionUsable {
    type: "doodad";
    existingVehicleItem?: Item;
    vehicleItemOrDoodad: Doodad;
    pickUpType: ItemType;
}
export interface ToggleVehicleItemCanUse extends IActionUsable {
    type: "item";
    existingVehicleItem?: Item;
    vehicleItemOrDoodad: Item;
    currentTile?: Tile;
    facingTile?: Tile;
}
export type ToggleVehicleCanUse = ToggleVehicleDoodadCanUse | ToggleVehicleItemCanUse;
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.ItemNearby, ActionArgument.DoodadNearby]], ActionType.ToggleVehicle, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, ToggleVehicleCanUse, [(Doodad | Item | undefined)?]>;
export default _default;
