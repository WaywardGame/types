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
import type Human from "@wayward/game/game/entity/Human";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type { IGetBestItemsOptions } from "@wayward/game/game/item/IItemManager";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import Observer from "@wayward/game/utilities/Observer";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IItemFinderOptions extends Partial<IGetBestItemsOptions> {
    /**
     * A replacement for the *actual* "best" results. Not cached. When `undefined`, uses the actual results.
     */
    replace?(): Item[] | undefined;
    fallback?: ItemFinder;
    postFilter?(item: Item): boolean;
}
export interface IItemFinderEvents {
    track(): any;
    dispose(): any;
}
export default class ItemFinder extends EventEmitter.Host<IItemFinderEvents> {
    private readonly options;
    private readonly human;
    private readonly container;
    private trackedContainers?;
    private trackedItems?;
    private foundItemIds?;
    readonly observe: Observer.IRegistrar<this>;
    constructor(human: Human, container: IContainer, options?: IItemFinderOptions);
    best(): Item | undefined;
    all(): Item[];
    track(): this;
    dispose(): this;
    markDirty(): void;
    private compute;
    protected onItemStateChange(item: Item): void;
    protected onContainerItemAdd(items: ItemManager, itemsAdded: Item[], containerAddedTo: IContainer): void;
    protected onContainerItemRemove(items: ItemManager, itemsRemoved: Item[], containerRemovedFrom?: IContainer): void;
    protected onPlayerEvent(player: Player): void;
    private trackContainer;
    private untrackContainer;
}
