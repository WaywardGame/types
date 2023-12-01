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
import type Entity from "@wayward/game/game/entity/Entity";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
declare namespace Inventories {
    function ofEntity(entity: Entity): Item[][];
    function get(island: Island, tile: Tile): Item[][];
}
export default Inventories;
