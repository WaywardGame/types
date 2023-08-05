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
import type Doodad from "game/doodad/Doodad";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import type Tile from "game/tile/Tile";
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
declare const _default: Action<[[ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Undefined]], import("../../Human").default<number>, void, ToggleVehicleCanUse, [(Item | Doodad | undefined)?]>;
export default _default;
