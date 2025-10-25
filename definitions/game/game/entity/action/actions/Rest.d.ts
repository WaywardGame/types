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
import { RestType } from "@wayward/game/game/entity/IHuman";
import type { IStatChanging, IStatMax } from "@wayward/game/game/entity/IStats";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type { ITerrainDescription, TerrainType } from "@wayward/game/game/tile/ITerrain";
export interface IRestCanUse extends IActionUsable {
    restType: RestType;
    stamina: IStatMax & IStatChanging;
    underPlayer: boolean;
    tileDescription?: ITerrainDescription;
    tileType: TerrainType;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.ItemNearby, ActionArgument.DoodadNearby], [ActionArgument.Undefined, import("../argument/ActionArgumentEnum").default<RestType, "Resting" | "Sleeping">]], ActionType.Rest, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IRestCanUse, [(import("../../../doodad/Doodad").default | import("../../../item/Item").default | undefined)?, (RestType | undefined)?]>;
export default _default;
