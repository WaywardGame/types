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
import Stream from "@wayward/goodstream/Stream";
import type { Events, IEventEmitter } from "event/EventEmitter";
import type { IActionApi } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import type { IUsableActionPossibleUsing, IUsableActionRequirements, ReturnableUsableActionUsability } from "game/entity/action/usable/IUsableAction";
import type Player from "game/entity/player/Player";
import type { Game } from "game/Game";
import type { TickFlag } from "game/IGame";
import type Item from "game/item/Item";
import Button from "ui/component/Button";
import { CheckButton } from "ui/component/CheckButton";
import Component from "ui/component/Component";
import type { ContextMenuDescriptions } from "ui/component/ContextMenu";
import type { IRefreshable } from "ui/component/Refreshable";
import Text from "ui/component/Text";
import type { IBindHandlerApi } from "ui/input/Bind";
import { Quadrant } from "ui/screen/screens/game/component/IQuadrantComponent";
import type { IItemSlotEvents } from "ui/screen/screens/game/component/ItemComponent";
import ItemComponent from "ui/screen/screens/game/component/ItemComponent";
import QuadrantComponent from "ui/screen/screens/game/component/QuadrantComponent";
import ActionsConfigurationDrawer from "ui/screen/screens/game/static/actions/ActionsDrawer";
import ActionSlotTooltipHandler from "ui/screen/screens/game/static/actions/ActionSlotTooltip";
import { ActionSlotUpdateReason, IActionBarSlotData } from "ui/screen/screens/game/static/actions/IActionBar";
import type TooltipLocationHandler from "ui/tooltip/TooltipLocationHandler";
export declare const MAX_SLOTS = 48;
export declare const ACTION_BAR_SLOTS_PER_ROW = 12;
export declare enum ActionBarClasses {
    Main = "game-action-bar",
    Configuring = "game-action-bar-configuring",
    SlotsContainer = "game-action-bar-slots",
    SlotsContainerLastFour = "game-action-bar-slots-last-four",
    MovingSlot = "game-action-bar-moving-slot",
    Slot = "game-action-slot",
    SlotSortable = "game-action-slot-sortable",
    SlotFilled = "game-action-slot-filled",
    SlotLabel = "game-action-slot-label",
    SlotSlottedContainerDragging = "game-action-slot-slotted-container-dragging",
    SlotSlottedContainerCopyingFrom = "game-action-slot-slotted-container-copying-from",
    SlotConfiguring = "game-action-slot-configuring",
    SlotDisabled = "game-action-slot-disabled",
    SlotUseOnMove = "game-action-slot-use-on-move",
    MetaButtons = "game-action-bar-meta-buttons-container",
    MetaButton = "game-action-bar-meta-button",
    MetaButtonAdd = "game-action-bar-meta-button-add",
    MetaButtonAddIcon = "game-action-bar-meta-button-add-icon",
    MetaButtonRemove = "game-action-bar-meta-button-remove",
    MetaButtonRemoveIcon = "game-action-bar-meta-button-remove-icon",
    MetaButtonToggleUseWhenMoving = "game-action-bar-meta-button-toggle-use-when-moving",
    MetaButtonToggleUseWhenMovingIcon = "game-action-bar-meta-button-toggle-use-when-moving-icon"
}
export interface IActionBarEvents extends Events<QuadrantComponent> {
    configure(number: number): any;
    endConfiguration(): any;
    slotUpdate(slot: ActionSlot, item?: Item, oldItem?: Item): any;
}
export default class ActionBar extends QuadrantComponent {
    readonly event: IEventEmitter<this, IActionBarEvents>;
    static preferredQuadrant: Quadrant;
    get preferredQuadrant(): Quadrant;
    slots: IActionBarSlotData[];
    globalSlots?: IActionBarSlotData[];
    showBindings?: boolean;
    autoSelectPrimaryUse?: boolean;
    bringSlotsAcrossSaves?: boolean;
    defaultModifiersOrder: string;
    readonly slotsContainer: Component<HTMLElement>;
    readonly metaButtons: Component<HTMLElement>;
    readonly removeSlotButton: Button;
    readonly toggleUseWhenMovingButton: CheckButton;
    readonly addSlotButton: Button;
    readonly configurationDrawer: ActionsConfigurationDrawer;
    get configuringNumber(): number | undefined;
    readonly actionSlotTooltipHandler: ActionSlotTooltipHandler;
    constructor();
    protected onWillRemove(): void;
    addSlot(): this;
    private refreshBindables;
    removeSlot(): this;
    generateSlots(): this;
    private updateToggleUseOnMoveButton;
    getSlottedIn(item: Item): ReadonlySet<number> | undefined;
    private onMoveSlot;
    private readonly slottedIn;
    private onSlotUpdate;
    configure(number: number): void;
    protected onResize(): void;
    endConfiguration(): void;
    hasFilledSlot(predicate?: (slot: IActionBarSlotData) => any): boolean;
    protected getContextMenuDescription(api: IBindHandlerApi): ContextMenuDescriptions;
    protected onClearActionSlot(api: IBindHandlerApi): boolean;
    protected onToggleUseWhileMoving(api: IBindHandlerApi): boolean;
    protected onMenuCancel(): boolean;
    protected onChangeWhetherCopying(api: IBindHandlerApi): boolean;
    getSlots(): Stream<ActionSlot>;
    private toggleShowingBindings;
    private focus;
    private refreshSlots;
}
declare class ActionSlotSlottedContainer extends ItemComponent {
    readonly slot: ActionSlot;
    constructor(slot: ActionSlot);
    clone(): ActionSlotSlottedContainer;
    protected onEnter(reason: "mouse" | "focus"): void;
}
export interface IActionSlotEvents extends Events<Button>, IItemSlotEvents {
    update(item: Item | undefined, oldItem: Item | undefined, reason: ActionSlotUpdateReason): any;
    unequipItem(): any;
}
export declare class ActionSlot extends Button implements IRefreshable {
    readonly number: number;
    slotData: IActionBarSlotData;
    event: IEventEmitter<this, IActionSlotEvents>;
    private get actionBar();
    readonly label: Text;
    readonly slotted: ActionSlotSlottedContainer;
    readonly useOnMoveIndicator: Component<HTMLElement>;
    private lastItem?;
    private lastQuality?;
    usability: ReturnableUsableActionUsability;
    constructor(number: number, slotData: IActionBarSlotData);
    private skipNextClick;
    private lastActivate;
    protected onHoldingNotDragging(time: number): void;
    refresh(_?: any, newItem?: Item, oldItem?: Item, reason?: ActionSlotUpdateReason): this;
    private onItemTransformed;
    private isUsable;
    clear(): void;
    equipItem(item: Item, configure?: boolean): void;
    protected onConfigureBind(api: IBindHandlerApi): boolean;
    protected onUseSlottedItem(api: IBindHandlerApi): boolean;
    configure(emitToActionBar?: boolean): void;
    protected onAppend(): void;
    protected onItemMaybeInaccessible(): void;
    protected onTickEnd(game: Game, tickFlag: TickFlag, ticks: number, dueToAction: boolean): void;
    postExecuteAction(action: IActionApi): void;
    protected playSound(): void;
    private lastClickUseWhenMoving;
    protected onClick(event?: Event & Partial<MouseEvent>): void;
    toggleUseOnMove(): boolean;
    private lastUsableResult?;
    private lastUseAttempt;
    onActivate(nonClick?: IBindHandlerApi | true, silent?: true): boolean;
    protected onGetOrRemoveItemInInventory(player: Player, items: Item[]): void;
    onToggle(api: IBindHandlerApi): boolean;
    protected onLeave(reason: "mouse" | "focus" | "remove"): void;
    static getTooltipLocation(actionBar: ActionBar, handler: TooltipLocationHandler): TooltipLocationHandler;
    getAction(): import("../../../../../game/entity/action/usable/UsableAction").default<IUsableActionRequirements, import("game/entity/action/usable/IUsableAction").IUsableActionDefinition<IUsableActionRequirements>> | undefined;
    getInternalActionType(): ActionType | undefined;
    getUsing(): IUsableActionPossibleUsing;
}
export {};
