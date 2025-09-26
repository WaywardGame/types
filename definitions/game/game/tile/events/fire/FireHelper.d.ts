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
import type { ILootItem } from "@wayward/game/game/ILoot";
import type { Quality } from "@wayward/game/game/IObject";
import type Island from "@wayward/game/game/island/Island";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
declare namespace FireHelper {
    function dissassemblyBurn(island: Island, item: Item, tile: Tile, disassembly: boolean): Item[];
    function harvestGatherBurn(step: number, resources: ILootItem[] | undefined, tile: Tile, quality: Quality | undefined, tileEvent: TileEvent): void;
    function burnsLike(burnsLikeItem: ItemType, tileEvent: TileEvent, tile: Tile, quality: Quality | undefined): Item[];
}
export default FireHelper;
