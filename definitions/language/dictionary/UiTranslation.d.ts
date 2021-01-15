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
    GameDialogSkillsSortName = 36,
    GameDialogSkillsSortLevel = 37,
    GameDialogBookName = 38,
    GameDialogInspectName = 39,
    GameDialogMoreInformationName = 40,
    GameDialogMoreInformationText = 41,
    GameDialogMoreInformationNoInformation = 42,
    GameDialogMapName = 43,
    GameDialogMapDurability = 44,
    GameDialogMapTooltipDecode = 45,
    GameDialogMapTooltipRotateClockwise = 46,
    GameDialogMapTooltipRotateCounterClockwise = 47,
    GameDialogMapTooltipFlipHorizontal = 48,
    GameDialogMapTooltipFlipVertical = 49,
    GameDialogMapTooltipResetView = 50,
    GameDialogQuestsName = 51,
    GameDialogQuestsLink = 52,
    GameDialogQuestsChildQuests = 53,
    GameDialogQuestsRequirements = 54,
    GameDialogQuestsActiveQuests = 55,
    GameDialogQuestsCompletedQuests = 56,
    GameDialogQuestsCompleteQuest = 57,
    GameTooltipInspect = 58,
    GameTooltipShowMoreInformation = 59,
    GameTooltipMagicalMaxWeightLabel = 60,
    GameTooltipMagicalLabel = 61,
    GameTooltipItemUsesLabel = 62,
    GameTooltipItemUse = 63,
    GameTooltipItemUseActionTierQualityIncrease = 64,
    GameTooltipItemUseActionTierLabel = 65,
    GameTooltipItemDurability = 66,
    GameTooltipItemDurabilityMagicalDamageReduction = 67,
    GameTooltipItemWeight = 68,
    GameTooltipItemMagicalSource = 69,
    GameTooltipItemGroupingsLabel = 70,
    GameTooltipItemGroup = 71,
    GameTooltipItemWorth = 72,
    GameTooltipItemWorthMagicalBonus = 73,
    GameTooltipItemProtected = 74,
    GameTooltipItemProtectedContainer = 75,
    GameTooltipItemProtectedTooltip = 76,
    GameTooltipSkillCurrent = 77,
    GameTooltipSkillReputationImpact = 78,
    GameTooltipSkillCanIncrease = 79,
    GameTooltipSkillBonuses = 80,
    GameTooltipSkillBonus = 81,
    GameStatsPercentage = 82,
    GameStatsStatAttack = 83,
    GameStatsStatGeneric = 84,
    GameStatsStatGenericWithMax = 85,
    GameStatsStatbar = 86,
    GameStatsStatHealthTooltip = 87,
    GameStatsStatStaminaTooltip = 88,
    GameStatsStatHungerTooltip = 89,
    GameStatsStatThirstTooltip = 90,
    GameStatsStatHealthStatusWarning = 91,
    GameStatsStatStaminaStatusWarning = 92,
    GameStatsStatHungerStatusWarning = 93,
    GameStatsStatThirstStatusWarning = 94,
    GameStatsStatWeightStatusWarning = 95,
    GameStatsStatStaminaStatusBad = 96,
    GameStatsStatHungerStatusBad = 97,
    GameStatsStatThirstStatusBad = 98,
    GameStatsStatWeightStatusBad = 99,
    GameStatsStatReputationTooltipAverageReputation = 100,
    GameStatsStatReputationTooltipDifficulty = 101,
    GameStatsStatReputationTooltipDifficultyEasy = 102,
    GameStatsStatReputationTooltipDifficultyHard = 103,
    GameStatsStatReputationTooltipDifficultyInfantile = 104,
    GameStatsStatReputationTooltipDifficultyInsane = 105,
    GameStatsStatReputationTooltipDifficultyMedium = 106,
    GameStatsStatReputationTooltipDifficultyNightmare = 107,
    GameStatsStatReputationTooltipDifficultySimple = 108,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 109,
    GameStatsStatReputationTooltipDifficultyVeryHard = 110,
    GameStatsStatReputationTooltipBenignity = 111,
    GameStatsStatReputationTooltipMalignity = 112,
    GameStatsStatReputationTooltipScore = 113,
    GameStatsStatReputationTooltipTurn = 114,
    GameStatsStatReputationTooltipTicks = 115,
    GameStatsStatWeightTooltip = 116,
    GameStatsStatAttackTooltipTactics = 117,
    GameStatsStatAttackTooltipLeftHand = 118,
    GameStatsStatAttackTooltipRightHand = 119,
    GameStatsStatDefenseTooltipBase = 120,
    GameStatsStatDefenseTooltipBlunt = 121,
    GameStatsStatDefenseTooltipParrying = 122,
    GameStatsStatDefenseTooltipFire = 123,
    GameStatsStatDefenseTooltipCold = 124,
    GameStatsStatDefenseTooltipPiercing = 125,
    GameStatsStatDefenseTooltipSlashing = 126,
    GameItemBarterCredit = 127,
    GameItemBarterCreditTrade = 128,
    GameMenuBarButtonTooltipBindable = 129,
    GameMenuBarButtonTooltipMenu = 130,
    GameMenuBarButtonTooltipSave = 131,
    GameMenuBarButtonTooltipSaveSize = 132,
    GameMenuBarButtonTooltipSaveTurnsAgo = 133,
    GameMenuBarButtonTooltipSaveLastTime = 134,
    GameMenuBarButtonTooltipNotes = 135,
    GameMenuBarButtonTooltipNotesUnread = 136,
    GameMenuBarButtonTooltipMilestones = 137,
    GameMenuBarButtonTooltipMilestonesDisabled = 138,
    GameMenuBarButtonTooltipMessages = 139,
    GameMenuBarButtonTooltipHelp = 140,
    GameMenuBarButtonTooltipQuickSettings = 141,
    GameMenuBarButtonTooltipActions = 142,
    GameMenuBarButtonTooltipInventory = 143,
    GameMenuBarButtonTooltipCrafting = 144,
    GameMenuBarButtonTooltipEquipment = 145,
    GameMenuBarButtonTooltipSkills = 146,
    GameMenuBarButtonTooltipQuests = 147,
    GameMenuBarButtonTooltipQuestsDisabled = 148,
    GameMessagesButtonSend = 149,
    GameMessagesContextMenuShowAsDialog = 150,
    GameMessagesContextMenuClear = 151,
    GameMessagesContextMenuCopy = 152,
    GameMessagesContextMenuExport = 153,
    GameMessagesFilter = 154,
    GameMessagesFiltersEdit = 155,
    GameMessagesNewNote = 156,
    GameMessagesTurn = 157,
    GameMessagesDedicatedServerBackup = 158,
    GameMessagesDedicatedServerBackupLimitReached = 159,
    GameTileInspectionCannotSeeTile = 160,
    MenuAboutTitle = 161,
    MenuAboutDescription = 162,
    MenuAboutGameDescription = 163,
    MenuAboutSectionTeam = 164,
    MenuAboutTeamMemberResponsibilities = 165,
    MenuAboutTeamMemberName = 166,
    MenuAboutTeamMemberNickname = 167,
    MenuAboutSectionContributors = 168,
    MenuAboutSectionSpecialThanks = 169,
    MenuAboutTextSpecialThanksTestorsAndDonators = 170,
    MenuAboutSectionLibraries = 171,
    MenuAboutSectionLibrariesDescription = 172,
    MenuBindings = 173,
    MenuBindingsDescription = 174,
    MenuBindingsTooltipBindConflicts = 175,
    MenuChangelogTitle = 176,
    MenuChangelogDescription = 177,
    MenuChangelogHeadingFailedLoad = 178,
    MenuChangelogHeadingChangeCount = 179,
    MenuCharacterCreationButtonRandomizeName = 180,
    MenuCharacterCreationButtonExportTooltip = 181,
    MenuCharacterCreationButtonImportTooltip = 182,
    MenuCharacterCreationButtonStartGame = 183,
    MenuCharacterCreationButtonJoinGame = 184,
    MenuCharacterCreationDescription = 185,
    MenuCharacterCreationHeadingHairColor = 186,
    MenuCharacterCreationHeadingHairStyle = 187,
    MenuCharacterCreationHeadingSkinTone = 188,
    MenuCharacterCreationLabelName = 189,
    MenuCharacterCreationTitle = 190,
    MenuCharacterCreationButtonRotateLeftTooltip = 191,
    MenuCharacterCreationButtonRotateRightTooltip = 192,
    MenuCharacterCreationButtonRandomizeTooltip = 193,
    MenuCharacterSelectionButtonNewCharacter = 194,
    MenuCharacterSelectionDescription = 195,
    MenuCharacterSelectionHeadingNoCharacters = 196,
    MenuCharacterSelectionTitle = 197,
    MenuCharacterSelectionLabelLastUse = 198,
    MenuCharacterSelectionLabelUseCount = 199,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 200,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 201,
    MenuMultiplayerDescription = 202,
    MenuMultiplayerTitle = 203,
    MenuMultiplayerButtonJoinById = 204,
    MenuMultiplayerServerLabelReputation = 205,
    MenuMultiplayerServerLabelDays = 206,
    MenuMultiplayerServerLabelIsland = 207,
    MenuMultiplayerButtonNewGame = 208,
    MenuMultiplayerButtonLoadGame = 209,
    MenuMultiplayerServerTooltipPVP = 210,
    MenuMultiplayerServerTooltipModsLabel = 211,
    MenuMultiplayerServerTooltipFriendsLabel = 212,
    MenuMultiplayerServerPlayers = 213,
    MenuMultiplayerServerLobbyType = 214,
    MenuMultiplayerServerRegion = 215,
    MenuMultiplayerServerHost = 216,
    MenuMultiplayerServerVersion = 217,
    MenuMultiplayerServerVersionUnknown = 218,
    MenuMultiplayerServerDedicated = 219,
    MenuMultiplayerHeadingPlayersOnline = 220,
    MenuMultiplayerServerModUnableToLoad = 221,
    MenuGameEndTitleDead = 222,
    MenuGameEndTitleWon = 223,
    MenuGameEndShareFacebook = 224,
    MenuGameEndShareTwitter = 225,
    MenuGameEndContinueAsGhost = 226,
    MenuGameEndReturnToIsland = 227,
    MenuGameEndExitToMenu = 228,
    MenuHelpTitle = 229,
    MenuHelpDescription = 230,
    MenuHelpLabelSearch = 231,
    MenuHighscoresTitle = 232,
    MenuHighscoresDescription = 233,
    MenuHighscoresDifficultyFilterAll = 234,
    MenuHighscoresHighscoreLabelDifficulty = 235,
    MenuHighscoresHighscoreLabelTurns = 236,
    MenuHighscoresHighscoreLabelScore = 237,
    MenuHighscoresHighscoreLabelPlace = 238,
    MenuHighscoresHighscoreLabelDate = 239,
    MenuHighscoresHighscoreLabelDeathBy = 240,
    MenuHighscoresHighscoreTitle = 241,
    MenuHighscoresCharacterNameUnknown = 242,
    MenuHighscoresHighscoreReplayWithSettings = 243,
    MenuLoadGameButtonNewGame = 244,
    MenuLoadGameButtonNewGameButtonImportTooltip = 245,
    MenuLoadGameDescription = 246,
    MenuLoadGameSaveButtonDeleteTooltip = 247,
    MenuLoadGameSaveButtonEditNameTooltip = 248,
    MenuLoadGameSaveButtonExportTooltip = 249,
    MenuLoadGameSaveTooltipLabelCreatedTime = 250,
    MenuLoadGameSaveTooltipLabelSaveTime = 251,
    MenuLoadGameSaveTooltipLabelGameMode = 252,
    MenuLoadGameSaveTooltipLabelScore = 253,
    MenuLoadGameSaveTooltipLabelSeed = 254,
    MenuLoadGameSaveTooltipLabelTurns = 255,
    MenuLoadGameSaveTooltipLabelMods = 256,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 257,
    MenuLoadGameSaveTooltipMod = 258,
    MenuLoadGameSaveTooltipNew = 259,
    MenuLoadGameSlotsRemaining = 260,
    MenuLoadGameSaveGame = 261,
    MenuLoadGameSaveGameDescription = 262,
    MenuLoadGameTitle = 263,
    MenuLoadGameLabelSelected = 264,
    MenuLoadGameButtonDeleteSelectedTooltip = 265,
    MenuMainButtonAbout = 266,
    MenuMainButtonChangelog = 267,
    MenuMainButtonContinueGame = 268,
    MenuMainButtonMultiplayer = 269,
    MenuMainButtonHighscores = 270,
    MenuMainButtonLoadGame = 271,
    MenuMainButtonMods = 272,
    MenuMainButtonNewGame = 273,
    MenuMainButtonNews = 274,
    MenuMainButtonOptions = 275,
    MenuMainButtonQuitGame = 276,
    MenuModsButtonModdingGuide = 277,
    MenuModsButtonOpenFolder = 278,
    MenuModsButtonOpenWorkshop = 279,
    MenuModsDescription = 280,
    MenuModsTitle = 281,
    MenuModsTooltipLabelAuthor = 282,
    MenuModsTooltipLabelTags = 283,
    MenuModsTooltipLabelDependencies = 284,
    MenuModsTooltipLabelProvides = 285,
    MenuModsTooltipLabelVersion = 286,
    MenuModsTooltipLabelDescription = 287,
    MenuModsTooltipLabelInstallDate = 288,
    MenuModsTooltipLabelCreatedDate = 289,
    MenuModsTooltipLabelLastUpdatedDate = 290,
    MenuModsTooltipPreventsMilestoneUnlocks = 291,
    MenuModsTooltipModOptions = 292,
    MenuModsTooltipPublishMod = 293,
    MenuModsTooltipModMoreInformation = 294,
    MenuModsTooltipUninstallMod = 295,
    MenuModsTooltipViewInSteamWorkshop = 296,
    MenuModsTooltipViewGitHub = 297,
    MenuModsTooltipOpenFolder = 298,
    MenuModsButtonEditInternalMods = 299,
    MenuModsSectionHeading = 300,
    MenuModsSubmenuEditInternalModsTitle = 301,
    MenuModsSubmenuEditInternalModsDescription = 302,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 303,
    MenuNewGameButtonNext = 304,
    MenuNewGameButtonStartServer = 305,
    MenuNewGameDescription = 306,
    MenuNewGameLabelEditName = 307,
    MenuNewGameLabelEditSeed = 308,
    MenuNewGamePlaceholderEditSeed = 309,
    MenuNewGameTitle = 310,
    MenuNewGameChoiceDifficulty = 311,
    MenuNewGameChoiceSingleplayer = 312,
    MenuNewGameChoiceSingleplayerDescription = 313,
    MenuNewGameChoiceMultiplayer = 314,
    MenuNewGameChoiceMultiplayerDescription = 315,
    MenuNewGameChoiceTurnModeManual = 316,
    MenuNewGameChoiceTurnModeManualDescription = 317,
    MenuNewGameChoiceTurnModeRealTime = 318,
    MenuNewGameChoiceTurnModeRealTimeDescription = 319,
    MenuNewGameChoiceTurnModeSimulated = 320,
    MenuNewGameChoiceTurnModeSimulatedDescription = 321,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 322,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 323,
    MenuNewGameChoiceDifficultyChallengeDaily = 324,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 325,
    MenuNewGameButtonMilestones = 326,
    MenuNewGameButtonMilestonesDescription = 327,
    MenuNewGameTabGameMode = 328,
    MenuNewGameTabMultiplayer = 329,
    MenuNewGameTabGameplayModifiers = 330,
    MenuNewGameHeadingGameMode = 331,
    MenuNewGameHeadingMultiplayer = 332,
    MenuNewGameHeadingGameplayModifiers = 333,
    MenuNewGameChoiceClientsInheritHostModifiers = 334,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 335,
    MenuNewGameChoiceCustomModifiers = 336,
    MenuNewGameChoiceCustomModifiersDescription = 337,
    MenuMilestoneModifiersTitle = 338,
    MenuMilestoneModifiersDescription = 339,
    MenuCustomGameOptionsTitle = 340,
    MenuCustomGameOptionsDescription = 341,
    MenuCustomGameOptionsRespawnOnDeath = 342,
    MenuCustomGameOptionsRespawnOnDeathDescription = 343,
    MenuCustomGameOptionsUseUnlockedRecipes = 344,
    MenuCustomGameOptionsStartingIslandBiome = 345,
    MenuCustomGameOptionsApplyTravelingEffects = 346,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 347,
    MenuCustomGameOptionsCreaturesPeaceful = 348,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 349,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 350,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 351,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 352,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 353,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 354,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 355,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 356,
    MenuCustomGameOptionsCreaturesAllowSpawning = 357,
    MenuCustomGameOptionsCreaturesSpawnLimit = 358,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 359,
    MenuCustomGameOptionsCreatureNone = 360,
    MenuCustomGameOptionsCreatureConfigure = 361,
    MenuCustomGameOptionsBenignityInitial = 362,
    MenuCustomGameOptionsBenignityMultiplier = 363,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 364,
    MenuCustomGameOptionsMalignityInitial = 365,
    MenuCustomGameOptionsMalignityMultiplier = 366,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 367,
    MenuCustomGameOptionsStatMultiplier = 368,
    MenuCustomGameOptionsStatMultiplierTooltip = 369,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 370,
    MenuCustomGameOptionsHeadingGeneral = 371,
    MenuCustomGameOptionsHeadingIsland = 372,
    MenuCustomGameOptionsHeadingTime = 373,
    MenuCustomGameOptionsHeadingStats = 374,
    MenuCustomGameOptionsHeadingReputation = 375,
    MenuCustomGameOptionsHeadingInventory = 376,
    MenuCustomGameOptionsHeadingCreatures = 377,
    MenuCustomGameOptionsHeadingSkills = 378,
    MenuCustomGameOptionsHeadingStatusEffects = 379,
    MenuCustomGameOptionsEternalNight = 380,
    MenuCustomGameOptionsEternalNightDescription = 381,
    MenuCustomGameOptionsEternalDay = 382,
    MenuCustomGameOptionsEternalDayDescription = 383,
    MenuCustomGameOptionsTimeFrozen = 384,
    MenuCustomGameOptionsTimeInitial = 385,
    MenuCustomGameOptionsTimeDayLength = 386,
    MenuCustomGameOptionsTimeDayLengthTooltip = 387,
    MenuCustomGameOptionsTimeDayPercent = 388,
    MenuCustomGameOptionsTimeDayPercentTooltip = 389,
    MenuCustomGameOptionsStatStarting = 390,
    MenuCustomGameOptionsStatMax = 391,
    MenuCustomGameOptionsStatStartingDisplay = 392,
    MenuCustomGameOptionsStatMaxDisplay = 393,
    MenuCustomGameOptionsStatNoChange = 394,
    MenuCustomGameOptionsStatBonus = 395,
    MenuCustomGameOptionsStatBonusDisplay = 396,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 397,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 398,
    MenuCustomGameOptionsStatusEffectStartWith = 399,
    MenuCustomGameOptionsStatusEffectUntreatable = 400,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 401,
    MenuCustomGameOptionsSkillInitialRandomCount = 402,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 403,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 404,
    MenuCustomGameOptionsSkillsGlobal = 405,
    MenuCustomGameOptionsSkillNone = 406,
    MenuCustomGameOptionsSkillConfigure = 407,
    MenuCustomGameOptionsSkillInitial = 408,
    MenuCustomGameOptionsSkillMultiplier = 409,
    MenuCustomGameOptionsSkillMultiplierTooltip = 410,
    MenuCustomGameOptionsRandomItems = 411,
    MenuCustomGameOptionsRandomItemsDescription = 412,
    MenuCustomGameOptionsExport = 413,
    MenuCustomGameOptionsImport = 414,
    MenuNewsDescription = 415,
    MenuNewsHeadingSocial = 416,
    MenuNewsTitle = 417,
    MenuNewsHeadingUnableToLoad = 418,
    MenuNewsButtonAllNews = 419,
    MenuOptionsButtonDitherFogOfWar = 420,
    MenuOptionsButtonDisableCustomCursor = 421,
    MenuOptionsButtonFullscreen = 422,
    MenuOptionsButtonDeveloperMode = 423,
    MenuOptionsButtonDeveloperModeContextMenu = 424,
    MenuOptionsButtonPixelFont = 425,
    MenuOptionsButtonReloadGame = 426,
    MenuOptionsButtonReloadStylesheets = 427,
    MenuOptionsButtonExportGlobalSaveData = 428,
    MenuOptionsButtonImportGlobalSaveData = 429,
    MenuOptionsButtonSaveDataClearAll = 430,
    MenuOptionsButtonSaveDataClearCharacters = 431,
    MenuOptionsButtonSaveDataClearHighscores = 432,
    MenuOptionsButtonSaveDataClearMilestones = 433,
    MenuOptionsButtonSaveDataClearOptions = 434,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 435,
    MenuOptionsButtonSaveDataClearSaves = 436,
    MenuOptionsButtonSkipSplash = 437,
    MenuOptionsButtonToggleDevTools = 438,
    MenuOptionsButtonTooltipsCreatures = 439,
    MenuOptionsButtonOpenLogsFolder = 440,
    MenuOptionsButtonTooltipsDoodads = 441,
    MenuOptionsButtonTooltipsItems = 442,
    MenuOptionsButtonTooltipsTerrain = 443,
    MenuOptionsButtonDropLocationFacing = 444,
    MenuOptionsButtonDropLocationFeet = 445,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 446,
    MenuOptionsDescription = 447,
    MenuOptionsHeadingAudio = 448,
    MenuOptionsHeadingDeveloper = 449,
    MenuOptionsHeadingGameplayOptions = 450,
    MenuOptionsHeadingGeneralOptions = 451,
    MenuOptionsHeadingControls = 452,
    MenuOptionsHeadingLanguage = 453,
    MenuOptionsHeadingPowerPreference = 454,
    MenuOptionsHeadingModOptions = 455,
    MenuOptionsHeadingOther = 456,
    MenuOptionsHeadingSaveData = 457,
    MenuOptionsHeadingTooltips = 458,
    MenuOptionsHeadingVideo = 459,
    MenuOptionsLabelInterfaceScale = 460,
    MenuOptionsLabelTooltipDelay = 461,
    MenuOptionsLabelDirectionTurnDelay = 462,
    MenuOptionsLabelMouseTurnDelay = 463,
    MenuOptionsTooltipTurnDelay = 464,
    MenuOptionsTooltipMouseTurnDelay = 465,
    MenuOptionsTooltipUiScaleClamped = 466,
    MenuOptionsTooltipControlsFilter = 467,
    MenuOptionsLabelVolumeEffects = 468,
    MenuOptionsLabelVolumeMusic = 469,
    MenuOptionsTabAudio = 470,
    MenuOptionsTabDeveloper = 471,
    MenuOptionsTabGameplay = 472,
    MenuOptionsTabGeneral = 473,
    MenuOptionsTabControls = 474,
    MenuOptionsTabMods = 475,
    MenuOptionsTabSaveData = 476,
    MenuOptionsTabVideo = 477,
    MenuOptionsTitle = 478,
    MenuOptionsTooltipMusicNextTrack = 479,
    MenuOptionsBindChoose = 480,
    MenuOptionsBindChooseAdd = 481,
    MenuOptionsBindLabelModifier = 482,
    MenuOptionsBindButtonResetTooltip = 483,
    MenuOptionsBindButtonDeleteTooltip = 484,
    MenuOptionsBindButtonAddTooltip = 485,
    MenuOptionsBindButtonAddMacroTooltip = 486,
    MenuOptionsButtonUnlockAllMilestones = 487,
    MenuOptionsButtonUnlockAllCraftingRecipes = 488,
    MenuOptionsButtonAlternatingDirectionMovement = 489,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 490,
    MenuOptionsButtonAlwaysShowMoreInformation = 491,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 492,
    MenuOptionsButtonAutoGatherHarvest = 493,
    MenuOptionsButtonAutoGatherHarvestTooltip = 494,
    MenuOptionsButtonDisableUIEffects = 495,
    MenuOptionsButtonDisableUIEffectsTooltip = 496,
    MenuOptionsButtonAutoAttack = 497,
    MenuOptionsButtonAutoAttackTooltip = 498,
    MenuOptionsButtonAutoPickup = 499,
    MenuOptionsButtonAutoPickupTooltip = 500,
    MenuOptionsButtonAutoPickupOnIdle = 501,
    MenuOptionsButtonAutoPickupOnIdleTooltip = 502,
    MenuOptionsButtonDropOnDismantle = 503,
    MenuOptionsButtonDropOnDismantleTooltip = 504,
    MenuOptionsButtonDropOnGatherHarvest = 505,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 506,
    MenuOptionsButtonKeepSortActive = 507,
    MenuOptionsButtonKeepSortActiveTooltip = 508,
    MenuOptionsButtonProtectCraftingItemContainers = 509,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 510,
    MenuOptionsButtonProtectCraftingItemsInInventory = 511,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 512,
    MenuOptionsButtonUseAdjacentContainers = 513,
    MenuOptionsButtonUseAdjacentContainersTooltip = 514,
    MenuOptionsButtonHideEquippedHeadgear = 515,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 516,
    MenuOptionsButtonAutoSave = 517,
    MenuOptionsButtonAutoSaveTooltip = 518,
    MenuOptionsRangeAutoSaveTimerLabel = 519,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 520,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 521,
    MenuOptionsButtonWarnOnDangerousActions = 522,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 523,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 524,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 525,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 526,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 527,
    MenuOptionsHeadingWarnWhenBreakingItems = 528,
    MenuOptionsButtonSaveDataClearBindings = 529,
    MenuOptionsTooltipDialogOpacity = 530,
    MenuOptionsLabelDialogOpacity = 531,
    MenuOptionsDeveloperLogSourceFilterHeading = 532,
    MenuOptionsDeveloperUIExperiments = 533,
    MenuOptionsDeveloperUIExperimentsDescription = 534,
    MenuOptionsAudioVolumeDisplay = 535,
    MenuOptionsAudioInputSoundOnTyping = 536,
    MenuOptionsMusicPlaylist = 537,
    MenuOptionsButtonConfigureBindings = 538,
    MenuPauseButtonContinue = 539,
    MenuPauseButtonOptions = 540,
    MenuPauseButtonModes = 541,
    MenuPauseButtonPaused = 542,
    MenuPauseButtonMultiplayer = 543,
    MenuPauseButtonTitleScreen = 544,
    MenuPauseButtonStopServer = 545,
    MenuPauseHeadingPaused = 546,
    MenuPauseParagraphPaused = 547,
    MenuPauseHeadingNotPaused = 548,
    MenuPauseParagraphNotPaused = 549,
    MenuPauseHeadingDedicatedServer = 550,
    MenuPauseParagraphDedicatedServer = 551,
    MenuModesTitle = 552,
    MenuModesDescription = 553,
    MenuMultiplayerOptionsTitle = 554,
    MenuMultiplayerOptionsDescription = 555,
    MenuMultiplayerOptionsOpenServer = 556,
    MenuMultiplayerOptionsOpenServerDescription = 557,
    MenuMultiplayerOptionsCopyGameCode = 558,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 559,
    MenuMultiplayerOptionsInviteSteamFriends = 560,
    MenuMultiplayerOptionsCheckConnectionHeading = 561,
    MenuMultiplayerOptionsCheckConnectionParagraph = 562,
    MenuMultiplayerOptionsCheckConnectionButton = 563,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 564,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 565,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 566,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 567,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 568,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 569,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 570,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 571,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 572,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 573,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 574,
    MenuJoinServerTitle = 575,
    MenuJoinServerDescription = 576,
    MenuJoinServerInputPlaceholder = 577,
    MenuJoinServerNext = 578,
    MenuJoinServerChooseModifiersTitle = 579,
    MenuJoinServerChooseModifiersDescription = 580,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 581,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 582,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 583,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 584,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 585,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 586,
    MenuSharedMultiplayerChoicePVP = 587,
    MenuSharedMultiplayerChoicePVPDescription = 588,
    MenuSharedMultiplayerDescription = 589,
    MenuSharedMultiplayerMessageOfTheDay = 590,
    MenuSharedMultiplayerMaxPlayers = 591,
    MenuSharedRealTimeTickSpeedTooltip = 592,
    MenuSharedRealTimeTickSpeedLabel = 593,
    MenuSharedButtonDefault = 594,
    MenuSharedValueMillseconds = 595,
    MenuSharedValuePercentage = 596,
    MenuSharedMilestonesNotUnlockable = 597,
    MenuSharedMilestonesNotUnlockableDescription = 598,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 599,
    MenuSharedButtonDisableAll = 600,
    MenuSharedButtonEnableAll = 601,
    MenuSharedMilestoneModifiersSelected = 602,
    MiscSortBy = 603,
    MiscSortDirection = 604,
    MiscFilter = 605,
    MiscPlayerNameDefault = 606,
    MiscPlayerNameServer = 607,
    MiscSaveNameDefault = 608,
    MiscSaveNameDailyChallenge = 609,
    MiscSaveNameChallenge = 610,
    MiscSaveVersionUnknown = 611,
    MiscVersion = 612,
    MiscTime = 613,
    MiscTimeMeridiem = 614,
    MiscBindableOr = 615,
    MiscBindableNoBindings = 616,
    DifficultyOptionsPeaceful = 617,
    DifficultyOptionsAberrantSpawnsDisabled = 618,
    DifficultyOptionsAberrantSpawnsOnly = 619,
    DifficultyOptionsCreatureSpawningDisabled = 620,
    DifficultyOptionsCreatureSpawnsDefault = 621,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 622,
    DifficultyOptionsCreatureSpawnsNoAberrants = 623,
    DifficultyOptionsSpawnLimit = 624,
    DifficultyOptionsRespawn = 625,
    DifficultyOptionsEternalNight = 626,
    DifficultyOptionsEternalDay = 627,
    DifficultyOptionsTimeInitial = 628,
    DifficultyOptionsTimeFrozen = 629,
    DifficultyOptionsTimeDayLength = 630,
    DifficultyOptionsTimeDayPercent = 631,
    DifficultyOptionsNoItems = 632,
    DifficultyOptionsBenignityInitial = 633,
    DifficultyOptionsBenignityMultiplier = 634,
    DifficultyOptionsMalignityInitial = 635,
    DifficultyOptionsMalignityMultiplier = 636,
    DifficultyOptionsWeightBonus = 637,
    DifficultyOptionsStatInitial = 638,
    DifficultyOptionsStatMax = 639,
    DifficultyOptionsStatMultiplier = 640,
    DifficultyOptionsStatusEffectStartWith = 641,
    DifficultyOptionsStatusEffectUntreatable = 642,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 643,
    DifficultyOptionsNoRandomSkills = 644,
    DifficultyOptionsSkillStartingCount = 645,
    DifficultyOptionsSkillGainMultiplier = 646,
    DifficultyOptionsSkillInitial = 647,
    DifficultyOptionsStatusEffectPermanent = 648,
    DifficultyOptionsStatusEffectRateMultiplier = 649,
    DifficultyOptionsStatusEffectMultiplier = 650,
    EquipmentBack = 651,
    EquipmentBelt = 652,
    EquipmentChest = 653,
    EquipmentFeet = 654,
    EquipmentHands = 655,
    EquipmentHead = 656,
    EquipmentLeftHand = 657,
    EquipmentLeftHandOption = 658,
    EquipmentLegs = 659,
    EquipmentNeck = 660,
    EquipmentRightHand = 661,
    EquipmentRightHandOption = 662,
    EquipmentUse = 663,
    HudFilter = 664,
    QuickSlot1 = 665,
    QuickSlot2 = 666,
    QuickSlot3 = 667,
    QuickSlot4 = 668,
    QuickSlot5 = 669,
    QuickSlot6 = 670,
    QuickSlot7 = 671,
    QuickSlot8 = 672,
    QuickSlot9 = 673,
    TabCrafting = 674,
    TabDismantle = 675,
    Version = 676,
    WindowTitleContainer = 677,
    WindowTitleCrafting = 678,
    WindowTitleEquipment = 679,
    WindowTitleInventory = 680
}
export default UiTranslation;
