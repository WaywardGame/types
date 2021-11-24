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
/**
 * Sleep
 * @param ms Milliseconds
 * @param signal Abort signal.
 * @returns Undefined if no abort signal. True if aborted when abort signal is provided
 */
export declare function sleep(ms: number): Promise<undefined>;
export declare function sleep(ms: number, signal: AbortSignal): Promise<boolean>;
export declare type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
