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
import type { ItemType } from "@wayward/game/game/item/IItem";
import { ContainerSort, type IContainer } from "@wayward/game/game/item/IItem";
import Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import Button from "@wayward/game/ui/component/Button";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import { GlobalMouseInfo } from "@wayward/game/ui/input/InputManager";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import DialogSortFilter from "@wayward/game/ui/screen/screens/game/component/DialogSortFilter";
import type ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import ContainerBucketItemList from "@wayward/game/ui/screen/screens/game/component/container/ContainerBucketItemList";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export declare enum ContainerBucketClasses {
    __ShowQuickMoveTargetButtons = "--show-container-bucket-quick-move-target-buttons",
    __ShowQuickMoveTarget_HoveredAction = "--show-container-bucket-quick-move-target--hovered-action",
    __ShowQuickMoveTarget_BindableModifiers = "--show-container-bucket-quick-move-target--bindable-modifiers",
    Main = "container-bucket",
    TabButton = "container-bucket-tab-button",
    TabButton_PrefersRight = "container-bucket-tab-button--prefers-right",
    TabButton_Reverse = "container-bucket-tab-button--reverse",
    TabButton_Hover = "container-bucket-tab-button--hover",
    TabButton_HoverOrderEligible = "container-bucket-tab-button--hover-order-eligible",
    TabButtonQuickMoveTarget = "container-bucket-tab-button-quick-move-target",
    TabButtonQuickMoveTarget_Targeted = "container-bucket-tab-button-quick-move-target--targeted",
    TabButtonMoveAll = "container-bucket-tab-button-move-all",
    TabButtonAction = "container-bucket-tab-button-action"
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
    private static readonly transferDestinationHolds;
    static addTransferDestinationHoldFor(id: string, transferFrom: ContainerBucket): void;
    static removeTransferDestinationHoldFor(id: string): void;
    static updateTransferDestination(): void;
    private readonly instanceId;
    private settingContainer;
    readonly itemList: ContainerBucketItemList;
    readonly sortFilterRow: DialogSortFilter<"custom" | ContainerSort>;
    readonly activeContainerTabButton: CheckButton;
    readonly moveAllItemsTabButton: Button;
    get container(): IContainer | undefined;
    get filterText(): string;
    private dialogRef?;
    get dialog(): Dialog | undefined;
    event: IEventEmitter<this, IContainerBucketEvents>;
    tabButtons: Button[];
    constructor(container?: IContainer);
    deregisterAsDestination(): this;
    hideSortFilterRow(): this;
    setContainer(container?: IContainer): this;
    protected makeTopDialog(dialog: Dialog, order: number): void;
    protected onDialogMoveOrResize(dialog: Dialog): void;
    private currentModifiersDown;
    protected onQuickMoveModifiersDown(api: IBindHandlerApi): boolean;
    protected onUpdateMouseTarget(mouse: GlobalMouseInfo): boolean;
    protected onQuickMoveModifiersUp(api: IBindHandlerApi): void;
    protected onContainerUpdateOrder(manager: ItemManager, container: IContainer): void;
    protected onRooted(): void;
    protected onMouseEnter(): void;
    protected onMouseLeave(): void;
    private updateDialogActive;
    private sort;
    registerTabButton(button: Button, className: string): void;
    private refreshSort;
}
