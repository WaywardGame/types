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
import type Item from "@wayward/game/game/item/Item";
import Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Bindable from "@wayward/game/ui/input/Bindable";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import { type IItemDropApi, type IItemPickUpApi, type ItemSlot } from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import { ItemRefreshType } from "@wayward/game/ui/screen/screens/game/component/item/IItemComponent";
import EquipmentSlotTooltipHandler from "@wayward/game/ui/screen/screens/game/dialog/equipment/EquipmentSlotTooltip";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
export declare enum EquipmentClasses {
    Main = "game-dialog-equipment",
    Body = "game-dialog-equipment-body",
    Slot = "game-dialog-equipment-slot",
    SlotFilled = "game-dialog-equipment-slot-filled",
    SlotPlaceholder = "game-dialog-equipment-slot-placeholder",
    SlotPlaceholderHasItem = "game-dialog-equipment-slot-placeholder-has-item",
    SlotSortable = "game-dialog-equipment-slot-sortable",
    SlotsWrapper = "game-dialog-equipment-slots-wrapper"
}
export declare namespace EquipmentClasses {
    const SlotType: (enumValue: EquipType) => "game-dialog-equipment-slot-none" | "game-dialog-equipment-slot-head" | "game-dialog-equipment-slot-back" | "game-dialog-equipment-slot-chest" | "game-dialog-equipment-slot-feet" | "game-dialog-equipment-slot-hands" | "game-dialog-equipment-slot-held" | "game-dialog-equipment-slot-legs" | "game-dialog-equipment-slot-neck" | "game-dialog-equipment-slot-waist" | "game-dialog-equipment-slot-mainhand" | "game-dialog-equipment-slot-offhand" | "game-dialog-equipment-slot-dualwield";
}
export default class EquipmentDialog extends Dialog {
    readonly slots: Component<HTMLElement>;
    readonly tooltipHandler: EquipmentSlotTooltipHandler;
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected onClearActionSlot(api: IBindHandlerApi): boolean;
}
export declare class EquipmentSlot extends ItemComponent {
    readonly slot: EquipType;
    constructor(slot: EquipType);
    private overriddenItem?;
    equipItem(item: Item): Promise<void>;
    clear(): void;
    refresh(refreshType: ItemRefreshType, skipPlayingCheck?: boolean): this;
    protected onEquipEvent(): void;
    protected onPickUp(api: IItemPickUpApi): void;
    protected onDropInto(api: IItemDropApi, fromSlot?: ItemSlot): boolean;
    protected onDropFrom(api: IItemDropApi, intoSlot?: ItemSlot): boolean;
    private isEquippable;
}
