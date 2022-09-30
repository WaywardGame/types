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
import type Corpse from "game/entity/creature/corpse/Corpse";
import type { ITile } from "game/tile/ITerrain";
export interface IButcherCanUse extends IActionUsable {
    tile: ITile;
    corpses: Corpse[];
}
declare const _default: Action<[ActionArgument.ItemInventory], import("../../Human").default, void, IButcherCanUse, [import("../../../item/Item").default]>;
export default _default;
