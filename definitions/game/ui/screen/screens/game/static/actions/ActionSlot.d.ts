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
import { Quality } from "@wayward/game/game/IObject";
import { MoveFlag } from "@wayward/game/game/entity/IEntity";
import type { IActionApi } from "@wayward/game/game/entity/action/IAction";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { ActionId, IUsableActionDefinition, IUsableActionPossibleUsing, IUsableActionRequirements, ReturnableUsableActionUsability, UsableActionUsability } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IIslandTickOptions } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import Text from "@wayward/game/ui/component/Text";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import { type IItemSlotEvents, type ItemSlot } from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import { ItemComponentHandler } from "@wayward/game/ui/screen/screens/game/component/item/ItemComponentHandler";
import type ActionBar from "@wayward/game/ui/screen/screens/game/static/ActionBar";
import { ActionSlotUpdateReason, IActionBarSlotData } from "@wayward/game/ui/screen/screens/game/static/actions/IActionBar";
import { ActionSlotInternalType } from "@wayward/game/ui/screen/screens/game/static/actions/IActionsDrawer";
import type TooltipLocationHandler from "@wayward/game/ui/tooltip/TooltipLocationHandler";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum ActionSlotClasses {
    Main = "game-action-slot",
    Sortable = "game-action-slot-sortable",
    Filled = "game-action-slot-filled",
    Empty = "game-action-slot-empty",
    Label = "game-action-slot-label",
    SlottedContainerDragging = "game-action-slot-slotted-container-dragging",
    SlottedContainerCopyingFrom = "game-action-slot-slotted-container-copying-from",
    Configuring = "game-action-slot-configuring",
    Disabled = "game-action-slot-disabled",
    UseOnMove = "game-action-slot-use-on-move",
    UseHovered = "game-action-slot-use-hovered",
    UseHistory = "game-action-slot-use-history",
    UseOnHoveredTile = "game-action-slot-use-on-hovered-tile",
    History = "game-action-slot-history",
    History_Cleared = "game-action-slot-history--cleared",
    ItemComponent = "game-action-slot-item-component"
}
export interface IActionSlotEvents extends Events<Button>, IItemSlotEvents {
    update(data: IActionBarSlotData | undefined, oldData: IActionBarSlotData | undefined, reason: ActionSlotUpdateReason): any;
    unequipItem(): any;
    changeAction(newAction?: ActionId, oldAction?: ActionId): any;
}
export declare class ActionSlot extends Button implements IRefreshable, ItemSlot {
    readonly number: number;
    slotData: IActionBarSlotData;
    readonly type: ActionSlotInternalType;
    static getHovered(): ActionSlot | undefined;
    static tryCreate(number: number, slotData: IActionBarSlotData, type?: ActionSlotInternalType): ActionSlot;
    event: IEventEmitter<this, IActionSlotEvents>;
    private get actionBar();
    readonly label: Text;
    readonly slotted: ActionSlotSlottedContainer | undefined;
    readonly useOnMoveIndicator: Component<HTMLElement>;
    readonly useOnHoveredTileIndicator: Component<HTMLElement>;
    readonly useHoveredIndicator: Component<HTMLElement>;
    readonly useHistoryIndicator: Component<HTMLElement>;
    private lastItem?;
    private lastQuality?;
    usability: ReturnableUsableActionUsability;
    protected constructor(number: number, slotData: IActionBarSlotData, type?: ActionSlotInternalType);
    isTransientSlot(): boolean;
    getItemComponent(): ItemComponent | undefined;
    private skipNextClick;
    private lastActivate;
    protected onHoldingNotDragging(time: number): void;
    protected onPlay(): void;
    refresh(slotData?: IActionBarSlotData, reason?: ActionSlotUpdateReason): this;
    private clearLastItem;
    private setLastItem;
    private onItemTransformed;
    isUsable(using?: IUsableActionPossibleUsing | undefined, action?: UsableAction<IUsableActionRequirements, IUsableActionDefinition> | undefined): UsableActionUsability;
    clear(): void;
    equipAction(actionId: ActionId, using?: IUsableActionPossibleUsing, autoUse?: boolean): void;
    equipItem(item: Item | ItemType, configure?: boolean, autoUse?: boolean, quality?: boolean | ArrayOr<Quality>): void;
    protected onConfigureBind(api: IBindHandlerApi): boolean;
    protected onUseSlottedItem(api: IBindHandlerApi): boolean;
    configure(emitToActionBar?: boolean): void;
    protected onAppend(): void;
    protected onItemMaybeInaccessible(): void;
    protected onHoveredTileChange(): void;
    protected onPlayerPostMove(player: Player, _lastTile: Tile, _tile: Tile, moveFlag: MoveFlag): void;
    protected onTickEnd(island: Island, options: IIslandTickOptions): void;
    postExecuteAction(action: IActionApi): void;
    private checkItemAccessible;
    private switchToBestItem;
    protected playSound(): void;
    private lastClickUseWhenMoving;
    protected onClick(event?: Event & Partial<MouseEvent>): void;
    toggleUseOnMove(): boolean;
    private static usedActionSlot?;
    private firstActivate;
    onActivateDown(api: IBindHandlerApi): boolean;
    onActivateUp(api: IBindHandlerApi): boolean;
    onActivateHolding(api: IBindHandlerApi): boolean;
    onActivate(nonClick?: IBindHandlerApi | true, silent?: true): boolean;
    protected onGetOrRemoveItemInInventory(player: Player, items: Item[]): void;
    onToggle(): boolean;
    protected onLeave(reason: "mouse" | "focus" | "remove"): void;
    static getTooltipLocation(actionBar: ActionBar, handler: TooltipLocationHandler): TooltipLocationHandler;
    private lastActionId?;
    private action?;
    getAction(): UsableAction<IUsableActionRequirements, IUsableActionDefinition> | undefined;
    getActionId(): ActionId | undefined;
    getInternalActionType(): ActionType | undefined;
    private usingCache?;
    getUsing(fresh?: true, forceWithHoveredTile?: true): IUsableActionPossibleUsing | undefined;
    private getBindingText;
}
declare class ActionSlotSlottedContainer extends ItemComponent {
    readonly slot: ActionSlot;
    static createSlottedContainer(slot: ActionSlot): ActionSlotSlottedContainer | undefined;
    protected constructor(handler: ItemComponentHandler, slot: ActionSlot);
    clone(): this | undefined;
}
export {};
