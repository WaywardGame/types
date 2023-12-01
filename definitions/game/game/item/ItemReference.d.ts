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
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
import type { IUnserializedCallback } from "@wayward/game/save/serializer/ISerializer";
export interface IItemReference {
    islandId?: IslandId;
    itemId?: number;
}
interface IItemReferenceEvents {
    clear(): void;
}
export default class ItemReference extends EventEmitter.Host<IItemReferenceEvents> implements IItemReference, IUnserializedCallback {
    static get(item?: Item | IItemReference): ItemReference | undefined;
    static item(item?: Item | IItemReference): Item | undefined;
    event: IEventEmitter<this, IItemReferenceEvents>;
    private registeredForEvents;
    islandId: IslandId | undefined;
    itemId: number | undefined;
    constructor(item?: Item | IItemReference);
    raw(): IItemReference;
    onUnserialized(): void;
    get isValid(): boolean;
    get island(): Island | undefined;
    get item(): Item | undefined;
    set(reference?: Item | IItemReference): void;
    clear(): void;
    private onItemMovedIsland;
    private onItemRemove;
    onStoppingPlay(): void;
    onIslandLoadedReferences(island: Island): void;
    private register;
    private unregister;
}
export {};
