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
import type { Game } from "@wayward/game/game/Game";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type { IIslandDetails } from "@wayward/game/game/island/Island";
import Island from "@wayward/game/game/island/Island";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import type { SeedType } from "@wayward/utilities/random/IRandom";
import type { BiomeTypes } from "@wayward/game/game/biome/IBiome";
export default class IslandManager extends Map<IslandId, Island> {
    private readonly game;
    constructor(game: Game);
    /**
     * Get the list of islands that contain players
     */
    get active(): Island[];
    /**
     * Get the list of islands that are loaded
     */
    get loaded(): Island[];
    /**
     * Get the island at position 0,0
     */
    get default(): Island;
    /**
     * Gets an island by id
     * @throws Errors if the island does not exist
     */
    get(islandId: IslandId): Island;
    /**
     * Gets an island by id. Try to use "get" instead!
     * @returns Island or undefined if it does not exist
     */
    getIfExists(islandId?: IslandId): Island | undefined;
    /**
     * Gets an island by position
     */
    getAt(x: number, y: number): Island | undefined;
    getAt(x: number, y: number, error: true): Island;
    /**
     * Gets or creates a new island by id
     */
    getOrCreate(islandId: IslandId, ensureUpgraded?: boolean, mapSize?: number): Island;
    /**
     * Unloads islands that are no longer needed
     */
    cleanup(): void;
    getBiomeType(x: number, y: number): BiomeTypes;
    getDetails(x: number, y: number): IIslandDetails;
    generateDetails(position: IVector2, seedType: SeedType, seed?: number): IIslandDetails;
}
