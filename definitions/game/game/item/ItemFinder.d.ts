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
import EventEmitter from "event/EventEmitter";
import type Human from "game/entity/Human";
import type Player from "game/entity/player/Player";
import type { IContainer } from "game/item/IItem";
import type { IGetBestItemsOptions } from "game/item/IItemManager";
import type Item from "game/item/Item";
import type ItemManager from "game/item/ItemManager";
export interface IItemFinderOptions extends Partial<IGetBestItemsOptions> {
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
    constructor(human: Human, container: IContainer, options?: IItemFinderOptions);
    best(): Item | undefined;
    all(): Item[];
    track(): this;
    dispose(): this;
    markDirty(): void;
    private compute;
    protected onItemStateChange(item: Item): void;
    protected onContainerItemAdd(items: ItemManager, itemAdded: Item, containerAddedTo: IContainer): void;
    protected onContainerItemRemove(items: ItemManager, itemRemoved: Item, containerRemovedFrom?: IContainer): void;
    protected onLoadOnIsland(player: Player): void;
    private trackContainer;
    private untrackContainer;
}
