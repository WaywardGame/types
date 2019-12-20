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
/**
 * Ui messages that are on elements that don't change
 */
declare enum UiTranslation {
    GameActionGather = 0,
    GameDialogCraftingName = 1,
    GameDialogMessagesName = 2,
    GameDialogMessagesOptionTimestamp = 3,
    GameDialogMessagesOptionShowSendButton = 4,
    GameDialogMessagesOptionShowOptionsButton = 5,
    GameDialogMessagesOptionMaxMessages = 6,
    GameDialogMessagesEditFiltersName = 7,
    GameDialogMessagesEditFiltersLabelName = 8,
    GameDialogMessagesEditFiltersButtonDelete = 9,
    GameDialogMessagesEditFiltersButtonSave = 10,
    GameDialogMessagesEditFiltersButtonReset = 11,
    GameDialogMessagesEditFiltersButtonNew = 12,
    GameDialogNotesName = 13,
    GameDialogNotesNoteTime = 14,
    GameDialogNotesNoteNumber = 15,
    GameDialogNotesNoteLockedTitle = 16,
    GameDialogNotesNoteLockedDescription = 17,
    GameDialogNotesLinkId = 18,
    GameDialogNotesLinkLearnMore = 19,
    GameDialogNotesSettingsPinUnreadNotesAutomatically = 20,
    GameDialogQuickSettingsName = 21,
    GameDialogMilestonesName = 22,
    GameDialogMilestonesInvisibleMilestone = 23,
    GameDialogMilestonesProgress = 24,
    GameDialogMilestonesProgressHidden = 25,
    GameDialogMilestonesMilestone = 26,
    GameDialogMilestonesTooltipHidden = 27,
    GameDialogMilestonesTooltipInvisible = 28,
    GameDialogMilestonesSortName = 29,
    GameDialogMilestonesSortProgress = 30,
    GameDialogSkillsName = 31,
    GameDialogSkillsSkill = 32,
    GameDialogSkillsTooltipReputationImpact = 33,
    GameDialogSkillsTooltipCanIncrease = 34,
    GameDialogSkillsSortName = 35,
    GameDialogSkillsSortLevel = 36,
    GameDialogBookName = 37,
    GameDialogMapName = 38,
    GameDialogMapTooltipDecode = 39,
    GameDialogQuestsName = 40,
    GameDialogQuestsLink = 41,
    GameDialogQuestsChildQuests = 42,
    GameDialogQuestsRequirements = 43,
    GameDialogQuestsActiveQuests = 44,
    GameDialogQuestsCompletedQuests = 45,
    GameDialogQuestsCompleteQuest = 46,
    GameTooltipShowMoreInformation = 47,
    GameTooltipLegendaryMaxWeightLabel = 48,
    GameStatsPercentage = 49,
    GameStatsStatAttack = 50,
    GameStatsStatGeneric = 51,
    GameStatsStatGenericWithMax = 52,
    GameStatsStatbar = 53,
    GameStatsStatHealthTooltip = 54,
    GameStatsStatStaminaTooltip = 55,
    GameStatsStatHungerTooltip = 56,
    GameStatsStatThirstTooltip = 57,
    GameStatsStatHealthStatusWarning = 58,
    GameStatsStatStaminaStatusWarning = 59,
    GameStatsStatHungerStatusWarning = 60,
    GameStatsStatThirstStatusWarning = 61,
    GameStatsStatWeightStatusWarning = 62,
    GameStatsStatStaminaStatusBad = 63,
    GameStatsStatHungerStatusBad = 64,
    GameStatsStatThirstStatusBad = 65,
    GameStatsStatWeightStatusBad = 66,
    GameStatsStatReputationTooltipDifficulty = 67,
    GameStatsStatReputationTooltipDifficultyEasy = 68,
    GameStatsStatReputationTooltipDifficultyHard = 69,
    GameStatsStatReputationTooltipDifficultyInsane = 70,
    GameStatsStatReputationTooltipDifficultyMedium = 71,
    GameStatsStatReputationTooltipDifficultySimple = 72,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 73,
    GameStatsStatReputationTooltipDifficultyVeryHard = 74,
    GameStatsStatReputationTooltipBenignity = 75,
    GameStatsStatReputationTooltipMalignity = 76,
    GameStatsStatReputationTooltipScore = 77,
    GameStatsStatReputationTooltipTurn = 78,
    GameStatsStatReputationTooltipTicks = 79,
    GameStatsStatWeightTooltip = 80,
    GameStatsStatAttackTooltipTactics = 81,
    GameStatsStatAttackTooltipLeftHand = 82,
    GameStatsStatAttackTooltipRightHand = 83,
    GameStatsStatDefenseTooltipBase = 84,
    GameStatsStatDefenseTooltipBlunt = 85,
    GameStatsStatDefenseTooltipParrying = 86,
    GameStatsStatDefenseTooltipFire = 87,
    GameStatsStatDefenseTooltipPiercing = 88,
    GameStatsStatDefenseTooltipSlashing = 89,
    GameItemBarterCredit = 90,
    GameItemBarterCreditTrade = 91,
    GameMenuBarButtonTooltipBindable = 92,
    GameMenuBarButtonTooltipMenu = 93,
    GameMenuBarButtonTooltipSave = 94,
    GameMenuBarButtonTooltipNotes = 95,
    GameMenuBarButtonTooltipMilestones = 96,
    GameMenuBarButtonTooltipMilestonesDisabled = 97,
    GameMenuBarButtonTooltipMessages = 98,
    GameMenuBarButtonTooltipHelp = 99,
    GameMenuBarButtonTooltipQuickSettings = 100,
    GameMenuBarButtonTooltipActions = 101,
    GameMenuBarButtonTooltipInventory = 102,
    GameMenuBarButtonTooltipCrafting = 103,
    GameMenuBarButtonTooltipEquipment = 104,
    GameMenuBarButtonTooltipSkills = 105,
    GameMenuBarButtonTooltipQuests = 106,
    GameMenuBarButtonTooltipQuestsDisabled = 107,
    GameMessagesButtonSend = 108,
    GameMessagesContextMenuShowAsDialog = 109,
    GameMessagesContextMenuClear = 110,
    GameMessagesContextMenuCopy = 111,
    GameMessagesContextMenuExport = 112,
    GameMessagesFilter = 113,
    GameMessagesFiltersEdit = 114,
    GameMessagesNewNote = 115,
    GameMessagesTurn = 116,
    GameMessagesDedicatedServerBackup = 117,
    GameMessagesDedicatedServerBackupLimitReached = 118,
    MenuAboutTitle = 119,
    MenuAboutDescription = 120,
    MenuAboutGameDescription = 121,
    MenuAboutSectionTeam = 122,
    MenuAboutTeamMemberResponsibilities = 123,
    MenuAboutTeamMemberName = 124,
    MenuAboutTeamMemberNickname = 125,
    MenuAboutSectionContributors = 126,
    MenuAboutSectionSpecialThanks = 127,
    MenuAboutTextSpecialThanksTestorsAndDonators = 128,
    MenuAboutSectionLibraries = 129,
    MenuAboutSectionLibrariesDescription = 130,
    MenuBindings = 131,
    MenuBindingsDescription = 132,
    MenuChangelogTitle = 133,
    MenuChangelogDescription = 134,
    MenuChangelogHeadingFailedLoad = 135,
    MenuChangelogHeadingChangeCount = 136,
    MenuCharacterCreationButtonRandomizeName = 137,
    MenuCharacterCreationButtonExportTooltip = 138,
    MenuCharacterCreationButtonImportTooltip = 139,
    MenuCharacterCreationButtonStartGame = 140,
    MenuCharacterCreationButtonJoinGame = 141,
    MenuCharacterCreationDescription = 142,
    MenuCharacterCreationHeadingHairColor = 143,
    MenuCharacterCreationHeadingHairStyle = 144,
    MenuCharacterCreationHeadingSkinTone = 145,
    MenuCharacterCreationLabelName = 146,
    MenuCharacterCreationTitle = 147,
    MenuCharacterCreationButtonRotateLeftTooltip = 148,
    MenuCharacterCreationButtonRotateRightTooltip = 149,
    MenuCharacterCreationButtonRandomizeTooltip = 150,
    MenuCharacterSelectionButtonNewCharacter = 151,
    MenuCharacterSelectionDescription = 152,
    MenuCharacterSelectionHeadingNoCharacters = 153,
    MenuCharacterSelectionTitle = 154,
    MenuCharacterSelectionLabelLastUse = 155,
    MenuCharacterSelectionLabelUseCount = 156,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 157,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 158,
    MenuMultiplayerDescription = 159,
    MenuMultiplayerTitle = 160,
    MenuMultiplayerButtonJoinById = 161,
    MenuMultiplayerServerLabelReputation = 162,
    MenuMultiplayerServerLabelDays = 163,
    MenuMultiplayerButtonNewGame = 164,
    MenuMultiplayerButtonLoadGame = 165,
    MenuMultiplayerServerTooltipPVP = 166,
    MenuMultiplayerServerTooltipModsLabel = 167,
    MenuMultiplayerServerTooltipFriendsLabel = 168,
    MenuMultiplayerServerPlayers = 169,
    MenuMultiplayerServerLobbyType = 170,
    MenuMultiplayerServerRegion = 171,
    MenuMultiplayerServerHost = 172,
    MenuMultiplayerServerVersion = 173,
    MenuMultiplayerServerVersionUnknown = 174,
    MenuMultiplayerServerDedicated = 175,
    MenuMultiplayerHeadingPlayersOnline = 176,
    MenuMultiplayerServerModUnableToLoad = 177,
    MenuGameEndTitleDead = 178,
    MenuGameEndTitleWon = 179,
    MenuGameEndShareFacebook = 180,
    MenuGameEndShareTwitter = 181,
    MenuGameEndContinueAsGhost = 182,
    MenuGameEndReturnToIsland = 183,
    MenuGameEndExitToMenu = 184,
    MenuHelpTitle = 185,
    MenuHelpDescription = 186,
    MenuHelpLabelSearch = 187,
    MenuHighscoresTitle = 188,
    MenuHighscoresDescription = 189,
    MenuHighscoresDifficultyFilterAll = 190,
    MenuHighscoresHighscoreLabelDifficulty = 191,
    MenuHighscoresHighscoreLabelTurns = 192,
    MenuHighscoresHighscoreLabelScore = 193,
    MenuHighscoresHighscoreLabelPlace = 194,
    MenuHighscoresHighscoreLabelDate = 195,
    MenuHighscoresHighscoreLabelDeathBy = 196,
    MenuHighscoresHighscoreTitle = 197,
    MenuHighscoresCharacterNameUnknown = 198,
    MenuHighscoresHighscoreReplayWithSettings = 199,
    MenuLoadGameButtonNewGame = 200,
    MenuLoadGameButtonNewGameButtonImportTooltip = 201,
    MenuLoadGameDescription = 202,
    MenuLoadGameSaveButtonDeleteTooltip = 203,
    MenuLoadGameSaveButtonEditNameTooltip = 204,
    MenuLoadGameSaveButtonExportTooltip = 205,
    MenuLoadGameSaveTooltipLabelCreatedTime = 206,
    MenuLoadGameSaveTooltipLabelSaveTime = 207,
    MenuLoadGameSaveTooltipLabelGameMode = 208,
    MenuLoadGameSaveTooltipLabelScore = 209,
    MenuLoadGameSaveTooltipLabelSeed = 210,
    MenuLoadGameSaveTooltipLabelTurns = 211,
    MenuLoadGameSaveTooltipLabelMods = 212,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 213,
    MenuLoadGameSaveTooltipMod = 214,
    MenuLoadGameSlotsRemaining = 215,
    MenuLoadGameSaveGame = 216,
    MenuLoadGameSaveGameDescription = 217,
    MenuLoadGameTitle = 218,
    MenuMainButtonAbout = 219,
    MenuMainButtonChangelog = 220,
    MenuMainButtonContinueGame = 221,
    MenuMainButtonMultiplayer = 222,
    MenuMainButtonHighscores = 223,
    MenuMainButtonLoadGame = 224,
    MenuMainButtonMods = 225,
    MenuMainButtonNewGame = 226,
    MenuMainButtonNews = 227,
    MenuMainButtonOptions = 228,
    MenuMainButtonQuitGame = 229,
    MenuModsButtonModdingGuide = 230,
    MenuModsButtonOpenFolder = 231,
    MenuModsButtonOpenWorkshop = 232,
    MenuModsDescription = 233,
    MenuModsTitle = 234,
    MenuModsTooltipLabelAuthor = 235,
    MenuModsTooltipLabelTags = 236,
    MenuModsTooltipLabelDependencies = 237,
    MenuModsTooltipLabelProvides = 238,
    MenuModsTooltipLabelVersion = 239,
    MenuModsTooltipLabelDescription = 240,
    MenuModsTooltipLabelInstallDate = 241,
    MenuModsTooltipLabelCreatedDate = 242,
    MenuModsTooltipLabelLastUpdatedDate = 243,
    MenuModsTooltipMultiplayerCompatibility = 244,
    MenuModsTooltipPreventsMilestoneUnlocks = 245,
    MenuModsTooltipModOptions = 246,
    MenuModsTooltipPublishMod = 247,
    MenuModsTooltipUninstallMod = 248,
    MenuModsTooltipViewInSteamWorkshop = 249,
    MenuModsButtonEditInternalMods = 250,
    MenuModsSectionHeading = 251,
    MenuModsSubmenuEditInternalModsTitle = 252,
    MenuModsSubmenuEditInternalModsDescription = 253,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 254,
    MenuNewGameButtonNext = 255,
    MenuNewGameButtonStartServer = 256,
    MenuNewGameDescription = 257,
    MenuNewGameLabelEditName = 258,
    MenuNewGameLabelEditSeed = 259,
    MenuNewGamePlaceholderEditSeed = 260,
    MenuNewGameTitle = 261,
    MenuNewGameChoiceDifficulty = 262,
    MenuNewGameChoiceSingleplayer = 263,
    MenuNewGameChoiceSingleplayerDescription = 264,
    MenuNewGameChoiceMultiplayer = 265,
    MenuNewGameChoiceMultiplayerDescription = 266,
    MenuNewGameChoiceTurnModeManual = 267,
    MenuNewGameChoiceTurnModeManualDescription = 268,
    MenuNewGameChoiceTurnModeRealTime = 269,
    MenuNewGameChoiceTurnModeRealTimeDescription = 270,
    MenuNewGameChoiceTurnModeSimulated = 271,
    MenuNewGameChoiceTurnModeSimulatedDescription = 272,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 273,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 274,
    MenuNewGameChoiceDifficultyChallengeDaily = 275,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 276,
    MenuNewGameButtonMilestones = 277,
    MenuNewGameButtonMilestonesDescription = 278,
    MenuNewGameTabGameMode = 279,
    MenuNewGameTabMultiplayer = 280,
    MenuNewGameTabGameplayModifiers = 281,
    MenuNewGameHeadingGameMode = 282,
    MenuNewGameHeadingMultiplayer = 283,
    MenuNewGameHeadingGameplayModifiers = 284,
    MenuNewGameChoiceClientsInheritHostModifiers = 285,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 286,
    MenuNewGameChoiceCustomModifiers = 287,
    MenuNewGameChoiceCustomModifiersDescription = 288,
    MenuMilestoneModifiersTitle = 289,
    MenuMilestoneModifiersDescription = 290,
    MenuCustomGameOptionsTitle = 291,
    MenuCustomGameOptionsDescription = 292,
    MenuCustomGameOptionsRespawnOnDeath = 293,
    MenuCustomGameOptionsRespawnOnDeathDescription = 294,
    MenuCustomGameOptionsUseUnlockedRecipes = 295,
    MenuCustomGameOptionsCreaturesPeaceful = 296,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 297,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 298,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 299,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 300,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 301,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 302,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 303,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 304,
    MenuCustomGameOptionsCreaturesAllowSpawning = 305,
    MenuCustomGameOptionsCreatureNone = 306,
    MenuCustomGameOptionsCreatureConfigure = 307,
    MenuCustomGameOptionsBenignityInitial = 308,
    MenuCustomGameOptionsBenignityMultiplier = 309,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 310,
    MenuCustomGameOptionsMalignityInitial = 311,
    MenuCustomGameOptionsMalignityMultiplier = 312,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 313,
    MenuCustomGameOptionsStatMultiplier = 314,
    MenuCustomGameOptionsStatMultiplierTooltip = 315,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 316,
    MenuCustomGameOptionsHeadingGeneral = 317,
    MenuCustomGameOptionsHeadingTime = 318,
    MenuCustomGameOptionsHeadingStats = 319,
    MenuCustomGameOptionsHeadingReputation = 320,
    MenuCustomGameOptionsHeadingInventory = 321,
    MenuCustomGameOptionsHeadingCreatures = 322,
    MenuCustomGameOptionsHeadingSkills = 323,
    MenuCustomGameOptionsHeadingStatusEffects = 324,
    MenuCustomGameOptionsEternalNight = 325,
    MenuCustomGameOptionsEternalNightDescription = 326,
    MenuCustomGameOptionsEternalDay = 327,
    MenuCustomGameOptionsEternalDayDescription = 328,
    MenuCustomGameOptionsTimeFrozen = 329,
    MenuCustomGameOptionsTimeInitial = 330,
    MenuCustomGameOptionsTimeDayLength = 331,
    MenuCustomGameOptionsTimeDayLengthTooltip = 332,
    MenuCustomGameOptionsTimeDayPercent = 333,
    MenuCustomGameOptionsTimeDayPercentTooltip = 334,
    MenuCustomGameOptionsStatStarting = 335,
    MenuCustomGameOptionsStatMax = 336,
    MenuCustomGameOptionsStatStartingDisplay = 337,
    MenuCustomGameOptionsStatMaxDisplay = 338,
    MenuCustomGameOptionsStatNoChange = 339,
    MenuCustomGameOptionsStatBonus = 340,
    MenuCustomGameOptionsStatBonusDisplay = 341,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 342,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 343,
    MenuCustomGameOptionsStatusEffectStartWith = 344,
    MenuCustomGameOptionsStatusEffectUntreatable = 345,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 346,
    MenuCustomGameOptionsSkillInitialRandomCount = 347,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 348,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 349,
    MenuCustomGameOptionsSkillsGlobal = 350,
    MenuCustomGameOptionsSkillNone = 351,
    MenuCustomGameOptionsSkillConfigure = 352,
    MenuCustomGameOptionsSkillInitial = 353,
    MenuCustomGameOptionsSkillMultiplier = 354,
    MenuCustomGameOptionsSkillMultiplierTooltip = 355,
    MenuCustomGameOptionsRandomItems = 356,
    MenuCustomGameOptionsRandomItemsDescription = 357,
    MenuCustomGameOptionsExport = 358,
    MenuCustomGameOptionsImport = 359,
    MenuNewsButtonDiscord = 360,
    MenuNewsButtonFacebook = 361,
    MenuNewsButtonReddit = 362,
    MenuNewsButtonTwitter = 363,
    MenuNewsDescription = 364,
    MenuNewsHeadingSocial = 365,
    MenuNewsTitle = 366,
    MenuNewsHeadingUnableToLoad = 367,
    MenuNewsButtonAllNews = 368,
    MenuOptionsButtonDitherFogOfWar = 369,
    MenuOptionsButtonDisableCustomCursor = 370,
    MenuOptionsButtonFullscreen = 371,
    MenuOptionsButtonDeveloperMode = 372,
    MenuOptionsButtonDeveloperModeContextMenu = 373,
    MenuOptionsButtonPixelFont = 374,
    MenuOptionsButtonReloadGame = 375,
    MenuOptionsButtonExportGlobalSaveData = 376,
    MenuOptionsButtonImportGlobalSaveData = 377,
    MenuOptionsButtonSaveDataClearAll = 378,
    MenuOptionsButtonSaveDataClearCharacters = 379,
    MenuOptionsButtonSaveDataClearHighscores = 380,
    MenuOptionsButtonSaveDataClearMilestones = 381,
    MenuOptionsButtonSaveDataClearOptions = 382,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 383,
    MenuOptionsButtonSaveDataClearSaves = 384,
    MenuOptionsButtonSkipSplash = 385,
    MenuOptionsButtonToggleDevTools = 386,
    MenuOptionsButtonTooltipsCreatures = 387,
    MenuOptionsButtonOpenLogsFolder = 388,
    MenuOptionsButtonTooltipsDoodads = 389,
    MenuOptionsButtonTooltipsItems = 390,
    MenuOptionsButtonTooltipsTerrain = 391,
    MenuOptionsButtonDropLocationFacing = 392,
    MenuOptionsButtonDropLocationFeet = 393,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 394,
    MenuOptionsDescription = 395,
    MenuOptionsHeadingAudio = 396,
    MenuOptionsHeadingDeveloper = 397,
    MenuOptionsHeadingGameplayOptions = 398,
    MenuOptionsHeadingGeneralOptions = 399,
    MenuOptionsHeadingControls = 400,
    MenuOptionsHeadingLanguage = 401,
    MenuOptionsHeadingPowerPreference = 402,
    MenuOptionsHeadingModOptions = 403,
    MenuOptionsHeadingOther = 404,
    MenuOptionsHeadingSaveData = 405,
    MenuOptionsHeadingTooltips = 406,
    MenuOptionsHeadingVideo = 407,
    MenuOptionsLabelInterfaceScale = 408,
    MenuOptionsLabelTooltipDelay = 409,
    MenuOptionsLabelDirectionTurnDelay = 410,
    MenuOptionsLabelMouseTurnDelay = 411,
    MenuOptionsTooltipTurnDelay = 412,
    MenuOptionsTooltipMouseTurnDelay = 413,
    MenuOptionsTooltipUiScaleClamped = 414,
    MenuOptionsTooltipControlsFilter = 415,
    MenuOptionsLabelVolumeEffects = 416,
    MenuOptionsLabelVolumeMusic = 417,
    MenuOptionsTabAudio = 418,
    MenuOptionsTabDeveloper = 419,
    MenuOptionsTabGameplay = 420,
    MenuOptionsTabGeneral = 421,
    MenuOptionsTabControls = 422,
    MenuOptionsTabMods = 423,
    MenuOptionsTabSaveData = 424,
    MenuOptionsTabVideo = 425,
    MenuOptionsTitle = 426,
    MenuOptionsTooltipMusicNextTrack = 427,
    MenuOptionsBindChoose = 428,
    MenuOptionsBindChooseAdd = 429,
    MenuOptionsBindLabelModifier = 430,
    MenuOptionsBindButtonResetTooltip = 431,
    MenuOptionsBindButtonDeleteTooltip = 432,
    MenuOptionsBindButtonAddTooltip = 433,
    MenuOptionsButtonUnlockAllMilestones = 434,
    MenuOptionsButtonUnlockAllCraftingRecipes = 435,
    MenuOptionsButtonAlternatingDirectionMovement = 436,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 437,
    MenuOptionsButtonAlwaysShowMoreInformation = 438,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 439,
    MenuOptionsButtonAutoGatherHarvest = 440,
    MenuOptionsButtonAutoGatherHarvestTooltip = 441,
    MenuOptionsButtonDisableUIEffects = 442,
    MenuOptionsButtonDisableUIEffectsTooltip = 443,
    MenuOptionsButtonAutoAttack = 444,
    MenuOptionsButtonAutoAttackTooltip = 445,
    MenuOptionsButtonAutoPickup = 446,
    MenuOptionsButtonAutoPickupTooltip = 447,
    MenuOptionsButtonDropOnGatherHarvest = 448,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 449,
    MenuOptionsButtonKeepSortActive = 450,
    MenuOptionsButtonKeepSortActiveTooltip = 451,
    MenuOptionsButtonProtectCraftingItemsInInventory = 452,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 453,
    MenuOptionsButtonProtectCraftingItemContainers = 454,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 455,
    MenuOptionsButtonUseAdjacentContainers = 456,
    MenuOptionsButtonUseAdjacentContainersTooltip = 457,
    MenuOptionsButtonHideEquippedHeadgear = 458,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 459,
    MenuOptionsButtonEnableAutoSave = 460,
    MenuOptionsButtonEnableAutoSaveTooltip = 461,
    MenuOptionsButtonWarnOnDangerousActions = 462,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 463,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 464,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 465,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 466,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 467,
    MenuOptionsHeadingWarnWhenBreakingItems = 468,
    MenuOptionsButtonSaveDataClearBindings = 469,
    MenuOptionsTooltipDialogOpacity = 470,
    MenuOptionsLabelDialogOpacity = 471,
    MenuOptionsDeveloperLogSourceFilterHeading = 472,
    MenuOptionsAudioVolumeDisplay = 473,
    MenuOptionsMusicPlaylist = 474,
    MenuOptionsButtonConfigureBindings = 475,
    MenuPauseButtonContinue = 476,
    MenuPauseButtonOptions = 477,
    MenuPauseButtonModes = 478,
    MenuPauseButtonPaused = 479,
    MenuPauseButtonMultiplayer = 480,
    MenuPauseButtonTitleScreen = 481,
    MenuPauseButtonStopServer = 482,
    MenuPauseHeadingPaused = 483,
    MenuPauseParagraphPaused = 484,
    MenuPauseHeadingNotPaused = 485,
    MenuPauseParagraphNotPaused = 486,
    MenuPauseHeadingDedicatedServer = 487,
    MenuPauseParagraphDedicatedServer = 488,
    MenuModesTitle = 489,
    MenuModesDescription = 490,
    MenuMultiplayerOptionsTitle = 491,
    MenuMultiplayerOptionsDescription = 492,
    MenuMultiplayerOptionsOpenServer = 493,
    MenuMultiplayerOptionsOpenServerDescription = 494,
    MenuMultiplayerOptionsCopyGameCode = 495,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 496,
    MenuMultiplayerOptionsInviteSteamFriends = 497,
    MenuMultiplayerOptionsCheckConnectionHeading = 498,
    MenuMultiplayerOptionsCheckConnectionParagraph = 499,
    MenuMultiplayerOptionsCheckConnectionButton = 500,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 501,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 502,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 503,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 504,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 505,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 506,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 507,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 508,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 509,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 510,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 511,
    MenuJoinServerTitle = 512,
    MenuJoinServerDescription = 513,
    MenuJoinServerInputPlaceholder = 514,
    MenuJoinServerNext = 515,
    MenuJoinServerChooseModifiersTitle = 516,
    MenuJoinServerChooseModifiersDescription = 517,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 518,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 519,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 520,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 521,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 522,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 523,
    MenuSharedMultiplayerChoicePVP = 524,
    MenuSharedMultiplayerChoicePVPDescription = 525,
    MenuSharedMultiplayerMaxPlayers = 526,
    MenuSharedRealTimeTickSpeedTooltip = 527,
    MenuSharedRealTimeTickSpeedLabel = 528,
    MenuSharedButtonDefault = 529,
    MenuSharedValueMillseconds = 530,
    MenuSharedValuePercentage = 531,
    MenuSharedMilestonesNotUnlockable = 532,
    MenuSharedMilestonesNotUnlockableDescription = 533,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 534,
    MenuSharedButtonDisableAll = 535,
    MenuSharedButtonEnableAll = 536,
    MenuSharedMilestoneModifiersSelected = 537,
    MiscSortBy = 538,
    MiscSortDirection = 539,
    MiscFilter = 540,
    MiscPlayerNameDefault = 541,
    MiscPlayerNameServer = 542,
    MiscSaveNameDefault = 543,
    MiscSaveNameDailyChallenge = 544,
    MiscSaveNameChallenge = 545,
    MiscSaveVersionUnknown = 546,
    MiscVersion = 547,
    MiscTime = 548,
    MiscTimeMeridiem = 549,
    MiscBindableOr = 550,
    MiscBindableNoBindings = 551,
    DifficultyOptionsPeaceful = 552,
    DifficultyOptionsAberrantSpawnsDisabled = 553,
    DifficultyOptionsAberrantSpawnsOnly = 554,
    DifficultyOptionsCreatureSpawningDisabled = 555,
    DifficultyOptionsCreatureSpawnsDefault = 556,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 557,
    DifficultyOptionsCreatureSpawnsNoAberrants = 558,
    DifficultyOptionsRespawn = 559,
    DifficultyOptionsEternalNight = 560,
    DifficultyOptionsEternalDay = 561,
    DifficultyOptionsTimeInitial = 562,
    DifficultyOptionsTimeFrozen = 563,
    DifficultyOptionsTimeDayLength = 564,
    DifficultyOptionsTimeDayPercent = 565,
    DifficultyOptionsNoItems = 566,
    DifficultyOptionsBenignityInitial = 567,
    DifficultyOptionsBenignityMultiplier = 568,
    DifficultyOptionsMalignityInitial = 569,
    DifficultyOptionsMalignityMultiplier = 570,
    DifficultyOptionsWeightBonus = 571,
    DifficultyOptionsStatInitial = 572,
    DifficultyOptionsStatMax = 573,
    DifficultyOptionsStatMultiplier = 574,
    DifficultyOptionsStatusEffectStartWith = 575,
    DifficultyOptionsStatusEffectUntreatable = 576,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 577,
    DifficultyOptionsNoRandomSkills = 578,
    DifficultyOptionsSkillStartingCount = 579,
    DifficultyOptionsSkillGainMultiplier = 580,
    DifficultyOptionsSkillInitial = 581,
    DifficultyOptionsStatusEffectPermanent = 582,
    DifficultyOptionsStatusEffectRateMultiplier = 583,
    DifficultyOptionsStatusEffectMultiplier = 584,
    EquipmentBack = 585,
    EquipmentBelt = 586,
    EquipmentChest = 587,
    EquipmentFeet = 588,
    EquipmentHands = 589,
    EquipmentHead = 590,
    EquipmentLeftHand = 591,
    EquipmentLeftHandOption = 592,
    EquipmentLegs = 593,
    EquipmentNeck = 594,
    EquipmentRightHand = 595,
    EquipmentRightHandOption = 596,
    EquipmentUse = 597,
    HudFilter = 598,
    QuickSlot1 = 599,
    QuickSlot2 = 600,
    QuickSlot3 = 601,
    QuickSlot4 = 602,
    QuickSlot5 = 603,
    QuickSlot6 = 604,
    QuickSlot7 = 605,
    QuickSlot8 = 606,
    QuickSlot9 = 607,
    TabCrafting = 608,
    TabDismantle = 609,
    Version = 610,
    WindowTitleContainer = 611,
    WindowTitleCrafting = 612,
    WindowTitleEquipment = 613,
    WindowTitleInventory = 614
}
export default UiTranslation;
