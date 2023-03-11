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
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type { ITerrainDescription, TerrainType } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
export interface ITillCanUse extends IActionUsable {
    tile: Tile;
    isGrass: boolean;
    tileType: TerrainType;
    terrainDescription: ITerrainDescription;
}
declare const _default: Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../../Human").default<number>, void, ITillCanUse, [(import("../../../item/Item").default | undefined)?]>;
export default _default;
