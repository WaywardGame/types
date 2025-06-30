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
export declare class Graceful<T> {
    private ifFailReturn;
    private errorMessage;
    private sources;
    constructor(...sources: string[]);
    setFailureReturn(failureReturn: T): this;
    setErrorMessage(message: string): this;
    setSources(...sources: string[]): this;
    execute<T1 = any>(functionToCallGracefully: (arg1: T1, ...args: any[]) => T): (...args: any[]) => any;
}
