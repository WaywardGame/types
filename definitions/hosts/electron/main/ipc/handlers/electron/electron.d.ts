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
import type { IElectron } from "../../../../../shared/ipc/electron";
import type { IElectronContainer } from "../../../interfaces";
import type { FileSystemIPCHandler } from "../fileSystem/fileSystem";
export declare class ElectronIPCHandler implements IElectron, IIPCHandler<IElectron> {
    private readonly fileSystem;
    readonly ipc: import("@wayward/hosts/shared/ipc").IIPC<IElectron>;
    container: IElectronContainer;
    constructor(fileSystem: FileSystemIPCHandler);
    getPreloadInfo(): Promise<any>;
    getGPUInfo(): Promise<any>;
    getGPUFeatureStatus(): Promise<any>;
    toggleDevTools(): Promise<void>;
    log(...args: any[]): Promise<void>;
    startContentTraceRecording(): Promise<void>;
    stopContentTraceRecording(logPath: string): Promise<void>;
    setFullScreen(fullscreen: boolean): Promise<void>;
    reloadWindow(): Promise<void>;
    invalidateWindow(): Promise<void>;
    destroyWindow(): Promise<void>;
    showSaveDialog(defaultPath: string, filterName: string, filterExtension: string): Promise<string | undefined>;
}
