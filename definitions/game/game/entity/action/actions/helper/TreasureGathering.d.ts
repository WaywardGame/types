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
import type Human from "game/entity/Human";
import type Item from "game/item/Item";
import type DrawnMap from "game/mapping/DrawnMap";
import type { ITreasure } from "game/mapping/DrawnMap";
import type { IVector3 } from "utilities/math/IVector";
declare namespace TreasureGathering {
    interface IGatherable {
        map: DrawnMap;
        mapItem?: Item;
        toolRange?: number;
        maxRange?: number;
        treasure: ITreasure;
        position: IVector3;
    }
    enum GatherablesResult {
        Blocked = 0,
        NoTreasure = 1,
        NoMapsForTreasure = 2
    }
    interface IGatherablesResult {
        gatherables?: IGatherable[];
        result?: GatherablesResult;
    }
    function getGatherable(executor: Human, itemRange: number, requireMap: boolean, maxRange?: number): IGatherablesResult;
    enum Result {
        NoTreasure = 0,
        NotYet = 1,
        Gathered = 2
    }
    function gather({ map, mapItem, treasure, position: { x, y, z }, maxRange, toolRange }: IGatherable, action: IActionHandlerApi<Human>, tool?: Item): Result;
}
export default TreasureGathering;
