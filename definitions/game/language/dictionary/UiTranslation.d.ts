/*!
 * Copyright 2011-2023 Unlok
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
    GameStaticButtonRespawn = 3,
    GameStaticButtonRespawnInCasualMode = 4,
    GameStaticButtonRespawnAsNewCharacter = 5,
    GameDialogSharedContextMenuResetPosition = 6,
    GameDialogSharedIslandDropdownLabel = 7,
    GameDialogContainerWeight = 8,
    GameDialogContainerTrade = 9,
    GameDialogContainerTradeCredit = 10,
    GameDialogContainerShipperNPC = 11,
    GameDialogContainerShipperNPCButtonShipToIsland = 12,
    GameDialogEquipmentTooltipUnequip = 13,
    GameDialogMessagesOptionTimestamp = 14,
    GameDialogMessagesOptionShowSendButton = 15,
    GameDialogMessagesOptionShowOptionsButton = 16,
    GameDialogMessagesOptionMaxMessages = 17,
    GameDialogMessagesOptionUnfocusOnSend = 18,
    GameDialogMessagesEditFiltersLabelName = 19,
    GameDialogMessagesEditFiltersButtonDelete = 20,
    GameDialogMessagesEditFiltersButtonSave = 21,
    GameDialogMessagesEditFiltersButtonReset = 22,
    GameDialogMessagesEditFiltersButtonNew = 23,
    GameDialogMessagesEditFiltersMessageTooltipLabelSources = 24,
    GameDialogMessagesEditFiltersMessageTooltipLabelSourcesSummary = 25,
    GameDialogNotesNoteTime = 26,
    GameDialogNotesNoteNumber = 27,
    GameDialogNotesNoteLockedTitle = 28,
    GameDialogNotesNoteLockedDescription = 29,
    GameDialogNotesLinkId = 30,
    GameDialogNotesLinkLearnMore = 31,
    GameDialogNotesSettingsPinUnreadNotesAutomatically = 32,
    GameDialogMilestonesInvisibleMilestone = 33,
    GameDialogMilestonesProgress = 34,
    GameDialogMilestonesProgressHidden = 35,
    GameDialogMilestonesMilestone = 36,
    GameDialogMilestonesTooltipHidden = 37,
    GameDialogMilestonesTooltipInvisible = 38,
    GameDialogMilestonesHeadingNotUnlockableInMode = 39,
    GameDialogMilestonesHeadingAlreadyUnlocked = 40,
    GameDialogMilestonesParagraphNoMoreUnlockable = 41,
    GameDialogSkillsSkill = 42,
    GameDialogSkillsSkillHover = 43,
    GameDialogMapDurability = 44,
    GameDialogMapTooltipRiddle = 45,
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
    GameDialogQuestsLink = 56,
    GameDialogQuestsLinkChildQuest = 57,
    GameDialogQuestsChildQuests = 58,
    GameDialogQuestsRequirements = 59,
    GameDialogQuestsActiveQuests = 60,
    GameDialogQuestsCompletedQuests = 61,
    GameDialogQuestsCompleteQuest = 62,
    GameDialogIslandsShip = 63,
    GameDialogIslandsCloseOnTravel = 64,
    GameDialogIslandsShipTitle = 65,
    GameDialogIslandsNoPort = 66,
    GameDialogIslandsConstructLighthousesToBuildMorePorts = 67,
    GameTooltipInspect = 68,
    GameTooltipShowMoreInformation = 69,
    GameTooltipDefenseLabelBase = 70,
    GameTooltipDefenseLabelVehicleBonus = 71,
    GameTooltipDefenseInsulationWeight = 72,
    GameTooltipDefenseInsulationWeightLabel = 73,
    GameTooltipDefenseInsulationWeightTooltip = 74,
    GameTooltipDefenseInsulationNotRequired = 75,
    GameTooltipDefenseInsulationNotRequiredTooltip = 76,
    GameTooltipItemUseLabelMaxWeight = 77,
    GameTooltipMagicalLabel = 78,
    GameTooltipSharedUsesLabel = 79,
    GameTooltipSharedLabelTurns = 80,
    GameTooltipSharedLabelTurnsAgo = 81,
    GameTooltipRecipeLabelReputation = 82,
    GameTooltipRecipeLabelSkill = 83,
    GameTooltipRecipeLabelLevel = 84,
    GameTooltipRecipeLabelEfficacy = 85,
    GameTooltipRecipeLabelEfficacyHigh = 86,
    GameTooltipRecipeLabelEfficacyHighest = 87,
    GameTooltipRecipeLabelEfficacyLow = 88,
    GameTooltipRecipeLabelEfficacyLowest = 89,
    GameTooltipRecipeLabelEfficacyMed = 90,
    GameTooltipRecipeLabelEfficacyLabel = 91,
    GameTooltipRecipeLabelSuccessChance = 92,
    GameTooltipRecipeLabelQualityChance = 93,
    GameTooltipRecipeNearby = 94,
    GameTooltipRecipeFireSource = 95,
    GameTooltipRecipeRequirement = 96,
    GameTooltipRecipeLabelRequired = 97,
    GameTooltipRecipeLabelConsumed = 98,
    GameTooltipItemSkillSource = 99,
    GameTooltipItemUse = 100,
    GameTooltipItemUseActionOnConsumeTooltipBase = 101,
    GameTooltipItemUseActionOnConsumeTooltipSkill = 102,
    GameTooltipItemUseActionOnConsumeTooltipQuality = 103,
    GameTooltipItemUseActionOnConsumeTooltipMagical = 104,
    GameTooltipSharedUseActionTierLabel = 105,
    GameTooltipItemUseActionSharedLabelRequirements = 106,
    GameTooltipItemUseActionDismantleProduces = 107,
    GameTooltipSharedUseLabelLightSource = 108,
    GameTooltipItemUseLabelTelescopy = 109,
    GameTooltipItemDecay = 110,
    GameTooltipItemDecayExact = 111,
    GameTooltipItemDecayRate = 112,
    GameTooltipItemDecayRateTooltip = 113,
    GameTooltipItemWeight = 114,
    GameTooltipItemWeightBase = 115,
    GameTooltipItemWeightStored = 116,
    GameTooltipItemWeightStoredReduction = 117,
    GameTooltipItemLabelRange = 118,
    GameTooltipItemMagicalSource = 119,
    GameTooltipItemGroupingsLabel = 120,
    GameTooltipItemGroup = 121,
    GameTooltipItemLabelUsesWhenBuilt = 122,
    GameTooltipItemWorth = 123,
    GameTooltipItemProtected = 124,
    GameTooltipItemProtectedContainer = 125,
    GameTooltipItemVehicle = 126,
    GameTooltipItemVehicleMovementSpeed = 127,
    GameTooltipItemVehicleDefenseBonus = 128,
    GameTooltipItemLabelDismantle = 129,
    GameTooltipItemLabelDismantleRequirement = 130,
    GameTooltipItemQuantityMultiplier = 131,
    GameTooltipItemUseAttack = 132,
    GameTooltipItemUseThrowDamage = 133,
    GameTooltipItemUseCrafting = 134,
    GameTooltipItemUseOffering = 135,
    GameTooltipItemUseEquipDefense = 136,
    GameTooltipItemUseEquipDefenseAttribute = 137,
    GameTooltipItemLabelDamage = 138,
    GameTooltipItemBarterCreditTrade = 139,
    GameTooltipItemBarterCredit = 140,
    GameTooltipItemLabelIsland = 141,
    GameTooltipSharedLabelWeightCapacity = 142,
    GameTooltipSharedLabelCivilizationScore = 143,
    GameTooltipSharedLabelCivilizationScoreFull = 144,
    GameTooltipSharedLabelDoodadSkillAdjacent = 145,
    GameTooltipSharedLabelAdjacentSkillBonus = 146,
    GameTooltipSharedLabelGrowingSpeed = 147,
    GameTooltipSharedLabelInsulation = 148,
    GameTooltipSharedLabelStoredInsulation = 149,
    GameTooltipSharedLabelPreservation = 150,
    GameTooltipSharedLabelDurability = 151,
    GameTooltipSharedDurabilityMagicalDamageReduction = 152,
    GameTooltipSharedDurabilityMagicalDamageRegeneration = 153,
    GameTooltipSharedLabelContents = 154,
    GameTooltipSkill = 155,
    GameTooltipSkillCurrent = 156,
    GameTooltipSkillReputationImpact = 157,
    GameTooltipSkillCanIncrease = 158,
    GameTooltipSkillBonuses = 159,
    GameTooltipSkillBonus = 160,
    GameTooltipMilestone = 161,
    GameTooltipMilestoneProgress = 162,
    GameTooltipMilestoneDiscovered = 163,
    GameTooltipMilestoneHintClickToUseAsTitle = 164,
    GameTooltipMilestoneUsingAsTitle = 165,
    GameTooltipSharedMagicalProperty = 166,
    GameTooltipSharedMagicalPropertyOutOf = 167,
    GameTooltipSharedLabel = 168,
    GameTooltipSharedLabelDash = 169,
    GameTooltipSharedLabelHead = 170,
    GameTooltipSharedLabelTail = 171,
    GameTooltipSharedLabelStart = 172,
    GameTooltipSharedLabelEnd = 173,
    GameTooltipSharedResistsAndVulnsLabelVulnerableTo = 174,
    GameTooltipSharedResistsAndVulnsLabelResistantTo = 175,
    GameTooltipSharedResistsAndVulnsLabelImmuneTo = 176,
    GameTooltipSharedResistsAndVulnsLabelHealsFrom = 177,
    GameTooltipSharedResistsAndVulnsDamageType = 178,
    GameTooltipSharedResistsAndVulnsDamageTypeUnknown = 179,
    GameTooltipIslandBiome = 180,
    GameTooltipIslandSeed = 181,
    GameTooltipIslandDaysSpent = 182,
    GameTooltipIslandDaysSpentDaysUnit = 183,
    GameTooltipIslandDaysSpentCumulative = 184,
    GameTooltipIslandUndiscovered = 185,
    GameTooltipIslandUnnamed = 186,
    GameTooltipIslandSelf = 187,
    GameTooltipIslandPlayers = 188,
    GameTooltipIslandPorts = 189,
    GameTooltipIslandNPCs = 190,
    GameTooltipIslandModifiers = 191,
    GameTooltipIslandMaps = 192,
    GameTooltipIslandCoordinates = 193,
    GameTooltipIslandCoordinatesLabel = 194,
    GameTooltipNPCMerchantCredit = 195,
    GameTooltipNPCMerchantNewInventory = 196,
    GameTooltipNPCShipperNoItems = 197,
    GameTooltipNPCShipperContainedItems = 198,
    GameTooltipActionUndiscovered = 199,
    GameTooltipEquipSlotOffHandDisabledTwoHandedOffHand = 200,
    GameTooltipEquipSlotOffHandDisabledTwoHandedMainHand = 201,
    GameTooltipStatAttackSectionMelee = 202,
    GameTooltipStatAttackSectionRanged = 203,
    GameTooltipStatAttackRange = 204,
    GameTooltipStatAttackMultiplier = 205,
    GameTooltipCreatureLabelTamed = 206,
    GameTooltipCreatureLabelMood = 207,
    GameTooltipCreatureLabelCommand = 208,
    GameTooltipCreatureLabelCanPetIn = 209,
    GameTooltipCreatureCanPet = 210,
    GameTooltipCreatureLabelCanMilkIn = 211,
    GameTooltipCreatureLabelCombatDifficulty = 212,
    GameTooltipCreatureLabelAberrant = 213,
    GameTooltipCreatureAberrantDescriptionShort = 214,
    GameTooltipCreatureAberrantDescriptionExtra = 215,
    GameTooltipCreatureAberrantDescriptionVerbose = 216,
    GameTooltipCreatureProducingMilk = 217,
    GameStatsStatAttack = 218,
    GameStatsStatGeneric = 219,
    GameStatsStatGenericWithMax = 220,
    GameStatsStatbar = 221,
    GameStatsStatHealthTooltip = 222,
    GameStatsStatStaminaTooltip = 223,
    GameStatsStatHungerTooltip = 224,
    GameStatsStatThirstTooltip = 225,
    GameStatsStatHealthStatusWarning = 226,
    GameStatsStatStaminaStatusWarning = 227,
    GameStatsStatHungerStatusWarning = 228,
    GameStatsStatThirstStatusWarning = 229,
    GameStatsStatWeightStatusWarning = 230,
    GameStatsStatStaminaStatusBad = 231,
    GameStatsStatHungerStatusBad = 232,
    GameStatsStatThirstStatusBad = 233,
    GameStatsStatWeightStatusBad = 234,
    GameStatsStatReputationTooltipAverageReputation = 235,
    GameStatsStatReputationTooltipDifficulty = 236,
    GameStatsStatReputationTooltipDifficultyEasy = 237,
    GameStatsStatReputationTooltipDifficultyHard = 238,
    GameStatsStatReputationTooltipDifficultyInfantile = 239,
    GameStatsStatReputationTooltipDifficultyInsane = 240,
    GameStatsStatReputationTooltipDifficultyMedium = 241,
    GameStatsStatReputationTooltipDifficultyNightmare = 242,
    GameStatsStatReputationTooltipDifficultySimple = 243,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 244,
    GameStatsStatReputationTooltipDifficultyVeryHard = 245,
    GameStatsStatReputationTooltipBenignity = 246,
    GameStatsStatReputationTooltipMalignity = 247,
    GameStatsStatReputationTooltipScore = 248,
    GameStatsStatReputationTooltipCivilizationScore = 249,
    GameStatsStatReputationTooltipTurn = 250,
    GameStatsStatReputationTooltipTicks = 251,
    GameStatsStatWeightTooltip = 252,
    GameItemBarterCredit = 253,
    GameMenuBarButtonTooltipBindable = 254,
    GameMenuBarButtonTooltipSaveSize = 255,
    GameMenuBarButtonTooltipSaveTurnsAgo = 256,
    GameMenuBarButtonTooltipSaveLastTime = 257,
    GameMenuBarButtonTooltipNotesUnread = 258,
    GameMenuBarButtonTooltipMilestonesDisabled = 259,
    GameMenuBarButtonTooltipQuestsDisabled = 260,
    GameMenuBarContextMenuActionRemoveItem = 261,
    GameMenuBarContextMenuActionInsertItem = 262,
    GameMenuBarContextMenuActionReset = 263,
    GameActionBarContextMenuDisplayBindings = 264,
    GameActionBarContextMenuAutoSelectPrimaryUse = 265,
    GameActionBarContextMenuConfigure = 266,
    GameActionBarConfigurationDrawerTitle = 267,
    GameActionBarConfigurationDrawerFooterDiscoveryHint = 268,
    GameActionBarConfigurationDrawerFooterDiscoveryHintProgress = 269,
    GameActionBarConfigurationDrawerSlotHintUse = 270,
    GameActionBarConfigurationDrawerSlotHintToggle = 271,
    GameActionBarConfigurationDrawerSlotHintToggleUseOnMove = 272,
    GameActionBarConfigurationDrawerColumnTitleActions = 273,
    GameActionBarConfigurationDrawerColumnTitleItemActions = 274,
    GameActionBarConfigurationDrawerColumnTitleConfiguration = 275,
    GameActionBarConfigurationDrawerHintSelectAnAction = 276,
    GameActionBarConfigurationDrawerButtonEditBindings = 277,
    GameActionBarConfigurationDrawerButtonClearSlot = 278,
    GameActionBarConfigurationDrawerColumnTitleInapplicable = 279,
    GameActionBarConfigurationDrawerButtonUseOnMove = 280,
    GameActionBarConfigurationDrawerButtonUseOnMoveDescription = 281,
    GameActionBarConfigurationDrawerHintDiscoverMore = 282,
    GameActionBarConfigurationDrawerButtonUseExactItem = 283,
    GameActionBarConfigurationDrawerButtonUseByTypeAndQuality = 284,
    GameActionBarConfigurationDrawerButtonUseByType = 285,
    GameActionBarConfigurationDrawerButtonUseAny = 286,
    GameActionBarConfigurationDrawerButtonDone = 287,
    GameActionBarConfigurationDrawerButtonCraftType = 288,
    GameActionBarSlotTooltipHintUse = 289,
    GameActionBarSlotTooltipHintConfigure = 290,
    GameActionBarSlotTooltipHintUseOnMove = 291,
    GameActionBarSlotTooltipHintUseSlottedItem = 292,
    GameActionBarSlotTooltipHintClear = 293,
    GameActionBarButtonToggleUseWhenMovingTooltip = 294,
    GameMessagesButtonSend = 295,
    GameMessagesContextMenuShowAsDialog = 296,
    GameMessagesContextMenuClear = 297,
    GameMessagesContextMenuCopy = 298,
    GameMessagesContextMenuExport = 299,
    GameMessagesFilter = 300,
    GameMessagesFiltersEdit = 301,
    GameMessagesNewNote = 302,
    GameMessagesTurn = 303,
    GameMessagesDedicatedServerBackup = 304,
    GameMessagesDedicatedServerBackupLimitReached = 305,
    GameMessagesPlaceholderChat = 306,
    GameTileInspectionCannotSeeTile = 307,
    MenuAboutTitle = 308,
    MenuAboutDescription = 309,
    MenuAboutGameDescription = 310,
    MenuAboutSectionTeam = 311,
    MenuAboutTeamMemberName = 312,
    MenuAboutTeamMemberNickname = 313,
    MenuAboutSectionContributors = 314,
    MenuAboutSectionSpecialThanks = 315,
    MenuAboutTextSpecialThanksTestorsAndDonators = 316,
    MenuAboutSectionLibraries = 317,
    MenuAboutSectionLibrariesDescription = 318,
    MenuAboutLabelVersion = 319,
    MenuAboutLabelVersionBuild = 320,
    MenuAboutLabelVersionBuildTime = 321,
    MenuBindings = 322,
    MenuBindingsDescription = 323,
    MenuBindingsTooltipBindConflicts = 324,
    MenuBindingsManagedBindableGameActionBarUseSlot = 325,
    MenuBindingsManagedBindableGameActionBarAssignSlot = 326,
    MenuBindingsManagedBindableGameActionBarToggleUseOnMoveSlot = 327,
    MenuChangelogTitle = 328,
    MenuChangelogDescription = 329,
    MenuChangelogHeadingUnchartedWaters = 330,
    MenuChangelogFailedToLoadTitle = 331,
    MenuChangelogFailedToLoadDescription = 332,
    MenuChangelogHeadingChangeCount = 333,
    MenuChangelogButtonCopyChangelog = 334,
    MenuCharacterCreationButtonRandomizeName = 335,
    MenuCharacterCreationButtonExportTooltip = 336,
    MenuCharacterCreationButtonImportTooltip = 337,
    MenuCharacterCreationButtonStartGame = 338,
    MenuCharacterCreationButtonJoinGame = 339,
    MenuCharacterCreationDescription = 340,
    MenuCharacterCreationHeadingHairColor = 341,
    MenuCharacterCreationHeadingHairStyle = 342,
    MenuCharacterCreationHeadingSkinTone = 343,
    MenuCharacterCreationLabelName = 344,
    MenuCharacterCreationTitle = 345,
    MenuCharacterCreationButtonRotateLeftTooltip = 346,
    MenuCharacterCreationButtonRotateRightTooltip = 347,
    MenuCharacterCreationButtonRandomizeTooltip = 348,
    MenuCharacterSelectionButtonNewCharacter = 349,
    MenuCharacterSelectionDescription = 350,
    MenuCharacterSelectionHeadingNoCharacters = 351,
    MenuCharacterSelectionTitle = 352,
    MenuCharacterSelectionLabelLastUse = 353,
    MenuCharacterSelectionLabelUseCount = 354,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 355,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 356,
    MenuMultiplayerDescription = 357,
    MenuMultiplayerTitle = 358,
    MenuMultiplayerButtonJoinById = 359,
    MenuMultiplayerServerLabelReputation = 360,
    MenuMultiplayerServerLabelDays = 361,
    MenuMultiplayerServerLabelIsland = 362,
    MenuMultiplayerButtonNewGame = 363,
    MenuMultiplayerButtonLoadGame = 364,
    MenuMultiplayerServerTooltipPVP = 365,
    MenuMultiplayerServerTooltipModsLabel = 366,
    MenuMultiplayerServerTooltipFriendsLabel = 367,
    MenuMultiplayerServerPlayers = 368,
    MenuMultiplayerServerLobbyType = 369,
    MenuMultiplayerServerRegion = 370,
    MenuMultiplayerServerHost = 371,
    MenuMultiplayerServerVersion = 372,
    MenuMultiplayerServerVersionUnknown = 373,
    MenuMultiplayerServerDedicated = 374,
    MenuMultiplayerHeadingPlayersOnline = 375,
    MenuMultiplayerServerModUnableToLoad = 376,
    MenuGameEndTitleDead = 377,
    MenuGameEndTitleWon = 378,
    MenuGameEndShareFacebook = 379,
    MenuGameEndShareTwitter = 380,
    MenuGameEndContinueAsGhost = 381,
    MenuGameEndRespawnInCasualMode = 382,
    MenuGameEndRespawnAsNewCharacter = 383,
    MenuGameEndReturnToIsland = 384,
    MenuGameEndExitToMenu = 385,
    MenuHelpTitle = 386,
    MenuHelpDescription = 387,
    MenuHelpLabelSearch = 388,
    MenuHighscoresTitle = 389,
    MenuHighscoresDescription = 390,
    MenuHighscoresDifficultyFilterAll = 391,
    MenuHighscoresHighscoreLabelDifficulty = 392,
    MenuHighscoresHighscoreLabelTurns = 393,
    MenuHighscoresHighscoreLabelScore = 394,
    MenuHighscoresHighscoreLabelPlace = 395,
    MenuHighscoresHighscoreLabelDate = 396,
    MenuHighscoresHighscoreLabelDeathBy = 397,
    MenuHighscoresHighscoreTitle = 398,
    MenuHighscoresCharacterNameUnknown = 399,
    MenuHighscoresHighscoreReplayWithSettings = 400,
    MenuLoadGameButtonSaveSlot = 401,
    MenuLoadGameButtonNewGame = 402,
    MenuLoadGameButtonNewGameButtonImportTooltip = 403,
    MenuLoadGameDescription = 404,
    MenuLoadGameSaveButtonDeleteTooltip = 405,
    MenuLoadGameSaveButtonEditNameTooltip = 406,
    MenuLoadGameSaveButtonExportTooltip = 407,
    MenuLoadGameSaveTooltipLabelCreatedTime = 408,
    MenuLoadGameSaveTooltipLabelSaveTime = 409,
    MenuLoadGameSaveTooltipLabelGameMode = 410,
    MenuLoadGameSaveTooltipLabelScore = 411,
    MenuLoadGameSaveTooltipLabelSeed = 412,
    MenuLoadGameSaveTooltipLabelTurns = 413,
    MenuLoadGameSaveTooltipLabelMods = 414,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 415,
    MenuLoadGameSaveTooltipMod = 416,
    MenuLoadGameSaveTooltipNew = 417,
    MenuLoadGameSaveTooltipCorrupted = 418,
    MenuLoadGameSaveGame = 419,
    MenuLoadGameSaveGameDescription = 420,
    MenuLoadGameTitle = 421,
    MenuLoadGameLabelSelected = 422,
    MenuLoadGameButtonDeleteSelectedTooltip = 423,
    MenuLoadGameImportSaveFailure = 424,
    MenuMainButtonAbout = 425,
    MenuMainButtonChangelog = 426,
    MenuMainButtonMultiplayer = 427,
    MenuMainButtonHighscores = 428,
    MenuMainButtonLoadGame = 429,
    MenuMainButtonMods = 430,
    MenuMainButtonModsAllDisabled = 431,
    MenuMainButtonNewGame = 432,
    MenuMainButtonNews = 433,
    MenuMainButtonOptions = 434,
    MenuMainButtonQuitGame = 435,
    MenuModsWarningModsDisabledTitle = 436,
    MenuModsWarningModsDisabledDescription = 437,
    MenuModsButtonModdingGuide = 438,
    MenuModsButtonOpenFolder = 439,
    MenuModsButtonOpenWorkshop = 440,
    MenuModsDescription = 441,
    MenuModsTitle = 442,
    MenuModsTooltipLabelAuthor = 443,
    MenuModsTooltipLabelTags = 444,
    MenuModsTooltipLabelDependencies = 445,
    MenuModsTooltipLabelProvides = 446,
    MenuModsTooltipLabelVersion = 447,
    MenuModsTooltipLabelDescription = 448,
    MenuModsTooltipLabelInstallDate = 449,
    MenuModsTooltipLabelCreatedDate = 450,
    MenuModsTooltipLabelLastUpdatedDate = 451,
    MenuModsTooltipPreventsMilestoneUnlocks = 452,
    MenuModsTooltipModOptions = 453,
    MenuModsTooltipPublishMod = 454,
    MenuModsTooltipModMoreInformation = 455,
    MenuModsTooltipUninstallMod = 456,
    MenuModsTooltipViewInSteamWorkshop = 457,
    MenuModsTooltipViewGitHub = 458,
    MenuModsTooltipOpenFolder = 459,
    MenuModsButtonEditInternalMods = 460,
    MenuModsSectionHeading = 461,
    MenuModsSubmenuEditInternalModsTitle = 462,
    MenuModsSubmenuEditInternalModsDescription = 463,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 464,
    MenuNewGameButtonNext = 465,
    MenuNewGameButtonStartServer = 466,
    MenuNewGameDescription = 467,
    MenuNewGameLabelEditName = 468,
    MenuNewGameLabelEditSeed = 469,
    MenuNewGamePlaceholderEditSeed = 470,
    MenuNewGameTitle = 471,
    MenuNewGameChoiceDifficulty = 472,
    MenuNewGameChoiceSingleplayer = 473,
    MenuNewGameChoiceSingleplayerDescription = 474,
    MenuNewGameChoiceMultiplayer = 475,
    MenuNewGameChoiceMultiplayerDescription = 476,
    MenuNewGameChoiceTurnModeManual = 477,
    MenuNewGameChoiceTurnModeManualDescription = 478,
    MenuNewGameChoiceTurnModeRealTime = 479,
    MenuNewGameChoiceTurnModeRealTimeDescription = 480,
    MenuNewGameChoiceTurnModeSimulated = 481,
    MenuNewGameChoiceTurnModeSimulatedDescription = 482,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 483,
    MenuNewGameChoiceDifficultyChallengeDaily = 484,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 485,
    MenuNewGameButtonMilestones = 486,
    MenuNewGameButtonMilestonesDescription = 487,
    MenuNewGameTabGameMode = 488,
    MenuNewGameTabMultiplayer = 489,
    MenuNewGameTabGameplayModifiers = 490,
    MenuNewGameHeadingGameMode = 491,
    MenuNewGameHeadingMultiplayer = 492,
    MenuNewGameHeadingGameplayModifiers = 493,
    MenuNewGameMilestoneModifiersUnlockableInMode = 494,
    MenuNewGameChoiceClientsInheritHostModifiers = 495,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 496,
    MenuNewGameChoiceCustomModifiers = 497,
    MenuNewGameChoiceCustomModifiersDescription = 498,
    MenuMilestoneModifiersTitle = 499,
    MenuMilestoneModifiersDescription = 500,
    MenuCustomGameOptionsTitle = 501,
    MenuCustomGameOptionsDescription = 502,
    MenuCustomGameOptionsRespawnOnDeath = 503,
    MenuCustomGameOptionsRespawnOnDeathDescription = 504,
    MenuCustomGameOptionsUseUnlockedRecipes = 505,
    MenuCustomGameOptionsStartingIslandBiome = 506,
    MenuCustomGameOptionsApplyTravelingEffects = 507,
    MenuCustomGameOptionsApplyTravelingEffectsDescription = 508,
    MenuCustomGameOptionsCreaturesPeaceful = 509,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 510,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 511,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionDefault = 512,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionExclusively = 513,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescriptionOff = 514,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 515,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 516,
    MenuCustomGameOptionsCreaturesAlwaysSpawn = 517,
    MenuCustomGameOptionsCreaturesAllowSpawning = 518,
    MenuCustomGameOptionsCreaturesSpawnLimit = 519,
    MenuCustomGameOptionsCreaturesSpawnLimitDescription = 520,
    MenuCustomGameOptionsCreatureNone = 521,
    MenuCustomGameOptionsCreatureConfigure = 522,
    MenuCustomGameOptionsBenignityInitial = 523,
    MenuCustomGameOptionsBenignityMultiplier = 524,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 525,
    MenuCustomGameOptionsMalignityInitial = 526,
    MenuCustomGameOptionsMalignityMultiplier = 527,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 528,
    MenuCustomGameOptionsStatMultiplier = 529,
    MenuCustomGameOptionsStatMultiplierTooltip = 530,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 531,
    MenuCustomGameOptionsHeadingGeneral = 532,
    MenuCustomGameOptionsHeadingTravel = 533,
    MenuCustomGameOptionsHeadingTime = 534,
    MenuCustomGameOptionsHeadingStats = 535,
    MenuCustomGameOptionsHeadingReputation = 536,
    MenuCustomGameOptionsHeadingItems = 537,
    MenuCustomGameOptionsHeadingCreatures = 538,
    MenuCustomGameOptionsHeadingSkills = 539,
    MenuCustomGameOptionsHeadingStatusEffects = 540,
    MenuCustomGameOptionsEternalNight = 541,
    MenuCustomGameOptionsEternalNightDescription = 542,
    MenuCustomGameOptionsEternalDay = 543,
    MenuCustomGameOptionsEternalDayDescription = 544,
    MenuCustomGameOptionsTimeFrozen = 545,
    MenuCustomGameOptionsTimeInitial = 546,
    MenuCustomGameOptionsTimeDayLength = 547,
    MenuCustomGameOptionsTimeDayLengthTooltip = 548,
    MenuCustomGameOptionsTimeDayPercent = 549,
    MenuCustomGameOptionsTimeDayPercentTooltip = 550,
    MenuCustomGameOptionsStatStarting = 551,
    MenuCustomGameOptionsStatMax = 552,
    MenuCustomGameOptionsStatStartingDisplay = 553,
    MenuCustomGameOptionsStatMaxDisplay = 554,
    MenuCustomGameOptionsStatNoChange = 555,
    MenuCustomGameOptionsStatBonus = 556,
    MenuCustomGameOptionsStatBonusDisplay = 557,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 558,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 559,
    MenuCustomGameOptionsStatusEffectStartWith = 560,
    MenuCustomGameOptionsStatusEffectUntreatable = 561,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 562,
    MenuCustomGameOptionsSkillInitialRandomCount = 563,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 564,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 565,
    MenuCustomGameOptionsSkillsGlobal = 566,
    MenuCustomGameOptionsSkillNone = 567,
    MenuCustomGameOptionsSkillConfigure = 568,
    MenuCustomGameOptionsSkillInitial = 569,
    MenuCustomGameOptionsSkillMultiplier = 570,
    MenuCustomGameOptionsSkillMultiplierTooltip = 571,
    MenuCustomGameOptionsRandomItems = 572,
    MenuCustomGameOptionsRandomItemsDescription = 573,
    MenuCustomGameOptionsItemDurability = 574,
    MenuCustomGameOptionsItemDurabilityTooltip = 575,
    MenuCustomGameOptionsItemDecay = 576,
    MenuCustomGameOptionsItemDecayTooltip = 577,
    MenuCustomGameOptionsExport = 578,
    MenuCustomGameOptionsImport = 579,
    MenuNewsDescription = 580,
    MenuNewsHeadingSocial = 581,
    MenuNewsTitle = 582,
    MenuNewsHeadingUnableToLoad = 583,
    MenuNewsButtonAllNews = 584,
    MenuNewsButtonViewChangelog = 585,
    MenuOptionsButtonDitherFogOfWar = 586,
    MenuOptionsButtonHealthVignette = 587,
    MenuOptionsButtonHealthVignetteTooltip = 588,
    MenuOptionsButtonDisableCustomCursor = 589,
    MenuOptionsButtonEnableSmoothZooming = 590,
    MenuOptionsButtonDisplayArticleInObjectNames = 591,
    MenuOptionsButtonDisplayArticleInObjectNamesTooltip = 592,
    MenuOptionsButtonFullscreen = 593,
    MenuOptionsButtonCustomTitleBar = 594,
    MenuOptionsButtonDeveloperMode = 595,
    MenuOptionsButtonDeveloperModeContextMenu = 596,
    MenuOptionsButtonReloadGame = 597,
    MenuOptionsButtonReloadStylesheets = 598,
    MenuOptionsButtonReloadVariableUIImages = 599,
    MenuOptionsButtonExportGlobalSaveData = 600,
    MenuOptionsButtonImportGlobalSaveData = 601,
    MenuOptionsButtonSaveDataBackups = 602,
    MenuOptionsButtonSaveDataBackupsTooltip = 603,
    MenuOptionsButtonSaveDataClearAll = 604,
    MenuOptionsButtonSaveDataClearCharacters = 605,
    MenuOptionsButtonSaveDataClearHighscores = 606,
    MenuOptionsButtonSaveDataClearMilestones = 607,
    MenuOptionsButtonSaveDataClearOptions = 608,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 609,
    MenuOptionsButtonSaveDataClearSaves = 610,
    MenuOptionsButtonSkipSplash = 611,
    MenuOptionsButtonToggleDevTools = 612,
    MenuOptionsButtonOpenBackupsFolder = 613,
    MenuOptionsButtonOpenLogsFolder = 614,
    MenuOptionsButtonDropLocationFacing = 615,
    MenuOptionsButtonDropLocationFeet = 616,
    MenuOptionsButtonStartTraceRecording = 617,
    MenuOptionsButtonStopTraceRecording = 618,
    MenuOptionsButtonTracingRecordingtTooltip = 619,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 620,
    MenuOptionsDescription = 621,
    MenuOptionsHeadingAudio = 622,
    MenuOptionsHeadingDeveloper = 623,
    MenuOptionsHeadingGameplayOptions = 624,
    MenuOptionsHeadingGameplayOptionsDescription = 625,
    MenuOptionsHeadingGameplayOptionsButtonOpenDialog = 626,
    MenuOptionsHeadingOtherOptions = 627,
    MenuOptionsHeadingControls = 628,
    MenuOptionsHeadingModOptions = 629,
    MenuOptionsHeadingOther = 630,
    MenuOptionsHeadingSaveData = 631,
    MenuOptionsHeadingTooltipsTile = 632,
    MenuOptionsHeadingVideo = 633,
    MenuOptionsLabelInterfaceScale = 634,
    MenuOptionsLabelHudWidth = 635,
    MenuOptionsLabelTooltipDelay = 636,
    MenuOptionsLabelDirectionTurnDelay = 637,
    MenuOptionsLabelMouseTurnDelay = 638,
    MenuOptionsLabelFontStyle = 639,
    MenuOptionsTooltipTurnDelay = 640,
    MenuOptionsTooltipMouseTurnDelay = 641,
    MenuOptionsTooltipControlsFilter = 642,
    MenuOptionsLabelVolumeEffects = 643,
    MenuOptionsLabelVolumeMusic = 644,
    MenuOptionsTabAudio = 645,
    MenuOptionsTabDeveloper = 646,
    MenuOptionsTabGameplay = 647,
    MenuOptionsTabTooltips = 648,
    MenuOptionsTabOther = 649,
    MenuOptionsTabLanguage = 650,
    MenuOptionsTabControls = 651,
    MenuOptionsTabMods = 652,
    MenuOptionsTabSaveData = 653,
    MenuOptionsTabVideo = 654,
    MenuOptionsTabPerformance = 655,
    MenuOptionsHeadingPerformance = 656,
    MenuOptionsTitle = 657,
    MenuOptionsTooltipMusicNextTrack = 658,
    MenuOptionsBindChoose = 659,
    MenuOptionsBindChooseAdd = 660,
    MenuOptionsBindButtonResetTooltip = 661,
    MenuOptionsBindButtonDeleteTooltip = 662,
    MenuOptionsBindButtonAddTooltip = 663,
    MenuOptionsBindButtonAddMacroTooltip = 664,
    MenuOptionsButtonUnlockAllMilestones = 665,
    MenuOptionsButtonDiscoverAllActions = 666,
    MenuOptionsButtonUnlockAllCraftingRecipes = 667,
    MenuOptionsButtonAlternatingDirectionMovement = 668,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 669,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 670,
    MenuOptionsButtonEnableLowPowerMode = 671,
    MenuOptionsButtonEnableLowPowerModeTooltip = 672,
    MenuOptionsButtonDisableAcrylicTransparency = 673,
    MenuOptionsButtonDisableAcrylicTransparencyTooltip = 674,
    MenuOptionsButtonDisableOverlaySupport = 675,
    MenuOptionsButtonDisableOverlaySupportTooltip = 676,
    MenuOptionsButtonDisableUIEffects = 677,
    MenuOptionsButtonDisableUIEffectsTooltip = 678,
    MenuOptionsButtonDisableUIOpacity = 679,
    MenuOptionsButtonDisableUIOpacityTooltip = 680,
    MenuOptionsButtonDisableMovementAnimations = 681,
    MenuOptionsButtonDisableMovementAnimationsTooltip = 682,
    MenuOptionsButtonAutoAttack = 683,
    MenuOptionsButtonAutoAttackTooltip = 684,
    MenuOptionsButtonAutoPickUp = 685,
    MenuOptionsButtonAutoPickUpTooltip = 686,
    MenuOptionsButtonAutoPickUpOnIdle = 687,
    MenuOptionsButtonAutoPickUpOnIdleTooltip = 688,
    MenuOptionsButtonDropOnDismantle = 689,
    MenuOptionsButtonDropOnDismantleTooltip = 690,
    MenuOptionsButtonDropOnDisassemble = 691,
    MenuOptionsButtonDropOnDisassembleTooltip = 692,
    MenuOptionsButtonDisableCraftingProtectedItems = 693,
    MenuOptionsButtonDisableCraftingProtectedItemsTooltip = 694,
    MenuOptionsButtonDropOnGatherHarvest = 695,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 696,
    MenuOptionsButtonKeepSortActive = 697,
    MenuOptionsButtonKeepSortActiveTooltip = 698,
    MenuOptionsButtonUseAdjacentContainers = 699,
    MenuOptionsButtonUseAdjacentContainersTooltip = 700,
    MenuOptionsButtonHideEquippedHeadgear = 701,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 702,
    MenuOptionsButtonLeftHanded = 703,
    MenuOptionsButtonLeftHandedTooltip = 704,
    MenuOptionsButtonAutoSave = 705,
    MenuOptionsRangeAutoSaveTimerLabel = 706,
    MenuOptionsRangeAutoSaveTimerTurnsDisplay = 707,
    MenuOptionsRangeAutoSaveTimerTimeDisplay = 708,
    MenuOptionsButtonDropIntoContainers = 709,
    MenuOptionsButtonDropIntoContainersTooltip = 710,
    MenuOptionsButtonWarnOnDangerousActions = 711,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 712,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 713,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 714,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 715,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 716,
    MenuOptionsHeadingWarnWhenBreakingItems = 717,
    MenuOptionsButtonSaveDataClearBindings = 718,
    MenuOptionsTooltipDialogOpacity = 719,
    MenuOptionsLabelDialogOpacity = 720,
    MenuOptionsDeveloperLogSourceFilterHeading = 721,
    MenuOptionsDeveloperUIExperiments = 722,
    MenuOptionsDeveloperUIExperimentsDescription = 723,
    MenuOptionsAudioVolumeDisplay = 724,
    MenuOptionsAudioInputSoundOnTyping = 725,
    MenuOptionsMusicPlaylist = 726,
    MenuOptionsButtonConfigureBindings = 727,
    MenuOptionsButtonSaveCompression = 728,
    MenuOptionsButtonSaveCompressionTooltip = 729,
    MenuOptionsButtonSaveUIDataGlobally = 730,
    MenuOptionsButtonSaveUIDataGloballyTooltip = 731,
    MenuPauseButtonContinueGame = 732,
    MenuPauseButtonReturnToGame = 733,
    MenuPauseButtonOptions = 734,
    MenuPauseButtonGameSettings = 735,
    MenuPauseButtonPaused = 736,
    MenuPauseButtonMultiplayer = 737,
    MenuPauseButtonHelp = 738,
    MenuPauseButtonTitleScreen = 739,
    MenuPauseButtonStopServer = 740,
    MenuPauseTooltipNotPaused = 741,
    MenuPauseLabelPaused = 742,
    MenuPauseLabelNotPaused = 743,
    MenuModesTitle = 744,
    MenuModesDescription = 745,
    MenuMultiplayerOptionsTitle = 746,
    MenuMultiplayerOptionsDescription = 747,
    MenuMultiplayerOptionsOpenServer = 748,
    MenuMultiplayerOptionsOpenServerDescription = 749,
    MenuMultiplayerOptionsCopyGameCode = 750,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 751,
    MenuMultiplayerOptionsInviteSteamFriends = 752,
    MenuMultiplayerOptionsCheckConnectionHeading = 753,
    MenuMultiplayerOptionsCheckConnectionParagraph = 754,
    MenuMultiplayerOptionsCheckConnectionButton = 755,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 756,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 757,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetwork = 758,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkFail = 759,
    MenuMultiplayerOptionsCheckConnectionResultSteamRelayNetworkUnavailable = 760,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 761,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 762,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 763,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 764,
    MenuJoinServerTitle = 765,
    MenuJoinServerDescription = 766,
    MenuJoinServerInputPlaceholder = 767,
    MenuJoinServerChooseModifiersTitle = 768,
    MenuJoinServerChooseModifiersDescription = 769,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 770,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 771,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 772,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 773,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 774,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 775,
    MenuSharedMultiplayerChoicePVP = 776,
    MenuSharedMultiplayerChoicePVPDescription = 777,
    MenuSharedMultiplayerChoiceAllowTraveling = 778,
    MenuSharedMultiplayerChoiceAllowTravelingDescription = 779,
    MenuSharedMultiplayerChoiceAllowHardcoreRespawns = 780,
    MenuSharedMultiplayerChoiceAllowHardcoreRespawnsDescription = 781,
    MenuSharedMultiplayerDescription = 782,
    MenuSharedMultiplayerMessageOfTheDay = 783,
    MenuSharedMultiplayerMaxPlayers = 784,
    MenuSharedRealTimeTickSpeedTooltip = 785,
    MenuSharedRealTimeTickSpeedLabel = 786,
    MenuSharedMaxTravelTimeLabel = 787,
    MenuSharedMaxTravelTimeLabelTooltip = 788,
    MenuSharedButtonDefault = 789,
    MenuSharedValueSeconds = 790,
    MenuSharedValueMillseconds = 791,
    MenuSharedValueTurns = 792,
    MenuSharedValuePercentage = 793,
    MenuSharedMilestonesNotUnlockable = 794,
    MenuSharedMilestonesNotUnlockableDescription = 795,
    MenuSharedMilestonesNotUnlockableButtonShowMods = 796,
    MenuSharedButtonDisableAll = 797,
    MenuSharedButtonEnableAll = 798,
    MenuSharedMilestoneModifiersSelected = 799,
    MiscSortBy = 800,
    MiscSortDirection = 801,
    MiscFilter = 802,
    MiscPlayerNameDefault = 803,
    MiscPlayerNameServer = 804,
    MiscSaveNameDefault = 805,
    MiscSaveNameDailyChallenge = 806,
    MiscSaveNameChallenge = 807,
    MiscSaveVersionUnknown = 808,
    MiscVersion = 809,
    MiscVersionBuildInfoTooltip = 810,
    MiscVersionUpdate = 811,
    MiscTime = 812,
    MiscTimeMeridiem = 813,
    MiscError = 814,
    MiscContextMenuCopyTooltip = 815,
    MiscBindableNoBindings = 816,
    DifficultyOptionsPeaceful = 817,
    DifficultyOptionsAberrantSpawnsDisabled = 818,
    DifficultyOptionsAberrantSpawnsOnly = 819,
    DifficultyOptionsCreatureSpawningDisabled = 820,
    DifficultyOptionsCreatureAlwaysSpawns = 821,
    DifficultyOptionsCreatureSpawnsDefault = 822,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 823,
    DifficultyOptionsCreatureSpawnsNoAberrants = 824,
    DifficultyOptionsSpawnLimit = 825,
    DifficultyOptionsRespawn = 826,
    DifficultyOptionsEternalNight = 827,
    DifficultyOptionsEternalDay = 828,
    DifficultyOptionsTimeInitial = 829,
    DifficultyOptionsTimeFrozen = 830,
    DifficultyOptionsTimeDayLength = 831,
    DifficultyOptionsTimeDayPercent = 832,
    DifficultyOptionsNoItems = 833,
    DifficultyOptionsRecipes = 834,
    DifficultyOptionsStartingIsland = 835,
    DifficultyOptionsTravelingEffectsDisabled = 836,
    DifficultyOptionsBenignityInitial = 837,
    DifficultyOptionsBenignityMultiplier = 838,
    DifficultyOptionsMalignityInitial = 839,
    DifficultyOptionsMalignityMultiplier = 840,
    DifficultyOptionsWeightBonus = 841,
    DifficultyOptionsStatInitial = 842,
    DifficultyOptionsStatMax = 843,
    DifficultyOptionsStatMultiplier = 844,
    DifficultyOptionsStatusEffectStartWith = 845,
    DifficultyOptionsStatusEffectUntreatable = 846,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 847,
    DifficultyOptionsNoRandomSkills = 848,
    DifficultyOptionsSkillStartingCount = 849,
    DifficultyOptionsSkillGainMultiplier = 850,
    DifficultyOptionsSkillInitial = 851,
    DifficultyOptionsStatusEffectPermanent = 852,
    DifficultyOptionsStatusEffectRateMultiplier = 853,
    DifficultyOptionsStatusEffectMultiplier = 854,
    DifficultyOptionsItemDurabilityMultiplier = 855,
    DifficultyOptionsItemDecayMultiplier = 856,
    TabCrafting = 857,
    TabDismantle = 858,
    WindowTitleContainer = 859,
    WindowTitleInventory = 860
}
export default UiTranslation;
