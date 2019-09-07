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
    GameStatsStatReputationTooltipDifficulty = 58,
    GameStatsStatReputationTooltipDifficultyEasy = 59,
    GameStatsStatReputationTooltipDifficultyHard = 60,
    GameStatsStatReputationTooltipDifficultyInsane = 61,
    GameStatsStatReputationTooltipDifficultyMedium = 62,
    GameStatsStatReputationTooltipDifficultySimple = 63,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 64,
    GameStatsStatReputationTooltipDifficultyVeryHard = 65,
    GameStatsStatReputationTooltipBenignity = 66,
    GameStatsStatReputationTooltipMalignity = 67,
    GameStatsStatReputationTooltipScore = 68,
    GameStatsStatReputationTooltipTurn = 69,
    GameStatsStatReputationTooltipTicks = 70,
    GameStatsStatWeightTooltip = 71,
    GameStatsStatAttackTooltipTactics = 72,
    GameStatsStatAttackTooltipLeftHand = 73,
    GameStatsStatAttackTooltipRightHand = 74,
    GameStatsStatDefenseTooltipBase = 75,
    GameStatsStatDefenseTooltipBlunt = 76,
    GameStatsStatDefenseTooltipParrying = 77,
    GameStatsStatDefenseTooltipFire = 78,
    GameStatsStatDefenseTooltipPiercing = 79,
    GameStatsStatDefenseTooltipSlashing = 80,
    GameQuadrantElementStats = 81,
    GameQuadrantElementMenuBar = 82,
    GameQuadrantElementQuickslots = 83,
    GameQuadrantElementMessages = 84,
    GameQuadrantElementContextMenuMoveTo = 85,
    GameQuadrantElementContextMenuSwitchWith = 86,
    GameItemBarterCredit = 87,
    GameItemBarterCreditTrade = 88,
    GameMenuBarButtonTooltipBindable = 89,
    GameMenuBarButtonTooltipMenu = 90,
    GameMenuBarButtonTooltipSave = 91,
    GameMenuBarButtonTooltipNotes = 92,
    GameMenuBarButtonTooltipMilestones = 93,
    GameMenuBarButtonTooltipMilestonesDisabled = 94,
    GameMenuBarButtonTooltipMessages = 95,
    GameMenuBarButtonTooltipHelp = 96,
    GameMenuBarButtonTooltipQuickSettings = 97,
    GameMenuBarButtonTooltipActions = 98,
    GameMenuBarButtonTooltipInventory = 99,
    GameMenuBarButtonTooltipCrafting = 100,
    GameMenuBarButtonTooltipEquipment = 101,
    GameMenuBarButtonTooltipSkills = 102,
    GameMenuBarButtonTooltipQuests = 103,
    GameMenuBarButtonTooltipQuestsDisabled = 104,
    GameMessagesButtonSend = 105,
    GameMessagesContextMenuShowAsDialog = 106,
    GameMessagesContextMenuClear = 107,
    GameMessagesContextMenuCopy = 108,
    GameMessagesContextMenuExport = 109,
    GameMessagesFilter = 110,
    GameMessagesFilterAll = 111,
    GameMessagesFilterGame = 112,
    GameMessagesFilterChat = 113,
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
    MenuMultiplayerServerRegion = 170,
    MenuMultiplayerServerHost = 171,
    MenuMultiplayerServerDedicated = 172,
    MenuMultiplayerHeadingPlayersOnline = 173,
    MenuMultiplayerServerModUnableToLoad = 174,
    MenuGameEndTitleDead = 175,
    MenuGameEndTitleWon = 176,
    MenuGameEndShareFacebook = 177,
    MenuGameEndShareTwitter = 178,
    MenuGameEndContinueAsGhost = 179,
    MenuGameEndReturnToIsland = 180,
    MenuGameEndExitToMenu = 181,
    MenuHelpTitle = 182,
    MenuHelpDescription = 183,
    MenuHelpLabelSearch = 184,
    MenuHighscoresTitle = 185,
    MenuHighscoresDescription = 186,
    MenuHighscoresDifficultyFilterAll = 187,
    MenuHighscoresHighscoreLabelDifficulty = 188,
    MenuHighscoresHighscoreLabelTurns = 189,
    MenuHighscoresHighscoreLabelScore = 190,
    MenuHighscoresHighscoreLabelPlace = 191,
    MenuHighscoresHighscoreLabelDate = 192,
    MenuHighscoresHighscoreLabelDeathBy = 193,
    MenuHighscoresHighscoreTitle = 194,
    MenuHighscoresCharacterNameUnknown = 195,
    MenuHighscoresHighscoreReplayWithSettings = 196,
    MenuLoadGameButtonNewGame = 197,
    MenuLoadGameButtonNewGameButtonImportTooltip = 198,
    MenuLoadGameDescription = 199,
    MenuLoadGameSaveButtonDeleteTooltip = 200,
    MenuLoadGameSaveButtonEditNameTooltip = 201,
    MenuLoadGameSaveButtonExportTooltip = 202,
    MenuLoadGameSaveTooltipLabelCreatedTime = 203,
    MenuLoadGameSaveTooltipLabelSaveTime = 204,
    MenuLoadGameSaveTooltipLabelDifficulty = 205,
    MenuLoadGameSaveTooltipLabelScore = 206,
    MenuLoadGameSaveTooltipLabelSeed = 207,
    MenuLoadGameSaveTooltipLabelTurns = 208,
    MenuLoadGameSaveTooltipLabelMods = 209,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 210,
    MenuLoadGameSaveTooltipMod = 211,
    MenuLoadGameSlotsRemaining = 212,
    MenuLoadGameTitle = 213,
    MenuMainButtonAbout = 214,
    MenuMainButtonChangelog = 215,
    MenuMainButtonContinueGame = 216,
    MenuMainButtonMultiplayer = 217,
    MenuMainButtonHighscores = 218,
    MenuMainButtonLoadGame = 219,
    MenuMainButtonMods = 220,
    MenuMainButtonNewGame = 221,
    MenuMainButtonNews = 222,
    MenuMainButtonOptions = 223,
    MenuMainButtonQuitGame = 224,
    MenuModsButtonModdingGuide = 225,
    MenuModsButtonOpenFolder = 226,
    MenuModsButtonOpenWorkshop = 227,
    MenuModsDescription = 228,
    MenuModsTitle = 229,
    MenuModsTooltipLabelAuthor = 230,
    MenuModsTooltipLabelTags = 231,
    MenuModsTooltipLabelDependencies = 232,
    MenuModsTooltipLabelProvides = 233,
    MenuModsTooltipLabelVersion = 234,
    MenuModsTooltipLabelDescription = 235,
    MenuModsTooltipLabelInstallDate = 236,
    MenuModsTooltipLabelCreatedDate = 237,
    MenuModsTooltipLabelLastUpdatedDate = 238,
    MenuModsTooltipMultiplayerCompatibility = 239,
    MenuModsTooltipPreventsMilestoneUnlocks = 240,
    MenuModsTooltipModOptions = 241,
    MenuModsTooltipPublishMod = 242,
    MenuModsTooltipUninstallMod = 243,
    MenuModsTooltipViewInSteamWorkshop = 244,
    MenuModsButtonEditInternalMods = 245,
    MenuModsSectionHeading = 246,
    MenuModsSubmenuEditInternalModsTitle = 247,
    MenuModsSubmenuEditInternalModsDescription = 248,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 249,
    MenuNewGameButtonNext = 250,
    MenuNewGameButtonStartServer = 251,
    MenuNewGameDescription = 252,
    MenuNewGameLabelEditName = 253,
    MenuNewGameLabelEditSeed = 254,
    MenuNewGamePlaceholderEditSeed = 255,
    MenuNewGameTitle = 256,
    MenuNewGameChoiceDifficulty = 257,
    MenuNewGameChoiceSingleplayer = 258,
    MenuNewGameChoiceSingleplayerDescription = 259,
    MenuNewGameChoiceMultiplayer = 260,
    MenuNewGameChoiceMultiplayerDescription = 261,
    MenuNewGameChoiceTurnModeManual = 262,
    MenuNewGameChoiceTurnModeManualDescription = 263,
    MenuNewGameChoiceTurnModeRealTime = 264,
    MenuNewGameChoiceTurnModeRealTimeDescription = 265,
    MenuNewGameChoiceTurnModeSimulated = 266,
    MenuNewGameChoiceTurnModeSimulatedDescription = 267,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 268,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 269,
    MenuNewGameChoiceDifficultyChallengeDaily = 270,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 271,
    MenuNewGameButtonMilestones = 272,
    MenuNewGameButtonMilestonesDescription = 273,
    MenuNewGameTabGameMode = 274,
    MenuNewGameTabMultiplayer = 275,
    MenuNewGameTabGameplayModifiers = 276,
    MenuNewGameHeadingGameMode = 277,
    MenuNewGameHeadingMultiplayer = 278,
    MenuNewGameHeadingGameplayModifiers = 279,
    MenuNewGameChoiceClientsInheritHostModifiers = 280,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 281,
    MenuNewGameChoiceCustomModifiers = 282,
    MenuNewGameChoiceCustomModifiersDescription = 283,
    MenuMilestoneModifiersTitle = 284,
    MenuMilestoneModifiersDescription = 285,
    MenuCustomGameOptionsTitle = 286,
    MenuCustomGameOptionsDescription = 287,
    MenuCustomGameOptionsRespawnOnDeath = 288,
    MenuCustomGameOptionsRespawnOnDeathDescription = 289,
    MenuCustomGameOptionsCreaturesPeaceful = 290,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 291,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 292,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 293,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 294,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 295,
    MenuCustomGameOptionsCreaturesAllowSpawning = 296,
    MenuCustomGameOptionsCreatureNone = 297,
    MenuCustomGameOptionsCreatureConfigure = 298,
    MenuCustomGameOptionsBenignityInitial = 299,
    MenuCustomGameOptionsBenignityMultiplier = 300,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 301,
    MenuCustomGameOptionsMalignityInitial = 302,
    MenuCustomGameOptionsMalignityMultiplier = 303,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 304,
    MenuCustomGameOptionsStatMultiplier = 305,
    MenuCustomGameOptionsStatMultiplierTooltip = 306,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 307,
    MenuCustomGameOptionsHeadingGeneral = 308,
    MenuCustomGameOptionsHeadingTime = 309,
    MenuCustomGameOptionsHeadingStats = 310,
    MenuCustomGameOptionsHeadingReputation = 311,
    MenuCustomGameOptionsHeadingInventory = 312,
    MenuCustomGameOptionsHeadingCreatures = 313,
    MenuCustomGameOptionsHeadingSkills = 314,
    MenuCustomGameOptionsHeadingStatusEffects = 315,
    MenuCustomGameOptionsEternalNight = 316,
    MenuCustomGameOptionsEternalNightDescription = 317,
    MenuCustomGameOptionsEternalDay = 318,
    MenuCustomGameOptionsEternalDayDescription = 319,
    MenuCustomGameOptionsTimeFrozen = 320,
    MenuCustomGameOptionsTimeInitial = 321,
    MenuCustomGameOptionsTimeDayLength = 322,
    MenuCustomGameOptionsTimeDayLengthTooltip = 323,
    MenuCustomGameOptionsTimeDayPercent = 324,
    MenuCustomGameOptionsTimeDayPercentTooltip = 325,
    MenuCustomGameOptionsStatStarting = 326,
    MenuCustomGameOptionsStatMax = 327,
    MenuCustomGameOptionsStatStartingDisplay = 328,
    MenuCustomGameOptionsStatMaxDisplay = 329,
    MenuCustomGameOptionsStatNoChange = 330,
    MenuCustomGameOptionsStatStrengthTooltip = 331,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 332,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 333,
    MenuCustomGameOptionsStatusEffectStartWith = 334,
    MenuCustomGameOptionsStatusEffectUntreatable = 335,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 336,
    MenuCustomGameOptionsSkillInitialRandomCount = 337,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 338,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 339,
    MenuCustomGameOptionsSkillsGlobal = 340,
    MenuCustomGameOptionsSkillNone = 341,
    MenuCustomGameOptionsSkillConfigure = 342,
    MenuCustomGameOptionsSkillInitial = 343,
    MenuCustomGameOptionsSkillMultiplier = 344,
    MenuCustomGameOptionsSkillMultiplierTooltip = 345,
    MenuCustomGameOptionsRandomItems = 346,
    MenuCustomGameOptionsRandomItemsDescription = 347,
    MenuCustomGameOptionsExport = 348,
    MenuCustomGameOptionsImport = 349,
    MenuNewsButtonDiscord = 350,
    MenuNewsButtonFacebook = 351,
    MenuNewsButtonReddit = 352,
    MenuNewsButtonTwitter = 353,
    MenuNewsDescription = 354,
    MenuNewsHeadingSocial = 355,
    MenuNewsTitle = 356,
    MenuNewsHeadingUnableToLoad = 357,
    MenuNewsButtonAllNews = 358,
    MenuOptionsButtonDitherFogOfWar = 359,
    MenuOptionsButtonDisableCustomCursor = 360,
    MenuOptionsButtonFullscreen = 361,
    MenuOptionsButtonDeveloperMode = 362,
    MenuOptionsButtonDeveloperModeContextMenu = 363,
    MenuOptionsButtonPixelFont = 364,
    MenuOptionsButtonReloadGame = 365,
    MenuOptionsButtonExportGlobalSaveData = 366,
    MenuOptionsButtonImportGlobalSaveData = 367,
    MenuOptionsButtonSaveDataClearAll = 368,
    MenuOptionsButtonSaveDataClearCharacters = 369,
    MenuOptionsButtonSaveDataClearHighscores = 370,
    MenuOptionsButtonSaveDataClearMilestones = 371,
    MenuOptionsButtonSaveDataClearOptions = 372,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 373,
    MenuOptionsButtonSaveDataClearSaves = 374,
    MenuOptionsButtonSkipSplash = 375,
    MenuOptionsButtonToggleDevTools = 376,
    MenuOptionsButtonTooltipsCreatures = 377,
    MenuOptionsButtonOpenLogsFolder = 378,
    MenuOptionsButtonTooltipsDoodads = 379,
    MenuOptionsButtonTooltipsItems = 380,
    MenuOptionsButtonTooltipsTerrain = 381,
    MenuOptionsButtonDropLocationFacing = 382,
    MenuOptionsButtonDropLocationFeet = 383,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 384,
    MenuOptionsDescription = 385,
    MenuOptionsHeadingAudio = 386,
    MenuOptionsHeadingDeveloper = 387,
    MenuOptionsHeadingGameplayOptions = 388,
    MenuOptionsHeadingGeneralOptions = 389,
    MenuOptionsHeadingControls = 390,
    MenuOptionsHeadingLanguage = 391,
    MenuOptionsHeadingPowerPreference = 392,
    MenuOptionsHeadingModOptions = 393,
    MenuOptionsHeadingOther = 394,
    MenuOptionsHeadingSaveData = 395,
    MenuOptionsHeadingTooltips = 396,
    MenuOptionsHeadingVideo = 397,
    MenuOptionsLabelInterfaceScale = 398,
    MenuOptionsLabelTooltipDelay = 399,
    MenuOptionsLabelDirectionTurnDelay = 400,
    MenuOptionsLabelMouseTurnDelay = 401,
    MenuOptionsTooltipTurnDelay = 402,
    MenuOptionsTooltipMouseTurnDelay = 403,
    MenuOptionsTooltipUiScaleClamped = 404,
    MenuOptionsTooltipControlsFilter = 405,
    MenuOptionsLabelVolumeEffects = 406,
    MenuOptionsLabelVolumeMusic = 407,
    MenuOptionsTabAudio = 408,
    MenuOptionsTabDeveloper = 409,
    MenuOptionsTabGameplay = 410,
    MenuOptionsTabGeneral = 411,
    MenuOptionsTabControls = 412,
    MenuOptionsTabMods = 413,
    MenuOptionsTabSaveData = 414,
    MenuOptionsTabVideo = 415,
    MenuOptionsTitle = 416,
    MenuOptionsTooltipMusicNextTrack = 417,
    MenuOptionsBindChoose = 418,
    MenuOptionsBindChooseAdd = 419,
    MenuOptionsBindLabelModifier = 420,
    MenuOptionsBindButtonResetTooltip = 421,
    MenuOptionsBindButtonDeleteTooltip = 422,
    MenuOptionsBindButtonAddTooltip = 423,
    MenuOptionsButtonUnlockAllMilestones = 424,
    MenuOptionsButtonUnlockAllCraftingRecipes = 425,
    MenuOptionsButtonAlternatingDirectionMovement = 426,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 427,
    MenuOptionsButtonAlwaysShowMoreInformation = 428,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 429,
    MenuOptionsButtonAutoGatherHarvest = 430,
    MenuOptionsButtonAutoGatherHarvestTooltip = 431,
    MenuOptionsButtonAutoAttack = 432,
    MenuOptionsButtonAutoAttackTooltip = 433,
    MenuOptionsButtonAutoPickup = 434,
    MenuOptionsButtonAutoPickupTooltip = 435,
    MenuOptionsButtonDropOnGatherHarvest = 436,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 437,
    MenuOptionsButtonKeepSortActive = 438,
    MenuOptionsButtonKeepSortActiveTooltip = 439,
    MenuOptionsButtonProtectCraftingItemsInInventory = 440,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 441,
    MenuOptionsButtonProtectCraftingItemContainers = 442,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 443,
    MenuOptionsButtonUseAdjacentContainers = 444,
    MenuOptionsButtonUseAdjacentContainersTooltip = 445,
    MenuOptionsButtonHideEquippedHeadgear = 446,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 447,
    MenuOptionsButtonEnableAutoSave = 448,
    MenuOptionsButtonEnableAutoSaveTooltip = 449,
    MenuOptionsButtonWarnOnDangerousActions = 450,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 451,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 452,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 453,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 454,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 455,
    MenuOptionsHeadingWarnWhenBreakingItems = 456,
    MenuOptionsButtonSaveDataClearBindings = 457,
    MenuOptionsTooltipDialogOpacity = 458,
    MenuOptionsLabelDialogOpacity = 459,
    MenuOptionsDeveloperLogSourceFilterHeading = 460,
    MenuOptionsAudioVolumeDisplay = 461,
    MenuOptionsMusicPlaylist = 462,
    MenuOptionsButtonConfigureBindings = 463,
    MenuPauseButtonContinue = 464,
    MenuPauseButtonOptions = 465,
    MenuPauseButtonModes = 466,
    MenuPauseButtonPaused = 467,
    MenuPauseButtonMultiplayer = 468,
    MenuPauseButtonTitleScreen = 469,
    MenuPauseButtonStopServer = 470,
    MenuPauseHeadingPaused = 471,
    MenuPauseParagraphPaused = 472,
    MenuPauseHeadingNotPaused = 473,
    MenuPauseParagraphNotPaused = 474,
    MenuPauseHeadingDedicatedServer = 475,
    MenuPauseParagraphDedicatedServer = 476,
    MenuModesTitle = 477,
    MenuModesDescription = 478,
    MenuMultiplayerOptionsTitle = 479,
    MenuMultiplayerOptionsDescription = 480,
    MenuMultiplayerOptionsOpenServer = 481,
    MenuMultiplayerOptionsOpenServerDescription = 482,
    MenuMultiplayerOptionsCopyGameCode = 483,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 484,
    MenuMultiplayerOptionsInviteSteamFriends = 485,
    MenuMultiplayerOptionsCheckConnectionHeading = 486,
    MenuMultiplayerOptionsCheckConnectionParagraph = 487,
    MenuMultiplayerOptionsCheckConnectionButton = 488,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 489,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 490,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 491,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 492,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 493,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 494,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 495,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 496,
    MenuJoinServerTitle = 497,
    MenuJoinServerDescription = 498,
    MenuJoinServerInputPlaceholder = 499,
    MenuJoinServerNext = 500,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 501,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 502,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 503,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 504,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 505,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 506,
    MenuSharedMultiplayerChoicePVP = 507,
    MenuSharedMultiplayerChoicePVPDescription = 508,
    MenuSharedMultiplayerMaxPlayers = 509,
    MenuSharedRealTimeTickSpeedTooltip = 510,
    MenuSharedRealTimeTickSpeedLabel = 511,
    MenuSharedButtonDefault = 512,
    MenuSharedValueMillseconds = 513,
    MenuSharedValuePercentage = 514,
    MenuSharedMilestonesNotUnlockable = 515,
    MenuSharedMilestonesNotUnlockableDescription = 516,
    MenuSharedButtonDisableAll = 517,
    MenuSharedButtonEnableAll = 518,
    MiscSortBy = 519,
    MiscSortDirection = 520,
    MiscFilter = 521,
    MiscPlayerNameDefault = 522,
    MiscPlayerNameServer = 523,
    MiscSaveNameDefault = 524,
    MiscSaveNameDailyChallenge = 525,
    MiscSaveNameChallenge = 526,
    MiscSaveVersionUnknown = 527,
    MiscVersion = 528,
    MiscTime = 529,
    MiscTimeMeridiem = 530,
    MiscBindableOr = 531,
    MiscBindableNoBindings = 532,
    DifficultyOptionsPeaceful = 533,
    DifficultyOptionsAberrantSpawnsDisabled = 534,
    DifficultyOptionsAberrantSpawnsOnly = 535,
    DifficultyOptionsCreatureSpawningDisabled = 536,
    DifficultyOptionsCreatureSpawnsDefault = 537,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 538,
    DifficultyOptionsCreatureSpawnsNoAberrants = 539,
    DifficultyOptionsRespawn = 540,
    DifficultyOptionsEternalNight = 541,
    DifficultyOptionsEternalDay = 542,
    DifficultyOptionsTimeInitial = 543,
    DifficultyOptionsTimeFrozen = 544,
    DifficultyOptionsTimeDayLength = 545,
    DifficultyOptionsTimeDayPercent = 546,
    DifficultyOptionsNoItems = 547,
    DifficultyOptionsBenignityInitial = 548,
    DifficultyOptionsBenignityMultiplier = 549,
    DifficultyOptionsMalignityInitial = 550,
    DifficultyOptionsMalignityMultiplier = 551,
    DifficultyOptionsStatInitial = 552,
    DifficultyOptionsStatMax = 553,
    DifficultyOptionsStatMultiplier = 554,
    DifficultyOptionsStatusEffectStartWith = 555,
    DifficultyOptionsStatusEffectUntreatable = 556,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 557,
    DifficultyOptionsNoRandomSkills = 558,
    DifficultyOptionsSkillStartingCount = 559,
    DifficultyOptionsSkillGainMultiplier = 560,
    DifficultyOptionsSkillInitial = 561,
    DifficultyOptionsStatusEffectPermanent = 562,
    DifficultyOptionsStatusEffectRateMultiplier = 563,
    DifficultyOptionsStatusEffectMultiplier = 564,
    EquipmentBack = 565,
    EquipmentBelt = 566,
    EquipmentChest = 567,
    EquipmentFeet = 568,
    EquipmentHands = 569,
    EquipmentHead = 570,
    EquipmentLeftHand = 571,
    EquipmentLeftHandOption = 572,
    EquipmentLegs = 573,
    EquipmentNeck = 574,
    EquipmentRightHand = 575,
    EquipmentRightHandOption = 576,
    EquipmentUse = 577,
    HudFilter = 578,
    QuickSlot1 = 579,
    QuickSlot2 = 580,
    QuickSlot3 = 581,
    QuickSlot4 = 582,
    QuickSlot5 = 583,
    QuickSlot6 = 584,
    QuickSlot7 = 585,
    QuickSlot8 = 586,
    QuickSlot9 = 587,
    TabCrafting = 588,
    TabDismantle = 589,
    Version = 590,
    WindowTitleContainer = 591,
    WindowTitleCrafting = 592,
    WindowTitleEquipment = 593,
    WindowTitleInventory = 594
}
export default UiTranslation;
