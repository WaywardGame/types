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
    GameTooltipDefenseLabelBase = 66,
    GameTooltipDefenseInsulationWeight = 67,
    GameTooltipDefenseInsulationNotRequired = 68,
    GameTooltipItemUseLabelMaxWeight = 69,
    GameTooltipMagicalLabel = 70,
    GameTooltipSharedUsesLabel = 71,
    GameTooltipRecipeLabelReputation = 72,
    GameTooltipRecipeLabelSkill = 73,
    GameTooltipRecipeLabelLevel = 74,
    GameTooltipRecipeNearby = 75,
    GameTooltipRecipeFireSource = 76,
    GameTooltipRecipeRequirement = 77,
    GameTooltipRecipeLabelRequired = 78,
    GameTooltipRecipeLabelConsumed = 79,
    GameTooltipItemSkillSource = 80,
    GameTooltipItemUse = 81,
    GameTooltipItemUseActionOnConsumeTooltipBase = 82,
    GameTooltipItemUseActionOnConsumeTooltipSkill = 83,
    GameTooltipItemUseActionOnConsumeTooltipMagical = 84,
    GameTooltipSharedUseActionTierLabel = 85,
    GameTooltipItemUseActionSharedLabelRequirements = 86,
    GameTooltipItemUseActionDismantleProduces = 87,
    GameTooltipItemUseThrowDamageType = 88,
    GameTooltipSharedUseLabelLightSource = 89,
    GameTooltipItemUseLabelTelescopy = 90,
    GameTooltipItemDecay = 91,
    GameTooltipItemDecayExact = 92,
    GameTooltipItemDecayRate = 93,
    GameTooltipItemDecayRateTooltip = 94,
    GameTooltipItemWeight = 95,
    GameTooltipItemWeightBase = 96,
    GameTooltipItemWeightStored = 97,
    GameTooltipItemWeightStoredReduction = 98,
    GameTooltipItemLabelRange = 99,
    GameTooltipItemMagicalSource = 100,
    GameTooltipItemGroupingsLabel = 101,
    GameTooltipItemGroup = 102,
    GameTooltipItemLabelUsesWhenBuilt = 103,
    GameTooltipItemWorth = 104,
    GameTooltipItemProtected = 105,
    GameTooltipItemProtectedContainer = 106,
    GameTooltipItemProtectedTooltip = 107,
    GameTooltipItemLabelDismantle = 108,
    GameTooltipItemQuantityMultiplier = 109,
    GameTooltipItemUseAttack = 110,
    GameTooltipItemUseEquipDefense = 111,
    GameTooltipItemUseEquipDefenseAttribute = 112,
    GameTooltipItemLabelDamage = 113,
    GameTooltipItemBarterCreditTrade = 114,
    GameTooltipItemBarterCredit = 115,
    GameTooltipSharedLabelWeightCapacity = 116,
    GameTooltipSharedLabelInsulation = 117,
    GameTooltipSharedLabelPreservation = 118,
    GameTooltipSharedLabelDurability = 119,
    GameTooltipSharedDurabilityMagicalDamageReduction = 120,
    GameTooltipSharedLabelContents = 121,
    GameTooltipSkillCurrent = 122,
    GameTooltipSkillReputationImpact = 123,
    GameTooltipSkillCanIncrease = 124,
    GameTooltipSkillBonuses = 125,
    GameTooltipSkillBonus = 126,
    GameTooltipMilestoneProgress = 127,
    GameTooltipMilestoneDiscovered = 128,
    GameTooltipSharedMagicalProperty = 129,
    GameTooltipSharedMagicalPropertyOutOf = 130,
    GameTooltipSharedLabel = 131,
    GameTooltipSharedLabelHead = 132,
    GameTooltipSharedLabelTail = 133,
    GameTooltipSharedLabelStart = 134,
    GameTooltipSharedLabelEnd = 135,
    GameStatsPercentage = 136,
    GameStatsStatAttack = 137,
    GameStatsStatGeneric = 138,
    GameStatsStatGenericWithMax = 139,
    GameStatsStatbar = 140,
    GameStatsStatHealthTooltip = 141,
    GameStatsStatStaminaTooltip = 142,
    GameStatsStatHungerTooltip = 143,
    GameStatsStatThirstTooltip = 144,
    GameStatsStatHealthStatusWarning = 145,
    GameStatsStatStaminaStatusWarning = 146,
    GameStatsStatHungerStatusWarning = 147,
    GameStatsStatThirstStatusWarning = 148,
    GameStatsStatWeightStatusWarning = 149,
    GameStatsStatStaminaStatusBad = 150,
    GameStatsStatHungerStatusBad = 151,
    GameStatsStatThirstStatusBad = 152,
    GameStatsStatWeightStatusBad = 153,
    GameStatsStatReputationTooltipAverageReputation = 154,
    GameStatsStatReputationTooltipDifficulty = 155,
    GameStatsStatReputationTooltipDifficultyEasy = 156,
    GameStatsStatReputationTooltipDifficultyHard = 157,
    GameStatsStatReputationTooltipDifficultyInfantile = 158,
    GameStatsStatReputationTooltipDifficultyInsane = 159,
    GameStatsStatReputationTooltipDifficultyMedium = 160,
    GameStatsStatReputationTooltipDifficultyNightmare = 161,
    GameStatsStatReputationTooltipDifficultySimple = 162,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 163,
    GameStatsStatReputationTooltipDifficultyVeryHard = 164,
    GameStatsStatReputationTooltipBenignity = 165,
    GameStatsStatReputationTooltipMalignity = 166,
    GameStatsStatReputationTooltipScore = 167,
    GameStatsStatReputationTooltipTurn = 168,
    GameStatsStatReputationTooltipTicks = 169,
    GameStatsStatWeightTooltip = 170,
    GameStatsStatAttackTooltipTactics = 171,
    GameStatsStatAttackTooltipLeftHand = 172,
    GameStatsStatAttackTooltipRightHand = 173,
    GameStatsStatDefenseTooltipBase = 174,
    GameStatsStatDefenseTooltipBlunt = 175,
    GameStatsStatDefenseTooltipParrying = 176,
    GameStatsStatDefenseTooltipFire = 177,
    GameStatsStatDefenseTooltipCold = 178,
    GameStatsStatDefenseTooltipPiercing = 179,
    GameStatsStatDefenseTooltipSlashing = 180,
    GameItemBarterCredit = 181,
    GameMenuBarButtonTooltipBindable = 182,
    GameMenuBarButtonTooltipMenu = 183,
    GameMenuBarButtonTooltipSave = 184,
    GameMenuBarButtonTooltipSaveSize = 185,
    GameMenuBarButtonTooltipSaveTurnsAgo = 186,
    GameMenuBarButtonTooltipSaveLastTime = 187,
    GameMenuBarButtonTooltipNotes = 188,
    GameMenuBarButtonTooltipNotesUnread = 189,
    GameMenuBarButtonTooltipMilestones = 190,
    GameMenuBarButtonTooltipMilestonesDisabled = 191,
    GameMenuBarButtonTooltipMessages = 192,
    GameMenuBarButtonTooltipHelp = 193,
    GameMenuBarButtonTooltipQuickSettings = 194,
    GameMenuBarButtonTooltipActions = 195,
    GameMenuBarButtonTooltipInventory = 196,
    GameMenuBarButtonTooltipCrafting = 197,
    GameMenuBarButtonTooltipEquipment = 198,
    GameMenuBarButtonTooltipSkills = 199,
    GameMenuBarButtonTooltipQuests = 200,
    GameMenuBarButtonTooltipQuestsDisabled = 201,
    GameMessagesButtonSend = 202,
    GameMessagesContextMenuShowAsDialog = 203,
    GameMessagesContextMenuClear = 204,
    GameMessagesContextMenuCopy = 205,
    GameMessagesContextMenuExport = 206,
    GameMessagesFilter = 207,
    GameMessagesFiltersEdit = 208,
    GameMessagesNewNote = 209,
    GameMessagesTurn = 210,
    GameMessagesDedicatedServerBackup = 211,
    GameMessagesDedicatedServerBackupLimitReached = 212,
    GameTileInspectionCannotSeeTile = 213,
    MenuAboutTitle = 214,
    MenuAboutDescription = 215,
    MenuAboutGameDescription = 216,
    MenuAboutSectionTeam = 217,
    MenuAboutTeamMemberResponsibilities = 218,
    MenuAboutTeamMemberName = 219,
    MenuAboutTeamMemberNickname = 220,
    MenuAboutSectionContributors = 221,
    MenuAboutSectionSpecialThanks = 222,
    MenuAboutTextSpecialThanksTestorsAndDonators = 223,
    MenuAboutSectionLibraries = 224,
    MenuAboutSectionLibrariesDescription = 225,
    MenuBindings = 226,
    MenuBindingsDescription = 227,
    MenuBindingsTooltipBindConflicts = 228,
    MenuChangelogTitle = 229,
    MenuChangelogDescription = 230,
    MenuChangelogHeadingFailedLoad = 231,
    MenuChangelogHeadingChangeCount = 232,
    MenuChangelogButtonCopyChangelog = 233,
    MenuCharacterCreationButtonRandomizeName = 234,
    MenuCharacterCreationButtonExportTooltip = 235,
    MenuCharacterCreationButtonImportTooltip = 236,
    MenuCharacterCreationButtonStartGame = 237,
    MenuCharacterCreationButtonJoinGame = 238,
    MenuCharacterCreationDescription = 239,
    MenuCharacterCreationHeadingHairColor = 240,
    MenuCharacterCreationHeadingHairStyle = 241,
    MenuCharacterCreationHeadingSkinTone = 242,
    MenuCharacterCreationLabelName = 243,
    MenuCharacterCreationTitle = 244,
    MenuCharacterCreationButtonRotateLeftTooltip = 245,
    MenuCharacterCreationButtonRotateRightTooltip = 246,
    MenuCharacterCreationButtonRandomizeTooltip = 247,
    MenuCharacterSelectionButtonNewCharacter = 248,
    MenuCharacterSelectionDescription = 249,
    MenuCharacterSelectionHeadingNoCharacters = 250,
    MenuCharacterSelectionTitle = 251,
    MenuCharacterSelectionLabelLastUse = 252,
    MenuCharacterSelectionLabelUseCount = 253,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 254,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 255,
    MenuMultiplayerDescription = 256,
    MenuMultiplayerTitle = 257,
    MenuMultiplayerButtonJoinById = 258,
    MenuMultiplayerServerLabelReputation = 259,
    MenuMultiplayerServerLabelDays = 260,
    MenuMultiplayerServerLabelIsland = 261,
    MenuMultiplayerButtonNewGame = 262,
    MenuMultiplayerButtonLoadGame = 263,
    MenuMultiplayerServerTooltipPVP = 264,
    MenuMultiplayerServerTooltipModsLabel = 265,
    MenuMultiplayerServerTooltipFriendsLabel = 266,
    MenuMultiplayerServerPlayers = 267,
    MenuMultiplayerServerLobbyType = 268,
    MenuMultiplayerServerRegion = 269,
    MenuMultiplayerServerHost = 270,
    MenuMultiplayerServerVersion = 271,
    MenuMultiplayerServerVersionUnknown = 272,
    MenuMultiplayerServerDedicated = 273,
    MenuMultiplayerHeadingPlayersOnline = 274,
    MenuMultiplayerServerModUnableToLoad = 275,
    MenuGameEndTitleDead = 276,
    MenuGameEndTitleWon = 277,
    MenuGameEndShareFacebook = 278,
    MenuGameEndShareTwitter = 279,
    MenuGameEndContinueAsGhost = 280,
    MenuGameEndReturnToIsland = 281,
    MenuGameEndExitToMenu = 282,
    MenuHelpTitle = 283,
    MenuHelpDescription = 284,
    MenuHelpLabelSearch = 285,
    MenuHighscoresTitle = 286,
    MenuHighscoresDescription = 287,
    MenuHighscoresDifficultyFilterAll = 288,
    MenuHighscoresHighscoreLabelDifficulty = 289,
    MenuHighscoresHighscoreLabelTurns = 290,
    MenuHighscoresHighscoreLabelScore = 291,
    MenuHighscoresHighscoreLabelPlace = 292,
    MenuHighscoresHighscoreLabelDate = 293,
    MenuHighscoresHighscoreLabelDeathBy = 294,
    MenuHighscoresHighscoreTitle = 295,
    MenuHighscoresCharacterNameUnknown = 296,
    MenuHighscoresHighscoreReplayWithSettings = 297,
    MenuLoadGameButtonNewGame = 298,
    MenuLoadGameButtonNewGameButtonImportTooltip = 299,
    MenuLoadGameDescription = 300,
    MenuLoadGameSaveButtonDeleteTooltip = 301,
    MenuLoadGameSaveButtonEditNameTooltip = 302,
    MenuLoadGameSaveButtonExportTooltip = 303,
    MenuLoadGameSaveTooltipLabelCreatedTime = 304,
    MenuLoadGameSaveTooltipLabelSaveTime = 305,
    MenuLoadGameSaveTooltipLabelGameMode = 306,
    MenuLoadGameSaveTooltipLabelScore = 307,
    MenuLoadGameSaveTooltipLabelSeed = 308,
    MenuLoadGameSaveTooltipLabelTurns = 309,
    MenuLoadGameSaveTooltipLabelMods = 310,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 311,
    MenuLoadGameSaveTooltipMod = 312,
    MenuLoadGameSaveTooltipNew = 313,
    MenuLoadGameSlotsRemaining = 314,
    MenuLoadGameSaveGame = 315,
    MenuLoadGameSaveGameDescription = 316,
    MenuLoadGameTitle = 317,
    MenuLoadGameLabelSelected = 318,
    MenuLoadGameButtonDeleteSelectedTooltip = 319,
    MenuMainButtonAbout = 320,
    MenuMainButtonChangelog = 321,
    MenuMainButtonContinueGame = 322,
    MenuMainButtonMultiplayer = 323,
    MenuMainButtonHighscores = 324,
    MenuMainButtonLoadGame = 325,
    MenuMainButtonMods = 326,
    MenuMainButtonModsAllDisabled = 327,
    MenuMainButtonNewGame = 328,
    MenuMainButtonNews = 329,
    MenuMainButtonOptions = 330,
    MenuMainButtonQuitGame = 331,
    MenuModsButtonModdingGuide = 332,
    MenuModsButtonOpenFolder = 333,
    MenuModsButtonOpenWorkshop = 334,
    MenuModsDescription = 335,
    MenuModsTitle = 336,
    MenuModsTooltipLabelAuthor = 337,
    MenuModsTooltipLabelTags = 338,
    MenuModsTooltipLabelDependencies = 339,
    MenuModsTooltipLabelProvides = 340,
    MenuModsTooltipLabelVersion = 341,
    MenuModsTooltipLabelDescription = 342,
    MenuModsTooltipLabelInstallDate = 343,
    MenuModsTooltipLabelCreatedDate = 344,
    MenuModsTooltipLabelLastUpdatedDate = 345,
    MenuModsTooltipPreventsMilestoneUnlocks = 346,
    MenuModsTooltipModOptions = 347,
    MenuModsTooltipPublishMod = 348,
    MenuModsTooltipModMoreInformation = 349,
    MenuModsTooltipUninstallMod = 350,
    MenuModsTooltipViewInSteamWorkshop = 351,
    MenuModsTooltipViewGitHub = 352,
    MenuModsTooltipOpenFolder = 353,
    MenuModsButtonEditInternalMods = 354,
    MenuModsSectionHeading = 355,
    MenuModsSubmenuEditInternalModsTitle = 356,
    MenuModsSubmenuEditInternalModsDescription = 357,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 358,
    MenuNewGameButtonNext = 359,
    MenuNewGameButtonStartServer = 360,
    MenuNewGameDescription = 361,
    MenuNewGameLabelEditName = 362,
    MenuNewGameLabelEditSeed = 363,
    MenuNewGamePlaceholderEditSeed = 364,
    MenuNewGameTitle = 365,
    MenuNewGameChoiceDifficulty = 366,
    MenuNewGameChoiceSingleplayer = 367,
    MenuNewGameChoiceSingleplayerDescription = 368,
    MenuNewGameChoiceMultiplayer = 369,
    MenuNewGameChoiceMultiplayerDescription = 370,
    MenuNewGameChoiceTurnModeManual = 371,
    MenuNewGameChoiceTurnModeManualDescription = 372,
    MenuNewGameChoiceTurnModeRealTime = 373,
    MenuNewGameChoiceTurnModeRealTimeDescription = 374,
    MenuNewGameChoiceTurnModeSimulated = 375,
    MenuNewGameChoiceTurnModeSimulatedDescription = 376,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 377,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 378,
    MenuNewGameChoiceDifficultyChallengeDaily = 379,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 380,
    MenuNewGameButtonMilestones = 381,
    MenuNewGameButtonMilestonesDescription = 382,
    MenuNewGameTabGameMode = 383,
    MenuNewGameTabMultiplayer = 384,
    MenuNewGameTabGameplayModifiers = 385,
    MenuNewGameHeadingGameMode = 386,
    MenuNewGameHeadingMultiplayer = 387,
    MenuNewGameHeadingGameplayModifiers = 388,
    MenuNewGameChoiceClientsInheritHostModifiers = 389,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 390,
    MenuNewGameChoiceCustomModifiers = 391,
    MenuNewGameChoiceCustomModifiersDescription = 392,
    MenuMilestoneModifiersTitle = 393,
    MenuMilestoneModifiersDescription = 394,
    MenuCustomGameOptionsTitle = 395,
    MenuCustomGameOptionsDescription = 396,
    MenuCustomGameOptionsRespawnOnDeath = 397,
    MenuCustomGameOptionsRespawnOnDeathDescription = 398,
    MenuCustomGameOptionsUseUnlockedRecipes = 399,
    MenuCustomGameOptionsStartingIslandBiome = 400,
    MenuCustomGameOptionsApplyTravelingEffects = 401,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 402,
    MenuCustomGameOptionsCreaturesPeaceful = 403,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 404,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 405,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 406,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 407,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 408,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 409,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 410,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 411,
    MenuCustomGameOptionsCreaturesAllowSpawning = 412,
    MenuCustomGameOptionsCreaturesSpawnLimit = 413,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 414,
    MenuCustomGameOptionsCreatureNone = 415,
    MenuCustomGameOptionsCreatureConfigure = 416,
    MenuCustomGameOptionsBenignityInitial = 417,
    MenuCustomGameOptionsBenignityMultiplier = 418,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 419,
    MenuCustomGameOptionsMalignityInitial = 420,
    MenuCustomGameOptionsMalignityMultiplier = 421,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 422,
    MenuCustomGameOptionsStatMultiplier = 423,
    MenuCustomGameOptionsStatMultiplierTooltip = 424,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 425,
    MenuCustomGameOptionsHeadingGeneral = 426,
    MenuCustomGameOptionsHeadingIsland = 427,
    MenuCustomGameOptionsHeadingTime = 428,
    MenuCustomGameOptionsHeadingStats = 429,
    MenuCustomGameOptionsHeadingReputation = 430,
    MenuCustomGameOptionsHeadingInventory = 431,
    MenuCustomGameOptionsHeadingCreatures = 432,
    MenuCustomGameOptionsHeadingSkills = 433,
    MenuCustomGameOptionsHeadingStatusEffects = 434,
    MenuCustomGameOptionsEternalNight = 435,
    MenuCustomGameOptionsEternalNightDescription = 436,
    MenuCustomGameOptionsEternalDay = 437,
    MenuCustomGameOptionsEternalDayDescription = 438,
    MenuCustomGameOptionsTimeFrozen = 439,
    MenuCustomGameOptionsTimeInitial = 440,
    MenuCustomGameOptionsTimeDayLength = 441,
    MenuCustomGameOptionsTimeDayLengthTooltip = 442,
    MenuCustomGameOptionsTimeDayPercent = 443,
    MenuCustomGameOptionsTimeDayPercentTooltip = 444,
    MenuCustomGameOptionsStatStarting = 445,
    MenuCustomGameOptionsStatMax = 446,
    MenuCustomGameOptionsStatStartingDisplay = 447,
    MenuCustomGameOptionsStatMaxDisplay = 448,
    MenuCustomGameOptionsStatNoChange = 449,
    MenuCustomGameOptionsStatBonus = 450,
    MenuCustomGameOptionsStatBonusDisplay = 451,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 452,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 453,
    MenuCustomGameOptionsStatusEffectStartWith = 454,
    MenuCustomGameOptionsStatusEffectUntreatable = 455,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 456,
    MenuCustomGameOptionsSkillInitialRandomCount = 457,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 458,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 459,
    MenuCustomGameOptionsSkillsGlobal = 460,
    MenuCustomGameOptionsSkillNone = 461,
    MenuCustomGameOptionsSkillConfigure = 462,
    MenuCustomGameOptionsSkillInitial = 463,
    MenuCustomGameOptionsSkillMultiplier = 464,
    MenuCustomGameOptionsSkillMultiplierTooltip = 465,
    MenuCustomGameOptionsRandomItems = 466,
    MenuCustomGameOptionsRandomItemsDescription = 467,
    MenuCustomGameOptionsExport = 468,
    MenuCustomGameOptionsImport = 469,
    MenuNewsDescription = 470,
    MenuNewsHeadingSocial = 471,
    MenuNewsTitle = 472,
    MenuNewsHeadingUnableToLoad = 473,
    MenuNewsButtonAllNews = 474,
    MenuNewsButtonViewChangelog = 475,
    MenuOptionsButtonDitherFogOfWar = 476,
    MenuOptionsButtonDisableCustomCursor = 477,
    MenuOptionsButtonDisplayArticleInObjectNames = 478,
    MenuOptionsButtonFullscreen = 479,
    MenuOptionsButtonDeveloperMode = 480,
    MenuOptionsButtonDeveloperModeContextMenu = 481,
    MenuOptionsButtonPixelFont = 482,
    MenuOptionsButtonReloadGame = 483,
    MenuOptionsButtonReloadStylesheets = 484,
    MenuOptionsButtonExportGlobalSaveData = 485,
    MenuOptionsButtonImportGlobalSaveData = 486,
    MenuOptionsButtonSaveDataClearAll = 487,
    MenuOptionsButtonSaveDataClearCharacters = 488,
    MenuOptionsButtonSaveDataClearHighscores = 489,
    MenuOptionsButtonSaveDataClearMilestones = 490,
    MenuOptionsButtonSaveDataClearOptions = 491,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 492,
    MenuOptionsButtonSaveDataClearSaves = 493,
    MenuOptionsButtonSkipSplash = 494,
    MenuOptionsButtonToggleDevTools = 495,
    MenuOptionsButtonTooltipsCreatures = 496,
    MenuOptionsButtonOpenLogsFolder = 497,
    MenuOptionsButtonTooltipsDoodads = 498,
    MenuOptionsButtonTooltipsItems = 499,
    MenuOptionsButtonTooltipsTerrain = 500,
    MenuOptionsButtonDropLocationFacing = 501,
    MenuOptionsButtonDropLocationFeet = 502,
    MenuOptionsButtonStartTraceRecording = 503,
    MenuOptionsButtonStopTraceRecording = 504,
    MenuOptionsButtonTracingRecordingtTooltip = 505,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 506,
    MenuOptionsDescription = 507,
    MenuOptionsHeadingAudio = 508,
    MenuOptionsHeadingDeveloper = 509,
    MenuOptionsHeadingGameplayOptions = 510,
    MenuOptionsHeadingGeneralOptions = 511,
    MenuOptionsHeadingControls = 512,
    MenuOptionsHeadingLanguage = 513,
    MenuOptionsHeadingPowerPreference = 514,
    MenuOptionsHeadingModOptions = 515,
    MenuOptionsHeadingOther = 516,
    MenuOptionsHeadingSaveData = 517,
    MenuOptionsHeadingTooltips = 518,
    MenuOptionsHeadingTooltipsTile = 519,
    MenuOptionsHeadingVideo = 520,
    MenuOptionsLabelInterfaceScale = 521,
    MenuOptionsLabelTooltipDelay = 522,
    MenuOptionsLabelDirectionTurnDelay = 523,
    MenuOptionsLabelMouseTurnDelay = 524,
    MenuOptionsTooltipTurnDelay = 525,
    MenuOptionsTooltipMouseTurnDelay = 526,
    MenuOptionsTooltipUiScaleClamped = 527,
    MenuOptionsTooltipControlsFilter = 528,
    MenuOptionsLabelVolumeEffects = 529,
    MenuOptionsLabelVolumeMusic = 530,
    MenuOptionsTabAudio = 531,
    MenuOptionsTabDeveloper = 532,
    MenuOptionsTabGameplay = 533,
    MenuOptionsTabGeneral = 534,
    MenuOptionsTabControls = 535,
    MenuOptionsTabMods = 536,
    MenuOptionsTabSaveData = 537,
    MenuOptionsTabVideo = 538,
    MenuOptionsTitle = 539,
    MenuOptionsTooltipMusicNextTrack = 540,
    MenuOptionsBindChoose = 541,
    MenuOptionsBindChooseAdd = 542,
    MenuOptionsBindLabelModifier = 543,
    MenuOptionsBindButtonResetTooltip = 544,
    MenuOptionsBindButtonDeleteTooltip = 545,
    MenuOptionsBindButtonAddTooltip = 546,
    MenuOptionsBindButtonAddMacroTooltip = 547,
    MenuOptionsButtonUnlockAllMilestones = 548,
    MenuOptionsButtonUnlockAllCraftingRecipes = 549,
    MenuOptionsButtonAlternatingDirectionMovement = 550,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 551,
    MenuOptionsButtonAlwaysShowMoreInformation = 552,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 553,
    MenuOptionsButtonAutoGatherHarvest = 554,
    MenuOptionsButtonAutoGatherHarvestTooltip = 555,
    MenuOptionsButtonDisableUIEffects = 556,
    MenuOptionsButtonDisableUIEffectsTooltip = 557,
    MenuOptionsButtonAutoAttack = 558,
    MenuOptionsButtonAutoAttackTooltip = 559,
    MenuOptionsButtonAutoPickup = 560,
    MenuOptionsButtonAutoPickupTooltip = 561,
    MenuOptionsButtonAutoPickupOnIdle = 562,
    MenuOptionsButtonAutoPickupOnIdleTooltip = 563,
    MenuOptionsButtonDropOnDismantle = 564,
    MenuOptionsButtonDropOnDismantleTooltip = 565,
    MenuOptionsButtonDropOnGatherHarvest = 566,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 567,
    MenuOptionsButtonKeepSortActive = 568,
    MenuOptionsButtonKeepSortActiveTooltip = 569,
    MenuOptionsButtonProtectCraftingItemContainers = 570,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 571,
    MenuOptionsButtonProtectCraftingItemsInInventory = 572,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 573,
    MenuOptionsButtonUseAdjacentContainers = 574,
    MenuOptionsButtonUseAdjacentContainersTooltip = 575,
    MenuOptionsButtonHideEquippedHeadgear = 576,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 577,
    MenuOptionsButtonAutoSave = 578,
    MenuOptionsButtonAutoSaveTooltip = 579,
    MenuOptionsRangeAutoSaveTimerLabel = 580,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 581,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 582,
    MenuOptionsButtonWarnOnDangerousActions = 583,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 584,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 585,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 586,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 587,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 588,
    MenuOptionsHeadingWarnWhenBreakingItems = 589,
    MenuOptionsButtonSaveDataClearBindings = 590,
    MenuOptionsTooltipDialogOpacity = 591,
    MenuOptionsLabelDialogOpacity = 592,
    MenuOptionsDeveloperLogSourceFilterHeading = 593,
    MenuOptionsDeveloperUIExperiments = 594,
    MenuOptionsDeveloperUIExperimentsDescription = 595,
    MenuOptionsAudioVolumeDisplay = 596,
    MenuOptionsAudioInputSoundOnTyping = 597,
    MenuOptionsMusicPlaylist = 598,
    MenuOptionsButtonConfigureBindings = 599,
    MenuPauseButtonContinue = 600,
    MenuPauseButtonOptions = 601,
    MenuPauseButtonModes = 602,
    MenuPauseButtonPaused = 603,
    MenuPauseButtonMultiplayer = 604,
    MenuPauseButtonTitleScreen = 605,
    MenuPauseButtonStopServer = 606,
    MenuPauseHeadingPaused = 607,
    MenuPauseParagraphPaused = 608,
    MenuPauseHeadingNotPaused = 609,
    MenuPauseParagraphNotPaused = 610,
    MenuPauseHeadingDedicatedServer = 611,
    MenuPauseParagraphDedicatedServer = 612,
    MenuModesTitle = 613,
    MenuModesDescription = 614,
    MenuMultiplayerOptionsTitle = 615,
    MenuMultiplayerOptionsDescription = 616,
    MenuMultiplayerOptionsOpenServer = 617,
    MenuMultiplayerOptionsOpenServerDescription = 618,
    MenuMultiplayerOptionsCopyGameCode = 619,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 620,
    MenuMultiplayerOptionsInviteSteamFriends = 621,
    MenuMultiplayerOptionsCheckConnectionHeading = 622,
    MenuMultiplayerOptionsCheckConnectionParagraph = 623,
    MenuMultiplayerOptionsCheckConnectionButton = 624,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 625,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 626,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 627,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 628,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 629,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 630,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 631,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 632,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 633,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 634,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 635,
    MenuJoinServerTitle = 636,
    MenuJoinServerDescription = 637,
    MenuJoinServerInputPlaceholder = 638,
    MenuJoinServerNext = 639,
    MenuJoinServerChooseModifiersTitle = 640,
    MenuJoinServerChooseModifiersDescription = 641,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 642,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 643,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 644,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 645,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 646,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 647,
    MenuSharedMultiplayerChoicePVP = 648,
    MenuSharedMultiplayerChoicePVPDescription = 649,
    MenuSharedMultiplayerDescription = 650,
    MenuSharedMultiplayerMessageOfTheDay = 651,
    MenuSharedMultiplayerMaxPlayers = 652,
    MenuSharedRealTimeTickSpeedTooltip = 653,
    MenuSharedRealTimeTickSpeedLabel = 654,
    MenuSharedButtonDefault = 655,
    MenuSharedValueMillseconds = 656,
    MenuSharedValuePercentage = 657,
    MenuSharedMilestonesNotUnlockable = 658,
    MenuSharedMilestonesNotUnlockableDescription = 659,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 660,
    MenuSharedButtonDisableAll = 661,
    MenuSharedButtonEnableAll = 662,
    MenuSharedMilestoneModifiersSelected = 663,
    MiscSortBy = 664,
    MiscSortDirection = 665,
    MiscFilter = 666,
    MiscPlayerNameDefault = 667,
    MiscPlayerNameServer = 668,
    MiscSaveNameDefault = 669,
    MiscSaveNameDailyChallenge = 670,
    MiscSaveNameChallenge = 671,
    MiscSaveVersionUnknown = 672,
    MiscVersion = 673,
    MiscTime = 674,
    MiscTimeMeridiem = 675,
    MiscError = 676,
    MiscContextMenuCopyTooltip = 677,
    MiscBindableOr = 678,
    MiscBindableNoBindings = 679,
    DifficultyOptionsPeaceful = 680,
    DifficultyOptionsAberrantSpawnsDisabled = 681,
    DifficultyOptionsAberrantSpawnsOnly = 682,
    DifficultyOptionsCreatureSpawningDisabled = 683,
    DifficultyOptionsCreatureSpawnsDefault = 684,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 685,
    DifficultyOptionsCreatureSpawnsNoAberrants = 686,
    DifficultyOptionsSpawnLimit = 687,
    DifficultyOptionsRespawn = 688,
    DifficultyOptionsEternalNight = 689,
    DifficultyOptionsEternalDay = 690,
    DifficultyOptionsTimeInitial = 691,
    DifficultyOptionsTimeFrozen = 692,
    DifficultyOptionsTimeDayLength = 693,
    DifficultyOptionsTimeDayPercent = 694,
    DifficultyOptionsNoItems = 695,
    DifficultyOptionsBenignityInitial = 696,
    DifficultyOptionsBenignityMultiplier = 697,
    DifficultyOptionsMalignityInitial = 698,
    DifficultyOptionsMalignityMultiplier = 699,
    DifficultyOptionsWeightBonus = 700,
    DifficultyOptionsStatInitial = 701,
    DifficultyOptionsStatMax = 702,
    DifficultyOptionsStatMultiplier = 703,
    DifficultyOptionsStatusEffectStartWith = 704,
    DifficultyOptionsStatusEffectUntreatable = 705,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 706,
    DifficultyOptionsNoRandomSkills = 707,
    DifficultyOptionsSkillStartingCount = 708,
    DifficultyOptionsSkillGainMultiplier = 709,
    DifficultyOptionsSkillInitial = 710,
    DifficultyOptionsStatusEffectPermanent = 711,
    DifficultyOptionsStatusEffectRateMultiplier = 712,
    DifficultyOptionsStatusEffectMultiplier = 713,
    EquipmentBack = 714,
    EquipmentBelt = 715,
    EquipmentChest = 716,
    EquipmentFeet = 717,
    EquipmentHands = 718,
    EquipmentHead = 719,
    EquipmentLeftHand = 720,
    EquipmentLeftHandOption = 721,
    EquipmentLegs = 722,
    EquipmentNeck = 723,
    EquipmentRightHand = 724,
    EquipmentRightHandOption = 725,
    EquipmentUse = 726,
    HudFilter = 727,
    QuickSlot1 = 728,
    QuickSlot2 = 729,
    QuickSlot3 = 730,
    QuickSlot4 = 731,
    QuickSlot5 = 732,
    QuickSlot6 = 733,
    QuickSlot7 = 734,
    QuickSlot8 = 735,
    QuickSlot9 = 736,
    TabCrafting = 737,
    TabDismantle = 738,
    Version = 739,
    WindowTitleContainer = 740,
    WindowTitleCrafting = 741,
    WindowTitleEquipment = 742,
    WindowTitleInventory = 743
}
export default UiTranslation;
