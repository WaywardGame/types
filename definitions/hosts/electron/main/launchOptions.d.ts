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
export interface ILaunchOptions {
    additionalChromiumSwitches: string[];
    additionalLogging: number;
    angleBackend: string;
    backgroundThrottling: boolean;
    borderless: boolean;
    colorProfile: string;
    customTitleBar: boolean;
    devtools: boolean;
    disableGpuDriverBugWorkarounds: boolean;
    disableHardwareAcceleration: boolean;
    disableVSync: boolean;
    extraGpuFlags: boolean;
    forceHighPerformanceGpu: boolean;
    forceWaveAudio: boolean;
    forceOverlaySupport: boolean;
    fullscreen: boolean;
    height: "max" | number;
    ignoreGpuBlockList: boolean;
    overlaySupport: boolean;
    internalVersion: number;
    maximized: boolean;
    openGpuInfoPage: boolean;
    openWebGlReport: boolean;
    renderer: string;
    savePath: string;
    useVulkan: boolean;
    webGlVersion: number;
    width: "max" | number;
    x: number | null;
    y: number | null;
    lastGameVersion: string;
    lastElectronVersion: string;
    launcher?: true;
}
export declare const launchOptionsDefault: ILaunchOptions;
