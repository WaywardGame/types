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
import type { IActionHandlerApi } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
import type Item from "@wayward/game/game/item/Item";
import type DrawnMap from "@wayward/game/game/mapping/DrawnMap";
import type { ITreasure } from "@wayward/game/game/mapping/DrawnMap";
import type Tile from "@wayward/game/game/tile/Tile";
declare namespace TreasureGathering {
    interface IGatherable {
        map: DrawnMap;
        mapItem?: Item;
        toolRange?: number;
        maxRange?: number;
        treasure: ITreasure;
        gatherPointTile: Tile;
    }
    enum GatherablesResult {
        Blocked = 0,
        NoTreasure = 1,
        NoMapsForTreasure = 2
    }
    interface ICanGather {
        gatherables?: IGatherable[];
        result?: GatherablesResult;
    }
    function canGather(executor: Human, itemRange: number, requireMap: boolean, maxRange?: number): ICanGather;
    enum Result {
        NoTreasure = 0,
        NotYet = 1,
        Gathered = 2
    }
    interface IGatherResult {
        result: Result;
        tile?: Tile;
        treasure?: ITreasure;
    }
    function gather(action: IActionHandlerApi<Human>, itemRange: number, requireMap: boolean, tool?: Item, canGather?: ICanGather): IGatherResult;
}
export default TreasureGathering;
