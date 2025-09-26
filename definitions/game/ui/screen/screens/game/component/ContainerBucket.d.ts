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
import { ContainerSort, type IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import Button from "@wayward/game/ui/component/Button";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import { GlobalMouseInfo } from "@wayward/game/ui/input/InputManager";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import DialogSortFilter from "@wayward/game/ui/screen/screens/game/component/DialogSortFilter";
import ContainerBucketItemList from "@wayward/game/ui/screen/screens/game/component/container/ContainerBucketItemList";
import type ContainerBucketManager from "@wayward/game/ui/screen/screens/game/component/container/ContainerBucketManager";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IContainerBucketEvents extends Events<Component> {
    addItem(item: Item): any;
    removeItem(item: Item): any;
}
export default class ContainerBucket extends Component {
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
    private readonly managerRef;
    get manager(): ContainerBucketManager;
    constructor(manager: ContainerBucketManager, container?: IContainer);
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
