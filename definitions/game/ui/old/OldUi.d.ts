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
import type { EquipType } from "game/entity/IHuman";
import type NPC from "game/entity/npc/NPC";
import type { IContainer, IDismantleComponent, ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import "ui/old/functional/FunctionalSortable";
import "ui/old/functional/FunctionalTooltip";
import type { DialogId, IDialogInfo } from "ui/old/IOldUi";
import InGameScreen from "ui/old/screens/InGameScreen";
export default class OldUi {
    screenInGame: InGameScreen | undefined;
    private readonly elementDocument;
    private readonly elementWindow;
    private readonly elementBody;
    private bodyWidth;
    private bodyHeight;
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
    isOptionsOverlayShown(): boolean;
    isOptionsOverlayEnabled(): boolean;
    tooltipRefresh(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent, force?: boolean): void;
    filterContainers(): void;
    getInventoryItemOrder(): any[];
    updateItem(item: Item, updateChildren?: boolean): void;
    syncDecayBar(item: Item, syncDamage?: boolean): void;
    syncItemElements(itemIds: number | number[], forceSyncDecay?: boolean): void;
    setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    shouldRefreshMods(): boolean;
    onGameEnd(): void;
    toggleUIDisplay(hide: boolean): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    closeAllContainers(): void;
    hasOpenContainer(): boolean;
    openContainer(container: IContainer | NPC, containerName?: string): void;
    closeContainer(container: IContainer): void;
    refreshContainerName(container: IContainer): void;
    isContainerOpen(value: unknown): value is IContainer;
    addItemToContainer(item: Item, container: IContainer, internal?: boolean, isAddingMultipleItems?: boolean, updateTables?: boolean): void;
    afterAddingMultipleItemsToContainer(container: IContainer): void;
    removeItemFromContainer(item: Item, container: IContainer): void;
    getDialogInfo(dialogId: DialogId): IDialogInfo;
    setVersionExtra(msg: string): void;
    openDialogs(): void;
    cancelSorting(): void;
    logErrorEvent(event: ErrorEvent | (Partial<ErrorEvent> & Error)): void;
    private logPromiseRejectionEvent;
}
