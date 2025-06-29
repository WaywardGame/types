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
import type { IRandomGenerator, IRandomHistory, RandomSychronizationCheck } from "@wayward/utilities/random/IRandom";
import type { PCGSeededGenerator } from "@wayward/utilities/random/generators/PCGSeededGenerator";
/**
 * Based class for all seeded generators
 */
export declare abstract class SeededGenerator<T> implements IRandomGenerator {
    requiresSynchronization: RandomSychronizationCheck<T>;
    private history;
    private maxHistoryLength;
    protected state: T;
    private readonly pushedStates;
    /**
     * SeededGenerator
     * @param requiresSynchronization A function that takes the state and returns true if it's sychronized or false if it will define. Undefined if sychronization is not required.
     * @param initialState Optional initial state
     */
    constructor(requiresSynchronization: RandomSychronizationCheck<T>, initialState?: T);
    get asPCG(): PCGSeededGenerator | undefined;
    abstract clone(requiresSynchronization?: (state: T) => boolean): this;
    protected abstract generateState(): T;
    protected abstract cloneState(): T;
    abstract getNextState(state: T): void;
    protected abstract getResult(state: T): number;
    getSeed(): T;
    setSeed(newSeed: T): void;
    pushSeed(newSeed?: T): void;
    popSeed(): T;
    get(): number;
    startHistory(maxHistory?: number): void;
    getHistory(): Array<IRandomHistory<T>> | undefined;
    takeHistory(): Array<IRandomHistory<T>> | undefined;
    stopHistory(): Array<IRandomHistory<T>>;
    advance(times?: number): this;
}
