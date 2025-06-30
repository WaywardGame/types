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
 * Helps instruct when to tick.
 * Times are based on performance.now()
 */
export declare class TickHelper {
    /**
     * Time the last tick occurred
     */
    lastTickTime: number | undefined;
    /**
     * Time the next tick should run
     */
    nextTickTime: number | undefined;
    /**
     * Check if a tick is scheduled
     */
    get hasScheduledTick(): boolean;
    /**
     * Resets internal data
     */
    reset(): void;
    /**
     * Check if we should tick based on the provided timestamp.
     */
    shouldTick(timeStamp?: number): boolean;
    /**
     * Mark that we ticked
     */
    markTick(timeStamp?: number): void;
    /**
     * Schedules a tick
     * @param tickSpeed Game tick speed
     * @param timeStamp Timestamp or undefined if it's not available from the caller
     * @param minTime Minimum amount of time until the next time should run
     */
    scheduleTick(tickSpeed?: number, timeStamp?: number, minTime?: number): void;
    /**
     * Clears any pending scheduled tick
     */
    unscheduleTick(): void;
    /**
     * Checks if the amount of time has passed since the previous tick
     * @param delay Delay
     * @param timeStamp Timestamp or undefined if it's not available from the caller
     */
    hasTimePassedSinceLastTick(delay: number, timeStamp?: number): boolean;
}
