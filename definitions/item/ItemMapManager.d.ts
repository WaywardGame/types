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
import DrawnMap from "game/mapping/DrawnMap";
import { IVector3 } from "utilities/math/IVector";
export default class ItemMapManager {
    private map?;
    /**
     * Sets the map associated with this item.
     * @param islandId The ID of the island containing the associated map.
     * @param mapId The index of the map in the `island.treasureMaps` array.
     */
    set(islandId: string, mapId: number): boolean;
    /**
     * If the associated map is already on the given island, does nothing. If not, associates the map with a map on the given island,
     * chosen by the given properties:
     * @param completed Whether the associated map should be a completed one
     * @param randomDecimal A decimal to use to choose which map on this island to use
     */
    setIsland(island: string, completed: boolean, randomDecimal: number): boolean;
    /**
     * Sets this map to an unlinked, unplotted map of a given position on the given island. The map will be JIT-generated,
     * afterwards a linked map.
     */
    setUnplotted(island: string, position: IVector3): boolean;
    /**
     * If this item is a tattered map or a drawn map, this will return its associated `DrawnMap` instance.
     */
    get(): DrawnMap | undefined;
    /**
     * @returns whether the associated map is on the current island
     */
    isOfIsland(): boolean;
    /**
     * Randomises which map is associated with this item.
     * @param chanceOfGivingCompletedMap By default, 10% chance of becoming associated with an already-completed map.
     * @param chanceOfGivingMapFromOtherIsland By default, 50% chance of, rather than becoming associated with an already-completed map,
     * instead becoming associated with a map on another island.
     * Note: If there are no maps on the current island, will always become associated with a map on another island regardless of chance.
     * @returns whether this item is now associated with a map on this island
     */
    randomize(chanceOfGivingCompletedMap?: number, chanceOfGivingMapFromOtherIsland?: number, islandId?: string, randomDecimal?: number): boolean;
}
