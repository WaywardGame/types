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
import type { IItemBuild, IItemDescription } from "game/item/IItem";
import type { ITile } from "game/tile/ITerrain";
import type { IVector3 } from "utilities/math/IVector";
export interface IBuildCanUse extends IActionUsable {
    description: IItemDescription;
    tile: ITile;
    buildPosition: IVector3;
    buildInfo: IItemBuild;
}
declare const _default: Action<[ActionArgument.ItemNearby, [ActionArgument.Vector3, ActionArgument.Undefined]], import("../../Human").default, void, IBuildCanUse, [import("../../../item/Item").default, (IVector3 | undefined)?]>;
export default _default;
