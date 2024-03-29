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
import type { IItemDescription } from "game/item/IItem";
import { TerrainType } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
export interface ISmotherFireCanUse extends IActionUsable {
    tile: Tile;
    tileType: TerrainType;
    tileDoodad?: Doodad;
    description: IItemDescription;
    fireTileEvent?: TileEvent;
    smotherableDoodad?: Doodad;
}
declare const _default: Action<[ActionArgument.ItemInventory], import("../../Human").default<number>, void, ISmotherFireCanUse, [import("../../../item/Item").default]>;
export default _default;
