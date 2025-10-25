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
import type { IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { ITerrainDescription } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
export interface IPickUpCanUse extends IActionUsable {
    tile: Tile;
    doodad: Doodad;
    description: IDoodadDescription;
    pickUpTypes: ItemType[];
    terrainDescription: ITerrainDescription;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.ItemInventory]], ActionType.PickUp, Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IPickUpCanUse, [(Item | undefined)?]>;
export default _default;
