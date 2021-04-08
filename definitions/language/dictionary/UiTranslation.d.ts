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
    GameSharedInspectionSectionSummary = 0,
    GameActionGather = 1,
    GameStaticButtonRespawn = 2,
    GameDialogSharedContextMenuResetPosition = 3,
    GameDialogCraftingName = 4,
    GameDialogMessagesName = 5,
    GameDialogMessagesOptionTimestamp = 6,
    GameDialogMessagesOptionShowSendButton = 7,
    GameDialogMessagesOptionShowOptionsButton = 8,
    GameDialogMessagesOptionMaxMessages = 9,
    GameDialogMessagesEditFiltersName = 10,
    GameDialogMessagesEditFiltersLabelName = 11,
    GameDialogMessagesEditFiltersButtonDelete = 12,
    GameDialogMessagesEditFiltersButtonSave = 13,
    GameDialogMessagesEditFiltersButtonReset = 14,
    GameDialogMessagesEditFiltersButtonNew = 15,
    GameDialogNotesName = 16,
    GameDialogNotesNoteTime = 17,
    GameDialogNotesNoteNumber = 18,
    GameDialogNotesNoteLockedTitle = 19,
    GameDialogNotesNoteLockedDescription = 20,
    GameDialogNotesLinkId = 21,
    GameDialogNotesLinkLearnMore = 22,
    GameDialogNotesSettingsPinUnreadNotesAutomatically = 23,
    GameDialogQuickSettingsName = 24,
    GameDialogMilestonesName = 25,
    GameDialogMilestonesInvisibleMilestone = 26,
    GameDialogMilestonesProgress = 27,
    GameDialogMilestonesProgressHidden = 28,
    GameDialogMilestonesMilestone = 29,
    GameDialogMilestonesTooltipHidden = 30,
    GameDialogMilestonesTooltipInvisible = 31,
    GameDialogMilestonesSortName = 32,
    GameDialogMilestonesSortProgress = 33,
    GameDialogSkillsName = 34,
    GameDialogSkillsSkill = 35,
    GameDialogSkillsSkillHover = 36,
    GameDialogSkillsSortName = 37,
    GameDialogSkillsSortLevel = 38,
    GameDialogBookName = 39,
    GameDialogInspectName = 40,
    GameDialogMoreInformationName = 41,
    GameDialogMoreInformationText = 42,
    GameDialogMoreInformationNoInformation = 43,
    GameDialogMapName = 44,
    GameDialogMapDurability = 45,
    GameDialogMapTooltipRiddle = 46,
    GameDialogMapTooltipRotateClockwise = 47,
    GameDialogMapTooltipRotateCounterClockwise = 48,
    GameDialogMapTooltipFlipHorizontal = 49,
    GameDialogMapTooltipFlipVertical = 50,
    GameDialogMapTooltipResetView = 51,
    GameDialogMapTooltipCopyMap = 52,
    GameDialogMapTooltipCopyMapRequirementMissing = 53,
    GameDialogMapCheckButtonAlwaysOpaque = 54,
    GameDialogMapCheckButtonUseOnlyIntegerZoomLevels = 55,
    GameDialogMapLabelTheme = 56,
    GameDialogQuestsName = 57,
    GameDialogQuestsLink = 58,
    GameDialogQuestsChildQuests = 59,
    GameDialogQuestsRequirements = 60,
    GameDialogQuestsActiveQuests = 61,
    GameDialogQuestsCompletedQuests = 62,
    GameDialogQuestsCompleteQuest = 63,
    GameTooltipInspect = 64,
    GameTooltipShowMoreInformation = 65,
    GameTooltipItemUseLabelMaxWeight = 66,
    GameTooltipMagicalLabel = 67,
    GameTooltipSharedUsesLabel = 68,
    GameTooltipRecipeLabelReputation = 69,
    GameTooltipRecipeLabelSkill = 70,
    GameTooltipRecipeLabelLevel = 71,
    GameTooltipRecipeNearby = 72,
    GameTooltipRecipeFireSource = 73,
    GameTooltipRecipeRequirement = 74,
    GameTooltipRecipeLabelRequired = 75,
    GameTooltipRecipeLabelConsumed = 76,
    GameTooltipItemSkillSource = 77,
    GameTooltipItemUse = 78,
    GameTooltipItemUseActionOn = 79,
    GameTooltipItemUseActionOnPre = 80,
    GameTooltipItemUseActionOnPost = 81,
    GameTooltipItemUseActionOnConsume = 82,
    GameTooltipItemUseActionOnConsumeTooltipBase = 83,
    GameTooltipItemUseActionOnConsumeTooltipSkill = 84,
    GameTooltipItemUseActionOnConsumeTooltipMagical = 85,
    GameTooltipItemUseActionTierQualityIncrease = 86,
    GameTooltipSharedUseActionTierLabel = 87,
    GameTooltipItemUseActionSharedLabelRequirements = 88,
    GameTooltipItemUseActionDismantleProduces = 89,
    GameTooltipItemUseThrowDamageType = 90,
    GameTooltipSharedUseLabelLightSource = 91,
    GameTooltipItemUseLabelTelescopy = 92,
    GameTooltipItemDecay = 93,
    GameTooltipItemDecayExact = 94,
    GameTooltipItemDecayRate = 95,
    GameTooltipItemDecayRateTooltip = 96,
    GameTooltipItemWeight = 97,
    GameTooltipItemWeightStored = 98,
    GameTooltipItemWeightStoredReduction = 99,
    GameTooltipItemWeightStoredReductionVerbose = 100,
    GameTooltipItemLabelRange = 101,
    GameTooltipItemMagicalSource = 102,
    GameTooltipItemGroupingsLabel = 103,
    GameTooltipItemGroup = 104,
    GameTooltipItemLabelUsesWhenBuilt = 105,
    GameTooltipItemWorth = 106,
    GameTooltipItemWorthMagicalBonus = 107,
    GameTooltipItemProtected = 108,
    GameTooltipItemProtectedContainer = 109,
    GameTooltipItemProtectedTooltip = 110,
    GameTooltipItemLabelDismantle = 111,
    GameTooltipItemQuantityMultiplier = 112,
    GameTooltipItemUseAttack = 113,
    GameTooltipItemUseEquipDefense = 114,
    GameTooltipItemUseEquipDefenseResistances = 115,
    GameTooltipItemUseEquipDefenseAttribute = 116,
    GameTooltipItemUseEquipDefenseVulnerabilities = 117,
    GameTooltipSharedWeightCapacity = 118,
    GameTooltipSharedLabelWeightCapacity = 119,
    GameTooltipSharedWeightCapacityVerbose = 120,
    GameTooltipSharedLabelInsulation = 121,
    GameTooltipSharedLabelPreservation = 122,
    GameTooltipSharedLabelDurability = 123,
    GameTooltipSharedDurabilityMagicalDamageReduction = 124,
    GameTooltipSharedLabelContents = 125,
    GameTooltipSharedContents = 126,
    GameTooltipSkillCurrent = 127,
    GameTooltipSkillReputationImpact = 128,
    GameTooltipSkillCanIncrease = 129,
    GameTooltipSkillBonuses = 130,
    GameTooltipSkillBonus = 131,
    GameTooltipMilestoneProgress = 132,
    GameTooltipMilestoneDiscovered = 133,
    GameTooltipSharedMagicalProperty = 134,
    GameTooltipSharedMagicalPropertyOutOf = 135,
    GameTooltipSharedLabel = 136,
    GameTooltipSharedLabelTail = 137,
    GameTooltipSharedLabelStart = 138,
    GameTooltipSharedLabelEnd = 139,
    GameStatsPercentage = 140,
    GameStatsStatAttack = 141,
    GameStatsStatGeneric = 142,
    GameStatsStatGenericWithMax = 143,
    GameStatsStatbar = 144,
    GameStatsStatHealthTooltip = 145,
    GameStatsStatStaminaTooltip = 146,
    GameStatsStatHungerTooltip = 147,
    GameStatsStatThirstTooltip = 148,
    GameStatsStatHealthStatusWarning = 149,
    GameStatsStatStaminaStatusWarning = 150,
    GameStatsStatHungerStatusWarning = 151,
    GameStatsStatThirstStatusWarning = 152,
    GameStatsStatWeightStatusWarning = 153,
    GameStatsStatStaminaStatusBad = 154,
    GameStatsStatHungerStatusBad = 155,
    GameStatsStatThirstStatusBad = 156,
    GameStatsStatWeightStatusBad = 157,
    GameStatsStatReputationTooltipAverageReputation = 158,
    GameStatsStatReputationTooltipDifficulty = 159,
    GameStatsStatReputationTooltipDifficultyEasy = 160,
    GameStatsStatReputationTooltipDifficultyHard = 161,
    GameStatsStatReputationTooltipDifficultyInfantile = 162,
    GameStatsStatReputationTooltipDifficultyInsane = 163,
    GameStatsStatReputationTooltipDifficultyMedium = 164,
    GameStatsStatReputationTooltipDifficultyNightmare = 165,
    GameStatsStatReputationTooltipDifficultySimple = 166,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 167,
    GameStatsStatReputationTooltipDifficultyVeryHard = 168,
    GameStatsStatReputationTooltipBenignity = 169,
    GameStatsStatReputationTooltipMalignity = 170,
    GameStatsStatReputationTooltipScore = 171,
    GameStatsStatReputationTooltipTurn = 172,
    GameStatsStatReputationTooltipTicks = 173,
    GameStatsStatWeightTooltip = 174,
    GameStatsStatAttackTooltipTactics = 175,
    GameStatsStatAttackTooltipLeftHand = 176,
    GameStatsStatAttackTooltipRightHand = 177,
    GameStatsStatDefenseTooltipBase = 178,
    GameStatsStatDefenseTooltipBlunt = 179,
    GameStatsStatDefenseTooltipParrying = 180,
    GameStatsStatDefenseTooltipFire = 181,
    GameStatsStatDefenseTooltipCold = 182,
    GameStatsStatDefenseTooltipPiercing = 183,
    GameStatsStatDefenseTooltipSlashing = 184,
    GameItemBarterCredit = 185,
    GameItemBarterCreditTrade = 186,
    GameMenuBarButtonTooltipBindable = 187,
    GameMenuBarButtonTooltipMenu = 188,
    GameMenuBarButtonTooltipSave = 189,
    GameMenuBarButtonTooltipSaveSize = 190,
    GameMenuBarButtonTooltipSaveTurnsAgo = 191,
    GameMenuBarButtonTooltipSaveLastTime = 192,
    GameMenuBarButtonTooltipNotes = 193,
    GameMenuBarButtonTooltipNotesUnread = 194,
    GameMenuBarButtonTooltipMilestones = 195,
    GameMenuBarButtonTooltipMilestonesDisabled = 196,
    GameMenuBarButtonTooltipMessages = 197,
    GameMenuBarButtonTooltipHelp = 198,
    GameMenuBarButtonTooltipQuickSettings = 199,
    GameMenuBarButtonTooltipActions = 200,
    GameMenuBarButtonTooltipInventory = 201,
    GameMenuBarButtonTooltipCrafting = 202,
    GameMenuBarButtonTooltipEquipment = 203,
    GameMenuBarButtonTooltipSkills = 204,
    GameMenuBarButtonTooltipQuests = 205,
    GameMenuBarButtonTooltipQuestsDisabled = 206,
    GameMessagesButtonSend = 207,
    GameMessagesContextMenuShowAsDialog = 208,
    GameMessagesContextMenuClear = 209,
    GameMessagesContextMenuCopy = 210,
    GameMessagesContextMenuExport = 211,
    GameMessagesFilter = 212,
    GameMessagesFiltersEdit = 213,
    GameMessagesNewNote = 214,
    GameMessagesTurn = 215,
    GameMessagesDedicatedServerBackup = 216,
    GameMessagesDedicatedServerBackupLimitReached = 217,
    GameTileInspectionCannotSeeTile = 218,
    MenuAboutTitle = 219,
    MenuAboutDescription = 220,
    MenuAboutGameDescription = 221,
    MenuAboutSectionTeam = 222,
    MenuAboutTeamMemberResponsibilities = 223,
    MenuAboutTeamMemberName = 224,
    MenuAboutTeamMemberNickname = 225,
    MenuAboutSectionContributors = 226,
    MenuAboutSectionSpecialThanks = 227,
    MenuAboutTextSpecialThanksTestorsAndDonators = 228,
    MenuAboutSectionLibraries = 229,
    MenuAboutSectionLibrariesDescription = 230,
    MenuBindings = 231,
    MenuBindingsDescription = 232,
    MenuBindingsTooltipBindConflicts = 233,
    MenuChangelogTitle = 234,
    MenuChangelogDescription = 235,
    MenuChangelogHeadingFailedLoad = 236,
    MenuChangelogHeadingChangeCount = 237,
    MenuCharacterCreationButtonRandomizeName = 238,
    MenuCharacterCreationButtonExportTooltip = 239,
    MenuCharacterCreationButtonImportTooltip = 240,
    MenuCharacterCreationButtonStartGame = 241,
    MenuCharacterCreationButtonJoinGame = 242,
    MenuCharacterCreationDescription = 243,
    MenuCharacterCreationHeadingHairColor = 244,
    MenuCharacterCreationHeadingHairStyle = 245,
    MenuCharacterCreationHeadingSkinTone = 246,
    MenuCharacterCreationLabelName = 247,
    MenuCharacterCreationTitle = 248,
    MenuCharacterCreationButtonRotateLeftTooltip = 249,
    MenuCharacterCreationButtonRotateRightTooltip = 250,
    MenuCharacterCreationButtonRandomizeTooltip = 251,
    MenuCharacterSelectionButtonNewCharacter = 252,
    MenuCharacterSelectionDescription = 253,
    MenuCharacterSelectionHeadingNoCharacters = 254,
    MenuCharacterSelectionTitle = 255,
    MenuCharacterSelectionLabelLastUse = 256,
    MenuCharacterSelectionLabelUseCount = 257,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 258,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 259,
    MenuMultiplayerDescription = 260,
    MenuMultiplayerTitle = 261,
    MenuMultiplayerButtonJoinById = 262,
    MenuMultiplayerServerLabelReputation = 263,
    MenuMultiplayerServerLabelDays = 264,
    MenuMultiplayerServerLabelIsland = 265,
    MenuMultiplayerButtonNewGame = 266,
    MenuMultiplayerButtonLoadGame = 267,
    MenuMultiplayerServerTooltipPVP = 268,
    MenuMultiplayerServerTooltipModsLabel = 269,
    MenuMultiplayerServerTooltipFriendsLabel = 270,
    MenuMultiplayerServerPlayers = 271,
    MenuMultiplayerServerLobbyType = 272,
    MenuMultiplayerServerRegion = 273,
    MenuMultiplayerServerHost = 274,
    MenuMultiplayerServerVersion = 275,
    MenuMultiplayerServerVersionUnknown = 276,
    MenuMultiplayerServerDedicated = 277,
    MenuMultiplayerHeadingPlayersOnline = 278,
    MenuMultiplayerServerModUnableToLoad = 279,
    MenuGameEndTitleDead = 280,
    MenuGameEndTitleWon = 281,
    MenuGameEndShareFacebook = 282,
    MenuGameEndShareTwitter = 283,
    MenuGameEndContinueAsGhost = 284,
    MenuGameEndReturnToIsland = 285,
    MenuGameEndExitToMenu = 286,
    MenuHelpTitle = 287,
    MenuHelpDescription = 288,
    MenuHelpLabelSearch = 289,
    MenuHighscoresTitle = 290,
    MenuHighscoresDescription = 291,
    MenuHighscoresDifficultyFilterAll = 292,
    MenuHighscoresHighscoreLabelDifficulty = 293,
    MenuHighscoresHighscoreLabelTurns = 294,
    MenuHighscoresHighscoreLabelScore = 295,
    MenuHighscoresHighscoreLabelPlace = 296,
    MenuHighscoresHighscoreLabelDate = 297,
    MenuHighscoresHighscoreLabelDeathBy = 298,
    MenuHighscoresHighscoreTitle = 299,
    MenuHighscoresCharacterNameUnknown = 300,
    MenuHighscoresHighscoreReplayWithSettings = 301,
    MenuLoadGameButtonNewGame = 302,
    MenuLoadGameButtonNewGameButtonImportTooltip = 303,
    MenuLoadGameDescription = 304,
    MenuLoadGameSaveButtonDeleteTooltip = 305,
    MenuLoadGameSaveButtonEditNameTooltip = 306,
    MenuLoadGameSaveButtonExportTooltip = 307,
    MenuLoadGameSaveTooltipLabelCreatedTime = 308,
    MenuLoadGameSaveTooltipLabelSaveTime = 309,
    MenuLoadGameSaveTooltipLabelGameMode = 310,
    MenuLoadGameSaveTooltipLabelScore = 311,
    MenuLoadGameSaveTooltipLabelSeed = 312,
    MenuLoadGameSaveTooltipLabelTurns = 313,
    MenuLoadGameSaveTooltipLabelMods = 314,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 315,
    MenuLoadGameSaveTooltipMod = 316,
    MenuLoadGameSaveTooltipNew = 317,
    MenuLoadGameSlotsRemaining = 318,
    MenuLoadGameSaveGame = 319,
    MenuLoadGameSaveGameDescription = 320,
    MenuLoadGameTitle = 321,
    MenuLoadGameLabelSelected = 322,
    MenuLoadGameButtonDeleteSelectedTooltip = 323,
    MenuMainButtonAbout = 324,
    MenuMainButtonChangelog = 325,
    MenuMainButtonContinueGame = 326,
    MenuMainButtonMultiplayer = 327,
    MenuMainButtonHighscores = 328,
    MenuMainButtonLoadGame = 329,
    MenuMainButtonMods = 330,
    MenuMainButtonModsAllDisabled = 331,
    MenuMainButtonNewGame = 332,
    MenuMainButtonNews = 333,
    MenuMainButtonOptions = 334,
    MenuMainButtonQuitGame = 335,
    MenuModsButtonModdingGuide = 336,
    MenuModsButtonOpenFolder = 337,
    MenuModsButtonOpenWorkshop = 338,
    MenuModsDescription = 339,
    MenuModsTitle = 340,
    MenuModsTooltipLabelAuthor = 341,
    MenuModsTooltipLabelTags = 342,
    MenuModsTooltipLabelDependencies = 343,
    MenuModsTooltipLabelProvides = 344,
    MenuModsTooltipLabelVersion = 345,
    MenuModsTooltipLabelDescription = 346,
    MenuModsTooltipLabelInstallDate = 347,
    MenuModsTooltipLabelCreatedDate = 348,
    MenuModsTooltipLabelLastUpdatedDate = 349,
    MenuModsTooltipPreventsMilestoneUnlocks = 350,
    MenuModsTooltipModOptions = 351,
    MenuModsTooltipPublishMod = 352,
    MenuModsTooltipModMoreInformation = 353,
    MenuModsTooltipUninstallMod = 354,
    MenuModsTooltipViewInSteamWorkshop = 355,
    MenuModsTooltipViewGitHub = 356,
    MenuModsTooltipOpenFolder = 357,
    MenuModsButtonEditInternalMods = 358,
    MenuModsSectionHeading = 359,
    MenuModsSubmenuEditInternalModsTitle = 360,
    MenuModsSubmenuEditInternalModsDescription = 361,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 362,
    MenuNewGameButtonNext = 363,
    MenuNewGameButtonStartServer = 364,
    MenuNewGameDescription = 365,
    MenuNewGameLabelEditName = 366,
    MenuNewGameLabelEditSeed = 367,
    MenuNewGamePlaceholderEditSeed = 368,
    MenuNewGameTitle = 369,
    MenuNewGameChoiceDifficulty = 370,
    MenuNewGameChoiceSingleplayer = 371,
    MenuNewGameChoiceSingleplayerDescription = 372,
    MenuNewGameChoiceMultiplayer = 373,
    MenuNewGameChoiceMultiplayerDescription = 374,
    MenuNewGameChoiceTurnModeManual = 375,
    MenuNewGameChoiceTurnModeManualDescription = 376,
    MenuNewGameChoiceTurnModeRealTime = 377,
    MenuNewGameChoiceTurnModeRealTimeDescription = 378,
    MenuNewGameChoiceTurnModeSimulated = 379,
    MenuNewGameChoiceTurnModeSimulatedDescription = 380,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 381,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 382,
    MenuNewGameChoiceDifficultyChallengeDaily = 383,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 384,
    MenuNewGameButtonMilestones = 385,
    MenuNewGameButtonMilestonesDescription = 386,
    MenuNewGameTabGameMode = 387,
    MenuNewGameTabMultiplayer = 388,
    MenuNewGameTabGameplayModifiers = 389,
    MenuNewGameHeadingGameMode = 390,
    MenuNewGameHeadingMultiplayer = 391,
    MenuNewGameHeadingGameplayModifiers = 392,
    MenuNewGameChoiceClientsInheritHostModifiers = 393,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 394,
    MenuNewGameChoiceCustomModifiers = 395,
    MenuNewGameChoiceCustomModifiersDescription = 396,
    MenuMilestoneModifiersTitle = 397,
    MenuMilestoneModifiersDescription = 398,
    MenuCustomGameOptionsTitle = 399,
    MenuCustomGameOptionsDescription = 400,
    MenuCustomGameOptionsRespawnOnDeath = 401,
    MenuCustomGameOptionsRespawnOnDeathDescription = 402,
    MenuCustomGameOptionsUseUnlockedRecipes = 403,
    MenuCustomGameOptionsStartingIslandBiome = 404,
    MenuCustomGameOptionsApplyTravelingEffects = 405,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 406,
    MenuCustomGameOptionsCreaturesPeaceful = 407,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 408,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 409,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 410,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 411,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 412,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 413,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 414,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 415,
    MenuCustomGameOptionsCreaturesAllowSpawning = 416,
    MenuCustomGameOptionsCreaturesSpawnLimit = 417,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 418,
    MenuCustomGameOptionsCreatureNone = 419,
    MenuCustomGameOptionsCreatureConfigure = 420,
    MenuCustomGameOptionsBenignityInitial = 421,
    MenuCustomGameOptionsBenignityMultiplier = 422,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 423,
    MenuCustomGameOptionsMalignityInitial = 424,
    MenuCustomGameOptionsMalignityMultiplier = 425,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 426,
    MenuCustomGameOptionsStatMultiplier = 427,
    MenuCustomGameOptionsStatMultiplierTooltip = 428,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 429,
    MenuCustomGameOptionsHeadingGeneral = 430,
    MenuCustomGameOptionsHeadingIsland = 431,
    MenuCustomGameOptionsHeadingTime = 432,
    MenuCustomGameOptionsHeadingStats = 433,
    MenuCustomGameOptionsHeadingReputation = 434,
    MenuCustomGameOptionsHeadingInventory = 435,
    MenuCustomGameOptionsHeadingCreatures = 436,
    MenuCustomGameOptionsHeadingSkills = 437,
    MenuCustomGameOptionsHeadingStatusEffects = 438,
    MenuCustomGameOptionsEternalNight = 439,
    MenuCustomGameOptionsEternalNightDescription = 440,
    MenuCustomGameOptionsEternalDay = 441,
    MenuCustomGameOptionsEternalDayDescription = 442,
    MenuCustomGameOptionsTimeFrozen = 443,
    MenuCustomGameOptionsTimeInitial = 444,
    MenuCustomGameOptionsTimeDayLength = 445,
    MenuCustomGameOptionsTimeDayLengthTooltip = 446,
    MenuCustomGameOptionsTimeDayPercent = 447,
    MenuCustomGameOptionsTimeDayPercentTooltip = 448,
    MenuCustomGameOptionsStatStarting = 449,
    MenuCustomGameOptionsStatMax = 450,
    MenuCustomGameOptionsStatStartingDisplay = 451,
    MenuCustomGameOptionsStatMaxDisplay = 452,
    MenuCustomGameOptionsStatNoChange = 453,
    MenuCustomGameOptionsStatBonus = 454,
    MenuCustomGameOptionsStatBonusDisplay = 455,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 456,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 457,
    MenuCustomGameOptionsStatusEffectStartWith = 458,
    MenuCustomGameOptionsStatusEffectUntreatable = 459,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 460,
    MenuCustomGameOptionsSkillInitialRandomCount = 461,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 462,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 463,
    MenuCustomGameOptionsSkillsGlobal = 464,
    MenuCustomGameOptionsSkillNone = 465,
    MenuCustomGameOptionsSkillConfigure = 466,
    MenuCustomGameOptionsSkillInitial = 467,
    MenuCustomGameOptionsSkillMultiplier = 468,
    MenuCustomGameOptionsSkillMultiplierTooltip = 469,
    MenuCustomGameOptionsRandomItems = 470,
    MenuCustomGameOptionsRandomItemsDescription = 471,
    MenuCustomGameOptionsExport = 472,
    MenuCustomGameOptionsImport = 473,
    MenuNewsDescription = 474,
    MenuNewsHeadingSocial = 475,
    MenuNewsTitle = 476,
    MenuNewsHeadingUnableToLoad = 477,
    MenuNewsButtonAllNews = 478,
    MenuNewsButtonViewChangelog = 479,
    MenuOptionsButtonDitherFogOfWar = 480,
    MenuOptionsButtonDisableCustomCursor = 481,
    MenuOptionsButtonDisplayArticleInObjectNames = 482,
    MenuOptionsButtonFullscreen = 483,
    MenuOptionsButtonDeveloperMode = 484,
    MenuOptionsButtonDeveloperModeContextMenu = 485,
    MenuOptionsButtonPixelFont = 486,
    MenuOptionsButtonReloadGame = 487,
    MenuOptionsButtonReloadStylesheets = 488,
    MenuOptionsButtonExportGlobalSaveData = 489,
    MenuOptionsButtonImportGlobalSaveData = 490,
    MenuOptionsButtonSaveDataClearAll = 491,
    MenuOptionsButtonSaveDataClearCharacters = 492,
    MenuOptionsButtonSaveDataClearHighscores = 493,
    MenuOptionsButtonSaveDataClearMilestones = 494,
    MenuOptionsButtonSaveDataClearOptions = 495,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 496,
    MenuOptionsButtonSaveDataClearSaves = 497,
    MenuOptionsButtonSkipSplash = 498,
    MenuOptionsButtonToggleDevTools = 499,
    MenuOptionsButtonTooltipsCreatures = 500,
    MenuOptionsButtonOpenLogsFolder = 501,
    MenuOptionsButtonTooltipsDoodads = 502,
    MenuOptionsButtonTooltipsItems = 503,
    MenuOptionsButtonTooltipsTerrain = 504,
    MenuOptionsButtonDropLocationFacing = 505,
    MenuOptionsButtonDropLocationFeet = 506,
    MenuOptionsButtonStartTraceRecording = 507,
    MenuOptionsButtonStopTraceRecording = 508,
    MenuOptionsButtonTracingRecordingtTooltip = 509,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 510,
    MenuOptionsDescription = 511,
    MenuOptionsHeadingAudio = 512,
    MenuOptionsHeadingDeveloper = 513,
    MenuOptionsHeadingGameplayOptions = 514,
    MenuOptionsHeadingGeneralOptions = 515,
    MenuOptionsHeadingControls = 516,
    MenuOptionsHeadingLanguage = 517,
    MenuOptionsHeadingPowerPreference = 518,
    MenuOptionsHeadingModOptions = 519,
    MenuOptionsHeadingOther = 520,
    MenuOptionsHeadingSaveData = 521,
    MenuOptionsHeadingTooltips = 522,
    MenuOptionsHeadingTooltipsTile = 523,
    MenuOptionsHeadingVideo = 524,
    MenuOptionsLabelInterfaceScale = 525,
    MenuOptionsLabelTooltipDelay = 526,
    MenuOptionsLabelDirectionTurnDelay = 527,
    MenuOptionsLabelMouseTurnDelay = 528,
    MenuOptionsTooltipTurnDelay = 529,
    MenuOptionsTooltipMouseTurnDelay = 530,
    MenuOptionsTooltipUiScaleClamped = 531,
    MenuOptionsTooltipControlsFilter = 532,
    MenuOptionsLabelVolumeEffects = 533,
    MenuOptionsLabelVolumeMusic = 534,
    MenuOptionsTabAudio = 535,
    MenuOptionsTabDeveloper = 536,
    MenuOptionsTabGameplay = 537,
    MenuOptionsTabGeneral = 538,
    MenuOptionsTabControls = 539,
    MenuOptionsTabMods = 540,
    MenuOptionsTabSaveData = 541,
    MenuOptionsTabVideo = 542,
    MenuOptionsTitle = 543,
    MenuOptionsTooltipMusicNextTrack = 544,
    MenuOptionsBindChoose = 545,
    MenuOptionsBindChooseAdd = 546,
    MenuOptionsBindLabelModifier = 547,
    MenuOptionsBindButtonResetTooltip = 548,
    MenuOptionsBindButtonDeleteTooltip = 549,
    MenuOptionsBindButtonAddTooltip = 550,
    MenuOptionsBindButtonAddMacroTooltip = 551,
    MenuOptionsButtonUnlockAllMilestones = 552,
    MenuOptionsButtonUnlockAllCraftingRecipes = 553,
    MenuOptionsButtonAlternatingDirectionMovement = 554,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 555,
    MenuOptionsButtonAlwaysShowMoreInformation = 556,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 557,
    MenuOptionsButtonAutoGatherHarvest = 558,
    MenuOptionsButtonAutoGatherHarvestTooltip = 559,
    MenuOptionsButtonDisableUIEffects = 560,
    MenuOptionsButtonDisableUIEffectsTooltip = 561,
    MenuOptionsButtonAutoAttack = 562,
    MenuOptionsButtonAutoAttackTooltip = 563,
    MenuOptionsButtonAutoPickup = 564,
    MenuOptionsButtonAutoPickupTooltip = 565,
    MenuOptionsButtonAutoPickupOnIdle = 566,
    MenuOptionsButtonAutoPickupOnIdleTooltip = 567,
    MenuOptionsButtonDropOnDismantle = 568,
    MenuOptionsButtonDropOnDismantleTooltip = 569,
    MenuOptionsButtonDropOnGatherHarvest = 570,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 571,
    MenuOptionsButtonKeepSortActive = 572,
    MenuOptionsButtonKeepSortActiveTooltip = 573,
    MenuOptionsButtonProtectCraftingItemContainers = 574,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 575,
    MenuOptionsButtonProtectCraftingItemsInInventory = 576,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 577,
    MenuOptionsButtonUseAdjacentContainers = 578,
    MenuOptionsButtonUseAdjacentContainersTooltip = 579,
    MenuOptionsButtonHideEquippedHeadgear = 580,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 581,
    MenuOptionsButtonAutoSave = 582,
    MenuOptionsButtonAutoSaveTooltip = 583,
    MenuOptionsRangeAutoSaveTimerLabel = 584,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 585,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 586,
    MenuOptionsButtonWarnOnDangerousActions = 587,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 588,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 589,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 590,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 591,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 592,
    MenuOptionsHeadingWarnWhenBreakingItems = 593,
    MenuOptionsButtonSaveDataClearBindings = 594,
    MenuOptionsTooltipDialogOpacity = 595,
    MenuOptionsLabelDialogOpacity = 596,
    MenuOptionsDeveloperLogSourceFilterHeading = 597,
    MenuOptionsDeveloperUIExperiments = 598,
    MenuOptionsDeveloperUIExperimentsDescription = 599,
    MenuOptionsAudioVolumeDisplay = 600,
    MenuOptionsAudioInputSoundOnTyping = 601,
    MenuOptionsMusicPlaylist = 602,
    MenuOptionsButtonConfigureBindings = 603,
    MenuPauseButtonContinue = 604,
    MenuPauseButtonOptions = 605,
    MenuPauseButtonModes = 606,
    MenuPauseButtonPaused = 607,
    MenuPauseButtonMultiplayer = 608,
    MenuPauseButtonTitleScreen = 609,
    MenuPauseButtonStopServer = 610,
    MenuPauseHeadingPaused = 611,
    MenuPauseParagraphPaused = 612,
    MenuPauseHeadingNotPaused = 613,
    MenuPauseParagraphNotPaused = 614,
    MenuPauseHeadingDedicatedServer = 615,
    MenuPauseParagraphDedicatedServer = 616,
    MenuModesTitle = 617,
    MenuModesDescription = 618,
    MenuMultiplayerOptionsTitle = 619,
    MenuMultiplayerOptionsDescription = 620,
    MenuMultiplayerOptionsOpenServer = 621,
    MenuMultiplayerOptionsOpenServerDescription = 622,
    MenuMultiplayerOptionsCopyGameCode = 623,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 624,
    MenuMultiplayerOptionsInviteSteamFriends = 625,
    MenuMultiplayerOptionsCheckConnectionHeading = 626,
    MenuMultiplayerOptionsCheckConnectionParagraph = 627,
    MenuMultiplayerOptionsCheckConnectionButton = 628,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 629,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 630,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 631,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 632,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 633,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 634,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 635,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 636,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 637,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 638,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 639,
    MenuJoinServerTitle = 640,
    MenuJoinServerDescription = 641,
    MenuJoinServerInputPlaceholder = 642,
    MenuJoinServerNext = 643,
    MenuJoinServerChooseModifiersTitle = 644,
    MenuJoinServerChooseModifiersDescription = 645,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 646,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 647,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 648,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 649,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 650,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 651,
    MenuSharedMultiplayerChoicePVP = 652,
    MenuSharedMultiplayerChoicePVPDescription = 653,
    MenuSharedMultiplayerDescription = 654,
    MenuSharedMultiplayerMessageOfTheDay = 655,
    MenuSharedMultiplayerMaxPlayers = 656,
    MenuSharedRealTimeTickSpeedTooltip = 657,
    MenuSharedRealTimeTickSpeedLabel = 658,
    MenuSharedButtonDefault = 659,
    MenuSharedValueMillseconds = 660,
    MenuSharedValuePercentage = 661,
    MenuSharedMilestonesNotUnlockable = 662,
    MenuSharedMilestonesNotUnlockableDescription = 663,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 664,
    MenuSharedButtonDisableAll = 665,
    MenuSharedButtonEnableAll = 666,
    MenuSharedMilestoneModifiersSelected = 667,
    MiscSortBy = 668,
    MiscSortDirection = 669,
    MiscFilter = 670,
    MiscPlayerNameDefault = 671,
    MiscPlayerNameServer = 672,
    MiscSaveNameDefault = 673,
    MiscSaveNameDailyChallenge = 674,
    MiscSaveNameChallenge = 675,
    MiscSaveVersionUnknown = 676,
    MiscVersion = 677,
    MiscTime = 678,
    MiscTimeMeridiem = 679,
    MiscError = 680,
    MiscContextMenuCopyTooltip = 681,
    MiscBindableOr = 682,
    MiscBindableNoBindings = 683,
    DifficultyOptionsPeaceful = 684,
    DifficultyOptionsAberrantSpawnsDisabled = 685,
    DifficultyOptionsAberrantSpawnsOnly = 686,
    DifficultyOptionsCreatureSpawningDisabled = 687,
    DifficultyOptionsCreatureSpawnsDefault = 688,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 689,
    DifficultyOptionsCreatureSpawnsNoAberrants = 690,
    DifficultyOptionsSpawnLimit = 691,
    DifficultyOptionsRespawn = 692,
    DifficultyOptionsEternalNight = 693,
    DifficultyOptionsEternalDay = 694,
    DifficultyOptionsTimeInitial = 695,
    DifficultyOptionsTimeFrozen = 696,
    DifficultyOptionsTimeDayLength = 697,
    DifficultyOptionsTimeDayPercent = 698,
    DifficultyOptionsNoItems = 699,
    DifficultyOptionsBenignityInitial = 700,
    DifficultyOptionsBenignityMultiplier = 701,
    DifficultyOptionsMalignityInitial = 702,
    DifficultyOptionsMalignityMultiplier = 703,
    DifficultyOptionsWeightBonus = 704,
    DifficultyOptionsStatInitial = 705,
    DifficultyOptionsStatMax = 706,
    DifficultyOptionsStatMultiplier = 707,
    DifficultyOptionsStatusEffectStartWith = 708,
    DifficultyOptionsStatusEffectUntreatable = 709,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 710,
    DifficultyOptionsNoRandomSkills = 711,
    DifficultyOptionsSkillStartingCount = 712,
    DifficultyOptionsSkillGainMultiplier = 713,
    DifficultyOptionsSkillInitial = 714,
    DifficultyOptionsStatusEffectPermanent = 715,
    DifficultyOptionsStatusEffectRateMultiplier = 716,
    DifficultyOptionsStatusEffectMultiplier = 717,
    EquipmentBack = 718,
    EquipmentBelt = 719,
    EquipmentChest = 720,
    EquipmentFeet = 721,
    EquipmentHands = 722,
    EquipmentHead = 723,
    EquipmentLeftHand = 724,
    EquipmentLeftHandOption = 725,
    EquipmentLegs = 726,
    EquipmentNeck = 727,
    EquipmentRightHand = 728,
    EquipmentRightHandOption = 729,
    EquipmentUse = 730,
    HudFilter = 731,
    QuickSlot1 = 732,
    QuickSlot2 = 733,
    QuickSlot3 = 734,
    QuickSlot4 = 735,
    QuickSlot5 = 736,
    QuickSlot6 = 737,
    QuickSlot7 = 738,
    QuickSlot8 = 739,
    QuickSlot9 = 740,
    TabCrafting = 741,
    TabDismantle = 742,
    Version = 743,
    WindowTitleContainer = 744,
    WindowTitleCrafting = 745,
    WindowTitleEquipment = 746,
    WindowTitleInventory = 747
}
export default UiTranslation;
