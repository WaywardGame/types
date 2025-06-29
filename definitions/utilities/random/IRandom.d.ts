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
import type { PCGSeededGenerator } from "@wayward/utilities/random/generators/PCGSeededGenerator";
export interface IRandomPushed<T> {
    seed: T;
    history?: Array<IRandomHistory<T>>;
}
export interface IRandomHistory<T> {
    stack: string;
    seeds: T[];
}
export interface IRandomGenerator<T = any> {
    clone(requiresSynchronization?: (state: T) => boolean, initialState?: T): this;
    getSeed(): T;
    pushSeed(seed?: T): void;
    popSeed(): T;
    get(): number;
    advance?(times?: number): this;
    asPCG?: PCGSeededGenerator;
}
export declare enum RandomInstance {
    Seeded = 0,
    MilestoneModifiers = 1,
    IslandModifier = 2
}
export type WeightedOption<T> = [number, T];
export declare enum SeedType {
    Legacy = 0,
    PCG = 1
}
export type RandomSychronizationCheck<State = unknown> = ((state: State) => boolean) | undefined;
