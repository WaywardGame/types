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
import type Human from "@wayward/game/game/entity/Human";
import { ItemType, type IContainer } from "@wayward/game/game/item/IItem";
import type { IMoveItemOptions } from "@wayward/game/game/item/IItemManager";
import type Item from "@wayward/game/game/item/Item";
import ItemManager from "@wayward/game/game/item/ItemManager";
import type Tile from "@wayward/game/game/tile/Tile";
import Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Bindable from "@wayward/game/ui/input/Bindable";
import type ContainerBucket from "@wayward/game/ui/screen/screens/game/component/ContainerBucket";
import ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import type { IDraggableComponentSubscriber, ISortableComponent, WithSortableEvents } from "@wayward/game/ui/util/Sortable";
import Sortable from "@wayward/game/ui/util/Sortable";
import { type IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import type { IMoveItemFilterArgument } from "@wayward/game/game/entity/action/actions/moveItem/MoveItemFilterArgument";
export declare enum ContainerBucketItemListClasses {
    Main = "container-bucket-item-list",
    Anchored = "container-bucket-item-list-anchored",
    Active = "container-bucket-item-list-active",
    ActualTransferDestination = "container-bucket-item-list-actual-transfer-destination",
    HasStackExpanded = "container-bucket-item-list-has-stack-expanded"
}
export interface IContainerBucketItemListTransferDetails extends Omit<IMoveItemFilterArgument, "type"> {
    fromList?: ContainerBucketItemList;
    toList?: ContainerBucketItemList;
    fromContainer?: IContainer;
    toContainer?: IContainer;
    item?: Item;
    itemType: ItemType;
    moveAll: boolean;
    stackList?: ContainerBucketItemList;
    quality?: Quality;
    index?: number;
    silent?: true;
    hidden?: true;
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
    event: IEventEmitter<this, IContainerBucketItemListEvents>;
    readonly sortable: Sortable;
    private containerRef?;
    get container(): IContainer | undefined;
    isStacked(type?: ItemType): boolean;
    /**
     * Returns whether this item's type is stacked in this container, *and* this item is not protected.
     */
    isStacked(item?: Item): boolean;
    getStackedItems(type?: ItemType, excluding?: Item): Item[];
    getStackIndex(type?: ItemType): number | undefined;
    private readonly bucketRef;
    get bucket(): ContainerBucket;
    constructor(bucket: ContainerBucket, container?: IContainer);
    private readonly activeReasons;
    toggleActive(reason: string, active: boolean): void;
    getSortableID(child: Component & Partial<ItemComponent>): number | undefined;
    setContainer(container?: IContainer): this;
    private filter;
    setFilter(filter: string): void;
    resort(): void;
    private checkItemIdsMatch;
    private readonly transientItemComponents;
    addTransientItem(item: Item): ItemComponent | undefined;
    removeTransientItem(item: Item): void;
    ensureItemComponent(item: Item): ItemComponent | undefined;
    private readonly itemComponents;
    private getItemComponent;
    private readonly itemStacks;
    private getItemStackComponent;
    private removeItemStackComponent;
    refresh(initial?: boolean): void;
    willAccept(item: Item | ItemType): boolean;
    protected getOrderedContainerItems(): readonly Item[];
    private getHovered;
    protected onItemMenu(): boolean;
    onItemEquipToggle(): boolean;
    onItemOpen(): boolean;
    onItemToggleStacked(): boolean;
    private openStack;
    onItemToggleStackOpen(): boolean;
    private closeStack;
    private stack;
    private unstack;
    onItemProtectToggle(): boolean;
    onItemRename(): boolean;
    onDropItem(api: IBindHandlerApi): boolean;
    private handleDrop;
    onQuickMove(api: IBindHandlerApi): boolean;
    onQuickMoveFromStack(api: IBindHandlerApi): boolean;
    onQuickMoveToStack(api: IBindHandlerApi): boolean;
    protected onSubscribeDraggableEvents(itemComponent: ItemComponent, events: IDraggableComponentSubscriber<ItemComponent>): void;
    private sortingComponent?;
    getSorting(): ItemComponent | undefined;
    protected onSortStart(itemComponent: ItemComponent): void;
    protected onSortEnd(): void;
    protected onTransferInto(itemComponent: ItemComponent, index: number | undefined, bindable: Bindable | undefined, undo: () => void, oldParent?: ISortableComponent): Promise<void>;
    protected onSort(itemComponent: ItemComponent, index: number, bindable: Bindable | undefined, undo: () => void): Promise<void>;
    protected onContainerItemUpdate(manager: ItemManager, items: Item[], fromContainer: IContainer | undefined, fromContainerTile: Tile | undefined, toContainer: IContainer, human?: Human): void;
    protected onContainerOrderUpdate(manager: ItemManager, container: IContainer): void;
    protected onItemToggleProtected(item: Item): void;
    private getAppendStrategy;
    private addItemAddedStacks?;
    protected onAddItem(manager: ItemManager, items: Item[], container: IContainer, index: number, options?: IMoveItemOptions): Promise<void>;
    private isTransferring;
    protected onRemoveItem(manager: ItemManager, items: Item[], container?: IContainer, containerTile?: Tile): void;
    protected onAddItemDidNotSort(manager: ItemManager, container: IContainer): void;
    protected onTransformItem(item: Item, newType: ItemType, oldType: ItemType): void;
    private filterItem;
    protected onMagicalPropertyChange(item: Item): void;
    protected onStack(manager: ItemManager, container: IContainer, type: ItemType): void;
    protected onUnstack(manager: ItemManager, container: IContainer, type: ItemType): void;
    protected onTick(): void;
    private ensureStackRendered;
    private ensureStackUnrendered;
    private itemIdsInElements?;
    private getItemIdsInElements;
    private getItemElementId;
    private getItemComponentElements;
    private getItemComponentById;
    private regenerate;
    private transfer;
    private getSorter;
}
export {};
