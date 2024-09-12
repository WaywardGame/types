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
    ActionSailToCivilizationNotInsideBoat = 111,
    ActionSailToIsland = 112,
    ActionSailToIslandArrived = 113,
    ActionSailToIslandCannotUseCannotReachEdge = 114,
    ActionSailToIslandCannotUseCannotReachPort = 115,
    ActionSailToIslandCannotUseGhost = 116,
    ActionSailToIslandCannotUseInvalidDestination = 117,
    ActionSailToIslandCannotUseNoDestination = 118,
    ActionSailToIslandCannotUseNotEnoughStamina = 119,
    ActionSailToIslandCannotUseNotEnoughSwimmingSkill = 120,
    ActionSailToIslandCannotUseTravellingIsDisallowedInTheseLands = 121,
    ActionSailToIslandPlayerArriving = 122,
    ActionSailToIslandPlayerDeparting = 123,
    ActionSetCreatureAiAlreadyCommanded = 124,
    ActionSetCreatureAiCannotCommand = 125,
    ActionSetCreatureAiNotEnoughSkill = 126,
    ActionSetCreatureAiNotEnoughTames = 127,
    ActionSetDownNotEnoughRoom = 128,
    ActionShipToIslandNoDestination = 129,
    ActionSwapEquipmentCannotUseNoEquipmentToSwap = 130,
    ActionTameCreatureTamed = 131,
    ActionTameNoCreature = 132,
    ActionTestDepthNothingToTest = 133,
    ActionTestDepthWell = 134,
    ActionToggleContainerCannotUseAlreadyClosed = 135,
    ActionToggleContainerCannotUseNoContainer = 136,
    ActionToggleContainerCannotUseNoContainerToClose = 137,
    ActionToggleContainerCannotUseNoContainerToOpen = 138,
    ActionToggleContainerCannotUseNotAccessible = 139,
    ActionToggleContainerCannotUseUnknownContainer = 140,
    ActionToggleDoorNoDoor = 141,
    ActionToggleHitchAlreadyHitched = 142,
    ActionToggleHitchAlreadyUnhitched = 143,
    ActionToggleHitchNoCreature = 144,
    ActionToggleHitchNoHitch = 145,
    ActionToggleTilledAlreadyPacked = 146,
    ActionToggleTilledAlreadyTilled = 147,
    ActionToggleTilledDug = 148,
    ActionTradeCannotUseExceedsCarryWeight = 149,
    ActionTradeCannotUseNotEnoughCredit = 150,
    ActionTradeCannotUseNothingToTrade = 151,
    ActionTradeCannotUseTradedTooMuch = 152,
    ActionTradeCreditChange = 153,
    ActionTradeCreditChangeDecrease = 154,
    ActionTradeCreditChangeIncrease = 155,
    ActionTradeDialogue1 = 156,
    ActionTradeDialogue2 = 157,
    ActionTradeDialogue3 = 158,
    ActionTradeDialogue4 = 159,
    ActionTradeIndicateUntradable = 160,
    ActionTradeMerchantItems = 161,
    ActionTradeYourItems = 162,
    ActionUncageCannotUncageHere = 163,
    ActionUpgradeFailed = 164,
    ActionUpgradeNotMagical = 165,
    ActionUpgradeNotPossible = 166,
    ActionUpgradeUpgraded = 167,
    ActionUseItemWeaponNeeded = 168,
    AddedFuelToFire = 169,
    AddedFuelToTorch = 170,
    AllEquipmentUnEquipped = 171,
    AlreadyDesalinatedWaterInStill = 172,
    AlreadyFullyRefined = 173,
    AlreadyFullyRepaired = 174,
    AlreadyPreserved = 175,
    AnotherIsland = 176,
    AnUnknownItem = 177,
    AppearedNotEffectiveForGathering = 178,
    ArmorAppeared = 179,
    ArmorProtectedFromInjuryAgainst = 180,
    AttemptToSoothBurnInWater = 181,
    AttemptToSoothFrostbiteWithFire = 182,
    AttemptToSoothFrostbiteWithFireTooHot = 183,
    AttemptToTill = 184,
    BadlyBurnedLostHealth = 185,
    BeenPoisoned = 186,
    BeginSleeping = 187,
    BeginUsingVehicle = 188,
    BleedingHasStopped = 189,
    BleedingProfusely = 190,
    BleedingToDeathLostHealth = 191,
    BookBlank = 192,
    BookContains = 193,
    BookCrumbles = 194,
    BookDiagrams = 195,
    BookEmpty = 196,
    BookNothing = 197,
    BookOpen = 198,
    BookScribbles = 199,
    BothEffectiveIneffective = 200,
    BrokeIntoPieces = 201,
    BrokenOnImpact = 202,
    BrokenWhileFiring = 203,
    Build = 204,
    Burned = 205,
    CannotAddAnyMoreFuel = 206,
    CannotAnythingHere = 207,
    CannotBeCrafted = 208,
    CannotBePerformedOverWater = 209,
    CannotBePlacedHere = 210,
    CannotBePreserved = 211,
    CannotBeRefined = 212,
    CannotBeRefinedReinforcementNeeded = 213,
    CannotBeReinforced = 214,
    CannotBeRepaired = 215,
    CannotBuildHere = 216,
    CannotDigWithHands = 217,
    CannotEquipThatThere = 218,
    CannotFishFor = 219,
    CannotHere = 220,
    CannotInWater = 221,
    CannotLeave = 222,
    CannotNoTreasure = 223,
    CannotPickUpLockedContainer = 224,
    CannotPickUpWhileLit = 225,
    CannotPlaceContainerInItself = 226,
    CannotPlaceHere = 227,
    CannotPlaceThatFromHere = 228,
    CannotPlaceThatHere = 229,
    CannotPlaceThatOverWater = 230,
    CannotPlantHereTilled = 231,
    CannotRepairWhileLit = 232,
    CannotRestHere = 233,
    CannotShipNoItems = 234,
    CannotShipNoPath = 235,
    CannotSleepHere = 236,
    CannotStartFireHere = 237,
    CannotToAnythingHere = 238,
    CannotToTellTime = 239,
    CannotUseCommand = 240,
    CannotWhenProtected = 241,
    CannotWhenProtectedDangerousAction = 242,
    CannotWhenProtectedDurability = 243,
    CarryingTooMuchWeight = 244,
    CarvedUpCorpse = 245,
    Carving = 246,
    CastYourLine = 247,
    CaughtFish = 248,
    ChatBanCommand = 249,
    ChatBannedCommand = 250,
    ChatCommandsCommand = 251,
    ChatCommandsCommandCommand = 252,
    ChatPingCommand = 253,
    ChatPlayerMessage = 254,
    ChatPlayersCommand = 255,
    ChatServerMessage = 256,
    ChatUnbanCommand = 257,
    ChatUnknownCommand = 258,
    Chop = 259,
    Chopping = 260,
    ClearedBlood = 261,
    Clockwise = 262,
    CloseToBeingDestroyed = 263,
    CommandAttack = 264,
    CommandDefend = 265,
    CommandFollowClose = 266,
    CommandFollowFar = 267,
    CommandHeel = 268,
    CommandStay = 269,
    CopiedMap = 270,
    CorpseOf = 271,//#used via other translations
    CorpseOfNamed = 272,//#used via other translations
    Craft = 273,
    Crafted = 274,
    Crafts = 275,
    CreatureAngered = 276,
    CreatureAppears = 277,
    CreatureAppeased = 278,
    CreatureExcrement = 279,
    CreatureHappinessHigh = 280,
    CreatureHappinessLow = 281,
    CreatureHappinessLowest = 282,
    CreatureHappinessNormal = 283,
    CreatureIdolAttractedCreature = 284,
    CreatureRefusesToBeTamed = 285,
    CreatureRefusesYou = 286,
    CreatureUntamed = 287,
    CreatureZoneBiomeChanged = 288,
    CreatureZoneLayerChanged = 289,
    CreatureZoneRerolled = 290,
    CreatureZoneTierDecreased = 291,
    CreatureZoneTierIncreased = 292,
    CuredYourPoison = 293,
    CurseUpdateSunset = 294,
    Cut = 295,
    CutHasHealed = 296,
    CutLostHealth = 297,
    CutWasBandaged = 298,
    DamageAppeared = 299,
    DamagedByPouring = 300,
    DangerousMove = 301,
    DangerousOpen = 302,
    DayQuarter1 = 303,
    DayQuarter2 = 304,
    DayQuarter3 = 305,
    DayQuarter4 = 306,
    DealtNoDamageToYou = 307,
    DeathBy = 308,
    DeathByBleeding = 309,
    DeathByBurning = 310,
    DeathByChallengeWinner = 311,
    DeathByConsumption = 312,
    DeathByCut = 313,
    DeathByDrowning = 314,
    DeathByExhaustion = 315,
    DeathByFistByPlayer = 316,
    DeathByFrostbite = 317,
    DeathByFrostbiteTemperatureShock = 318,
    DeathByMalnutrition = 319,
    DeathByPoison = 320,
    DeathBySteppingOn = 321,
    DeathByTrap = 322,
    DeathByWeaponByPlayer = 323,
    DedicatedTitleAlreadySelected = 324,
    DedicatedTitleMilestoneNotAllowed = 325,
    DeityIntroductionEvil = 326,
    DeityIntroductionGood = 327,
    DeityIntroductionNeutral = 328,
    DeityIntroductionNoUnderstand = 329,
    DestroyedFromUse = 330,
    Dexterity = 331,
    DidNotSeemToBeHurting = 332,
    Dig = 333,
    DigAway = 334,
    Digging = 335,
    Disassemble = 336,
    Disassembling = 337,
    DiscoveredCaveEntrance = 338,
    DiscoveredColdInsulation = 339,
    DiscoveredHeatInsulation = 340,
    DiscoveredInTheBottle = 341,
    DiscoveredLavaPassage = 342,
    DiscoveredQuality = 343,
    Dismantle = 344,
    Dismantling = 345,
    DismantlingRequires = 346,
    Dismounted = 347,
    DisplacedPuddles = 348,
    DoNotProduceAnyResources = 349,
    DoodadCauseStatus = 350,
    DoodadGroupTier = 351,
    DrewSurroundings = 352,
    Dripstone = 353,
    DroppedIntoDepths = 354,
    DroppedIntoFire = 355,
    DroppedIntoTheVoid = 356,
    DryadSprouted = 357,
    DueToDehydration = 358,
    DueToStarvation = 359,
    DugTreasureOut = 360,
    DugTreasureOutSurprise = 361,
    DumpContentsOfContainerInInventory = 362,
    DyingOfDehydration = 363,
    EarnedMilestone = 364,
    Effective = 365,
    EquipmentPreventedStatusEffects = 366,
    ErrorHasOccured = 367,
    ExtinguishedFire = 368,
    ExtinguishedLightSource = 369,
    ExudeNotPossible = 370,
    FailedToAbsorb = 371,
    FailedToAddFuelToTorch = 372,
    FailedToCage = 373,
    FailedToCatchFish = 374,
    FailedToCauseDamage = 375,
    FailedToCauseYouDamage = 376,
    FailedToCopy = 377,
    FailedToDraw = 378,
    FailedToEnchant = 379,
    FailedToExude = 380,
    FailedToIgniteTorch = 381,
    FailedToPickLock = 382,
    FailedToPreserve = 383,
    FailedToRefine = 384,
    FailedToReinforce = 385,
    FailedToRepair = 386,
    FailedToStartFire = 387,
    FailedToTame = 388,
    FailedToTransmogrify = 389,
    FarOffLands = 390,
    FeltBurningPainLostHealth = 391,
    FeltFrostbitePainLostHealth = 392,
    FewMinutes = 393,
    Filled = 394,
    FilledFrom = 395,
    FireAroundYouIsWarm = 396,
    FiredIntoObstacle = 397,
    FireOverflowed = 398,
    FireOverflowedFireElemental = 399,
    FireSource = 400,
    FishingWithNoBait = 401,
    Floating = 402,
    FreshWater = 403,
    FromTheStill = 404,
    FuelIsRequired = 405,
    Gather = 406,
    GatherDestroy = 407,
    Gathering = 408,
    GhostNoActions = 409,
    GhostOf = 410,
    GoatHasNoMilk = 411,
    HackAway = 412,
    HandProtectionPreventedInjury = 413,
    HandsNotEffectiveFor = 414,
    Harvest = 415,
    Harvesting = 416,
    HasBeenHurtByATrap = 417,
    HasDecayed = 418,
    HasHitYouForDamage = 419,
    HasNoEffect = 420,
    HasSetTrapOffNoDamage = 421,
    HasSplit = 422,
    HelpGrow = 423,
    Hitch = 424,
    HitchAttempt = 425,
    HitchCreature = 426,
    HitchDisabled = 427,
    HitchInUse = 428,
    HitForDamage = 429,
    HitYouForDamage = 430,
    Hour = 431,
    Hours = 432,
    HurtHandsHittingWithoutWeapons = 433,
    HurtHandsWithNoTool = 434,
    IgnitedTorch = 435,
    Ineffective = 436,
    InjuredFromTrap = 437,
    InNeedOfRepair = 438,
    InteractingWithHasInjuredYouForDamage = 439,
    InvalidContainer = 440,
    IsInTheWayOfPickingUp = 441,
    ItemFromWater = 442,
    JoinedAServer = 443,
    Jump = 444,
    Killed = 445,
    KnowledgeHasIncreased = 446,
    LastPlaceYouLeftOff = 447,
    LearnedHowToCreate = 448,
    LikelyFailures = 449,
    Limited = 450,
    Lockpick = 451,
    MapCompletedNotOfThisArea = 452,
    MapDestroyed = 453,
    MapNearlyDestroyed = 454,
    MapNotOfThisArea = 455,
    MaterialsDestroyed = 456,
    MessageOfTheDay = 457,
    Metabolism = 458,
    MetabolismSlowed = 459,
    Milk = 460,
    Mine = 461,
    Mining = 462,
    MissedWith = 463,
    MissedYouWith = 464,
    MovedItem = 465,
    MovedItemFailed = 466,
    MoveOverTrapButDoNotSetOff = 467,
    MultiplayerGamePaused = 468,
    MultiplayerGameResumed = 469,
    MultiplayerPlayerConnected = 470,
    MultiplayerPlayerDied = 471,
    MultiplayerPlayerDisconnected = 472,
    MultiplayerPlayerJoined = 473,
    MustBeEquippedToIgnite = 474,
    Mysteriously = 475,
    NearlyBurnedEquipmentProtectedYou = 476,
    NeedToStartTravelsOutside = 477,
    NeedWaterForBoat = 478,
    NightQuarter1 = 479,
    NightQuarter2 = 480,
    NightQuarter3 = 481,
    NightQuarter4 = 482,
    No = 483,
    NoAmmunitionForThatWeapon = 484,
    NoFireToStokeWith = 485,
    NoFishAtLocation = 486,
    NoGroundWater = 487,
    NoInkToDrawMap = 488,
    NoKindlingOrFuelItemsToStartFire = 489,
    NoKindlingToStartFire = 490,
    NoLongerFeelPainOfBeingBurned = 491,
    NoLongerFeelPainOfBeingFrostbitten = 492,
    NoLongerHostile = 493,
    NoMoreRoomInContainer = 494,
    NoPaperToDrawMap = 495,
    NoRequiredItemToFireWeapon = 496,
    NoReturnWithoutCompletingChallenges = 497,
    NoRoomForImprovement = 498,
    NoRoomForVehicle = 499,
    NoRoomToDrop = 500,
    NoRoomToSummon = 501,
    NotEnoughPurifiedWaterYet = 502,
    NotEnoughTreasureToReturn = 503,
    NothingTo = 504,
    NothingToGetFromThis = 505,
    NothingToHarvestFromThisGather = 506,
    NothingToSmother = 507,
    NothingUsefulToHarvestYet = 508,
    NoTinderToStartFire = 509,
    NotSuitableToPlant = 510,
    NoWaterInStill = 511,
    NPCMerchantNewInventoryDialogue1 = 512,
    NPCMerchantNewInventoryDialogue2 = 513,
    NPCMerchantNewInventoryDialogue3 = 514,
    NPCMerchantNewInventoryDialogue4 = 515,
    NPCMerchantStartingDialogue1 = 516,
    NPCMerchantStartingDialogue2 = 517,
    NPCMerchantStartingDialogue3 = 518,
    NPCMerchantStartingDialogue4 = 519,
    NPCMerchantWelcomeCredit = 520,
    NPCShipperShipToIsland = 521,
    NPCShipperStartingDialogue1 = 522,
    NPCShipperStartingDialogue2 = 523,
    NPCShipperStartingDialogue3 = 524,
    NPCShipperStartingDialogue4 = 525,
    NPCWelcome = 526,
    ObjectIsLocked = 527,
    ObjectIsLockedAttemptToBreakIt = 528,
    OfferAberrantFail = 529,
    OfferAberrantFailButTamed = 530,
    Open = 531,
    OpenClose = 532,
    OverEatingLostStamina = 533,
    OverHydratingLostStamina = 534,
    Pack = 535,
    PaperTurnedToMush = 536,
    ParryTheBlow = 537,
    PetCreature = 538,
    PickAway = 539,
    PickUp = 540,
    PickUpExcrement = 541,
    PickUpTheItem = 542,
    Place = 543,
    PlacedItem = 544,
    PlacedItemFailed = 545,
    PlacedOnGround = 546,
    PlantedInGround = 547,
    PlantGatheredPlant = 548,
    PlantGatheringWillDestroy = 549,
    PlantHasResourcesToGather = 550,
    PlantHasResourcesToHarvest = 551,
    PlantHighlyFertile = 552,
    Planting = 553,
    PlantIsBare = 554,
    PlantIsFertile = 555,
    PlantIsInStage = 556,
    PlantIsNotFertile = 557,
    PlantNotReadyToHarvest = 558,
    PlantReadyToGather = 559,
    PlantReadyToGatherNotMaximal = 560,
    PlantReadyToHarvest = 561,
    PlantReadyToHarvestNotMaximal = 562,
    PlayerHas = 563,
    PlayerHasCompletedChallengeRequirement = 564,
    PlayerHasWonChallenge = 565,
    Poisoned = 566,
    PoisonedLostHealth = 567,
    PoisonWorkedItsCourse = 568,
    PouredOut = 569,
    PouredOutOnYourself = 570,
    PouredWaterIntoStill = 571,
    PourHarmedPlant = 572,
    PourHealedPlant = 573,
    PourHealedPlantFully = 574,
    PourHealedPlantPartially = 575,
    PourIncreasedFertility = 576,
    Pouring = 577,
    PourOverWatering = 578,
    Prepare = 579,
    Prepared = 580,
    PreservedFood = 581,
    PurifiedWaterInStill = 582,
    RandomEventsFire = 583,
    ReduceLength = 584,
    RefusedToBeTamed = 585,
    Repair = 586,
    RequiredForDisassembly = 587,
    RequiresFireToBeLit = 588,
    RequiresYouToBeAround = 589,
    Resistant = 590,
    Rest = 591,
    Rested = 592,
    Resting = 593,
    RestingOnGroundNotEffective = 594,
    RestInterrupted = 595,
    RestInterruptedDamage = 596,
    RestInterruptedDying = 597,
    RestInterruptedLoudNoise = 598,
    RestInterruptedPain = 599,
    RestInterruptedStirring = 600,
    RestInterruptedWaterPoured = 601,
    RestLongTime = 602,
    RestModerateTime = 603,
    RestOnBoat = 604,
    RestShortTime = 605,
    RestTime = 606,
    ReturnedToCivilization = 607,
    ReturningToCivilizationSetOffAgain = 608,
    ReturnsToLife = 609,
    Reverse = 610,
    Sailing = 611,
    ScrollMaster = 612,
    ScrollProvidedNoUsefulInsight = 613,
    Seawater = 614,
    SeemsToHaveDrawnEnergy = 615,
    SetTrapOffButNoDamage = 616,
    SetUp = 617,
    ShadowInTheWater = 618,
    Skill = 619,
    SkillHasRaised = 620,
    Skills = 621,
    Sleep = 622,
    Sleeping = 623,
    SleepOnBoat = 624,
    Slept = 625,
    SlitherSuckerConstricts = 626,
    SlitherSuckerFailedToRemove = 627,
    SlitherSuckerFailedToRemoveOuch = 628,
    SlitherSuckerJumpedOnHead = 629,
    SolarStill = 630,
    SomethingInTheWayOf = 631,
    SomethingInTheWayOfButcherFirst = 632,
    SomethingInTheWayOfFire = 633,
    SomethingInTheWayOfFishing = 634,
    SomethingInTheWayOfPerforming = 635,
    SomethingInTheWayOfPlacing = 636,
    SomethingInTheWayOfReleasing = 637,
    SomethingInTheWayOfSummoning = 638,
    SomethingInWayOfClosingDoor = 639,
    SoothedTheirBurnInjuries = 640,
    SoothedYourBurnInjuries = 641,
    SortedByCategory = 642,
    SortedByCraftableOnly = 643,
    SortedByName = 644,
    SortedBySkill = 645,
    SortedByUnlockedTime = 646,
    StaminaIsFull = 647,
    StartedFire = 648,
    StartTravelInWater = 649,
    StarvingToDeath = 650,
    StatAmount = 651,
    StatChangeUnknown = 652,
    StatGained = 653,
    StatIncreasing = 654,
    StatLost = 655,
    StatQuenched = 656,
    StatRegained = 657,
    StatSated = 658,
    SteppingOn = 659,
    Still = 660,
    StillHasNoWaterToPurify = 661,
    StirredUpClawWorm = 662,
    StirredUpCreature = 663,
    StoppedYourBleeding = 664,
    StopUsingVehicle = 665,
    Strength = 666,
    SummonedGuardiansByDiggingTreasure = 667,
    SummonedGuardiansByLockpicking = 668,
    SummonVoidDwellerItem = 669,
    SummonVoidDwellerRinging = 670,
    SummonVoidDwellerShiver = 671,
    SunNotBrightEnoughToStartFire = 672,
    SwampWater = 673,
    Swimming = 674,
    TakenFromGroundBecomeTamed = 675,
    TeleportBlocked = 676,
    Teleported = 677,
    TheirFist = 678,
    TheirInventory = 679,
    ThePlant = 680,
    ThereIsNoContainerOnTheStill = 681,
    ThereIsNoSunToStartFire = 682,
    ThisCannotBeMilked = 683,
    Throw = 684,
    ThrownIntoDepths = 685,
    ThrownIntoObstacle = 686,
    ThrownIntoVoid = 687,
    TierGroup = 688,
    Till = 689,
    Tilling = 690,
    TimeIs = 691,
    TimeIsDawn = 692,
    TimeIsDaytime = 693,
    TimeIsDusk = 694,
    TimeIsNighttime = 695,
    TimeIsSunrise = 696,
    TimeIsSunset = 697,
    ToFight = 698,
    TooDamaged = 699,
    TooExhaustedToJump = 700,
    Touching = 701,
    TrampledFire = 702,
    TrampledFireFail = 703,
    TrampledFirePartial = 704,
    TrampledIntoGround = 705,
    TrampleIntoGround = 706,
    Trampling = 707,
    TransmogrificationNotPossible = 708,
    Transmogrified = 709,
    TrapMissed = 710,
    TrapStoppedYou = 711,
    Traveling = 712,
    Treasure = 713,
    TreasureIsBlocked = 714,
    UiActionCannotUseInaccessibleItem = 715,
    UiActionCannotUseInThisSituation = 716,
    UiActionCannotUseNoItemHovered = 717,
    UiActionCannotUseNotInRange = 718,
    UiActionCannotUseOnThisIsland = 719,
    UiActionCannotUseRequiresCreature = 720,
    UiActionCannotUseRequiresDoodad = 721,
    UiActionCannotUseRequiresItem = 722,
    UiActionCannotUseRequiresNPC = 723,
    UiActionCannotUseRequiresVehicle = 724,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue1 = 725,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue2 = 726,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue3 = 727,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue1 = 728,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue2 = 729,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue3 = 730,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue1 = 731,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue2 = 732,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue3 = 733,
    Unhitch = 734,
    UnhitchCreature = 735,
    Unknown = 736,
    Unlimited = 737,
    UnlockedChest = 738,
    UnpurifiedFreshWater = 739,
    UnpurifiedWaterInStill = 740,
    Use = 741,
    UsingBareHands = 742,
    VehicleDefense = 743,
    Vulnerable = 744,
    Water = 745,
    WaterGathering = 746,
    WaterPutOutFire = 747,
    WellIsDry = 748,
    WellIsFull = 749,
    WildGoatRefusedToBeMilked = 750,
    WorkingYourselfIntoExhaustion = 751,
    WorkingYourselfIntoExhaustionAndDrowning = 752,
    WorldContainer = 753,
    You = 754,
    YouAbsorb = 755,
    YouApplied = 756,
    YouAreAlready = 757,
    YouAte = 758,
    YouBeginResting = 759,
    YouCannotDoThatYet = 760,
    YouCanNowCombatTheTides = 761,
    YouCrafted = 762,
    YouDoNotFindTreasureYet = 763,
    YouDrank = 764,
    YouDropTheTorch = 765,
    YouEnchant = 766,
    YouEquip = 767,
    YouExude = 768,
    YouExudeSome = 769,
    YouExudeSomeReasonConflicting = 770,
    YouExudeSomeReasonMax = 771,
    YouExudeSomeReasonProperties = 772,
    YouFailedTo = 773,
    YouFailedToExtinguishedFireFully = 774,
    YouFailedToHeal = 775,
    YouFailedToHealOther = 776,
    YouFire = 777,
    YouGathered = 778,
    YouGatheredAndDropped = 779,
    YouHarvested = 780,
    YouHarvestedAndDropped = 781,
    YouHave = 782,
    YouHaveAlreadyLearned = 783,
    YouHaveBeenCut = 784,
    YouHaveCaged = 785,
    YouHaveCommanded = 786,
    YouHaveDied = 787,
    YouHaveHealedOther = 788,
    YouHaveKilled = 789,
    YouHaveNotCommanded = 790,
    YouHaveReleased = 791,
    YouHaveSummoned = 792,
    YouHaveTamed = 793,
    YouHaveUncaged = 794,
    YouNoticeBarren = 795,
    YouNoticeBecomeEnraged = 796,
    YouNoticeDying = 797,
    YouNoticeFertilityDecreasing = 798,
    YouNoticeFertilityIncreasing = 799,
    YouNoticeGrowing = 800,
    YouNoticeLavaCooling = 801,
    YouNoticeLavaHardening = 802,
    YouNoticePerish = 803,
    YouNoticePlantDamage = 804,
    YouNoticePlantRegenerated = 805,
    YouNoticeRegrowing = 806,
    YouNoticeStumbleInjureItself = 807,
    YouNoticeTakeFromGround = 808,
    YouNoticeWoundsClosing = 809,
    YouNoticeZombieHorde = 810,
    YouOfferedToCreature = 811,
    YouOfferedToCreatureRejects = 812,
    YouOpen = 813,
    YouPacked = 814,
    YouPickedUp = 815,
    YouRefine = 816,
    YouReinforce = 817,
    YouRepair = 818,
    YouReturnFromCivilizationWith = 819,
    YourFist = 820,
    YourHands = 821,
    YourInventory = 822,
    YourIsland = 823,
    YouSeeALivingMushroomSpore = 824,
    YouSeeASkeletonCollapse = 825,
    YouSeeASlimeCombine = 826,
    YouSeeAZombieBleeding = 827,
    YouSeeCoolDown = 828,
    YouSeeDrop = 829,
    YouSeeEngulfFire = 830,
    YouSeeFireSpread = 831,
    YouSeeHelpingPlant = 832,
    YouSeeLay = 833,
    YouSeeLayingTrap = 834,
    YouSeeSpewLava = 835,
    YouSeeSpitAcid = 836,
    YouSeeSpringForth = 837,
    YouSeeSummon = 838,
    YouSeeSwampFlood = 839,
    YouSeeTrampling = 840,
    YouSetTheTrapOff = 841,
    YouStokeTheCreature = 842,
    YouSwapMainHandAndOffHand = 843,
    YouThrew = 844,
    YouTilled = 845,
    YouUnequip = 846,
    YouUsed = 847,
    YouWhileTraveling = 848
}
export default Message;
