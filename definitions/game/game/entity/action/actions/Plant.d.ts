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
import type { DoodadType, IDoodadDescription } from "game/doodad/IDoodad";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type { ITerrainDescription, TerrainType } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
export interface IPlantCanUse extends IActionUsable {
    plantType: DoodadType;
    plantDescription: IDoodadDescription;
    tileType: TerrainType;
    terrainDescription?: ITerrainDescription;
    tile: Tile;
}
declare const _default: Action<[ActionArgument.ItemInventory], import("../../Human").default<number>, void, IPlantCanUse, [import("../../../item/Item").default]>;
export default _default;
