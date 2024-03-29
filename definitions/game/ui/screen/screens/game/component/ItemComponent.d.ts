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
import type { ActionId } from "game/entity/action/usable/IUsableAction";
import { EquipType } from "game/entity/IHuman";
import { Quality } from "game/IObject";
import type { ItemType, ItemTypeExtra } from "game/item/IItem";
import type Item from "game/item/Item";
import Component from "ui/component/Component";
import type ContextMenu from "ui/component/ContextMenu";
import Bindable from "ui/input/Bindable";
import type ActionBar from "ui/screen/screens/game/static/ActionBar";
import type { ActionSlot } from "ui/screen/screens/game/static/ActionBar";
import type { IDraggableEvents } from "ui/util/Draggable";
import Draggable from "ui/util/Draggable";
import Vector2 from "utilities/math/Vector2";
export type ItemSlot = Omit<Component, "event"> & {
    event: IEventEmitter<Component, IItemSlotEvents>;
};
export interface IItemSlotEvents extends Events<Component>, IDraggableEvents {
    pickUp(api: IItemPickUpApi): any;
    drop(api: IItemDropApi, intoSlot?: ItemSlot): any;
}
export interface IItemPickUpApi {
    cancel(): any;
}
export interface IItemDropApi {
    bindable?: Bindable;
}
export declare enum ItemDetailIconLocation {
    TopLeft = 0,
    BottomRight = 1
}
export declare enum ItemClasses {
    Main = "item-component",
    Icon = "item-component-icon",
    ItemIconIsReal = "item-component-icon-item-is-real",
    ActionIcon = "item-component-icon-action",
    ActionIconAnyItem = "item-component-icon-action-any-item",
    ActionIconHasItem = "item-component-icon-action-has-item",
    ActionIconNone = "item-component-icon-action-none",
    SlottedIcon = "item-component-icon-slotted",
    EquipIcon = "item-component-icon-equip",
    EquipIconHasItem = "item-component-icon-equip-has-item",
    MagicalIcon = "item-component-icon-magical",
    ProtectedIcon = "item-component-icon-protected",
    Slot = "item-component-slot",
    Dragging = "item-component-dragging",
    DragPreview = "item-component-drag-preview",
    StatBar = "item-component-stat-bar",
    StatBars = "item-component-stat-bars-wrapper",
    DecayBar = "item-component-stat-bar-decay",
    DurabilityBar = "item-component-stat-bar-durability",
    NearlyDestroyed = "item-component-nearly-destroyed",
    NearlyDecayed = "item-component-nearly-decayed"
}
export declare namespace ItemClasses {
    const IconLocation: (enumValue: ItemDetailIconLocation) => "item-component-icon-location-topleft" | "item-component-icon-location-bottomright";
}
export interface IItemHandler {
    noDrag?: true;
    equipSlot?: EquipType;
    getItem?(): Item | undefined;
    getItemType?(): ItemType | ItemTypeExtra | undefined;
    getItemQuality?(): Quality | undefined;
    getActionSlot?(): ActionSlot | undefined;
    getBindables?(bindables: Bindable[]): Bindable[];
}
export declare enum ItemRefreshType {
    ItemType = 1,
    Durability = 2,
    Decay = 4,
    Quality = 8,
    Magic = 16,
    Protected = 32,
    EquipSlot = 64,
    MaybeSlottedInActionSlot = 128,
    Action = 256,
    All = 511
}
export default class ItemComponent extends Component {
    protected readonly handler: IItemHandler;
    static registerSlot(slot: ItemSlot): void;
    event: IEventEmitter<this, IItemSlotEvents>;
    readonly magicalIcon: Component<HTMLElement>;
    readonly protectedIcon: Component<HTMLElement>;
    readonly actionIcon: Component<HTMLElement> | undefined;
    readonly slottedIcon: Component<HTMLElement> | undefined;
    readonly equipIcon: Component<HTMLElement>;
    statBars?: Component;
    decayBar?: Component;
    durabilityBar?: Component;
    readonly draggable?: Draggable;
    constructor(handler: IItemHandler);
    private registerTickEndHandlerForDecay;
    private deregisterTickEndHandlerForDecay;
    private lastItem?;
    private getItem;
    protected onSlotUpdate(actionBar: ActionBar, slot: ActionSlot): void;
    protected onToggleProtected(): void;
    protected onUpdateEquip(): void;
    protected onUpdateItemType(): void;
    protected onUpdateDurability(): void;
    protected onUpdateQuality(): void;
    protected onTickEnd(): void;
    protected onLoadedOnIsland(): void;
    refresh(refreshType: ItemRefreshType): void;
    clone(): ItemComponent;
    setItemMenu(initialiser?: (contextMenu: ContextMenu<ActionId>) => any): this;
    private dragPreview?;
    private savedPosition?;
    protected onMoveStart(_: any, mouse: Vector2): false | void;
    protected onMove(_: any, offset: Vector2): void;
    protected endedMoveOnSelfTick: number;
    endedMoveOnSelf(): boolean;
    protected onMoveEnd(_: any, offset: Vector2, mouse: Vector2, bindable?: Bindable): void;
    private getStatBarsWrapper;
    private lastDecay;
    private refreshDecayBar;
    private lastDurability;
    private refreshDurabilityBar;
    private lastActionIcon?;
    private refreshActionIcon;
    protected onHoldingNotMoving(time: number): void;
}
