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
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
export interface IStartFireCanUse extends IActionUsable {
    tile: Tile;
    kindlingNeeded: boolean;
    kindlingFuelNeeded: boolean;
    tinderNeeded: boolean;
    fuelNeeded: boolean;
    doodad?: Doodad;
    kindling?: Item;
    tinder?: Item;
    fuel?: Item;
    tileEvent?: TileEvent;
}
declare const _default: Action<[ActionArgument.ItemInventory, [arg1: ActionArgument.Undefined, ActionArgument.ItemInventory], [arg1: ActionArgument.Undefined, ActionArgument.ItemNearby], [arg1: ActionArgument.Undefined, ActionArgument.ItemNearby], [arg1: ActionArgument.Undefined, ActionArgument.ItemNearby]], ActionType.StartFire, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IStartFireCanUse, [Item, (Item | undefined)?, (Item | undefined)?, (Item | undefined)?, (Item | undefined)?]>;
export default _default;
