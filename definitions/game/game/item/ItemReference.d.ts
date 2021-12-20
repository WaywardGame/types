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
import type { IEventEmitter } from "event/EventEmitter";
import EventEmitter from "event/EventEmitter";
import type Island from "game/island/Island";
import type Item from "game/item/Item";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
interface IItemReferenceEvents {
    clear(): void;
}
export default class ItemReference extends EventEmitter.Host<IItemReferenceEvents> implements IUnserializedCallback {
    event: IEventEmitter<this, IItemReferenceEvents>;
    private registeredForEvents;
    private islandId;
    private itemId;
    constructor(item?: Item);
    onUnserialized(): void;
    get isValid(): boolean;
    get island(): Island | undefined;
    get item(): Item | undefined;
    set(item: Item): void;
    clear(): void;
    private onItemMovedIsland;
    private onItemRemove;
    onStoppingPlay(): void;
    onIslandLoadedReferences(island: Island): void;
    private register;
    private unregister;
}
export {};
