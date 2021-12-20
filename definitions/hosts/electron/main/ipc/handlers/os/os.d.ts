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
import type { IIPCHandler } from "../../interfaces";
import type { IOS } from "../../../../../shared/ipc/os";
import { SharedOSIPCHandler } from "../../../../../shared/ipc/handlers/os/os";
declare class OSIPCHandler extends SharedOSIPCHandler implements IIPCHandler<IOS> {
    readonly ipc: import("@wayward/hosts/shared/ipc").IIPC<IOS>;
}
export declare const osIPCHandler: OSIPCHandler;
export {};
