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
import type Entity from "game/entity/Entity";
import type Island from "game/island/Island";
import type Item from "game/item/Item";
import type { IVector3 } from "utilities/math/IVector";
declare module Inventories {
    function ofEntity(entity: Entity): Item[][];
    function get(island: Island, point: IVector3): Item[][];
}
export default Inventories;
