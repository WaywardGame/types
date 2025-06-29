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
import { Quality } from "@wayward/game/game/IObject";
import type { ContainerReference, DisplayableItemType, IDismantleComponent } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { Reference } from "@wayward/game/game/reference/IReferenceManager";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import Message from "@wayward/game/language/dictionary/Message";
import { SortDirection } from "@wayward/game/save/ISaveManager";
import Input from "@wayward/game/ui/component/Input";
import SortRow from "@wayward/game/ui/component/SortRow";
import { GlobalMouseInfo } from "@wayward/game/ui/input/InputManager";
import type { IContainerSortInfo } from "@wayward/game/ui/old/IOldUi";
import { CraftingSort, OldUiDialogId } from "@wayward/game/ui/old/IOldUi";
import BaseScreen from "@wayward/game/ui/old/screens/BaseScreen";
import type ScreenManager from "@wayward/game/ui/screen/ScreenManager";
export type DialogIndexStrings = "inventory" | "crafting-tabs";
export type DialogIndex = DialogIndexStrings | Reference<ReferenceType.Item | ReferenceType.Doodad | ReferenceType.NPC>;
export type DereferencedDialogIndex = DialogIndexStrings | number;
declare global {
    interface JQuery {
        isVisible(): boolean;
        quickShow(): void;
        quickHide(): void;
        getEquipSlot(): number;
    }
    interface JQuery {
        sort: Element[]["sort"];
    }
}
export default class InGameScreen extends BaseScreen {
    elementVisibleInGame: JQuery;
    elementCanvas: JQuery;
    elementDialogCrafting: JQuery;
    elementDialogCraftingContainer: JQuery;
    elementDialogDismantleContainer: JQuery;
    elementDialogCraftingButton: JQuery;
    elementDialogDismantleButton: JQuery;
    craftableItemTypes: ItemType[] | undefined;
    nonCraftableItemTypes: ItemType[] | undefined;
    private dismantleItems;
    private craftingDialogDirty;
    private dismantleDialogDirty;
    private invalidatingTargets;
    private updateCraftsDiscovery;
    constructor();
    selector(): string;
    bindElements(): void;
    toggleCraftingTab(which: "crafting" | "dismantle", canClose?: boolean): void;
    toggleCraftingTabElements(which: "crafting" | "dismantle"): void;
    onShow(): void;
    makeTopDialog(dialog: JQuery): void;
    onHide(): void;
    initializeGameState(): void;
    /**
     * Gets dialog index
     * @param dialogId Dialog id
     * @param containerReference Container reference when opening a container
     * @returns string if it's a named dialog, Reference if it's a container, undefined if no dialog index was retrievable
     */
    getDialogIndex(dialogId: OldUiDialogId, containerReference?: ContainerReference): DialogIndex | undefined;
    /**
     * Gets dialog index
     * @param containerElement Dialog container element
     * @returns string if it's a named dialog, Reference if it's a container, undefined if no dialog index was retrievable
     */
    getDialogIndexByContainerElement(containerElement: JQuery): DialogIndex | undefined;
    /**
     * Dereferences a dialog index into a string, number, or undefined
     */
    private derefenceDialogIndex;
    setupDialog(dialogId: OldUiDialogId, containerReference?: ContainerReference): JQueryUI.DialogOptions;
    blurInputs(): void;
    protected onScreenStateChange(screens: ScreenManager): void;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    onOpenDialog(dialog: JQuery): void;
    focus(): void;
    closeDialog(dialog: JQuery): boolean;
    closeAllDialogs(): boolean;
    autoOpenDialog(dialogId: OldUiDialogId, element: JQuery): boolean;
    openDialogs(): void;
    clampDialogs(): void;
    getItemClass(item?: Item, itemType?: DisplayableItemType, quality?: Quality): string;
    createItemString(itemType: ItemType, item?: Item, extraClass?: string): string;
    craftItem(itemType: ItemType): void;
    onDismantleItemClick(dismantleItem: Item): void;
    unSelectElements(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent, force?: boolean): void;
    createCraftItemElements(containerSortInfo: IContainerSortInfo | undefined, force?: boolean): void;
    private tooltipTarget?;
    onGlobalMouseUpdateTarget(mouse: GlobalMouseInfo, target?: HTMLElement): void;
    getFilterText(containerElement: JQuery | undefined): string | undefined;
    getFilterElement(containerElement: JQuery): Input | undefined;
    /**
     * Filtering for containers, inventory, crafting, etc.
     * @param containerElement The jQuery element matching the container to filter.
     * @param updateOnBlank True if items should be filtered when filter text is blank (useful for updates versus user input).
     */
    onFilterInput(containerElement: JQuery, updateOnBlank?: boolean): void;
    /**
     * Invalidates and updates mouse targets after 300 milliseconds (should be enough time to calculate all the new stuffs).
     */
    invalidateTableTargets(): void;
    /**
     * Will force an update on crafting and dismantle tables based on dirty variables.
     */
    updateTablesDirty(which?: "crafting" | "dismantle"): void;
    createSortMenu(container: JQuery, messageType: Message, containerSortInfo?: IContainerSortInfo): SortRow;
    getContainerSortInfo(dialogIndex: DialogIndex | undefined): IContainerSortInfo;
    getDefaultSortType(index: DereferencedDialogIndex | undefined): CraftingSort;
    sortItems(containerElement: JQuery, sortType: CraftingSort, direction: SortDirection, messageType?: Message, activeSort?: boolean): void;
    private isOverlayVisible;
    private readonly onInterrupt;
    private readonly onInterruptClosed;
    private sort;
}
