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
import type Doodad from "game/doodad/Doodad";
import type { DoodadType } from "game/doodad/IDoodad";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type { ITile } from "game/tile/ITerrain";
export interface IToggleDoorCanUse extends IActionUsable {
    doodad: Doodad;
    tile: ITile;
    changeType: DoodadType;
}
declare const _default: Action<[[ActionArgument.Doodad, ActionArgument.Undefined]], import("../../Human").default, true | undefined, IToggleDoorCanUse, [(Doodad | undefined)?]>;
export default _default;
