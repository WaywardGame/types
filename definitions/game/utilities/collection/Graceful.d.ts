/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { LogSource } from "utilities/Log";
export declare class Graceful<T> {
    private ifFailReturn;
    private errorMessage;
    private sources;
    constructor(...sources: Array<string | LogSource>);
    setFailureReturn(failureReturn: T): this;
    setErrorMessage(message: string): this;
    setSources(...sources: Array<LogSource | string>): this;
    execute<T1 = any>(functionToCallGracefully: (arg1: T1, ...args: any[]) => T): (...args: any[]) => any;
}
