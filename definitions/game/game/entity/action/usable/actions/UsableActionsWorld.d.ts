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
import { UsableActionGenerator } from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
import { UsableActionType } from "@wayward/game/game/entity/action/usable/UsableActionType";
export declare enum WorldContextMenuClasses {
    Main = "world-context-menu",
    Content = "world-context-menu-content",
    Option = "world-context-menu-option",
    OptionText = "world-context-menu-option-text"
}
export declare namespace WorldContextMenuClasses {
    const OptionSpecific: (enumValue: UsableActionType) => `${"world-context-menu-option"}-${Lowercase<("None" | "Move" | "Actions" | "CommandAttack" | "CommandDefend" | "CommandFollowClose" | "CommandFollowFar" | "CommandHeel" | "CommandStay" | "Use" | "QuickSlotRemove" | "QuickSlotAdd" | "QuickSlotAddToFree" | "QuickSlotAddToSlot" | "MoveToInventory" | "DropMenu" | "DropAll" | "DropAllOfSameQuality" | "RepairWithItem" | "ReinforceWithItem" | "EnhanceWithItem" | "EnchantWithItem" | "TransmogrifyWithItem" | "UpgradeWithItem" | "AlterWithItem" | "RefineWithItem" | "PreserveWithItem" | "AddFuelWithItem" | "IgniteWithItem" | "AbsorbWithItem" | "ExudeWithItem" | "MoveToInventoryMenu" | "MoveToActiveContainerMenu" | "MoveToFacingContainerMenu" | "MoveAll" | "MoveAllOfSameQuality" | "TradeTraderSell" | "TradeTraderBuy" | "ItemActions" | "GatherWithHands" | "HarvestWithHands" | "DigWithHands" | "TillWithHands" | "PickUpExcrementWithHands" | "EquipHeld" | "EquipLegs" | "EquipChest" | "EquipHead" | "EquipWaist" | "EquipFeet" | "EquipNeck" | "EquipHands" | "EquipBack" | "EquipMainHand" | "EquipOffHand" | "RestOnGround" | "SleepOnGround" | "CommandMenu" | "DisplayHeld" | "DisplayLegs" | "DisplayChest" | "DisplayHead" | "DisplayWaist" | "DisplayFeet" | "DisplayNeck" | "DisplayHands" | "DisplayBack" | "DisplayMainHand" | "DisplayOffHand" | "ReshapeWithItem" | "MoveContentsMenu" | "MoveContentsToInventory" | "MoveContentsToActiveContainer" | "MoveContentsToFacingContainer" | "MoveContentsOfActiveContainerMenu" | "MoveContentsOfFacingContainerMenu" | "ViewItems" | "CommandMenuAll" | "CommandAllFollowClose" | "CommandAllFollowFar" | "CommandAllStay" | "CommandAllDefend" | "CommandAllAttack" | "CommandAllHeel") & string>}`;
}
export declare const UsableActionsWorldActions: UsableActionGenerator<[]>;
export declare const UsableActionsWorldItemActions: UsableActionGenerator<[]>;
declare const _default: UsableActionGenerator<[select?: UsableActionType.ItemActions | UsableActionType.Actions | undefined]>;
export default _default;
