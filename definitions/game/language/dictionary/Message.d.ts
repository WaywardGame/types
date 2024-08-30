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
    ActionBuildTooDeep = 14,
    ActionButcherReleasesLava = 15,
    ActionCageCreatureCannotBeCaged = 16,
    ActionCageCreatureNoCreature = 17,
    ActionCastAreaOverfished = 18,
    ActionConsumeItemTypeStats = 19,
    ActionContextAllowedFireToSpread = 20,
    ActionContextDamagedCreatureWith = 21,
    ActionContextDamagedHuman = 22,
    ActionContextDamagedHumanWith = 23,
    ActionContextDamagedPet = 24,
    ActionContextGainedSkill = 25,
    ActionContextKilledCreature = 26,
    ActionContextKilledPlayer = 27,
    ActionContextKilledPlayerWithPet = 28,
    ActionContextRested = 29,
    ActionContextSlept = 30,
    ActionContextTamedCreature = 31,
    ActionContextTrampledFire = 32,
    ActionCraftEfficacy = 33,
    ActionCraftEfficacyHigh = 34,
    ActionCraftEfficacyHighest = 35,
    ActionCraftEfficacyLow = 36,
    ActionCraftEfficacyLowest = 37,
    ActionCraftEfficacyMed = 38,
    ActionCraftEfficacyPercent = 39,
    ActionCraftYouLackTheRequirements = 40,
    ActionDetachContainerDetachContainer = 41,
    ActionDetachContainerNoDetach = 42,
    ActionDigTooDeep = 43,
    ActionDigWaterFilledHole = 44,
    ActionDisassembleNoItemsSalvaged = 45,
    ActionDisassembleSalvaged = 46,
    ActionDismantleSeparated = 47,
    ActionDisplayItemDisplayed = 48,
    ActionDisplayItemEmptyContainerBeforehand = 49,
    ActionDisplayItemReturned = 50,
    ActionDrinkInFrontNoDrink = 51,
    ActionDropCannotUseBlocked = 52,
    ActionDropCannotUseItemEquipped = 53,
    ActionDropCannotUseItemProtected = 54,
    ActionDropCannotUseItemProtectedDangerous = 55,
    ActionDropCannotUseNoItems = 56,
    ActionDropCannotUseNoRoomMultipleItems = 57,
    ActionDumpItemsCannotUseBlocked = 58,
    ActionDumpItemsCannotUseNothingToDumpOut = 59,
    ActionDumpItemsCannotUseWrongDirection = 60,
    ActionDumpItemsDumpedItems = 61,
    ActionEnhance = 62,
    ActionEnhanceEnhanced = 63,
    ActionEnhanceFailed = 64,
    ActionEnhanceNotPossible = 65,
    ActionEquipWillBreakOnDamage = 66,
    ActionFishingNothingBiting = 67,
    ActionFishingSlipped = 68,
    ActionFishingTooShallow = 69,
    ActionInvoke = 70,
    ActionInvokeCannotUseSilence = 71,
    ActionInvokeChaosNoEffect = 72,
    ActionInvokeEvilCreaturesAttracted = 73,
    ActionInvokeEvilCreaturesNoneSummoned = 74,
    ActionInvokeGoodCreaturesPacified = 75,
    ActionInvokeGoodCreaturesPacifiedAttacked = 76,
    ActionInvokeGoodCreaturesPacifiedNone = 77,
    ActionJumpCannotJump = 78,
    ActionMeleeNothingToAttack = 79,
    ActionMoveItemCannotUseContainerTooFarAway = 80,
    ActionMoveItemCannotUseEquipped = 81,
    ActionMoveItemCannotUseFromInvalidContainer = 82,
    ActionMoveItemCannotUseInvalidContainer = 83,
    ActionMoveItemCannotUseItemFilteredOut = 84,
    ActionMoveItemCannotUseItemQualityOrTypeIncorrect = 85,
    ActionMoveItemCannotUseItemTooFarAway = 86,
    ActionMoveItemCannotUseMovingFromMultipleContainers = 87,
    ActionMoveItemCannotUseNoContainerToMoveTo = 88,
    ActionMoveItemCannotUseNoItems = 89,
    ActionMoveItemCannotUseNoRoom = 90,
    ActionMoveItemCannotUseProtected = 91,
    ActionMoveToSwimOffEdgeCannotCombatTides = 92,
    ActionNavigateMoon = 93,
    ActionNavigateNotOverworld = 94,
    ActionNavigateSun = 95,
    ActionNavigateUseSextant = 96,
    ActionPetCreatureRefused = 97,
    ActionPetNoTamedCreature = 98,
    ActionPickUpAllItemsNoItems = 99,
    ActionPickUpDoodadCannotUseItemsPlacedOn = 100,
    ActionPickUpDoodadCannotUseItemsPlacedIn = 101,
    ActionPickUpExcrementNoExcrement = 102,
    ActionPickUpItemNoItem = 103,
    ActionPickUpNoPickUp = 104,
    ActionPourNoEffect = 105,
    ActionRefineNoDurability = 106,
    ActionReleaseNoTamedCreature = 107,
    ActionRenameIsland = 108,
    ActionRepairMaxDurabilityTooLow = 109,
    ActionReshape = 110,
    ActionReshapeFailed = 111,
    ActionReshapeNotPossibleBonus = 112,
    ActionReshapeReshaped = 113,
    ActionSacrificeNoRunes = 114,
    ActionSacrificeRunesSacrificed = 115,
    ActionSailToCivilizationNotInsideBoat = 116,
    ActionSailToIsland = 117,
    ActionSailToIslandArrived = 118,
    ActionSailToIslandCannotUseCannotReachEdge = 119,
    ActionSailToIslandCannotUseCannotReachPort = 120,
    ActionSailToIslandCannotUseGhost = 121,
    ActionSailToIslandCannotUseInvalidDestination = 122,
    ActionSailToIslandCannotUseNoDestination = 123,
    ActionSailToIslandCannotUseNotEnoughStamina = 124,
    ActionSailToIslandCannotUseNotEnoughSwimmingSkill = 125,
    ActionSailToIslandCannotUseTravellingIsDisallowedInTheseLands = 126,
    ActionSailToIslandPlayerArriving = 127,
    ActionSailToIslandPlayerDeparting = 128,
    ActionSetCreatureAiAlreadyCommanded = 129,
    ActionSetCreatureAiCannotCommand = 130,
    ActionSetCreatureAiNotEnoughSkill = 131,
    ActionSetCreatureAiNotEnoughTames = 132,
    ActionSetDownNotEnoughRoom = 133,
    ActionShipToIslandNoDestination = 134,
    ActionSwapEquipmentCannotUseNoEquipmentToSwap = 135,
    ActionTameCreatureTamed = 136,
    ActionTameNoCreature = 137,
    ActionTestDepthNothingToTest = 138,
    ActionTestDepthWell = 139,
    ActionToggleContainerCannotUseAlreadyClosed = 140,
    ActionToggleContainerCannotUseNoContainer = 141,
    ActionToggleContainerCannotUseNoContainerToClose = 142,
    ActionToggleContainerCannotUseNoContainerToOpen = 143,
    ActionToggleContainerCannotUseNotAccessible = 144,
    ActionToggleContainerCannotUseUnknownContainer = 145,
    ActionToggleDoorNoDoor = 146,
    ActionToggleHitchAlreadyHitched = 147,
    ActionToggleHitchAlreadyUnhitched = 148,
    ActionToggleHitchNoCreature = 149,
    ActionToggleHitchNoHitch = 150,
    ActionToggleTilledAlreadyPacked = 151,
    ActionToggleTilledAlreadyTilled = 152,
    ActionToggleTilledDug = 153,
    ActionTradeCannotUseExceedsCarryWeight = 154,
    ActionTradeCannotUseNotEnoughCredit = 155,
    ActionTradeCannotUseNothingToTrade = 156,
    ActionTradeCannotUseTradedTooMuch = 157,
    ActionTradeCreditChange = 158,
    ActionTradeCreditChangeDecrease = 159,
    ActionTradeCreditChangeIncrease = 160,
    ActionTradeDialogue1 = 161,
    ActionTradeDialogue2 = 162,
    ActionTradeDialogue3 = 163,
    ActionTradeDialogue4 = 164,
    ActionTradeIndicateUntradable = 165,
    ActionTradeMerchantItems = 166,
    ActionTradeYourItems = 167,
    ActionUncageCannotUncageHere = 168,
    ActionUpgrade = 169,
    ActionUpgradeFailed = 170,
    ActionUpgradeNotMagical = 171,
    ActionUpgradeNotPossible = 172,
    ActionUpgradeUpgraded = 173,
    ActionUseItemWeaponNeeded = 174,
    AddedFuelToFire = 175,
    AddedFuelToTorch = 176,
    AllEquipmentUnEquipped = 177,
    AlreadyDesalinatedWaterInStill = 178,
    AlreadyFullyRefined = 179,
    AlreadyFullyRepaired = 180,
    AlreadyPreserved = 181,
    Alter = 182,
    AnotherIsland = 183,
    AnUnknownItem = 184,
    AppearedNotEffectiveForGathering = 185,
    ArmorAppeared = 186,
    ArmorProtectedFromInjuryAgainst = 187,
    AttemptToSoothBurnInWater = 188,
    AttemptToSoothFrostbiteWithFire = 189,
    AttemptToSoothFrostbiteWithFireTooHot = 190,
    AttemptToTill = 191,
    BadlyBurnedLostHealth = 192,
    BeenPoisoned = 193,
    BeginSleeping = 194,
    BeginUsingVehicle = 195,
    BleedingHasStopped = 196,
    BleedingProfusely = 197,
    BleedingToDeathLostHealth = 198,
    BookBlank = 199,
    BookContains = 200,
    BookCrumbles = 201,
    BookDiagrams = 202,
    BookEmpty = 203,
    BookNothing = 204,
    BookOpen = 205,
    BookScribbles = 206,
    BothEffectiveIneffective = 207,
    BrokeIntoPieces = 208,
    BrokenOnImpact = 209,
    BrokenWhileFiring = 210,
    Build = 211,
    Burned = 212,
    CannotAddAnyMoreFuel = 213,
    CannotBeCrafted = 214,
    CannotBePerformedOverWater = 215,
    CannotBePlacedHere = 216,
    CannotBePreserved = 217,
    CannotBeRefined = 218,
    CannotBeRefinedReinforcementNeeded = 219,
    CannotBeReinforced = 220,
    CannotBeRepaired = 221,
    CannotBuildHere = 222,
    CannotDigWithHands = 223,
    CannotDoThatHere = 224,
    CannotEquipThatThere = 225,
    CannotFishFor = 226,
    CannotHere = 227,
    CannotInWater = 228,
    CannotLeave = 229,
    CannotNoTreasure = 230,
    CannotPickUpLockedContainer = 231,
    CannotPickUpWhileLit = 232,
    CannotPlaceContainerInItself = 233,
    CannotPlaceHere = 234,
    CannotPlaceThatFromHere = 235,
    CannotPlaceThatHere = 236,
    CannotPlaceThatOverWater = 237,
    CannotPlantHereTilled = 238,
    CannotRepairWhileLit = 239,
    CannotRestHere = 240,
    CannotShipNoItems = 241,
    CannotShipNoPath = 242,
    CannotSleepHere = 243,
    CannotStartFireHere = 244,
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
    Enchant = 372,
    EquipmentPreventedStatusEffects = 373,
    ErrorHasOccured = 374,
    ExtinguishedFire = 375,
    ExtinguishedLightSource = 376,
    Exude = 377,
    ExudeNotPossible = 378,
    FailedToAbsorb = 379,
    FailedToAddFuelToTorch = 380,
    FailedToCage = 381,
    FailedToCatchFish = 382,
    FailedToCauseDamage = 383,
    FailedToCauseYouDamage = 384,
    FailedToCopy = 385,
    FailedToDraw = 386,
    FailedToEnchant = 387,
    FailedToExude = 388,
    FailedToIgniteTorch = 389,
    FailedToPickLock = 390,
    FailedToPreserve = 391,
    FailedToRefine = 392,
    FailedToReinforce = 393,
    FailedToRepair = 394,
    FailedToStartFire = 395,
    FailedToTame = 396,
    FailedToTransmogrify = 397,
    FarOffLands = 398,
    FeltBurningPainLostHealth = 399,
    FeltFrostbitePainLostHealth = 400,
    FewMinutes = 401,
    Filled = 402,
    FilledFrom = 403,
    FireAroundYouIsWarm = 404,
    FiredIntoObstacle = 405,
    FireOverflowed = 406,
    FireOverflowedFireElemental = 407,
    FireSource = 408,
    FishingWithNoBait = 409,
    Floating = 410,
    FreshWater = 411,
    FromTheStill = 412,
    FuelIsRequired = 413,
    Gather = 414,
    GatherDestroy = 415,
    Gathering = 416,
    GhostNoActions = 417,
    GhostOf = 418,
    GoatHasNoMilk = 419,
    HackAway = 420,
    HandProtectionPreventedInjury = 421,
    HandsNotEffectiveFor = 422,
    Harvest = 423,
    Harvesting = 424,
    HasBeenHurtByATrap = 425,
    HasDecayed = 426,
    HasHitYouForDamage = 427,
    HasNoEffect = 428,
    HasSetTrapOffNoDamage = 429,
    HasSplit = 430,
    HelpGrow = 431,
    Hitch = 432,
    HitchAttempt = 433,
    HitchCreature = 434,
    HitchDisabled = 435,
    HitchInUse = 436,
    HitForDamage = 437,
    HitYouForDamage = 438,
    Hour = 439,
    Hours = 440,
    HurtHandsHittingWithoutWeapons = 441,
    HurtHandsWithNoTool = 442,
    Ignite = 443,
    IgnitedTorch = 444,
    Ineffective = 445,
    InjuredFromTrap = 446,
    InNeedOfRepair = 447,
    InteractingWithHasInjuredYouForDamage = 448,
    InvalidContainer = 449,
    IsInTheWayOfPickingUp = 450,
    ItemFromWater = 451,
    JoinedAServer = 452,
    Jump = 453,
    Killed = 454,
    KnowledgeHasIncreased = 455,
    LastPlaceYouLeftOff = 456,
    LearnedHowToCreate = 457,
    LikelyFailures = 458,
    Limited = 459,
    Lockpick = 460,
    MapCompletedNotOfThisArea = 461,
    MapDestroyed = 462,
    MapNearlyDestroyed = 463,
    MapNotOfThisArea = 464,
    MaterialsDestroyed = 465,
    MessageOfTheDay = 466,
    Metabolism = 467,
    MetabolismSlowed = 468,
    Milk = 469,
    Mine = 470,
    Mining = 471,
    MissedWith = 472,
    MissedYouWith = 473,
    MovedItem = 474,
    MovedItemFailed = 475,
    MoveOverTrapButDoNotSetOff = 476,
    MultiplayerGamePaused = 477,
    MultiplayerGameResumed = 478,
    MultiplayerPlayerConnected = 479,
    MultiplayerPlayerDied = 480,
    MultiplayerPlayerDisconnected = 481,
    MultiplayerPlayerJoined = 482,
    MustBeEquippedToIgnite = 483,
    Mysteriously = 484,
    NearlyBurnedEquipmentProtectedYou = 485,
    NeedToStartTravelsOutside = 486,
    NeedWaterForBoat = 487,
    NightQuarter1 = 488,
    NightQuarter2 = 489,
    NightQuarter3 = 490,
    NightQuarter4 = 491,
    No = 492,
    NoAmmunitionForThatWeapon = 493,
    NoFireToStokeWith = 494,
    NoFishAtLocation = 495,
    NoGroundWater = 496,
    NoInkToDrawMap = 497,
    NoKindlingOrFuelItemsToStartFire = 498,
    NoKindlingToStartFire = 499,
    NoLongerFeelPainOfBeingBurned = 500,
    NoLongerFeelPainOfBeingFrostbitten = 501,
    NoLongerHostile = 502,
    NoMoreRoomInContainer = 503,
    NoPaperToDrawMap = 504,
    NoRequiredItemToFireWeapon = 505,
    NoReturnWithoutCompletingChallenges = 506,
    NoRoomForImprovement = 507,
    NoRoomForVehicle = 508,
    NoRoomToDrop = 509,
    NoRoomToSummon = 510,
    NotEnoughPurifiedWaterYet = 511,
    NotEnoughTreasureToReturn = 512,
    NotFacingCreatureToOfferThisTo = 513,
    NotFacingLockedObject = 514,
    NotFacingOtherToHeal = 515,
    NotFacingValidItem = 516,
    NothingHereToButcher = 517,
    NothingHereToFill = 518,
    NothingHereToGrasp = 519,
    NothingTo = 520,
    NothingToGetFromThis = 521,
    NothingToHarvestFromThisGather = 522,
    NothingToSmother = 523,
    NothingUsefulToHarvestYet = 524,
    NoTinderToStartFire = 525,
    NotSuitableToPlant = 526,
    NoWaterInStill = 527,
    NPCMerchantNewInventoryDialogue1 = 528,
    NPCMerchantNewInventoryDialogue2 = 529,
    NPCMerchantNewInventoryDialogue3 = 530,
    NPCMerchantNewInventoryDialogue4 = 531,
    NPCMerchantStartingDialogue1 = 532,
    NPCMerchantStartingDialogue2 = 533,
    NPCMerchantStartingDialogue3 = 534,
    NPCMerchantStartingDialogue4 = 535,
    NPCMerchantWelcomeCredit = 536,
    NPCShipperShipToIsland = 537,
    NPCShipperStartingDialogue1 = 538,
    NPCShipperStartingDialogue2 = 539,
    NPCShipperStartingDialogue3 = 540,
    NPCShipperStartingDialogue4 = 541,
    NPCWelcome = 542,
    ObjectIsLocked = 543,
    ObjectIsLockedAttemptToBreakIt = 544,
    OfferAberrantFail = 545,
    OfferAberrantFailButTamed = 546,
    Open = 547,
    OpenClose = 548,
    OverEatingLostStamina = 549,
    OverHydratingLostStamina = 550,
    Pack = 551,
    PaperTurnedToMush = 552,
    ParryTheBlow = 553,
    PetCreature = 554,
    PickAway = 555,
    PickUp = 556,
    PickUpExcrement = 557,
    PickUpTheItem = 558,
    Place = 559,
    PlacedItem = 560,
    PlacedItemFailed = 561,
    PlacedOnGround = 562,
    PlantedInGround = 563,
    PlantGatheredPlant = 564,
    PlantGatheringWillDestroy = 565,
    PlantHasResourcesToGather = 566,
    PlantHasResourcesToHarvest = 567,
    PlantHighlyFertile = 568,
    Planting = 569,
    PlantIsBare = 570,
    PlantIsFertile = 571,
    PlantIsInStage = 572,
    PlantIsNotFertile = 573,
    PlantNotReadyToHarvest = 574,
    PlantReadyToGather = 575,
    PlantReadyToGatherNotMaximal = 576,
    PlantReadyToHarvest = 577,
    PlantReadyToHarvestNotMaximal = 578,
    PlayerHas = 579,
    PlayerHasCompletedChallengeRequirement = 580,
    PlayerHasWonChallenge = 581,
    Poisoned = 582,
    PoisonedLostHealth = 583,
    PoisonWorkedItsCourse = 584,
    PouredOut = 585,
    PouredOutOnYourself = 586,
    PouredWaterIntoStill = 587,
    PourHarmedPlant = 588,
    PourHealedPlant = 589,
    PourHealedPlantFully = 590,
    PourHealedPlantPartially = 591,
    PourIncreasedFertility = 592,
    Pouring = 593,
    PourOverWatering = 594,
    Prepare = 595,
    Prepared = 596,
    Preserve = 597,
    PreservedFood = 598,
    PurifiedWaterInStill = 599,
    RandomEventsFire = 600,
    ReduceLength = 601,
    Refine = 602,
    RefusedToBeTamed = 603,
    Reinforce = 604,
    Repair = 605,
    RequiredForDisassembly = 606,
    RequiresFireToBeLit = 607,
    RequiresYouFacingFireSource = 608,
    RequiresYouToBeAround = 609,
    Resistant = 610,
    Rest = 611,
    Rested = 612,
    Resting = 613,
    RestingOnGroundNotEffective = 614,
    RestInterrupted = 615,
    RestInterruptedDamage = 616,
    RestInterruptedDying = 617,
    RestInterruptedLoudNoise = 618,
    RestInterruptedPain = 619,
    RestInterruptedStirring = 620,
    RestInterruptedWaterPoured = 621,
    RestLongTime = 622,
    RestModerateTime = 623,
    RestOnBoat = 624,
    RestShortTime = 625,
    RestTime = 626,
    ReturnedToCivilization = 627,
    ReturningToCivilizationSetOffAgain = 628,
    ReturnsToLife = 629,
    Reverse = 630,
    Sailing = 631,
    ScrollMaster = 632,
    ScrollProvidedNoUsefulInsight = 633,
    Seawater = 634,
    SeemsToHaveDrawnEnergy = 635,
    SetTrapOffButNoDamage = 636,
    SetUp = 637,
    ShadowInTheWater = 638,
    Skill = 639,
    SkillHasRaised = 640,
    Skills = 641,
    Sleep = 642,
    Sleeping = 643,
    SleepOnBoat = 644,
    Slept = 645,
    SlitherSuckerConstricts = 646,
    SlitherSuckerFailedToRemove = 647,
    SlitherSuckerFailedToRemoveOuch = 648,
    SlitherSuckerJumpedOnHead = 649,
    SolarStill = 650,
    SomethingInTheWayOf = 651,
    SomethingInTheWayOfButcherFirst = 652,
    SomethingInTheWayOfFire = 653,
    SomethingInTheWayOfFishing = 654,
    SomethingInTheWayOfPerforming = 655,
    SomethingInTheWayOfPlacing = 656,
    SomethingInTheWayOfReleasing = 657,
    SomethingInTheWayOfSummoning = 658,
    SomethingInWayOfClosingDoor = 659,
    SoothedTheirBurnInjuries = 660,
    SoothedYourBurnInjuries = 661,
    SortedByCategory = 662,
    SortedByCraftableOnly = 663,
    SortedByName = 664,
    SortedBySkill = 665,
    SortedByUnlockedTime = 666,
    StaminaIsFull = 667,
    StartedFire = 668,
    StartTravelInWater = 669,
    StarvingToDeath = 670,
    StatAmount = 671,
    StatChangeUnknown = 672,
    StatGained = 673,
    StatIncreasing = 674,
    StatLost = 675,
    StatQuenched = 676,
    StatRegained = 677,
    StatSated = 678,
    SteppingOn = 679,
    Still = 680,
    StillHasNoWaterToPurify = 681,
    StirredUpClawWorm = 682,
    StirredUpCreature = 683,
    StoppedYourBleeding = 684,
    StopUsingVehicle = 685,
    Strength = 686,
    SummonedGuardiansByDiggingTreasure = 687,
    SummonedGuardiansByLockpicking = 688,
    SummonVoidDwellerItem = 689,
    SummonVoidDwellerRinging = 690,
    SummonVoidDwellerShiver = 691,
    SunNotBrightEnoughToStartFire = 692,
    SwampWater = 693,
    Swimming = 694,
    TakenFromGroundBecomeTamed = 695,
    TeleportBlocked = 696,
    Teleported = 697,
    TheirFist = 698,
    TheirInventory = 699,
    ThePlant = 700,
    ThereIsNoContainerOnTheStill = 701,
    ThereIsNoSunToStartFire = 702,
    ThisCannotBeMilked = 703,
    Throw = 704,
    ThrownIntoDepths = 705,
    ThrownIntoObstacle = 706,
    ThrownIntoVoid = 707,
    TierGroup = 708,
    Till = 709,
    Tilling = 710,
    TimeIs = 711,
    TimeIsDawn = 712,
    TimeIsDaytime = 713,
    TimeIsDusk = 714,
    TimeIsNighttime = 715,
    TimeIsSunrise = 716,
    TimeIsSunset = 717,
    ToFight = 718,
    TooDamaged = 719,
    TooExhaustedToJump = 720,
    Touching = 721,
    TrampledFire = 722,
    TrampledFireFail = 723,
    TrampledFirePartial = 724,
    TrampledIntoGround = 725,
    TrampleIntoGround = 726,
    Trampling = 727,
    TransmogrificationNotPossible = 728,
    Transmogrified = 729,
    Transmogrify = 730,
    TrapMissed = 731,
    TrapStoppedYou = 732,
    Traveling = 733,
    Treasure = 734,
    TreasureIsBlocked = 735,
    UiActionCannotUseInaccessibleItem = 736,
    UiActionCannotUseInThisSituation = 737,
    UiActionCannotUseNoItemHovered = 738,
    UiActionCannotUseNotInRange = 739,
    UiActionCannotUseOnThisIsland = 740,
    UiActionCannotUseRequiresCreature = 741,
    UiActionCannotUseRequiresDoodad = 742,
    UiActionCannotUseRequiresItem = 743,
    UiActionCannotUseRequiresNPC = 744,
    UiActionCannotUseRequiresVehicle = 745,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue1 = 746,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue2 = 747,
    UiDialogTradeIndicateTradeAlreadyTradedBuyDialogue3 = 748,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue1 = 749,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue2 = 750,
    UiDialogTradeIndicateTradeAlreadyTradedSellDialogue3 = 751,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue1 = 752,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue2 = 753,
    UiDialogTradeIndicateTradeTooMuchTradesDialogue3 = 754,
    Unhitch = 755,
    UnhitchCreature = 756,
    Unknown = 757,
    Unlimited = 758,
    UnlockedChest = 759,
    UnpurifiedFreshWater = 760,
    UnpurifiedWaterInStill = 761,
    Use = 762,
    UsingBareHands = 763,
    VehicleDefense = 764,
    Vulnerable = 765,
    Water = 766,
    WaterGathering = 767,
    WaterPutOutFire = 768,
    WellIsDry = 769,
    WellIsFull = 770,
    WildGoatRefusedToBeMilked = 771,
    WorkingYourselfIntoExhaustion = 772,
    WorkingYourselfIntoExhaustionAndDrowning = 773,
    WorldContainer = 774,
    You = 775,
    YouAbsorb = 776,
    YouApplied = 777,
    YouAreAlready = 778,
    YouAte = 779,
    YouBeginResting = 780,
    YouCannotDoThatYet = 781,
    YouCanNowCombatTheTides = 782,
    YouCrafted = 783,
    YouDoNotFindTreasureYet = 784,
    YouDrank = 785,
    YouDropTheTorch = 786,
    YouEnchant = 787,
    YouEquip = 788,
    YouExude = 789,
    YouExudeSome = 790,
    YouExudeSomeReasonConflicting = 791,
    YouExudeSomeReasonMax = 792,
    YouExudeSomeReasonProperties = 793,
    YouFailedTo = 794,
    YouFailedToExtinguishedFireFully = 795,
    YouFailedToHeal = 796,
    YouFailedToHealOther = 797,
    YouFire = 798,
    YouGathered = 799,
    YouGatheredAndDropped = 800,
    YouHarvested = 801,
    YouHarvestedAndDropped = 802,
    YouHave = 803,
    YouHaveAlreadyLearned = 804,
    YouHaveBeenCut = 805,
    YouHaveCaged = 806,
    YouHaveCommanded = 807,
    YouHaveDied = 808,
    YouHaveHealedOther = 809,
    YouHaveKilled = 810,
    YouHaveNotCommanded = 811,
    YouHaveReleased = 812,
    YouHaveSummoned = 813,
    YouHaveTamed = 814,
    YouHaveUncaged = 815,
    YouNoticeBarren = 816,
    YouNoticeBecomeEnraged = 817,
    YouNoticeDying = 818,
    YouNoticeFertilityDecreasing = 819,
    YouNoticeFertilityIncreasing = 820,
    YouNoticeGrowing = 821,
    YouNoticeLavaCooling = 822,
    YouNoticeLavaHardening = 823,
    YouNoticePerish = 824,
    YouNoticePlantDamage = 825,
    YouNoticePlantRegenerated = 826,
    YouNoticeRegrowing = 827,
    YouNoticeStumbleInjureItself = 828,
    YouNoticeTakeFromGround = 829,
    YouNoticeWoundsClosing = 830,
    YouNoticeZombieHorde = 831,
    YouOfferedToCreature = 832,
    YouOfferedToCreatureRejects = 833,
    YouOpen = 834,
    YouPacked = 835,
    YouPickedUp = 836,
    YouRefine = 837,
    YouReinforce = 838,
    YouRepair = 839,
    YouReturnFromCivilizationWith = 840,
    YourFist = 841,
    YourHands = 842,
    YourInventory = 843,
    YourIsland = 844,
    YouSeeALivingMushroomSpore = 845,
    YouSeeASkeletonCollapse = 846,
    YouSeeASlimeCombine = 847,
    YouSeeAZombieBleeding = 848,
    YouSeeCoolDown = 849,
    YouSeeDrop = 850,
    YouSeeEngulfFire = 851,
    YouSeeFireSpread = 852,
    YouSeeHelpingPlant = 853,
    YouSeeLay = 854,
    YouSeeLayingTrap = 855,
    YouSeeSpewLava = 856,
    YouSeeSpitAcid = 857,
    YouSeeSpringForth = 858,
    YouSeeSummon = 859,
    YouSeeSwampFlood = 860,
    YouSeeTrampling = 861,
    YouSetTheTrapOff = 862,
    YouStokeTheCreature = 863,
    YouSwapMainHandAndOffHand = 864,
    YouThrew = 865,
    YouTilled = 866,
    YouUnequip = 867,
    YouUsed = 868,
    YouWhileTraveling = 869
}
export default Message;
