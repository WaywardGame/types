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
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import type { ItemType } from "game/item/IItem";
import type Tile from "game/tile/Tile";
export interface IUncageCanUse extends IActionUsable {
    tile: Tile;
    creature: Creature;
    changeInto: ItemType;
}
/**
 * Releases a creature from a cage
 */
declare const _default: Action<[ActionArgument.ItemInventory], import("../../Human").default<number>, void, IUncageCanUse, [import("../../../item/Item").default]>;
export default _default;
