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
import type { IWaywardPreload } from "./interfaces";
import type { IElectron } from "./ipc/electron";
export interface IRequireJs {
    s: {
        contexts: {
            _: {
                defined: Record<string, any>;
            };
        };
    };
    undef(path: string): void;
    onResourceLoad(ctx: any, map: any): void;
    (moduleName: string): any;
    (moduleNames: string[], onLoad: (...args: any[]) => void, onError: (err: any) => void): void;
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
        requirejs: IRequireJs | undefined;
        waywardPreload: IWaywardPreloadLoader | undefined;
        waywardTitleBar: IWaywardTitleBar | undefined;
        getScaleFactor(): number;
    }
}
