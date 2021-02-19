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
    GameDialogMapTooltipCopyMap = 51,
    GameDialogMapTooltipCopyMapRequirementMissing = 52,
    GameDialogMapCheckButtonAlwaysOpaque = 53,
    GameDialogMapCheckButtonUseOnlyIntegerZoomLevels = 54,
    GameDialogMapLabelTheme = 55,
    GameDialogQuestsName = 56,
    GameDialogQuestsLink = 57,
    GameDialogQuestsChildQuests = 58,
    GameDialogQuestsRequirements = 59,
    GameDialogQuestsActiveQuests = 60,
    GameDialogQuestsCompletedQuests = 61,
    GameDialogQuestsCompleteQuest = 62,
    GameTooltipInspect = 63,
    GameTooltipShowMoreInformation = 64,
    GameTooltipMagicalMaxWeightLabel = 65,
    GameTooltipMagicalLabel = 66,
    GameTooltipItemUsesLabel = 67,
    GameTooltipItemUse = 68,
    GameTooltipItemUseActionOn = 69,
    GameTooltipItemUseActionOnPre = 70,
    GameTooltipItemUseActionOnPost = 71,
    GameTooltipItemUseActionOnConsume = 72,
    GameTooltipItemUseActionOnConsumeTooltipBase = 73,
    GameTooltipItemUseActionOnConsumeTooltipSkill = 74,
    GameTooltipItemUseActionOnConsumeTooltipMagical = 75,
    GameTooltipItemUseActionTierQualityIncrease = 76,
    GameTooltipItemUseActionTierLabel = 77,
    GameTooltipItemUseThrowDamageType = 78,
    GameTooltipItemDecay = 79,
    GameTooltipItemDecayExact = 80,
    GameTooltipItemDecayRate = 81,
    GameTooltipItemDecayRateTooltip = 82,
    GameTooltipItemWeight = 83,
    GameTooltipItemWeightStored = 84,
    GameTooltipItemWeightStoredReduction = 85,
    GameTooltipItemWeightStoredReductionVerbose = 86,
    GameTooltipSharedWeightCapacity = 87,
    GameTooltipSharedLabelWeightCapacity = 88,
    GameTooltipSharedWeightCapacityVerbose = 89,
    GameTooltipSharedLabelInsulation = 90,
    GameTooltipSharedLabelPreservation = 91,
    GameTooltipSharedLabelDurability = 92,
    GameTooltipSharedDurabilityMagicalDamageReduction = 93,
    GameTooltipSharedLabelContents = 94,
    GameTooltipSharedContents = 95,
    GameTooltipItemMagicalSource = 96,
    GameTooltipItemGroupingsLabel = 97,
    GameTooltipItemGroup = 98,
    GameTooltipItemWorth = 99,
    GameTooltipItemWorthMagicalBonus = 100,
    GameTooltipItemProtected = 101,
    GameTooltipItemProtectedContainer = 102,
    GameTooltipItemProtectedTooltip = 103,
    GameTooltipSkillCurrent = 104,
    GameTooltipSkillReputationImpact = 105,
    GameTooltipSkillCanIncrease = 106,
    GameTooltipSkillBonuses = 107,
    GameTooltipSkillBonus = 108,
    GameTooltipSharedMagicalProperty = 109,
    GameTooltipSharedMagicalPropertyOutOf = 110,
    GameTooltipSharedLabel = 111,
    GameTooltipItemUseEquipAttack = 112,
    GameTooltipItemUseEquipDefense = 113,
    GameTooltipItemUseEquipDefenseResistances = 114,
    GameTooltipItemUseEquipDefenseAttribute = 115,
    GameTooltipItemUseEquipDefenseVulnerabilities = 116,
    GameStatsPercentage = 117,
    GameStatsStatAttack = 118,
    GameStatsStatGeneric = 119,
    GameStatsStatGenericWithMax = 120,
    GameStatsStatbar = 121,
    GameStatsStatHealthTooltip = 122,
    GameStatsStatStaminaTooltip = 123,
    GameStatsStatHungerTooltip = 124,
    GameStatsStatThirstTooltip = 125,
    GameStatsStatHealthStatusWarning = 126,
    GameStatsStatStaminaStatusWarning = 127,
    GameStatsStatHungerStatusWarning = 128,
    GameStatsStatThirstStatusWarning = 129,
    GameStatsStatWeightStatusWarning = 130,
    GameStatsStatStaminaStatusBad = 131,
    GameStatsStatHungerStatusBad = 132,
    GameStatsStatThirstStatusBad = 133,
    GameStatsStatWeightStatusBad = 134,
    GameStatsStatReputationTooltipAverageReputation = 135,
    GameStatsStatReputationTooltipDifficulty = 136,
    GameStatsStatReputationTooltipDifficultyEasy = 137,
    GameStatsStatReputationTooltipDifficultyHard = 138,
    GameStatsStatReputationTooltipDifficultyInfantile = 139,
    GameStatsStatReputationTooltipDifficultyInsane = 140,
    GameStatsStatReputationTooltipDifficultyMedium = 141,
    GameStatsStatReputationTooltipDifficultyNightmare = 142,
    GameStatsStatReputationTooltipDifficultySimple = 143,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 144,
    GameStatsStatReputationTooltipDifficultyVeryHard = 145,
    GameStatsStatReputationTooltipBenignity = 146,
    GameStatsStatReputationTooltipMalignity = 147,
    GameStatsStatReputationTooltipScore = 148,
    GameStatsStatReputationTooltipTurn = 149,
    GameStatsStatReputationTooltipTicks = 150,
    GameStatsStatWeightTooltip = 151,
    GameStatsStatAttackTooltipTactics = 152,
    GameStatsStatAttackTooltipLeftHand = 153,
    GameStatsStatAttackTooltipRightHand = 154,
    GameStatsStatDefenseTooltipBase = 155,
    GameStatsStatDefenseTooltipBlunt = 156,
    GameStatsStatDefenseTooltipParrying = 157,
    GameStatsStatDefenseTooltipFire = 158,
    GameStatsStatDefenseTooltipCold = 159,
    GameStatsStatDefenseTooltipPiercing = 160,
    GameStatsStatDefenseTooltipSlashing = 161,
    GameItemBarterCredit = 162,
    GameItemBarterCreditTrade = 163,
    GameMenuBarButtonTooltipBindable = 164,
    GameMenuBarButtonTooltipMenu = 165,
    GameMenuBarButtonTooltipSave = 166,
    GameMenuBarButtonTooltipSaveSize = 167,
    GameMenuBarButtonTooltipSaveTurnsAgo = 168,
    GameMenuBarButtonTooltipSaveLastTime = 169,
    GameMenuBarButtonTooltipNotes = 170,
    GameMenuBarButtonTooltipNotesUnread = 171,
    GameMenuBarButtonTooltipMilestones = 172,
    GameMenuBarButtonTooltipMilestonesDisabled = 173,
    GameMenuBarButtonTooltipMessages = 174,
    GameMenuBarButtonTooltipHelp = 175,
    GameMenuBarButtonTooltipQuickSettings = 176,
    GameMenuBarButtonTooltipActions = 177,
    GameMenuBarButtonTooltipInventory = 178,
    GameMenuBarButtonTooltipCrafting = 179,
    GameMenuBarButtonTooltipEquipment = 180,
    GameMenuBarButtonTooltipSkills = 181,
    GameMenuBarButtonTooltipQuests = 182,
    GameMenuBarButtonTooltipQuestsDisabled = 183,
    GameMessagesButtonSend = 184,
    GameMessagesContextMenuShowAsDialog = 185,
    GameMessagesContextMenuClear = 186,
    GameMessagesContextMenuCopy = 187,
    GameMessagesContextMenuExport = 188,
    GameMessagesFilter = 189,
    GameMessagesFiltersEdit = 190,
    GameMessagesNewNote = 191,
    GameMessagesTurn = 192,
    GameMessagesDedicatedServerBackup = 193,
    GameMessagesDedicatedServerBackupLimitReached = 194,
    GameTileInspectionCannotSeeTile = 195,
    MenuAboutTitle = 196,
    MenuAboutDescription = 197,
    MenuAboutGameDescription = 198,
    MenuAboutSectionTeam = 199,
    MenuAboutTeamMemberResponsibilities = 200,
    MenuAboutTeamMemberName = 201,
    MenuAboutTeamMemberNickname = 202,
    MenuAboutSectionContributors = 203,
    MenuAboutSectionSpecialThanks = 204,
    MenuAboutTextSpecialThanksTestorsAndDonators = 205,
    MenuAboutSectionLibraries = 206,
    MenuAboutSectionLibrariesDescription = 207,
    MenuBindings = 208,
    MenuBindingsDescription = 209,
    MenuBindingsTooltipBindConflicts = 210,
    MenuChangelogTitle = 211,
    MenuChangelogDescription = 212,
    MenuChangelogHeadingFailedLoad = 213,
    MenuChangelogHeadingChangeCount = 214,
    MenuCharacterCreationButtonRandomizeName = 215,
    MenuCharacterCreationButtonExportTooltip = 216,
    MenuCharacterCreationButtonImportTooltip = 217,
    MenuCharacterCreationButtonStartGame = 218,
    MenuCharacterCreationButtonJoinGame = 219,
    MenuCharacterCreationDescription = 220,
    MenuCharacterCreationHeadingHairColor = 221,
    MenuCharacterCreationHeadingHairStyle = 222,
    MenuCharacterCreationHeadingSkinTone = 223,
    MenuCharacterCreationLabelName = 224,
    MenuCharacterCreationTitle = 225,
    MenuCharacterCreationButtonRotateLeftTooltip = 226,
    MenuCharacterCreationButtonRotateRightTooltip = 227,
    MenuCharacterCreationButtonRandomizeTooltip = 228,
    MenuCharacterSelectionButtonNewCharacter = 229,
    MenuCharacterSelectionDescription = 230,
    MenuCharacterSelectionHeadingNoCharacters = 231,
    MenuCharacterSelectionTitle = 232,
    MenuCharacterSelectionLabelLastUse = 233,
    MenuCharacterSelectionLabelUseCount = 234,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 235,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 236,
    MenuMultiplayerDescription = 237,
    MenuMultiplayerTitle = 238,
    MenuMultiplayerButtonJoinById = 239,
    MenuMultiplayerServerLabelReputation = 240,
    MenuMultiplayerServerLabelDays = 241,
    MenuMultiplayerServerLabelIsland = 242,
    MenuMultiplayerButtonNewGame = 243,
    MenuMultiplayerButtonLoadGame = 244,
    MenuMultiplayerServerTooltipPVP = 245,
    MenuMultiplayerServerTooltipModsLabel = 246,
    MenuMultiplayerServerTooltipFriendsLabel = 247,
    MenuMultiplayerServerPlayers = 248,
    MenuMultiplayerServerLobbyType = 249,
    MenuMultiplayerServerRegion = 250,
    MenuMultiplayerServerHost = 251,
    MenuMultiplayerServerVersion = 252,
    MenuMultiplayerServerVersionUnknown = 253,
    MenuMultiplayerServerDedicated = 254,
    MenuMultiplayerHeadingPlayersOnline = 255,
    MenuMultiplayerServerModUnableToLoad = 256,
    MenuGameEndTitleDead = 257,
    MenuGameEndTitleWon = 258,
    MenuGameEndShareFacebook = 259,
    MenuGameEndShareTwitter = 260,
    MenuGameEndContinueAsGhost = 261,
    MenuGameEndReturnToIsland = 262,
    MenuGameEndExitToMenu = 263,
    MenuHelpTitle = 264,
    MenuHelpDescription = 265,
    MenuHelpLabelSearch = 266,
    MenuHighscoresTitle = 267,
    MenuHighscoresDescription = 268,
    MenuHighscoresDifficultyFilterAll = 269,
    MenuHighscoresHighscoreLabelDifficulty = 270,
    MenuHighscoresHighscoreLabelTurns = 271,
    MenuHighscoresHighscoreLabelScore = 272,
    MenuHighscoresHighscoreLabelPlace = 273,
    MenuHighscoresHighscoreLabelDate = 274,
    MenuHighscoresHighscoreLabelDeathBy = 275,
    MenuHighscoresHighscoreTitle = 276,
    MenuHighscoresCharacterNameUnknown = 277,
    MenuHighscoresHighscoreReplayWithSettings = 278,
    MenuLoadGameButtonNewGame = 279,
    MenuLoadGameButtonNewGameButtonImportTooltip = 280,
    MenuLoadGameDescription = 281,
    MenuLoadGameSaveButtonDeleteTooltip = 282,
    MenuLoadGameSaveButtonEditNameTooltip = 283,
    MenuLoadGameSaveButtonExportTooltip = 284,
    MenuLoadGameSaveTooltipLabelCreatedTime = 285,
    MenuLoadGameSaveTooltipLabelSaveTime = 286,
    MenuLoadGameSaveTooltipLabelGameMode = 287,
    MenuLoadGameSaveTooltipLabelScore = 288,
    MenuLoadGameSaveTooltipLabelSeed = 289,
    MenuLoadGameSaveTooltipLabelTurns = 290,
    MenuLoadGameSaveTooltipLabelMods = 291,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 292,
    MenuLoadGameSaveTooltipMod = 293,
    MenuLoadGameSaveTooltipNew = 294,
    MenuLoadGameSlotsRemaining = 295,
    MenuLoadGameSaveGame = 296,
    MenuLoadGameSaveGameDescription = 297,
    MenuLoadGameTitle = 298,
    MenuLoadGameLabelSelected = 299,
    MenuLoadGameButtonDeleteSelectedTooltip = 300,
    MenuMainButtonAbout = 301,
    MenuMainButtonChangelog = 302,
    MenuMainButtonContinueGame = 303,
    MenuMainButtonMultiplayer = 304,
    MenuMainButtonHighscores = 305,
    MenuMainButtonLoadGame = 306,
    MenuMainButtonMods = 307,
    MenuMainButtonNewGame = 308,
    MenuMainButtonNews = 309,
    MenuMainButtonOptions = 310,
    MenuMainButtonQuitGame = 311,
    MenuModsButtonModdingGuide = 312,
    MenuModsButtonOpenFolder = 313,
    MenuModsButtonOpenWorkshop = 314,
    MenuModsDescription = 315,
    MenuModsTitle = 316,
    MenuModsTooltipLabelAuthor = 317,
    MenuModsTooltipLabelTags = 318,
    MenuModsTooltipLabelDependencies = 319,
    MenuModsTooltipLabelProvides = 320,
    MenuModsTooltipLabelVersion = 321,
    MenuModsTooltipLabelDescription = 322,
    MenuModsTooltipLabelInstallDate = 323,
    MenuModsTooltipLabelCreatedDate = 324,
    MenuModsTooltipLabelLastUpdatedDate = 325,
    MenuModsTooltipPreventsMilestoneUnlocks = 326,
    MenuModsTooltipModOptions = 327,
    MenuModsTooltipPublishMod = 328,
    MenuModsTooltipModMoreInformation = 329,
    MenuModsTooltipUninstallMod = 330,
    MenuModsTooltipViewInSteamWorkshop = 331,
    MenuModsTooltipViewGitHub = 332,
    MenuModsTooltipOpenFolder = 333,
    MenuModsButtonEditInternalMods = 334,
    MenuModsSectionHeading = 335,
    MenuModsSubmenuEditInternalModsTitle = 336,
    MenuModsSubmenuEditInternalModsDescription = 337,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 338,
    MenuNewGameButtonNext = 339,
    MenuNewGameButtonStartServer = 340,
    MenuNewGameDescription = 341,
    MenuNewGameLabelEditName = 342,
    MenuNewGameLabelEditSeed = 343,
    MenuNewGamePlaceholderEditSeed = 344,
    MenuNewGameTitle = 345,
    MenuNewGameChoiceDifficulty = 346,
    MenuNewGameChoiceSingleplayer = 347,
    MenuNewGameChoiceSingleplayerDescription = 348,
    MenuNewGameChoiceMultiplayer = 349,
    MenuNewGameChoiceMultiplayerDescription = 350,
    MenuNewGameChoiceTurnModeManual = 351,
    MenuNewGameChoiceTurnModeManualDescription = 352,
    MenuNewGameChoiceTurnModeRealTime = 353,
    MenuNewGameChoiceTurnModeRealTimeDescription = 354,
    MenuNewGameChoiceTurnModeSimulated = 355,
    MenuNewGameChoiceTurnModeSimulatedDescription = 356,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 357,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 358,
    MenuNewGameChoiceDifficultyChallengeDaily = 359,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 360,
    MenuNewGameButtonMilestones = 361,
    MenuNewGameButtonMilestonesDescription = 362,
    MenuNewGameTabGameMode = 363,
    MenuNewGameTabMultiplayer = 364,
    MenuNewGameTabGameplayModifiers = 365,
    MenuNewGameHeadingGameMode = 366,
    MenuNewGameHeadingMultiplayer = 367,
    MenuNewGameHeadingGameplayModifiers = 368,
    MenuNewGameChoiceClientsInheritHostModifiers = 369,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 370,
    MenuNewGameChoiceCustomModifiers = 371,
    MenuNewGameChoiceCustomModifiersDescription = 372,
    MenuMilestoneModifiersTitle = 373,
    MenuMilestoneModifiersDescription = 374,
    MenuCustomGameOptionsTitle = 375,
    MenuCustomGameOptionsDescription = 376,
    MenuCustomGameOptionsRespawnOnDeath = 377,
    MenuCustomGameOptionsRespawnOnDeathDescription = 378,
    MenuCustomGameOptionsUseUnlockedRecipes = 379,
    MenuCustomGameOptionsStartingIslandBiome = 380,
    MenuCustomGameOptionsApplyTravelingEffects = 381,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 382,
    MenuCustomGameOptionsCreaturesPeaceful = 383,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 384,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 385,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 386,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 387,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 388,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 389,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 390,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 391,
    MenuCustomGameOptionsCreaturesAllowSpawning = 392,
    MenuCustomGameOptionsCreaturesSpawnLimit = 393,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 394,
    MenuCustomGameOptionsCreatureNone = 395,
    MenuCustomGameOptionsCreatureConfigure = 396,
    MenuCustomGameOptionsBenignityInitial = 397,
    MenuCustomGameOptionsBenignityMultiplier = 398,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 399,
    MenuCustomGameOptionsMalignityInitial = 400,
    MenuCustomGameOptionsMalignityMultiplier = 401,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 402,
    MenuCustomGameOptionsStatMultiplier = 403,
    MenuCustomGameOptionsStatMultiplierTooltip = 404,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 405,
    MenuCustomGameOptionsHeadingGeneral = 406,
    MenuCustomGameOptionsHeadingIsland = 407,
    MenuCustomGameOptionsHeadingTime = 408,
    MenuCustomGameOptionsHeadingStats = 409,
    MenuCustomGameOptionsHeadingReputation = 410,
    MenuCustomGameOptionsHeadingInventory = 411,
    MenuCustomGameOptionsHeadingCreatures = 412,
    MenuCustomGameOptionsHeadingSkills = 413,
    MenuCustomGameOptionsHeadingStatusEffects = 414,
    MenuCustomGameOptionsEternalNight = 415,
    MenuCustomGameOptionsEternalNightDescription = 416,
    MenuCustomGameOptionsEternalDay = 417,
    MenuCustomGameOptionsEternalDayDescription = 418,
    MenuCustomGameOptionsTimeFrozen = 419,
    MenuCustomGameOptionsTimeInitial = 420,
    MenuCustomGameOptionsTimeDayLength = 421,
    MenuCustomGameOptionsTimeDayLengthTooltip = 422,
    MenuCustomGameOptionsTimeDayPercent = 423,
    MenuCustomGameOptionsTimeDayPercentTooltip = 424,
    MenuCustomGameOptionsStatStarting = 425,
    MenuCustomGameOptionsStatMax = 426,
    MenuCustomGameOptionsStatStartingDisplay = 427,
    MenuCustomGameOptionsStatMaxDisplay = 428,
    MenuCustomGameOptionsStatNoChange = 429,
    MenuCustomGameOptionsStatBonus = 430,
    MenuCustomGameOptionsStatBonusDisplay = 431,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 432,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 433,
    MenuCustomGameOptionsStatusEffectStartWith = 434,
    MenuCustomGameOptionsStatusEffectUntreatable = 435,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 436,
    MenuCustomGameOptionsSkillInitialRandomCount = 437,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 438,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 439,
    MenuCustomGameOptionsSkillsGlobal = 440,
    MenuCustomGameOptionsSkillNone = 441,
    MenuCustomGameOptionsSkillConfigure = 442,
    MenuCustomGameOptionsSkillInitial = 443,
    MenuCustomGameOptionsSkillMultiplier = 444,
    MenuCustomGameOptionsSkillMultiplierTooltip = 445,
    MenuCustomGameOptionsRandomItems = 446,
    MenuCustomGameOptionsRandomItemsDescription = 447,
    MenuCustomGameOptionsExport = 448,
    MenuCustomGameOptionsImport = 449,
    MenuNewsDescription = 450,
    MenuNewsHeadingSocial = 451,
    MenuNewsTitle = 452,
    MenuNewsHeadingUnableToLoad = 453,
    MenuNewsButtonAllNews = 454,
    MenuOptionsButtonDitherFogOfWar = 455,
    MenuOptionsButtonDisableCustomCursor = 456,
    MenuOptionsButtonDisplayArticleInObjectNames = 457,
    MenuOptionsButtonFullscreen = 458,
    MenuOptionsButtonDeveloperMode = 459,
    MenuOptionsButtonDeveloperModeContextMenu = 460,
    MenuOptionsButtonPixelFont = 461,
    MenuOptionsButtonReloadGame = 462,
    MenuOptionsButtonReloadStylesheets = 463,
    MenuOptionsButtonExportGlobalSaveData = 464,
    MenuOptionsButtonImportGlobalSaveData = 465,
    MenuOptionsButtonSaveDataClearAll = 466,
    MenuOptionsButtonSaveDataClearCharacters = 467,
    MenuOptionsButtonSaveDataClearHighscores = 468,
    MenuOptionsButtonSaveDataClearMilestones = 469,
    MenuOptionsButtonSaveDataClearOptions = 470,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 471,
    MenuOptionsButtonSaveDataClearSaves = 472,
    MenuOptionsButtonSkipSplash = 473,
    MenuOptionsButtonToggleDevTools = 474,
    MenuOptionsButtonTooltipsCreatures = 475,
    MenuOptionsButtonOpenLogsFolder = 476,
    MenuOptionsButtonTooltipsDoodads = 477,
    MenuOptionsButtonTooltipsItems = 478,
    MenuOptionsButtonTooltipsTerrain = 479,
    MenuOptionsButtonDropLocationFacing = 480,
    MenuOptionsButtonDropLocationFeet = 481,
    MenuOptionsButtonStartTraceRecording = 482,
    MenuOptionsButtonStopTraceRecording = 483,
    MenuOptionsButtonTracingRecordingtTooltip = 484,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 485,
    MenuOptionsDescription = 486,
    MenuOptionsHeadingAudio = 487,
    MenuOptionsHeadingDeveloper = 488,
    MenuOptionsHeadingGameplayOptions = 489,
    MenuOptionsHeadingGeneralOptions = 490,
    MenuOptionsHeadingControls = 491,
    MenuOptionsHeadingLanguage = 492,
    MenuOptionsHeadingPowerPreference = 493,
    MenuOptionsHeadingModOptions = 494,
    MenuOptionsHeadingOther = 495,
    MenuOptionsHeadingSaveData = 496,
    MenuOptionsHeadingTooltips = 497,
    MenuOptionsHeadingTooltipsTile = 498,
    MenuOptionsHeadingVideo = 499,
    MenuOptionsLabelInterfaceScale = 500,
    MenuOptionsLabelTooltipDelay = 501,
    MenuOptionsLabelDirectionTurnDelay = 502,
    MenuOptionsLabelMouseTurnDelay = 503,
    MenuOptionsTooltipTurnDelay = 504,
    MenuOptionsTooltipMouseTurnDelay = 505,
    MenuOptionsTooltipUiScaleClamped = 506,
    MenuOptionsTooltipControlsFilter = 507,
    MenuOptionsLabelVolumeEffects = 508,
    MenuOptionsLabelVolumeMusic = 509,
    MenuOptionsTabAudio = 510,
    MenuOptionsTabDeveloper = 511,
    MenuOptionsTabGameplay = 512,
    MenuOptionsTabGeneral = 513,
    MenuOptionsTabControls = 514,
    MenuOptionsTabMods = 515,
    MenuOptionsTabSaveData = 516,
    MenuOptionsTabVideo = 517,
    MenuOptionsTitle = 518,
    MenuOptionsTooltipMusicNextTrack = 519,
    MenuOptionsBindChoose = 520,
    MenuOptionsBindChooseAdd = 521,
    MenuOptionsBindLabelModifier = 522,
    MenuOptionsBindButtonResetTooltip = 523,
    MenuOptionsBindButtonDeleteTooltip = 524,
    MenuOptionsBindButtonAddTooltip = 525,
    MenuOptionsBindButtonAddMacroTooltip = 526,
    MenuOptionsButtonUnlockAllMilestones = 527,
    MenuOptionsButtonUnlockAllCraftingRecipes = 528,
    MenuOptionsButtonAlternatingDirectionMovement = 529,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 530,
    MenuOptionsButtonAlwaysShowMoreInformation = 531,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 532,
    MenuOptionsButtonAutoGatherHarvest = 533,
    MenuOptionsButtonAutoGatherHarvestTooltip = 534,
    MenuOptionsButtonDisableUIEffects = 535,
    MenuOptionsButtonDisableUIEffectsTooltip = 536,
    MenuOptionsButtonAutoAttack = 537,
    MenuOptionsButtonAutoAttackTooltip = 538,
    MenuOptionsButtonAutoPickup = 539,
    MenuOptionsButtonAutoPickupTooltip = 540,
    MenuOptionsButtonAutoPickupOnIdle = 541,
    MenuOptionsButtonAutoPickupOnIdleTooltip = 542,
    MenuOptionsButtonDropOnDismantle = 543,
    MenuOptionsButtonDropOnDismantleTooltip = 544,
    MenuOptionsButtonDropOnGatherHarvest = 545,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 546,
    MenuOptionsButtonKeepSortActive = 547,
    MenuOptionsButtonKeepSortActiveTooltip = 548,
    MenuOptionsButtonProtectCraftingItemContainers = 549,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 550,
    MenuOptionsButtonProtectCraftingItemsInInventory = 551,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 552,
    MenuOptionsButtonUseAdjacentContainers = 553,
    MenuOptionsButtonUseAdjacentContainersTooltip = 554,
    MenuOptionsButtonHideEquippedHeadgear = 555,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 556,
    MenuOptionsButtonAutoSave = 557,
    MenuOptionsButtonAutoSaveTooltip = 558,
    MenuOptionsRangeAutoSaveTimerLabel = 559,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 560,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 561,
    MenuOptionsButtonWarnOnDangerousActions = 562,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 563,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 564,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 565,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 566,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 567,
    MenuOptionsHeadingWarnWhenBreakingItems = 568,
    MenuOptionsButtonSaveDataClearBindings = 569,
    MenuOptionsTooltipDialogOpacity = 570,
    MenuOptionsLabelDialogOpacity = 571,
    MenuOptionsDeveloperLogSourceFilterHeading = 572,
    MenuOptionsDeveloperUIExperiments = 573,
    MenuOptionsDeveloperUIExperimentsDescription = 574,
    MenuOptionsAudioVolumeDisplay = 575,
    MenuOptionsAudioInputSoundOnTyping = 576,
    MenuOptionsMusicPlaylist = 577,
    MenuOptionsButtonConfigureBindings = 578,
    MenuPauseButtonContinue = 579,
    MenuPauseButtonOptions = 580,
    MenuPauseButtonModes = 581,
    MenuPauseButtonPaused = 582,
    MenuPauseButtonMultiplayer = 583,
    MenuPauseButtonTitleScreen = 584,
    MenuPauseButtonStopServer = 585,
    MenuPauseHeadingPaused = 586,
    MenuPauseParagraphPaused = 587,
    MenuPauseHeadingNotPaused = 588,
    MenuPauseParagraphNotPaused = 589,
    MenuPauseHeadingDedicatedServer = 590,
    MenuPauseParagraphDedicatedServer = 591,
    MenuModesTitle = 592,
    MenuModesDescription = 593,
    MenuMultiplayerOptionsTitle = 594,
    MenuMultiplayerOptionsDescription = 595,
    MenuMultiplayerOptionsOpenServer = 596,
    MenuMultiplayerOptionsOpenServerDescription = 597,
    MenuMultiplayerOptionsCopyGameCode = 598,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 599,
    MenuMultiplayerOptionsInviteSteamFriends = 600,
    MenuMultiplayerOptionsCheckConnectionHeading = 601,
    MenuMultiplayerOptionsCheckConnectionParagraph = 602,
    MenuMultiplayerOptionsCheckConnectionButton = 603,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 604,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 605,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 606,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 607,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 608,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 609,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 610,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 611,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 612,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 613,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 614,
    MenuJoinServerTitle = 615,
    MenuJoinServerDescription = 616,
    MenuJoinServerInputPlaceholder = 617,
    MenuJoinServerNext = 618,
    MenuJoinServerChooseModifiersTitle = 619,
    MenuJoinServerChooseModifiersDescription = 620,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 621,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 622,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 623,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 624,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 625,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 626,
    MenuSharedMultiplayerChoicePVP = 627,
    MenuSharedMultiplayerChoicePVPDescription = 628,
    MenuSharedMultiplayerDescription = 629,
    MenuSharedMultiplayerMessageOfTheDay = 630,
    MenuSharedMultiplayerMaxPlayers = 631,
    MenuSharedRealTimeTickSpeedTooltip = 632,
    MenuSharedRealTimeTickSpeedLabel = 633,
    MenuSharedButtonDefault = 634,
    MenuSharedValueMillseconds = 635,
    MenuSharedValuePercentage = 636,
    MenuSharedMilestonesNotUnlockable = 637,
    MenuSharedMilestonesNotUnlockableDescription = 638,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 639,
    MenuSharedButtonDisableAll = 640,
    MenuSharedButtonEnableAll = 641,
    MenuSharedMilestoneModifiersSelected = 642,
    MiscSortBy = 643,
    MiscSortDirection = 644,
    MiscFilter = 645,
    MiscPlayerNameDefault = 646,
    MiscPlayerNameServer = 647,
    MiscSaveNameDefault = 648,
    MiscSaveNameDailyChallenge = 649,
    MiscSaveNameChallenge = 650,
    MiscSaveVersionUnknown = 651,
    MiscVersion = 652,
    MiscTime = 653,
    MiscTimeMeridiem = 654,
    MiscBindableOr = 655,
    MiscBindableNoBindings = 656,
    DifficultyOptionsPeaceful = 657,
    DifficultyOptionsAberrantSpawnsDisabled = 658,
    DifficultyOptionsAberrantSpawnsOnly = 659,
    DifficultyOptionsCreatureSpawningDisabled = 660,
    DifficultyOptionsCreatureSpawnsDefault = 661,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 662,
    DifficultyOptionsCreatureSpawnsNoAberrants = 663,
    DifficultyOptionsSpawnLimit = 664,
    DifficultyOptionsRespawn = 665,
    DifficultyOptionsEternalNight = 666,
    DifficultyOptionsEternalDay = 667,
    DifficultyOptionsTimeInitial = 668,
    DifficultyOptionsTimeFrozen = 669,
    DifficultyOptionsTimeDayLength = 670,
    DifficultyOptionsTimeDayPercent = 671,
    DifficultyOptionsNoItems = 672,
    DifficultyOptionsBenignityInitial = 673,
    DifficultyOptionsBenignityMultiplier = 674,
    DifficultyOptionsMalignityInitial = 675,
    DifficultyOptionsMalignityMultiplier = 676,
    DifficultyOptionsWeightBonus = 677,
    DifficultyOptionsStatInitial = 678,
    DifficultyOptionsStatMax = 679,
    DifficultyOptionsStatMultiplier = 680,
    DifficultyOptionsStatusEffectStartWith = 681,
    DifficultyOptionsStatusEffectUntreatable = 682,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 683,
    DifficultyOptionsNoRandomSkills = 684,
    DifficultyOptionsSkillStartingCount = 685,
    DifficultyOptionsSkillGainMultiplier = 686,
    DifficultyOptionsSkillInitial = 687,
    DifficultyOptionsStatusEffectPermanent = 688,
    DifficultyOptionsStatusEffectRateMultiplier = 689,
    DifficultyOptionsStatusEffectMultiplier = 690,
    EquipmentBack = 691,
    EquipmentBelt = 692,
    EquipmentChest = 693,
    EquipmentFeet = 694,
    EquipmentHands = 695,
    EquipmentHead = 696,
    EquipmentLeftHand = 697,
    EquipmentLeftHandOption = 698,
    EquipmentLegs = 699,
    EquipmentNeck = 700,
    EquipmentRightHand = 701,
    EquipmentRightHandOption = 702,
    EquipmentUse = 703,
    HudFilter = 704,
    QuickSlot1 = 705,
    QuickSlot2 = 706,
    QuickSlot3 = 707,
    QuickSlot4 = 708,
    QuickSlot5 = 709,
    QuickSlot6 = 710,
    QuickSlot7 = 711,
    QuickSlot8 = 712,
    QuickSlot9 = 713,
    TabCrafting = 714,
    TabDismantle = 715,
    Version = 716,
    WindowTitleContainer = 717,
    WindowTitleCrafting = 718,
    WindowTitleEquipment = 719,
    WindowTitleInventory = 720
}
export default UiTranslation;
