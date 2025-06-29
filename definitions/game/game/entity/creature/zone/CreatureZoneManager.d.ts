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
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureZone } from "@wayward/game/game/entity/creature/zone/CreatureZone";
import { type IBiomeCreatureZones } from "@wayward/game/game/entity/creature/zone/ICreatureZone";
import type Human from "@wayward/game/game/entity/Human";
import type Island from "@wayward/game/game/island/Island";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import WorldZ from "@wayward/utilities/game/WorldZ";
export interface ICreatureZoneManagerEvents {
    initialize(): any;
    load(): any;
    activeZonesChange(): any;
}
export default class CreatureZoneManager extends EventEmitter.Host<ICreatureZoneManagerEvents> {
    initialized: boolean;
    zones: PartialRecord<WorldZ, Array<CreatureZone | undefined>>;
    offset: IVector2;
    zoneSize: number;
    scaling: number;
    /**
     * Islands have a higher chance of starting at a higher tier the further out you get.
     *
     * This should be displayed in island tooltips and such
     */
    tier: number;
    island: Island;
    isLoaded: boolean;
    private _spawnableCreatures?;
    private _spawnableCreaturesOfTiers?;
    constructor(island: Island);
    /**
     * Returns all spawnable creatures for this island
     */
    getSpawnableCreatures(): CreatureType[];
    /**
     * Returns spawnable creatures from the given tier
     */
    getSpawnableCreatures(tier: number): CreatureType[];
    /**
     * Returns spawnable creatures from minTier to maxTier (inclusive)
     */
    getSpawnableCreatures(minTier: number, maxTier: number): CreatureType[];
    private flattenCreatureZoneTier;
    get description(): IBiomeCreatureZones | undefined;
    /**
     * Gets the number of zones on each axis
     */
    get axisCount(): number;
    /**
     * Gets the minimum tier on this island (biome starting tier + randomly generated additional tier)
     */
    getMinTier(): number;
    /**
     * Gets the estimated maximum tier on this island
     *
     * Note: Does not work correctly on initial island, requires the centre of the island to be the centre zone
     */
    getMaxTier(): number;
    /**
     * Returns an array of all CreatureZones for valid Z layers.
     * (Loading a save that previously had Troposphere doesn't return any zones from the troposphere layer)
     */
    all(): CreatureZone[];
    /**
     * @param zonePoint The zone's internal position (not a tile position)
     */
    getZone(zonePoint: IVector3): CreatureZone;
    /**
     * @param id The zone's internal id
     */
    getZoneById(id: number, z: WorldZ): CreatureZone;
    /**
     * @param point A tile position as an IVector3. Most objects can be passed in as the IVector3
     */
    getZoneAt(point: IVector3): CreatureZone;
    private initZone;
    /**
     * Calculates the distance tier modifier for a zone. Uses euclidean currently
     */
    getZoneDistanceTierModifier(point: IVector2, reverse?: boolean): number;
    private getZonesLayer;
    private activeZones?;
    /**
     * **Note:** Active zones are cached on call, and reset whenever spawns are attempted.
     */
    getActiveZones(playingHumans?: Human[], recalculate?: boolean): CreatureZone[];
    processTimers(playingHumans: Human[]): void;
    /**
     * - Set up the zones using the island's default spawn point (initial island) or the centre (travelled islands)
     * - Save the zone size & distance scaling multiplier permanently as well
     *   so us rebalancing doesn't shift existing islands
     * @param force Re-initialize even if already initialized
     */
    initialize(force?: boolean): void;
    /**
     * The greater the distance from the spawn island, the higher the chance of getting higher tier islands.
     * Each additional tier increase requires an additional check at the chance.
     */
    private generateStartingTier;
    /**
     * Re-initialise CreatureZones (so this data doesn't have to be saved on them)
     */
    load(): void;
    /**
     * Ensures all zones have run their setup function (spawning initial creatures, performing tile replacements, etc)
     */
    setupZones(force?: boolean): void;
    delete(): void;
    onUnserialized(): void;
    /**
     * @returns The total civilization score of all zones
     */
    getTotalCivilizationScore(): number;
    /**
     * Resets & recalculates the civilization score for all zones
     */
    recalculateCivilizationScore(): void;
}
