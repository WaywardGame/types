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
import { EquipType } from "@wayward/game/game/entity/IHuman";
import type { ActionId } from "@wayward/game/game/entity/action/usable/IUsableAction";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import Component from "@wayward/game/ui/component/Component";
import type ContextMenu from "@wayward/game/ui/component/ContextMenu";
import Bindable from "@wayward/game/ui/input/Bindable";
import { ItemRefreshType } from "@wayward/game/ui/screen/screens/game/component/item/IItemComponent";
import { ItemComponentHandler } from "@wayward/game/ui/screen/screens/game/component/item/ItemComponentHandler";
import type ActionBar from "@wayward/game/ui/screen/screens/game/static/ActionBar";
import type { ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
import type { IDraggableEvents } from "@wayward/game/ui/util/Draggable";
import Draggable from "@wayward/game/ui/util/Draggable";
import type { ISortableDraggableEvents } from "@wayward/game/ui/util/Sortable";
import PerfCache from "@wayward/game/utilities/PerfCache";
import Debug from "@wayward/game/utilities/dev/Debug";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
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
export interface IItemComponentEvents extends Events<Component>, IDraggableEvents, IItemSlotEvents, ISortableDraggableEvents {
    deregisterHighlights(): any;
    refresh(type: ItemRefreshType): any;
    /**
     * Called when the item (within the item component) is changing.
     * Usually during a refresh.
     */
    itemChange(): any;
}
export interface IItemComponentStaticEvents {
    update(type: ItemRefreshType): any;
    changeHovered(): any;
}
export default class ItemComponent extends Component implements ItemSlot {
    readonly handler: ItemComponentHandler;
    static create<C extends ItemComponent = ItemComponent>(handler: ItemComponentHandler, ...params: any[]): C | undefined;
    static registerSlot(slot: ItemSlot): void;
    static getHovered(): ItemComponent | undefined;
    static QUALITY_CLASS_NAMES: PerfCache<string[]>;
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
    get debug(): Debug.JIT<[]>;
    private tickEndHandlerReasons?;
    private registerTickEndHandler;
    private deregisterTickEndHandler;
    protected onRemoved(): void;
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
    protected onUpdateBaseItem(): void;
    protected onTickEnd(): void;
    protected onRevertFromDoodad(): void;
    protected onRooted(): void;
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
    refresh(refreshType: ItemRefreshType, skipPlayingCheck?: boolean): this;
    clone(): this | undefined;
    setItemMenu(initialiser?: (contextMenu: ContextMenu<ActionId>) => any): this;
    private registeredItemHighlights;
    registerItemHighlights(): void;
    private static dragPreviewSource?;
    private static _dragPreview?;
    static get dragPreview(): ItemComponent | undefined;
    static get isDragging(): boolean;
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
}
export {};
