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
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type { IBiomeCreatureZones } from "@wayward/game/game/entity/creature/zone/ICreatureZone";
import type Human from "@wayward/game/game/entity/Human";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type Tile from "@wayward/game/game/tile/Tile";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type Rectangle from "@wayward/game/utilities/math/shapes/Rectangle";
import WorldZ from "@wayward/utilities/game/WorldZ";
import type { Random } from "@wayward/utilities/random/Random";
export declare const DEFAULT_ATTEMPTED_CREATURE_SPAWNS = 10;
export declare class CreatureZone {
    private tier?;
    private creatureSetOffset?;
    private biome?;
    private zLayer?;
    private creatureSpawnTimer;
    kills: number;
    tames: number;
    setup: boolean;
    private civilizationScore?;
    civilizationScoreTiles: SaferNumberIndexedObject<number>;
    zonePoint: IVector3;
    islandId: IslandId;
    rectangle: Rectangle;
    private _spawnableCreatures?;
    private _spawnableCreaturesAtTier?;
    tiles(): Iterable<Tile>;
    getCivilizationScore(): number;
    getCurrentCreatures(): Creature[];
    getCreaturesWithinZoneBounds(): Creature[];
    getPlayersWithinZoneBounds(): Human[];
    getSpawnableCreatures(atAnyTier?: boolean): CreatureType[];
    private flattenCreatureZoneTier;
    get island(): Island;
    get description(): IBiomeCreatureZones | undefined;
    /**
     * Gets the tier of this zone.
     * - Either this zone's saved tier, if it was overwritten
     * - Or the island's randomly generated starting tier + the zone's distance from the island's starting zone
     */
    getTier(): number;
    /**
     * Gets the current creature set for this zone
     */
    getCreatureSet(): CreatureType[];
    private getCreatureSetFromGroup;
    setTier(tier: number): void;
    setLayer(zLayer: WorldZ): void;
    setBiome(biome: BiomeType): void;
    reroll(random?: Random): void;
    private reset;
    raiseTier(): void;
    lowerTier(): boolean;
    randomizeLayer(random?: Random): void;
    randomizeBiome(random?: Random): void;
    /**
     * Gets the random creature set offset for this zone on this island.
     * This is a deterministic value that doesn't change for this zone, no matter when the island or zone is first loaded.
     */
    private getCreatureSetOffset;
    /**
     * Called when this zone is "active", ie, a human is in this zone or an adjacent zone
     */
    processTimers(playingHumans: Human[]): void;
    /**
     * Gets a random tile in the zone and attempts to spawn a creature there.
     * @param playingHumans The humans currently playing on the island, if nothing is set, then the creature will spawn regardless of player LOS
     */
    spawnCreature(playingHumans?: Human[]): void;
    /**
     * Spawning initial creatures, performing tile replacements, etc.
     * Method will no-op if called more than once.
     */
    setupZone(force?: boolean): boolean;
    /**
     * Resets & recalculates the civilization score for the zone.
     */
    recalculateCivilizationScore(): void;
    /**
     * Refreshes the provided civilization score for the given tile
     *
     * If civilization score for this zone is "dirty", this method does nothing
     */
    refreshTileCivilizationScore(tile: Tile, isRecalculating?: boolean): void;
    /**
     * Adds civilization score to this zone.
     *
     * If civilization score for this zone is "dirty", this method does nothing
     */
    addCivilizationScore(score: number, source: string | undefined): void;
    private sendMessage;
}
