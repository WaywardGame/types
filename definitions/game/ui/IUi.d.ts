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
import type { MenuId } from "ui/screen/screens/menu/component/IMenu";
import type Menu from "ui/screen/screens/menu/component/Menu";
export declare enum SaveLocation {
    /**
     * Used to mark a field to be saved locally (per save)
     */
    Local = 0,
    /**
     * Used to mark a field to be saved globally (across saves)
     */
    Global = 1,
    /**
     * Used to mark a field to be saved both locally and globally. Local data will override global data, if it exists.
     */
    Both = 2
}
/**
 * Used to mark a field to be saved to either `saveData` or `saveDataGlobal`. Used in conjunction with
 * `IGameScreenApi.registerDataHost(<id>, <the instance that contains fields marked with this decorator>)`
 */
export declare function Save(saveLocation: SaveLocation): any;
export declare function savedProperties(target: any): Map<string, SaveLocation>;
export interface IInterruptMenuFactory {
    withMenu<M extends Menu = Menu>(menuId: MenuId, initializer?: (menu: M) => any): Promise<void>;
}
export declare enum SelectDirection {
    Up = -1,
    Down = 1,
    Left = -2,
    Right = 2
}
export interface LoadMenuArgs {
    _wentBack: boolean;
}
export declare const DIALOG_OPACITY_MIN = 0;
export declare const DIALOG_OPACITY_DEFAULT = 80;
export declare const UI_HOOK_PRIORITY = -99999999999;
