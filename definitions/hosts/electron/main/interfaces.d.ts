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
import type * as electron from "electron";
import type { IWaywardTitle } from "@wayward/hosts/shared/globalTypes";
import type { ILaunchOptions } from "./launchOptions";
export interface IElectronContainer {
    launchOptions: ILaunchOptions;
    readonly title: IWaywardTitle;
    readonly isDedicatedServer: boolean;
    readonly consoleMode: boolean;
    readonly forceWindowedMode: boolean;
    isLauncher: boolean;
    /**
     * Flag that indicates if the game is being reloaded
     */
    isReloading: boolean;
    /**
     * This is set after the electron browser window is created
     */
    mainWindow?: electron.BrowserWindow;
    /**
     * Window invalidation interval for steam overlay support
     */
    invalidateInternal?: NodeJS.Timeout;
}
