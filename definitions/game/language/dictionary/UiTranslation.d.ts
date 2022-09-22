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
 * Ui messages that are on elements that don't change
 */
declare enum UiTranslation {
    SharedTooltipHint = 0,
    GameSharedInspectionSectionSummary = 1,
    GameContextMenuTooltipOpenBindings = 2,
    GameActionGather = 3,
    GameActionOpen = 4,
    GameStaticButtonRespawn = 5,
    GameStaticButtonRespawnInCasualMode = 6,
    GameStaticButtonRespawnAsNewCharacter = 7,
    GameDialogSharedContextMenuResetPosition = 8,
    GameDialogSharedIslandDropdownLabel = 9,
    GameDialogEquipmentTooltipUnequip = 10,
    GameDialogMessagesOptionTimestamp = 11,
    GameDialogMessagesOptionShowSendButton = 12,
    GameDialogMessagesOptionShowOptionsButton = 13,
    GameDialogMessagesOptionMaxMessages = 14,
    GameDialogMessagesOptionUnfocusOnSend = 15,
    GameDialogMessagesEditFiltersLabelName = 16,
    GameDialogMessagesEditFiltersButtonDelete = 17,
    GameDialogMessagesEditFiltersButtonSave = 18,
    GameDialogMessagesEditFiltersButtonReset = 19,
    GameDialogMessagesEditFiltersButtonNew = 20,
    GameDialogNotesNoteTime = 21,
    GameDialogNotesNoteNumber = 22,
    GameDialogNotesNoteLockedTitle = 23,
    GameDialogNotesNoteLockedDescription = 24,
    GameDialogNotesLinkId = 25,
    GameDialogNotesLinkLearnMore = 26,
    GameDialogNotesSettingsPinUnreadNotesAutomatically = 27,
    GameDialogMilestonesInvisibleMilestone = 28,
    GameDialogMilestonesProgress = 29,
    GameDialogMilestonesProgressHidden = 30,
    GameDialogMilestonesMilestone = 31,
    GameDialogMilestonesTooltipHidden = 32,
    GameDialogMilestonesTooltipInvisible = 33,
    GameDialogMilestonesSortName = 34,
    GameDialogMilestonesSortProgress = 35,
    GameDialogSkillsSkill = 36,
    GameDialogSkillsSkillHover = 37,
    GameDialogSkillsSortName = 38,
    GameDialogSkillsSortLevel = 39,
    GameDialogMoreInformationName = 40,
    GameDialogMoreInformationText = 41,
    GameDialogMoreInformationNoInformation = 42,
    GameDialogMapDurability = 43,
    GameDialogMapTooltipRiddle = 44,
    GameDialogMapTooltipRotateClockwise = 45,
    GameDialogMapTooltipRotateCounterClockwise = 46,
    GameDialogMapTooltipFlipHorizontal = 47,
    GameDialogMapTooltipFlipVertical = 48,
    GameDialogMapTooltipResetView = 49,
    GameDialogMapTooltipCopyMap = 50,
    GameDialogMapTooltipCopyMapRequirementMissing = 51,
    GameDialogMapCheckButtonAlwaysOpaque = 52,
    GameDialogMapCheckButtonUseOnlyIntegerZoomLevels = 53,
    GameDialogMapLabelTheme = 54,
    GameDialogQuestsLink = 55,
    GameDialogQuestsChildQuests = 56,
    GameDialogQuestsRequirements = 57,
    GameDialogQuestsActiveQuests = 58,
    GameDialogQuestsCompletedQuests = 59,
    GameDialogQuestsCompleteQuest = 60,
    GameDialogIslandsRenameIsland = 61,
    GameDialogIslandsSetSail = 62,
    GameDialogIslandsCloseOnTravel = 63,
    GameTooltipInspect = 64,
    GameTooltipShowMoreInformation = 65,
    GameTooltipDefenseLabelBase = 66,
    GameTooltipDefenseLabelVehicleBonus = 67,
    GameTooltipDefenseInsulationWeight = 68,
    GameTooltipDefenseInsulationNotRequired = 69,
    GameTooltipItemUseLabelMaxWeight = 70,
    GameTooltipMagicalLabel = 71,
    GameTooltipSharedUsesLabel = 72,
    GameTooltipRecipeLabelReputation = 73,
    GameTooltipRecipeLabelSkill = 74,
    GameTooltipRecipeLabelLevel = 75,
    GameTooltipRecipeLabelEfficacy = 76,
    GameTooltipRecipeLabelEfficacyHigh = 77,
    GameTooltipRecipeLabelEfficacyHighest = 78,
    GameTooltipRecipeLabelEfficacyLow = 79,
    GameTooltipRecipeLabelEfficacyLowest = 80,
    GameTooltipRecipeLabelEfficacyMed = 81,
    GameTooltipRecipeLabelEfficacyLabel = 82,
    GameTooltipRecipeLabelSuccessChance = 83,
    GameTooltipRecipeLabelQualityChance = 84,
    GameTooltipRecipeNearby = 85,
    GameTooltipRecipeFireSource = 86,
    GameTooltipRecipeRequirement = 87,
    GameTooltipRecipeLabelRequired = 88,
    GameTooltipRecipeLabelConsumed = 89,
    GameTooltipItemSkillSource = 90,
    GameTooltipItemUse = 91,
    GameTooltipItemUseActionOnConsumeTooltipBase = 92,
    GameTooltipItemUseActionOnConsumeTooltipSkill = 93,
    GameTooltipItemUseActionOnConsumeTooltipQuality = 94,
    GameTooltipItemUseActionOnConsumeTooltipMagical = 95,
    GameTooltipSharedUseActionTierLabel = 96,
    GameTooltipItemUseActionSharedLabelRequirements = 97,
    GameTooltipItemUseActionDismantleProduces = 98,
    GameTooltipSharedUseLabelLightSource = 99,
    GameTooltipItemUseLabelTelescopy = 100,
    GameTooltipItemDecay = 101,
    GameTooltipItemDecayExact = 102,
    GameTooltipItemDecayRate = 103,
    GameTooltipItemDecayRateTooltip = 104,
    GameTooltipItemWeight = 105,
    GameTooltipItemWeightBase = 106,
    GameTooltipItemWeightStored = 107,
    GameTooltipItemWeightStoredReduction = 108,
    GameTooltipItemLabelRange = 109,
    GameTooltipItemMagicalSource = 110,
    GameTooltipItemGroupingsLabel = 111,
    GameTooltipItemGroup = 112,
    GameTooltipItemLabelUsesWhenBuilt = 113,
    GameTooltipItemWorth = 114,
    GameTooltipItemProtected = 115,
    GameTooltipItemProtectedContainer = 116,
    GameTooltipItemVehicle = 117,
    GameTooltipItemVehicleMovementSpeed = 118,
    GameTooltipItemVehicleDefenseBonus = 119,
    GameTooltipItemLabelDismantle = 120,
    GameTooltipItemLabelDismantleRequirement = 121,
    GameTooltipItemQuantityMultiplier = 122,
    GameTooltipItemUseAttack = 123,
    GameTooltipItemUseThrowDamage = 124,
    GameTooltipItemUseCrafting = 125,
    GameTooltipItemUseOffering = 126,
    GameTooltipItemUseEquipDefense = 127,
    GameTooltipItemUseEquipDefenseAttribute = 128,
    GameTooltipItemLabelDamage = 129,
    GameTooltipItemBarterCreditTrade = 130,
    GameTooltipItemBarterCredit = 131,
    GameTooltipItemLabelIsland = 132,
    GameTooltipSharedLabelWeightCapacity = 133,
    GameTooltipSharedLabelCivilizationScore = 134,
    GameTooltipSharedLabelGrowingSpeed = 135,
    GameTooltipSharedLabelInsulation = 136,
    GameTooltipSharedLabelPreservation = 137,
    GameTooltipSharedLabelDurability = 138,
    GameTooltipSharedDurabilityMagicalDamageReduction = 139,
    GameTooltipSharedDurabilityMagicalDamageRegeneration = 140,
    GameTooltipSharedLabelContents = 141,
    GameTooltipSkillCurrent = 142,
    GameTooltipSkillReputationImpact = 143,
    GameTooltipSkillCanIncrease = 144,
    GameTooltipSkillBonuses = 145,
    GameTooltipSkillBonus = 146,
    GameTooltipMilestoneProgress = 147,
    GameTooltipMilestoneDiscovered = 148,
    GameTooltipSharedMagicalProperty = 149,
    GameTooltipSharedMagicalPropertyOutOf = 150,
    GameTooltipSharedLabel = 151,
    GameTooltipSharedLabelHead = 152,
    GameTooltipSharedLabelTail = 153,
    GameTooltipSharedLabelStart = 154,
    GameTooltipSharedLabelEnd = 155,
    GameTooltipIslandBiome = 156,
    GameTooltipIslandUndiscovered = 157,
    GameTooltipIslandUnnamed = 158,
    GameTooltipIslandSelf = 159,
    GameTooltipIslandPlayers = 160,
    GameTooltipIslandNPCs = 161,
    GameTooltipIslandModifiers = 162,
    GameTooltipIslandMaps = 163,
    GameTooltipIslandCoordinates = 164,
    GameTooltipIslandCoordinatesLabel = 165,
    GameTooltipActionNone = 166,
    GameTooltipEquipSlotOffHandDisabledTwoHandedOffHand = 167,
    GameTooltipEquipSlotOffHandDisabledTwoHandedMainHand = 168,
    GameStatsPercentage = 169,
    GameStatsStatAttack = 170,
    GameStatsStatGeneric = 171,
    GameStatsStatGenericWithMax = 172,
    GameStatsStatbar = 173,
    GameStatsStatHealthTooltip = 174,
    GameStatsStatStaminaTooltip = 175,
    GameStatsStatHungerTooltip = 176,
    GameStatsStatThirstTooltip = 177,
    GameStatsStatHealthStatusWarning = 178,
    GameStatsStatStaminaStatusWarning = 179,
    GameStatsStatHungerStatusWarning = 180,
    GameStatsStatThirstStatusWarning = 181,
    GameStatsStatWeightStatusWarning = 182,
    GameStatsStatStaminaStatusBad = 183,
    GameStatsStatHungerStatusBad = 184,
    GameStatsStatThirstStatusBad = 185,
    GameStatsStatWeightStatusBad = 186,
    GameStatsStatReputationTooltipAverageReputation = 187,
    GameStatsStatReputationTooltipDifficulty = 188,
    GameStatsStatReputationTooltipDifficultyEasy = 189,
    GameStatsStatReputationTooltipDifficultyHard = 190,
    GameStatsStatReputationTooltipDifficultyInfantile = 191,
    GameStatsStatReputationTooltipDifficultyInsane = 192,
    GameStatsStatReputationTooltipDifficultyMedium = 193,
    GameStatsStatReputationTooltipDifficultyNightmare = 194,
    GameStatsStatReputationTooltipDifficultySimple = 195,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 196,
    GameStatsStatReputationTooltipDifficultyVeryHard = 197,
    GameStatsStatReputationTooltipBenignity = 198,
    GameStatsStatReputationTooltipMalignity = 199,
    GameStatsStatReputationTooltipScore = 200,
    GameStatsStatReputationTooltipCivilizationScore = 201,
    GameStatsStatReputationTooltipTurn = 202,
    GameStatsStatReputationTooltipTicks = 203,
    GameStatsStatWeightTooltip = 204,
    GameStatsStatAttackTooltipTactics = 205,
    GameStatsStatAttackTooltipMainHand = 206,
    GameStatsStatAttackTooltipOffHand = 207,
    GameStatsStatDefenseTooltipBase = 208,
    GameStatsStatDefenseTooltipBlunt = 209,
    GameStatsStatDefenseTooltipParrying = 210,
    GameStatsStatDefenseTooltipFire = 211,
    GameStatsStatDefenseTooltipCold = 212,
    GameStatsStatDefenseTooltipPiercing = 213,
    GameStatsStatDefenseTooltipSlashing = 214,
    GameItemBarterCredit = 215,
    GameMenuBarButtonTooltipBindable = 216,
    GameMenuBarButtonTooltipSaveSize = 217,
    GameMenuBarButtonTooltipSaveTurnsAgo = 218,
    GameMenuBarButtonTooltipSaveLastTime = 219,
    GameMenuBarButtonTooltipNotesUnread = 220,
    GameMenuBarButtonTooltipMilestonesDisabled = 221,
    GameMenuBarButtonTooltipQuestsDisabled = 222,
    GameMenuBarContextMenuActionRemoveItem = 223,
    GameMenuBarContextMenuActionInsertItem = 224,
    GameMenuBarContextMenuActionReset = 225,
    GameActionBarContextMenuDisplayBindings = 226,
    GameActionBarContextMenuAddSlot = 227,
    GameActionBarContextMenuRemoveSlot = 228,
    GameActionBarContextMenuConfigure = 229,
    GameActionBarConfigurationDrawerSlotTitle = 230,
    GameActionBarConfigurationDrawerSlotHintUse = 231,
    GameActionBarConfigurationDrawerSlotHintToggle = 232,
    GameActionBarConfigurationDrawerColumnTitleActions = 233,
    GameActionBarConfigurationDrawerColumnTitleItemActions = 234,
    GameActionBarConfigurationDrawerButtonEditBindings = 235,
    GameActionBarConfigurationDrawerButtonRemoveSlot = 236,
    GameActionBarConfigurationDrawerButtonRemoveSlotDescription = 237,
    GameActionBarConfigurationDrawerColumnTitleInapplicable = 238,
    GameActionBarConfigurationDrawerButtonUseOnMove = 239,
    GameActionBarConfigurationDrawerButtonUseOnMoveDescription = 240,
    GameActionBarConfigurationDrawerButtonUseExactItem = 241,
    GameActionBarConfigurationDrawerButtonUseByType = 242,
    GameActionBarConfigurationDrawerButtonUseAny = 243,
    GameActionBarSlotTooltipHintUse = 244,
    GameActionBarSlotTooltipHintConfigure = 245,
    GameActionBarSlotTooltipHintUseOnMove = 246,
    GameActionBarSlotTooltipHintClear = 247,
    GameMessagesButtonSend = 248,
    GameMessagesContextMenuShowAsDialog = 249,
    GameMessagesContextMenuClear = 250,
    GameMessagesContextMenuCopy = 251,
    GameMessagesContextMenuExport = 252,
    GameMessagesFilter = 253,
    GameMessagesFiltersEdit = 254,
    GameMessagesNewNote = 255,
    GameMessagesTurn = 256,
    GameMessagesDedicatedServerBackup = 257,
    GameMessagesDedicatedServerBackupLimitReached = 258,
    GameMessagesPlaceholderChat = 259,
    GameTileInspectionCannotSeeTile = 260,
    GameQuickslotsTooltipUsageHint = 261,
    MenuAboutTitle = 262,
    MenuAboutDescription = 263,
    MenuAboutGameDescription = 264,
    MenuAboutSectionTeam = 265,
    MenuAboutTeamMemberResponsibilities = 266,
    MenuAboutTeamMemberName = 267,
    MenuAboutTeamMemberNickname = 268,
    MenuAboutSectionContributors = 269,
    MenuAboutSectionSpecialThanks = 270,
    MenuAboutTextSpecialThanksTestorsAndDonators = 271,
    MenuAboutSectionLibraries = 272,
    MenuAboutSectionLibrariesDescription = 273,
    MenuAboutLabelVersion = 274,
    MenuAboutLabelVersionBuild = 275,
    MenuAboutLabelVersionBuildTime = 276,
    MenuBindings = 277,
    MenuBindingsDescription = 278,
    MenuBindingsTooltipBindConflicts = 279,
    MenuBindingsManagedBindableGameActionBarUseSlot = 280,
    MenuBindingsManagedBindableGameActionBarAssignSlot = 281,
    MenuBindingsManagedBindableGameActionBarToggleUseOnMoveSlot = 282,
    MenuChangelogTitle = 283,
    MenuChangelogDescription = 284,
    MenuChangelogHeadingUnchartedWaters = 285,
    MenuChangelogFailedToLoadTitle = 286,
    MenuChangelogFailedToLoadDescription = 287,
    MenuChangelogHeadingChangeCount = 288,
    MenuChangelogButtonCopyChangelog = 289,
    MenuCharacterCreationButtonRandomizeName = 290,
    MenuCharacterCreationButtonExportTooltip = 291,
    MenuCharacterCreationButtonImportTooltip = 292,
    MenuCharacterCreationButtonStartGame = 293,
    MenuCharacterCreationButtonJoinGame = 294,
    MenuCharacterCreationDescription = 295,
    MenuCharacterCreationHeadingHairColor = 296,
    MenuCharacterCreationHeadingHairStyle = 297,
    MenuCharacterCreationHeadingSkinTone = 298,
    MenuCharacterCreationLabelName = 299,
    MenuCharacterCreationTitle = 300,
    MenuCharacterCreationButtonRotateLeftTooltip = 301,
    MenuCharacterCreationButtonRotateRightTooltip = 302,
    MenuCharacterCreationButtonRandomizeTooltip = 303,
    MenuCharacterSelectionButtonNewCharacter = 304,
    MenuCharacterSelectionDescription = 305,
    MenuCharacterSelectionHeadingNoCharacters = 306,
    MenuCharacterSelectionTitle = 307,
    MenuCharacterSelectionLabelLastUse = 308,
    MenuCharacterSelectionLabelUseCount = 309,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 310,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 311,
    MenuMultiplayerDescription = 312,
    MenuMultiplayerTitle = 313,
    MenuMultiplayerButtonJoinById = 314,
    MenuMultiplayerServerLabelReputation = 315,
    MenuMultiplayerServerLabelDays = 316,
    MenuMultiplayerServerLabelIsland = 317,
    MenuMultiplayerButtonNewGame = 318,
    MenuMultiplayerButtonLoadGame = 319,
    MenuMultiplayerServerTooltipPVP = 320,
    MenuMultiplayerServerTooltipModsLabel = 321,
    MenuMultiplayerServerTooltipFriendsLabel = 322,
    MenuMultiplayerServerPlayers = 323,
    MenuMultiplayerServerLobbyType = 324,
    MenuMultiplayerServerRegion = 325,
    MenuMultiplayerServerHost = 326,
    MenuMultiplayerServerVersion = 327,
    MenuMultiplayerServerVersionUnknown = 328,
    MenuMultiplayerServerDedicated = 329,
    MenuMultiplayerHeadingPlayersOnline = 330,
    MenuMultiplayerServerModUnableToLoad = 331,
    MenuGameEndTitleDead = 332,
    MenuGameEndTitleWon = 333,
    MenuGameEndShareFacebook = 334,
    MenuGameEndShareTwitter = 335,
    MenuGameEndContinueAsGhost = 336,
    MenuGameEndRespawnInCasualMode = 337,
    MenuGameEndRespawnAsNewCharacter = 338,
    MenuGameEndReturnToIsland = 339,
    MenuGameEndExitToMenu = 340,
    MenuHelpTitle = 341,
    MenuHelpDescription = 342,
    MenuHelpLabelSearch = 343,
    MenuHighscoresTitle = 344,
    MenuHighscoresDescription = 345,
    MenuHighscoresDifficultyFilterAll = 346,
    MenuHighscoresHighscoreLabelDifficulty = 347,
    MenuHighscoresHighscoreLabelTurns = 348,
    MenuHighscoresHighscoreLabelScore = 349,
    MenuHighscoresHighscoreLabelPlace = 350,
    MenuHighscoresHighscoreLabelDate = 351,
    MenuHighscoresHighscoreLabelDeathBy = 352,
    MenuHighscoresHighscoreTitle = 353,
    MenuHighscoresCharacterNameUnknown = 354,
    MenuHighscoresHighscoreReplayWithSettings = 355,
    MenuLoadGameButtonSaveSlot = 356,
    MenuLoadGameButtonNewGame = 357,
    MenuLoadGameButtonNewGameButtonImportTooltip = 358,
    MenuLoadGameDescription = 359,
    MenuLoadGameSaveButtonDeleteTooltip = 360,
    MenuLoadGameSaveButtonEditNameTooltip = 361,
    MenuLoadGameSaveButtonExportTooltip = 362,
    MenuLoadGameSaveTooltipLabelCreatedTime = 363,
    MenuLoadGameSaveTooltipLabelSaveTime = 364,
    MenuLoadGameSaveTooltipLabelGameMode = 365,
    MenuLoadGameSaveTooltipLabelScore = 366,
    MenuLoadGameSaveTooltipLabelSeed = 367,
    MenuLoadGameSaveTooltipLabelTurns = 368,
    MenuLoadGameSaveTooltipLabelMods = 369,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 370,
    MenuLoadGameSaveTooltipMod = 371,
    MenuLoadGameSaveTooltipNew = 372,
    MenuLoadGameSaveGame = 373,
    MenuLoadGameSaveGameDescription = 374,
    MenuLoadGameTitle = 375,
    MenuLoadGameLabelSelected = 376,
    MenuLoadGameButtonDeleteSelectedTooltip = 377,
    MenuLoadGameImportSaveFailure = 378,
    MenuMainButtonAbout = 379,
    MenuMainButtonChangelog = 380,
    MenuMainButtonContinueGame = 381,
    MenuMainButtonMultiplayer = 382,
    MenuMainButtonHighscores = 383,
    MenuMainButtonLoadGame = 384,
    MenuMainButtonMods = 385,
    MenuMainButtonModsAllDisabled = 386,
    MenuMainButtonNewGame = 387,
    MenuMainButtonNews = 388,
    MenuMainButtonOptions = 389,
    MenuMainButtonQuitGame = 390,
    MenuModsWarningModsDisabledTitle = 391,
    MenuModsWarningModsDisabledDescription = 392,
    MenuModsButtonModdingGuide = 393,
    MenuModsButtonOpenFolder = 394,
    MenuModsButtonOpenWorkshop = 395,
    MenuModsDescription = 396,
    MenuModsTitle = 397,
    MenuModsTooltipLabelAuthor = 398,
    MenuModsTooltipLabelTags = 399,
    MenuModsTooltipLabelDependencies = 400,
    MenuModsTooltipLabelProvides = 401,
    MenuModsTooltipLabelVersion = 402,
    MenuModsTooltipLabelDescription = 403,
    MenuModsTooltipLabelInstallDate = 404,
    MenuModsTooltipLabelCreatedDate = 405,
    MenuModsTooltipLabelLastUpdatedDate = 406,
    MenuModsTooltipPreventsMilestoneUnlocks = 407,
    MenuModsTooltipModOptions = 408,
    MenuModsTooltipPublishMod = 409,
    MenuModsTooltipModMoreInformation = 410,
    MenuModsTooltipUninstallMod = 411,
    MenuModsTooltipViewInSteamWorkshop = 412,
    MenuModsTooltipViewGitHub = 413,
    MenuModsTooltipOpenFolder = 414,
    MenuModsButtonEditInternalMods = 415,
    MenuModsSectionHeading = 416,
    MenuModsSubmenuEditInternalModsTitle = 417,
    MenuModsSubmenuEditInternalModsDescription = 418,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 419,
    MenuNewGameButtonNext = 420,
    MenuNewGameButtonStartServer = 421,
    MenuNewGameDescription = 422,
    MenuNewGameLabelEditName = 423,
    MenuNewGameLabelEditSeed = 424,
    MenuNewGamePlaceholderEditSeed = 425,
    MenuNewGameTitle = 426,
    MenuNewGameChoiceDifficulty = 427,
    MenuNewGameChoiceDescription = 428,
    MenuNewGameChoiceSingleplayer = 429,
    MenuNewGameChoiceSingleplayerDescription = 430,
    MenuNewGameChoiceMultiplayer = 431,
    MenuNewGameChoiceMultiplayerDescription = 432,
    MenuNewGameChoiceTurnModeManual = 433,
    MenuNewGameChoiceTurnModeManualDescription = 434,
    MenuNewGameChoiceTurnModeRealTime = 435,
    MenuNewGameChoiceTurnModeRealTimeDescription = 436,
    MenuNewGameChoiceTurnModeSimulated = 437,
    MenuNewGameChoiceTurnModeSimulatedDescription = 438,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 439,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 440,
    MenuNewGameChoiceDifficultyChallengeDaily = 441,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 442,
    MenuNewGameButtonMilestones = 443,
    MenuNewGameButtonMilestonesDescription = 444,
    MenuNewGameTabGameMode = 445,
    MenuNewGameTabMultiplayer = 446,
    MenuNewGameTabGameplayModifiers = 447,
    MenuNewGameHeadingGameMode = 448,
    MenuNewGameHeadingMultiplayer = 449,
    MenuNewGameHeadingGameplayModifiers = 450,
    MenuNewGameChoiceClientsInheritHostModifiers = 451,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 452,
    MenuNewGameChoiceCustomModifiers = 453,
    MenuNewGameChoiceCustomModifiersDescription = 454,
    MenuMilestoneModifiersTitle = 455,
    MenuMilestoneModifiersDescription = 456,
    MenuCustomGameOptionsTitle = 457,
    MenuCustomGameOptionsDescription = 458,
    MenuCustomGameOptionsRespawnOnDeath = 459,
    MenuCustomGameOptionsRespawnOnDeathDescription = 460,
    MenuCustomGameOptionsUseUnlockedRecipes = 461,
    MenuCustomGameOptionsStartingIslandBiome = 462,
    MenuCustomGameOptionsApplyTravelingEffects = 463,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 464,
    MenuCustomGameOptionsCreaturesPeaceful = 465,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 466,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 467,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 468,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 469,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 470,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 471,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 472,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 473,
    MenuCustomGameOptionsCreaturesAlwaysSpawn = 474,
    MenuCustomGameOptionsCreaturesAllowSpawning = 475,
    MenuCustomGameOptionsCreaturesSpawnLimit = 476,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 477,
    MenuCustomGameOptionsCreatureNone = 478,
    MenuCustomGameOptionsCreatureConfigure = 479,
    MenuCustomGameOptionsBenignityInitial = 480,
    MenuCustomGameOptionsBenignityMultiplier = 481,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 482,
    MenuCustomGameOptionsMalignityInitial = 483,
    MenuCustomGameOptionsMalignityMultiplier = 484,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 485,
    MenuCustomGameOptionsStatMultiplier = 486,
    MenuCustomGameOptionsStatMultiplierTooltip = 487,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 488,
    MenuCustomGameOptionsHeadingGeneral = 489,
    MenuCustomGameOptionsHeadingTravel = 490,
    MenuCustomGameOptionsHeadingTime = 491,
    MenuCustomGameOptionsHeadingStats = 492,
    MenuCustomGameOptionsHeadingReputation = 493,
    MenuCustomGameOptionsHeadingItems = 494,
    MenuCustomGameOptionsHeadingCreatures = 495,
    MenuCustomGameOptionsHeadingSkills = 496,
    MenuCustomGameOptionsHeadingStatusEffects = 497,
    MenuCustomGameOptionsEternalNight = 498,
    MenuCustomGameOptionsEternalNightDescription = 499,
    MenuCustomGameOptionsEternalDay = 500,
    MenuCustomGameOptionsEternalDayDescription = 501,
    MenuCustomGameOptionsTimeFrozen = 502,
    MenuCustomGameOptionsTimeInitial = 503,
    MenuCustomGameOptionsTimeDayLength = 504,
    MenuCustomGameOptionsTimeDayLengthTooltip = 505,
    MenuCustomGameOptionsTimeDayPercent = 506,
    MenuCustomGameOptionsTimeDayPercentTooltip = 507,
    MenuCustomGameOptionsStatStarting = 508,
    MenuCustomGameOptionsStatMax = 509,
    MenuCustomGameOptionsStatStartingDisplay = 510,
    MenuCustomGameOptionsStatMaxDisplay = 511,
    MenuCustomGameOptionsStatNoChange = 512,
    MenuCustomGameOptionsStatBonus = 513,
    MenuCustomGameOptionsStatBonusDisplay = 514,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 515,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 516,
    MenuCustomGameOptionsStatusEffectStartWith = 517,
    MenuCustomGameOptionsStatusEffectUntreatable = 518,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 519,
    MenuCustomGameOptionsSkillInitialRandomCount = 520,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 521,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 522,
    MenuCustomGameOptionsSkillsGlobal = 523,
    MenuCustomGameOptionsSkillNone = 524,
    MenuCustomGameOptionsSkillConfigure = 525,
    MenuCustomGameOptionsSkillInitial = 526,
    MenuCustomGameOptionsSkillMultiplier = 527,
    MenuCustomGameOptionsSkillMultiplierTooltip = 528,
    MenuCustomGameOptionsRandomItems = 529,
    MenuCustomGameOptionsRandomItemsDescription = 530,
    MenuCustomGameOptionsItemDurability = 531,
    MenuCustomGameOptionsItemDurabilityTooltip = 532,
    MenuCustomGameOptionsItemDecay = 533,
    MenuCustomGameOptionsItemDecayTooltip = 534,
    MenuCustomGameOptionsExport = 535,
    MenuCustomGameOptionsImport = 536,
    MenuNewsDescription = 537,
    MenuNewsHeadingSocial = 538,
    MenuNewsTitle = 539,
    MenuNewsHeadingUnableToLoad = 540,
    MenuNewsButtonAllNews = 541,
    MenuNewsButtonViewChangelog = 542,
    MenuOptionsButtonDitherFogOfWar = 543,
    MenuOptionsButtonHealthVignette = 544,
    MenuOptionsButtonHealthVignetteTooltip = 545,
    MenuOptionsButtonDisableCustomCursor = 546,
    MenuOptionsButtonDisplayArticleInObjectNames = 547,
    MenuOptionsButtonDisplayArticleInObjectNamesTooltip = 548,
    MenuOptionsButtonFullscreen = 549,
    MenuOptionsButtonCustomTitleBar = 550,
    MenuOptionsButtonDeveloperMode = 551,
    MenuOptionsButtonDeveloperModeContextMenu = 552,
    MenuOptionsButtonPixelFont = 553,
    MenuOptionsButtonReloadGame = 554,
    MenuOptionsButtonReloadStylesheets = 555,
    MenuOptionsButtonReloadVariableUIImages = 556,
    MenuOptionsButtonExportGlobalSaveData = 557,
    MenuOptionsButtonImportGlobalSaveData = 558,
    MenuOptionsButtonSaveDataBackups = 559,
    MenuOptionsButtonSaveDataBackupsTooltip = 560,
    MenuOptionsButtonSaveDataClearAll = 561,
    MenuOptionsButtonSaveDataClearCharacters = 562,
    MenuOptionsButtonSaveDataClearHighscores = 563,
    MenuOptionsButtonSaveDataClearMilestones = 564,
    MenuOptionsButtonSaveDataClearOptions = 565,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 566,
    MenuOptionsButtonSaveDataClearSaves = 567,
    MenuOptionsButtonSkipSplash = 568,
    MenuOptionsButtonToggleDevTools = 569,
    MenuOptionsButtonTooltipsCreatures = 570,
    MenuOptionsButtonOpenBackupsFolder = 571,
    MenuOptionsButtonOpenLogsFolder = 572,
    MenuOptionsButtonTooltipsDoodads = 573,
    MenuOptionsButtonTooltipsItems = 574,
    MenuOptionsButtonTooltipsTerrain = 575,
    MenuOptionsButtonDropLocationFacing = 576,
    MenuOptionsButtonDropLocationFeet = 577,
    MenuOptionsButtonStartTraceRecording = 578,
    MenuOptionsButtonStopTraceRecording = 579,
    MenuOptionsButtonTracingRecordingtTooltip = 580,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 581,
    MenuOptionsDescription = 582,
    MenuOptionsHeadingAudio = 583,
    MenuOptionsHeadingDeveloper = 584,
    MenuOptionsHeadingGameplayOptions = 585,
    MenuOptionsHeadingGameplayOptionsDescription = 586,
    MenuOptionsHeadingOtherOptions = 587,
    MenuOptionsHeadingControls = 588,
    MenuOptionsHeadingLanguage = 589,
    MenuOptionsHeadingPowerPreference = 590,
    MenuOptionsHeadingModOptions = 591,
    MenuOptionsHeadingOther = 592,
    MenuOptionsHeadingSaveData = 593,
    MenuOptionsHeadingTooltipsTile = 594,
    MenuOptionsHeadingVideo = 595,
    MenuOptionsLabelInterfaceScale = 596,
    MenuOptionsLabelTooltipDelay = 597,
    MenuOptionsLabelDirectionTurnDelay = 598,
    MenuOptionsLabelMouseTurnDelay = 599,
    MenuOptionsLabelFontStyle = 600,
    MenuOptionsTooltipTurnDelay = 601,
    MenuOptionsTooltipMouseTurnDelay = 602,
    MenuOptionsTooltipUiScaleClamped = 603,
    MenuOptionsTooltipControlsFilter = 604,
    MenuOptionsLabelVolumeEffects = 605,
    MenuOptionsLabelVolumeMusic = 606,
    MenuOptionsTabAudio = 607,
    MenuOptionsTabDeveloper = 608,
    MenuOptionsTabGameplay = 609,
    MenuOptionsTabTooltips = 610,
    MenuOptionsTabOther = 611,
    MenuOptionsTabLanguage = 612,
    MenuOptionsTabControls = 613,
    MenuOptionsTabMods = 614,
    MenuOptionsTabSaveData = 615,
    MenuOptionsTabVideo = 616,
    MenuOptionsTabPerformance = 617,
    MenuOptionsHeadingPerformance = 618,
    MenuOptionsTitle = 619,
    MenuOptionsTooltipMusicNextTrack = 620,
    MenuOptionsBindChoose = 621,
    MenuOptionsBindChooseAdd = 622,
    MenuOptionsBindLabelModifier = 623,
    MenuOptionsBindButtonResetTooltip = 624,
    MenuOptionsBindButtonDeleteTooltip = 625,
    MenuOptionsBindButtonAddTooltip = 626,
    MenuOptionsBindButtonAddMacroTooltip = 627,
    MenuOptionsButtonUnlockAllMilestones = 628,
    MenuOptionsButtonUnlockAllCraftingRecipes = 629,
    MenuOptionsButtonAlternatingDirectionMovement = 630,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 631,
    MenuOptionsButtonAlwaysShowMoreInformation = 632,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 633,
    MenuOptionsButtonDisableAcrylicTransparency = 634,
    MenuOptionsButtonDisableAcrylicTransparencyTooltip = 635,
    MenuOptionsButtonDisableOverlaySupport = 636,
    MenuOptionsButtonDisableOverlaySupportTooltip = 637,
    MenuOptionsButtonDisableUIEffects = 638,
    MenuOptionsButtonDisableUIEffectsTooltip = 639,
    MenuOptionsButtonDisableUIOpacity = 640,
    MenuOptionsButtonDisableUIOpacityTooltip = 641,
    MenuOptionsButtonDisableMovementAnimations = 642,
    MenuOptionsButtonDisableMovementAnimationsTooltip = 643,
    MenuOptionsButtonAutoAttack = 644,
    MenuOptionsButtonAutoAttackTooltip = 645,
    MenuOptionsButtonAutoPickUp = 646,
    MenuOptionsButtonAutoPickUpTooltip = 647,
    MenuOptionsButtonAutoPickUpOnIdle = 648,
    MenuOptionsButtonAutoPickUpOnIdleTooltip = 649,
    MenuOptionsButtonDropOnDismantle = 650,
    MenuOptionsButtonDropOnDismantleTooltip = 651,
    MenuOptionsButtonDisableCraftingProtectedItems = 652,
    MenuOptionsButtonDisableCraftingProtectedItemsTooltip = 653,
    MenuOptionsButtonDropOnGatherHarvest = 654,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 655,
    MenuOptionsButtonKeepSortActive = 656,
    MenuOptionsButtonKeepSortActiveTooltip = 657,
    MenuOptionsButtonUseAdjacentContainers = 658,
    MenuOptionsButtonUseAdjacentContainersTooltip = 659,
    MenuOptionsButtonHideEquippedHeadgear = 660,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 661,
    MenuOptionsButtonAutoSave = 662,
    MenuOptionsButtonAutoSaveTooltip = 663,
    MenuOptionsRangeAutoSaveTimerLabel = 664,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 665,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 666,
    MenuOptionsButtonDropIntoContainers = 667,
    MenuOptionsButtonDropIntoContainersTooltip = 668,
    MenuOptionsButtonWarnOnDangerousActions = 669,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 670,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 671,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 672,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 673,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 674,
    MenuOptionsHeadingWarnWhenBreakingItems = 675,
    MenuOptionsButtonSaveDataClearBindings = 676,
    MenuOptionsTooltipDialogOpacity = 677,
    MenuOptionsLabelDialogOpacity = 678,
    MenuOptionsDeveloperLogSourceFilterHeading = 679,
    MenuOptionsDeveloperUIExperiments = 680,
    MenuOptionsDeveloperUIExperimentsDescription = 681,
    MenuOptionsAudioVolumeDisplay = 682,
    MenuOptionsAudioInputSoundOnTyping = 683,
    MenuOptionsMusicPlaylist = 684,
    MenuOptionsButtonConfigureBindings = 685,
    MenuOptionsButtonSaveCompression = 686,
    MenuOptionsButtonSaveCompressionTooltip = 687,
    MenuPauseButtonContinueGame = 688,
    MenuPauseButtonReturnToGame = 689,
    MenuPauseButtonOptions = 690,
    MenuPauseButtonGameSettings = 691,
    MenuPauseButtonPaused = 692,
    MenuPauseButtonMultiplayer = 693,
    MenuPauseButtonHelp = 694,
    MenuPauseButtonTitleScreen = 695,
    MenuPauseButtonStopServer = 696,
    MenuPauseHeadingDedicatedServer = 697,
    MenuPauseTooltipNotPaused = 698,
    MenuPauseParagraphDedicatedServer = 699,
    MenuPauseLabelPaused = 700,
    MenuPauseLabelNotPaused = 701,
    MenuModesTitle = 702,
    MenuModesDescription = 703,
    MenuMultiplayerOptionsTitle = 704,
    MenuMultiplayerOptionsDescription = 705,
    MenuMultiplayerOptionsOpenServer = 706,
    MenuMultiplayerOptionsOpenServerDescription = 707,
    MenuMultiplayerOptionsCopyGameCode = 708,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 709,
    MenuMultiplayerOptionsInviteSteamFriends = 710,
    MenuMultiplayerOptionsCheckConnectionHeading = 711,
    MenuMultiplayerOptionsCheckConnectionParagraph = 712,
    MenuMultiplayerOptionsCheckConnectionButton = 713,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 714,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 715,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 716,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 717,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 718,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 719,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 720,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 721,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 722,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 723,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 724,
    MenuJoinServerTitle = 725,
    MenuJoinServerDescription = 726,
    MenuJoinServerInputPlaceholder = 727,
    MenuJoinServerChooseModifiersTitle = 728,
    MenuJoinServerChooseModifiersDescription = 729,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 730,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 731,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 732,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 733,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 734,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 735,
    MenuSharedMultiplayerChoicePVP = 736,
    MenuSharedMultiplayerChoicePVPDescription = 737,
    MenuSharedMultiplayerChoiceAllowTraveling = 738,
    MenuSharedMultiplayerChoiceAllowTravelingDescription = 739,
    MenuSharedMultiplayerChoiceAllowHardcoreRespawns = 740,
    MenuSharedMultiplayerChoiceAllowHardcoreRespawnsDescription = 741,
    MenuSharedMultiplayerDescription = 742,
    MenuSharedMultiplayerMessageOfTheDay = 743,
    MenuSharedMultiplayerMaxPlayers = 744,
    MenuSharedRealTimeTickSpeedTooltip = 745,
    MenuSharedRealTimeTickSpeedLabel = 746,
    MenuSharedMaxTravelTimeLabel = 747,
    MenuSharedMaxTravelTimeLabelTooltip = 748,
    MenuSharedButtonDefault = 749,
    MenuSharedValueMillseconds = 750,
    MenuSharedValueTurns = 751,
    MenuSharedValuePercentage = 752,
    MenuSharedMilestonesNotUnlockable = 753,
    MenuSharedMilestonesNotUnlockableDescription = 754,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 755,
    MenuSharedButtonDisableAll = 756,
    MenuSharedButtonEnableAll = 757,
    MenuSharedMilestoneModifiersSelected = 758,
    MiscSortBy = 759,
    MiscSortDirection = 760,
    MiscFilter = 761,
    MiscPlayerNameDefault = 762,
    MiscPlayerNameServer = 763,
    MiscSaveNameDefault = 764,
    MiscSaveNameDailyChallenge = 765,
    MiscSaveNameChallenge = 766,
    MiscSaveVersionUnknown = 767,
    MiscVersion = 768,
    MiscVersionBuildInfoTooltip = 769,
    MiscVersionUpdate = 770,
    MiscTime = 771,
    MiscTimeMeridiem = 772,
    MiscError = 773,
    MiscContextMenuCopyTooltip = 774,
    MiscBindableOr = 775,
    MiscBindableNoBindings = 776,
    DifficultyOptionsPeaceful = 777,
    DifficultyOptionsAberrantSpawnsDisabled = 778,
    DifficultyOptionsAberrantSpawnsOnly = 779,
    DifficultyOptionsCreatureSpawningDisabled = 780,
    DifficultyOptionsCreatureAlwaysSpawns = 781,
    DifficultyOptionsCreatureSpawnsDefault = 782,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 783,
    DifficultyOptionsCreatureSpawnsNoAberrants = 784,
    DifficultyOptionsSpawnLimit = 785,
    DifficultyOptionsRespawn = 786,
    DifficultyOptionsEternalNight = 787,
    DifficultyOptionsEternalDay = 788,
    DifficultyOptionsTimeInitial = 789,
    DifficultyOptionsTimeFrozen = 790,
    DifficultyOptionsTimeDayLength = 791,
    DifficultyOptionsTimeDayPercent = 792,
    DifficultyOptionsNoItems = 793,
    DifficultyOptionsRecipes = 794,
    DifficultyOptionsStartingIsland = 795,
    DifficultyOptionsTravelingEffectsDisabled = 796,
    DifficultyOptionsBenignityInitial = 797,
    DifficultyOptionsBenignityMultiplier = 798,
    DifficultyOptionsMalignityInitial = 799,
    DifficultyOptionsMalignityMultiplier = 800,
    DifficultyOptionsWeightBonus = 801,
    DifficultyOptionsStatInitial = 802,
    DifficultyOptionsStatMax = 803,
    DifficultyOptionsStatMultiplier = 804,
    DifficultyOptionsStatusEffectStartWith = 805,
    DifficultyOptionsStatusEffectUntreatable = 806,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 807,
    DifficultyOptionsNoRandomSkills = 808,
    DifficultyOptionsSkillStartingCount = 809,
    DifficultyOptionsSkillGainMultiplier = 810,
    DifficultyOptionsSkillInitial = 811,
    DifficultyOptionsStatusEffectPermanent = 812,
    DifficultyOptionsStatusEffectRateMultiplier = 813,
    DifficultyOptionsStatusEffectMultiplier = 814,
    DifficultyOptionsItemDurabilityMultiplier = 815,
    DifficultyOptionsItemDecayMultiplier = 816,
    EquipmentBack = 817,
    EquipmentChest = 818,
    EquipmentFeet = 819,
    EquipmentHands = 820,
    EquipmentHead = 821,
    EquipmentLegs = 822,
    EquipmentMainHand = 823,
    EquipmentMainHandOption = 824,
    EquipmentNeck = 825,
    EquipmentOffHand = 826,
    EquipmentOffHandOption = 827,
    EquipmentUse = 828,
    EquipmentWaist = 829,
    HudFilter = 830,
    TabCrafting = 831,
    TabDismantle = 832,
    WindowTitleContainer = 833,
    WindowTitleCrafting = 834,
    WindowTitleEquipment = 835,
    WindowTitleInventory = 836
}
export default UiTranslation;
