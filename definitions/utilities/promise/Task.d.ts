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
export default class Task {
    private readonly interval;
    static yield(quick?: boolean): Promise<void>;
    static post<T>(callback: () => Promise<T>, priority: "user-blocking" | "user-visible" | "background"): Promise<T>;
    private lastYieldEnd;
    constructor(interval?: number);
    reset(): void;
    get shouldYield(): boolean;
    yield(quick?: boolean): Promise<void> | undefined;
    forceYield(quick?: boolean): Promise<void>;
}
