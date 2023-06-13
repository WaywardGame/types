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
import type { IDoodadDescription } from "game/doodad/IDoodad";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Human from "game/entity/Human";
import type { IWell } from "game/island/IIsland";
import type { IItemDescription, IItemReturn } from "game/item/IItem";
import type Tile from "game/tile/Tile";
export interface IPourCanUse extends IActionUsable {
    tile: Tile;
    isWisp: boolean;
    itemDescription: IItemDescription;
    playersOnTile: Human[];
    waterDoodad?: Doodad;
    waterDoodadDescription?: IDoodadDescription;
    well?: IWell;
    returnOnUse?: IItemReturn | undefined;
}
declare const _default: Action<[ActionArgument.ItemNearby], Human<number>, void, IPourCanUse, [import("../../../item/Item").default]>;
export default _default;
