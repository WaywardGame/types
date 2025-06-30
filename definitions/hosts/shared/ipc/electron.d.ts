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
import type { IIPC } from "../ipc";
export declare const electronIPC: IIPC<IElectron>;
export interface IElectron {
    getPreloadInfo(): Promise<any>;
    getGPUInfo(): Promise<any>;
    getGPUFeatureStatus(): Promise<any>;
    toggleDevTools(): Promise<void>;
    log(...args: any[]): Promise<void>;
    startContentTraceRecording(): Promise<void>;
    stopContentTraceRecording(logPath: string): Promise<void>;
    enableOverlaySupport(enable: boolean): Promise<void>;
    setFullScreen(fullscreen: boolean): Promise<void>;
    setCustomTitleBar(enabled: boolean): Promise<void>;
    isMaximized(): Promise<boolean>;
    minimizeWindow(): Promise<void>;
    maximizeOrUnmaximizeWindow(): Promise<void>;
    reloadWindow(): Promise<void>;
    invalidateWindow(): Promise<void>;
    destroyWindow(): Promise<void>;
    isFullScreen(): Promise<boolean>;
    showSaveDialog(defaultPath: string, filterName: string, filterExtension: string): Promise<string | undefined>;
    showOpenDirectoryDialog(defaultPath?: string): Promise<string[]>;
}
