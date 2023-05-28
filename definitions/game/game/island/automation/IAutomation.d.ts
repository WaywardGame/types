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
import type Human from "game/entity/Human";
import type { IslandId } from "game/island/IIsland";
import type { ItemType, ItemTypeGroup } from "game/item/IItem";
import type Item from "game/item/Item";
export interface IAutomationInitialState {
    items?: Array<ItemType | ItemTypeGroup>;
    /**
     * Delay before executing steps
     */
    delay?: number;
}
export interface IAutomationContextState {
    human: Human;
    islandId: IslandId;
    /**
     * Items created via initial state
     */
    items: Item[];
}
