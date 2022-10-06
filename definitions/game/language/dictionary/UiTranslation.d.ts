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
    GameDialogQuestsLinkChildQuest = 56,
    GameDialogQuestsChildQuests = 57,
    GameDialogQuestsRequirements = 58,
    GameDialogQuestsActiveQuests = 59,
    GameDialogQuestsCompletedQuests = 60,
    GameDialogQuestsCompleteQuest = 61,
    GameDialogIslandsRenameIsland = 62,
    GameDialogIslandsSetSail = 63,
    GameDialogIslandsCloseOnTravel = 64,
    GameTooltipInspect = 65,
    GameTooltipShowMoreInformation = 66,
    GameTooltipDefenseLabelBase = 67,
    GameTooltipDefenseLabelVehicleBonus = 68,
    GameTooltipDefenseInsulationWeight = 69,
    GameTooltipDefenseInsulationNotRequired = 70,
    GameTooltipItemUseLabelMaxWeight = 71,
    GameTooltipMagicalLabel = 72,
    GameTooltipSharedUsesLabel = 73,
    GameTooltipRecipeLabelReputation = 74,
    GameTooltipRecipeLabelSkill = 75,
    GameTooltipRecipeLabelLevel = 76,
    GameTooltipRecipeLabelEfficacy = 77,
    GameTooltipRecipeLabelEfficacyHigh = 78,
    GameTooltipRecipeLabelEfficacyHighest = 79,
    GameTooltipRecipeLabelEfficacyLow = 80,
    GameTooltipRecipeLabelEfficacyLowest = 81,
    GameTooltipRecipeLabelEfficacyMed = 82,
    GameTooltipRecipeLabelEfficacyLabel = 83,
    GameTooltipRecipeLabelSuccessChance = 84,
    GameTooltipRecipeLabelQualityChance = 85,
    GameTooltipRecipeNearby = 86,
    GameTooltipRecipeFireSource = 87,
    GameTooltipRecipeRequirement = 88,
    GameTooltipRecipeLabelRequired = 89,
    GameTooltipRecipeLabelConsumed = 90,
    GameTooltipItemSkillSource = 91,
    GameTooltipItemUse = 92,
    GameTooltipItemUseActionOnConsumeTooltipBase = 93,
    GameTooltipItemUseActionOnConsumeTooltipSkill = 94,
    GameTooltipItemUseActionOnConsumeTooltipQuality = 95,
    GameTooltipItemUseActionOnConsumeTooltipMagical = 96,
    GameTooltipSharedUseActionTierLabel = 97,
    GameTooltipItemUseActionSharedLabelRequirements = 98,
    GameTooltipItemUseActionDismantleProduces = 99,
    GameTooltipSharedUseLabelLightSource = 100,
    GameTooltipItemUseLabelTelescopy = 101,
    GameTooltipItemDecay = 102,
    GameTooltipItemDecayExact = 103,
    GameTooltipItemDecayRate = 104,
    GameTooltipItemDecayRateTooltip = 105,
    GameTooltipItemWeight = 106,
    GameTooltipItemWeightBase = 107,
    GameTooltipItemWeightStored = 108,
    GameTooltipItemWeightStoredReduction = 109,
    GameTooltipItemLabelRange = 110,
    GameTooltipItemMagicalSource = 111,
    GameTooltipItemGroupingsLabel = 112,
    GameTooltipItemGroup = 113,
    GameTooltipItemLabelUsesWhenBuilt = 114,
    GameTooltipItemWorth = 115,
    GameTooltipItemProtected = 116,
    GameTooltipItemProtectedContainer = 117,
    GameTooltipItemVehicle = 118,
    GameTooltipItemVehicleMovementSpeed = 119,
    GameTooltipItemVehicleDefenseBonus = 120,
    GameTooltipItemLabelDismantle = 121,
    GameTooltipItemLabelDismantleRequirement = 122,
    GameTooltipItemQuantityMultiplier = 123,
    GameTooltipItemUseAttack = 124,
    GameTooltipItemUseThrowDamage = 125,
    GameTooltipItemUseCrafting = 126,
    GameTooltipItemUseOffering = 127,
    GameTooltipItemUseEquipDefense = 128,
    GameTooltipItemUseEquipDefenseAttribute = 129,
    GameTooltipItemLabelDamage = 130,
    GameTooltipItemBarterCreditTrade = 131,
    GameTooltipItemBarterCredit = 132,
    GameTooltipItemLabelIsland = 133,
    GameTooltipSharedLabelWeightCapacity = 134,
    GameTooltipSharedLabelCivilizationScore = 135,
    GameTooltipSharedLabelGrowingSpeed = 136,
    GameTooltipSharedLabelInsulation = 137,
    GameTooltipSharedLabelPreservation = 138,
    GameTooltipSharedLabelDurability = 139,
    GameTooltipSharedDurabilityMagicalDamageReduction = 140,
    GameTooltipSharedDurabilityMagicalDamageRegeneration = 141,
    GameTooltipSharedLabelContents = 142,
    GameTooltipSkillCurrent = 143,
    GameTooltipSkillReputationImpact = 144,
    GameTooltipSkillCanIncrease = 145,
    GameTooltipSkillBonuses = 146,
    GameTooltipSkillBonus = 147,
    GameTooltipMilestoneProgress = 148,
    GameTooltipMilestoneDiscovered = 149,
    GameTooltipSharedMagicalProperty = 150,
    GameTooltipSharedMagicalPropertyOutOf = 151,
    GameTooltipSharedLabel = 152,
    GameTooltipSharedLabelHead = 153,
    GameTooltipSharedLabelTail = 154,
    GameTooltipSharedLabelStart = 155,
    GameTooltipSharedLabelEnd = 156,
    GameTooltipIslandBiome = 157,
    GameTooltipIslandUndiscovered = 158,
    GameTooltipIslandUnnamed = 159,
    GameTooltipIslandSelf = 160,
    GameTooltipIslandPlayers = 161,
    GameTooltipIslandNPCs = 162,
    GameTooltipIslandModifiers = 163,
    GameTooltipIslandMaps = 164,
    GameTooltipIslandCoordinates = 165,
    GameTooltipIslandCoordinatesLabel = 166,
    GameTooltipActionNone = 167,
    GameTooltipActionUndiscovered = 168,
    GameTooltipEquipSlotOffHandDisabledTwoHandedOffHand = 169,
    GameTooltipEquipSlotOffHandDisabledTwoHandedMainHand = 170,
    GameStatsPercentage = 171,
    GameStatsStatAttack = 172,
    GameStatsStatGeneric = 173,
    GameStatsStatGenericWithMax = 174,
    GameStatsStatbar = 175,
    GameStatsStatHealthTooltip = 176,
    GameStatsStatStaminaTooltip = 177,
    GameStatsStatHungerTooltip = 178,
    GameStatsStatThirstTooltip = 179,
    GameStatsStatHealthStatusWarning = 180,
    GameStatsStatStaminaStatusWarning = 181,
    GameStatsStatHungerStatusWarning = 182,
    GameStatsStatThirstStatusWarning = 183,
    GameStatsStatWeightStatusWarning = 184,
    GameStatsStatStaminaStatusBad = 185,
    GameStatsStatHungerStatusBad = 186,
    GameStatsStatThirstStatusBad = 187,
    GameStatsStatWeightStatusBad = 188,
    GameStatsStatReputationTooltipAverageReputation = 189,
    GameStatsStatReputationTooltipDifficulty = 190,
    GameStatsStatReputationTooltipDifficultyEasy = 191,
    GameStatsStatReputationTooltipDifficultyHard = 192,
    GameStatsStatReputationTooltipDifficultyInfantile = 193,
    GameStatsStatReputationTooltipDifficultyInsane = 194,
    GameStatsStatReputationTooltipDifficultyMedium = 195,
    GameStatsStatReputationTooltipDifficultyNightmare = 196,
    GameStatsStatReputationTooltipDifficultySimple = 197,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 198,
    GameStatsStatReputationTooltipDifficultyVeryHard = 199,
    GameStatsStatReputationTooltipBenignity = 200,
    GameStatsStatReputationTooltipMalignity = 201,
    GameStatsStatReputationTooltipScore = 202,
    GameStatsStatReputationTooltipCivilizationScore = 203,
    GameStatsStatReputationTooltipTurn = 204,
    GameStatsStatReputationTooltipTicks = 205,
    GameStatsStatWeightTooltip = 206,
    GameStatsStatAttackTooltipTactics = 207,
    GameStatsStatAttackTooltipMainHand = 208,
    GameStatsStatAttackTooltipOffHand = 209,
    GameStatsStatDefenseTooltipBase = 210,
    GameStatsStatDefenseTooltipBlunt = 211,
    GameStatsStatDefenseTooltipParrying = 212,
    GameStatsStatDefenseTooltipFire = 213,
    GameStatsStatDefenseTooltipCold = 214,
    GameStatsStatDefenseTooltipPiercing = 215,
    GameStatsStatDefenseTooltipSlashing = 216,
    GameItemBarterCredit = 217,
    GameMenuBarButtonTooltipBindable = 218,
    GameMenuBarButtonTooltipSaveSize = 219,
    GameMenuBarButtonTooltipSaveTurnsAgo = 220,
    GameMenuBarButtonTooltipSaveLastTime = 221,
    GameMenuBarButtonTooltipNotesUnread = 222,
    GameMenuBarButtonTooltipMilestonesDisabled = 223,
    GameMenuBarButtonTooltipQuestsDisabled = 224,
    GameMenuBarContextMenuActionRemoveItem = 225,
    GameMenuBarContextMenuActionInsertItem = 226,
    GameMenuBarContextMenuActionReset = 227,
    GameActionBarContextMenuDisplayBindings = 228,
    GameActionBarContextMenuAddSlot = 229,
    GameActionBarContextMenuRemoveSlot = 230,
    GameActionBarContextMenuConfigure = 231,
    GameActionBarConfigurationDrawerTitle = 232,
    GameActionBarConfigurationDrawerFooterDiscoveryHint = 233,
    GameActionBarConfigurationDrawerFooterDiscoveryHintProgress = 234,
    GameActionBarConfigurationDrawerSlotHintUse = 235,
    GameActionBarConfigurationDrawerSlotHintToggle = 236,
    GameActionBarConfigurationDrawerSlotHintToggleUseOnMove = 237,
    GameActionBarConfigurationDrawerColumnTitleActions = 238,
    GameActionBarConfigurationDrawerColumnTitleItemActions = 239,
    GameActionBarConfigurationDrawerColumnTitleConfiguration = 240,
    GameActionBarConfigurationDrawerButtonEditBindings = 241,
    GameActionBarConfigurationDrawerButtonClearSlot = 242,
    GameActionBarConfigurationDrawerColumnTitleInapplicable = 243,
    GameActionBarConfigurationDrawerButtonUseOnMove = 244,
    GameActionBarConfigurationDrawerButtonUseOnMoveDescription = 245,
    GameActionBarConfigurationDrawerButtonUseExactItem = 246,
    GameActionBarConfigurationDrawerButtonUseByTypeAndQuality = 247,
    GameActionBarConfigurationDrawerButtonUseByType = 248,
    GameActionBarConfigurationDrawerButtonUseAny = 249,
    GameActionBarConfigurationDrawerButtonDone = 250,
    GameActionBarSlotTooltipHintUse = 251,
    GameActionBarSlotTooltipHintConfigure = 252,
    GameActionBarSlotTooltipHintUseOnMove = 253,
    GameActionBarSlotTooltipHintClear = 254,
    GameMessagesButtonSend = 255,
    GameMessagesContextMenuShowAsDialog = 256,
    GameMessagesContextMenuClear = 257,
    GameMessagesContextMenuCopy = 258,
    GameMessagesContextMenuExport = 259,
    GameMessagesFilter = 260,
    GameMessagesFiltersEdit = 261,
    GameMessagesNewNote = 262,
    GameMessagesTurn = 263,
    GameMessagesDedicatedServerBackup = 264,
    GameMessagesDedicatedServerBackupLimitReached = 265,
    GameMessagesPlaceholderChat = 266,
    GameTileInspectionCannotSeeTile = 267,
    GameQuickslotsTooltipUsageHint = 268,
    MenuAboutTitle = 269,
    MenuAboutDescription = 270,
    MenuAboutGameDescription = 271,
    MenuAboutSectionTeam = 272,
    MenuAboutTeamMemberResponsibilities = 273,
    MenuAboutTeamMemberName = 274,
    MenuAboutTeamMemberNickname = 275,
    MenuAboutSectionContributors = 276,
    MenuAboutSectionSpecialThanks = 277,
    MenuAboutTextSpecialThanksTestorsAndDonators = 278,
    MenuAboutSectionLibraries = 279,
    MenuAboutSectionLibrariesDescription = 280,
    MenuAboutLabelVersion = 281,
    MenuAboutLabelVersionBuild = 282,
    MenuAboutLabelVersionBuildTime = 283,
    MenuBindings = 284,
    MenuBindingsDescription = 285,
    MenuBindingsTooltipBindConflicts = 286,
    MenuBindingsManagedBindableGameActionBarUseSlot = 287,
    MenuBindingsManagedBindableGameActionBarAssignSlot = 288,
    MenuBindingsManagedBindableGameActionBarToggleUseOnMoveSlot = 289,
    MenuChangelogTitle = 290,
    MenuChangelogDescription = 291,
    MenuChangelogHeadingUnchartedWaters = 292,
    MenuChangelogFailedToLoadTitle = 293,
    MenuChangelogFailedToLoadDescription = 294,
    MenuChangelogHeadingChangeCount = 295,
    MenuChangelogButtonCopyChangelog = 296,
    MenuCharacterCreationButtonRandomizeName = 297,
    MenuCharacterCreationButtonExportTooltip = 298,
    MenuCharacterCreationButtonImportTooltip = 299,
    MenuCharacterCreationButtonStartGame = 300,
    MenuCharacterCreationButtonJoinGame = 301,
    MenuCharacterCreationDescription = 302,
    MenuCharacterCreationHeadingHairColor = 303,
    MenuCharacterCreationHeadingHairStyle = 304,
    MenuCharacterCreationHeadingSkinTone = 305,
    MenuCharacterCreationLabelName = 306,
    MenuCharacterCreationTitle = 307,
    MenuCharacterCreationButtonRotateLeftTooltip = 308,
    MenuCharacterCreationButtonRotateRightTooltip = 309,
    MenuCharacterCreationButtonRandomizeTooltip = 310,
    MenuCharacterSelectionButtonNewCharacter = 311,
    MenuCharacterSelectionDescription = 312,
    MenuCharacterSelectionHeadingNoCharacters = 313,
    MenuCharacterSelectionTitle = 314,
    MenuCharacterSelectionLabelLastUse = 315,
    MenuCharacterSelectionLabelUseCount = 316,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 317,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 318,
    MenuMultiplayerDescription = 319,
    MenuMultiplayerTitle = 320,
    MenuMultiplayerButtonJoinById = 321,
    MenuMultiplayerServerLabelReputation = 322,
    MenuMultiplayerServerLabelDays = 323,
    MenuMultiplayerServerLabelIsland = 324,
    MenuMultiplayerButtonNewGame = 325,
    MenuMultiplayerButtonLoadGame = 326,
    MenuMultiplayerServerTooltipPVP = 327,
    MenuMultiplayerServerTooltipModsLabel = 328,
    MenuMultiplayerServerTooltipFriendsLabel = 329,
    MenuMultiplayerServerPlayers = 330,
    MenuMultiplayerServerLobbyType = 331,
    MenuMultiplayerServerRegion = 332,
    MenuMultiplayerServerHost = 333,
    MenuMultiplayerServerVersion = 334,
    MenuMultiplayerServerVersionUnknown = 335,
    MenuMultiplayerServerDedicated = 336,
    MenuMultiplayerHeadingPlayersOnline = 337,
    MenuMultiplayerServerModUnableToLoad = 338,
    MenuGameEndTitleDead = 339,
    MenuGameEndTitleWon = 340,
    MenuGameEndShareFacebook = 341,
    MenuGameEndShareTwitter = 342,
    MenuGameEndContinueAsGhost = 343,
    MenuGameEndRespawnInCasualMode = 344,
    MenuGameEndRespawnAsNewCharacter = 345,
    MenuGameEndReturnToIsland = 346,
    MenuGameEndExitToMenu = 347,
    MenuHelpTitle = 348,
    MenuHelpDescription = 349,
    MenuHelpLabelSearch = 350,
    MenuHighscoresTitle = 351,
    MenuHighscoresDescription = 352,
    MenuHighscoresDifficultyFilterAll = 353,
    MenuHighscoresHighscoreLabelDifficulty = 354,
    MenuHighscoresHighscoreLabelTurns = 355,
    MenuHighscoresHighscoreLabelScore = 356,
    MenuHighscoresHighscoreLabelPlace = 357,
    MenuHighscoresHighscoreLabelDate = 358,
    MenuHighscoresHighscoreLabelDeathBy = 359,
    MenuHighscoresHighscoreTitle = 360,
    MenuHighscoresCharacterNameUnknown = 361,
    MenuHighscoresHighscoreReplayWithSettings = 362,
    MenuLoadGameButtonSaveSlot = 363,
    MenuLoadGameButtonNewGame = 364,
    MenuLoadGameButtonNewGameButtonImportTooltip = 365,
    MenuLoadGameDescription = 366,
    MenuLoadGameSaveButtonDeleteTooltip = 367,
    MenuLoadGameSaveButtonEditNameTooltip = 368,
    MenuLoadGameSaveButtonExportTooltip = 369,
    MenuLoadGameSaveTooltipLabelCreatedTime = 370,
    MenuLoadGameSaveTooltipLabelSaveTime = 371,
    MenuLoadGameSaveTooltipLabelGameMode = 372,
    MenuLoadGameSaveTooltipLabelScore = 373,
    MenuLoadGameSaveTooltipLabelSeed = 374,
    MenuLoadGameSaveTooltipLabelTurns = 375,
    MenuLoadGameSaveTooltipLabelMods = 376,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 377,
    MenuLoadGameSaveTooltipMod = 378,
    MenuLoadGameSaveTooltipNew = 379,
    MenuLoadGameSaveGame = 380,
    MenuLoadGameSaveGameDescription = 381,
    MenuLoadGameTitle = 382,
    MenuLoadGameLabelSelected = 383,
    MenuLoadGameButtonDeleteSelectedTooltip = 384,
    MenuLoadGameImportSaveFailure = 385,
    MenuMainButtonAbout = 386,
    MenuMainButtonChangelog = 387,
    MenuMainButtonContinueGame = 388,
    MenuMainButtonMultiplayer = 389,
    MenuMainButtonHighscores = 390,
    MenuMainButtonLoadGame = 391,
    MenuMainButtonMods = 392,
    MenuMainButtonModsAllDisabled = 393,
    MenuMainButtonNewGame = 394,
    MenuMainButtonNews = 395,
    MenuMainButtonOptions = 396,
    MenuMainButtonQuitGame = 397,
    MenuModsWarningModsDisabledTitle = 398,
    MenuModsWarningModsDisabledDescription = 399,
    MenuModsButtonModdingGuide = 400,
    MenuModsButtonOpenFolder = 401,
    MenuModsButtonOpenWorkshop = 402,
    MenuModsDescription = 403,
    MenuModsTitle = 404,
    MenuModsTooltipLabelAuthor = 405,
    MenuModsTooltipLabelTags = 406,
    MenuModsTooltipLabelDependencies = 407,
    MenuModsTooltipLabelProvides = 408,
    MenuModsTooltipLabelVersion = 409,
    MenuModsTooltipLabelDescription = 410,
    MenuModsTooltipLabelInstallDate = 411,
    MenuModsTooltipLabelCreatedDate = 412,
    MenuModsTooltipLabelLastUpdatedDate = 413,
    MenuModsTooltipPreventsMilestoneUnlocks = 414,
    MenuModsTooltipModOptions = 415,
    MenuModsTooltipPublishMod = 416,
    MenuModsTooltipModMoreInformation = 417,
    MenuModsTooltipUninstallMod = 418,
    MenuModsTooltipViewInSteamWorkshop = 419,
    MenuModsTooltipViewGitHub = 420,
    MenuModsTooltipOpenFolder = 421,
    MenuModsButtonEditInternalMods = 422,
    MenuModsSectionHeading = 423,
    MenuModsSubmenuEditInternalModsTitle = 424,
    MenuModsSubmenuEditInternalModsDescription = 425,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 426,
    MenuNewGameButtonNext = 427,
    MenuNewGameButtonStartServer = 428,
    MenuNewGameDescription = 429,
    MenuNewGameLabelEditName = 430,
    MenuNewGameLabelEditSeed = 431,
    MenuNewGamePlaceholderEditSeed = 432,
    MenuNewGameTitle = 433,
    MenuNewGameChoiceDifficulty = 434,
    MenuNewGameChoiceDescription = 435,
    MenuNewGameChoiceSingleplayer = 436,
    MenuNewGameChoiceSingleplayerDescription = 437,
    MenuNewGameChoiceMultiplayer = 438,
    MenuNewGameChoiceMultiplayerDescription = 439,
    MenuNewGameChoiceTurnModeManual = 440,
    MenuNewGameChoiceTurnModeManualDescription = 441,
    MenuNewGameChoiceTurnModeRealTime = 442,
    MenuNewGameChoiceTurnModeRealTimeDescription = 443,
    MenuNewGameChoiceTurnModeSimulated = 444,
    MenuNewGameChoiceTurnModeSimulatedDescription = 445,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 446,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 447,
    MenuNewGameChoiceDifficultyChallengeDaily = 448,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 449,
    MenuNewGameButtonMilestones = 450,
    MenuNewGameButtonMilestonesDescription = 451,
    MenuNewGameTabGameMode = 452,
    MenuNewGameTabMultiplayer = 453,
    MenuNewGameTabGameplayModifiers = 454,
    MenuNewGameHeadingGameMode = 455,
    MenuNewGameHeadingMultiplayer = 456,
    MenuNewGameHeadingGameplayModifiers = 457,
    MenuNewGameChoiceClientsInheritHostModifiers = 458,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 459,
    MenuNewGameChoiceCustomModifiers = 460,
    MenuNewGameChoiceCustomModifiersDescription = 461,
    MenuMilestoneModifiersTitle = 462,
    MenuMilestoneModifiersDescription = 463,
    MenuCustomGameOptionsTitle = 464,
    MenuCustomGameOptionsDescription = 465,
    MenuCustomGameOptionsRespawnOnDeath = 466,
    MenuCustomGameOptionsRespawnOnDeathDescription = 467,
    MenuCustomGameOptionsUseUnlockedRecipes = 468,
    MenuCustomGameOptionsStartingIslandBiome = 469,
    MenuCustomGameOptionsApplyTravelingEffects = 470,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 471,
    MenuCustomGameOptionsCreaturesPeaceful = 472,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 473,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 474,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 475,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 476,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 477,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 478,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 479,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 480,
    MenuCustomGameOptionsCreaturesAlwaysSpawn = 481,
    MenuCustomGameOptionsCreaturesAllowSpawning = 482,
    MenuCustomGameOptionsCreaturesSpawnLimit = 483,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 484,
    MenuCustomGameOptionsCreatureNone = 485,
    MenuCustomGameOptionsCreatureConfigure = 486,
    MenuCustomGameOptionsBenignityInitial = 487,
    MenuCustomGameOptionsBenignityMultiplier = 488,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 489,
    MenuCustomGameOptionsMalignityInitial = 490,
    MenuCustomGameOptionsMalignityMultiplier = 491,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 492,
    MenuCustomGameOptionsStatMultiplier = 493,
    MenuCustomGameOptionsStatMultiplierTooltip = 494,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 495,
    MenuCustomGameOptionsHeadingGeneral = 496,
    MenuCustomGameOptionsHeadingTravel = 497,
    MenuCustomGameOptionsHeadingTime = 498,
    MenuCustomGameOptionsHeadingStats = 499,
    MenuCustomGameOptionsHeadingReputation = 500,
    MenuCustomGameOptionsHeadingItems = 501,
    MenuCustomGameOptionsHeadingCreatures = 502,
    MenuCustomGameOptionsHeadingSkills = 503,
    MenuCustomGameOptionsHeadingStatusEffects = 504,
    MenuCustomGameOptionsEternalNight = 505,
    MenuCustomGameOptionsEternalNightDescription = 506,
    MenuCustomGameOptionsEternalDay = 507,
    MenuCustomGameOptionsEternalDayDescription = 508,
    MenuCustomGameOptionsTimeFrozen = 509,
    MenuCustomGameOptionsTimeInitial = 510,
    MenuCustomGameOptionsTimeDayLength = 511,
    MenuCustomGameOptionsTimeDayLengthTooltip = 512,
    MenuCustomGameOptionsTimeDayPercent = 513,
    MenuCustomGameOptionsTimeDayPercentTooltip = 514,
    MenuCustomGameOptionsStatStarting = 515,
    MenuCustomGameOptionsStatMax = 516,
    MenuCustomGameOptionsStatStartingDisplay = 517,
    MenuCustomGameOptionsStatMaxDisplay = 518,
    MenuCustomGameOptionsStatNoChange = 519,
    MenuCustomGameOptionsStatBonus = 520,
    MenuCustomGameOptionsStatBonusDisplay = 521,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 522,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 523,
    MenuCustomGameOptionsStatusEffectStartWith = 524,
    MenuCustomGameOptionsStatusEffectUntreatable = 525,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 526,
    MenuCustomGameOptionsSkillInitialRandomCount = 527,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 528,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 529,
    MenuCustomGameOptionsSkillsGlobal = 530,
    MenuCustomGameOptionsSkillNone = 531,
    MenuCustomGameOptionsSkillConfigure = 532,
    MenuCustomGameOptionsSkillInitial = 533,
    MenuCustomGameOptionsSkillMultiplier = 534,
    MenuCustomGameOptionsSkillMultiplierTooltip = 535,
    MenuCustomGameOptionsRandomItems = 536,
    MenuCustomGameOptionsRandomItemsDescription = 537,
    MenuCustomGameOptionsItemDurability = 538,
    MenuCustomGameOptionsItemDurabilityTooltip = 539,
    MenuCustomGameOptionsItemDecay = 540,
    MenuCustomGameOptionsItemDecayTooltip = 541,
    MenuCustomGameOptionsExport = 542,
    MenuCustomGameOptionsImport = 543,
    MenuNewsDescription = 544,
    MenuNewsHeadingSocial = 545,
    MenuNewsTitle = 546,
    MenuNewsHeadingUnableToLoad = 547,
    MenuNewsButtonAllNews = 548,
    MenuNewsButtonViewChangelog = 549,
    MenuOptionsButtonDitherFogOfWar = 550,
    MenuOptionsButtonHealthVignette = 551,
    MenuOptionsButtonHealthVignetteTooltip = 552,
    MenuOptionsButtonDisableCustomCursor = 553,
    MenuOptionsButtonDisplayArticleInObjectNames = 554,
    MenuOptionsButtonDisplayArticleInObjectNamesTooltip = 555,
    MenuOptionsButtonFullscreen = 556,
    MenuOptionsButtonCustomTitleBar = 557,
    MenuOptionsButtonDeveloperMode = 558,
    MenuOptionsButtonDeveloperModeContextMenu = 559,
    MenuOptionsButtonPixelFont = 560,
    MenuOptionsButtonReloadGame = 561,
    MenuOptionsButtonReloadStylesheets = 562,
    MenuOptionsButtonReloadVariableUIImages = 563,
    MenuOptionsButtonExportGlobalSaveData = 564,
    MenuOptionsButtonImportGlobalSaveData = 565,
    MenuOptionsButtonSaveDataBackups = 566,
    MenuOptionsButtonSaveDataBackupsTooltip = 567,
    MenuOptionsButtonSaveDataClearAll = 568,
    MenuOptionsButtonSaveDataClearCharacters = 569,
    MenuOptionsButtonSaveDataClearHighscores = 570,
    MenuOptionsButtonSaveDataClearMilestones = 571,
    MenuOptionsButtonSaveDataClearOptions = 572,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 573,
    MenuOptionsButtonSaveDataClearSaves = 574,
    MenuOptionsButtonSkipSplash = 575,
    MenuOptionsButtonToggleDevTools = 576,
    MenuOptionsButtonTooltipsCreatures = 577,
    MenuOptionsButtonOpenBackupsFolder = 578,
    MenuOptionsButtonOpenLogsFolder = 579,
    MenuOptionsButtonTooltipsDoodads = 580,
    MenuOptionsButtonTooltipsItems = 581,
    MenuOptionsButtonTooltipsTerrain = 582,
    MenuOptionsButtonDropLocationFacing = 583,
    MenuOptionsButtonDropLocationFeet = 584,
    MenuOptionsButtonStartTraceRecording = 585,
    MenuOptionsButtonStopTraceRecording = 586,
    MenuOptionsButtonTracingRecordingtTooltip = 587,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 588,
    MenuOptionsDescription = 589,
    MenuOptionsHeadingAudio = 590,
    MenuOptionsHeadingDeveloper = 591,
    MenuOptionsHeadingGameplayOptions = 592,
    MenuOptionsHeadingGameplayOptionsDescription = 593,
    MenuOptionsHeadingOtherOptions = 594,
    MenuOptionsHeadingControls = 595,
    MenuOptionsHeadingLanguage = 596,
    MenuOptionsHeadingModOptions = 597,
    MenuOptionsHeadingOther = 598,
    MenuOptionsHeadingSaveData = 599,
    MenuOptionsHeadingTooltipsTile = 600,
    MenuOptionsHeadingVideo = 601,
    MenuOptionsLabelInterfaceScale = 602,
    MenuOptionsLabelHudWidth = 603,
    MenuOptionsLabelTooltipDelay = 604,
    MenuOptionsLabelDirectionTurnDelay = 605,
    MenuOptionsLabelMouseTurnDelay = 606,
    MenuOptionsLabelFontStyle = 607,
    MenuOptionsTooltipTurnDelay = 608,
    MenuOptionsTooltipMouseTurnDelay = 609,
    MenuOptionsTooltipUiScaleClamped = 610,
    MenuOptionsTooltipControlsFilter = 611,
    MenuOptionsLabelVolumeEffects = 612,
    MenuOptionsLabelVolumeMusic = 613,
    MenuOptionsTabAudio = 614,
    MenuOptionsTabDeveloper = 615,
    MenuOptionsTabGameplay = 616,
    MenuOptionsTabTooltips = 617,
    MenuOptionsTabOther = 618,
    MenuOptionsTabLanguage = 619,
    MenuOptionsTabControls = 620,
    MenuOptionsTabMods = 621,
    MenuOptionsTabSaveData = 622,
    MenuOptionsTabVideo = 623,
    MenuOptionsTabPerformance = 624,
    MenuOptionsHeadingPerformance = 625,
    MenuOptionsTitle = 626,
    MenuOptionsTooltipMusicNextTrack = 627,
    MenuOptionsBindChoose = 628,
    MenuOptionsBindChooseAdd = 629,
    MenuOptionsBindLabelModifier = 630,
    MenuOptionsBindButtonResetTooltip = 631,
    MenuOptionsBindButtonDeleteTooltip = 632,
    MenuOptionsBindButtonAddTooltip = 633,
    MenuOptionsBindButtonAddMacroTooltip = 634,
    MenuOptionsButtonUnlockAllMilestones = 635,
    MenuOptionsButtonUnlockAllCraftingRecipes = 636,
    MenuOptionsButtonAlternatingDirectionMovement = 637,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 638,
    MenuOptionsButtonAlwaysShowMoreInformation = 639,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 640,
    MenuOptionsButtonEnableLowPowerMode = 641,
    MenuOptionsButtonEnableLowPowerModeTooltip = 642,
    MenuOptionsButtonDisableAcrylicTransparency = 643,
    MenuOptionsButtonDisableAcrylicTransparencyTooltip = 644,
    MenuOptionsButtonDisableOverlaySupport = 645,
    MenuOptionsButtonDisableOverlaySupportTooltip = 646,
    MenuOptionsButtonDisableUIEffects = 647,
    MenuOptionsButtonDisableUIEffectsTooltip = 648,
    MenuOptionsButtonDisableUIOpacity = 649,
    MenuOptionsButtonDisableUIOpacityTooltip = 650,
    MenuOptionsButtonDisableMovementAnimations = 651,
    MenuOptionsButtonDisableMovementAnimationsTooltip = 652,
    MenuOptionsButtonAutoAttack = 653,
    MenuOptionsButtonAutoAttackTooltip = 654,
    MenuOptionsButtonAutoPickUp = 655,
    MenuOptionsButtonAutoPickUpTooltip = 656,
    MenuOptionsButtonAutoPickUpOnIdle = 657,
    MenuOptionsButtonAutoPickUpOnIdleTooltip = 658,
    MenuOptionsButtonDropOnDismantle = 659,
    MenuOptionsButtonDropOnDismantleTooltip = 660,
    MenuOptionsButtonDisableCraftingProtectedItems = 661,
    MenuOptionsButtonDisableCraftingProtectedItemsTooltip = 662,
    MenuOptionsButtonDropOnGatherHarvest = 663,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 664,
    MenuOptionsButtonKeepSortActive = 665,
    MenuOptionsButtonKeepSortActiveTooltip = 666,
    MenuOptionsButtonUseAdjacentContainers = 667,
    MenuOptionsButtonUseAdjacentContainersTooltip = 668,
    MenuOptionsButtonHideEquippedHeadgear = 669,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 670,
    MenuOptionsButtonAutoSave = 671,
    MenuOptionsButtonAutoSaveTooltip = 672,
    MenuOptionsRangeAutoSaveTimerLabel = 673,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 674,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 675,
    MenuOptionsButtonDropIntoContainers = 676,
    MenuOptionsButtonDropIntoContainersTooltip = 677,
    MenuOptionsButtonWarnOnDangerousActions = 678,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 679,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 680,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 681,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 682,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 683,
    MenuOptionsHeadingWarnWhenBreakingItems = 684,
    MenuOptionsButtonSaveDataClearBindings = 685,
    MenuOptionsTooltipDialogOpacity = 686,
    MenuOptionsLabelDialogOpacity = 687,
    MenuOptionsDeveloperLogSourceFilterHeading = 688,
    MenuOptionsDeveloperUIExperiments = 689,
    MenuOptionsDeveloperUIExperimentsDescription = 690,
    MenuOptionsAudioVolumeDisplay = 691,
    MenuOptionsAudioInputSoundOnTyping = 692,
    MenuOptionsMusicPlaylist = 693,
    MenuOptionsButtonConfigureBindings = 694,
    MenuOptionsButtonSaveCompression = 695,
    MenuOptionsButtonSaveCompressionTooltip = 696,
    MenuPauseButtonContinueGame = 697,
    MenuPauseButtonReturnToGame = 698,
    MenuPauseButtonOptions = 699,
    MenuPauseButtonGameSettings = 700,
    MenuPauseButtonPaused = 701,
    MenuPauseButtonMultiplayer = 702,
    MenuPauseButtonHelp = 703,
    MenuPauseButtonTitleScreen = 704,
    MenuPauseButtonStopServer = 705,
    MenuPauseHeadingDedicatedServer = 706,
    MenuPauseTooltipNotPaused = 707,
    MenuPauseParagraphDedicatedServer = 708,
    MenuPauseLabelPaused = 709,
    MenuPauseLabelNotPaused = 710,
    MenuModesTitle = 711,
    MenuModesDescription = 712,
    MenuMultiplayerOptionsTitle = 713,
    MenuMultiplayerOptionsDescription = 714,
    MenuMultiplayerOptionsOpenServer = 715,
    MenuMultiplayerOptionsOpenServerDescription = 716,
    MenuMultiplayerOptionsCopyGameCode = 717,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 718,
    MenuMultiplayerOptionsInviteSteamFriends = 719,
    MenuMultiplayerOptionsCheckConnectionHeading = 720,
    MenuMultiplayerOptionsCheckConnectionParagraph = 721,
    MenuMultiplayerOptionsCheckConnectionButton = 722,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 723,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 724,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 725,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 726,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 727,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 728,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 729,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 730,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 731,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 732,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 733,
    MenuJoinServerTitle = 734,
    MenuJoinServerDescription = 735,
    MenuJoinServerInputPlaceholder = 736,
    MenuJoinServerChooseModifiersTitle = 737,
    MenuJoinServerChooseModifiersDescription = 738,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 739,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 740,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 741,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 742,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 743,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 744,
    MenuSharedMultiplayerChoicePVP = 745,
    MenuSharedMultiplayerChoicePVPDescription = 746,
    MenuSharedMultiplayerChoiceAllowTraveling = 747,
    MenuSharedMultiplayerChoiceAllowTravelingDescription = 748,
    MenuSharedMultiplayerChoiceAllowHardcoreRespawns = 749,
    MenuSharedMultiplayerChoiceAllowHardcoreRespawnsDescription = 750,
    MenuSharedMultiplayerDescription = 751,
    MenuSharedMultiplayerMessageOfTheDay = 752,
    MenuSharedMultiplayerMaxPlayers = 753,
    MenuSharedRealTimeTickSpeedTooltip = 754,
    MenuSharedRealTimeTickSpeedLabel = 755,
    MenuSharedMaxTravelTimeLabel = 756,
    MenuSharedMaxTravelTimeLabelTooltip = 757,
    MenuSharedButtonDefault = 758,
    MenuSharedValueMillseconds = 759,
    MenuSharedValueTurns = 760,
    MenuSharedValuePercentage = 761,
    MenuSharedMilestonesNotUnlockable = 762,
    MenuSharedMilestonesNotUnlockableDescription = 763,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 764,
    MenuSharedButtonDisableAll = 765,
    MenuSharedButtonEnableAll = 766,
    MenuSharedMilestoneModifiersSelected = 767,
    MiscSortBy = 768,
    MiscSortDirection = 769,
    MiscFilter = 770,
    MiscPlayerNameDefault = 771,
    MiscPlayerNameServer = 772,
    MiscSaveNameDefault = 773,
    MiscSaveNameDailyChallenge = 774,
    MiscSaveNameChallenge = 775,
    MiscSaveVersionUnknown = 776,
    MiscVersion = 777,
    MiscVersionBuildInfoTooltip = 778,
    MiscVersionUpdate = 779,
    MiscTime = 780,
    MiscTimeMeridiem = 781,
    MiscError = 782,
    MiscContextMenuCopyTooltip = 783,
    MiscBindableOr = 784,
    MiscBindableNoBindings = 785,
    DifficultyOptionsPeaceful = 786,
    DifficultyOptionsAberrantSpawnsDisabled = 787,
    DifficultyOptionsAberrantSpawnsOnly = 788,
    DifficultyOptionsCreatureSpawningDisabled = 789,
    DifficultyOptionsCreatureAlwaysSpawns = 790,
    DifficultyOptionsCreatureSpawnsDefault = 791,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 792,
    DifficultyOptionsCreatureSpawnsNoAberrants = 793,
    DifficultyOptionsSpawnLimit = 794,
    DifficultyOptionsRespawn = 795,
    DifficultyOptionsEternalNight = 796,
    DifficultyOptionsEternalDay = 797,
    DifficultyOptionsTimeInitial = 798,
    DifficultyOptionsTimeFrozen = 799,
    DifficultyOptionsTimeDayLength = 800,
    DifficultyOptionsTimeDayPercent = 801,
    DifficultyOptionsNoItems = 802,
    DifficultyOptionsRecipes = 803,
    DifficultyOptionsStartingIsland = 804,
    DifficultyOptionsTravelingEffectsDisabled = 805,
    DifficultyOptionsBenignityInitial = 806,
    DifficultyOptionsBenignityMultiplier = 807,
    DifficultyOptionsMalignityInitial = 808,
    DifficultyOptionsMalignityMultiplier = 809,
    DifficultyOptionsWeightBonus = 810,
    DifficultyOptionsStatInitial = 811,
    DifficultyOptionsStatMax = 812,
    DifficultyOptionsStatMultiplier = 813,
    DifficultyOptionsStatusEffectStartWith = 814,
    DifficultyOptionsStatusEffectUntreatable = 815,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 816,
    DifficultyOptionsNoRandomSkills = 817,
    DifficultyOptionsSkillStartingCount = 818,
    DifficultyOptionsSkillGainMultiplier = 819,
    DifficultyOptionsSkillInitial = 820,
    DifficultyOptionsStatusEffectPermanent = 821,
    DifficultyOptionsStatusEffectRateMultiplier = 822,
    DifficultyOptionsStatusEffectMultiplier = 823,
    DifficultyOptionsItemDurabilityMultiplier = 824,
    DifficultyOptionsItemDecayMultiplier = 825,
    EquipmentBack = 826,
    EquipmentChest = 827,
    EquipmentFeet = 828,
    EquipmentHands = 829,
    EquipmentHead = 830,
    EquipmentLegs = 831,
    EquipmentMainHand = 832,
    EquipmentMainHandOption = 833,
    EquipmentNeck = 834,
    EquipmentOffHand = 835,
    EquipmentOffHandOption = 836,
    EquipmentUse = 837,
    EquipmentWaist = 838,
    HudFilter = 839,
    TabCrafting = 840,
    TabDismantle = 841,
    WindowTitleContainer = 842,
    WindowTitleCrafting = 843,
    WindowTitleEquipment = 844,
    WindowTitleInventory = 845
}
export default UiTranslation;
