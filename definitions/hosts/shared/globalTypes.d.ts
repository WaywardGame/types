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
import type { IWaywardPreload } from "./interfaces";
import type { IElectron } from "./ipc/electron";
export interface ModuleLoaderConfig {
    baseUrl: string;
    paths: Record<string, string>;
    urlArgs?: string;
}
export interface ModuleLoader {
    defined: Record<string, any>;
    configModuleImport(config: ModuleLoaderConfig): void;
    processModules(): Promise<void>;
    importAdditionalScript(script: string, onLoad?: () => void, onError?: (err: any) => void): void;
    importAdditionalModule<T = unknown>(module: string, onLoad?: (mod: any) => void, onError?: (err: any) => void): Promise<T>;
    importAdditionalModules<T = unknown[]>(modules: string[], onLoad?: (...mods: any[]) => void, onError?: (err: any) => void): Promise<T>;
    allowRedefine(name: string): void;
    hasModule(name: string): boolean;
}
export interface IWaywardPreloadLoader {
    installPath?: string;
    getObject?: () => IWaywardPreload;
}
export interface IWaywardTitle {
    isSimplified?: boolean;
    includeBuild?: boolean;
    isLauncher?: boolean;
    isDedicatedServer?: boolean;
    testAppId?: string;
    testTitleId?: string;
}
export interface IWaywardTitleBar {
    customTitleBar: boolean;
    title: IWaywardTitle;
    platform: string;
    isMaximized: boolean;
    electron: IElectron;
}
export interface IBuild {
    name: string;
    time: number;
    publishName?: string;
    publishTime?: string;
}
export interface IBuildId {
    date: number;
    number: number;
}
declare global {
    interface Window {
        require: any;
        electronRequire: any;
        ModuleLoader: ModuleLoader | undefined;
        waywardPreload: IWaywardPreloadLoader | undefined;
        waywardTitleBar: IWaywardTitleBar | undefined;
        getScaleFactor(): number;
        __modulename: string | undefined;
    }
}
