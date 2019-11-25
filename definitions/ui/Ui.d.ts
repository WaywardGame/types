/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { EquipType } from "entity/IHuman";
import { IContainer, IDismantleComponent, ItemType } from "item/IItem";
import Item from "item/Item";
import "ui/functional/FunctionalSortable";
import "ui/functional/FunctionalTooltip";
import { DialogId, IDialogInfo } from "ui/IUi";
import InGameScreen from "ui/screens/InGameScreen";
import Emitter from "utilities/Emitter";
export default class Ui extends Emitter {
    screenInGame: InGameScreen;
    private readonly elementDocument;
    private readonly elementWindow;
    private readonly elementBody;
    private bodyWidth;
    private bodyHeight;
    private elementScrollableContainers;
    private unloading;
    constructor();
    initialize(): void;
    initializeGameState(): void;
    getBody(): JQuery;
    getWidth(): number;
    getHeight(): number;
    setCheckboxValue(element: JQuery, id: string, checked: boolean): void;
    playClickSound(): void;
    hideInGameScreen(): void;
    onWindowResize(): void;
    isInGameScreenShown(): boolean;
    setupItemBackgrounds(): void;
    loadQuickSlots(): void;
    isContextMenuOpen(): boolean;
    isOptionsOverlayShown(): boolean;
    isOptionsOverlayEnabled(): boolean;
    tooltipRefresh(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    getInventoryItemOrder(): any[];
    updateItem(item: Item): void;
    syncAllItems(): void;
    hideContextMenu(): void;
    hideActionsMenu(): void;
    setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
    setQuickSlot(quickSlot: number, itemId: number, internal?: boolean): void;
    refreshQuickSlots(): void;
    getUsedQuickSlots(): number[];
    removeItemFromQuickSlot(itemId: number): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    shouldRefreshMods(): boolean;
    onGameEnd(): void;
    onUpdateDirection(): void;
    highlight(iterations?: number, ...selectors: Array<string | HTMLElement>): void;
    toggleUIDisplay(hide: boolean): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    changeEquipmentOption(id: "leftHand" | "rightHand"): void;
    closeAllContainers(): void;
    openContainer(container: IContainer, containerName?: string): void;
    closeContainer(container: IContainer): void;
    refreshContainerName(container: IContainer): void;
    isContainerOpen(container: IContainer): boolean;
    addItemToContainer(item: Item, container: IContainer, internal?: boolean, isAddingMultipleItems?: boolean, updateTables?: boolean): void;
    afterAddingMultipleItemsToContainer(container: IContainer): void;
    removeItemFromContainer(item: Item, container: IContainer): void;
    updateInventorySort(): void;
    getDialogInfo(dialogId: DialogId): IDialogInfo;
    setVersionExtra(msg: string): void;
    openDialogs(): void;
    updateScrollableContainersList(): void;
    updateScrollableContainer(this: Element): void;
    cancelSorting(): void;
    private onBeforeUnloadElectron;
    private onBeforeUnloadBrowser;
    private logErrorEvent;
    private removeStyle;
    private appendStyle;
}
