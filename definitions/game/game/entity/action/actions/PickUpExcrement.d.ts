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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
import type { ITileEventDescription } from "@wayward/game/game/tile/ITileEvent";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
export interface IPickUpExcrementCanUse extends IActionUsable {
    usable: true;
    tile: Tile;
    excrementDescription: ITileEventDescription;
    excrement: TileEvent;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.ItemInventory]], ActionType.PickUpExcrement, Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IPickUpExcrementCanUse, [(import("../../../item/Item").default | undefined)?]>;
export default _default;
