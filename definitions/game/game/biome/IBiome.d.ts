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
import type { WorldZ } from "@wayward/utilities/game/WorldZ";
import { type FerocityLevelThresholds } from "@wayward/game/game/deity/IDeities";
import type { IBiomeMapGen, MapGenVersions } from "@wayward/game/game/mapgen/IMapGen";
import type { IBiomeTemperature } from "@wayward/game/game/temperature/ITemperature";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { IRGB } from "@wayward/utilities/Color";
export interface IBiomeDescription<BiomeOptionsType = unknown> extends IModdable {
    disableTravel?: boolean;
    disableHeightMaps?: boolean;
    disableWebWorker?: boolean;
    disableTreasureMaps?: boolean;
    disableLoadingScreen?: boolean;
    loadIntoSpawnPoint?: boolean;
    defaultTerrainBackground: TerrainType;
    defaultCaveEntranceFlooring: TerrainType;
    terrainOverrides?: Set<TerrainType>;
    temperature?: IBiomeTemperature;
    mapGen: MapGenVersions<IBiomeMapGen<BiomeOptionsType>>;
    fog?: IFogDescription;
    /**
     * A record defining maximum thresholds for each ferocity level.
     *
     * When a layer's ferocity thresholds are not set, thresholds for `WorldZ.Overworld` are used.
     * When no thresholds are set *at all*, {@link DEFAULT_FEROCITY_LEVEL_THRESHOLDS} is used.
     *
     * The current ferocity level is equivalent to the level with the threshold *closest* to the current alignment value, without exceeding it.
     *
     * When no thresholds are applicable, `FerocityLevel.Minimal` is used.
     */
    ferocity?: PartialRecord<WorldZ, FerocityLevelThresholds>;
    /**
     * Returns default biome options
     */
    getDefaultOptions?(): BiomeOptionsType;
}
export type GetBiomeOptionType<T> = T extends IBiomeDescription<infer U> ? U : never;
export interface IFogDescription {
    color: IRGB;
    /**
     * The ambient light colour is what light is applied over the terrain texture in the evening and at night,
     * it changes as the day progresses.
     * The ambient light colour is mixed with the fog colour in evenings and at night. However, by default,
     * the ambient light colour is too bright, cuz it's meant to work around white rather than around black.
     *
     * As a result, this setting controls how bright the mixed ambient colour is.
     * `0` = black, `1` = ambient light colour.
     */
    ambientColorFogBrightness?: number;
    /**
     * As the sun sets, the fog colour transitions towards the ambient light colour. Somewhere in the evening,
     * the transition ends, and the maximum amount of the ambient light colour is mixed with the custom fog colour.
     * It stays at the maximum mixture until the sun rises.
     *
     * This setting controls how much of the colour should be the ambient light colour, versus the custom fog colour.
     * `0` = ambient light colour, `1` = custom fog colour.
     */
    ambientColorMaxMix?: number;
    /**
     * After the evening, the fog colour transitions from the ambient light colour/custom fog colour mixture,
     * to a "night" colour made up of black mixed with the mixture.
     *
     * This setting controls how much of the colour should be black, versus the ambient light/custom fog colour mixture.
     * `0` = black, `1` = ambient light/custom fog colour mixture.
     */
    nightFogColorMaxMix?: number;
}
export type BiomeMapGen<BiomeOptionsType = void> = MapGenVersions<IBiomeMapGen<BiomeOptionsType>>;
export type BiomeTypes = Exclude<BiomeType, BiomeType.Random>;
export declare enum BiomeType {
    Random = 0,
    Coastal = 1,
    IceCap = 2,
    Arid = 3,
    Volcanic = 4,
    Wetlands = 5,
    Template = 6,
    Dungeon = 7
}
/**
 * @see {@link IFogDescription.ambientColorFogBrightness }
 */
export declare const DEFAULT_AMBIENT_COLOR_FOG_BRIGHTNESS = 0.2;
/**
 * @see {@link IFogDescription.ambientColorMaxMix }
 */
export declare const DEFAULT_AMBIENT_COLOR_MAX_MIX = 0.5;
/**
 * @see {@link IFogDescription.nightFogColorMaxMix }
 */
export declare const DEFAULT_NIGHT_FOG_COLOR_MAX_MIX = 0.5;
