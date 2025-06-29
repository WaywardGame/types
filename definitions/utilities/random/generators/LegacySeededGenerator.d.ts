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
import type { RandomSychronizationCheck } from "@wayward/utilities/random/IRandom";
import { SeededGenerator } from "@wayward/utilities/random/SeededGenerator";
/**
 * Legacy seeded generator based on simple maths
 */
export declare class LegacySeededGenerator extends SeededGenerator<number> {
    clone(requiresSynchronization?: RandomSychronizationCheck<number>, initialState?: number): any;
    cloneState(): number;
    protected generateState(): number;
    getNextState(state: number): number;
    protected getResult(state: number): number;
}
