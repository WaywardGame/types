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
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
/**
 * Tiles can be containers and they will always be contained within this container
 */
export declare class TileItemContainer implements IContainer {
    readonly islandId: IslandId;
    /**
     * Note: This will never directly contain items.
     */
    readonly containedItems: Item[];
    constructor(islandId: IslandId);
    toString(): string;
}
