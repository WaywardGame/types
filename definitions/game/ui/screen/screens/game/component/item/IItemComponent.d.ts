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
    DragPreview_Small = "item-component-drag-preview--small",
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
