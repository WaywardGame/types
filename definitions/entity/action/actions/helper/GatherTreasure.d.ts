/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IActionHandlerApi } from "entity/action/IAction";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import DrawnMap, { ITreasure } from "game/mapping/DrawnMap";
import Item from "item/Item";
export declare enum GatherTreasureResult {
    NoTreasure = 0,
    NotYet = 1,
    Gathered = 2
}
export default function (map: DrawnMap, treasure: ITreasure, action: IActionHandlerApi<Player | NPC>, tool?: Item): GatherTreasureResult;