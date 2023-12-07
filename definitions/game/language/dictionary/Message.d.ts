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
declare enum Message {
    None = 0,
    Multiple = 1,
    Aberrant = 2,
    AboutHours = 3,
    Absorb = 4,
    AbsorbNotPossible = 5,
    ActionAlterAltered = 6,
    ActionAlterFailed = 7,
    ActionAlterNotPossible = 8,
    ActionAttachAlreadyHasItem = 9,
    ActionAttachAttachedItem = 10,
    ActionAttachAttachingItem = 11,
    ActionAttachCannotAttach = 12,
    ActionAttachNothingToAttachItemTo = 13,
    ActionButcherReleasesLava = 14,
    ActionCageCreatureCannotBeCaged = 15,
    ActionCageCreatureNoCreature = 16,
    ActionCageCreatureNoTamedCreature = 17,
    ActionCageCreatureNotOwner = 18,
    ActionCastAreaOverfished = 19,
    ActionConsumeItemTypeStats = 20,
    ActionCraft = 21,
    ActionCraftEfficacy = 22,
    ActionCraftEfficacyHigh = 23,
    ActionCraftEfficacyHighest = 24,
    ActionCraftEfficacyLow = 25,
    ActionCraftEfficacyLowest = 26,
    ActionCraftEfficacyMed = 27,
    ActionCraftEfficacyPercent = 28,
    ActionCraftYouLackTheRequirements = 29,
    ActionDetachContainerDetachContainer = 30,
    ActionDetachContainerNoDetach = 31,
    ActionDisassembleNoItemsSalvaged = 32,
    ActionDisassembleSalvaged = 33,
    ActionDismantleSeparated = 34,
    ActionDisplayItemDisplayed = 35,
    ActionDisplayItemReturned = 36,
    ActionDrinkInFrontNoDrink = 37,
    ActionDropCannotUseBlocked = 38,
    ActionDropCannotUseItemProtected = 39,
    ActionDropCannotUseItemProtectedDangerous = 40,
    ActionDropCannotUseNoItems = 41,
    ActionDumpItemsCannotUseBlocked = 42,
    ActionDumpItemsCannotUseNothingToDumpOut = 43,
    ActionDumpItemsCannotUseWrongDirection = 44,
    ActionDumpItemsDumpedItems = 45,
    ActionEnhance = 46,
    ActionEnhanceEnhanced = 47,
    ActionEnhanceFailed = 48,
    ActionEnhanceNotPossible = 49,
    ActionEquipWillBreakOnDamage = 50,
    ActionFishingNothingBiting = 51,
    ActionFishingSlipped = 52,
    ActionFishingTooShallow = 53,
    ActionJumpCannotJump = 54,
    ActionMeleeNothingToAttack = 55,
    ActionMoveItemCannotUseContainerTooFarAway = 56,
    ActionMoveItemCannotUseInvalidContainer = 57,
    ActionMoveItemCannotUseItemFilteredOut = 58,
    ActionMoveItemCannotUseItemQualityOrTypeIncorrect = 59,
    ActionMoveItemCannotUseItemTooFarAway = 60,
    ActionMoveItemCannotUseMovingFromMultipleContainers = 61,
    ActionMoveItemCannotUseNoContainerToMoveTo = 62,
    ActionMoveItemCannotUseNoItems = 63,
    ActionMoveItemCannotUseNoRoom = 64,
    ActionMoveItemCannotUseProtected = 65,
    ActionMoveToSwimOffEdgeCannotCombatTides = 66,
    ActionNavigateMoon = 67,
    ActionNavigateNotOverworld = 68,
    ActionNavigateSun = 69,
    ActionNavigateUseSextant = 70,
    ActionPetCreatureRefused = 71,
    ActionPetNoTamedCreature = 72,
    ActionPickUpDoodadCannotUseItemsPlacedOn = 73,
    ActionPickUpAllItemsNoItems = 74,
    ActionPickUpExcrementNoExcrement = 75,
    ActionPickUpItemNoItem = 76,
    ActionPickUpNoPickUp = 77,
    ActionRefineNoDurability = 78,
    ActionReleaseNoTamedCreature = 79,
    ActionRenameIsland = 80,
    ActionRepairMaxDurabilityTooLow = 81,
    ActionReshape = 82,
    ActionReshapeFailed = 83,
    ActionReshapeNotPossibleBonus = 84,
    ActionReshapeReshaped = 85,
    ActionSacrifice = 86,
    ActionSacrificeAlreadyDoneToday = 87,
    ActionSailToCivilizationNotInsideBoat = 88,
    ActionSailToIsland = 89,
    ActionSailToIslandArrived = 90,
    ActionSailToIslandCannotUseCannotReachEdge = 91,
    ActionSailToIslandCannotUseCannotReachPort = 92,
    ActionSailToIslandCannotUseGhost = 93,
    ActionSailToIslandCannotUseInvalidDestination = 94,
    ActionSailToIslandCannotUseNoDestination = 95,
    ActionSailToIslandCannotUseNotEnoughStamina = 96,
    ActionSailToIslandCannotUseNotEnoughSwimmingSkill = 97,
    ActionSailToIslandCannotUseTravellingIsDisallowedInTheseLands = 98,
    ActionSailToIslandPlayerArriving = 99,
    ActionSailToIslandPlayerDeparting = 100,
    ActionSetCreatureAiAlreadyCommanded = 101,
    ActionSetCreatureAiCannotCommand = 102,
    ActionSetCreatureAiNotEnoughSkill = 103,
    ActionSetCreatureAiNotEnoughTames = 104,
    ActionShipToIslandNoDestination = 105,
    ActionSwapEquipmentCannotUseNoEquipmentToSwap = 106,
    ActionTameCreatureTamed = 107,
    ActionTameNoCreature = 108,
    ActionTestDepthNothingToTest = 109,
    ActionTestDepthWell = 110,
    ActionToggleContainerCannotUseAlreadyClosed = 111,
    ActionToggleContainerCannotUseAlreadyOpen = 112,
    ActionToggleContainerCannotUseNoContainer = 113,
    ActionToggleContainerCannotUseNoContainerToClose = 114,
    ActionToggleContainerCannotUseNoContainerToOpen = 115,
    ActionToggleContainerCannotUseNotAccessible = 116,
    ActionToggleContainerCannotUseUnknownContainer = 117,
    ActionToggleDoorNoDoor = 118,
    ActionToggleHitchAlreadyHitched = 119,
    ActionToggleHitchAlreadyUnhitched = 120,
    ActionToggleHitchNoCreature = 121,
    ActionToggleHitchNoHitch = 122,
    ActionToggleTilledAlreadyPacked = 123,
    ActionToggleTilledAlreadyTilled = 124,
    ActionTradeCannotUseExceedsCarryWeight = 125,
    ActionTradeCannotUseNotEnoughCredit = 126,
    ActionTradeCannotUseNothingToTrade = 127,
    ActionTradeCannotUseTradedTooMuch = 128,
    ActionTradeCreditChange = 129,
    ActionTradeCreditChangeDecrease = 130,
    ActionTradeCreditChangeIncrease = 131,
    ActionTradeDialog1 = 132,
    ActionTradeDialogue1 = 133,
    ActionTradeIndicateUntradable = 134,
    ActionTradeMerchantItems = 135,
    ActionTradeYourItems = 136,
    ActionUncageCannotUncageHere = 137,
    ActionUpgrade = 138,
    ActionUpgradeFailed = 139,
    ActionUpgradeNotMagical = 140,
    ActionUpgradeNotPossible = 141,
    ActionUpgradeUpgraded = 142,
    ActionUseItemWeaponNeeded = 143,
    AddedFuelToFire = 144,
    AddedFuelToTorch = 145,
    AlignmentUpdateCursed = 146,
    AlignmentUpdateEvil = 147,
    AlignmentUpdateGood = 148,
    AlignmentUpdateHighPiety = 149,
    AlignmentUpdateLowPiety = 150,
    AlignmentUpdateNoPiety = 151,
    AlignmentUpdateSunset = 152,
    AlignmentUpdateNightlyMultiplierAdd1 = 153,
    AlignmentUpdateNightlyMultiplierAdd2 = 154,
    AlignmentUpdateNightlyMultiplierAdd3 = 155,
    AlignmentUpdateNightlyMultiplierRemove1 = 156,
    AlignmentUpdateNightlyMultiplierRemove2 = 157,
    AlignmentUpdateNightlyMultiplierRemove3 = 158,
    AllEquipmentUnEquipped = 159,
    AlreadyDesalinatedWaterInStill = 160,
    AlreadyFullyRefined = 161,
    AlreadyFullyRepaired = 162,
    AlreadyPreserved = 163,
    Alter = 164,
    AnotherIsland = 165,
    AnUnknownItem = 166,
    APileOfItems = 167,
    AppearedNotEffectiveForGathering = 168,
    ArmorAppeared = 169,
    ArmorProtectedFromInjuryAgainst = 170,
    AttemptToSoothBurnInWater = 171,
    AttemptToSoothFrostbiteWithFire = 172,
    AttemptToSoothFrostbiteWithFireTooHot = 173,
    AttemptToTill = 174,
    BadlyBurnedLostHealth = 175,
    BarteringSkillsProvided = 176,
    BeenPoisoned = 177,
    BeginSleeping = 178,
    BeginUsingVehicle = 179,
    BleedingHasStopped = 180,
    BleedingProfusely = 181,
    BleedingToDeathLostHealth = 182,
    BookBlank = 183,
    BookContains = 184,
    BookCrumbles = 185,
    BookDiagrams = 186,
    BookEmpty = 187,
    BookNothing = 188,
    BookOpen = 189,
    BookScribbles = 190,
    BothEffectiveIneffective = 191,
    BrokeIntoPieces = 192,
    BrokenOnImpact = 193,
    BrokenWhileFiring = 194,
    Build = 195,
    Burned = 196,
    CannotAddAnyMoreFuel = 197,
    CannotBeCrafted = 198,
    CannotBePerformedOverWater = 199,
    CannotBePlacedHere = 200,
    CannotBePreserved = 201,
    CannotBeRefined = 202,
    CannotBeRefinedReinforcementNeeded = 203,
    CannotBeReinforced = 204,
    CannotBeRepaired = 205,
    CannotBuildHere = 206,
    CannotDigWithHands = 207,
    CannotDoThatHere = 208,
    CannotEquipThatThere = 209,
    CannotFishFor = 210,
    CannotHere = 211,
    CannotInWater = 212,
    CannotLeave = 213,
    CannotNoTreasure = 214,
    CannotPickUpLockedContainer = 215,
    CannotPickUpWhileLit = 216,
    CannotPlaceContainerInItself = 217,
    CannotPlaceHere = 218,
    CannotPlaceThatFromHere = 219,
    CannotPlaceThatHere = 220,
    CannotPlaceThatOverWater = 221,
    CannotPlantHereTilled = 222,
    CannotRepairWhileLit = 223,
    CannotRestHere = 224,
    CannotShipNoItems = 225,
    CannotShipNoPath = 226,
    CannotSleepHere = 227,
    CannotStartFireHere = 228,
    CannotToTellTime = 229,
    CannotUseCommand = 230,
    CannotWhenProtected = 231,
    CannotWhenProtectedDangerousAction = 232,
    CannotWhenProtectedDurability = 233,
    CarryingTooMuchWeight = 234,
    CarvedUpCorpse = 235,
    Carving = 236,
    CastYourLine = 237,
    CaughtFish = 238,
    ChatBanCommand = 239,
    ChatBannedCommand = 240,
    ChatCommandsCommand = 241,
    ChatCommandsCommandCommand = 242,
    ChatPingCommand = 243,
    ChatPlayerMessage = 244,
    ChatPlayersCommand = 245,
    ChatServerMessage = 246,
    ChatUnbanCommand = 247,
    ChatUnknownCommand = 248,
    Chop = 249,
    Chopping = 250,
    ClearedBlood = 251,
    Clockwise = 252,
    CloseToBeingDestroyed = 253,
    CommandAttack = 254,
    CommandDefend = 255,
    CommandFollowClose = 256,
    CommandFollowFar = 257,
    CommandHeel = 258,
    CommandStay = 259,
    Container = 260,
    CopiedMap = 261,
    CorpseOf = 262,//#used via other translations
    CorpseOfNamed = 263,//#used via other translations
    Counterclockwise = 264,
    Craft = 265,
    Crafted = 266,
    Crafts = 267,
    CreatureAngered = 268,
    CreatureAppears = 269,
    CreatureAppeased = 270,
    CreatureExcrement = 271,
    CreatureHappinessHigh = 272,
    CreatureHappinessLow = 273,
    CreatureHappinessLowest = 274,
    CreatureHappinessNormal = 275,
    CreatureIdolAttractedCreature = 276,
    CreatureRefusesToBeTamed = 277,
    CreatureRefusesYou = 278,
    CreatureUntamed = 279,
    CuredYourPoison = 280,
    Cut = 281,
    CutHasHealed = 282,
    CutLostHealth = 283,
    CutWasBandaged = 284,
    DamageAppeared = 285,
    DamagedByPouring = 286,
    DangerousMove = 287,
    DangerousOpen = 288,
    DayQuarter1 = 289,
    DayQuarter2 = 290,
    DayQuarter3 = 291,
    DayQuarter4 = 292,
    DealtNoDamageToYou = 293,
    DeathBy = 294,
    DeathByBleeding = 295,
    DeathByBurning = 296,
    DeathByChallengeWinner = 297,
    DeathByConsumption = 298,
    DeathByCut = 299,
    DeathByDrowning = 300,
    DeathByExhaustion = 301,
    DeathByFistByPlayer = 302,
    DeathByFrostbite = 303,
    DeathByFrostbiteTemperatureShock = 304,
    DeathByMalnutrition = 305,
    DeathByPoison = 306,
    DeathBySteppingOn = 307,
    DeathByTrap = 308,
    DeathByWeaponByPlayer = 309,
    DedicatedTitleAlreadySelected = 310,
    DedicatedTitleMilestoneNotAllowed = 311,
    DeityIntroductionEvil = 312,
    DeityIntroductionGood = 313,
    DeityIntroductionNeutral = 314,
    DeityIntroductionNoUnderstand = 315,
    DestroyedFromUse = 316,
    Dexterity = 317,
    DidNotSeemToBeHurting = 318,
    Dig = 319,
    DigAway = 320,
    Digging = 321,
    Disassemble = 322,
    Disassembling = 323,
    DiscoveredCaveEntrance = 324,
    DiscoveredInTheBottle = 325,
    DiscoveredLavaPassage = 326,
    Dismantle = 327,
    Dismantling = 328,
    DismantlingRequires = 329,
    Dismounted = 330,
    DisplacedPuddles = 331,
    DoNotProduceAnyResources = 332,
    DoodadCauseStatus = 333,
    DoodadGroupTier = 334,
    DrewSurroundings = 335,
    Dripstone = 336,
    Drop = 337,
    DroppedIntoDepths = 338,
    DroppedIntoFire = 339,
    DroppedIntoTheVoid = 340,
    DryadSprouted = 341,
    DueToDehydration = 342,
    DueToStarvation = 343,
    DugTreasureOut = 344,
    DugTreasureOutSurprise = 345,
    DumpContentsOfContainerInInventory = 346,
    DyingOfDehydration = 347,
    EarnedMilestone = 348,
    Effective = 349,
    Enchant = 350,
    EquipmentPreventedStatusEffects = 351,
    ErrorHasOccured = 352,
    ExtinguishedFire = 353,
    ExtinguishedLightSource = 354,
    Exude = 355,
    ExudeNotPossible = 356,
    FailedToAbsorb = 357,
    FailedToAddFuelToTorch = 358,
    FailedToCatchFish = 359,
    FailedToCauseDamage = 360,
    FailedToCauseYouDamage = 361,
    FailedToCopy = 362,
    FailedToDraw = 363,
    FailedToEnchant = 364,
    FailedToExude = 365,
    FailedToIgniteTorch = 366,
    FailedToPickLock = 367,
    FailedToPreserve = 368,
    FailedToRefine = 369,
    FailedToReinforce = 370,
    FailedToRepair = 371,
    FailedToStartFire = 372,
    FailedToTame = 373,
    FailedToTransmogrify = 374,
    FarOffLands = 375,
    FeltBurningPainLostHealth = 376,
    FeltFrostbitePainLostHealth = 377,
    FewMinutes = 378,
    Filled = 379,
    FilledFrom = 380,
    FireAroundYouIsWarm = 381,
    FiredIntoObstacle = 382,
    FireOverflowed = 383,
    FireOverflowedFireElemental = 384,
    FireSource = 385,
    FishingWithNoBait = 386,
    Floating = 387,
    FreshWater = 388,
    FromTheStill = 389,
    Fuel = 390,
    FuelIsRequired = 391,
    Gather = 392,
    GatherDestroy = 393,
    Gathering = 394,
    GhostNoActions = 395,
    GhostOf = 396,
    GoatHasNoMilk = 397,
    GrabAll = 398,
    HackAway = 399,
    HandProtectionPreventedInjury = 400,
    HandsNotEffectiveFor = 401,
    Harvest = 402,
    Harvesting = 403,
    HasBeenHurtByATrap = 404,
    HasDecayed = 405,
    HasHitYouForDamage = 406,
    HasNoEffect = 407,
    HasSetTrapOffNoDamage = 408,
    HasSplit = 409,
    Help = 410,
    HelpGrow = 411,
    Hitch = 412,
    HitchAttempt = 413,
    HitchCreature = 414,
    HitchDisabled = 415,
    HitchInUse = 416,
    HitForDamage = 417,
    HitYouForDamage = 418,
    Hour = 419,
    Hours = 420,
    HurtHandsHittingWithoutWeapons = 421,
    HurtHandsWithNoTool = 422,
    Ignite = 423,
    IgnitedTorch = 424,
    Ineffective = 425,
    InjuredFromTrap = 426,
    InNeedOfRepair = 427,
    InteractingWithHasInjuredYouForDamage = 428,
    InvalidContainer = 429,
    Inventory = 430,
    IsInTheWayOfPickingUp = 431,
    It = 432,
    ItemFromWater = 433,
    JoinedAServer = 434,
    Jump = 435,
    Killed = 436,
    KnowledgeHasIncreased = 437,
    LastPlaceYouLeftOff = 438,
    LearnedHowToCreate = 439,
    LikelyFailures = 440,
    Limited = 441,
    Lockpick = 442,
    MapCompletedNotOfThisArea = 443,
    MapDestroyed = 444,
    MapNearlyDestroyed = 445,
    MapNotOfThisArea = 446,
    MaterialsDestroyed = 447,
    MessageOfTheDay = 448,
    Metabolism = 449,
    MetabolismSlowed = 450,
    Milk = 451,
    Mine = 452,
    Mining = 453,
    MissedWith = 454,
    MissedYouWith = 455,
    MovedItem = 456,
    MovedItemFailed = 457,
    PlacedItem = 458,
    PlacedItemFailed = 459,
    MoveOverTrapButDoNotSetOff = 460,
    MultiplayerGamePaused = 461,
    MultiplayerGameResumed = 462,
    MultiplayerPlayerConnected = 463,
    MultiplayerPlayerDied = 464,
    MultiplayerPlayerDisconnected = 465,
    MultiplayerPlayerJoined = 466,
    MustBeEquippedToIgnite = 467,
    Mysteriously = 468,
    NearlyBurnedEquipmentProtectedYou = 469,
    NeedToStartTravelsOutside = 470,
    NeedWaterForBoat = 471,
    Negatively = 472,
    NightQuarter1 = 473,
    NightQuarter2 = 474,
    NightQuarter3 = 475,
    NightQuarter4 = 476,
    No = 477,
    NoAmmunitionForThatWeapon = 478,
    NoFireToStokeWith = 479,
    NoFishAtLocation = 480,
    NoGroundWater = 481,
    NoInkToDrawMap = 482,
    NoKindlingOrFuelItemsToStartFire = 483,
    NoKindlingToStartFire = 484,
    NoLongerFeelPainOfBeingBurned = 485,
    NoLongerFeelPainOfBeingFrostbitten = 486,
    NoLongerHostile = 487,
    NoMoreRoomInContainer = 488,
    NoPaperToDrawMap = 489,
    NoRequiredItemToFireWeapon = 490,
    NoReturnWithoutCompletingChallenges = 491,
    NoRoomForImprovement = 492,
    NoRoomForVehicle = 493,
    NoRoomToDrop = 494,
    NoRoomToSummon = 495,
    NotEnoughPurifiedWaterYet = 496,
    NotEnoughTreasureToReturn = 497,
    NotFacingCreatureToOfferThisTo = 498,
    NotFacingLockedObject = 499,
    NotFacingOtherToHeal = 500,
    NotFacingValidItem = 501,
    NothingHereToButcher = 502,
    NothingHereToFill = 503,
    NothingHereToGrasp = 504,
    NothingTo = 505,
    NothingToGetFromThis = 506,
    NothingToHarvestFromThisGather = 507,
    NothingToSmother = 508,
    NothingUsefulToHarvestYet = 509,
    NoTinderToStartFire = 510,
    NotSuitableToPlant = 511,
    NoWaterInStill = 512,
    NPCMerchantNewInventoryDialogue1 = 513,
    NPCMerchantNewInventoryDialogue2 = 514,
    NPCMerchantNewInventoryDialogue3 = 515,
    NPCMerchantNewInventoryDialogue4 = 516,
    NPCMerchantStartingDialogue1 = 517,
    NPCMerchantStartingDialogue2 = 518,
    NPCMerchantStartingDialogue3 = 519,
    NPCMerchantStartingDialogue4 = 520,
    NPCMerchantWelcomeCredit = 521,
    NPCShipperShipToIsland = 522,
    NPCShipperStartingDialogue1 = 523,
    NPCShipperStartingDialogue2 = 524,
    NPCShipperStartingDialogue3 = 525,
    NPCShipperStartingDialogue4 = 526,
    NPCWelcome = 527,
    ObjectIsLocked = 528,
    ObjectIsLockedAttemptToBreakIt = 529,
    OfferAberrantFail = 530,
    OfferAberrantFailButTamed = 531,
    Open = 532,
    OpenClose = 533,
    OverEatingLostStamina = 534,
    OverHydratingLostStamina = 535,
    Pack = 536,
    PaperTurnedToMush = 537,
    ParryTheBlow = 538,
    Pet = 539,
    PetCreature = 540,
    PickAway = 541,
    PickUp = 542,
    PickUpExcrement = 543,
    PickUpTheItem = 544,
    Place = 545,
    PlacedOnGround = 546,
    Plant = 547,
    PlantedInGround = 548,
    PlantGatheredPlant = 549,
    PlantGatheringWillDestroy = 550,
    PlantHasResourcesToGather = 551,
    PlantHasResourcesToHarvest = 552,
    PlantHighlyFertile = 553,
    Planting = 554,
    PlantIsBare = 555,
    PlantIsFertile = 556,
    PlantIsInStage = 557,
    PlantIsNotFertile = 558,
    PlantNotReadyToHarvest = 559,
    PlantReadyToGather = 560,
    PlantReadyToGatherNotMaximal = 561,
    PlantReadyToHarvest = 562,
    PlantReadyToHarvestNotMaximal = 563,
    Player = 564,
    PlayerHas = 565,
    PlayerHasCompletedChallengeRequirement = 566,
    PlayerHasWonChallenge = 567,
    Poisoned = 568,
    PoisonedLostHealth = 569,
    PoisonWorkedItsCourse = 570,
    Positively = 571,
    PouredOut = 572,
    PouredOutOnYourself = 573,
    PouredWaterIntoStill = 574,
    PourHarmedPlant = 575,
    PourHealedPlant = 576,
    PourHealedPlantFully = 577,
    PourHealedPlantPartially = 578,
    PourIncreasedFertility = 579,
    Pouring = 580,
    PourOverWatering = 581,
    Prepare = 582,
    Prepared = 583,
    Preserve = 584,
    PreservedFood = 585,
    PurifiedWaterInStill = 586,
    RandomEventsFire = 587,
    ReduceLength = 588,
    Refine = 589,
    RefusedToBeTamed = 590,
    Reinforce = 591,
    Repair = 592,
    RequiredForDisassembly = 593,
    RequiresFireToBeLit = 594,
    RequiresYouFacingFireSource = 595,
    RequiresYouToBeAround = 596,
    Resistant = 597,
    Rest = 598,
    Rested = 599,
    Resting = 600,
    RestingOnGroundNotEffective = 601,
    RestInterrupted = 602,
    RestInterruptedDamage = 603,
    RestInterruptedDying = 604,
    RestInterruptedLoudNoise = 605,
    RestInterruptedPain = 606,
    RestInterruptedStirring = 607,
    RestInterruptedWaterPoured = 608,
    RestLongTime = 609,
    RestModerateTime = 610,
    RestOnBoat = 611,
    RestShortTime = 612,
    RestTime = 613,
    ReturnedToCivilization = 614,
    ReturningToCivilizationSetOffAgain = 615,
    ReturnsToLife = 616,
    Reverse = 617,
    Sailing = 618,
    ScrollMaster = 619,
    ScrollProvidedNoUsefulInsight = 620,
    Seawater = 621,
    SeemsToHaveDrawnEnergy = 622,
    SetTrapOffButNoDamage = 623,
    SetUp = 624,
    ShadowInTheWater = 625,
    Skill = 626,
    SkillHasRaised = 627,
    Skills = 628,
    Sleep = 629,
    Sleeping = 630,
    SleepOnBoat = 631,
    Slept = 632,
    SlitherSuckerConstricts = 633,
    SlitherSuckerJumpedOnHead = 634,
    SolarStill = 635,
    SomethingInTheWayOf = 636,
    SomethingInTheWayOfButcherFirst = 637,
    SomethingInTheWayOfFire = 638,
    SomethingInTheWayOfFishing = 639,
    SomethingInTheWayOfPerforming = 640,
    SomethingInTheWayOfPlacing = 641,
    SomethingInTheWayOfReleasing = 642,
    SomethingInTheWayOfSummoning = 643,
    SomethingInWayOfClosingDoor = 644,
    SoothedTheirBurnInjuries = 645,
    SoothedYourBurnInjuries = 646,
    Sort = 647,
    SortedByBestCraftingRequirements = 648,
    SortedByCategory = 649,
    SortedByCraftableOnly = 650,
    SortedByDecay = 651,
    SortedByDurability = 652,
    SortedByGroup = 653,
    SortedByMagical = 654,
    SortedByName = 655,
    SortedByQuality = 656,
    SortedByRecent = 657,
    SortedBySkill = 658,
    SortedByUnlockedTime = 659,
    SortedByWeight = 660,
    SortedByWorth = 661,
    StaminaIsFull = 662,
    StartedFire = 663,
    StartTravelInWater = 664,
    StarvingToDeath = 665,
    StatAmount = 666,
    StatGained = 667,
    StatIncreasing = 668,
    StatLost = 669,
    StatQuenched = 670,
    StatRegained = 671,
    StatSated = 672,
    SteppingOn = 673,
    Still = 674,
    StillHasNoWaterToPurify = 675,
    StirredUpClawWorm = 676,
    StirredUpCreature = 677,
    StoppedYourBleeding = 678,
    StopUsingVehicle = 679,
    Strength = 680,
    SummonedGuardiansByDiggingTreasure = 681,
    SummonedGuardiansByLockpicking = 682,
    SummonVoidDwellerItem = 683,
    SummonVoidDwellerRinging = 684,
    SummonVoidDwellerShiver = 685,
    SunNotBrightEnoughToStartFire = 686,
    SwampWater = 687,
    Swimming = 688,
    TakenFromGroundBecomeTamed = 689,
    TeleportBlocked = 690,
    Teleported = 691,
    ThanksBuying = 692,
    ThanksSelling = 693,
    TheirFist = 694,
    ThePlant = 695,
    ThereIsNoContainerOnTheStill = 696,
    ThereIsNoSunToStartFire = 697,
    ThisCannotBeMilked = 698,
    Throw = 699,
    ThrownIntoDepths = 700,
    ThrownIntoObstacle = 701,
    ThrownIntoVoid = 702,
    Tier = 703,
    TierGroup = 704,
    Till = 705,
    Tilling = 706,
    TimeIs = 707,
    TimeIsDawn = 708,
    TimeIsDaytime = 709,
    TimeIsDusk = 710,
    TimeIsNighttime = 711,
    TimeIsSunrise = 712,
    TimeIsSunset = 713,
    ToFight = 714,
    TooDamaged = 715,
    TooExhaustedToJump = 716,
    Touching = 717,
    TrampledFire = 718,
    TrampledFireFail = 719,
    TrampledFirePartial = 720,
    TrampledIntoGround = 721,
    TrampleIntoGround = 722,
    Trampling = 723,
    TransmogrificationNotPossible = 724,
    Transmogrified = 725,
    Transmogrify = 726,
    TrapMissed = 727,
    TrapStoppedYou = 728,
    Traveling = 729,
    TreasureIsBlocked = 730,
    UiActionCannotUseInaccessibleItem = 731,
    UiActionCannotUseRequiresCreature = 732,
    UiActionCannotUseRequiresDoodad = 733,
    UiActionCannotUseRequiresItem = 734,
    UiActionCannotUseRequiresNPC = 735,
    UiActionCannotUseRequiresVehicle = 736,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue1 = 737,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue2 = 738,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue1 = 739,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue2 = 740,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue1 = 741,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue2 = 742,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue3 = 743,
    Unhitch = 744,
    UnhitchCreature = 745,
    Unknown = 746,
    Unlimited = 747,
    UnlockedChest = 748,
    UnpurifiedFreshWater = 749,
    UnpurifiedWaterInStill = 750,
    Use = 751,
    UsingBareHands = 752,
    VehicleDefense = 753,
    Vulnerable = 754,
    Water = 755,
    WaterGathering = 756,
    WaterPutOutFire = 757,
    WellIsDry = 758,
    WellIsFull = 759,
    WildGoatRefusedToBeMilked = 760,
    WillNotTrade = 761,
    WorkingYourselfIntoExhaustion = 762,
    WorkingYourselfIntoExhaustionAndDrowning = 763,
    WorldContainer = 764,
    You = 765,
    YouAbsorb = 766,
    YouApplied = 767,
    YouAreAlready = 768,
    YouAte = 769,
    YouBeginResting = 770,
    YouCannotDoThatYet = 771,
    YouCanNowCombatTheTides = 772,
    YouCrafted = 773,
    YouDoNotFindTreasureYet = 774,
    YouDrank = 775,
    YouDropTheTorch = 776,
    YouEnchant = 777,
    YouEquip = 778,
    YouExude = 779,
    YouExudeSome = 780,
    YouExudeSomeReasonConflicting = 781,
    YouExudeSomeReasonMax = 782,
    YouExudeSomeReasonProperties = 783,
    YouFailedTo = 784,
    YouFailedToExtinguishedFireFully = 785,
    YouFailedToHeal = 786,
    YouFailedToHealOther = 787,
    YouFire = 788,
    YouGathered = 789,
    YouGatheredAndDropped = 790,
    YouHarvested = 791,
    YouHarvestedAndDropped = 792,
    YouHave = 793,
    YouHaveAlreadyLearned = 794,
    YouHaveBeenCut = 795,
    YouHaveCaged = 796,
    YouHaveCommanded = 797,
    YouHaveDied = 798,
    YouHaveHealedOther = 799,
    YouHaveKilled = 800,
    YouHaveReleased = 801,
    YouHaveSummoned = 802,
    YouHaveTamed = 803,
    YouHaveUncaged = 804,
    YouNoticeBarren = 805,
    YouNoticeBecomeEnraged = 806,
    YouNoticeDying = 807,
    YouNoticeFertilityDecreasing = 808,
    YouNoticeFertilityIncreasing = 809,
    YouNoticeGrowing = 810,
    YouNoticeLavaCooling = 811,
    YouNoticeLavaHardening = 812,
    YouNoticePerish = 813,
    YouNoticePlantDamage = 814,
    YouNoticePlantRegenerated = 815,
    YouNoticeRegrowing = 816,
    YouNoticeStumbleInjureItself = 817,
    YouNoticeTakeFromGround = 818,
    YouNoticeWoundsClosing = 819,
    YouNoticeZombieHorde = 820,
    YouOfferedToCreature = 821,
    YouOfferedToCreatureRejects = 822,
    YouOpen = 823,
    YouPacked = 824,
    YouPickedUp = 825,
    YouRefine = 826,
    YouReinforce = 827,
    YouRepair = 828,
    YouReturnFromCivilizationWith = 829,
    YourFist = 830,
    YourHands = 831,
    YourInventory = 832,
    YourIsland = 833,
    YourRubbingNoEffect = 834,
    YouRub = 835,
    YouSee = 836,
    YouSeeALivingMushroomSpore = 837,
    YouSeeASkeletonCollapse = 838,
    YouSeeASlimeCombine = 839,
    YouSeeAZombieBleeding = 840,
    YouSeeCoolDown = 841,
    YouSeeDrop = 842,
    YouSeeEngulfFire = 843,
    YouSeeFireSpread = 844,
    YouSeeHelpingPlant = 845,
    YouSeeLay = 846,
    YouSeeLayingTrap = 847,
    YouSeeSpewLava = 848,
    YouSeeSpitAcid = 849,
    YouSeeSpringForth = 850,
    YouSeeSummon = 851,
    YouSeeSwampFlood = 852,
    YouSeeTrampling = 853,
    YouSetTheTrapOff = 854,
    YouStokeTheCreature = 855,
    YouSwapMainHandAndOffHand = 856,
    YouThrew = 857,
    YouTilled = 858,
    YouUnequip = 859,
    YouUsed = 860,
    YouWhileTraveling = 861
}
export default Message;
