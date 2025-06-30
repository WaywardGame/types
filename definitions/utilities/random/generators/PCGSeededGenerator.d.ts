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
 * PCG seeded generator based on advanced maths
 */
export declare class PCGSeededGenerator extends SeededGenerator<Uint16Array> {
    private static normalizeState;
    constructor(requiresSynchronization: RandomSychronizationCheck<Uint16Array>, initialState?: Uint16Array | number);
    get asPCG(): PCGSeededGenerator;
    clone(requiresSynchronization?: RandomSychronizationCheck<Uint16Array>, initialState?: Uint16Array | number): any;
    cloneState(): Uint16Array;
    protected generateState(): Uint16Array;
    /**
     * Gets the next state and returns it as a new object
     */
    getNextState(state: Uint16Array): Uint16Array;
    protected getResult(state: Uint16Array): number;
    /**
     * Allow setting seed to number
     */
    setSeed(newSeed: Uint16Array | number): void;
    /**
     * Allow pushing number seeds
     */
    pushSeed(newSeed?: Uint16Array | number): void;
    /**
     * Apply a second seed to the current state, effectively mixing them in a deterministic way
     */
    apply(newSeed?: Uint16Array | number): void;
}
