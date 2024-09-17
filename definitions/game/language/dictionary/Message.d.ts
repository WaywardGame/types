/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
declare enum Message {
    None = 0,
    Multiple = 1,
    Aberrant = 2,
    AboutHours = 3,
    AbsorbNotPossible = 4,
    ActionAlterAltered = 5,
    ActionAlterFailed = 6,
    ActionAlterNotPossible = 7,
    ActionAttachAlreadyHasItem = 8,
    ActionAttachAttachedItem = 9,
    ActionAttachAttachingItem = 10,
    ActionAttachCannotAttach = 11,
    ActionAttachNothingToAttachItemTo = 12,
    ActionBuildTooDeep = 13,
    ActionButcherReleasesLava = 14,
    ActionCageCreatureCannotBeCaged = 15,
    ActionCageCreatureNoCreature = 16,
    ActionCastAreaOverfished = 17,
    ActionConsumeItemTypeStats = 18,
    ActionContextAllowedFireToSpread = 19,
    ActionContextDamagedCreatureWith = 20,
    ActionContextDamagedHuman = 21,
    ActionContextDamagedHumanWith = 22,
    ActionContextDamagedPet = 23,
    ActionContextGainedSkill = 24,
    ActionContextKilledCreature = 25,
    ActionContextKilledPlayer = 26,
    ActionContextKilledPlayerWithPet = 27,
    ActionContextRested = 28,
    ActionContextSlept = 29,
    ActionContextTamedCreature = 30,
    ActionContextTrampledFire = 31,
    ActionCraftEfficacy = 32,
    ActionCraftEfficacyHigh = 33,
    ActionCraftEfficacyHighest = 34,
    ActionCraftEfficacyLow = 35,
    ActionCraftEfficacyLowest = 36,
    ActionCraftEfficacyMed = 37,
    ActionCraftEfficacyPercent = 38,
    ActionCraftYouLackTheRequirements = 39,
    ActionDetachContainerDetachContainer = 40,
    ActionDetachContainerNoDetach = 41,
    ActionDigTooDeep = 42,
    ActionDigWaterFilledHole = 43,
    ActionDisassembleNoItemsSalvaged = 44,
    ActionDisassembleSalvaged = 45,
    ActionDismantleSeparated = 46,
    ActionDisplayItemDisplayed = 47,
    ActionDisplayItemEmptyContainerBeforehand = 48,
    ActionDisplayItemReturned = 49,
    ActionDrinkInFrontNoDrink = 50,
    ActionDropCannotUseBlocked = 51,
    ActionDropCannotUseItemEquipped = 52,
    ActionDropCannotUseItemProtected = 53,
    ActionDropCannotUseItemProtectedDangerous = 54,
    ActionDropCannotUseNoItems = 55,
    ActionDropCannotUseNoRoomMultipleItems = 56,
    ActionDumpItemsCannotUseBlocked = 57,
    ActionDumpItemsCannotUseNothingToDumpOut = 58,
    ActionDumpItemsDumpedItems = 59,
    ActionEnhanceEnhanced = 60,
    ActionEnhanceFailed = 61,
    ActionEnhanceNotPossible = 62,
    ActionEquipWillBreakOnDamage = 63,
    ActionFishingNothingBiting = 64,
    ActionFishingSlipped = 65,
    ActionFishingTooShallow = 66,
    ActionInvoke = 67,
    ActionInvokeCannotUseSilence = 68,
    ActionInvokeChaosNoEffect = 69,
    ActionInvokeEvilCreaturesAttracted = 70,
    ActionInvokeEvilCreaturesNoneSummoned = 71,
    ActionInvokeGoodCreaturesPacified = 72,
    ActionInvokeGoodCreaturesPacifiedAttacked = 73,
    ActionInvokeGoodCreaturesPacifiedNone = 74,
    ActionJumpCannotJump = 75,
    ActionMeleeNothingToAttack = 76,
    ActionMoveItemCannotUseContainerTooFarAway = 77,
    ActionMoveItemCannotUseEquipped = 78,
    ActionMoveItemCannotUseFromInvalidContainer = 79,
    ActionMoveItemCannotUseInvalidContainer = 80,
    ActionMoveItemCannotUseItemFilteredOut = 81,
    ActionMoveItemCannotUseItemQualityOrTypeIncorrect = 82,
    ActionMoveItemCannotUseItemTooFarAway = 83,
    ActionMoveItemCannotUseMovingFromMultipleContainers = 84,
    ActionMoveItemCannotUseNoContainerToMoveTo = 85,
    ActionMoveItemCannotUseNoItems = 86,
    ActionMoveItemCannotUseNoRoom = 87,
    ActionMoveItemCannotUseProtected = 88,
    ActionMoveToSwimOffEdgeCannotCombatTides = 89,
    ActionNavigateMoon = 90,
    ActionNavigateNotOverworld = 91,
    ActionNavigateSun = 92,
    ActionNavigateUseSextant = 93,
    ActionPetCreatureRefused = 94,
    ActionPetNoTamedCreature = 95,
    ActionPickUpAllItemsNoItems = 96,
    ActionPickUpDoodadCannotUseContainsItems = 97,
    ActionPickUpExcrementNoExcrement = 98,
    ActionPickUpItemNoItem = 99,
    ActionPickUpNoPickUp = 100,
    ActionPourNoEffect = 101,
    ActionRefineNoDurability = 102,
    ActionReleaseNoTamedCreature = 103,
    ActionRenameIsland = 104,
    ActionRepairMaxDurabilityTooLow = 105,
    ActionReshapeFailed = 106,
    ActionReshapeNotPossibleBonus = 107,
    ActionReshapeReshaped = 108,
    ActionSacrificeNoRunes = 109,
    ActionSacrificeRunesSacrificed = 110,
    ActionSacrificeRunesSacrificedNothingUpgraded = 111,
    ActionSacrificeRunesSacrificedUpgradedChaos = 112,
    ActionSacrificeRunesSacrificedUpgradedEvil = 113,
    ActionSacrificeRunesSacrificedUpgradedGood = 114,
    ActionSailToCivilizationNotInsideBoat = 115,
    ActionSailToIsland = 116,
    ActionSailToIslandArrived = 117,
    ActionSailToIslandCannotUseCannotReachEdge = 118,
    ActionSailToIslandCannotUseCannotReachPort = 119,
    ActionSailToIslandCannotUseGhost = 120,
    ActionSailToIslandCannotUseInvalidDestination = 121,
    ActionSailToIslandCannotUseNoDestination = 122,
    ActionSailToIslandCannotUseNotEnoughStamina = 123,
    ActionSailToIslandCannotUseNotEnoughSwimmingSkill = 124,
    ActionSailToIslandCannotUseTravellingIsDisallowedInTheseLands = 125,
    ActionSailToIslandPlayerArriving = 126,
    ActionSailToIslandPlayerDeparting = 127,
    ActionSetCreatureAiAlreadyCommanded = 128,
    ActionSetCreatureAiCannotCommand = 129,
    ActionSetCreatureAiNotEnoughSkill = 130,
    ActionSetCreatureAiNotEnoughTames = 131,
    ActionSetDownNotEnoughRoom = 132,
    ActionShipToIslandNoDestination = 133,
    ActionSwapEquipmentCannotUseNoEquipmentToSwap = 134,
    ActionTameCreatureTamed = 135,
    ActionTameNoCreature = 136,
    ActionTestDepthNothingToTest = 137,
    ActionTestDepthWell = 138,
    ActionToggleContainerCannotUseAlreadyClosed = 139,
    ActionToggleContainerCannotUseNoContainer = 140,
    ActionToggleContainerCannotUseNoContainerToClose = 141,
    ActionToggleContainerCannotUseNoContainerToOpen = 142,
    ActionToggleContainerCannotUseNotAccessible = 143,
    ActionToggleContainerCannotUseUnknownContainer = 144,
    ActionToggleDoorNoDoor = 145,
    ActionToggleHitchAlreadyHitched = 146,
    ActionToggleHitchAlreadyUnhitched = 147,
    ActionToggleHitchNoCreature = 148,
    ActionToggleHitchNoHitch = 149,
    ActionToggleTilledAlreadyPacked = 150,
    ActionToggleTilledAlreadyTilled = 151,
    ActionToggleTilledDug = 152,
    ActionTradeCannotUseExceedsCarryWeight = 153,
    ActionTradeCannotUseNotEnoughCredit = 154,
    ActionTradeCannotUseNothingToTrade = 155,
    ActionTradeCannotUseTradedTooMuch = 156,
    ActionTradeCreditChange = 157,
    ActionTradeCreditChangeDecrease = 158,
    ActionTradeCreditChangeIncrease = 159,
    ActionTradeDialogue1 = 160,
    ActionTradeDialogue2 = 161,
    ActionTradeDialogue3 = 162,
    ActionTradeDialogue4 = 163,
    ActionTradeIndicateUntradable = 164,
    ActionTradeMerchantItems = 165,
    ActionTradeYourItems = 166,
    ActionUncageCannotUncageHere = 167,
    ActionUpgradeFailed = 168,
    ActionUpgradeNotMagical = 169,
    ActionUpgradeNotPossible = 170,
    ActionUpgradeUpgraded = 171,
    ActionUseItemWeaponNeeded = 172,
    ActionViewItemsCannotUseBlocked = 173,
    AddedFuelToFire = 174,
    AddedFuelToTorch = 175,
    AllEquipmentUnEquipped = 176,
    AlreadyDesalinatedWaterInStill = 177,
    AlreadyFullyRefined = 178,
    AlreadyFullyRepaired = 179,
    AlreadyPreserved = 180,
    AnotherIsland = 181,
    AnUnknownItem = 182,
    AppearedNotEffectiveForGathering = 183,
    ArmorAppeared = 184,
    ArmorProtectedFromInjuryAgainst = 185,
    AttemptToSoothBurnInWater = 186,
    AttemptToSoothFrostbiteWithFire = 187,
    AttemptToSoothFrostbiteWithFireTooHot = 188,
    AttemptToTill = 189,
    BadlyBurnedLostHealth = 190,
    BeenPoisoned = 191,
    BeginSleeping = 192,
    BeginUsingVehicle = 193,
    BleedingHasStopped = 194,
    BleedingProfusely = 195,
    BleedingToDeathLostHealth = 196,
    BookBlank = 197,
    BookContains = 198,
    BookCrumbles = 199,
    BookDiagrams = 200,
    BookEmpty = 201,
    BookNothing = 202,
    BookOpen = 203,
    BookScribbles = 204,
    BothEffectiveIneffective = 205,
    BrokeIntoPieces = 206,
    BrokenOnImpact = 207,
    BrokenWhileFiring = 208,
    Build = 209,
    Burned = 210,
    CannotAddAnyMoreFuel = 211,
    CannotAnythingHere = 212,
    CannotBeCrafted = 213,
    CannotBePerformedOverWater = 214,
    CannotBePlacedHere = 215,
    CannotBePreserved = 216,
    CannotBeRefined = 217,
    CannotBeRefinedReinforcementNeeded = 218,
    CannotBeReinforced = 219,
    CannotBeRepaired = 220,
    CannotBuildHere = 221,
    CannotDigWithHands = 222,
    CannotEquipThatThere = 223,
    CannotFishFor = 224,
    CannotFromHere = 225,
    CannotHere = 226,
    CannotInWater = 227,
    CannotLeave = 228,
    CannotNoTreasure = 229,
    CannotPickUpLockedContainer = 230,
    CannotPickUpWhileLit = 231,
    CannotPlaceContainerInItself = 232,
    CannotPlaceHere = 233,
    CannotPlaceThatFromHere = 234,
    CannotPlaceThatHere = 235,
    CannotPlaceThatOverWater = 236,
    CannotPlantHereTilled = 237,
    CannotRepairWhileLit = 238,
    CannotRestHere = 239,
    CannotShipNoItems = 240,
    CannotShipNoPath = 241,
    CannotSleepHere = 242,
    CannotStartFireHere = 243,
    CannotToAnythingHere = 244,
    CannotToTellTime = 245,
    CannotUseCommand = 246,
    CannotWhenProtected = 247,
    CannotWhenProtectedDangerousAction = 248,
    CannotWhenProtectedDurability = 249,
    CarryingTooMuchWeight = 250,
    CarvedUpCorpse = 251,
    Carving = 252,
    CastYourLine = 253,
    CaughtFish = 254,
    ChatBanCommand = 255,
    ChatBannedCommand = 256,
    ChatCommandsCommand = 257,
    ChatCommandsCommandCommand = 258,
    ChatPingCommand = 259,
    ChatPlayerMessage = 260,
    ChatPlayersCommand = 261,
    ChatServerMessage = 262,
    ChatUnbanCommand = 263,
    ChatUnknownCommand = 264,
    Chop = 265,
    Chopping = 266,
    ClearedBlood = 267,
    Clockwise = 268,
    CloseToBeingDestroyed = 269,
    CommandAttack = 270,
    CommandDefend = 271,
    CommandFollowClose = 272,
    CommandFollowFar = 273,
    CommandHeel = 274,
    CommandStay = 275,
    CopiedMap = 276,
    CorpseOf = 277,//#used via other translations
    CorpseOfNamed = 278,//#used via other translations
    Craft = 279,
    Crafted = 280,
    Crafts = 281,
    CreatureAngered = 282,
    CreatureAppears = 283,
    CreatureAppeased = 284,
    CreatureExcrement = 285,
    CreatureHappinessHigh = 286,
    CreatureHappinessLow = 287,
    CreatureHappinessLowest = 288,
    CreatureHappinessNormal = 289,
    CreatureIdolAttractedCreature = 290,
    CreatureRefusesToBeTamed = 291,
    CreatureRefusesYou = 292,
    CreatureUntamed = 293,
    CreatureZoneBiomeChanged = 294,
    CreatureZoneLayerChanged = 295,
    CreatureZoneRerolled = 296,
    CreatureZoneTierDecreased = 297,
    CreatureZoneTierIncreased = 298,
    CuredYourPoison = 299,
    CurseUpdateSunset = 300,
    Cut = 301,
    CutHasHealed = 302,
    CutLostHealth = 303,
    CutWasBandaged = 304,
    DamageAppeared = 305,
    DamagedByPouring = 306,
    DangerousMove = 307,
    DangerousOpen = 308,
    DayQuarter1 = 309,
    DayQuarter2 = 310,
    DayQuarter3 = 311,
    DayQuarter4 = 312,
    DealtNoDamageToYou = 313,
    DeathBy = 314,
    DeathByBleeding = 315,
    DeathByBurning = 316,
    DeathByChallengeWinner = 317,
    DeathByConsumption = 318,
    DeathByCut = 319,
    DeathByDrowning = 320,
    DeathByExhaustion = 321,
    DeathByFistByPlayer = 322,
    DeathByFrostbite = 323,
    DeathByFrostbiteTemperatureShock = 324,
    DeathByMalnutrition = 325,
    DeathByPoison = 326,
    DeathBySteppingOn = 327,
    DeathByTrap = 328,
    DeathByWeaponByPlayer = 329,
    DedicatedTitleAlreadySelected = 330,
    DedicatedTitleMilestoneNotAllowed = 331,
    DeityIntroductionEvil = 332,
    DeityIntroductionGood = 333,
    DeityIntroductionNeutral = 334,
    DeityIntroductionNoUnderstand = 335,
    DestroyedFromUse = 336,
    Dexterity = 337,
    DidNotSeemToBeHurting = 338,
    Dig = 339,
    DigAway = 340,
    Digging = 341,
    Disassemble = 342,
    Disassembling = 343,
    DiscoveredCaveEntrance = 344,
    DiscoveredColdInsulation = 345,
    DiscoveredHeatInsulation = 346,
    DiscoveredInTheBottle = 347,
    DiscoveredLavaPassage = 348,
    DiscoveredQuality = 349,
    Dismantle = 350,
    Dismantling = 351,
    DismantlingRequires = 352,
    Dismounted = 353,
    DisplacedPuddles = 354,
    DoNotProduceAnyResources = 355,
    DoodadCauseStatus = 356,
    DoodadGroupTier = 357,
    DrewSurroundings = 358,
    Dripstone = 359,
    DroppedIntoDepths = 360,
    DroppedIntoFire = 361,
    DroppedIntoTheVoid = 362,
    DryadSprouted = 363,
    DueToDehydration = 364,
    DueToStarvation = 365,
    DugTreasureOut = 366,
    DugTreasureOutSurprise = 367,
    DumpContentsOfContainerInInventory = 368,
    DyingOfDehydration = 369,
    EarnedMilestone = 370,
    Effective = 371,
    EquipmentPreventedStatusEffects = 372,
    ErrorHasOccured = 373,
    ExtinguishedFire = 374,
    ExtinguishedLightSource = 375,
    ExudeNotPossible = 376,
    FailedToAbsorb = 377,
    FailedToAddFuelToTorch = 378,
    FailedToCage = 379,
    FailedToCatchFish = 380,
    FailedToCauseDamage = 381,
    FailedToCauseYouDamage = 382,
    FailedToCopy = 383,
    FailedToDraw = 384,
    FailedToEnchant = 385,
    FailedToExude = 386,
    FailedToIgniteTorch = 387,
    FailedToPickLock = 388,
    FailedToPreserve = 389,
    FailedToRefine = 390,
    FailedToReinforce = 391,
    FailedToRepair = 392,
    FailedToStartFire = 393,
    FailedToTame = 394,
    FailedToTransmogrify = 395,
    FarOffLands = 396,
    FeltBurningPainLostHealth = 397,
    FeltFrostbitePainLostHealth = 398,
    FewMinutes = 399,
    Filled = 400,
    FilledFrom = 401,
    FireAroundYouIsWarm = 402,
    FiredIntoObstacle = 403,
    FireOverflowed = 404,
    FireOverflowedFireElemental = 405,
    FireSource = 406,
    FishingWithNoBait = 407,
    Floating = 408,
    FreshWater = 409,
    FromTheStill = 410,
    FuelIsRequired = 411,
    Gather = 412,
    GatherDestroy = 413,
    Gathering = 414,
    GhostNoActions = 415,
    GhostOf = 416,
    GoatHasNoMilk = 417,
    HackAway = 418,
    HandProtectionPreventedInjury = 419,
    HandsNotEffectiveFor = 420,
    Harvest = 421,
    Harvesting = 422,
    HasBeenHurtByATrap = 423,
    HasDecayed = 424,
    HasHitYouForDamage = 425,
    HasNoEffect = 426,
    HasSetTrapOffNoDamage = 427,
    HasSplit = 428,
    HelpGrow = 429,
    Hitch = 430,
    HitchAttempt = 431,
    HitchCreature = 432,
    HitchDisabled = 433,
    HitchInUse = 434,
    HitForDamage = 435,
    HitYouForDamage = 436,
    Hour = 437,
    Hours = 438,
    HurtHandsHittingWithoutWeapons = 439,
    HurtHandsWithNoTool = 440,
    IgnitedTorch = 441,
    Ineffective = 442,
    InjuredFromTrap = 443,
    InNeedOfRepair = 444,
    InteractingWithHasInjuredYouForDamage = 445,
    InvalidContainer = 446,
    IsInTheWayOfPickingUp = 447,
    ItemFromWater = 448,
    JoinedAServer = 449,
    Jump = 450,
    Killed = 451,
    KnowledgeHasIncreased = 452,
    LastPlaceYouLeftOff = 453,
    LearnedHowToCreate = 454,
    LikelyFailures = 455,
    Limited = 456,
    Lockpick = 457,
    MapCompletedNotOfThisArea = 458,
    MapDestroyed = 459,
    MapNearlyDestroyed = 460,
    MapNotOfThisArea = 461,
    MaterialsDestroyed = 462,
    MessageOfTheDay = 463,
    Metabolism = 464,
    MetabolismSlowed = 465,
    Milk = 466,
    Mine = 467,
    Mining = 468,
    MissedWith = 469,
    MissedYouWith = 470,
    MovedItem = 471,
    MovedItemFailed = 472,
    MoveOverTrapButDoNotSetOff = 473,
    MultiplayerGamePaused = 474,
    MultiplayerGameResumed = 475,
    MultiplayerPlayerConnected = 476,
    MultiplayerPlayerDied = 477,
    MultiplayerPlayerDisconnected = 478,
    MultiplayerPlayerJoined = 479,
    MustBeEquippedToIgnite = 480,
    Mysteriously = 481,
    NearlyBurnedEquipmentProtectedYou = 482,
    NeedToStartTravelsOutside = 483,
    NeedWaterForBoat = 484,
    NightQuarter1 = 485,
    NightQuarter2 = 486,
    NightQuarter3 = 487,
    NightQuarter4 = 488,
    No = 489,
    NoAmmunitionForThatWeapon = 490,
    NoFireToStokeWith = 491,
    NoFishAtLocation = 492,
    NoGroundWater = 493,
    NoInkToDrawMap = 494,
    NoKindlingOrFuelItemsToStartFire = 495,
    NoKindlingToStartFire = 496,
    NoLongerFeelPainOfBeingBurned = 497,
    NoLongerFeelPainOfBeingFrostbitten = 498,
    NoLongerHostile = 499,
    NoMoreRoomInContainer = 500,
    NoPaperToDrawMap = 501,
    NoRequiredItemToFireWeapon = 502,
    NoReturnWithoutCompletingChallenges = 503,
    NoRoomForImprovement = 504,
    NoRoomForVehicle = 505,
    NoRoomToDrop = 506,
    NoRoomToSummon = 507,
    NotEnoughPurifiedWaterYet = 508,
    NotEnoughTreasureToReturn = 509,
    NothingTo = 510,
    NothingToGetFromThis = 511,
    NothingToHarvestFromThisGather = 512,
    NothingToSmother = 513,
    NothingUsefulToHarvestYet = 514,
    NoTinderToStartFire = 515,
    NotSuitableToPlant = 516,
    NoWaterInStill = 517,
    NPCMerchantNewInventoryDialogue1 = 518,
    NPCMerchantNewInventoryDialogue2 = 519,
    NPCMerchantNewInventoryDialogue3 = 520,
    NPCMerchantNewInventoryDialogue4 = 521,
    NPCMerchantStartingDialogue1 = 522,
    NPCMerchantStartingDialogue2 = 523,
    NPCMerchantStartingDialogue3 = 524,
    NPCMerchantStartingDialogue4 = 525,
    NPCMerchantWelcomeCredit = 526,
    NPCShipperShipToIsland = 527,
    NPCShipperStartingDialogue1 = 528,
    NPCShipperStartingDialogue2 = 529,
    NPCShipperStartingDialogue3 = 530,
    NPCShipperStartingDialogue4 = 531,
    NPCWelcome = 532,
    ObjectIsLocked = 533,
    ObjectIsLockedAttemptToBreakIt = 534,
    OfferAberrantFail = 535,
    OfferAberrantFailButTamed = 536,
    Open = 537,
    OpenClose = 538,
    OverEatingLostStamina = 539,
    OverHydratingLostStamina = 540,
    Pack = 541,
    PaperTurnedToMush = 542,
    ParryTheBlow = 543,
    PetCreature = 544,
    PickAway = 545,
    PickUp = 546,
    PickUpExcrement = 547,
    PickUpTheItem = 548,
    Place = 549,
    PlacedItem = 550,
    PlacedItemFailed = 551,
    PlacedOnGround = 552,
    PlantedInGround = 553,
    PlantGatheredPlant = 554,
    PlantGatheringWillDestroy = 555,
    PlantHasResourcesToGather = 556,
    PlantHasResourcesToHarvest = 557,
    PlantHighlyFertile = 558,
    Planting = 559,
    PlantIsBare = 560,
    PlantIsFertile = 561,
    PlantIsInStage = 562,
    PlantIsNotFertile = 563,
    PlantNotReadyToHarvest = 564,
    PlantReadyToGather = 565,
    PlantReadyToGatherNotMaximal = 566,
    PlantReadyToHarvest = 567,
    PlantReadyToHarvestNotMaximal = 568,
    PlayerHas = 569,
    PlayerHasCompletedChallengeRequirement = 570,
    PlayerHasWonChallenge = 571,
    Poisoned = 572,
    PoisonedLostHealth = 573,
    PoisonWorkedItsCourse = 574,
    PouredOut = 575,
    PouredOutOnYourself = 576,
    PouredWaterIntoStill = 577,
    PourHarmedPlant = 578,
    PourHealedPlant = 579,
    PourHealedPlantFully = 580,
    PourHealedPlantPartially = 581,
    PourIncreasedFertility = 582,
    Pouring = 583,
    PourOverWatering = 584,
    Prepare = 585,
    Prepared = 586,
    PreservedFood = 587,
    PurifiedWaterInStill = 588,
    RandomEventsFire = 589,
    ReduceLength = 590,
    RefusedToBeTamed = 591,
    Repair = 592,
    RequiredForDisassembly = 593,
    RequiresFireToBeLit = 594,
    RequiresYouToBeAround = 595,
    Resistant = 596,
    Rest = 597,
    Rested = 598,
    Resting = 599,
    RestingOnGroundNotEffective = 600,
    RestInterrupted = 601,
    RestInterruptedDamage = 602,
    RestInterruptedDying = 603,
    RestInterruptedLoudNoise = 604,
    RestInterruptedPain = 605,
    RestInterruptedStirring = 606,
    RestInterruptedWaterPoured = 607,
    RestLongTime = 608,
    RestModerateTime = 609,
    RestOnBoat = 610,
    RestShortTime = 611,
    RestTime = 612,
    ReturnedToCivilization = 613,
    ReturningToCivilizationSetOffAgain = 614,
    ReturnsToLife = 615,
    Reverse = 616,
    Sailing = 617,
    ScrollMaster = 618,
    ScrollProvidedNoUsefulInsight = 619,
    Seawater = 620,
    SeemsToHaveDrawnEnergy = 621,
    SetTrapOffButNoDamage = 622,
    SetUp = 623,
    ShadowInTheWater = 624,
    Skill = 625,
    SkillHasRaised = 626,
    Skills = 627,
    Sleep = 628,
    Sleeping = 629,
    SleepOnBoat = 630,
    Slept = 631,
    SlitherSuckerConstricts = 632,
    SlitherSuckerFailedToRemove = 633,
    SlitherSuckerFailedToRemoveOuch = 634,
    SlitherSuckerJumpedOnHead = 635,
    SolarStill = 636,
    SomethingInTheWayOf = 637,
    SomethingInTheWayOfButcherFirst = 638,
    SomethingInTheWayOfFire = 639,
    SomethingInTheWayOfFishing = 640,
    SomethingInTheWayOfPerforming = 641,
    SomethingInTheWayOfPlacing = 642,
    SomethingInTheWayOfReleasing = 643,
    SomethingInTheWayOfSummoning = 644,
    SomethingInWayOfClosingDoor = 645,
    SoothedTheirBurnInjuries = 646,
    SoothedYourBurnInjuries = 647,
    SortedByCategory = 648,
    SortedByCraftableOnly = 649,
    SortedByName = 650,
    SortedBySkill = 651,
    SortedByUnlockedTime = 652,
    StaminaIsFull = 653,
    StartedFire = 654,
    StartTravelInWater = 655,
    StarvingToDeath = 656,
    StatAmount = 657,
    StatChangeUnknown = 658,
    StatGained = 659,
    StatIncreasing = 660,
    StatLost = 661,
    StatQuenched = 662,
    StatRegained = 663,
    StatSated = 664,
    SteppingOn = 665,
    Still = 666,
    StillHasNoWaterToPurify = 667,
    StirredUpClawWorm = 668,
    StirredUpCreature = 669,
    StoppedYourBleeding = 670,
    StopUsingVehicle = 671,
    Strength = 672,
    SummonedGuardiansByDiggingTreasure = 673,
    SummonedGuardiansByLockpicking = 674,
    SummonVoidDwellerItem = 675,
    SummonVoidDwellerRinging = 676,
    SummonVoidDwellerShiver = 677,
    SunNotBrightEnoughToStartFire = 678,
    SwampWater = 679,
    Swimming = 680,
    TakenFromGroundBecomeTamed = 681,
    TeleportBlocked = 682,
    Teleported = 683,
    TheirFist = 684,
    TheirInventory = 685,
    ThePlant = 686,
    ThereIsNoContainerOnTheStill = 687,
    ThereIsNoSunToStartFire = 688,
    ThisCannotBeMilked = 689,
    Throw = 690,
    ThrownIntoDepths = 691,
    ThrownIntoObstacle = 692,
    ThrownIntoVoid = 693,
    TierGroup = 694,
    Till = 695,
    Tilling = 696,
    TimeIs = 697,
    TimeIsDawn = 698,
    TimeIsDaytime = 699,
    TimeIsDusk = 700,
    TimeIsNighttime = 701,
    TimeIsSunrise = 702,
    TimeIsSunset = 703,
    ToFight = 704,
    TooDamaged = 705,
    TooExhaustedToJump = 706,
    Touching = 707,
    TrampledFire = 708,
    TrampledFireFail = 709,
    TrampledFirePartial = 710,
    TrampledIntoGround = 711,
    TrampleIntoGround = 712,
    Trampling = 713,
    TransmogrificationNotPossible = 714,
    Transmogrified = 715,
    TrapMissed = 716,
    TrapStoppedYou = 717,
    Traveling = 718,
    Treasure = 719,
    TreasureIsBlocked = 720,
    UiActionCannotUseInaccessibleItem = 721,
    UiActionCannotUseInThisSituation = 722,
    UiActionCannotUseNoItemHovered = 723,
    UiActionCannotUseNotInRange = 724,
    UiActionCannotUseOnThisIsland = 725,
    UiActionCannotUseRequiresCreature = 726,
    UiActionCannotUseRequiresDoodad = 727,
    UiActionCannotUseRequiresItem = 728,
    UiActionCannotUseRequiresNPC = 729,
    UiActionCannotUseRequiresVehicle = 730,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue1 = 731,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue2 = 732,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue3 = 733,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue1 = 734,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue2 = 735,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue3 = 736,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue1 = 737,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue2 = 738,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue3 = 739,
    Unhitch = 740,
    UnhitchCreature = 741,
    Unknown = 742,
    Unlimited = 743,
    UnlockedChest = 744,
    UnpurifiedFreshWater = 745,
    UnpurifiedWaterInStill = 746,
    Use = 747,
    UsingBareHands = 748,
    VehicleDefense = 749,
    Vulnerable = 750,
    Water = 751,
    WaterGathering = 752,
    WaterPutOutFire = 753,
    WellIsDry = 754,
    WellIsFull = 755,
    WildGoatRefusedToBeMilked = 756,
    WorkingYourselfIntoExhaustion = 757,
    WorkingYourselfIntoExhaustionAndDrowning = 758,
    WorldContainer = 759,
    You = 760,
    YouAbsorb = 761,
    YouApplied = 762,
    YouAreAlready = 763,
    YouAte = 764,
    YouBeginResting = 765,
    YouCannotDoThatYet = 766,
    YouCanNowCombatTheTides = 767,
    YouCrafted = 768,
    YouDoNotFindTreasureYet = 769,
    YouDrank = 770,
    YouDropTheTorch = 771,
    YouEnchant = 772,
    YouEquip = 773,
    YouExude = 774,
    YouExudeSome = 775,
    YouExudeSomeReasonConflicting = 776,
    YouExudeSomeReasonMax = 777,
    YouExudeSomeReasonProperties = 778,
    YouFailedTo = 779,
    YouFailedToExtinguishedFireFully = 780,
    YouFailedToHeal = 781,
    YouFailedToHealOther = 782,
    YouFire = 783,
    YouGathered = 784,
    YouGatheredAndDropped = 785,
    YouHarvested = 786,
    YouHarvestedAndDropped = 787,
    YouHave = 788,
    YouHaveAlreadyLearned = 789,
    YouHaveBeenCut = 790,
    YouHaveCaged = 791,
    YouHaveCommanded = 792,
    YouHaveDied = 793,
    YouHaveHealedOther = 794,
    YouHaveKilled = 795,
    YouHaveNotCommanded = 796,
    YouHaveReleased = 797,
    YouHaveSummoned = 798,
    YouHaveTamed = 799,
    YouHaveUncaged = 800,
    YouNoticeBarren = 801,
    YouNoticeBecomeEnraged = 802,
    YouNoticeDying = 803,
    YouNoticeFertilityDecreasing = 804,
    YouNoticeFertilityIncreasing = 805,
    YouNoticeGrowing = 806,
    YouNoticeLavaCooling = 807,
    YouNoticeLavaHardening = 808,
    YouNoticePerish = 809,
    YouNoticePlantDamage = 810,
    YouNoticePlantRegenerated = 811,
    YouNoticeRegrowing = 812,
    YouNoticeStumbleInjureItself = 813,
    YouNoticeTakeFromGround = 814,
    YouNoticeWoundsClosing = 815,
    YouNoticeZombieHorde = 816,
    YouOfferedToCreature = 817,
    YouOfferedToCreatureRejects = 818,
    YouOpen = 819,
    YouPacked = 820,
    YouPickedUp = 821,
    YouRefine = 822,
    YouReinforce = 823,
    YouRepair = 824,
    YouReturnFromCivilizationWith = 825,
    YourFist = 826,
    YourHands = 827,
    YourInventory = 828,
    YourIsland = 829,
    YouSeeALivingMushroomSpore = 830,
    YouSeeASkeletonCollapse = 831,
    YouSeeASlimeCombine = 832,
    YouSeeAZombieBleeding = 833,
    YouSeeCoolDown = 834,
    YouSeeDrop = 835,
    YouSeeEngulfFire = 836,
    YouSeeFireSpread = 837,
    YouSeeHelpingPlant = 838,
    YouSeeLay = 839,
    YouSeeLayingTrap = 840,
    YouSeeSpewLava = 841,
    YouSeeSpitAcid = 842,
    YouSeeSpringForth = 843,
    YouSeeSummon = 844,
    YouSeeSwampFlood = 845,
    YouSeeTrampling = 846,
    YouSetTheTrapOff = 847,
    YouStokeTheCreature = 848,
    YouSwapMainHandAndOffHand = 849,
    YouThrew = 850,
    YouTilled = 851,
    YouUnequip = 852,
    YouUsed = 853,
    YouViewTheItemsOn = 854,
    YouWhileTraveling = 855
}
export default Message;
