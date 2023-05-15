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
import { RestType } from "game/entity/IHuman";
import type { IStatChanging, IStatMax } from "game/entity/IStats";
import type { ITerrainDescription, TerrainType } from "game/tile/ITerrain";
export interface IRestCanUse extends IActionUsable {
    restType: RestType;
    stamina: IStatMax & IStatChanging;
    underPlayer: boolean;
    tileDescription?: ITerrainDescription;
    tileType: TerrainType;
}
declare const _default: Action<[[ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Undefined], [ActionArgument.RestType, ActionArgument.Undefined]], import("../../Human").default<number>, void, IRestCanUse, [(import("../../../item/Item").default | import("../../../doodad/Doodad").default | undefined)?, (RestType | undefined)?]>;
export default _default;
