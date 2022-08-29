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
import type Doodad from "game/doodad/Doodad";
import { EquipType } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import type { IContainer, IDismantleComponent } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import Message from "language/dictionary/Message";
import type { IBindHandlerApi } from "ui/input/Bind";
import { GlobalMouseInfo } from "ui/input/InputManager";
import type { ISortableEvent } from "ui/old/functional/IFunctionalSortable";
import type { IContainerSortInfo, IDialogInfo } from "ui/old/IOldUi";
import { DialogId, SortType } from "ui/old/IOldUi";
import BaseScreen from "ui/old/screens/BaseScreen";
import type ActionBar from "ui/screen/screens/game/static/ActionBar";
import type { ActionSlot } from "ui/screen/screens/game/static/ActionBar";
import { Direction } from "utilities/math/Direction";
import type Vector2 from "utilities/math/Vector2";
export declare enum TextElementId {
    Weight = 0,
    Attack = 1,
    Defense = 2,
    Reputation = 3
}
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
export interface IUiContainer {
    container: IContainer;
    name: string;
    owner: NPC | Doodad | Item;
}
export default class InGameScreen extends BaseScreen {
    overlayBindCatcherId: number;
    shouldResetMovement: boolean;
    shouldCancelSorting: boolean;
    isQuickmoving: boolean;
    elementVisibleInGame: JQuery;
    elementCanvas: JQuery;
    elementActions: JQuery;
    elementDialogs: JQuery;
    elementDialogInventory: JQuery;
    elementDialogInventoryContainer: JQuery;
    elementDialogCrafting: JQuery;
    elementDialogCraftingContainer: JQuery;
    elementDialogDismantleContainer: JQuery;
    elementDialogCraftingButton: JQuery;
    elementDialogDismantleButton: JQuery;
    elementDialogEquipment: JQuery;
    elementDialogEquipmentContainer: JQuery;
    elementVersion: JQuery;
    elementContainerDialogs: JQuery[];
    elementOtherDialogs: JQuery[];
    private activeContainer;
    private sortableElement;
    private sortableElementPosition;
    private sortableElementTargetContainer;
    private sortingCancelled;
    private onSortableAction;
    private isCurrentlySorting;
    private lastGlobalMouseInfo;
    private craftableItemTypes;
    private nonCraftableItemTypes;
    private dismantleItems;
    private craftingDialogDirty;
    private dismantleDialogDirty;
    private invalidatingTargets;
    constructor();
    selector(): string;
    bindElements(): void;
    toggleCraftingTab(which: "crafting" | "dismantle", canClose?: boolean): void;
    toggleCraftingTabElements(which: "crafting" | "dismantle"): void;
    unbindElements(): void;
    bindSortable(element: JQuery): void;
    isSorting(): boolean;
    runSortableAction(sortable: JQuery, action: string, ...data: any[]): void;
    runGlobalSortableAction(action: string, ...data: any[]): void;
    cancelSorting(): void;
    onShow(): void;
    makeActiveContainer(dialog: JQuery): void;
    makeTopDialog(dialog: JQuery): void;
    onHide(): void;
    initializeGameState(): void;
    onGameEnd(): void;
    getDialogIndex(dialogId: DialogId, customDialogInfo?: IDialogInfo): string;
    setupDialog(dialogId: DialogId, highlightItemId?: number, customDialogInfo?: IDialogInfo): JQueryUI.DialogOptions;
    highlightItemElementByItemId(itemId: number, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementByItemType(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementByItemTypeWithNoItemId(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementBySelector(selector: string, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElement(element: HTMLElement, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    getMovementDirection(mouseX: number, mouseY: number): Direction;
    blurInputs(): void;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    onOpenDialog(dialog: JQuery): void;
    focus(): void;
    closeDialog(dialog: JQuery): boolean;
    closeAllDialogs(): boolean;
    autoOpenDialog(index: string | number, element: JQuery): boolean;
    openDialogs(): void;
    clampDialogs(): void;
    getItemClass(item?: Item, itemType?: ItemType): string;
    createItemString(itemType: ItemType, item?: Item, extraClass?: string): string;
    syncItemElements(itemIds: number | number[], forceSyncDecay?: boolean): void;
    private readonly SYMBOL_LAST_DECAY;
    syncDecayBar(item: Item, force?: boolean, elements?: NodeListOf<HTMLElement>): void;
    addItemToContainer(item: Item, container: IContainer, _internal?: boolean, isAddingMultipleItems?: boolean, updateTables?: boolean): void;
    insertItemStringToContainer(itemElement: string | JQuery, containerElement: JQuery): void;
    onAddItemsToContainer(containerElement: JQuery, containerDialogElement: JQuery | undefined, isInventoryContainer: boolean, updateTables?: boolean): void;
    afterAddingMultipleItemsToContainer(container: IContainer): void;
    removeItemFromContainer(item: Item, container: IContainer): void;
    refreshContainerName(container: IContainer): void;
    getInventoryItemsInOrder(): any[];
    saveItemOrder(containerElement: JQuery, activeSort?: boolean): void;
    craftItem(itemType: ItemType): void;
    onDismantleItemClick(dismantleItem: Item | undefined): void;
    getTooltipHtml(element: JQuery): string;
    tooltipEnable(): void;
    tooltipRefresh(): void;
    tooltipDisable(): void;
    tooltipHide(): void;
    unSelectElements(): void;
    onSortableItemReceive(sortableEvent: ISortableEvent): void;
    getEquipSlotItemElement(equip: EquipType): JQuery;
    getItemIdInEquipSlot(equip: EquipType): number | undefined;
    setEquipSlot(equip: EquipType, itemId?: number, internal?: boolean): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent, force?: boolean): void;
    createCraftItemElements(containerSortInfo: IContainerSortInfo): void;
    updateItem(item: Item, updateChildren?: boolean): void;
    onGlobalMouseMove(mouseInfo: GlobalMouseInfo, _: Vector2): void;
    onActionBarSlotUpdate(actionBar: ActionBar, actionSlot: ActionSlot, item?: Item, oldItem?: Item): void;
    private tooltipTarget?;
    onGlobalMouseUpdateTarget(mouse: GlobalMouseInfo, target?: HTMLElement): void;
    onMove(): void;
    /**
     * Gets the dialog element for an item/doodad container (bags, backpacks, chests, etc.) and not inventories dialogs.
     * @param value The container to check.
     */
    getDialogElementFromContainer(value: unknown): JQuery | undefined;
    /**
     * Gets the dialog container element for an inventory or item/doodad container.
     * @param container The container to check.
     */
    getDialogContainerElementForFilter(container: IContainer): JQuery | undefined;
    isContainerOpen(value: unknown): value is IContainer;
    openContainer(container: IContainer | NPC, containerName?: string): void;
    closeContainer(container: IContainer): void;
    closeContainerDialog(containerDialog?: JQuery, closeType?: "close" | "destroy"): void;
    closeStaticContainers(): void;
    hasOpenContainer(): boolean;
    closeAllContainers(closeType?: "close" | "destroy"): boolean;
    updateContainerName(containerDialogElement: JQuery): void;
    updateActiveContainer(): void;
    getActiveContainer(): IUiContainer | undefined;
    getOpenContainers(): IUiContainer[];
    getFilterText(containerElement: JQuery | undefined): any;
    getFilterElement(containerElement: JQuery): JQuery;
    /**
     * Filtering for containers, inventory, crafting, etc.
     * @param containerElement The jQuery element matching the container to filter.
     * @param updateOnBlank True if items should be filtered when filter text is blank (useful for updates versus user input).
     */
    onFilterInput(containerElement: JQuery, updateOnBlank?: boolean): void;
    /**
     * Update the filtered items for each container, to be called when tables are updated. This does not update dismantle or crafting tabs.
     */
    filterContainers(): void;
    /**
     * Invalidates and updates mouse targets after 300 milliseconds (should be enough time to calculate all the new stuffs).
     */
    invalidateTableTargets(): void;
    /**
     * Will force an update on crafting and dismantle tables based on dirty variables.
     */
    updateTablesDirty(which?: "crafting" | "dismantle"): void;
    showSortMenu(element: JQuery, container: JQuery, messageType: Message): void;
    getContainerId(containerElement: JQuery): string;
    sortItems(containerElement: JQuery, sortType: SortType, messageType?: Message, canReverse?: boolean, activeSort?: boolean): void;
    onUpdateContainer(containerElement: JQuery, activeSort: boolean): void;
    updateSort(containerElement: JQuery, activeSort: boolean): void;
    isContainerDialogOver(x: number, y: number): boolean;
    onItemQuickMove(api: IBindHandlerApi): boolean;
    onStopItemQuickMove(): boolean;
    onItemMove(api: IBindHandlerApi): boolean;
    onStopItemMove(api: IBindHandlerApi): void;
    onItemEquipToggle(api: IBindHandlerApi): boolean;
    onItemProtectToggle(api: IBindHandlerApi): boolean;
    onItemRename(api: IBindHandlerApi): boolean;
    onDropItem(api: IBindHandlerApi): boolean;
    onReleaseDrop(): void;
    onMoreInformation(api: IBindHandlerApi): boolean;
    onDismantleTab(): boolean;
    private isOverlayVisible;
    private readonly onInterrupt;
    private readonly onInterruptClosed;
    private getHoveredItem;
    /**
     * Get a number based on an item's magical type/skill/stat in order.
     * @param item An item to sort.
     * @returns A number based on the magical type/skill/stat.
     */
    private getMagicalSortOrder;
    private sort;
    private sortFallback;
    private getSortValue;
    private resolveItemReference;
    private getBestSort;
}
