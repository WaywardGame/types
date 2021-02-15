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
    GameDialogMapCheckButtonAlwaysOpaque = 51,
    GameDialogMapCheckButtonUseOnlyIntegerZoomLevels = 52,
    GameDialogMapLabelTheme = 53,
    GameDialogQuestsName = 54,
    GameDialogQuestsLink = 55,
    GameDialogQuestsChildQuests = 56,
    GameDialogQuestsRequirements = 57,
    GameDialogQuestsActiveQuests = 58,
    GameDialogQuestsCompletedQuests = 59,
    GameDialogQuestsCompleteQuest = 60,
    GameTooltipInspect = 61,
    GameTooltipShowMoreInformation = 62,
    GameTooltipMagicalMaxWeightLabel = 63,
    GameTooltipMagicalLabel = 64,
    GameTooltipItemUsesLabel = 65,
    GameTooltipItemUse = 66,
    GameTooltipItemUseActionOn = 67,
    GameTooltipItemUseActionOnPre = 68,
    GameTooltipItemUseActionOnPost = 69,
    GameTooltipItemUseActionOnConsume = 70,
    GameTooltipItemUseActionOnConsumeTooltipBase = 71,
    GameTooltipItemUseActionOnConsumeTooltipSkill = 72,
    GameTooltipItemUseActionOnConsumeTooltipMagical = 73,
    GameTooltipItemUseActionTierQualityIncrease = 74,
    GameTooltipItemUseActionTierLabel = 75,
    GameTooltipItemUseThrowDamageType = 76,
    GameTooltipItemDecay = 77,
    GameTooltipItemDecayExact = 78,
    GameTooltipItemDecayRate = 79,
    GameTooltipItemDecayRateTooltip = 80,
    GameTooltipItemWeight = 81,
    GameTooltipItemWeightStored = 82,
    GameTooltipItemWeightStoredReduction = 83,
    GameTooltipItemWeightStoredReductionVerbose = 84,
    GameTooltipSharedWeightCapacity = 85,
    GameTooltipSharedLabelWeightCapacity = 86,
    GameTooltipSharedWeightCapacityVerbose = 87,
    GameTooltipSharedLabelInsulation = 88,
    GameTooltipSharedLabelPreservation = 89,
    GameTooltipSharedLabelDurability = 90,
    GameTooltipSharedDurabilityMagicalDamageReduction = 91,
    GameTooltipSharedLabelContents = 92,
    GameTooltipSharedContents = 93,
    GameTooltipItemMagicalSource = 94,
    GameTooltipItemGroupingsLabel = 95,
    GameTooltipItemGroup = 96,
    GameTooltipItemWorth = 97,
    GameTooltipItemWorthMagicalBonus = 98,
    GameTooltipItemProtected = 99,
    GameTooltipItemProtectedContainer = 100,
    GameTooltipItemProtectedTooltip = 101,
    GameTooltipSkillCurrent = 102,
    GameTooltipSkillReputationImpact = 103,
    GameTooltipSkillCanIncrease = 104,
    GameTooltipSkillBonuses = 105,
    GameTooltipSkillBonus = 106,
    GameTooltipSharedMagicalProperty = 107,
    GameTooltipSharedMagicalPropertyOutOf = 108,
    GameTooltipSharedLabel = 109,
    GameTooltipItemUseEquipAttack = 110,
    GameTooltipItemUseEquipDefense = 111,
    GameTooltipItemUseEquipDefenseResistances = 112,
    GameTooltipItemUseEquipDefenseAttribute = 113,
    GameTooltipItemUseEquipDefenseVulnerabilities = 114,
    GameStatsPercentage = 115,
    GameStatsStatAttack = 116,
    GameStatsStatGeneric = 117,
    GameStatsStatGenericWithMax = 118,
    GameStatsStatbar = 119,
    GameStatsStatHealthTooltip = 120,
    GameStatsStatStaminaTooltip = 121,
    GameStatsStatHungerTooltip = 122,
    GameStatsStatThirstTooltip = 123,
    GameStatsStatHealthStatusWarning = 124,
    GameStatsStatStaminaStatusWarning = 125,
    GameStatsStatHungerStatusWarning = 126,
    GameStatsStatThirstStatusWarning = 127,
    GameStatsStatWeightStatusWarning = 128,
    GameStatsStatStaminaStatusBad = 129,
    GameStatsStatHungerStatusBad = 130,
    GameStatsStatThirstStatusBad = 131,
    GameStatsStatWeightStatusBad = 132,
    GameStatsStatReputationTooltipAverageReputation = 133,
    GameStatsStatReputationTooltipDifficulty = 134,
    GameStatsStatReputationTooltipDifficultyEasy = 135,
    GameStatsStatReputationTooltipDifficultyHard = 136,
    GameStatsStatReputationTooltipDifficultyInfantile = 137,
    GameStatsStatReputationTooltipDifficultyInsane = 138,
    GameStatsStatReputationTooltipDifficultyMedium = 139,
    GameStatsStatReputationTooltipDifficultyNightmare = 140,
    GameStatsStatReputationTooltipDifficultySimple = 141,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 142,
    GameStatsStatReputationTooltipDifficultyVeryHard = 143,
    GameStatsStatReputationTooltipBenignity = 144,
    GameStatsStatReputationTooltipMalignity = 145,
    GameStatsStatReputationTooltipScore = 146,
    GameStatsStatReputationTooltipTurn = 147,
    GameStatsStatReputationTooltipTicks = 148,
    GameStatsStatWeightTooltip = 149,
    GameStatsStatAttackTooltipTactics = 150,
    GameStatsStatAttackTooltipLeftHand = 151,
    GameStatsStatAttackTooltipRightHand = 152,
    GameStatsStatDefenseTooltipBase = 153,
    GameStatsStatDefenseTooltipBlunt = 154,
    GameStatsStatDefenseTooltipParrying = 155,
    GameStatsStatDefenseTooltipFire = 156,
    GameStatsStatDefenseTooltipCold = 157,
    GameStatsStatDefenseTooltipPiercing = 158,
    GameStatsStatDefenseTooltipSlashing = 159,
    GameItemBarterCredit = 160,
    GameItemBarterCreditTrade = 161,
    GameMenuBarButtonTooltipBindable = 162,
    GameMenuBarButtonTooltipMenu = 163,
    GameMenuBarButtonTooltipSave = 164,
    GameMenuBarButtonTooltipSaveSize = 165,
    GameMenuBarButtonTooltipSaveTurnsAgo = 166,
    GameMenuBarButtonTooltipSaveLastTime = 167,
    GameMenuBarButtonTooltipNotes = 168,
    GameMenuBarButtonTooltipNotesUnread = 169,
    GameMenuBarButtonTooltipMilestones = 170,
    GameMenuBarButtonTooltipMilestonesDisabled = 171,
    GameMenuBarButtonTooltipMessages = 172,
    GameMenuBarButtonTooltipHelp = 173,
    GameMenuBarButtonTooltipQuickSettings = 174,
    GameMenuBarButtonTooltipActions = 175,
    GameMenuBarButtonTooltipInventory = 176,
    GameMenuBarButtonTooltipCrafting = 177,
    GameMenuBarButtonTooltipEquipment = 178,
    GameMenuBarButtonTooltipSkills = 179,
    GameMenuBarButtonTooltipQuests = 180,
    GameMenuBarButtonTooltipQuestsDisabled = 181,
    GameMessagesButtonSend = 182,
    GameMessagesContextMenuShowAsDialog = 183,
    GameMessagesContextMenuClear = 184,
    GameMessagesContextMenuCopy = 185,
    GameMessagesContextMenuExport = 186,
    GameMessagesFilter = 187,
    GameMessagesFiltersEdit = 188,
    GameMessagesNewNote = 189,
    GameMessagesTurn = 190,
    GameMessagesDedicatedServerBackup = 191,
    GameMessagesDedicatedServerBackupLimitReached = 192,
    GameTileInspectionCannotSeeTile = 193,
    MenuAboutTitle = 194,
    MenuAboutDescription = 195,
    MenuAboutGameDescription = 196,
    MenuAboutSectionTeam = 197,
    MenuAboutTeamMemberResponsibilities = 198,
    MenuAboutTeamMemberName = 199,
    MenuAboutTeamMemberNickname = 200,
    MenuAboutSectionContributors = 201,
    MenuAboutSectionSpecialThanks = 202,
    MenuAboutTextSpecialThanksTestorsAndDonators = 203,
    MenuAboutSectionLibraries = 204,
    MenuAboutSectionLibrariesDescription = 205,
    MenuBindings = 206,
    MenuBindingsDescription = 207,
    MenuBindingsTooltipBindConflicts = 208,
    MenuChangelogTitle = 209,
    MenuChangelogDescription = 210,
    MenuChangelogHeadingFailedLoad = 211,
    MenuChangelogHeadingChangeCount = 212,
    MenuCharacterCreationButtonRandomizeName = 213,
    MenuCharacterCreationButtonExportTooltip = 214,
    MenuCharacterCreationButtonImportTooltip = 215,
    MenuCharacterCreationButtonStartGame = 216,
    MenuCharacterCreationButtonJoinGame = 217,
    MenuCharacterCreationDescription = 218,
    MenuCharacterCreationHeadingHairColor = 219,
    MenuCharacterCreationHeadingHairStyle = 220,
    MenuCharacterCreationHeadingSkinTone = 221,
    MenuCharacterCreationLabelName = 222,
    MenuCharacterCreationTitle = 223,
    MenuCharacterCreationButtonRotateLeftTooltip = 224,
    MenuCharacterCreationButtonRotateRightTooltip = 225,
    MenuCharacterCreationButtonRandomizeTooltip = 226,
    MenuCharacterSelectionButtonNewCharacter = 227,
    MenuCharacterSelectionDescription = 228,
    MenuCharacterSelectionHeadingNoCharacters = 229,
    MenuCharacterSelectionTitle = 230,
    MenuCharacterSelectionLabelLastUse = 231,
    MenuCharacterSelectionLabelUseCount = 232,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 233,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 234,
    MenuMultiplayerDescription = 235,
    MenuMultiplayerTitle = 236,
    MenuMultiplayerButtonJoinById = 237,
    MenuMultiplayerServerLabelReputation = 238,
    MenuMultiplayerServerLabelDays = 239,
    MenuMultiplayerServerLabelIsland = 240,
    MenuMultiplayerButtonNewGame = 241,
    MenuMultiplayerButtonLoadGame = 242,
    MenuMultiplayerServerTooltipPVP = 243,
    MenuMultiplayerServerTooltipModsLabel = 244,
    MenuMultiplayerServerTooltipFriendsLabel = 245,
    MenuMultiplayerServerPlayers = 246,
    MenuMultiplayerServerLobbyType = 247,
    MenuMultiplayerServerRegion = 248,
    MenuMultiplayerServerHost = 249,
    MenuMultiplayerServerVersion = 250,
    MenuMultiplayerServerVersionUnknown = 251,
    MenuMultiplayerServerDedicated = 252,
    MenuMultiplayerHeadingPlayersOnline = 253,
    MenuMultiplayerServerModUnableToLoad = 254,
    MenuGameEndTitleDead = 255,
    MenuGameEndTitleWon = 256,
    MenuGameEndShareFacebook = 257,
    MenuGameEndShareTwitter = 258,
    MenuGameEndContinueAsGhost = 259,
    MenuGameEndReturnToIsland = 260,
    MenuGameEndExitToMenu = 261,
    MenuHelpTitle = 262,
    MenuHelpDescription = 263,
    MenuHelpLabelSearch = 264,
    MenuHighscoresTitle = 265,
    MenuHighscoresDescription = 266,
    MenuHighscoresDifficultyFilterAll = 267,
    MenuHighscoresHighscoreLabelDifficulty = 268,
    MenuHighscoresHighscoreLabelTurns = 269,
    MenuHighscoresHighscoreLabelScore = 270,
    MenuHighscoresHighscoreLabelPlace = 271,
    MenuHighscoresHighscoreLabelDate = 272,
    MenuHighscoresHighscoreLabelDeathBy = 273,
    MenuHighscoresHighscoreTitle = 274,
    MenuHighscoresCharacterNameUnknown = 275,
    MenuHighscoresHighscoreReplayWithSettings = 276,
    MenuLoadGameButtonNewGame = 277,
    MenuLoadGameButtonNewGameButtonImportTooltip = 278,
    MenuLoadGameDescription = 279,
    MenuLoadGameSaveButtonDeleteTooltip = 280,
    MenuLoadGameSaveButtonEditNameTooltip = 281,
    MenuLoadGameSaveButtonExportTooltip = 282,
    MenuLoadGameSaveTooltipLabelCreatedTime = 283,
    MenuLoadGameSaveTooltipLabelSaveTime = 284,
    MenuLoadGameSaveTooltipLabelGameMode = 285,
    MenuLoadGameSaveTooltipLabelScore = 286,
    MenuLoadGameSaveTooltipLabelSeed = 287,
    MenuLoadGameSaveTooltipLabelTurns = 288,
    MenuLoadGameSaveTooltipLabelMods = 289,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 290,
    MenuLoadGameSaveTooltipMod = 291,
    MenuLoadGameSaveTooltipNew = 292,
    MenuLoadGameSlotsRemaining = 293,
    MenuLoadGameSaveGame = 294,
    MenuLoadGameSaveGameDescription = 295,
    MenuLoadGameTitle = 296,
    MenuLoadGameLabelSelected = 297,
    MenuLoadGameButtonDeleteSelectedTooltip = 298,
    MenuMainButtonAbout = 299,
    MenuMainButtonChangelog = 300,
    MenuMainButtonContinueGame = 301,
    MenuMainButtonMultiplayer = 302,
    MenuMainButtonHighscores = 303,
    MenuMainButtonLoadGame = 304,
    MenuMainButtonMods = 305,
    MenuMainButtonNewGame = 306,
    MenuMainButtonNews = 307,
    MenuMainButtonOptions = 308,
    MenuMainButtonQuitGame = 309,
    MenuModsButtonModdingGuide = 310,
    MenuModsButtonOpenFolder = 311,
    MenuModsButtonOpenWorkshop = 312,
    MenuModsDescription = 313,
    MenuModsTitle = 314,
    MenuModsTooltipLabelAuthor = 315,
    MenuModsTooltipLabelTags = 316,
    MenuModsTooltipLabelDependencies = 317,
    MenuModsTooltipLabelProvides = 318,
    MenuModsTooltipLabelVersion = 319,
    MenuModsTooltipLabelDescription = 320,
    MenuModsTooltipLabelInstallDate = 321,
    MenuModsTooltipLabelCreatedDate = 322,
    MenuModsTooltipLabelLastUpdatedDate = 323,
    MenuModsTooltipPreventsMilestoneUnlocks = 324,
    MenuModsTooltipModOptions = 325,
    MenuModsTooltipPublishMod = 326,
    MenuModsTooltipModMoreInformation = 327,
    MenuModsTooltipUninstallMod = 328,
    MenuModsTooltipViewInSteamWorkshop = 329,
    MenuModsTooltipViewGitHub = 330,
    MenuModsTooltipOpenFolder = 331,
    MenuModsButtonEditInternalMods = 332,
    MenuModsSectionHeading = 333,
    MenuModsSubmenuEditInternalModsTitle = 334,
    MenuModsSubmenuEditInternalModsDescription = 335,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 336,
    MenuNewGameButtonNext = 337,
    MenuNewGameButtonStartServer = 338,
    MenuNewGameDescription = 339,
    MenuNewGameLabelEditName = 340,
    MenuNewGameLabelEditSeed = 341,
    MenuNewGamePlaceholderEditSeed = 342,
    MenuNewGameTitle = 343,
    MenuNewGameChoiceDifficulty = 344,
    MenuNewGameChoiceSingleplayer = 345,
    MenuNewGameChoiceSingleplayerDescription = 346,
    MenuNewGameChoiceMultiplayer = 347,
    MenuNewGameChoiceMultiplayerDescription = 348,
    MenuNewGameChoiceTurnModeManual = 349,
    MenuNewGameChoiceTurnModeManualDescription = 350,
    MenuNewGameChoiceTurnModeRealTime = 351,
    MenuNewGameChoiceTurnModeRealTimeDescription = 352,
    MenuNewGameChoiceTurnModeSimulated = 353,
    MenuNewGameChoiceTurnModeSimulatedDescription = 354,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 355,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 356,
    MenuNewGameChoiceDifficultyChallengeDaily = 357,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 358,
    MenuNewGameButtonMilestones = 359,
    MenuNewGameButtonMilestonesDescription = 360,
    MenuNewGameTabGameMode = 361,
    MenuNewGameTabMultiplayer = 362,
    MenuNewGameTabGameplayModifiers = 363,
    MenuNewGameHeadingGameMode = 364,
    MenuNewGameHeadingMultiplayer = 365,
    MenuNewGameHeadingGameplayModifiers = 366,
    MenuNewGameChoiceClientsInheritHostModifiers = 367,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 368,
    MenuNewGameChoiceCustomModifiers = 369,
    MenuNewGameChoiceCustomModifiersDescription = 370,
    MenuMilestoneModifiersTitle = 371,
    MenuMilestoneModifiersDescription = 372,
    MenuCustomGameOptionsTitle = 373,
    MenuCustomGameOptionsDescription = 374,
    MenuCustomGameOptionsRespawnOnDeath = 375,
    MenuCustomGameOptionsRespawnOnDeathDescription = 376,
    MenuCustomGameOptionsUseUnlockedRecipes = 377,
    MenuCustomGameOptionsStartingIslandBiome = 378,
    MenuCustomGameOptionsApplyTravelingEffects = 379,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 380,
    MenuCustomGameOptionsCreaturesPeaceful = 381,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 382,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 383,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 384,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 385,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 386,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 387,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 388,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 389,
    MenuCustomGameOptionsCreaturesAllowSpawning = 390,
    MenuCustomGameOptionsCreaturesSpawnLimit = 391,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 392,
    MenuCustomGameOptionsCreatureNone = 393,
    MenuCustomGameOptionsCreatureConfigure = 394,
    MenuCustomGameOptionsBenignityInitial = 395,
    MenuCustomGameOptionsBenignityMultiplier = 396,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 397,
    MenuCustomGameOptionsMalignityInitial = 398,
    MenuCustomGameOptionsMalignityMultiplier = 399,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 400,
    MenuCustomGameOptionsStatMultiplier = 401,
    MenuCustomGameOptionsStatMultiplierTooltip = 402,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 403,
    MenuCustomGameOptionsHeadingGeneral = 404,
    MenuCustomGameOptionsHeadingIsland = 405,
    MenuCustomGameOptionsHeadingTime = 406,
    MenuCustomGameOptionsHeadingStats = 407,
    MenuCustomGameOptionsHeadingReputation = 408,
    MenuCustomGameOptionsHeadingInventory = 409,
    MenuCustomGameOptionsHeadingCreatures = 410,
    MenuCustomGameOptionsHeadingSkills = 411,
    MenuCustomGameOptionsHeadingStatusEffects = 412,
    MenuCustomGameOptionsEternalNight = 413,
    MenuCustomGameOptionsEternalNightDescription = 414,
    MenuCustomGameOptionsEternalDay = 415,
    MenuCustomGameOptionsEternalDayDescription = 416,
    MenuCustomGameOptionsTimeFrozen = 417,
    MenuCustomGameOptionsTimeInitial = 418,
    MenuCustomGameOptionsTimeDayLength = 419,
    MenuCustomGameOptionsTimeDayLengthTooltip = 420,
    MenuCustomGameOptionsTimeDayPercent = 421,
    MenuCustomGameOptionsTimeDayPercentTooltip = 422,
    MenuCustomGameOptionsStatStarting = 423,
    MenuCustomGameOptionsStatMax = 424,
    MenuCustomGameOptionsStatStartingDisplay = 425,
    MenuCustomGameOptionsStatMaxDisplay = 426,
    MenuCustomGameOptionsStatNoChange = 427,
    MenuCustomGameOptionsStatBonus = 428,
    MenuCustomGameOptionsStatBonusDisplay = 429,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 430,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 431,
    MenuCustomGameOptionsStatusEffectStartWith = 432,
    MenuCustomGameOptionsStatusEffectUntreatable = 433,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 434,
    MenuCustomGameOptionsSkillInitialRandomCount = 435,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 436,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 437,
    MenuCustomGameOptionsSkillsGlobal = 438,
    MenuCustomGameOptionsSkillNone = 439,
    MenuCustomGameOptionsSkillConfigure = 440,
    MenuCustomGameOptionsSkillInitial = 441,
    MenuCustomGameOptionsSkillMultiplier = 442,
    MenuCustomGameOptionsSkillMultiplierTooltip = 443,
    MenuCustomGameOptionsRandomItems = 444,
    MenuCustomGameOptionsRandomItemsDescription = 445,
    MenuCustomGameOptionsExport = 446,
    MenuCustomGameOptionsImport = 447,
    MenuNewsDescription = 448,
    MenuNewsHeadingSocial = 449,
    MenuNewsTitle = 450,
    MenuNewsHeadingUnableToLoad = 451,
    MenuNewsButtonAllNews = 452,
    MenuOptionsButtonDitherFogOfWar = 453,
    MenuOptionsButtonDisableCustomCursor = 454,
    MenuOptionsButtonDisplayArticleInObjectNames = 455,
    MenuOptionsButtonFullscreen = 456,
    MenuOptionsButtonDeveloperMode = 457,
    MenuOptionsButtonDeveloperModeContextMenu = 458,
    MenuOptionsButtonPixelFont = 459,
    MenuOptionsButtonReloadGame = 460,
    MenuOptionsButtonReloadStylesheets = 461,
    MenuOptionsButtonExportGlobalSaveData = 462,
    MenuOptionsButtonImportGlobalSaveData = 463,
    MenuOptionsButtonSaveDataClearAll = 464,
    MenuOptionsButtonSaveDataClearCharacters = 465,
    MenuOptionsButtonSaveDataClearHighscores = 466,
    MenuOptionsButtonSaveDataClearMilestones = 467,
    MenuOptionsButtonSaveDataClearOptions = 468,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 469,
    MenuOptionsButtonSaveDataClearSaves = 470,
    MenuOptionsButtonSkipSplash = 471,
    MenuOptionsButtonToggleDevTools = 472,
    MenuOptionsButtonTooltipsCreatures = 473,
    MenuOptionsButtonOpenLogsFolder = 474,
    MenuOptionsButtonTooltipsDoodads = 475,
    MenuOptionsButtonTooltipsItems = 476,
    MenuOptionsButtonTooltipsTerrain = 477,
    MenuOptionsButtonDropLocationFacing = 478,
    MenuOptionsButtonDropLocationFeet = 479,
    MenuOptionsButtonStartTraceRecording = 480,
    MenuOptionsButtonStopTraceRecording = 481,
    MenuOptionsButtonTracingRecordingtTooltip = 482,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 483,
    MenuOptionsDescription = 484,
    MenuOptionsHeadingAudio = 485,
    MenuOptionsHeadingDeveloper = 486,
    MenuOptionsHeadingGameplayOptions = 487,
    MenuOptionsHeadingGeneralOptions = 488,
    MenuOptionsHeadingControls = 489,
    MenuOptionsHeadingLanguage = 490,
    MenuOptionsHeadingPowerPreference = 491,
    MenuOptionsHeadingModOptions = 492,
    MenuOptionsHeadingOther = 493,
    MenuOptionsHeadingSaveData = 494,
    MenuOptionsHeadingTooltips = 495,
    MenuOptionsHeadingVideo = 496,
    MenuOptionsLabelInterfaceScale = 497,
    MenuOptionsLabelTooltipDelay = 498,
    MenuOptionsLabelDirectionTurnDelay = 499,
    MenuOptionsLabelMouseTurnDelay = 500,
    MenuOptionsTooltipTurnDelay = 501,
    MenuOptionsTooltipMouseTurnDelay = 502,
    MenuOptionsTooltipUiScaleClamped = 503,
    MenuOptionsTooltipControlsFilter = 504,
    MenuOptionsLabelVolumeEffects = 505,
    MenuOptionsLabelVolumeMusic = 506,
    MenuOptionsTabAudio = 507,
    MenuOptionsTabDeveloper = 508,
    MenuOptionsTabGameplay = 509,
    MenuOptionsTabGeneral = 510,
    MenuOptionsTabControls = 511,
    MenuOptionsTabMods = 512,
    MenuOptionsTabSaveData = 513,
    MenuOptionsTabVideo = 514,
    MenuOptionsTitle = 515,
    MenuOptionsTooltipMusicNextTrack = 516,
    MenuOptionsBindChoose = 517,
    MenuOptionsBindChooseAdd = 518,
    MenuOptionsBindLabelModifier = 519,
    MenuOptionsBindButtonResetTooltip = 520,
    MenuOptionsBindButtonDeleteTooltip = 521,
    MenuOptionsBindButtonAddTooltip = 522,
    MenuOptionsBindButtonAddMacroTooltip = 523,
    MenuOptionsButtonUnlockAllMilestones = 524,
    MenuOptionsButtonUnlockAllCraftingRecipes = 525,
    MenuOptionsButtonAlternatingDirectionMovement = 526,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 527,
    MenuOptionsButtonAlwaysShowMoreInformation = 528,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 529,
    MenuOptionsButtonAutoGatherHarvest = 530,
    MenuOptionsButtonAutoGatherHarvestTooltip = 531,
    MenuOptionsButtonDisableUIEffects = 532,
    MenuOptionsButtonDisableUIEffectsTooltip = 533,
    MenuOptionsButtonAutoAttack = 534,
    MenuOptionsButtonAutoAttackTooltip = 535,
    MenuOptionsButtonAutoPickup = 536,
    MenuOptionsButtonAutoPickupTooltip = 537,
    MenuOptionsButtonAutoPickupOnIdle = 538,
    MenuOptionsButtonAutoPickupOnIdleTooltip = 539,
    MenuOptionsButtonDropOnDismantle = 540,
    MenuOptionsButtonDropOnDismantleTooltip = 541,
    MenuOptionsButtonDropOnGatherHarvest = 542,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 543,
    MenuOptionsButtonKeepSortActive = 544,
    MenuOptionsButtonKeepSortActiveTooltip = 545,
    MenuOptionsButtonProtectCraftingItemContainers = 546,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 547,
    MenuOptionsButtonProtectCraftingItemsInInventory = 548,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 549,
    MenuOptionsButtonUseAdjacentContainers = 550,
    MenuOptionsButtonUseAdjacentContainersTooltip = 551,
    MenuOptionsButtonHideEquippedHeadgear = 552,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 553,
    MenuOptionsButtonAutoSave = 554,
    MenuOptionsButtonAutoSaveTooltip = 555,
    MenuOptionsRangeAutoSaveTimerLabel = 556,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 557,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 558,
    MenuOptionsButtonWarnOnDangerousActions = 559,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 560,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 561,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 562,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 563,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 564,
    MenuOptionsHeadingWarnWhenBreakingItems = 565,
    MenuOptionsButtonSaveDataClearBindings = 566,
    MenuOptionsTooltipDialogOpacity = 567,
    MenuOptionsLabelDialogOpacity = 568,
    MenuOptionsDeveloperLogSourceFilterHeading = 569,
    MenuOptionsDeveloperUIExperiments = 570,
    MenuOptionsDeveloperUIExperimentsDescription = 571,
    MenuOptionsAudioVolumeDisplay = 572,
    MenuOptionsAudioInputSoundOnTyping = 573,
    MenuOptionsMusicPlaylist = 574,
    MenuOptionsButtonConfigureBindings = 575,
    MenuPauseButtonContinue = 576,
    MenuPauseButtonOptions = 577,
    MenuPauseButtonModes = 578,
    MenuPauseButtonPaused = 579,
    MenuPauseButtonMultiplayer = 580,
    MenuPauseButtonTitleScreen = 581,
    MenuPauseButtonStopServer = 582,
    MenuPauseHeadingPaused = 583,
    MenuPauseParagraphPaused = 584,
    MenuPauseHeadingNotPaused = 585,
    MenuPauseParagraphNotPaused = 586,
    MenuPauseHeadingDedicatedServer = 587,
    MenuPauseParagraphDedicatedServer = 588,
    MenuModesTitle = 589,
    MenuModesDescription = 590,
    MenuMultiplayerOptionsTitle = 591,
    MenuMultiplayerOptionsDescription = 592,
    MenuMultiplayerOptionsOpenServer = 593,
    MenuMultiplayerOptionsOpenServerDescription = 594,
    MenuMultiplayerOptionsCopyGameCode = 595,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 596,
    MenuMultiplayerOptionsInviteSteamFriends = 597,
    MenuMultiplayerOptionsCheckConnectionHeading = 598,
    MenuMultiplayerOptionsCheckConnectionParagraph = 599,
    MenuMultiplayerOptionsCheckConnectionButton = 600,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 601,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 602,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 603,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 604,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 605,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 606,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 607,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 608,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 609,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 610,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 611,
    MenuJoinServerTitle = 612,
    MenuJoinServerDescription = 613,
    MenuJoinServerInputPlaceholder = 614,
    MenuJoinServerNext = 615,
    MenuJoinServerChooseModifiersTitle = 616,
    MenuJoinServerChooseModifiersDescription = 617,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 618,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 619,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 620,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 621,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 622,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 623,
    MenuSharedMultiplayerChoicePVP = 624,
    MenuSharedMultiplayerChoicePVPDescription = 625,
    MenuSharedMultiplayerDescription = 626,
    MenuSharedMultiplayerMessageOfTheDay = 627,
    MenuSharedMultiplayerMaxPlayers = 628,
    MenuSharedRealTimeTickSpeedTooltip = 629,
    MenuSharedRealTimeTickSpeedLabel = 630,
    MenuSharedButtonDefault = 631,
    MenuSharedValueMillseconds = 632,
    MenuSharedValuePercentage = 633,
    MenuSharedMilestonesNotUnlockable = 634,
    MenuSharedMilestonesNotUnlockableDescription = 635,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 636,
    MenuSharedButtonDisableAll = 637,
    MenuSharedButtonEnableAll = 638,
    MenuSharedMilestoneModifiersSelected = 639,
    MiscSortBy = 640,
    MiscSortDirection = 641,
    MiscFilter = 642,
    MiscPlayerNameDefault = 643,
    MiscPlayerNameServer = 644,
    MiscSaveNameDefault = 645,
    MiscSaveNameDailyChallenge = 646,
    MiscSaveNameChallenge = 647,
    MiscSaveVersionUnknown = 648,
    MiscVersion = 649,
    MiscTime = 650,
    MiscTimeMeridiem = 651,
    MiscBindableOr = 652,
    MiscBindableNoBindings = 653,
    DifficultyOptionsPeaceful = 654,
    DifficultyOptionsAberrantSpawnsDisabled = 655,
    DifficultyOptionsAberrantSpawnsOnly = 656,
    DifficultyOptionsCreatureSpawningDisabled = 657,
    DifficultyOptionsCreatureSpawnsDefault = 658,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 659,
    DifficultyOptionsCreatureSpawnsNoAberrants = 660,
    DifficultyOptionsSpawnLimit = 661,
    DifficultyOptionsRespawn = 662,
    DifficultyOptionsEternalNight = 663,
    DifficultyOptionsEternalDay = 664,
    DifficultyOptionsTimeInitial = 665,
    DifficultyOptionsTimeFrozen = 666,
    DifficultyOptionsTimeDayLength = 667,
    DifficultyOptionsTimeDayPercent = 668,
    DifficultyOptionsNoItems = 669,
    DifficultyOptionsBenignityInitial = 670,
    DifficultyOptionsBenignityMultiplier = 671,
    DifficultyOptionsMalignityInitial = 672,
    DifficultyOptionsMalignityMultiplier = 673,
    DifficultyOptionsWeightBonus = 674,
    DifficultyOptionsStatInitial = 675,
    DifficultyOptionsStatMax = 676,
    DifficultyOptionsStatMultiplier = 677,
    DifficultyOptionsStatusEffectStartWith = 678,
    DifficultyOptionsStatusEffectUntreatable = 679,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 680,
    DifficultyOptionsNoRandomSkills = 681,
    DifficultyOptionsSkillStartingCount = 682,
    DifficultyOptionsSkillGainMultiplier = 683,
    DifficultyOptionsSkillInitial = 684,
    DifficultyOptionsStatusEffectPermanent = 685,
    DifficultyOptionsStatusEffectRateMultiplier = 686,
    DifficultyOptionsStatusEffectMultiplier = 687,
    EquipmentBack = 688,
    EquipmentBelt = 689,
    EquipmentChest = 690,
    EquipmentFeet = 691,
    EquipmentHands = 692,
    EquipmentHead = 693,
    EquipmentLeftHand = 694,
    EquipmentLeftHandOption = 695,
    EquipmentLegs = 696,
    EquipmentNeck = 697,
    EquipmentRightHand = 698,
    EquipmentRightHandOption = 699,
    EquipmentUse = 700,
    HudFilter = 701,
    QuickSlot1 = 702,
    QuickSlot2 = 703,
    QuickSlot3 = 704,
    QuickSlot4 = 705,
    QuickSlot5 = 706,
    QuickSlot6 = 707,
    QuickSlot7 = 708,
    QuickSlot8 = 709,
    QuickSlot9 = 710,
    TabCrafting = 711,
    TabDismantle = 712,
    Version = 713,
    WindowTitleContainer = 714,
    WindowTitleCrafting = 715,
    WindowTitleEquipment = 716,
    WindowTitleInventory = 717
}
export default UiTranslation;
