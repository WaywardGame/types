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
import type { ItemType } from "game/item/IItem";
import type { ActionType } from "game/entity/action/IAction";
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
    itemType?: ItemType;
    contextActionSlot?: number;
    contextActionType?: ActionType;
    canUseProtected?: boolean;
    action: IContextMenuAction | undefined;
}
export declare enum SortType {
    Name = 0,
    Group = 1,
    Weight = 2,
    Recent = 3,
    Skill = 4,
    Decay = 5,
    Quality = 6,
    Category = 7,
    Durability = 8,
    DiscoveredTime = 9,
    Worth = 10,
    BestForCrafting = 11,
    Magical = 12
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
    isContextAction?: number;
    actionType?: ActionType;
    canUseProtected?: boolean;
}
export declare enum UiEvent {
    HelpShow = 0,
    HelpHide = 1
}
