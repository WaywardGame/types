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
declare enum Message {
    None = 0,
    Aberrant = 1,
    AboutHours = 2,
    ActionAlterAltered = 3,
    ActionAlterFailed = 4,
    ActionAlterNotPossible = 5,
    ActionAttachContainerAlreadyHasContainer = 6,
    ActionAttachContainerAttachedContainer = 7,
    ActionAttachContainerAttachingContainer = 8,
    ActionAttachContainerCannotAttach = 9,
    ActionAttachContainerNothingToAttachContainerTo = 10,
    ActionAttackNoAttackTarget = 11,
    ActionAttackNoHandsSelected = 12,
    ActionButcherReleasesLava = 13,
    ActionCastAreaOverfished = 14,
    ActionConsumeItemTypeStats = 15,
    ActionCraft = 16,
    ActionCraftEfficacy = 17,
    ActionCraftEfficacyHigh = 18,
    ActionCraftEfficacyHighest = 19,
    ActionCraftEfficacyLow = 20,
    ActionCraftEfficacyLowest = 21,
    ActionCraftEfficacyMed = 22,
    ActionCraftEfficacyPercent = 23,
    ActionCraftYouLackTheRequirements = 24,
    ActionDetachContainerDetachContainer = 25,
    ActionDetachContainerNoDetach = 26,
    ActionDisassembleNoItemsSalvaged = 27,
    ActionDisassembleSalvaged = 28,
    ActionDismantleSeparated = 29,
    ActionDrinkInFrontNoDrink = 30,
    ActionEnhance = 31,
    ActionEnhanceEnhanced = 32,
    ActionEnhanceFailed = 33,
    ActionEnhanceNotPossible = 34,
    ActionFishingNothingBiting = 35,
    ActionFishingSlipped = 36,
    ActionFishingTooShallow = 37,
    ActionJumpCannotJump = 38,
    ActionMeleeHasToBeEquipped = 39,
    ActionMeleeNothingToAttack = 40,
    ActionMoveToSwimOffEdgeCannotCombatTides = 41,
    ActionNavigateMoon = 42,
    ActionNavigateNotOverworld = 43,
    ActionNavigateSun = 44,
    ActionNavigateUseSextant = 45,
    ActionPetCreatureRefused = 46,
    ActionPetNoTamedCreature = 47,
    ActionPickupAllItemsNoItems = 48,
    ActionPickupExcrementNoExcrement = 49,
    ActionPickupItemNoItem = 50,
    ActionPickupNoPickup = 51,
    ActionRefineNoDurability = 52,
    ActionReleaseNoTamedCreature = 53,
    ActionRenameIsland = 54,
    ActionRenameNothing = 55,
    ActionSailToCivilizationNotInsideBoat = 56,
    ActionSailToIsland = 57,
    ActionSailToIslandArrived = 58,
    ActionSailToIslandPlayerArriving = 59,
    ActionSailToIslandPlayerDeparting = 60,
    ActionTameCreatureTamed = 61,
    ActionTameNoCreature = 62,
    ActionTestDepthNothingToTest = 63,
    ActionTestDepthWell = 64,
    ActionToggleContainerNoContainer = 65,
    ActionToggleDoorNoDoor = 66,
    ActionToggleHitchNoCreature = 67,
    ActionToggleHitchNoHitch = 68,
    ActionUpgrade = 69,
    ActionUpgradeFailed = 70,
    ActionUpgradeNotMagical = 71,
    ActionUpgradeNotPossible = 72,
    ActionUpgradeUpgraded = 73,
    ActionUseItemWeaponNeeded = 74,
    ActionWith = 75,
    AddedFuelToFire = 76,
    AddedFuelToTorch = 77,
    AddToQuickslot = 78,
    AllEquipmentUnEquipped = 79,
    AlreadyDesalinatedWaterInStill = 80,
    AlreadyFullyRefined = 81,
    AlreadyFullyRepaired = 82,
    AlreadyPreserved = 83,
    Alter = 84,
    AnotherIsland = 85,
    AnUnknownItem = 86,
    AppearedNotEffectiveForGathering = 87,
    AppearsToBeAberrant = 88,
    ArmorAppeared = 89,
    ArmorProtectedFromInjuryAgainst = 90,
    Attack = 91,
    AttemptedToDropAllIntoFire = 92,
    AttemptedToPlaceAllOnGround = 93,
    AttemptToSoothBurnInWater = 94,
    AttemptToTill = 95,
    AutoActionsNoItem = 96,
    BadlyBurnedLostHealth = 97,
    BarteringSkillsProvided = 98,
    BasedOnItSeems = 99,
    BeenPoisoned = 100,
    BeginSleeping = 101,
    BeginUsingBoat = 102,
    BestForCrafting = 103,
    BleedingHasStopped = 104,
    BleedingProfusely = 105,
    BleedingToDeathLostHealth = 106,
    BookBlank = 107,
    BookContains = 108,
    BookCrumbles = 109,
    BookDiagrams = 110,
    BookEmpty = 111,
    BookNothing = 112,
    BookOpen = 113,
    BookScribbles = 114,
    BothEffectiveIneffective = 115,
    BothHands = 116,
    BrokeIntoPieces = 117,
    BrokenOnImpact = 118,
    BrokenWhileFiring = 119,
    Build = 120,
    Burned = 121,
    CannotAddAnyMoreFuel = 122,
    CannotBePerformedOverWater = 123,
    CannotBePreserved = 124,
    CannotBeRefined = 125,
    CannotBeRefinedReinforcementNeeded = 126,
    CannotBeReinforced = 127,
    CannotBeRepaired = 128,
    CannotBeTamed = 129,
    CannotBeTamedInThisWay = 130,
    CannotBuildHere = 131,
    CannotDoThatHere = 132,
    CannotDropHere = 133,
    CannotEquipThatThere = 134,
    CannotFishFor = 135,
    CannotHere = 136,
    CannotInWater = 137,
    CannotLeave = 138,
    CannotPickUpWhileLit = 139,
    CannotPickUpWithItemsInside = 140,
    CannotPlaceContainerInItself = 141,
    CannotPlaceHere = 142,
    CannotPlaceThatFromHere = 143,
    CannotPlaceThatHere = 144,
    CannotPlantHereTilled = 145,
    CannotRepairWhileLit = 146,
    CannotRestHere = 147,
    CannotSeeHere = 148,
    CannotSleepHere = 149,
    CannotStartFireHere = 150,
    CannotToTellTime = 151,
    CannotUseCommand = 152,
    CannotWhenProtected = 153,
    CannotWhenProtectedDangerousAction = 154,
    CarryingTooMuchWeight = 155,
    CarvedUpCorpse = 156,
    Carving = 157,
    CastYourLine = 158,
    Category = 159,
    CaughtFish = 160,
    ChatBanCommand = 161,
    ChatBannedCommand = 162,
    ChatCommandsCommand = 163,
    ChatCommandsCommandCommand = 164,
    ChatPingCommand = 165,
    ChatPlayerMessage = 166,
    ChatPlayersCommand = 167,
    ChatServerMessage = 168,
    ChatUnbanCommand = 169,
    ChatUnknownCommand = 170,
    Chop = 171,
    Chopping = 172,
    ClearedBlood = 173,
    ClearMessages = 174,
    Clockwise = 175,
    CloseContainer = 176,
    CloseDoor = 177,
    CloseToBeingDestroyed = 178,
    CollectObjectWithHands = 179,
    Consumed = 180,
    Container = 181,
    ContextMenuActionHotkey = 182,
    ContextMenuHelpActions = 183,
    ContextMenuHelpAutoActions = 184,
    ContextMenuHelpItems = 185,
    CopiedMap = 186,
    CopySelectedText = 187,
    CopyX = 188,
    CorpseOf = 189,
    CorpseOfNamed = 190,
    CouldNotDecipher = 191,
    Counterclockwise = 192,
    Craft = 193,
    Crafted = 194,
    Crafts = 195,
    CreatureAngered = 196,
    CreatureAppears = 197,
    CreatureAppeased = 198,
    CreatureExcrement = 199,
    CreatureHappinessHigh = 200,
    CreatureHappinessLow = 201,
    CreatureHappinessLowest = 202,
    CreatureHappinessNormal = 203,
    CreatureIdolAttractedCreature = 204,
    CreatureUntamed = 205,
    CuredYourPoison = 206,
    Cut = 207,
    DamageAppeared = 208,
    DamagedByPouring = 209,
    DayQuarter1 = 210,
    DayQuarter2 = 211,
    DayQuarter3 = 212,
    DayQuarter4 = 213,
    DealtNoDamageToYou = 214,
    DeathBy = 215,
    DeathByBleeding = 216,
    DeathByBurning = 217,
    DeathByChallengeWinner = 218,
    DeathByConsumption = 219,
    DeathByDrowning = 220,
    DeathByExhaustion = 221,
    DeathByFistByPlayer = 222,
    DeathByFrostbite = 223,
    DeathByMalnutrition = 224,
    DeathByPoison = 225,
    DeathBySteppingOn = 226,
    DeathByTrap = 227,
    DeathByWeaponByPlayer = 228,
    Decay = 229,
    DestroyedFromUse = 230,
    DetachContainer = 231,
    Dexterity = 232,
    DexterityIncreasing = 233,
    DidNotSeemToBeHurting = 234,
    Dig = 235,
    DigAway = 236,
    Digging = 237,
    DigWithHands = 238,
    Disabled = 239,
    Disassemble = 240,
    DisassembleAction = 241,
    Disassembling = 242,
    DiscoveredCaveEntrance = 243,
    DiscoveredInTheBottle = 244,
    DiscoveredLavaPassage = 245,
    Dismantle = 246,
    DismantleAction = 247,
    DismantleLabel = 248,
    Dismantling = 249,
    DismantlingRequires = 250,
    DisplacedPuddles = 251,
    DoNotHaveTreasureMaps = 252,
    DoNotProduceAnyResources = 253,
    DoodadCauseStatus = 254,
    DoodadGroupTier = 255,
    DrewSurroundings = 256,
    Drink = 257,
    Drop = 258,
    DropAll = 259,
    DropAllOfSameQuality = 260,
    DroppedIntoDepths = 261,
    DroppedIntoFire = 262,
    DroppedIntoTheVoid = 263,
    DueToDehydration = 264,
    DueToStarvation = 265,
    DugTreasureOut = 266,
    DumpContentsOfContainerInInventory = 267,
    Durability = 268,
    DyingOfDehydration = 269,
    EarnedMilestone = 270,
    East = 271,
    EastNortheast = 272,
    EastSoutheast = 273,
    Effective = 274,
    Enabled = 275,
    Enchant = 276,
    EquipmentPreventedStatusEffects = 277,
    EquipTo = 278,
    ErrorHasOccured = 279,
    ExtinguishedFire = 280,
    ExtinguishedLightSource = 281,
    FailedToAddFuelToTorch = 282,
    FailedToCatchFish = 283,
    FailedToCauseDamage = 284,
    FailedToCauseYouDamage = 285,
    FailedToCopy = 286,
    FailedToDraw = 287,
    FailedToEnchant = 288,
    FailedToIgniteTorch = 289,
    FailedToPickLock = 290,
    FailedToPlant = 291,
    FailedToPreserve = 292,
    FailedToRefine = 293,
    FailedToReinforce = 294,
    FailedToRepair = 295,
    FailedToStartFire = 296,
    FailedToTame = 297,
    FailedToTransmogrify = 298,
    FarOffLands = 299,
    FeltBurningPainLostHealth = 300,
    FeltFrostbitePainLostHealth = 301,
    FewMinutes = 302,
    Filled = 303,
    FilledFrom = 304,
    FireAroundYouIsWarm = 305,
    FiredIntoObstacle = 306,
    FireOverflowed = 307,
    FireOverflowedFireElemental = 308,
    FireSource = 309,
    FishingWithNoBait = 310,
    Floating = 311,
    FreshWater = 312,
    FromTheStill = 313,
    Fuel = 314,
    FuelIsRequired = 315,
    FullyDecodedMap = 316,
    GameHasBeenSavedIsTakingUpMB = 317,
    Gather = 318,
    GatherDestroy = 319,
    Gathering = 320,
    GatherWithHands = 321,
    GhostNoActions = 322,
    GhostOf = 323,
    GoatHasNoMilk = 324,
    GrabAll = 325,
    Group = 326,
    HackAway = 327,
    HandProtectionPreventedInjury = 328,
    HandsNotEffectiveForDigging = 329,
    Harvest = 330,
    Harvesting = 331,
    HarvestWithHands = 332,
    HasBeenHurtByATrap = 333,
    HasDecayed = 334,
    HasHitYouForDamage = 335,
    HasNoEffect = 336,
    HasSetTrapOffNoDamage = 337,
    HasSplit = 338,
    Help = 339,
    HelpGrow = 340,
    Here = 341,
    Hints = 342,
    HintsDisabled = 343,
    HintsEnabled = 344,
    Hitch = 345,
    HitchAttempt = 346,
    HitchCreature = 347,
    HitchDisabled = 348,
    HitchInUse = 349,
    HitchUnhitch = 350,
    HitForDamage = 351,
    HitYouForDamage = 352,
    Hour = 353,
    Hours = 354,
    HurtHandsHittingWithoutWeapons = 355,
    HurtHandsWithNoTool = 356,
    Ignite = 357,
    IgnitedTorch = 358,
    Ineffective = 359,
    InjuredFromTrap = 360,
    InNeedOfRepair = 361,
    InspectItem = 362,
    InteractingWithHasInjuredYouForDamage = 363,
    Inventory = 364,
    IsInTheWayOfPickingUp = 365,
    It = 366,
    ItAlsoReveals = 367,
    ItAlsoSeems = 368,
    ItContains = 369,
    ItemFromWater = 370,
    JoinedAServer = 371,
    Jump = 372,
    Killed = 373,
    KnowledgeHasIncreased = 374,
    LabelActionTier = 375,
    LabelAdditionalRequirements = 376,
    LabelAttackFromTactics = 377,
    LabelBase = 378,
    LabelCanIncrease = 379,
    LabelCraftingReputation = 380,
    LabelCraftingRequires = 381,
    LabelCraftingSkillReputation = 382,
    LabelDecay = 383,
    LabelDefense = 384,
    LabelDismantlingRequires = 385,
    LabelDurability = 386,
    LabelEquip = 387,
    LabelGrouping = 388,
    LabelHave = 389,
    LabelLeftHandAttack = 390,
    LabelLevel = 391,
    LabelLightSourceWhenLit = 392,
    LabelOnCure = 393,
    LabelOnDrink = 394,
    LabelOnEat = 395,
    LabelOnEquip = 396,
    LabelOnHeal = 397,
    LabelOnOtherHeal = 398,
    LabelPreservationRate = 399,
    LabelProtected = 400,
    LabelRange = 401,
    LabelRanged = 402,
    LabelRangedAttack = 403,
    LabelRangedDamage = 404,
    LabelReputationImpact = 405,
    LabelResists = 406,
    LabelRightHandAttack = 407,
    LabelSkill = 408,
    LabelStokeFireStrength = 409,
    LabelThrowDamageType = 410,
    LabelTrapDamage = 411,
    LabelUse = 412,
    LabelUses = 413,
    LabelVulnerabilities = 414,
    LabelWeight = 415,
    LabelWeightCapacity = 416,
    LabelWeightReduction = 417,
    LabelWorth = 418,
    LastPlaceYouLeftOff = 419,
    LearnedHowToCreate = 420,
    LeftHand = 421,
    LikelyFailures = 422,
    Limited = 423,
    Magical = 424,
    MagicalItemDamage = 425,
    MapDestroyed = 426,
    MapNearlyDestroyed = 427,
    MapNotOfThisArea = 428,
    MaterialsDestroyed = 429,
    MerchantAlreadyTradedItem = 430,
    MessageOfTheDay = 431,
    Metabolism = 432,
    MetabolismSlowed = 433,
    Milk = 434,
    Mine = 435,
    Mining = 436,
    MissedWith = 437,
    MissedYouWith = 438,
    MoveAllOfSameQualityToFacingContainer = 439,
    MoveAllOfSameQualityToInventory = 440,
    MoveAllOfSameQualityToLastOpenedContainer = 441,
    MoveAllOfSameQualityToOpenedContainer = 442,
    MoveAllToFacingContainer = 443,
    MoveAllToInventory = 444,
    MoveAllToLastOpenedContainer = 445,
    MoveAllToOpenedContainer = 446,
    MovedItem = 447,
    MoveOverTrapButDoNotSetOff = 448,
    MoveToFacingContainer = 449,
    MoveToInventory = 450,
    MoveToLastOpenedContainer = 451,
    MoveToOpenedContainer = 452,
    MultiplayerGamePaused = 453,
    MultiplayerGameResumed = 454,
    MultiplayerPlayerConnected = 455,
    MultiplayerPlayerDied = 456,
    MultiplayerPlayerDisconnected = 457,
    MultiplayerPlayerJoined = 458,
    MustBeEquippedToIgnite = 459,
    Mysteriously = 460,
    Name = 461,
    NearlyBurnedEquipmentProtectedYou = 462,
    NeedFreeHandToShoot = 463,
    NeedToEquipToShoot = 464,
    NeedToStartTravelsOutside = 465,
    NeedWaterForBoat = 466,
    Negatively = 467,
    NightQuarter1 = 468,
    NightQuarter2 = 469,
    NightQuarter3 = 470,
    NightQuarter4 = 471,
    No = 472,
    NoAmmunitionForThatWeapon = 473,
    NoFireToStokeWith = 474,
    NoFishAtLocation = 475,
    NoGroundWater = 476,
    NoInkToDrawMap = 477,
    NoKindlingOrFuelItemsToStartFire = 478,
    NoKindlingToStartFire = 479,
    NoLongerFeelPainOfBeingBurned = 480,
    NoLongerFeelPainOfBeingFrostbitten = 481,
    NoLongerHostile = 482,
    NoMoreRoomInContainer = 483,
    NoPaperToDrawMap = 484,
    NoRequiredItemToFireWeapon = 485,
    NoReturnWithoutCompletingChallenges = 486,
    NoRoomForImprovement = 487,
    NoRoomToDrop = 488,
    North = 489,
    Northeast = 490,
    NorthNortheast = 491,
    NorthNorthwest = 492,
    Northwest = 493,
    NotAvailable = 494,
    NotEnoughPurifiedWaterYet = 495,
    NotEnoughTreasureToReturn = 496,
    NotFacingCreatureToOfferThisTo = 497,
    NotFacingLockedObject = 498,
    NotFacingOtherToHeal = 499,
    NotFacingValidItem = 500,
    NothingHereToButcher = 501,
    NothingHereToFill = 502,
    NothingHereToGrasp = 503,
    NothingToGetFromThis = 504,
    NothingToHarvestFromThisGather = 505,
    NothingToSmother = 506,
    NothingUsefulToHarvestYet = 507,
    NoTinderToStartFire = 508,
    NotSuitableToPlant = 509,
    NoWaterInStill = 510,
    NPCStartingDialog1 = 511,
    NPCStartingDialog2 = 512,
    NPCStartingDialog3 = 513,
    NPCStartingDialog4 = 514,
    NPCWelcome = 515,
    NPCWelcomeCredit = 516,
    NumberEight = 517,
    NumberFive = 518,
    NumberFour = 519,
    NumberNine = 520,
    NumberOne = 521,
    NumberSeven = 522,
    NumberSix = 523,
    NumberTen = 524,
    NumberThree = 525,
    NumberTwo = 526,
    ObjectIsLocked = 527,
    ObjectIsLockedAttemptToBreakIt = 528,
    Offer = 529,
    OfferAberrantFail = 530,
    OfferAberrantFailButTamed = 531,
    OpenCloseContainer = 532,
    OpenCloseDoor = 533,
    OpenDoor = 534,
    OverEatingLostStamina = 535,
    OverHydratingLostStamina = 536,
    Pack = 537,
    PaperTurnedToMush = 538,
    ParryTheBlow = 539,
    PartiallyDecodedMap = 540,
    PenultimateAnd = 541,
    Pet = 542,
    PetCreature = 543,
    PickAway = 544,
    PickupAllItems = 545,
    PickupExcrementWithHands = 546,
    PickupItem = 547,
    Place = 548,
    PlacedOnGround = 549,
    Plant = 550,
    PlantCouldBeHarvested = 551,
    PlantedInGround = 552,
    PlantGatheringWillDestroy = 553,
    PlantHasResourcesToGather = 554,
    PlantHasResourcesToHarvest = 555,
    PlantHighlyFertile = 556,
    Planting = 557,
    PlantIsBare = 558,
    PlantIsFertile = 559,
    PlantIsInStage = 560,
    PlantIsNotFertile = 561,
    PlantNotReadyToHarvest = 562,
    PlantReadyToGather = 563,
    PlantReadyToGatherNotMaximal = 564,
    PlantReadyToHarvest = 565,
    PlantReadyToHarvestNotMaximal = 566,
    Player = 567,
    PlayerHas = 568,
    PlayerHasCompletedChallengeRequirement = 569,
    PlayerHasWonChallenge = 570,
    Poisoned = 571,
    PoisonedLostHealth = 572,
    PoisonWorkedItsCourse = 573,
    Positively = 574,
    PouredOut = 575,
    PouredOutOnYourself = 576,
    PouredWaterIntoStill = 577,
    PourHarmedPlant = 578,
    PourHealedPlant = 579,
    PourHealedPlantFully = 580,
    PourHealedPlantPartially = 581,
    PourIncreasedFertility = 582,
    Pouring = 583,
    Prepare = 584,
    Prepared = 585,
    Preserve = 586,
    PreservedFood = 587,
    PurifiedWaterInStill = 588,
    Quality = 589,
    RandomEventsFire = 590,
    Recent = 591,
    ReduceLength = 592,
    Refine = 593,
    RefusedToBeTamed = 594,
    Reinforce = 595,
    Release = 596,
    RemoveAction = 597,
    RemoveFromQuickslot = 598,
    Repair = 599,
    ReputationDecreased = 600,
    ReputationIncreased = 601,
    ReputationUpdate = 602,
    RequiredForDisassembleLabel = 603,
    RequiredForDisassembly = 604,
    RequiresFireToBeLit = 605,
    RequiresYouFacingFireSource = 606,
    RequiresYouToBeAround = 607,
    Resistant = 608,
    ResistOrVuln = 609,
    ResistOrVulnAll = 610,
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
    RestLongTime = 621,
    RestModerateTime = 622,
    RestOnGround = 623,
    RestShortTime = 624,
    RestTime = 625,
    ReturnedToCivilization = 626,
    ReturningToCivilizationSetOffAgain = 627,
    ReturnsToLife = 628,
    Reveals = 629,
    RevealsEntityAppearsHurt = 630,
    RevealsEntityAppearsUnharmed = 631,
    RevealsEntityAppearsVeryHurt = 632,
    RevealsEntityIsAtPercentHealth = 633,
    RevealsEntityIsInjured = 634,
    RevealsEntityIsMostlyUninjured = 635,
    RevealsEntityIsOnTheVergeOfDeath = 636,
    RevealsEntityIsSeverelyInjured = 637,
    RevealsEntityIsUninjured = 638,
    RevealsEntitySeemsInjured = 639,
    RevealsEntitySeemsUninjured = 640,
    RevealsNumberOfResistancesAndVulnerabilities = 641,
    RevealsResistancesAndVulnerabilities = 642,
    RevealsSomeResistancesAndVulnerabilities = 643,
    Reverse = 644,
    RightHand = 645,
    Sailing = 646,
    ScrollMaster = 647,
    ScrollProvidedNoUsefulInsight = 648,
    Seawater = 649,
    SeemsToHaveDrawnEnergy = 650,
    SetTrapOffButNoDamage = 651,
    SetUp = 652,
    ShadowInTheWater = 653,
    Skill = 654,
    SkillHasRaised = 655,
    Skills = 656,
    Sleep = 657,
    Sleeping = 658,
    Slept = 659,
    SlitherSuckerConstricts = 660,
    SlitherSuckerJumpedOnHead = 661,
    SomethingInTheWayOf = 662,
    SomethingInTheWayOfButcherFirst = 663,
    SomethingInTheWayOfFire = 664,
    SomethingInTheWayOfFishing = 665,
    SomethingInTheWayOfPerforming = 666,
    SomethingInTheWayOfPlacing = 667,
    SomethingInTheWayOfPlanting = 668,
    SomethingInWayOfClosingDoor = 669,
    SoothedTheirBurnInjuries = 670,
    SoothedYourBurnInjuries = 671,
    Sort = 672,
    SortedByBestCraftingConsumables = 673,
    SortedByBestCraftingRequirements = 674,
    SortedByCategory = 675,
    SortedByDecay = 676,
    SortedByDurability = 677,
    SortedByGroup = 678,
    SortedByMagical = 679,
    SortedByName = 680,
    SortedByQuality = 681,
    SortedByRecent = 682,
    SortedBySkill = 683,
    SortedByUnlockedTime = 684,
    SortedByWeight = 685,
    SortedByWorth = 686,
    South = 687,
    Southeast = 688,
    SouthSoutheast = 689,
    SouthSouthwest = 690,
    Southwest = 691,
    StaminaIsFull = 692,
    StartedFire = 693,
    StartTravelInWater = 694,
    StarvingToDeath = 695,
    StatAmount = 696,
    StatGained = 697,
    StatLost = 698,
    StatQuenched = 699,
    StatRegained = 700,
    StatSated = 701,
    SteppingOn = 702,
    StillHasNoWaterToPurify = 703,
    StirredUpClawWorm = 704,
    StirredUpCreature = 705,
    StoppedYourBleeding = 706,
    StopUsingBoat = 707,
    Strength = 708,
    StrengthIncreasing = 709,
    SummonedGuardiansByDiggingTreasure = 710,
    SummonedGuardiansByLockpicking = 711,
    SummonVoidDwellerItem = 712,
    SummonVoidDwellerRinging = 713,
    SummonVoidDwellerShiver = 714,
    SunNotBrightEnoughToStartFire = 715,
    Swimming = 716,
    TakenFromGroundBecomeTamed = 717,
    Tame = 718,
    TamedCreature = 719,
    TeleportBlocked = 720,
    Teleported = 721,
    ThanksBuying = 722,
    ThanksSelling = 723,
    TheCreature = 724,
    TheirFist = 725,
    ThePlant = 726,
    ThereIsNoContainerOnTheStill = 727,
    ThereIsNoSunToStartFire = 728,
    ThisCannotBeMilked = 729,
    Throw = 730,
    ThrownIntoDepths = 731,
    ThrownIntoObstacle = 732,
    ThrownIntoVoid = 733,
    Tier = 734,
    TierGroup = 735,
    Till = 736,
    Tilling = 737,
    TimeIs = 738,
    TimeIsDawn = 739,
    TimeIsDaytime = 740,
    TimeIsDusk = 741,
    TimeIsNighttime = 742,
    TimeIsSunrise = 743,
    TimeIsSunset = 744,
    ToDamageAChest = 745,
    ToFight = 746,
    TooDamaged = 747,
    TooExhaustedToJump = 748,
    Touching = 749,
    TradeBarterCreditForItem = 750,
    TradeItemForBarterCredit = 751,
    TradingWith = 752,
    TrampledFire = 753,
    TrampledIntoGround = 754,
    TrampleIntoGround = 755,
    Trampling = 756,
    TransmogrificationNotPossible = 757,
    Transmogrified = 758,
    Transmogrify = 759,
    TrapMissed = 760,
    TrapStoppedYou = 761,
    Traveling = 762,
    TreasureIsBlocked = 763,
    UnEquip = 764,
    UnEquipAll = 765,
    Unhitch = 766,
    UnhitchCreature = 767,
    Unknown = 768,
    UnknownItem = 769,
    Unlimited = 770,
    UnlockedChest = 771,
    UnlockedTime = 772,
    UnpurifiedFreshWater = 773,
    UnpurifiedWaterInStill = 774,
    UsingBareHands = 775,
    Vulnerable = 776,
    WaitUntilFireCooledToGetWater = 777,
    Water = 778,
    WaterGathering = 779,
    WaterPutOutFire = 780,
    Weight = 781,
    WellIsDry = 782,
    WellIsFull = 783,
    West = 784,
    WestNorthwest = 785,
    WestSouthwest = 786,
    WildGoatRefusedToBeMilked = 787,
    WillNotTrade = 788,
    WithYouSee = 789,
    WorkingYourselfIntoExhaustion = 790,
    WorkingYourselfIntoExhaustionAndDrowning = 791,
    Worth = 792,
    You = 793,
    YouApplied = 794,
    YouAte = 795,
    YouBeginResting = 796,
    YouCannotDoThatYet = 797,
    YouCanNowCombatTheTides = 798,
    YouCooledLava = 799,
    YouCrafted = 800,
    YouDied = 801,
    YouDoNotFindTreasureYet = 802,
    YouDrank = 803,
    YouDropTheTorch = 804,
    YouEnchant = 805,
    YouEquip = 806,
    YouFailedTo = 807,
    YouFailedToExtinguishedFireFully = 808,
    YouFailedToHeal = 809,
    YouFailedToHealOther = 810,
    YouFire = 811,
    YouGathered = 812,
    YouGatheredAndDropped = 813,
    YouHarvested = 814,
    YouHarvestedAndDropped = 815,
    YouHave = 816,
    YouHaveAlreadyLearned = 817,
    YouHaveDied = 818,
    YouHaveEnabledDisabled = 819,
    YouHaveHealedOther = 820,
    YouHaveKilled = 821,
    YouHaveReleased = 822,
    YouHaveTamed = 823,
    YouNeedMoreCredit = 824,
    YouNeedXToY = 825,
    YouNoticeBarren = 826,
    YouNoticeBecomeEnraged = 827,
    YouNoticeDying = 828,
    YouNoticeFertilityDecreasing = 829,
    YouNoticeFertilityIncreasing = 830,
    YouNoticeGrowing = 831,
    YouNoticeLavaCooling = 832,
    YouNoticeLavaHardening = 833,
    YouNoticePerish = 834,
    YouNoticePlantDamage = 835,
    YouNoticePlantRegenerated = 836,
    YouNoticeRegrowing = 837,
    YouNoticeStumbleInjureItself = 838,
    YouNoticeTakeFromGround = 839,
    YouNoticeWoundsClosing = 840,
    YouNoticeZombieHorde = 841,
    YouOfferedToCreature = 842,
    YouOpen = 843,
    YouPacked = 844,
    YouPickedUp = 845,
    YouRefine = 846,
    YouReinforce = 847,
    YouRepair = 848,
    YouReturnFromCivilizationWith = 849,
    YourFist = 850,
    YourHands = 851,
    YourHighSkill = 852,
    YourInventory = 853,
    YourIsland = 854,
    YourLowSkill = 855,
    YourModerateSkill = 856,
    YourRubbingNoEffect = 857,
    YouRub = 858,
    YouSee = 859,
    YouSeeALivingMushroomSpore = 860,
    YouSeeAnAberrant = 861,
    YouSeeASkeletonCollapse = 862,
    YouSeeASlimeCombine = 863,
    YouSeeAZombieBleeding = 864,
    YouSeeCoolDown = 865,
    YouSeeDrop = 866,
    YouSeeEngulfFire = 867,
    YouSeeFireSpread = 868,
    YouSeeHelpingPlant = 869,
    YouSeeLay = 870,
    YouSeeLayingTrap = 871,
    YouSeeSpewLava = 872,
    YouSeeSpitAcid = 873,
    YouSeeSpringForth = 874,
    YouSeeSummon = 875,
    YouSeeSwampFlood = 876,
    YouSeeTrampling = 877,
    YouSetTheTrapOff = 878,
    YouStokeTheFireElemental = 879,
    YouThrew = 880,
    YouTilled = 881,
    YouUnequip = 882,
    YouUsed = 883,
    YouWhileTraveling = 884
}
export default Message;