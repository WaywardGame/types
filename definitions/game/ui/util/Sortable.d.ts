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
import type { Events, IEventEmitter } from "event/EventEmitter";
import Component from "ui/component/Component";
import type { IDraggableInputEvent } from "ui/util/Draggable";
export interface ISortableEvents {
    commit(): any;
}
export type WithSortableEvents<EVENTS_OF> = Events<EVENTS_OF> & ISortableEvents;
export interface ISortableComponent extends Component {
    event: IEventEmitter<this, Events<Component> & ISortableEvents>;
    order?: number[];
    getSortableID(child: Component): number;
}
export default class Sortable {
    private readonly hostRef;
    get host(): ISortableComponent;
    private readonly draggables;
    constructor(host: ISortableComponent);
    private sortDelay;
    setSortDelay(delay: number): this;
    private stickyDistance;
    setStickyDistance(stickyDistance: number): this;
    private sortInputFilter?;
    setInputFilter(filter: (input: IDraggableInputEvent) => any): this;
    commit(): void;
    private onAddChild;
    private savedPosition?;
    private onItemMoveStart;
    private slot?;
    private onItemMove;
    private findItemBefore;
    private onItemMoveEnd;
}
