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
import type * as osNative from "os";
import type { IIPC } from "../ipc";
export declare const osIPC: IIPC<IOS>;
export interface IOS {
    cpus(): Promise<osNative.CpuInfo[]>;
    freemem(): Promise<number>;
    platform(): Promise<NodeJS.Platform>;
    release(): Promise<string>;
    totalmem(): Promise<number>;
    type(): Promise<string>;
    execDetached(command: string, ...args: string[]): Promise<void>;
}
