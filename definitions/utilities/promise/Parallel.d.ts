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
 * Runs a bunch of tasks up to a specified concurrency limit
 */
export declare class Parallel {
    private readonly concurrency;
    private activeTasks;
    private readonly pendingTasks;
    constructor(concurrency: number);
    /**
     * Task to execute
     * @param executor Executor
     * @return A promise that is resulted to the executed tasks result
     */
    runTask<T>(executor: () => Promise<T>): Promise<T>;
    private onTaskComplete;
}
