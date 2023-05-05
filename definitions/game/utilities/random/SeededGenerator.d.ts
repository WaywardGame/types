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
import type { IRandomGenerator, IRandomHistory } from "utilities/random/IRandom";
/**
 * Based class for all seeded generators
 */
export declare abstract class SeededGenerator<T> implements IRandomGenerator {
    requiresSynchronization: boolean;
    private history;
    private maxHistoryLength;
    protected state: T;
    private readonly pushedStates;
    constructor(requiresSynchronization: boolean, initialState?: T);
    abstract clone(requiresSynchronization?: boolean): this;
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
    advance(): this;
}
