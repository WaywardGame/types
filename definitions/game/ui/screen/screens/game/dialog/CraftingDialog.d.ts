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
import Bindable from "@wayward/game/ui/input/Bindable";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class CraftingDialog extends Dialog {
    private readonly craftableRecipes;
    private accessible;
    private readonly sort;
    private readonly craftableWrapper;
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected updateCraftableInventories(): void;
    protected onContainerItemAdd(_: any, items: Item[], container: IContainer): void;
    protected onInventoryItemAdd(_: any, items: Item[]): void;
    protected onContainerItemRemove(_: any, items: Item[], previousContainer: IContainer | undefined): void;
    protected onInventoryItemRemove(_: any, items: Item[]): void;
    private addItem;
    private addCraftable;
    private removeItem;
}
