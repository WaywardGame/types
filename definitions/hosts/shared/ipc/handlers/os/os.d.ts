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
/// <reference types="node" />
/// <reference types="node" />
import * as osNative from "os";
import type { IOS } from "../../os";
export declare class SharedOSIPCHandler implements IOS {
    cpus(): Promise<osNative.CpuInfo[]>;
    platform(): Promise<NodeJS.Platform>;
    type(): Promise<string>;
    release(): Promise<string>;
    totalmem(): Promise<number>;
    freemem(): Promise<number>;
    execDetached(command: string, ...args: string[]): void;
}
