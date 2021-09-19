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
import { IActionHandlerApi } from "game/entity/action/IAction";
import NPC from "game/entity/npc/NPC";
import Player from "game/entity/player/Player";
import Item from "game/item/Item";
import DrawnMap, { ITreasure } from "game/mapping/DrawnMap";
import { IVector3 } from "utilities/math/IVector";
export declare enum GatherTreasureResult {
    NoTreasure = 0,
    NotYet = 1,
    Gathered = 2
}
export default function (map: DrawnMap, treasure: ITreasure, actionPoint: IVector3, action: IActionHandlerApi<Player | NPC>, tool?: Item): GatherTreasureResult;
