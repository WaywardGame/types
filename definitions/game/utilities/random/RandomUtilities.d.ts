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
import type { IslandId } from "game/island/IIsland";
import { RandomInstance, SeedType } from "utilities/random/IRandom";
import { Random } from "utilities/random/Random";
import { LegacySeededGenerator } from "utilities/random/generators/LegacySeededGenerator";
import { PCGSeededGenerator } from "utilities/random/generators/PCGSeededGenerator";
/**
 * Converts string or number into a map gen seed
 * Prevents negative numbers and integer overflows
 */
export declare function convertStringToSeed(seed: string | number): number;
export declare function getRandom(randomInstance: RandomInstance, islandId?: IslandId): Random<LegacySeededGenerator | PCGSeededGenerator>;
/**
 * Creates a seeded random generator with the latest one available
 */
export declare function createLatestSeededRandom(requiresSynchronization: boolean, seed?: Uint16Array | number): Random<PCGSeededGenerator> | Random<LegacySeededGenerator>;
/**
 * Creates seeded random generator for the given type
 */
export declare function createSeededRandom(seedType: SeedType, requiresSynchronization: boolean, seed?: Uint16Array | number): Random<PCGSeededGenerator> | Random<LegacySeededGenerator>;
/**
 * Random without seeds
 */
export declare const generalRandom: Random<import("utilities/random/IRandom").IRandomGenerator<any>>;
