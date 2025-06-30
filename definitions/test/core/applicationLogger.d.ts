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
import { EventEmitter } from "events";
export declare class ApplicationLogger extends EventEmitter {
    private _logBlockIndentation;
    private readonly _logs;
    getLogs(): string[];
    close(): void;
    logBlock<T = void>(blockIdentifier: string, executor: () => Promise<T>, indent?: boolean): Promise<T>;
    log(message1: any, ...messages: any[]): void;
}
