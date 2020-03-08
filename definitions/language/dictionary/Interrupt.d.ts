/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
declare enum Interrupt {
    GameDialogMessagesEditFiltersSaveOverExisting = 0,
    GameDialogMessagesEditFiltersResetConfirm = 1,
    GameMessagesContextMenuClear = 2,
    GameItemMayBeDestroyedInCraft = 3,
    GameItemMayCauseBurns = 4,
    GameItemMayBeDestroyedOnUse = 5,
    GameLoadingQuitting = 6,
    GameLoadingSaving = 7,
    GameReleaseCreature = 8,
    GameRenameCreature = 9,
    GameRenameDoodad = 10,
    GameRenameItem = 11,
    GameReturnToTitleScreen = 12,
    GameReturnToTitleScreenChallenge = 13,
    GameLoadingWorld = 14,
    GameLoadingGeneratingWorld = 15,
    GameLoadingFinalizingWorld = 16,
    GameSailAwayEnd = 17,
    GameSailAwayReturnable = 18,
    GameTravelAway = 19,
    GameLoadingResting = 20,
    GameLoadingSleeping = 21,
    GameLoadingTraveling = 22,
    GameLoadingLostGLContext = 23,
    GameLoadingAutoSaving = 24,
    GameLoadingMods = 25,
    GameLoadingMultiplayerPlayerConnecting = 26,
    GameLoadingMultiplayerSyncing = 27,
    GameLoadingReloadingWebGl = 28,
    GameDangerousStep = 29,
    GameSaveFailure = 30,
    GameLoadFailure = 31,
    GameDesalinationNoNeed = 32,
    GamePickUpWaterStillWithWater = 33,
    GameExtinguishWaterStill = 34,
    GameWellConvert = 35,
    GameNoHealingRequired = 36,
    GameContainerNotFull = 37,
    GameConfirmationActionOnFire = 38,
    GameConfirmationDestroyOnGather = 39,
    GameConfirmationRestWithEquippedFireSource = 40,
    GameLoadingGame = 41,
    GameLoadingSprites = 42,
    GameMultiplayerSynchronizing = 43,
    GameNoSaveOnDeath = 44,
    GameItemsMayBeDestroyedOnUse = 45,
    GameCannotRun = 46,
    GameStartModifiers = 47,
    MenuChangelogLoadingChangelog = 48,
    MenuCharacterCreationImportCharacterFailure = 49,
    MenuCharacterSelectionDeleteCharacter = 50,
    MenuGameEndGhostDeleteSave = 51,
    MenuGameEndWonDeleteSave = 52,
    MenuGameEndDeleteSaveDescription = 53,
    MenuGameEndReturnToTitleScreen = 54,
    MenuGameEndReturnToTitleScreenChallengeMultiplayerDescription = 55,
    MenuGameEndReturnToTitleScreenChallengeDescription = 56,
    MenuGameEndReturnToTitleScreenMultiplayerDescription = 57,
    MenuLoadGameDeleteSave = 58,
    MenuLoadGameLoadingExportingSave = 59,
    MenuLoadGameLoadingImportingSave = 60,
    MenuLoadGameImportSaveFailure = 61,
    MenuLoadGameExportType = 62,
    MenuLoadGamePublishingSave = 63,
    MenuLoadGameMissingMod = 64,
    MenuLoadGameLoading = 65,
    MenuLoadGamePublishError = 66,
    MenuMainLoadingNews = 67,
    MenuMainLoadingChangelog = 68,
    MenuMainWelcomeToVersion = 69,
    MenuMainOldVersionWarning = 70,
    MenuModsConfirmPublish = 71,
    MenuModsConfirmPublishUpdate = 72,
    MenuModsModEnableMultipleLanguages = 73,
    MenuModsModEnableUseLanguage = 74,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 75,
    MenuModsPublishingMod = 76,
    MenuModsPublishError = 77,
    MenuModsUpdatingMod = 78,
    MenuModsPublishUpdateError = 79,
    MenuModsInfoMissingDependencies = 80,
    MenuModsConfirmEnableDisabledDependencies = 81,
    MenuModsConfirmDisableDependents = 82,
    MenuModsConfirmUninstallMod = 83,
    MenuModsUnloadableSaveGameMod = 84,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 85,
    MenuMultiplayerCannotJoinFailedToLoadMods = 86,
    MenuNewGameTooManySaves = 87,
    MenuCustomGameOptionsConfirmImport = 88,
    MenuCustomGameOptionsLoadingImporting = 89,
    MenuOptionsLoading = 90,
    MenuOptionsReloadGame = 91,
    MenuOptionsConfirmUnlockMilestones = 92,
    MenuOptionsConfirmUnlockRecipes = 93,
    MenuOptionsSaveDataClearAll = 94,
    MenuOptionsSaveDataClearCharacters = 95,
    MenuOptionsSaveDataClearHighscores = 96,
    MenuOptionsSaveDataClearMilestones = 97,
    MenuOptionsSaveDataClearOptions = 98,
    MenuOptionsSaveDataClearSaves = 99,
    MenuOptionsSaveDataClearCraftingRecipes = 100,
    MenuOptionsSaveDataClearBindings = 101,
    MenuOptionsConfirmImportGlobalData = 102,
    MenuOptionsLoadingImportingGlobalData = 103,
    MenuPauseGhostKeepSave = 104,
    MenuPauseReturnToTitleScreen = 105,
    MenuPauseReturnToTitleScreenChallengeDescription = 106,
    MenuPauseReturnToTitleScreenChallengeMultiplayerDescription = 107,
    MenuPauseReturnToTitleScreenMultiplayerDescription = 108,
    MultiplayerDownloadingWorldData = 109,
    MultiplayerWaitingForWorldData = 110,
    MultiplayerFailedToConnect = 111,
    MultiplayerConnecting = 112,
    MultiplayerRestartServerAfterLoadingSave = 113,
    MultiplayerDisconnect = 114,
    SteamworksURLOpenedInBrowser = 115,
    SteamworksWorkshopOpenedInBrowser = 116,
    SteamworksModWithNameAlreadyExists = 117,
    SteamworksModImportSaveGameFailure = 118,
    SteamworksModImportedSaveGame = 119,
    SteamworksLoadingRefreshingMods = 120,
    SteamworksOpenFolderFailure = 121
}
export default Interrupt;
