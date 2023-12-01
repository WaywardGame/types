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
import type { ItemType } from "@wayward/game/game/item/IItem";
import { ContainerSort, type IContainer } from "@wayward/game/game/item/IItem";
import Item from "@wayward/game/game/item/Item";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import Component from "@wayward/game/ui/component/Component";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import DialogSortFilter from "@wayward/game/ui/screen/screens/game/component/DialogSortFilter";
import type ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import ContainerBucketItemList from "@wayward/game/ui/screen/screens/game/component/container/ContainerBucketItemList";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export declare enum ContainerBucketClasses {
    Main = "container-bucket",
    ActiveTabButton = "container-bucket-active-tab-button",
    ActiveTabButtonReverse = "container-bucket-active-tab-button-reverse",
    ActiveTabButtonHover = "container-bucket-active-tab-button-hover",
    ActiveTabButtonsShow = "container-bucket-active-tab-buttons-show",
    ActiveTabButtonActualTarget = "container-bucket-active-tab-button-actual-target",
    ActiveTabButtonHoverOrderEligible = "container-bucket-active-tab-button-hover-order-eligible"
}
export interface IContainerBucketsEvents {
    register(bucket: ContainerBucket): any;
    deregister(bucket: ContainerBucket): any;
}
export interface IContainerBucketEvents extends Events<Component> {
    addItem(item: Item): any;
    removeItem(item: Item): any;
}
export default class ContainerBucket extends Component {
    static readonly event: EventEmitter<null, IContainerBucketsEvents>;
    static readonly buckets: ContainerBucket[];
    private static register;
    private static deregister;
    private static reregister;
    static of(container?: IContainer): ContainerBucket | undefined;
    static containing(item?: Item): ContainerBucket | undefined;
    static hasAncestorsOpen(container?: IContainer): boolean;
    private static activeRef?;
    static getActive(): ContainerBucket | undefined;
    static getLastInteracted(filter?: (bucket: ContainerBucket) => any): ContainerBucket | undefined;
    static getSorting(): ItemComponent | undefined;
    static cancelSorting(): void;
    static getTransferDestination(transferFrom?: IContainer, item?: Item | ItemType, filter?: (bucket: ContainerBucket) => any): ContainerBucket | undefined;
    static updateTransferDestination(transferFrom?: ContainerBucket): void;
    private settingContainer;
    readonly itemList: ContainerBucketItemList;
    readonly sortFilterRow: DialogSortFilter<ContainerSort | "custom">;
    readonly activeContainerTabButton: CheckButton;
    get container(): IContainer | undefined;
    get filterText(): string;
    private dialogRef?;
    get dialog(): Dialog | undefined;
    readonly event: IEventEmitter<this, IContainerBucketEvents>;
    constructor(container?: IContainer);
    deregisterAsDestination(): this;
    hideSortFilterRow(): this;
    setContainer(container?: IContainer): this;
    protected makeTopDialog(dialog: Dialog, order: number): void;
    protected onDialogMoveOrResize(dialog: Dialog): void;
    protected onMouseEnter(): void;
    protected onMouseLeave(): void;
    private updateDialogActive;
    private sort;
}
