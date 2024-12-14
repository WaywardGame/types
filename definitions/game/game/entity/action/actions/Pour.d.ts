/*!
 * Copyright 2011-2024 Unlok
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
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
import type { IWell } from "@wayward/game/game/island/IIsland";
import type { IItemDescription, IItemReturn } from "@wayward/game/game/item/IItem";
import type Tile from "@wayward/game/game/tile/Tile";
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
declare const _default: Action<[ActionArgument.ItemNearby], Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, IPourCanUse, [import("../../../item/Item").default]>;
export default _default;
