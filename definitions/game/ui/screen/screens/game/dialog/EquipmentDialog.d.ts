/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { EquipType } from "game/entity/IHuman";
import type Item from "game/item/Item";
import Component from "ui/component/Component";
import type { IBindHandlerApi } from "ui/input/Bind";
import Dialog from "ui/screen/screens/game/component/Dialog";
import type { IItemDropApi, IItemPickUpApi, ItemSlot } from "ui/screen/screens/game/component/Item";
import ItemComponent, { ItemRefreshType } from "ui/screen/screens/game/component/Item";
import EquipmentSlotTooltipHandler from "ui/screen/screens/game/dialog/equipment/EquipmentSlotTooltip";
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
    const SlotType: (enumValue: EquipType) => "game-dialog-equipment-slot-none" | "game-dialog-equipment-slot-head" | "game-dialog-equipment-slot-held" | "game-dialog-equipment-slot-legs" | "game-dialog-equipment-slot-chest" | "game-dialog-equipment-slot-waist" | "game-dialog-equipment-slot-feet" | "game-dialog-equipment-slot-neck" | "game-dialog-equipment-slot-hands" | "game-dialog-equipment-slot-back" | "game-dialog-equipment-slot-mainhand" | "game-dialog-equipment-slot-offhand";
}
export default class EquipmentDialog extends Dialog {
    readonly slots: Component<HTMLElement>;
    readonly tooltipHandler: EquipmentSlotTooltipHandler;
    constructor();
    protected onClearActionSlot(api: IBindHandlerApi): boolean;
}
export declare class EquipmentSlot extends ItemComponent {
    readonly slot: EquipType;
    constructor(slot: EquipType);
    private overriddenItem?;
    equipItem(item: Item): Promise<void>;
    clear(): void;
    refresh(refreshType: ItemRefreshType): void;
    protected onEquipEvent(): void;
    protected onPickUp(api: IItemPickUpApi): void;
    protected onDrop(api: IItemDropApi, intoSlot?: ItemSlot): void;
    private isEquippable;
}
