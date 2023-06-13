/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export type HighlightSelector = [HighlightType, GetterOfOr<string | number>];
export interface IHighlight {
    selectors: SupplierOr<HighlightSelector[]>;
    time?: number;
    iterations?: number;
    class?: string;
}
export declare module IHighlight {
    function itemById(id: number): HighlightSelector;
}
export declare enum HighlightType {
    Stat = 0,
    MenuBarButton = 1,
    Selector = 2,
    Skill = 3,
    ActionSlot = 4,
    EquipSlot = 5
}
