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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type Tile from "@wayward/game/game/tile/Tile";
export interface IToggleDoorCanUse extends IActionUsable {
    doodad: Doodad;
    tile: Tile;
    changeType: DoodadType;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.DoodadNearby], [arg1: ActionArgument.Undefined, ActionArgument.Boolean]], ActionType.ToggleDoor, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, boolean, IToggleDoorCanUse, [(Doodad | undefined)?, (boolean | undefined)?]>;
export default _default;
