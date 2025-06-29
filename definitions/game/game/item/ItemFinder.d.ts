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
import type Human from "@wayward/game/game/entity/Human";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type { IGetBestItemsOptions } from "@wayward/game/game/item/IItemManager";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import Observer from "@wayward/game/utilities/Observer";
import type { IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IItemFinderOptions extends Partial<IGetBestItemsOptions> {
    /**
     * A replacement for the *actual* "best" results. Not cached. When `undefined`, uses the actual results.
     */
    replace?(): Item[] | undefined;
    fallback?: ItemFinder;
    postFilter?(item: Item): boolean;
}
export interface IItemFinderEvents extends IEventSubscriberEvents {
    track(): any;
    dispose(): any;
}
declare class ItemFinder extends EventEmitter.Host<IItemFinderEvents> {
    private readonly options;
    private readonly humanRef;
    private readonly containerRef;
    private trackedContainers?;
    private trackedItems?;
    private foundItemIds?;
    private foundItemBest?;
    private disposed?;
    get human(): Human | undefined;
    get container(): IContainer | undefined;
    readonly observe: Observer.IRegistrar<this>;
    readonly observePostFilter: Observer.IRegistrar<this>;
    constructor(human: Human, container: IContainer, options?: IItemFinderOptions);
    best(): Item | undefined;
    all(): Item[];
    markDirty(): void;
    markDirtyPostFilter(): void;
    track(): this;
    dispose(): void;
    protected onItemStateChange(item: Item, event: "durabilityChange" | "toggleProtected" | "qualityChange" | "transformed"): void;
    protected onContainerItemAdd(items: ItemManager, itemsAdded: Item[], containerAddedTo: IContainer): void;
    protected onContainerItemRemove(items: ItemManager, itemsRemoved: Item[], containerRemovedFrom?: IContainer): void;
    protected onPlayerEvent(player: Player): void;
    private compute;
    private trackContainer;
    private untrackContainer;
}
declare namespace ItemFinder {
    interface IBusEvents {
        dispose(): any;
    }
    class Bus extends EventEmitter.Host<IBusEvents> {
        private static readonly humanBuses;
        static compute(human: Human): Bus;
        static get(human?: Human): Bus | undefined;
        private readonly itemFinders;
        private readonly humanRef;
        get human(): Human | undefined;
        constructor(human: Human);
        register(finder: ItemFinder): void;
        deregister(finder: ItemFinder): void;
        dispose(): void;
        protected onItemDurabilityChange(item: Item): void;
        protected onItemToggleProtected(item: Item): void;
        protected onItemQualityChange(item: Item): void;
        protected onItemTransformed(item: Item): void;
        protected onContainerItemAdd(items: ItemManager, itemsAdded: Item[], containerAddedTo: IContainer): void;
        protected onContainerItemRemove(items: ItemManager, itemsRemoved: Item[], containerRemovedFrom?: IContainer): void;
        protected onPlayerEvent(player: Player): void;
    }
}
export default ItemFinder;
