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
import { ContainerSort } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import { SortDirection } from "@wayward/game/save/ISaveManager";
import type { ISorter } from "@wayward/utilities/collection/sort/Sorter";
declare namespace ItemSort {
    function createSorter(sort: ContainerSort, direction?: SortDirection): ISorter<Item | undefined>;
    function value(item: Item | undefined, sort: ContainerSort): string | number;
}
export default ItemSort;
