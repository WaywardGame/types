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
import type { IslandId } from "game/island/IIsland";
import Island from "game/island/Island";
export default class IslandManager extends Map<IslandId, Island> {
    /**
     * Get the list of islands that contain players
     */
    get active(): Island[];
    /**
     * Get the island at position 0,0
     */
    get default(): Island;
    /**
     * Gets an island by id
     */
    get(islandId: IslandId): Island;
    /**
     * Gets an island by position
     */
    getAt(x: number, y: number): Island | undefined;
    getAt(x: number, y: number, error: true): Island;
    /**
     * Gets or creates a new island by id
     */
    getOrCreate(islandId: IslandId, ensureUpgraded?: boolean): Island;
    /**
     * Unloads islands that are no longer needed
     */
    cleanup(): void;
}
