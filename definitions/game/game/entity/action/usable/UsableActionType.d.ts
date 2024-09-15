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
import type { IModdable } from "@wayward/game/mod/ModRegistry";
export declare enum ActionTypeStarts {
    ActionType = 0,
    ModActionType = 10000,
    UsableActionType = 100000,
    UsableActionTypePlaceholder = 200000,
    ModUsableActionType = 300000,
    ModUsableActionTypePlaceholder = 400000
}
export declare enum UsableActionType {
    None = -1,
    Use = 100000,// the start is so high to make sure it's past normal actions (and modded actions)
    QuickSlotRemove = 100001,
    QuickSlotAdd = 100002,
    QuickSlotAddToFree = 100003,
    QuickSlotAddToSlot = 100004,
    MoveToInventory = 100005,
    DropMenu = 100006,
    DropAll = 100007,
    DropAllOfSameQuality = 100008,
    RepairWithItem = 100009,
    ReinforceWithItem = 100010,
    EnhanceWithItem = 100011,
    EnchantWithItem = 100012,
    TransmogrifyWithItem = 100013,
    UpgradeWithItem = 100014,
    AlterWithItem = 100015,
    RefineWithItem = 100016,
    PreserveWithItem = 100017,
    AddFuelWithItem = 100018,
    IgniteWithItem = 100019,
    AbsorbWithItem = 100020,
    ExudeWithItem = 100021,
    MoveToInventoryMenu = 100022,
    MoveToActiveContainerMenu = 100023,
    MoveToFacingContainerMenu = 100024,
    Move = 100025,
    MoveAll = 100026,
    MoveAllOfSameQuality = 100027,
    TradeTraderSell = 100028,
    TradeTraderBuy = 100029,
    ItemActions = 100030,
    Actions = 100031,
    GatherWithHands = 100032,
    HarvestWithHands = 100033,
    DigWithHands = 100034,
    TillWithHands = 100035,
    PickUpExcrementWithHands = 100036,
    EquipHeld = 100037,
    EquipLegs = 100038,
    EquipChest = 100039,
    EquipHead = 100040,
    EquipWaist = 100041,
    EquipFeet = 100042,
    EquipNeck = 100043,
    EquipHands = 100044,
    EquipBack = 100045,
    EquipMainHand = 100046,
    EquipOffHand = 100047,
    RestOnGround = 100048,
    SleepOnGround = 100049,
    CommandMenu = 100050,
    CommandFollowClose = 100051,
    CommandFollowFar = 100052,
    CommandStay = 100053,
    CommandDefend = 100054,
    CommandAttack = 100055,
    DisplayHeld = 100056,
    DisplayLegs = 100057,
    DisplayChest = 100058,
    DisplayHead = 100059,
    DisplayWaist = 100060,
    DisplayFeet = 100061,
    DisplayNeck = 100062,
    DisplayHands = 100063,
    DisplayBack = 100064,
    DisplayMainHand = 100065,
    DisplayOffHand = 100066,
    ReshapeWithItem = 100067,
    CommandHeel = 100068,
    MoveContentsMenu = 100069,
    MoveContentsToInventory = 100070,
    MoveContentsToActiveContainer = 100071,
    MoveContentsToFacingContainer = 100072,
    MoveContentsOfActiveContainerMenu = 100073,
    MoveContentsOfFacingContainerMenu = 100074,
    Unused = 100075,
    CommandMenuAll = 100076,
    CommandAllFollowClose = 100077,
    CommandAllFollowFar = 100078,
    CommandAllStay = 100079,
    CommandAllDefend = 100080,
    CommandAllAttack = 100081,
    CommandAllHeel = 100082
}
export declare enum UsableActionTypePlaceholder {
    TradeItem = 200000,
    MoveAllToInventory = 200001,
    MoveAllOfSameQualityToInventory = 200002,
    Paddle = 200003,
    Operate = 200004,
    SwimToIsland = 200005
}
export declare const usableActionDescriptions: PartialRecord<UsableActionType | UsableActionTypePlaceholder, IModdable>;
