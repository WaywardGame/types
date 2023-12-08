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
import { Quality } from "@wayward/game/game/IObject";
import { ItemType, type IContainer } from "@wayward/game/game/item/IItem";
import type { IMoveItemOptions } from "@wayward/game/game/item/IItemManager";
import type Item from "@wayward/game/game/item/Item";
import ItemManager from "@wayward/game/game/item/ItemManager";
import type Tile from "@wayward/game/game/tile/Tile";
import Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Bindable from "@wayward/game/ui/input/Bindable";
import ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import type { IDraggableComponentSubscriber, ISortableComponent, WithSortableEvents } from "@wayward/game/ui/util/Sortable";
import Sortable from "@wayward/game/ui/util/Sortable";
import { type IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum ContainerBucketItemListClasses {
    Main = "container-bucket-item-list",
    Anchored = "container-bucket-item-list-anchored",
    Active = "container-bucket-item-list-active",
    ActualTransferDestination = "container-bucket-item-list-actual-transfer-destination"
}
export interface IContainerBucketItemListTransferDetails {
    fromList?: ContainerBucketItemList;
    toList?: ContainerBucketItemList;
    fromContainer?: IContainer;
    toContainer?: IContainer;
    item?: Item;
    itemType: ItemType;
    moveAll: boolean;
    quality?: Quality;
    text?: string;
    excludeProtected?: true;
    index?: number;
    silent?: true;
}
export interface IContainerBucketItemListEvents extends WithSortableEvents<Component> {
    addItem(item: Item): any;
    removeItem(item: Item): any;
    stack(type: ItemType): any;
    unstack(type: ItemType): any;
    /**
     * @returns `undefined` to use the default functionality, `boolean` to cancel it. Returning `true` consumes the binding that triggered this event
     */
    transferFrom(details: IContainerBucketItemListTransferDetails): boolean | undefined;
    /**
     * @returns `undefined` to use the default functionality, `boolean` to cancel it. Returning `true` consumes the binding that triggered this event
     */
    transferTo(details: IContainerBucketItemListTransferDetails): boolean | undefined;
}
export declare enum ItemListDifferenceType {
    None = 0,
    Size = 1,
    ItemDifference = 2
}
interface ItemListDifferenceSize {
    type: ItemListDifferenceType.Size;
}
interface ItemListDifferenceItemDifference {
    type: ItemListDifferenceType.ItemDifference;
    itemId: number;
    item?: Item | string;
}
export type ItemListDifference = undefined | ItemListDifferenceSize | ItemListDifferenceItemDifference;
export default class ContainerBucketItemList extends Component implements ISortableComponent {
    readonly event: IEventEmitter<this, IContainerBucketItemListEvents>;
    readonly sortable: Sortable;
    private containerRef?;
    get container(): IContainer | undefined;
    isStacked(type?: ItemType): boolean | undefined;
    constructor(container?: IContainer);
    private readonly activeReasons;
    toggleActive(reason: string, active: boolean): void;
    getSortableID(child: Component & Partial<ItemComponent>): number | undefined;
    setContainer(container?: IContainer): this;
    private filter;
    setFilter(filter: string): void;
    resort(): void;
    private readonly transientItemComponents;
    addTransientItem(item: Item): ItemComponent;
    removeTransientItem(item: Item): void;
    private readonly itemComponents;
    private getItemComponent;
    private readonly itemStacks;
    private getItemStackComponent;
    refresh(initial?: boolean): void;
    willAccept(item: Item | ItemType): boolean;
    protected getOrderedContainerItems(): Item[];
    private getHovered;
    protected onItemMenu(): boolean;
    onItemEquipToggle(): boolean;
    onItemOpen(): boolean;
    onItemToggleStacked(): boolean;
    private openStack;
    onItemToggleStackOpen(): boolean;
    private closeTimeout?;
    protected onMouseMove(): void;
    private closeStack;
    private stack;
    private unstack;
    onItemProtectToggle(): boolean;
    onItemRename(): boolean;
    onDropItem(api: IBindHandlerApi): boolean;
    private handleDrop;
    onQuickMove(api: IBindHandlerApi): boolean;
    protected onSubscribeDraggableEvents(itemComponent: ItemComponent, events: IDraggableComponentSubscriber<ItemComponent>): void;
    private sortingComponent?;
    getSorting(): ItemComponent | undefined;
    protected onSortStart(itemComponent: ItemComponent): void;
    protected onSortEnd(): void;
    protected onTransferInto(itemComponent: ItemComponent, index: number | undefined, bindable: Bindable | undefined, undo: () => void, oldParent?: ISortableComponent): Promise<void>;
    protected onSort(itemComponent: ItemComponent, index: number, bindable: Bindable | undefined, undo: () => void): Promise<void>;
    protected onContainerOrderUpdate(manager: ItemManager, container: IContainer): void;
    private getAppendStrategy;
    protected onAddItem(manager: ItemManager, items: Item[], container: IContainer, index: number, options?: IMoveItemOptions): Promise<void>;
    protected onRemoveItem(manager: ItemManager, items: Item[], container?: IContainer, containerTile?: Tile): void;
    protected onTransformItem(item: Item, newType: ItemType, oldType: ItemType): void;
    protected onStack(manager: ItemManager, container: IContainer, type: ItemType): void;
    protected onUnstack(manager: ItemManager, container: IContainer, type: ItemType): void;
    protected onTick(): void;
    private itemIdsInElements?;
    private getItemIdsInElements;
    private itemListDiffers;
    private getItemComponentElements;
    private regenerate;
    private transfer;
}
export {};
