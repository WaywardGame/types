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
import type { IWaywardPreload } from "./interfaces";
export interface IRequireJs {
    s: any;
    undef(path: string): void;
    onResourceLoad(ctx: any, map: any): void;
    (moduleName: string): any | undefined;
    (moduleNames: string[], onLoad: (...args: any[]) => void, onError: (err: any) => void): void;
}
export interface IWaywardPreloadLoader {
    installPath?: string;
    getObject?: () => IWaywardPreload;
}
declare global {
    interface Window {
        require: any | undefined;
        electronRequire: any | undefined;
        requirejs: IRequireJs | undefined;
        waywardPreload: IWaywardPreloadLoader | undefined;
    }
}
