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
/**
 * Note: If you rename a Bindable and don't make a save conversion for it, the old binding will be lost.
 * Note: All Bindables should start with a BindableType name.
 */
declare enum Bindable {
    /**
     * Safe for `if` statements. Falsey!
     */
    None = 0,
    GameMoveDirection = 1,
    GameMoveDown = 2,
    GameMoveLeft = 3,
    GameMoveRight = 4,
    GameMoveUp = 5,
    GameMoveToTile = 6,
    GameMoveToTilePreview = 7,
    GameMoveToTileCancel = 8,
    GameFaceDirection = 9,
    GameFaceDown = 10,
    GameFaceLeft = 11,
    GameFaceRight = 12,
    GameFaceUp = 13,
    GameIdle = 14,
    GameActions = 15,
    GameAutoActions = 16,
    GameItemMove = 17,
    GameItemMoveAll = 18,
    GameItemMenu = 19,
    GameItemQuickMove = 20,
    GameItemQuickMoveAll = 21,
    GameItemDrop = 22,
    GameItemDropAll = 23,
    GameItemEquipToggle = 24,
    GameItemProtectToggle = 25,
    GameHandToggleLeft = 26,
    GameHandToggleRight = 27,
    GameInspect = 28,
    GameInspectItem = 29,
    GameMoreInformation = 30,
    GameZoomIn = 31,
    GameZoomOut = 32,
    GamePause = 33,
    GameSave = 34,
    GameFullscreen = 35,
    GameScreenshotMode = 36,
    GameQuickSlotClear = 37,
    GameQuickSlot1 = 38,
    GameQuickSlot2 = 39,
    GameQuickSlot3 = 40,
    GameQuickSlot4 = 41,
    GameQuickSlot5 = 42,
    GameQuickSlot6 = 43,
    GameQuickSlot7 = 44,
    GameQuickSlot8 = 45,
    GameQuickSlot9 = 46,
    GameQuickSlot10 = 47,
    GameQuickSlot11 = 48,
    GameQuickSlot12 = 49,
    GameQuickSlotToggle1 = 50,
    GameQuickSlotToggle2 = 51,
    GameQuickSlotToggle3 = 52,
    GameQuickSlotToggle4 = 53,
    GameQuickSlotToggle5 = 54,
    GameQuickSlotToggle6 = 55,
    GameQuickSlotToggle7 = 56,
    GameQuickSlotToggle8 = 57,
    GameQuickSlotToggle9 = 58,
    GameQuickSlotToggle10 = 59,
    GameQuickSlotToggle11 = 60,
    GameQuickSlotToggle12 = 61,
    GameContextMenu1 = 62,
    GameContextMenu2 = 63,
    GameContextMenu3 = 64,
    GameContextMenu4 = 65,
    GameContextMenu5 = 66,
    GameContextMenu6 = 67,
    GameContextMenu7 = 68,
    GameContextMenu8 = 69,
    GameContextMenu9 = 70,
    GameContextMenu10 = 71,
    GameContextMenu11 = 72,
    GameContextMenu12 = 73,
    GameContextMenu13 = 74,
    GameContextMenu14 = 75,
    GameContextMenu15 = 76,
    GameContextMenu16 = 77,
    GameContextMenu17 = 78,
    GameContextMenu18 = 79,
    GameContextMenu19 = 80,
    GameContextMenu20 = 81,
    GameContextMenu21 = 82,
    GameContextMenu22 = 83,
    GameContextMenu23 = 84,
    GameContextMenu24 = 85,
    DialogCloseAll = 86,
    DialogOptions = 87,
    DialogHelp = 88,
    DialogMilestones = 89,
    DialogNotes = 90,
    DialogMessages = 91,
    DialogMessagesChatFocus = 92,
    DialogInventory = 93,
    DialogCrafting = 94,
    DialogDismantle = 95,
    DialogEquipment = 96,
    DialogSkills = 97,
    DialogQuests = 98,
    DialogIslands = 99,
    MenuEnter = 100,
    MenuSubmit = 101,
    MenuNext = 102,
    MenuPrevious = 103,
    MenuUp = 104,
    MenuDown = 105,
    MenuLeft = 106,
    MenuRight = 107,
    MenuCancel = 108,
    MenuNextOption = 109,
    MenuPreviousOption = 110,
    MenuContextMenu = 111,
    MenuSelect = 112,
    DeveloperToggleDeveloperMode = 113,
    DeveloperToggleDeveloperTools = 114,
    DeveloperReloadGame = 115,
    DeveloperReloadAndContinueGame = 116,
    DeveloperReloadStylesheets = 117
}
export default Bindable;
export declare enum BindableType {
    Game = 0,
    Dialog = 1,
    Menu = 2,
    Developer = 3,
    Mod = 4
}
