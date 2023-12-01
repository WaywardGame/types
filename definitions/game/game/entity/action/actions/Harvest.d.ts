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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type { ILootItem } from "@wayward/game/game/ILoot";
import type Item from "@wayward/game/game/item/Item";
export interface IHarvestCanUse extends IActionUsable {
    description: IDoodadDescription;
    doodad: Doodad;
    resources: ILootItem[];
}
declare const _default: Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.Tile, ActionArgument.Undefined]], Doodad | import("../../Human").default<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, IHarvestCanUse, [(Item | undefined)?, (import("../../../tile/Tile").default | undefined)?]>;
export default _default;
