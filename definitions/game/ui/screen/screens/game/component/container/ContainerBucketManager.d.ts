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
import ContainerBucket from "@wayward/game/ui/screen/screens/game/component/ContainerBucket";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { IContainer, ItemType } from "@wayward/game/game/item/IItem";
import Item from "@wayward/game/game/item/Item";
import type ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
export interface IContainerBucketsEvents {
    register(bucket: ContainerBucket): any;
    deregister(bucket: ContainerBucket): any;
}
export default class ContainerBucketManager extends EventEmitter.Host<IContainerBucketsEvents> {
    static readonly INSTANCE: ContainerBucketManager;
    create(): ContainerBucket;
    readonly buckets: ContainerBucket[];
    register(bucket: ContainerBucket): void;
    deregister(bucket: ContainerBucket): void;
    reregister(bucket: ContainerBucket): void;
    getFor(container?: IContainer): ContainerBucket | undefined;
    getContaining(item?: Item): ContainerBucket | undefined;
    hasAncestorsOpen(container?: IContainer): boolean;
    private activeRef?;
    getActive(): ContainerBucket | undefined;
    getLastInteracted(filter?: (bucket: ContainerBucket) => any): ContainerBucket | undefined;
    getSorting(): ItemComponent | undefined;
    cancelSorting(): void;
    getTransferDestination(transferFrom?: IContainer, item?: Item | ItemType, filter?: (bucket: ContainerBucket) => any): ContainerBucket | undefined;
    private readonly transferDestinationHolds;
    addTransferDestinationHoldFor(id: string, transferFrom: ContainerBucket): void;
    removeTransferDestinationHoldFor(id: string): void;
    updateTransferDestination(): void;
    setActive(bucket: ContainerBucket): void;
    clearActive(): void;
}
