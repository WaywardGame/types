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
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
export type HighlightSelector = [HighlightType, GetterOfOr<string | number>];
export type HighlightSelectorResolved = [HighlightType, string | number];
export interface IHighlight {
    selectors: SupplierOr<HighlightSelector[]>;
    time?: number;
    iterations?: number;
    class?: string;
}
export declare namespace IHighlight {
    function item(item: Item): HighlightSelector | undefined;
    function optionalItem(item?: Item): HighlightSelector | undefined;
    function optionalEquipSlot(item?: Item): HighlightSelector | undefined;
    function container(container: IContainer): HighlightSelector;
    function optionalContainer(maybeContainer: Item): HighlightSelector | undefined;
    function actionSlots(item?: Item): HighlightSelector[];
}
export declare enum HighlightType {
    Stat = 0,
    MenuBarButton = 1,
    Selector = 2,
    Skill = 3,
    ActionSlot = 4,
    EquipSlot = 5,
    ItemType = 6,
    ItemGroup = 7,
    Item = 8,
    Container = 9
}
