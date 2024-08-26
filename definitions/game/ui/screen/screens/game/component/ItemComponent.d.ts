/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Quality } from "@wayward/game/game/IObject";
import { EquipType } from "@wayward/game/game/entity/IHuman";
import type { ActionId } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type MerchantNPC from "@wayward/game/game/entity/npc/npcs/Merchant";
import type { IContainer, ItemTypeExtra } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import Component from "@wayward/game/ui/component/Component";
import type ContextMenu from "@wayward/game/ui/component/ContextMenu";
import Bindable from "@wayward/game/ui/input/Bindable";
import type ActionBar from "@wayward/game/ui/screen/screens/game/static/ActionBar";
import type { ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
import type { IDraggableEvents } from "@wayward/game/ui/util/Draggable";
import Draggable from "@wayward/game/ui/util/Draggable";
import type Sortable from "@wayward/game/ui/util/Sortable";
import type { ISortableDraggableEvents } from "@wayward/game/ui/util/Sortable";
import PerfCache from "@wayward/game/utilities/PerfCache";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import WeakishSet from "@wayward/utilities/collection/set/WeakishSet";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
type ItemSlotExtend = Omit<Component, "event"> & {
    event: IEventEmitter<Component, IItemSlotEvents>;
};
export interface ItemSlot extends ItemSlotExtend {
    getItemComponent?(): ItemComponent | undefined;
}
export interface IItemSlotEvents extends Events<Component>, IDraggableEvents {
    pickUp(api: IItemPickUpApi): any;
    dropFrom(api: IItemDropApi, intoSlot?: ItemSlot): boolean;
    dropInto(api: IItemDropApi, fromSlot?: ItemSlot): boolean;
}
export interface IItemPickUpApi {
    cancel(): any;
}
export interface IItemDropApi {
    bindable?: Bindable;
    handler?: ItemComponentHandler;
}
export declare enum ItemDetailIconLocation {
    TopLeft = 0,
    BottomRight = 1
}
export declare enum ItemClasses {
    Main = "item-component",
    _InHeading = "item-component--in-heading",
    Active = "active",// currently used for crafting & trading
    Icon = "item-component-icon",
    ItemIconIsReal = "item-component-icon-item-is-real",
    ActionIcon = "item-component-icon-action",
    ActionIconAnyItem = "item-component-icon-action-any-item",
    ActionIconMissingItem = "item-component-icon-action-missing-item",
    ActionIconHasItem = "item-component-icon-action-has-item",
    ActionIconNone = "item-component-icon-action-none",
    TargetIcon = "item-component-icon-target",
    TargetIcon_Creature = "item-component-icon-target--creature",
    TargetIcon_Doodad = "item-component-icon-target--doodad",
    TargetIcon_Vehicle = "item-component-icon-target--vehicle",
    TargetIcon_Plant = "item-component-icon-target--plant",
    TargetIcon_NPC = "item-component-icon-target--npc",
    TargetIcon_TileEvent = "item-component-icon-target--tile-event",
    SlottedIcon = "item-component-icon-slotted",
    Equipped = "item-component-equipped",
    EquipIcon = "item-component-icon-equip",
    EquipIconHasItem = "item-component-icon-equip-has-item",
    MagicalIcon = "item-component-icon-magical",
    ProtectedIcon = "item-component-icon-protected",
    Trading = "item-component-trading",
    TradingIcon = "item-component-icon-trading",
    TradingIconFromMerchant = "item-component-icon-trading-from-merchant",
    TradingIconToMerchant = "item-component-icon-trading-to-merchant",
    Slot = "item-component-slot",
    Dragging = "item-component-dragging",
    DragPreview = "item-component-drag-preview",
    StatBar = "item-component-stat-bar",
    StatBars = "item-component-stat-bars-wrapper",
    DecayBar = "item-component-stat-bar-decay",
    CooldownBar = "item-component-stat-bar-cooldown",
    DurabilityBar = "item-component-stat-bar-durability",
    NearlyDestroyed = "item-component-nearly-destroyed",
    NearlyDecayed = "item-component-nearly-decayed",
    Transient = "item-component-transient",
    Highlight = "item-component-highlight",
    Stack = "item-component-stack",
    StackQuantity = "item-component-stack-quantity",
    StackQuantityX = "item-component-stack-quantity-x",
    StackQuantityDigit = "item-component-stack-quantity-digit",
    Stacked = "item-component-stacked",
    StackedVisible = "item-component-stacked-visible"
}
export declare namespace ItemClasses {
    const IconLocation: (enumValue: ItemDetailIconLocation) => "item-component-icon-location-topleft" | "item-component-icon-location-bottomright";
}
export interface IItemComponentHandlerDescription {
    noDrag?: true;
    equipSlot?: EquipType;
    hasHighlight?: SupplierOr<boolean>;
    getItem?(): Item | undefined;
    getItemType?(): ItemType | ItemTypeExtra | undefined;
    getItemQuality?(): ArrayOr<Quality> | undefined;
    getAction?(): UsableAction | undefined;
    getActionSlot?(): ActionSlot | undefined;
    getBindables?(bindables: Bindable[]): Bindable[];
    getSortable?(): Sortable;
    getStackQuantity?(): number;
    getContainer?(): IContainer | undefined;
    getStackItems?(): readonly Item[];
    getStackDisplayItem?(): Item | undefined;
    getDisplayItem?(): Item | undefined;
    isDamaged?(): boolean;
    isDecayed?(): boolean;
}
export interface ItemComponentHandler extends IItemComponentHandlerDescription {
}
export declare class ItemComponentHandler {
    readonly isItemComponentHandler = true;
    constructor(description?: IItemComponentHandlerDescription);
}
export declare enum ItemTradeType {
    None = "",
    ToMerchant = "To",
    FromMerchant = "From"
}
export declare enum ItemRefreshType {
    None = 0,
    ItemType = 1,
    Durability = 2,
    Decay = 4,
    Quality = 8,
    Magic = 16,
    Protected = 32,
    EquipSlot = 64,
    MaybeSlottedInActionSlot = 128,
    Action = 256,
    Stack = 512,
    Stacked = 1024,
    Trading = 2048,
    ContainerChange = 4096,
    Cooldown = 8192,
    All = 16383
}
export interface IItemComponentEvents extends Events<Component>, IDraggableEvents, IItemSlotEvents, ISortableDraggableEvents {
    deregisterHighlights(): any;
    refresh(type: ItemRefreshType): any;
}
export interface IItemComponentStaticEvents {
    update(type: ItemRefreshType): any;
    changeHovered(): any;
}
export default class ItemComponent extends Component implements ItemSlot {
    readonly handler: ItemComponentHandler;
    static readonly eventGlobal: EventEmitter<null, IItemComponentStaticEvents>;
    static create<C extends ItemComponent = ItemComponent>(handler: ItemComponentHandler, ...params: any[]): C | undefined;
    static registerSlot(slot: ItemSlot): void;
    static getHovered(): ItemComponent | undefined;
    static QUALITY_CLASS_NAMES: PerfCache<string[]>;
    private static readonly tradingByItem;
    private static readonly tradingToMerchant;
    private static readonly tradingFromMerchant;
    static getTrading(merchant: MerchantNPC, type: ItemTradeType): WeakishSet<Item> | undefined;
    static isTrading(item: Item, merchant: MerchantNPC): boolean;
    static toggleTrading(items: Item[], merchant: MerchantNPC, trading: ItemTradeType): ItemTradeType;
    private static sendMerchantChatMessage;
    static clearTrading(merchant?: MerchantNPC): void;
    event: IEventEmitter<this, IItemComponentEvents>;
    readonly magicalIcon: Component<HTMLElement> | undefined;
    readonly protectedIcon: Component<HTMLElement> | undefined;
    readonly actionIcon: Component<HTMLElement> | undefined;
    readonly targetIcon: Component<HTMLElement> | undefined;
    readonly tradingIcon: Component<HTMLElement> | undefined;
    readonly slottedIcon: Component<HTMLElement> | undefined;
    readonly equipIcon: Component<HTMLElement> | undefined;
    readonly stackQuantity: Component<HTMLElement> | undefined;
    readonly stackQuantityDigit1000: Component<HTMLElement> | undefined;
    readonly stackQuantityDigit100: Component<HTMLElement> | undefined;
    readonly stackQuantityDigit10: Component<HTMLElement> | undefined;
    readonly stackQuantityDigit1: Component<HTMLElement> | undefined;
    statBars?: Component;
    decayBar?: Component;
    cooldownBar?: Component;
    durabilityBar?: Component;
    stackQuantityValue?: number;
    readonly draggable?: Draggable;
    private transient;
    protected constructor(handler: ItemComponentHandler, ...params: any[]);
    private tickEndHandlerReasons?;
    private registerTickEndHandler;
    private deregisterTickEndHandler;
    getItemComponent(): ItemComponent | undefined;
    isStack(): boolean;
    /**
     * Set this item component as "transient" — when dragging from this item, it creates a "preview" and may or may not
     * actually remove the item from the slot on drag end. IE, this isn't the "real" copy of the item.
     */
    setTransient(isTransient?: boolean): this;
    /**
     * Whether this item component is "transient" — when dragging from this item, it creates a "preview" and may or may not
     * actually remove the item from the slot on drag end. IE, this isn't the "real" copy of the item.
     */
    get isTransient(): boolean;
    private lastItem?;
    private getItem;
    protected onAddMagic(item: Item, magic: MagicalPropertyManager): void;
    protected onRemoveMagic(item: Item, magic: MagicalPropertyManager): void;
    protected onSlotUpdate(actionBar: ActionBar, slot: ActionSlot): void;
    protected onToggleProtected(): void;
    protected onContainerChange(): void;
    protected onUpdateEquip(): void;
    protected onUpdateItemType(): void;
    protected onUpdateMagic(): void;
    protected onUpdateDurability(): void;
    protected onUpdateDecay(): void;
    protected onUpdateQuality(): void;
    protected onTickEnd(): void;
    protected onRootedAndAppend(): void;
    protected onLoadedOnIsland(): void;
    protected onActionBarItemSlottedMapUpdate(): void;
    private _itemRef?;
    get item(): Item | undefined;
    private _itemType;
    get itemDisplayType(): typeof this._itemType;
    get itemType(): ItemType | undefined;
    private _actionSlots?;
    private hasActionSlots?;
    get actionSlots(): ReadonlySet<number> | undefined;
    private _equipSlot;
    get equipSlot(): EquipType;
    refresh(refreshType: ItemRefreshType): this;
    clone(): this | undefined;
    setItemMenu(initialiser?: (contextMenu: ContextMenu<ActionId>) => any): this;
    private registeredItemHighlights;
    registerItemHighlights(): void;
    private static dragPreviewSource?;
    private static dragPreview?;
    private static getDragPreview;
    private savedPosition?;
    protected onMoveStart(_: any, mouse: Vector2): false | void;
    protected onMove(_: any, offset: Vector2): void;
    protected endedMoveOnSelfTick: number;
    endedMoveOnSelf(): boolean;
    protected onMoveEnd(_: any, offset: Vector2, mouse: Vector2, bindable?: Bindable): boolean;
    private endDragPreview;
    private handleDrop;
    private getStatBarsWrapper;
    private refreshStack;
    private lastDecay;
    private refreshDecayBar;
    private lastCooldown;
    private refreshCooldownBar;
    private lastDurability;
    private refreshDurabilityBar;
    private lastActionIcon?;
    private refreshActionIcon;
    protected onHoldingNotMoving(time: number): void;
    protected onMouseEnterOrLeave(): void;
}
export {};
