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
import type { DoodadType } from "game/doodad/IDoodad";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Tile from "game/tile/Tile";
export interface IToggleDoorCanUse extends IActionUsable {
    doodad: Doodad;
    tile: Tile;
    changeType: DoodadType;
}
declare const _default: Action<[[ActionArgument.Doodad, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../../Human").default<number>, true | undefined, IToggleDoorCanUse, [(Doodad | undefined)?, (boolean | undefined)?]>;
export default _default;
