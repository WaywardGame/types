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
    ActionContextAllowedFireToSpread = 21,
    ActionContextDamagedCreatureWith = 22,
    ActionContextDamagedHuman = 23,
    ActionContextDamagedHumanWith = 24,
    ActionContextDamagedPet = 25,
    ActionContextGainedSkill = 26,
    ActionContextKilledCreature = 27,
    ActionContextKilledPlayer = 28,
    ActionContextKilledPlayerWithPet = 29,
    ActionContextTrampledFire = 30,
    ActionCraft = 31,
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
    ActionDisassembleNoItemsSalvaged = 42,
    ActionDisassembleSalvaged = 43,
    ActionDismantleSeparated = 44,
    ActionDisplayItemDisplayed = 45,
    ActionDisplayItemEmptyContainerBeforehand = 46,
    ActionDisplayItemReturned = 47,
    ActionDrinkInFrontNoDrink = 48,
    ActionDropCannotUseBlocked = 49,
    ActionDropCannotUseItemProtected = 50,
    ActionDropCannotUseItemProtectedDangerous = 51,
    ActionDropCannotUseNoItems = 52,
    ActionDumpItemsCannotUseBlocked = 53,
    ActionDumpItemsCannotUseNothingToDumpOut = 54,
    ActionDumpItemsCannotUseWrongDirection = 55,
    ActionDumpItemsDumpedItems = 56,
    ActionEnhance = 57,
    ActionEnhanceEnhanced = 58,
    ActionEnhanceFailed = 59,
    ActionEnhanceNotPossible = 60,
    ActionEquipWillBreakOnDamage = 61,
    ActionFishingNothingBiting = 62,
    ActionFishingSlipped = 63,
    ActionFishingTooShallow = 64,
    ActionJumpCannotJump = 65,
    ActionMeleeNothingToAttack = 66,
    ActionMoveItemCannotUseContainerTooFarAway = 67,
    ActionMoveItemCannotUseInvalidContainer = 68,
    ActionMoveItemCannotUseItemFilteredOut = 69,
    ActionMoveItemCannotUseItemQualityOrTypeIncorrect = 70,
    ActionMoveItemCannotUseItemTooFarAway = 71,
    ActionMoveItemCannotUseMovingFromMultipleContainers = 72,
    ActionMoveItemCannotUseNoContainerToMoveTo = 73,
    ActionMoveItemCannotUseNoItems = 74,
    ActionMoveItemCannotUseNoRoom = 75,
    ActionMoveItemCannotUseProtected = 76,
    ActionMoveToSwimOffEdgeCannotCombatTides = 77,
    ActionNavigateMoon = 78,
    ActionNavigateNotOverworld = 79,
    ActionNavigateSun = 80,
    ActionNavigateUseSextant = 81,
    ActionPetCreatureRefused = 82,
    ActionPetNoTamedCreature = 83,
    ActionPickUpAllItemsNoItems = 84,
    ActionPickUpDoodadCannotUseItemsPlacedOn = 85,
    ActionPickUpExcrementNoExcrement = 86,
    ActionPickUpItemNoItem = 87,
    ActionPickUpNoPickUp = 88,
    ActionRefineNoDurability = 89,
    ActionReleaseNoTamedCreature = 90,
    ActionRenameIsland = 91,
    ActionRepairMaxDurabilityTooLow = 92,
    ActionReshape = 93,
    ActionReshapeFailed = 94,
    ActionReshapeNotPossibleBonus = 95,
    ActionReshapeReshaped = 96,
    ActionSacrifice = 97,
    ActionSacrificeAlreadyDoneToday = 98,
    ActionSailToCivilizationNotInsideBoat = 99,
    ActionSailToIsland = 100,
    ActionSailToIslandArrived = 101,
    ActionSailToIslandCannotUseCannotReachEdge = 102,
    ActionSailToIslandCannotUseCannotReachPort = 103,
    ActionSailToIslandCannotUseGhost = 104,
    ActionSailToIslandCannotUseInvalidDestination = 105,
    ActionSailToIslandCannotUseNoDestination = 106,
    ActionSailToIslandCannotUseNotEnoughStamina = 107,
    ActionSailToIslandCannotUseNotEnoughSwimmingSkill = 108,
    ActionSailToIslandCannotUseTravellingIsDisallowedInTheseLands = 109,
    ActionSailToIslandPlayerArriving = 110,
    ActionSailToIslandPlayerDeparting = 111,
    ActionSetCreatureAiAlreadyCommanded = 112,
    ActionSetCreatureAiCannotCommand = 113,
    ActionSetCreatureAiNotEnoughSkill = 114,
    ActionSetCreatureAiNotEnoughTames = 115,
    ActionShipToIslandNoDestination = 116,
    ActionSwapEquipmentCannotUseNoEquipmentToSwap = 117,
    ActionTameCreatureTamed = 118,
    ActionTameNoCreature = 119,
    ActionTestDepthNothingToTest = 120,
    ActionTestDepthWell = 121,
    ActionToggleContainerCannotUseAlreadyClosed = 122,
    ActionToggleContainerCannotUseAlreadyOpen = 123,
    ActionToggleContainerCannotUseNoContainer = 124,
    ActionToggleContainerCannotUseNoContainerToClose = 125,
    ActionToggleContainerCannotUseNoContainerToOpen = 126,
    ActionToggleContainerCannotUseNotAccessible = 127,
    ActionToggleContainerCannotUseUnknownContainer = 128,
    ActionToggleDoorNoDoor = 129,
    ActionToggleHitchAlreadyHitched = 130,
    ActionToggleHitchAlreadyUnhitched = 131,
    ActionToggleHitchNoCreature = 132,
    ActionToggleHitchNoHitch = 133,
    ActionToggleTilledAlreadyPacked = 134,
    ActionToggleTilledAlreadyTilled = 135,
    ActionTradeCannotUseExceedsCarryWeight = 136,
    ActionTradeCannotUseNotEnoughCredit = 137,
    ActionTradeCannotUseNothingToTrade = 138,
    ActionTradeCannotUseTradedTooMuch = 139,
    ActionTradeCreditChange = 140,
    ActionTradeCreditChangeDecrease = 141,
    ActionTradeCreditChangeIncrease = 142,
    ActionTradeDialog1 = 143,
    ActionTradeDialogue1 = 144,
    ActionTradeIndicateUntradable = 145,
    ActionTradeMerchantItems = 146,
    ActionTradeYourItems = 147,
    ActionUncageCannotUncageHere = 148,
    ActionUpgrade = 149,
    ActionUpgradeFailed = 150,
    ActionUpgradeNotMagical = 151,
    ActionUpgradeNotPossible = 152,
    ActionUpgradeUpgraded = 153,
    ActionUseItemWeaponNeeded = 154,
    AddedFuelToFire = 155,
    AddedFuelToTorch = 156,
    AlignmentUpdateCursed = 157,
    AlignmentUpdateEvil = 158,
    AlignmentUpdateGood = 159,
    AlignmentUpdateHighPiety = 160,
    AlignmentUpdateLowPiety = 161,
    AlignmentUpdateNoPiety = 162,
    AlignmentUpdateSunset = 163,
    AllEquipmentUnEquipped = 164,
    AlreadyDesalinatedWaterInStill = 165,
    AlreadyFullyRefined = 166,
    AlreadyFullyRepaired = 167,
    AlreadyPreserved = 168,
    Alter = 169,
    AnotherIsland = 170,
    AnUnknownItem = 171,
    APileOfItems = 172,
    AppearedNotEffectiveForGathering = 173,
    ArmorAppeared = 174,
    ArmorProtectedFromInjuryAgainst = 175,
    AttemptToSoothBurnInWater = 176,
    AttemptToSoothFrostbiteWithFire = 177,
    AttemptToSoothFrostbiteWithFireTooHot = 178,
    AttemptToTill = 179,
    BadlyBurnedLostHealth = 180,
    BarteringSkillsProvided = 181,
    BeenPoisoned = 182,
    BeginSleeping = 183,
    BeginUsingVehicle = 184,
    BleedingHasStopped = 185,
    BleedingProfusely = 186,
    BleedingToDeathLostHealth = 187,
    BookBlank = 188,
    BookContains = 189,
    BookCrumbles = 190,
    BookDiagrams = 191,
    BookEmpty = 192,
    BookNothing = 193,
    BookOpen = 194,
    BookScribbles = 195,
    BothEffectiveIneffective = 196,
    BrokeIntoPieces = 197,
    BrokenOnImpact = 198,
    BrokenWhileFiring = 199,
    Build = 200,
    Burned = 201,
    CannotAddAnyMoreFuel = 202,
    CannotBeCrafted = 203,
    CannotBePerformedOverWater = 204,
    CannotBePlacedHere = 205,
    CannotBePreserved = 206,
    CannotBeRefined = 207,
    CannotBeRefinedReinforcementNeeded = 208,
    CannotBeReinforced = 209,
    CannotBeRepaired = 210,
    CannotBuildHere = 211,
    CannotDigWithHands = 212,
    CannotDoThatHere = 213,
    CannotEquipThatThere = 214,
    CannotFishFor = 215,
    CannotHere = 216,
    CannotInWater = 217,
    CannotLeave = 218,
    CannotNoTreasure = 219,
    CannotPickUpLockedContainer = 220,
    CannotPickUpWhileLit = 221,
    CannotPlaceContainerInItself = 222,
    CannotPlaceHere = 223,
    CannotPlaceThatFromHere = 224,
    CannotPlaceThatHere = 225,
    CannotPlaceThatOverWater = 226,
    CannotPlantHereTilled = 227,
    CannotRepairWhileLit = 228,
    CannotRestHere = 229,
    CannotShipNoItems = 230,
    CannotShipNoPath = 231,
    CannotSleepHere = 232,
    CannotStartFireHere = 233,
    CannotToTellTime = 234,
    CannotUseCommand = 235,
    CannotWhenProtected = 236,
    CannotWhenProtectedDangerousAction = 237,
    CannotWhenProtectedDurability = 238,
    CarryingTooMuchWeight = 239,
    CarvedUpCorpse = 240,
    Carving = 241,
    CastYourLine = 242,
    CaughtFish = 243,
    ChatBanCommand = 244,
    ChatBannedCommand = 245,
    ChatCommandsCommand = 246,
    ChatCommandsCommandCommand = 247,
    ChatPingCommand = 248,
    ChatPlayerMessage = 249,
    ChatPlayersCommand = 250,
    ChatServerMessage = 251,
    ChatUnbanCommand = 252,
    ChatUnknownCommand = 253,
    Chop = 254,
    Chopping = 255,
    ClearedBlood = 256,
    Clockwise = 257,
    CloseToBeingDestroyed = 258,
    CommandAttack = 259,
    CommandDefend = 260,
    CommandFollowClose = 261,
    CommandFollowFar = 262,
    CommandHeel = 263,
    CommandStay = 264,
    Container = 265,
    CopiedMap = 266,
    CorpseOf = 267,//#used via other translations
    CorpseOfNamed = 268,//#used via other translations
    Counterclockwise = 269,
    Craft = 270,
    Crafted = 271,
    Crafts = 272,
    CreatureAngered = 273,
    CreatureAppears = 274,
    CreatureAppeased = 275,
    CreatureExcrement = 276,
    CreatureHappinessHigh = 277,
    CreatureHappinessLow = 278,
    CreatureHappinessLowest = 279,
    CreatureHappinessNormal = 280,
    CreatureIdolAttractedCreature = 281,
    CreatureRefusesToBeTamed = 282,
    CreatureRefusesYou = 283,
    CreatureUntamed = 284,
    CuredYourPoison = 285,
    Cut = 286,
    CutHasHealed = 287,
    CutLostHealth = 288,
    CutWasBandaged = 289,
    DamageAppeared = 290,
    DamagedByPouring = 291,
    DangerousMove = 292,
    DangerousOpen = 293,
    DayQuarter1 = 294,
    DayQuarter2 = 295,
    DayQuarter3 = 296,
    DayQuarter4 = 297,
    DealtNoDamageToYou = 298,
    DeathBy = 299,
    DeathByBleeding = 300,
    DeathByBurning = 301,
    DeathByChallengeWinner = 302,
    DeathByConsumption = 303,
    DeathByCut = 304,
    DeathByDrowning = 305,
    DeathByExhaustion = 306,
    DeathByFistByPlayer = 307,
    DeathByFrostbite = 308,
    DeathByFrostbiteTemperatureShock = 309,
    DeathByMalnutrition = 310,
    DeathByPoison = 311,
    DeathBySteppingOn = 312,
    DeathByTrap = 313,
    DeathByWeaponByPlayer = 314,
    DedicatedTitleAlreadySelected = 315,
    DedicatedTitleMilestoneNotAllowed = 316,
    DeityIntroductionEvil = 317,
    DeityIntroductionGood = 318,
    DeityIntroductionNeutral = 319,
    DeityIntroductionNoUnderstand = 320,
    DestroyedFromUse = 321,
    Dexterity = 322,
    DidNotSeemToBeHurting = 323,
    Dig = 324,
    DigAway = 325,
    Digging = 326,
    Disassemble = 327,
    Disassembling = 328,
    DiscoveredCaveEntrance = 329,
    DiscoveredInTheBottle = 330,
    DiscoveredLavaPassage = 331,
    Dismantle = 332,
    Dismantling = 333,
    DismantlingRequires = 334,
    Dismounted = 335,
    DisplacedPuddles = 336,
    DoNotProduceAnyResources = 337,
    DoodadCauseStatus = 338,
    DoodadGroupTier = 339,
    DrewSurroundings = 340,
    Dripstone = 341,
    Drop = 342,
    DroppedIntoDepths = 343,
    DroppedIntoFire = 344,
    DroppedIntoTheVoid = 345,
    DryadSprouted = 346,
    DueToDehydration = 347,
    DueToStarvation = 348,
    DugTreasureOut = 349,
    DugTreasureOutSurprise = 350,
    DumpContentsOfContainerInInventory = 351,
    DyingOfDehydration = 352,
    EarnedMilestone = 353,
    Effective = 354,
    Enchant = 355,
    EquipmentPreventedStatusEffects = 356,
    ErrorHasOccured = 357,
    ExtinguishedFire = 358,
    ExtinguishedLightSource = 359,
    Exude = 360,
    ExudeNotPossible = 361,
    FailedToAbsorb = 362,
    FailedToAddFuelToTorch = 363,
    FailedToCatchFish = 364,
    FailedToCauseDamage = 365,
    FailedToCauseYouDamage = 366,
    FailedToCopy = 367,
    FailedToDraw = 368,
    FailedToEnchant = 369,
    FailedToExude = 370,
    FailedToIgniteTorch = 371,
    FailedToPickLock = 372,
    FailedToPreserve = 373,
    FailedToRefine = 374,
    FailedToReinforce = 375,
    FailedToRepair = 376,
    FailedToStartFire = 377,
    FailedToTame = 378,
    FailedToTransmogrify = 379,
    FarOffLands = 380,
    FeltBurningPainLostHealth = 381,
    FeltFrostbitePainLostHealth = 382,
    FewMinutes = 383,
    Filled = 384,
    FilledFrom = 385,
    FireAroundYouIsWarm = 386,
    FiredIntoObstacle = 387,
    FireOverflowed = 388,
    FireOverflowedFireElemental = 389,
    FireSource = 390,
    FishingWithNoBait = 391,
    Floating = 392,
    FreshWater = 393,
    FromTheStill = 394,
    Fuel = 395,
    FuelIsRequired = 396,
    Gather = 397,
    GatherDestroy = 398,
    Gathering = 399,
    GhostNoActions = 400,
    GhostOf = 401,
    GoatHasNoMilk = 402,
    GrabAll = 403,
    HackAway = 404,
    HandProtectionPreventedInjury = 405,
    HandsNotEffectiveFor = 406,
    Harvest = 407,
    Harvesting = 408,
    HasBeenHurtByATrap = 409,
    HasDecayed = 410,
    HasHitYouForDamage = 411,
    HasNoEffect = 412,
    HasSetTrapOffNoDamage = 413,
    HasSplit = 414,
    Help = 415,
    HelpGrow = 416,
    Hitch = 417,
    HitchAttempt = 418,
    HitchCreature = 419,
    HitchDisabled = 420,
    HitchInUse = 421,
    HitForDamage = 422,
    HitYouForDamage = 423,
    Hour = 424,
    Hours = 425,
    HurtHandsHittingWithoutWeapons = 426,
    HurtHandsWithNoTool = 427,
    Ignite = 428,
    IgnitedTorch = 429,
    Ineffective = 430,
    InjuredFromTrap = 431,
    InNeedOfRepair = 432,
    InteractingWithHasInjuredYouForDamage = 433,
    InvalidContainer = 434,
    Inventory = 435,
    IsInTheWayOfPickingUp = 436,
    It = 437,
    ItemFromWater = 438,
    JoinedAServer = 439,
    Jump = 440,
    Killed = 441,
    KnowledgeHasIncreased = 442,
    LastPlaceYouLeftOff = 443,
    LearnedHowToCreate = 444,
    LikelyFailures = 445,
    Limited = 446,
    Lockpick = 447,
    MapCompletedNotOfThisArea = 448,
    MapDestroyed = 449,
    MapNearlyDestroyed = 450,
    MapNotOfThisArea = 451,
    MaterialsDestroyed = 452,
    MessageOfTheDay = 453,
    Metabolism = 454,
    MetabolismSlowed = 455,
    Milk = 456,
    Mine = 457,
    Mining = 458,
    MissedWith = 459,
    MissedYouWith = 460,
    MovedItem = 461,
    MovedItemFailed = 462,
    MoveOverTrapButDoNotSetOff = 463,
    MultiplayerGamePaused = 464,
    MultiplayerGameResumed = 465,
    MultiplayerPlayerConnected = 466,
    MultiplayerPlayerDied = 467,
    MultiplayerPlayerDisconnected = 468,
    MultiplayerPlayerJoined = 469,
    MustBeEquippedToIgnite = 470,
    Mysteriously = 471,
    NearlyBurnedEquipmentProtectedYou = 472,
    NeedToStartTravelsOutside = 473,
    NeedWaterForBoat = 474,
    Negatively = 475,
    NightQuarter1 = 476,
    NightQuarter2 = 477,
    NightQuarter3 = 478,
    NightQuarter4 = 479,
    No = 480,
    NoAmmunitionForThatWeapon = 481,
    NoFireToStokeWith = 482,
    NoFishAtLocation = 483,
    NoGroundWater = 484,
    NoInkToDrawMap = 485,
    NoKindlingOrFuelItemsToStartFire = 486,
    NoKindlingToStartFire = 487,
    NoLongerFeelPainOfBeingBurned = 488,
    NoLongerFeelPainOfBeingFrostbitten = 489,
    NoLongerHostile = 490,
    NoMoreRoomInContainer = 491,
    NoPaperToDrawMap = 492,
    NoRequiredItemToFireWeapon = 493,
    NoReturnWithoutCompletingChallenges = 494,
    NoRoomForImprovement = 495,
    NoRoomForVehicle = 496,
    NoRoomToDrop = 497,
    NoRoomToSummon = 498,
    NotEnoughPurifiedWaterYet = 499,
    NotEnoughTreasureToReturn = 500,
    NotFacingCreatureToOfferThisTo = 501,
    NotFacingLockedObject = 502,
    NotFacingOtherToHeal = 503,
    NotFacingValidItem = 504,
    NothingHereToButcher = 505,
    NothingHereToFill = 506,
    NothingHereToGrasp = 507,
    NothingTo = 508,
    NothingToGetFromThis = 509,
    NothingToHarvestFromThisGather = 510,
    NothingToSmother = 511,
    NothingUsefulToHarvestYet = 512,
    NoTinderToStartFire = 513,
    NotSuitableToPlant = 514,
    NoWaterInStill = 515,
    NPCMerchantNewInventoryDialogue1 = 516,
    NPCMerchantNewInventoryDialogue2 = 517,
    NPCMerchantNewInventoryDialogue3 = 518,
    NPCMerchantNewInventoryDialogue4 = 519,
    NPCMerchantStartingDialogue1 = 520,
    NPCMerchantStartingDialogue2 = 521,
    NPCMerchantStartingDialogue3 = 522,
    NPCMerchantStartingDialogue4 = 523,
    NPCMerchantWelcomeCredit = 524,
    NPCShipperShipToIsland = 525,
    NPCShipperStartingDialogue1 = 526,
    NPCShipperStartingDialogue2 = 527,
    NPCShipperStartingDialogue3 = 528,
    NPCShipperStartingDialogue4 = 529,
    NPCWelcome = 530,
    ObjectIsLocked = 531,
    ObjectIsLockedAttemptToBreakIt = 532,
    OfferAberrantFail = 533,
    OfferAberrantFailButTamed = 534,
    Open = 535,
    OpenClose = 536,
    OverEatingLostStamina = 537,
    OverHydratingLostStamina = 538,
    Pack = 539,
    PaperTurnedToMush = 540,
    ParryTheBlow = 541,
    Pet = 542,
    PetCreature = 543,
    PickAway = 544,
    PickUp = 545,
    PickUpExcrement = 546,
    PickUpTheItem = 547,
    Place = 548,
    PlacedItem = 549,
    PlacedItemFailed = 550,
    PlacedOnGround = 551,
    Plant = 552,
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
    Player = 569,
    PlayerHas = 570,
    PlayerHasCompletedChallengeRequirement = 571,
    PlayerHasWonChallenge = 572,
    Poisoned = 573,
    PoisonedLostHealth = 574,
    PoisonWorkedItsCourse = 575,
    Positively = 576,
    PouredOut = 577,
    PouredOutOnYourself = 578,
    PouredWaterIntoStill = 579,
    PourHarmedPlant = 580,
    PourHealedPlant = 581,
    PourHealedPlantFully = 582,
    PourHealedPlantPartially = 583,
    PourIncreasedFertility = 584,
    Pouring = 585,
    PourOverWatering = 586,
    Prepare = 587,
    Prepared = 588,
    Preserve = 589,
    PreservedFood = 590,
    PurifiedWaterInStill = 591,
    RandomEventsFire = 592,
    ReduceLength = 593,
    Refine = 594,
    RefusedToBeTamed = 595,
    Reinforce = 596,
    Repair = 597,
    RequiredForDisassembly = 598,
    RequiresFireToBeLit = 599,
    RequiresYouFacingFireSource = 600,
    RequiresYouToBeAround = 601,
    Resistant = 602,
    Rest = 603,
    Rested = 604,
    Resting = 605,
    RestingOnGroundNotEffective = 606,
    RestInterrupted = 607,
    RestInterruptedDamage = 608,
    RestInterruptedDying = 609,
    RestInterruptedLoudNoise = 610,
    RestInterruptedPain = 611,
    RestInterruptedStirring = 612,
    RestInterruptedWaterPoured = 613,
    RestLongTime = 614,
    RestModerateTime = 615,
    RestOnBoat = 616,
    RestShortTime = 617,
    RestTime = 618,
    ReturnedToCivilization = 619,
    ReturningToCivilizationSetOffAgain = 620,
    ReturnsToLife = 621,
    Reverse = 622,
    Sailing = 623,
    ScrollMaster = 624,
    ScrollProvidedNoUsefulInsight = 625,
    Seawater = 626,
    SeemsToHaveDrawnEnergy = 627,
    SetTrapOffButNoDamage = 628,
    SetUp = 629,
    ShadowInTheWater = 630,
    Skill = 631,
    SkillHasRaised = 632,
    Skills = 633,
    Sleep = 634,
    Sleeping = 635,
    SleepOnBoat = 636,
    Slept = 637,
    SlitherSuckerConstricts = 638,
    SlitherSuckerFailedToRemove = 639,
    SlitherSuckerFailedToRemoveOuch = 640,
    SlitherSuckerJumpedOnHead = 641,
    SolarStill = 642,
    SomethingInTheWayOf = 643,
    SomethingInTheWayOfButcherFirst = 644,
    SomethingInTheWayOfFire = 645,
    SomethingInTheWayOfFishing = 646,
    SomethingInTheWayOfPerforming = 647,
    SomethingInTheWayOfPlacing = 648,
    SomethingInTheWayOfReleasing = 649,
    SomethingInTheWayOfSummoning = 650,
    SomethingInWayOfClosingDoor = 651,
    SoothedTheirBurnInjuries = 652,
    SoothedYourBurnInjuries = 653,
    Sort = 654,
    SortedByBestCraftingRequirements = 655,
    SortedByCategory = 656,
    SortedByCraftableOnly = 657,
    SortedByDecay = 658,
    SortedByDurability = 659,
    SortedByGroup = 660,
    SortedByMagical = 661,
    SortedByName = 662,
    SortedByQuality = 663,
    SortedByRecent = 664,
    SortedBySkill = 665,
    SortedByUnlockedTime = 666,
    SortedByWeight = 667,
    SortedByWorth = 668,
    StaminaIsFull = 669,
    StartedFire = 670,
    StartTravelInWater = 671,
    StarvingToDeath = 672,
    StatAmount = 673,
    StatGained = 674,
    StatIncreasing = 675,
    StatLost = 676,
    StatQuenched = 677,
    StatRegained = 678,
    StatSated = 679,
    SteppingOn = 680,
    Still = 681,
    StillHasNoWaterToPurify = 682,
    StirredUpClawWorm = 683,
    StirredUpCreature = 684,
    StoppedYourBleeding = 685,
    StopUsingVehicle = 686,
    Strength = 687,
    SummonedGuardiansByDiggingTreasure = 688,
    SummonedGuardiansByLockpicking = 689,
    SummonVoidDwellerItem = 690,
    SummonVoidDwellerRinging = 691,
    SummonVoidDwellerShiver = 692,
    SunNotBrightEnoughToStartFire = 693,
    SwampWater = 694,
    Swimming = 695,
    TakenFromGroundBecomeTamed = 696,
    TeleportBlocked = 697,
    Teleported = 698,
    ThanksBuying = 699,
    ThanksSelling = 700,
    TheirFist = 701,
    ThePlant = 702,
    ThereIsNoContainerOnTheStill = 703,
    ThereIsNoSunToStartFire = 704,
    ThisCannotBeMilked = 705,
    Throw = 706,
    ThrownIntoDepths = 707,
    ThrownIntoObstacle = 708,
    ThrownIntoVoid = 709,
    Tier = 710,
    TierGroup = 711,
    Till = 712,
    Tilling = 713,
    TimeIs = 714,
    TimeIsDawn = 715,
    TimeIsDaytime = 716,
    TimeIsDusk = 717,
    TimeIsNighttime = 718,
    TimeIsSunrise = 719,
    TimeIsSunset = 720,
    ToFight = 721,
    TooDamaged = 722,
    TooExhaustedToJump = 723,
    Touching = 724,
    TrampledFire = 725,
    TrampledFireFail = 726,
    TrampledFirePartial = 727,
    TrampledIntoGround = 728,
    TrampleIntoGround = 729,
    Trampling = 730,
    TransmogrificationNotPossible = 731,
    Transmogrified = 732,
    Transmogrify = 733,
    TrapMissed = 734,
    TrapStoppedYou = 735,
    Traveling = 736,
    Treasure = 737,
    TreasureIsBlocked = 738,
    UiActionCannotUseInaccessibleItem = 739,
    UiActionCannotUseRequiresCreature = 740,
    UiActionCannotUseRequiresDoodad = 741,
    UiActionCannotUseRequiresItem = 742,
    UiActionCannotUseRequiresNPC = 743,
    UiActionCannotUseRequiresVehicle = 744,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue1 = 745,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue2 = 746,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue1 = 747,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue2 = 748,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue1 = 749,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue2 = 750,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue3 = 751,
    Unhitch = 752,
    UnhitchCreature = 753,
    Unknown = 754,
    Unlimited = 755,
    UnlockedChest = 756,
    UnpurifiedFreshWater = 757,
    UnpurifiedWaterInStill = 758,
    Use = 759,
    UsingBareHands = 760,
    VehicleDefense = 761,
    Vulnerable = 762,
    Water = 763,
    WaterGathering = 764,
    WaterPutOutFire = 765,
    WellIsDry = 766,
    WellIsFull = 767,
    WildGoatRefusedToBeMilked = 768,
    WillNotTrade = 769,
    WorkingYourselfIntoExhaustion = 770,
    WorkingYourselfIntoExhaustionAndDrowning = 771,
    WorldContainer = 772,
    You = 773,
    YouAbsorb = 774,
    YouApplied = 775,
    YouAreAlready = 776,
    YouAte = 777,
    YouBeginResting = 778,
    YouCannotDoThatYet = 779,
    YouCanNowCombatTheTides = 780,
    YouCrafted = 781,
    YouDoNotFindTreasureYet = 782,
    YouDrank = 783,
    YouDropTheTorch = 784,
    YouEnchant = 785,
    YouEquip = 786,
    YouExude = 787,
    YouExudeSome = 788,
    YouExudeSomeReasonConflicting = 789,
    YouExudeSomeReasonMax = 790,
    YouExudeSomeReasonProperties = 791,
    YouFailedTo = 792,
    YouFailedToExtinguishedFireFully = 793,
    YouFailedToHeal = 794,
    YouFailedToHealOther = 795,
    YouFire = 796,
    YouGathered = 797,
    YouGatheredAndDropped = 798,
    YouHarvested = 799,
    YouHarvestedAndDropped = 800,
    YouHave = 801,
    YouHaveAlreadyLearned = 802,
    YouHaveBeenCut = 803,
    YouHaveCaged = 804,
    YouHaveCommanded = 805,
    YouHaveDied = 806,
    YouHaveHealedOther = 807,
    YouHaveKilled = 808,
    YouHaveReleased = 809,
    YouHaveSummoned = 810,
    YouHaveTamed = 811,
    YouHaveUncaged = 812,
    YouNoticeBarren = 813,
    YouNoticeBecomeEnraged = 814,
    YouNoticeDying = 815,
    YouNoticeFertilityDecreasing = 816,
    YouNoticeFertilityIncreasing = 817,
    YouNoticeGrowing = 818,
    YouNoticeLavaCooling = 819,
    YouNoticeLavaHardening = 820,
    YouNoticePerish = 821,
    YouNoticePlantDamage = 822,
    YouNoticePlantRegenerated = 823,
    YouNoticeRegrowing = 824,
    YouNoticeStumbleInjureItself = 825,
    YouNoticeTakeFromGround = 826,
    YouNoticeWoundsClosing = 827,
    YouNoticeZombieHorde = 828,
    YouOfferedToCreature = 829,
    YouOfferedToCreatureRejects = 830,
    YouOpen = 831,
    YouPacked = 832,
    YouPickedUp = 833,
    YouRefine = 834,
    YouReinforce = 835,
    YouRepair = 836,
    YouReturnFromCivilizationWith = 837,
    YourFist = 838,
    YourHands = 839,
    YourInventory = 840,
    TheirInventory = 841,
    YourIsland = 842,
    YourRubbingNoEffect = 843,
    YouRub = 844,
    YouSee = 845,
    YouSeeALivingMushroomSpore = 846,
    YouSeeASkeletonCollapse = 847,
    YouSeeASlimeCombine = 848,
    YouSeeAZombieBleeding = 849,
    YouSeeCoolDown = 850,
    YouSeeDrop = 851,
    YouSeeEngulfFire = 852,
    YouSeeFireSpread = 853,
    YouSeeHelpingPlant = 854,
    YouSeeLay = 855,
    YouSeeLayingTrap = 856,
    YouSeeSpewLava = 857,
    YouSeeSpitAcid = 858,
    YouSeeSpringForth = 859,
    YouSeeSummon = 860,
    YouSeeSwampFlood = 861,
    YouSeeTrampling = 862,
    YouSetTheTrapOff = 863,
    YouStokeTheCreature = 864,
    YouSwapMainHandAndOffHand = 865,
    YouThrew = 866,
    YouTilled = 867,
    YouUnequip = 868,
    YouUsed = 869,
    YouWhileTraveling = 870
}
export default Message;
