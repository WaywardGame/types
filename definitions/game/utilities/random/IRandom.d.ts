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
export interface IRandomPushed<T> {
    seed: T;
    history?: Array<IRandomHistory<T>>;
}
export interface IRandomHistory<T> {
    stack: string;
    seeds: T[];
}
export interface IRandomGenerator<T = any> {
    clone(requiresSynchronization?: boolean, initialState?: T): this;
    getSeed(): T;
    pushSeed(seed?: T): void;
    popSeed(): T;
    get(): number;
    advance?(): this;
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
