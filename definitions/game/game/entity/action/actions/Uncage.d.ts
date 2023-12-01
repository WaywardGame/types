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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type Tile from "@wayward/game/game/tile/Tile";
export interface IUncageCanUse extends IActionUsable {
    tile: Tile;
    creature: Creature;
    changeInto: ItemType;
}
/**
 * Releases a creature from a cage
 */
declare const _default: Action<[ActionArgument.ItemInventory], import("../../Human").default<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, IUncageCanUse, [import("../../../item/Item").default]>;
export default _default;
