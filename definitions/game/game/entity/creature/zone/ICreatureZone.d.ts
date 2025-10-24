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
import type { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type { PartOfDay } from "@wayward/game/game/time/ITimeManager";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import type WorldZ from "@wayward/utilities/game/WorldZ";
export declare namespace ZoneId {
    function make(x: number, y: number, axisCount: number): number;
    function resolve(id: number, axisCount: number): IVector2;
    function resolve(id: number, axisCount: number, z: number): IVector3;
}
export interface IBiomeCreatureZones {
    /**
     * The starting/min tier of this biome, as compared to other biomes.
     * IE, say coastal goes up to `tier8`, and volcanic starts at `tier5` (because it's inherently harder).
     *
     * Defaults to `0`.
     */
    startingTier?: number;
    /**
     * The size of a zone, on the X and Y axes.
     */
    size?: number;
    /**
     * A multiplier for the zone distance tier modifier.
     *
     * IE, by default, moving one zone adjacent from 0 increases the tier by 1.
     * With a multiplier of 2/3, it only increases the tier every 2/3 zones.
     */
    scaling?: number;
    creatures?: IBiomeCreatureZoneTiers;
    guardians?: IBiomeGuardianZoneTiers;
    tileReplacements?: IBiomeTileReplacements;
    doodadReplacements?: IBiomeDoodadReplacements;
    creatureCombos?: IBiomeCreatureCombos;
}
export type IBiomeCreatureZoneTiers = PartialRecord<`tier${number}`, IBiomeCreatureZoneTier>;
export type IBiomeCreatureZoneTier = Map<WorldZ, IBiomeCreatureZoneSpawnGroup[]>;
export type IBiomeCreatureZoneSpawnGroup = PartialRecord<PartOfDay, CreatureType[][]>;
export declare function creatureZoneTiers(tiers: IBiomeCreatureZoneTiers): IBiomeCreatureZoneTiers;
export type IBiomeGuardianZoneTiers = PartialRecord<`tier${number}`, IBiomeGuardianZoneTier>;
export type IBiomeGuardianZoneTier = PartialRecord<WorldZ, CreatureType[]>;
export declare function guardianZoneTiers(tiers: IBiomeGuardianZoneTiers): IBiomeGuardianZoneTiers;
export interface IBiomeTileReplacement {
    where: ArrayOr<TerrainType>;
    replaceWith: TerrainType;
    /** `0` = 0% chance of replacing all tiles of this type in this zone, `1` = 100%. Defaults to `1`. */
    chance?: number;
}
export type IBiomeTileReplacements = PartialRecord<`tier${number}`, IBiomeTileReplacement[]>;
export declare function tileReplacementsTiers(replacements: IBiomeTileReplacements): IBiomeTileReplacements;
export interface IBiomeDoodadReplacement {
    where: ArrayOr<DoodadType>;
    replaceWith: DoodadType | null;
    /** Upon replacing or removing the doodad, also change the terrain to this type */
    replaceTerrain?: TerrainType;
    /** `0` = 0% chance of replacing all doodads of this type in this zone, `1` = 100%. Defaults to `1`. */
    chance?: number;
}
export type IBiomeDoodadReplacements = PartialRecord<`tier${number}`, IBiomeDoodadReplacement[]>;
export declare function doodadReplacementsTiers(replacements: IBiomeDoodadReplacements): IBiomeDoodadReplacements;
export interface IBiomeCreatureCombo {
    /** The doodad to spawn when the creature is present. */
    doodad?: DoodadType;
    /** The tile event to spawn when the creature is present. */
    tileEvent?: TileEventType;
    /** The item to spawn when the creature is present. */
    item?: ItemType;
    /** `0` = 0% chance of spawning when the creature is present, `1` = 100%. Defaults to `1`. */
    chance?: number;
    /** Number of times to attempt spawning in the zone. Defaults to `1`. */
    attempts?: number;
}
export type IBiomeCreatureCombos = PartialRecord<CreatureType, IBiomeCreatureCombo[]>;
export declare function creatureCombos(spawns: IBiomeCreatureCombos): IBiomeCreatureCombos;
/**
 * The default size of a zone, on each axis. IE, a value of 60 is 60 tiles wide and 60 tiles long.
 */
export declare const CREATURE_ZONE_DEFAULT_SIZE = 60;
/**
 * A multiplier for the distance tier modifier for the default island.
 *
 * IE, by default, moving one zone adjacent from 0 increases the tier by 1.
 * With a multiplier of 4/5, it only increases the tier every 4/5 zones.
 */
export declare const CREATURE_ZONE_DEFAULT_ISLAND_DISTANCE_SCALING_MULTIPLIER: number;
/**
 * A multiplier for the distance tier modifier for other islands.
 *
 * IE, by default, moving one zone adjacent from 0 increases the tier by 1.
 * With a multiplier of 2/3, it only increases the tier every 2/3 zones.
 */
export declare const CREATURE_ZONE_DISTANCE_SCALING_MULTIPLIER: number;
/**
 * The maximum tier modifier an island can have due to its distance.
 */
export declare const CREATURE_ZONE_ISLAND_DISTANCE_TIER_MODIFIER_MAX = 3;
/**
 * The maximum chance for an additional tier to be added to an island due to its distance.
 *
 * IE, at 0.9, for an island to have a tier of 3, at maximum distance, the chance is `0.8 * 0.8 * 0.8`
 */
export declare const CREATURE_ZONE_ISLAND_DISTANCE_TIER_CHANCE_MAX = 0.8;
/**
 * The minimum chance for an additional tier to be added to an island due to its distance.
 *
 * IE, at 0.1, for an island to have a tier of 3, at minimum distance, the chance is `0.1 * 0.1 * 0.1`
 */
export declare const CREATURE_ZONE_ISLAND_DISTANCE_TIER_CHANCE_MIN = 0;
/**
 * The distance an island has to be from the spawn island (0,0) for the additional tier chance to be the maximum value.
 *
 * IE, with a value of 50, at island (50,0) the chance will be `max * max * max`
 */
export declare const CREATURE_ZONE_ISLAND_DISTANCE_MAX = 25;
/**
 * The steepness of the curve, ie, how fast the chance of additional tiers increases.
 * @see {@link Math2.curve2} for more information
 *
 * Examples:
 * - `2` (starts steep, ends gentle. The curve looks like a quarter circle.)
 * - `1` (linear. There is no curve, the chance increases at a consistent rate.)
 *
 * The steepness starts steep and ends gentle to make it so that
 */
export declare const CREATURE_ZONE_ISLAND_DISTANCE_STEEPNESS = 2;
/**
 * Sets a minimum distance that additional tiers can be added to and island via RNG using the above constants and generateStartingTier().
 */
export declare const CREATURE_ZONE_ISLAND_MINIMUM_DISTANCE_FOR_ADDITIONAL_TIERS = 2;
