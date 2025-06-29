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
import type { Reference } from "@wayward/game/game/reference/IReferenceManager";
export declare enum OldUiDialogId {
    Crafting = 0
}
export interface IUiScreen {
    selector(): string;
    bindElements(): void;
    show(data?: any): void;
    hide(): void;
    isVisible(): void;
}
export interface IDialogInfo {
    fromReferenceId?: boolean;
    reference?: Reference;
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
export declare enum CraftingSort {
    Name = 0,
    Skill = 1,
    Category = 2,
    DiscoveredTime = 3,
    CraftableOnly = 4
}
export interface IContainerSortInfo {
    sortType: CraftingSort;
    reverse?: boolean;
}
export declare enum UiEvent {
    HelpShow = 0,
    HelpHide = 1
}
