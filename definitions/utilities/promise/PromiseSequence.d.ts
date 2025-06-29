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
/**
 * Allows queuing up a promise and resolving it once it runs.
 * Promises will run sequentially in FIFO
 */
export declare class PromiseSequence {
    private readonly _promises;
    get length(): number;
    wait(): Promise<void>;
    run<T>(executor: () => Promise<T>): Promise<T>;
}
