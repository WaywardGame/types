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
import type * as ssh2 from "ssh2";
import type Log from "@wayward/utilities/Log";
export declare const globalHistory: Map<string, string[]>;
export declare const maxHistory = 50;
export interface ISshStream {
    write(data: string): void;
    end(): void;
    exit(code: number): void;
    on(name: "error", callback: (ex: any) => void): void;
    on(name: "data", callback: (data: {
        toString(): string;
    }) => void): void;
}
export interface ISshSession extends ssh2.Session {
    clientId: string;
    clientLog: Log;
}
