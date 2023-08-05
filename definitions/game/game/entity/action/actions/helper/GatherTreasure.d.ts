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
import type { IActionHandlerApi } from "game/entity/action/IAction";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import type Item from "game/item/Item";
import type { ITreasure } from "game/mapping/DrawnMap";
import type DrawnMap from "game/mapping/DrawnMap";
export declare enum GatherTreasureResult {
    NoTreasure = 0,
    NotYet = 1,
    Gathered = 2
}
export default function (map: DrawnMap, treasure: ITreasure, action: IActionHandlerApi<Player | NPC>, tool?: Item): GatherTreasureResult;
