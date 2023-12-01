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
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import Button from "@wayward/game/ui/component/Button";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import Component from "@wayward/game/ui/component/Component";
import type { ContextMenuDescriptions } from "@wayward/game/ui/component/ContextMenu";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import { Quadrant } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "@wayward/game/ui/screen/screens/game/component/QuadrantComponent";
import { ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
import ActionSlotTooltipHandler from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlotTooltip";
import ActionsConfigurationDrawer from "@wayward/game/ui/screen/screens/game/static/actions/ActionsDrawer";
import { IActionBarSlotData } from "@wayward/game/ui/screen/screens/game/static/actions/IActionBar";
import Stream from "@wayward/goodstream/Stream";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum ActionBarClasses {
    Main = "game-action-bar",
    Configuring = "game-action-bar-configuring",
    SlotsContainer = "game-action-bar-slots",
    SlotsContainerLastFour = "game-action-bar-slots-last-four",
    MovingSlot = "game-action-bar-moving-slot",
    MetaButtons = "game-action-bar-meta-buttons-container",
    MetaButton = "game-action-bar-meta-button",
    MetaButtonAdd = "game-action-bar-meta-button-add",
    MetaButtonRemove = "game-action-bar-meta-button-remove",
    MetaButtonConfigure = "game-action-bar-meta-button-configure",
    MetaButtonToggleUseWhenMoving = "game-action-bar-meta-button-toggle-use-when-moving"
}
export interface IActionBarEvents extends Events<QuadrantComponent> {
    configure(number: number): any;
    endConfiguration(): any;
    itemSlottedMapUpdate(items: Item[]): any;
    itemTypeSlottedMapUpdate(itemTypes: ItemType[]): any;
    slotUpdate(slot: ActionSlot, data?: IActionBarSlotData, oldData?: IActionBarSlotData): any;
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
    automaticallyBestItem?: boolean;
    defaultModifiersOrder: string;
    readonly slotsContainer: Component<HTMLElement>;
    readonly metaButtons: Component<HTMLElement>;
    readonly actionBarOptionsButton: Button;
    readonly toggleUseWhenMovingButton: CheckButton;
    readonly removeSlotButton: Button;
    readonly addSlotButton: Button;
    readonly configurationDrawer: ActionsConfigurationDrawer;
    get configuringNumber(): number | undefined;
    readonly actionSlotTooltipHandler: ActionSlotTooltipHandler;
    constructor();
    getHoveredSlot(): ActionSlot | undefined;
    protected onWillRemove(): void;
    addSlot(): this;
    private refreshBindables;
    removeSlot(): this;
    generateSlots(): this;
    private updateToggleUseOnMoveButton;
    private readonly itemSlottedMap;
    private readonly itemTypeSlottedMap;
    getSlottedIn(item?: Item | ItemType): ReadonlySet<number> | undefined;
    private onDropIntoSlot;
    private onDropFromSlot;
    private onSlotUpdate;
    configure(number: number): void;
    protected onResize(): void;
    endConfiguration(): void;
    hasFilledSlot(predicate?: (slot: IActionBarSlotData) => any): boolean;
    protected getContextMenuDescription(api?: IBindHandlerApi): ContextMenuDescriptions;
    protected onClearActionSlot(api: IBindHandlerApi): boolean;
    protected onToggleUseWhileMoving(api: IBindHandlerApi): boolean;
    protected onMenuCancel(): boolean;
    protected onChangeWhetherCopying(api: IBindHandlerApi): boolean;
    getSlots(): Stream<ActionSlot>;
    private toggleShowingBindings;
    private focus;
    private refreshSlots;
}
