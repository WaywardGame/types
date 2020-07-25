/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ItemType } from "item/IItem";
import { SortType } from "SortType";
export declare enum DialogId {
    Inventory = 0,
    Crafting = 1,
    Equipment = 2,
    Map = 3,
    Container = 4,
    Custom = 5
}
export interface IUiScreen {
    bindCatcher?: number;
    selector(): string;
    bindElements(): void;
    unbindElements(): void;
    show(data?: any): void;
    hide(): void;
    isVisible(): void;
}
export interface IDialogInfo {
    id?: string;
    title?: string;
    open?: boolean;
    x?: number;
    y?: number;
    width?: number | "auto";
    height?: number | "auto";
    minWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    maxWidth?: number;
    canResizeHeight?: boolean;
    resizable?: boolean;
    onOpen?(): void;
    onClose?(): void;
    onResizeStop?(): void;
}
export interface IQuickSlotInfo {
    itemType: ItemType;
    action: IContextMenuAction | undefined;
}
export interface IContainerSortInfo {
    sortType: SortType;
    reverse?: boolean;
}
export interface IContextMenuAction {
    action: string;
    text: string;
    keybind?: number;
    data?: any;
}
export declare enum UiEvent {
    HelpShow = 0,
    HelpHide = 1
}
