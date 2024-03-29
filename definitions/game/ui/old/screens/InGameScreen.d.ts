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
import Doodad from "game/doodad/Doodad";
import NPC from "game/entity/npc/NPC";
import type NPCManager from "game/entity/npc/NPCManager";
import { Quality } from "game/IObject";
import type { ContainerReference, DisplayableItemType, IContainer, IDismantleComponent } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import type { IMoveItemOptions } from "game/item/IItemManager";
import Item from "game/item/Item";
import type ItemManager from "game/item/ItemManager";
import { Reference, ReferenceType } from "game/reference/IReferenceManager";
import Message from "language/dictionary/Message";
import { SortDirection } from "save/ISaveManager";
import Input from "ui/component/Input";
import SortRow from "ui/component/SortRow";
import type { IBindHandlerApi } from "ui/input/Bind";
import { GlobalMouseInfo } from "ui/input/InputManager";
import type { ISortableEvent } from "ui/old/functional/IFunctionalSortable";
import type { IContainerSortInfo } from "ui/old/IOldUi";
import { OldUiDialogId, SortType } from "ui/old/IOldUi";
import BaseScreen from "ui/old/screens/BaseScreen";
import type ActionBar from "ui/screen/screens/game/static/ActionBar";
import type { ActionSlot } from "ui/screen/screens/game/static/ActionBar";
import { Direction } from "utilities/math/Direction";
export declare enum TextElementId {
    Weight = 0,
    Attack = 1,
    Defense = 2,
    Reputation = 3
}
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
export interface IUiContainer {
    container: IContainer;
    name: string;
    owner: NPC | Doodad | Item;
}
export interface IOldUiContainerItemAdd {
    containerDialogElement?: JQuery;
    containerElement?: JQuery;
    itemsToSync?: Item[];
    skipSaveItemOrder?: boolean;
}
interface IDialogPosition {
    title?: string;
    x: number;
    y: number;
    width: number;
    height: number;
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
    elementContainerDialogs: JQuery[];
    elementOtherDialogs: JQuery[];
    private activeContainer;
    private sortableElement;
    private sortableElementPosition;
    private sortableElementTargetContainer;
    private sortingCancelled;
    private onSortableAction;
    private isCurrentlySorting;
    craftableItemTypes: ItemType[] | undefined;
    nonCraftableItemTypes: ItemType[] | undefined;
    private dismantleItems;
    private craftingDialogDirty;
    private dismantleDialogDirty;
    private invalidatingTargets;
    private updateCraftsDiscovery;
    private addingMultipleItemsToContainer;
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
    setupDialog(dialogId: OldUiDialogId, containerReference?: ContainerReference, highlightItemId?: number): JQueryUI.DialogOptions;
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
    autoOpenDialog(dialogId: OldUiDialogId, element: JQuery): boolean;
    openDialogs(): void;
    clampDialogs(): void;
    getItemClass(item?: Item, itemType?: DisplayableItemType, quality?: Quality): string;
    createItemString(itemType: ItemType, item?: Item, extraClass?: string): string;
    syncItemElements(itemIds: number | number[], forceSyncDecay?: boolean): void;
    private readonly SYMBOL_LAST_NEARLY_DESTROYED;
    private readonly SYMBOL_LAST_NEARLY_DECAYED;
    private readonly SYMBOL_LAST_DECAY;
    syncDecayBar(item: Item, force?: boolean, element?: HTMLElement | null): void;
    insertItemStringToContainer(itemElement: string | JQuery, containerElement: JQuery): void;
    /**
     * Call this before starting to add items to a container
     */
    startAddingMultipleItemsToContainer(container: IContainer): void;
    /**
     * Call this after adding multiple items to a container.
     * You must also call startAddingMultipleItemsToContainer before adding any items
     */
    completeAddingMultipleItemsToContainer(container: IContainer, itemsToSync?: Item[]): void;
    onContainerItemAdd(itemManager: ItemManager, itemsAdded: Item[], container: IContainer, options?: IMoveItemOptions, customOptions?: IOldUiContainerItemAdd): void;
    protected onContainerItemRemove(itemManager: ItemManager, itemsRemoved: Item[], containerRemovedFrom?: IContainer): void;
    protected onNpcRemove(npcManager: NPCManager, npc: NPC): void;
    refreshContainerName(container: IContainer, nestedUpdate?: boolean): void;
    getInventoryItemsInOrder(): any[];
    saveItemOrder(containerElement: JQuery, activeSort?: boolean): void;
    craftItem(itemType: ItemType): void;
    onDismantleItemClick(dismantleItem: Item): void;
    unSelectElements(): void;
    onSortableItemReceive(sortableEvent: ISortableEvent): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent, force?: boolean): void;
    createCraftItemElements(containerSortInfo: IContainerSortInfo | undefined, force?: boolean): void;
    updateItem(item: Item, updateChildren?: boolean): void;
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
    isContainerOpen(value: unknown): boolean;
    openContainer(container: IContainer, containerNameSource?: NPC | Doodad | Item): void;
    closeContainer(container: IContainer): void;
    closeContainerDialog(containerDialog?: JQuery, closeType?: "close" | "destroy"): void;
    closeStaticContainers(): void;
    hasOpenContainer(): boolean;
    closeAllContainers(closeType?: "close" | "destroy"): boolean;
    updateContainerName(containerDialogElement: JQuery, nestedUpdate?: boolean): void;
    updateActiveContainer(): void;
    getActiveContainer(): IUiContainer | undefined;
    getOpenContainers(): IUiContainer[];
    getFilterText(containerElement: JQuery | undefined): string | undefined;
    getFilterElement(containerElement: JQuery): Input | undefined;
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
    createSortMenu(container: JQuery, messageType: Message, containerSortInfo?: IContainerSortInfo): SortRow<number>;
    getContainerSortInfo(dialogIndex: DialogIndex | undefined): IContainerSortInfo;
    getDefaultSortType(index: DereferencedDialogIndex | undefined): SortType;
    sortItems(containerElement: JQuery, sortType: SortType, direction: SortDirection, messageType?: Message, activeSort?: boolean): void;
    onUpdateContainer(containerElement: JQuery, activeSort: boolean): void;
    updateSort(containerElement: JQuery, activeSort: boolean): void;
    isContainerDialogOver(dialogInfo: IDialogPosition, dialogPositions: IDialogPosition[]): boolean;
    onItemQuickMove(api: IBindHandlerApi): boolean;
    onStopItemQuickMove(): boolean;
    onItemMove(api: IBindHandlerApi): boolean;
    onStopItemMove(api: IBindHandlerApi): void;
    onItemEquipToggle(api: IBindHandlerApi): boolean;
    onItemOpen(api: IBindHandlerApi): boolean;
    onItemProtectToggle(api: IBindHandlerApi): boolean;
    onItemRename(api: IBindHandlerApi): boolean;
    onDropItem(api: IBindHandlerApi): boolean;
    onReleaseDrop(): void;
    onMoreInformation(api: IBindHandlerApi): boolean;
    private isOverlayVisible;
    private readonly onInterrupt;
    private readonly onInterruptClosed;
    getHoveredItem(api: IBindHandlerApi): HTMLElement | undefined;
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
export {};
