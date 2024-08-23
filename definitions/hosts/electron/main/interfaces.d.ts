/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type * as electron from "electron";
import type { ILaunchOptions } from "./launchOptions";
export interface IElectronContainer {
    launchOptions: ILaunchOptions;
    mainWindow?: electron.BrowserWindow;
    consoleMode?: boolean;
    forceWindowedMode?: boolean;
    reloading?: boolean;
    launcher?: boolean;
}
