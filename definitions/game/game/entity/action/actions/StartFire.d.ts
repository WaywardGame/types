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
import type Doodad from "game/doodad/Doodad";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
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
declare const _default: Action<[ActionArgument.ItemInventory, [ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.ItemNearby, ActionArgument.Undefined]], import("../../Human").default<number>, void, IStartFireCanUse, [Item, (Item | undefined)?, (Item | undefined)?, (Item | undefined)?, (Item | undefined)?]>;
export default _default;
