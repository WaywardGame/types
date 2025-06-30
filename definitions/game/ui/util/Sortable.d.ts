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
import Component from "@wayward/game/ui/component/Component";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type { IDraggableComponent, IDraggableEvents, IDraggableInputEvent } from "@wayward/game/ui/util/Draggable";
import type { Events, IEventEmitter, IUntilSubscriber } from "@wayward/utilities/event/EventEmitter";
export declare enum SortableClasses {
    Main = "sortable",
    Slot = "sortable-slot",
    ItemMoving = "sortable-item-moving",
    DocumentHasSortableSorting = "has-sortable-sorting"
}
export type IDraggableComponentSubscriber<COMPONENT extends IDraggableComponent = IDraggableComponent> = IUntilSubscriber<COMPONENT, Events<COMPONENT>>;
export interface ISortableEvents {
    /**
     * Emitted when draggable events are subscribed on an item
     */
    subscribeDraggableEvents(item: ISortableDraggableComponent, untilEvents: IUntilSubscriber<ISortableDraggableComponent, ISortableDraggableEvents>): any;
    /**
     * Emitted when the user begins sorting an item
     */
    sortStart(item: ISortableDraggableComponent): any;
    /**
     * Emitted when the user is no longer sorting an item (for any reason)
     */
    sortEnd(item: ISortableDraggableComponent): any;
    /**
     * Emitted when the order should have changed
     */
    sortableCommit(): any;
    /**
     * Emitted on the user attempting to transfer the item to another sortable
     */
    sortableTransfer(item: ISortableDraggableComponent, index: number | undefined, bindable: Bindable | undefined, undo: () => void, oldParent?: ISortableComponent): any;
    /**
     * Emitted on the user attempting to reorder the item in this sortable
     */
    sort(item: ISortableDraggableComponent, index: number | undefined, bindable: Bindable | undefined, undo: () => void): any;
}
export interface ISortableDraggableEvents extends IDraggableEvents {
    sortableDrop(bindable: Bindable | undefined): any;
    sortableCancel(): any;
    sortableTransfer(): any;
}
export interface ISortableDraggableComponent extends IDraggableComponent {
    event: IEventEmitter<this, ISortableDraggableEvents>;
}
export type WithSortableEvents<EVENTS_OF> = Events<EVENTS_OF> & ISortableEvents;
export interface ISortableComponent extends Component {
    event: IEventEmitter<this, Events<Component> & ISortableEvents>;
    getSortableID(child: Component): number | undefined;
}
export default class Sortable {
    private static readonly sortables;
    static get(host: ISortableComponent): Sortable;
    static get(host?: ISortableComponent): Sortable | undefined;
    private readonly hostRef;
    get host(): ISortableComponent;
    private readonly draggables;
    private constructor();
    private transferId?;
    setTransferId(id?: string): this;
    private sortDelay;
    setSortDelay(delay: number): this;
    private stickyDistance;
    setStickyDistance(stickyDistance: number): this;
    private sorting;
    get isSorting(): boolean;
    get draggableCurrentlySorting(): ISortableDraggableComponent | undefined;
    private sortInputFilter?;
    setInputFilter(filter: (input: IDraggableInputEvent) => any): this;
    private shouldntDrag?;
    setShouldntDrag(filter: (component: ISortableDraggableComponent) => boolean | undefined): this;
    private shouldntApplyPositioningTo?;
    setShouldntApplyPositioningTo(filter: (component: ISortableDraggableComponent) => boolean | undefined): this;
    private cachedOrder?;
    get order(): number[];
    private getCurrentOrder;
    commit(): void;
    /**
     * Cancels the current sort operation
     */
    cancel(): void;
    getById(id?: number): Component | undefined;
    private onAddChild;
    private subscribeDraggableEvents;
    private oldBeforeId?;
    private oldIndex?;
    private sortingDraggable?;
    private onItemMoveStart;
    private activateSortable;
    private inactivateSortable;
    private slot?;
    private activeSortable?;
    private onItemMove;
    private sort;
    private findItemBefore;
    private resetSorting;
    private onItemMoveEnd;
}
