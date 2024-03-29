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
import type { ITerrainDescription } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
export interface IDrinkInFrontCanUse extends IActionUsable {
    tile: Tile;
    terrainDescription?: ITerrainDescription;
    tileType?: TerrainType;
    doodad?: Doodad;
}
declare const _default: Action<[], import("../../Human").default<number>, void, IDrinkInFrontCanUse, []>;
export default _default;
