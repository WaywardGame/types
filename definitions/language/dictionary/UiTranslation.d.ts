/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
/**
 * Ui messages that are on elements that don't change
 */
declare enum UiTranslation {
    GameActionGather = 0,
    GameStaticButtonRespawn = 1,
    GameDialogSharedContextMenuResetPosition = 2,
    GameDialogCraftingName = 3,
    GameDialogMessagesName = 4,
    GameDialogMessagesOptionTimestamp = 5,
    GameDialogMessagesOptionShowSendButton = 6,
    GameDialogMessagesOptionShowOptionsButton = 7,
    GameDialogMessagesOptionMaxMessages = 8,
    GameDialogMessagesEditFiltersName = 9,
    GameDialogMessagesEditFiltersLabelName = 10,
    GameDialogMessagesEditFiltersButtonDelete = 11,
    GameDialogMessagesEditFiltersButtonSave = 12,
    GameDialogMessagesEditFiltersButtonReset = 13,
    GameDialogMessagesEditFiltersButtonNew = 14,
    GameDialogNotesName = 15,
    GameDialogNotesNoteTime = 16,
    GameDialogNotesNoteNumber = 17,
    GameDialogNotesNoteLockedTitle = 18,
    GameDialogNotesNoteLockedDescription = 19,
    GameDialogNotesLinkId = 20,
    GameDialogNotesLinkLearnMore = 21,
    GameDialogNotesSettingsPinUnreadNotesAutomatically = 22,
    GameDialogQuickSettingsName = 23,
    GameDialogMilestonesName = 24,
    GameDialogMilestonesInvisibleMilestone = 25,
    GameDialogMilestonesProgress = 26,
    GameDialogMilestonesProgressHidden = 27,
    GameDialogMilestonesMilestone = 28,
    GameDialogMilestonesTooltipHidden = 29,
    GameDialogMilestonesTooltipInvisible = 30,
    GameDialogMilestonesSortName = 31,
    GameDialogMilestonesSortProgress = 32,
    GameDialogSkillsName = 33,
    GameDialogSkillsSkill = 34,
    GameDialogSkillsSkillHover = 35,
    GameDialogSkillsTooltipReputationImpact = 36,
    GameDialogSkillsTooltipCanIncrease = 37,
    GameDialogSkillsTooltipBonuses = 38,
    GameDialogSkillsTooltipBonus = 39,
    GameDialogSkillsTooltipEffects = 40,
    GameDialogSkillsSortName = 41,
    GameDialogSkillsSortLevel = 42,
    GameDialogBookName = 43,
    GameDialogInspectName = 44,
    GameDialogMapName = 45,
    GameDialogMapTooltipDecode = 46,
    GameDialogQuestsName = 47,
    GameDialogQuestsLink = 48,
    GameDialogQuestsChildQuests = 49,
    GameDialogQuestsRequirements = 50,
    GameDialogQuestsActiveQuests = 51,
    GameDialogQuestsCompletedQuests = 52,
    GameDialogQuestsCompleteQuest = 53,
    GameTooltipShowMoreInformation = 54,
    GameTooltipLegendaryMaxWeightLabel = 55,
    GameStatsPercentage = 56,
    GameStatsStatAttack = 57,
    GameStatsStatGeneric = 58,
    GameStatsStatGenericWithMax = 59,
    GameStatsStatbar = 60,
    GameStatsStatHealthTooltip = 61,
    GameStatsStatStaminaTooltip = 62,
    GameStatsStatHungerTooltip = 63,
    GameStatsStatThirstTooltip = 64,
    GameStatsStatHealthStatusWarning = 65,
    GameStatsStatStaminaStatusWarning = 66,
    GameStatsStatHungerStatusWarning = 67,
    GameStatsStatThirstStatusWarning = 68,
    GameStatsStatWeightStatusWarning = 69,
    GameStatsStatStaminaStatusBad = 70,
    GameStatsStatHungerStatusBad = 71,
    GameStatsStatThirstStatusBad = 72,
    GameStatsStatWeightStatusBad = 73,
    GameStatsStatReputationTooltipAverageReputation = 74,
    GameStatsStatReputationTooltipDifficulty = 75,
    GameStatsStatReputationTooltipDifficultyEasy = 76,
    GameStatsStatReputationTooltipDifficultyHard = 77,
    GameStatsStatReputationTooltipDifficultyInfantile = 78,
    GameStatsStatReputationTooltipDifficultyInsane = 79,
    GameStatsStatReputationTooltipDifficultyMedium = 80,
    GameStatsStatReputationTooltipDifficultyNightmare = 81,
    GameStatsStatReputationTooltipDifficultySimple = 82,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 83,
    GameStatsStatReputationTooltipDifficultyVeryHard = 84,
    GameStatsStatReputationTooltipBenignity = 85,
    GameStatsStatReputationTooltipMalignity = 86,
    GameStatsStatReputationTooltipScore = 87,
    GameStatsStatReputationTooltipTurn = 88,
    GameStatsStatReputationTooltipTicks = 89,
    GameStatsStatWeightTooltip = 90,
    GameStatsStatAttackTooltipTactics = 91,
    GameStatsStatAttackTooltipLeftHand = 92,
    GameStatsStatAttackTooltipRightHand = 93,
    GameStatsStatDefenseTooltipBase = 94,
    GameStatsStatDefenseTooltipBlunt = 95,
    GameStatsStatDefenseTooltipParrying = 96,
    GameStatsStatDefenseTooltipFire = 97,
    GameStatsStatDefenseTooltipPiercing = 98,
    GameStatsStatDefenseTooltipSlashing = 99,
    GameItemBarterCredit = 100,
    GameItemBarterCreditTrade = 101,
    GameMenuBarButtonTooltipBindable = 102,
    GameMenuBarButtonTooltipMenu = 103,
    GameMenuBarButtonTooltipSave = 104,
    GameMenuBarButtonTooltipSaveSize = 105,
    GameMenuBarButtonTooltipSaveTurnsAgo = 106,
    GameMenuBarButtonTooltipSaveLastTime = 107,
    GameMenuBarButtonTooltipNotes = 108,
    GameMenuBarButtonTooltipMilestones = 109,
    GameMenuBarButtonTooltipMilestonesDisabled = 110,
    GameMenuBarButtonTooltipMessages = 111,
    GameMenuBarButtonTooltipHelp = 112,
    GameMenuBarButtonTooltipQuickSettings = 113,
    GameMenuBarButtonTooltipActions = 114,
    GameMenuBarButtonTooltipInventory = 115,
    GameMenuBarButtonTooltipCrafting = 116,
    GameMenuBarButtonTooltipEquipment = 117,
    GameMenuBarButtonTooltipSkills = 118,
    GameMenuBarButtonTooltipQuests = 119,
    GameMenuBarButtonTooltipQuestsDisabled = 120,
    GameMessagesButtonSend = 121,
    GameMessagesContextMenuShowAsDialog = 122,
    GameMessagesContextMenuClear = 123,
    GameMessagesContextMenuCopy = 124,
    GameMessagesContextMenuExport = 125,
    GameMessagesFilter = 126,
    GameMessagesFiltersEdit = 127,
    GameMessagesNewNote = 128,
    GameMessagesTurn = 129,
    GameMessagesDedicatedServerBackup = 130,
    GameMessagesDedicatedServerBackupLimitReached = 131,
    GameTileInspectionCannotSeeTile = 132,
    MenuAboutTitle = 133,
    MenuAboutDescription = 134,
    MenuAboutGameDescription = 135,
    MenuAboutSectionTeam = 136,
    MenuAboutTeamMemberResponsibilities = 137,
    MenuAboutTeamMemberName = 138,
    MenuAboutTeamMemberNickname = 139,
    MenuAboutSectionContributors = 140,
    MenuAboutSectionSpecialThanks = 141,
    MenuAboutTextSpecialThanksTestorsAndDonators = 142,
    MenuAboutSectionLibraries = 143,
    MenuAboutSectionLibrariesDescription = 144,
    MenuBindings = 145,
    MenuBindingsDescription = 146,
    MenuChangelogTitle = 147,
    MenuChangelogDescription = 148,
    MenuChangelogHeadingFailedLoad = 149,
    MenuChangelogHeadingChangeCount = 150,
    MenuCharacterCreationButtonRandomizeName = 151,
    MenuCharacterCreationButtonExportTooltip = 152,
    MenuCharacterCreationButtonImportTooltip = 153,
    MenuCharacterCreationButtonStartGame = 154,
    MenuCharacterCreationButtonJoinGame = 155,
    MenuCharacterCreationDescription = 156,
    MenuCharacterCreationHeadingHairColor = 157,
    MenuCharacterCreationHeadingHairStyle = 158,
    MenuCharacterCreationHeadingSkinTone = 159,
    MenuCharacterCreationLabelName = 160,
    MenuCharacterCreationTitle = 161,
    MenuCharacterCreationButtonRotateLeftTooltip = 162,
    MenuCharacterCreationButtonRotateRightTooltip = 163,
    MenuCharacterCreationButtonRandomizeTooltip = 164,
    MenuCharacterSelectionButtonNewCharacter = 165,
    MenuCharacterSelectionDescription = 166,
    MenuCharacterSelectionHeadingNoCharacters = 167,
    MenuCharacterSelectionTitle = 168,
    MenuCharacterSelectionLabelLastUse = 169,
    MenuCharacterSelectionLabelUseCount = 170,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 171,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 172,
    MenuMultiplayerDescription = 173,
    MenuMultiplayerTitle = 174,
    MenuMultiplayerButtonJoinById = 175,
    MenuMultiplayerServerLabelReputation = 176,
    MenuMultiplayerServerLabelDays = 177,
    MenuMultiplayerServerLabelIsland = 178,
    MenuMultiplayerButtonNewGame = 179,
    MenuMultiplayerButtonLoadGame = 180,
    MenuMultiplayerServerTooltipPVP = 181,
    MenuMultiplayerServerTooltipModsLabel = 182,
    MenuMultiplayerServerTooltipFriendsLabel = 183,
    MenuMultiplayerServerPlayers = 184,
    MenuMultiplayerServerLobbyType = 185,
    MenuMultiplayerServerRegion = 186,
    MenuMultiplayerServerHost = 187,
    MenuMultiplayerServerVersion = 188,
    MenuMultiplayerServerVersionUnknown = 189,
    MenuMultiplayerServerDedicated = 190,
    MenuMultiplayerHeadingPlayersOnline = 191,
    MenuMultiplayerServerModUnableToLoad = 192,
    MenuGameEndTitleDead = 193,
    MenuGameEndTitleWon = 194,
    MenuGameEndShareFacebook = 195,
    MenuGameEndShareTwitter = 196,
    MenuGameEndContinueAsGhost = 197,
    MenuGameEndReturnToIsland = 198,
    MenuGameEndExitToMenu = 199,
    MenuHelpTitle = 200,
    MenuHelpDescription = 201,
    MenuHelpLabelSearch = 202,
    MenuHighscoresTitle = 203,
    MenuHighscoresDescription = 204,
    MenuHighscoresDifficultyFilterAll = 205,
    MenuHighscoresHighscoreLabelDifficulty = 206,
    MenuHighscoresHighscoreLabelTurns = 207,
    MenuHighscoresHighscoreLabelScore = 208,
    MenuHighscoresHighscoreLabelPlace = 209,
    MenuHighscoresHighscoreLabelDate = 210,
    MenuHighscoresHighscoreLabelDeathBy = 211,
    MenuHighscoresHighscoreTitle = 212,
    MenuHighscoresCharacterNameUnknown = 213,
    MenuHighscoresHighscoreReplayWithSettings = 214,
    MenuLoadGameButtonNewGame = 215,
    MenuLoadGameButtonNewGameButtonImportTooltip = 216,
    MenuLoadGameDescription = 217,
    MenuLoadGameSaveButtonDeleteTooltip = 218,
    MenuLoadGameSaveButtonEditNameTooltip = 219,
    MenuLoadGameSaveButtonExportTooltip = 220,
    MenuLoadGameSaveTooltipLabelCreatedTime = 221,
    MenuLoadGameSaveTooltipLabelSaveTime = 222,
    MenuLoadGameSaveTooltipLabelGameMode = 223,
    MenuLoadGameSaveTooltipLabelScore = 224,
    MenuLoadGameSaveTooltipLabelSeed = 225,
    MenuLoadGameSaveTooltipLabelTurns = 226,
    MenuLoadGameSaveTooltipLabelMods = 227,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 228,
    MenuLoadGameSaveTooltipMod = 229,
    MenuLoadGameSaveTooltipNew = 230,
    MenuLoadGameSlotsRemaining = 231,
    MenuLoadGameSaveGame = 232,
    MenuLoadGameSaveGameDescription = 233,
    MenuLoadGameTitle = 234,
    MenuLoadGameLabelSelected = 235,
    MenuLoadGameButtonDeleteSelectedTooltip = 236,
    MenuMainButtonAbout = 237,
    MenuMainButtonChangelog = 238,
    MenuMainButtonContinueGame = 239,
    MenuMainButtonMultiplayer = 240,
    MenuMainButtonHighscores = 241,
    MenuMainButtonLoadGame = 242,
    MenuMainButtonMods = 243,
    MenuMainButtonNewGame = 244,
    MenuMainButtonNews = 245,
    MenuMainButtonOptions = 246,
    MenuMainButtonQuitGame = 247,
    MenuModsButtonModdingGuide = 248,
    MenuModsButtonOpenFolder = 249,
    MenuModsButtonOpenWorkshop = 250,
    MenuModsDescription = 251,
    MenuModsTitle = 252,
    MenuModsTooltipLabelAuthor = 253,
    MenuModsTooltipLabelTags = 254,
    MenuModsTooltipLabelDependencies = 255,
    MenuModsTooltipLabelProvides = 256,
    MenuModsTooltipLabelVersion = 257,
    MenuModsTooltipLabelDescription = 258,
    MenuModsTooltipLabelInstallDate = 259,
    MenuModsTooltipLabelCreatedDate = 260,
    MenuModsTooltipLabelLastUpdatedDate = 261,
    MenuModsTooltipMultiplayerCompatibility = 262,
    MenuModsTooltipPreventsMilestoneUnlocks = 263,
    MenuModsTooltipModOptions = 264,
    MenuModsTooltipPublishMod = 265,
    MenuModsTooltipUninstallMod = 266,
    MenuModsTooltipViewInSteamWorkshop = 267,
    MenuModsButtonEditInternalMods = 268,
    MenuModsSectionHeading = 269,
    MenuModsSubmenuEditInternalModsTitle = 270,
    MenuModsSubmenuEditInternalModsDescription = 271,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 272,
    MenuNewGameButtonNext = 273,
    MenuNewGameButtonStartServer = 274,
    MenuNewGameDescription = 275,
    MenuNewGameLabelEditName = 276,
    MenuNewGameLabelEditSeed = 277,
    MenuNewGamePlaceholderEditSeed = 278,
    MenuNewGameTitle = 279,
    MenuNewGameChoiceDifficulty = 280,
    MenuNewGameChoiceSingleplayer = 281,
    MenuNewGameChoiceSingleplayerDescription = 282,
    MenuNewGameChoiceMultiplayer = 283,
    MenuNewGameChoiceMultiplayerDescription = 284,
    MenuNewGameChoiceTurnModeManual = 285,
    MenuNewGameChoiceTurnModeManualDescription = 286,
    MenuNewGameChoiceTurnModeRealTime = 287,
    MenuNewGameChoiceTurnModeRealTimeDescription = 288,
    MenuNewGameChoiceTurnModeSimulated = 289,
    MenuNewGameChoiceTurnModeSimulatedDescription = 290,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 291,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 292,
    MenuNewGameChoiceDifficultyChallengeDaily = 293,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 294,
    MenuNewGameButtonMilestones = 295,
    MenuNewGameButtonMilestonesDescription = 296,
    MenuNewGameTabGameMode = 297,
    MenuNewGameTabMultiplayer = 298,
    MenuNewGameTabGameplayModifiers = 299,
    MenuNewGameHeadingGameMode = 300,
    MenuNewGameHeadingMultiplayer = 301,
    MenuNewGameHeadingGameplayModifiers = 302,
    MenuNewGameChoiceClientsInheritHostModifiers = 303,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 304,
    MenuNewGameChoiceCustomModifiers = 305,
    MenuNewGameChoiceCustomModifiersDescription = 306,
    MenuMilestoneModifiersTitle = 307,
    MenuMilestoneModifiersDescription = 308,
    MenuCustomGameOptionsTitle = 309,
    MenuCustomGameOptionsDescription = 310,
    MenuCustomGameOptionsRespawnOnDeath = 311,
    MenuCustomGameOptionsRespawnOnDeathDescription = 312,
    MenuCustomGameOptionsUseUnlockedRecipes = 313,
    MenuCustomGameOptionsStartingIslandBiome = 314,
    MenuCustomGameOptionsApplyTravelingEffects = 315,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 316,
    MenuCustomGameOptionsCreaturesPeaceful = 317,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 318,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 319,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 320,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 321,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 322,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 323,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 324,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 325,
    MenuCustomGameOptionsCreaturesAllowSpawning = 326,
    MenuCustomGameOptionsCreaturesSpawnLimit = 327,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 328,
    MenuCustomGameOptionsCreatureNone = 329,
    MenuCustomGameOptionsCreatureConfigure = 330,
    MenuCustomGameOptionsBenignityInitial = 331,
    MenuCustomGameOptionsBenignityMultiplier = 332,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 333,
    MenuCustomGameOptionsMalignityInitial = 334,
    MenuCustomGameOptionsMalignityMultiplier = 335,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 336,
    MenuCustomGameOptionsStatMultiplier = 337,
    MenuCustomGameOptionsStatMultiplierTooltip = 338,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 339,
    MenuCustomGameOptionsHeadingGeneral = 340,
    MenuCustomGameOptionsHeadingIsland = 341,
    MenuCustomGameOptionsHeadingTime = 342,
    MenuCustomGameOptionsHeadingStats = 343,
    MenuCustomGameOptionsHeadingReputation = 344,
    MenuCustomGameOptionsHeadingInventory = 345,
    MenuCustomGameOptionsHeadingCreatures = 346,
    MenuCustomGameOptionsHeadingSkills = 347,
    MenuCustomGameOptionsHeadingStatusEffects = 348,
    MenuCustomGameOptionsEternalNight = 349,
    MenuCustomGameOptionsEternalNightDescription = 350,
    MenuCustomGameOptionsEternalDay = 351,
    MenuCustomGameOptionsEternalDayDescription = 352,
    MenuCustomGameOptionsTimeFrozen = 353,
    MenuCustomGameOptionsTimeInitial = 354,
    MenuCustomGameOptionsTimeDayLength = 355,
    MenuCustomGameOptionsTimeDayLengthTooltip = 356,
    MenuCustomGameOptionsTimeDayPercent = 357,
    MenuCustomGameOptionsTimeDayPercentTooltip = 358,
    MenuCustomGameOptionsStatStarting = 359,
    MenuCustomGameOptionsStatMax = 360,
    MenuCustomGameOptionsStatStartingDisplay = 361,
    MenuCustomGameOptionsStatMaxDisplay = 362,
    MenuCustomGameOptionsStatNoChange = 363,
    MenuCustomGameOptionsStatBonus = 364,
    MenuCustomGameOptionsStatBonusDisplay = 365,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 366,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 367,
    MenuCustomGameOptionsStatusEffectStartWith = 368,
    MenuCustomGameOptionsStatusEffectUntreatable = 369,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 370,
    MenuCustomGameOptionsSkillInitialRandomCount = 371,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 372,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 373,
    MenuCustomGameOptionsSkillsGlobal = 374,
    MenuCustomGameOptionsSkillNone = 375,
    MenuCustomGameOptionsSkillConfigure = 376,
    MenuCustomGameOptionsSkillInitial = 377,
    MenuCustomGameOptionsSkillMultiplier = 378,
    MenuCustomGameOptionsSkillMultiplierTooltip = 379,
    MenuCustomGameOptionsRandomItems = 380,
    MenuCustomGameOptionsRandomItemsDescription = 381,
    MenuCustomGameOptionsExport = 382,
    MenuCustomGameOptionsImport = 383,
    MenuNewsDescription = 384,
    MenuNewsHeadingSocial = 385,
    MenuNewsTitle = 386,
    MenuNewsHeadingUnableToLoad = 387,
    MenuNewsButtonAllNews = 388,
    MenuOptionsButtonDitherFogOfWar = 389,
    MenuOptionsButtonDisableCustomCursor = 390,
    MenuOptionsButtonFullscreen = 391,
    MenuOptionsButtonDeveloperMode = 392,
    MenuOptionsButtonDeveloperModeContextMenu = 393,
    MenuOptionsButtonPixelFont = 394,
    MenuOptionsButtonReloadGame = 395,
    MenuOptionsButtonReloadStylesheets = 396,
    MenuOptionsButtonExportGlobalSaveData = 397,
    MenuOptionsButtonImportGlobalSaveData = 398,
    MenuOptionsButtonSaveDataClearAll = 399,
    MenuOptionsButtonSaveDataClearCharacters = 400,
    MenuOptionsButtonSaveDataClearHighscores = 401,
    MenuOptionsButtonSaveDataClearMilestones = 402,
    MenuOptionsButtonSaveDataClearOptions = 403,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 404,
    MenuOptionsButtonSaveDataClearSaves = 405,
    MenuOptionsButtonSkipSplash = 406,
    MenuOptionsButtonToggleDevTools = 407,
    MenuOptionsButtonTooltipsCreatures = 408,
    MenuOptionsButtonOpenLogsFolder = 409,
    MenuOptionsButtonTooltipsDoodads = 410,
    MenuOptionsButtonTooltipsItems = 411,
    MenuOptionsButtonTooltipsTerrain = 412,
    MenuOptionsButtonDropLocationFacing = 413,
    MenuOptionsButtonDropLocationFeet = 414,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 415,
    MenuOptionsDescription = 416,
    MenuOptionsHeadingAudio = 417,
    MenuOptionsHeadingDeveloper = 418,
    MenuOptionsHeadingGameplayOptions = 419,
    MenuOptionsHeadingGeneralOptions = 420,
    MenuOptionsHeadingControls = 421,
    MenuOptionsHeadingLanguage = 422,
    MenuOptionsHeadingPowerPreference = 423,
    MenuOptionsHeadingModOptions = 424,
    MenuOptionsHeadingOther = 425,
    MenuOptionsHeadingSaveData = 426,
    MenuOptionsHeadingTooltips = 427,
    MenuOptionsHeadingVideo = 428,
    MenuOptionsLabelInterfaceScale = 429,
    MenuOptionsLabelTooltipDelay = 430,
    MenuOptionsLabelDirectionTurnDelay = 431,
    MenuOptionsLabelMouseTurnDelay = 432,
    MenuOptionsTooltipTurnDelay = 433,
    MenuOptionsTooltipMouseTurnDelay = 434,
    MenuOptionsTooltipUiScaleClamped = 435,
    MenuOptionsTooltipControlsFilter = 436,
    MenuOptionsLabelVolumeEffects = 437,
    MenuOptionsLabelVolumeMusic = 438,
    MenuOptionsTabAudio = 439,
    MenuOptionsTabDeveloper = 440,
    MenuOptionsTabGameplay = 441,
    MenuOptionsTabGeneral = 442,
    MenuOptionsTabControls = 443,
    MenuOptionsTabMods = 444,
    MenuOptionsTabSaveData = 445,
    MenuOptionsTabVideo = 446,
    MenuOptionsTitle = 447,
    MenuOptionsTooltipMusicNextTrack = 448,
    MenuOptionsBindChoose = 449,
    MenuOptionsBindChooseAdd = 450,
    MenuOptionsBindLabelModifier = 451,
    MenuOptionsBindButtonResetTooltip = 452,
    MenuOptionsBindButtonDeleteTooltip = 453,
    MenuOptionsBindButtonAddTooltip = 454,
    MenuOptionsBindButtonAddMacroTooltip = 455,
    MenuOptionsButtonUnlockAllMilestones = 456,
    MenuOptionsButtonUnlockAllCraftingRecipes = 457,
    MenuOptionsButtonAlternatingDirectionMovement = 458,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 459,
    MenuOptionsButtonAlwaysShowMoreInformation = 460,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 461,
    MenuOptionsButtonAutoGatherHarvest = 462,
    MenuOptionsButtonAutoGatherHarvestTooltip = 463,
    MenuOptionsButtonDisableUIEffects = 464,
    MenuOptionsButtonDisableUIEffectsTooltip = 465,
    MenuOptionsButtonAutoAttack = 466,
    MenuOptionsButtonAutoAttackTooltip = 467,
    MenuOptionsButtonAutoPickup = 468,
    MenuOptionsButtonAutoPickupTooltip = 469,
    MenuOptionsButtonDropOnDismantle = 470,
    MenuOptionsButtonDropOnDismantleTooltip = 471,
    MenuOptionsButtonDropOnGatherHarvest = 472,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 473,
    MenuOptionsButtonKeepSortActive = 474,
    MenuOptionsButtonKeepSortActiveTooltip = 475,
    MenuOptionsButtonProtectCraftingItemsInInventory = 476,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 477,
    MenuOptionsButtonProtectCraftingItemContainers = 478,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 479,
    MenuOptionsButtonUseAdjacentContainers = 480,
    MenuOptionsButtonUseAdjacentContainersTooltip = 481,
    MenuOptionsButtonHideEquippedHeadgear = 482,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 483,
    MenuOptionsButtonAutoSave = 484,
    MenuOptionsButtonAutoSaveTooltip = 485,
    MenuOptionsRangeAutoSaveTimerLabel = 486,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 487,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 488,
    MenuOptionsButtonWarnOnDangerousActions = 489,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 490,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 491,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 492,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 493,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 494,
    MenuOptionsHeadingWarnWhenBreakingItems = 495,
    MenuOptionsButtonSaveDataClearBindings = 496,
    MenuOptionsTooltipDialogOpacity = 497,
    MenuOptionsLabelDialogOpacity = 498,
    MenuOptionsDeveloperLogSourceFilterHeading = 499,
    MenuOptionsDeveloperUIExperiments = 500,
    MenuOptionsDeveloperUIExperimentsDescription = 501,
    MenuOptionsAudioVolumeDisplay = 502,
    MenuOptionsAudioInputSoundOnTyping = 503,
    MenuOptionsMusicPlaylist = 504,
    MenuOptionsButtonConfigureBindings = 505,
    MenuPauseButtonContinue = 506,
    MenuPauseButtonOptions = 507,
    MenuPauseButtonModes = 508,
    MenuPauseButtonPaused = 509,
    MenuPauseButtonMultiplayer = 510,
    MenuPauseButtonTitleScreen = 511,
    MenuPauseButtonStopServer = 512,
    MenuPauseHeadingPaused = 513,
    MenuPauseParagraphPaused = 514,
    MenuPauseHeadingNotPaused = 515,
    MenuPauseParagraphNotPaused = 516,
    MenuPauseHeadingDedicatedServer = 517,
    MenuPauseParagraphDedicatedServer = 518,
    MenuModesTitle = 519,
    MenuModesDescription = 520,
    MenuMultiplayerOptionsTitle = 521,
    MenuMultiplayerOptionsDescription = 522,
    MenuMultiplayerOptionsOpenServer = 523,
    MenuMultiplayerOptionsOpenServerDescription = 524,
    MenuMultiplayerOptionsCopyGameCode = 525,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 526,
    MenuMultiplayerOptionsInviteSteamFriends = 527,
    MenuMultiplayerOptionsCheckConnectionHeading = 528,
    MenuMultiplayerOptionsCheckConnectionParagraph = 529,
    MenuMultiplayerOptionsCheckConnectionButton = 530,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 531,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 532,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 533,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 534,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 535,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 536,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 537,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 538,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 539,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 540,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 541,
    MenuJoinServerTitle = 542,
    MenuJoinServerDescription = 543,
    MenuJoinServerInputPlaceholder = 544,
    MenuJoinServerNext = 545,
    MenuJoinServerChooseModifiersTitle = 546,
    MenuJoinServerChooseModifiersDescription = 547,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 548,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 549,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 550,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 551,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 552,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 553,
    MenuSharedMultiplayerChoicePVP = 554,
    MenuSharedMultiplayerChoicePVPDescription = 555,
    MenuSharedMultiplayerDescription = 556,
    MenuSharedMultiplayerMaxPlayers = 557,
    MenuSharedRealTimeTickSpeedTooltip = 558,
    MenuSharedRealTimeTickSpeedLabel = 559,
    MenuSharedButtonDefault = 560,
    MenuSharedValueMillseconds = 561,
    MenuSharedValuePercentage = 562,
    MenuSharedMilestonesNotUnlockable = 563,
    MenuSharedMilestonesNotUnlockableDescription = 564,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 565,
    MenuSharedButtonDisableAll = 566,
    MenuSharedButtonEnableAll = 567,
    MenuSharedMilestoneModifiersSelected = 568,
    MiscSortBy = 569,
    MiscSortDirection = 570,
    MiscFilter = 571,
    MiscPlayerNameDefault = 572,
    MiscPlayerNameServer = 573,
    MiscSaveNameDefault = 574,
    MiscSaveNameDailyChallenge = 575,
    MiscSaveNameChallenge = 576,
    MiscSaveVersionUnknown = 577,
    MiscVersion = 578,
    MiscTime = 579,
    MiscTimeMeridiem = 580,
    MiscBindableOr = 581,
    MiscBindableNoBindings = 582,
    DifficultyOptionsPeaceful = 583,
    DifficultyOptionsAberrantSpawnsDisabled = 584,
    DifficultyOptionsAberrantSpawnsOnly = 585,
    DifficultyOptionsCreatureSpawningDisabled = 586,
    DifficultyOptionsCreatureSpawnsDefault = 587,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 588,
    DifficultyOptionsCreatureSpawnsNoAberrants = 589,
    DifficultyOptionsSpawnLimit = 590,
    DifficultyOptionsRespawn = 591,
    DifficultyOptionsEternalNight = 592,
    DifficultyOptionsEternalDay = 593,
    DifficultyOptionsTimeInitial = 594,
    DifficultyOptionsTimeFrozen = 595,
    DifficultyOptionsTimeDayLength = 596,
    DifficultyOptionsTimeDayPercent = 597,
    DifficultyOptionsNoItems = 598,
    DifficultyOptionsBenignityInitial = 599,
    DifficultyOptionsBenignityMultiplier = 600,
    DifficultyOptionsMalignityInitial = 601,
    DifficultyOptionsMalignityMultiplier = 602,
    DifficultyOptionsWeightBonus = 603,
    DifficultyOptionsStatInitial = 604,
    DifficultyOptionsStatMax = 605,
    DifficultyOptionsStatMultiplier = 606,
    DifficultyOptionsStatusEffectStartWith = 607,
    DifficultyOptionsStatusEffectUntreatable = 608,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 609,
    DifficultyOptionsNoRandomSkills = 610,
    DifficultyOptionsSkillStartingCount = 611,
    DifficultyOptionsSkillGainMultiplier = 612,
    DifficultyOptionsSkillInitial = 613,
    DifficultyOptionsStatusEffectPermanent = 614,
    DifficultyOptionsStatusEffectRateMultiplier = 615,
    DifficultyOptionsStatusEffectMultiplier = 616,
    EquipmentBack = 617,
    EquipmentBelt = 618,
    EquipmentChest = 619,
    EquipmentFeet = 620,
    EquipmentHands = 621,
    EquipmentHead = 622,
    EquipmentLeftHand = 623,
    EquipmentLeftHandOption = 624,
    EquipmentLegs = 625,
    EquipmentNeck = 626,
    EquipmentRightHand = 627,
    EquipmentRightHandOption = 628,
    EquipmentUse = 629,
    HudFilter = 630,
    QuickSlot1 = 631,
    QuickSlot2 = 632,
    QuickSlot3 = 633,
    QuickSlot4 = 634,
    QuickSlot5 = 635,
    QuickSlot6 = 636,
    QuickSlot7 = 637,
    QuickSlot8 = 638,
    QuickSlot9 = 639,
    TabCrafting = 640,
    TabDismantle = 641,
    Version = 642,
    WindowTitleContainer = 643,
    WindowTitleCrafting = 644,
    WindowTitleEquipment = 645,
    WindowTitleInventory = 646
}
export default UiTranslation;
