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
    MultipleQuickslots = 459,
    MustBeEquippedToIgnite = 460,
    Mysteriously = 461,
    Name = 462,
    NearlyBurnedEquipmentProtectedYou = 463,
    NeedFreeHandToShoot = 464,
    NeedToEquipToShoot = 465,
    NeedToStartTravelsOutside = 466,
    NeedWaterForBoat = 467,
    Negatively = 468,
    NightQuarter1 = 469,
    NightQuarter2 = 470,
    NightQuarter3 = 471,
    NightQuarter4 = 472,
    No = 473,
    NoAmmunitionForThatWeapon = 474,
    NoFireToStokeWith = 475,
    NoFishAtLocation = 476,
    NoGroundWater = 477,
    NoInkToDrawMap = 478,
    NoKindlingOrFuelItemsToStartFire = 479,
    NoKindlingToStartFire = 480,
    NoLongerFeelPainOfBeingBurned = 481,
    NoLongerFeelPainOfBeingFrostbitten = 482,
    NoLongerHostile = 483,
    NoMoreRoomInContainer = 484,
    NoPaperToDrawMap = 485,
    NoRequiredItemToFireWeapon = 486,
    NoReturnWithoutCompletingChallenges = 487,
    NoRoomForImprovement = 488,
    NoRoomToDrop = 489,
    North = 490,
    Northeast = 491,
    NorthNortheast = 492,
    NorthNorthwest = 493,
    Northwest = 494,
    NotAvailable = 495,
    NotEnoughPurifiedWaterYet = 496,
    NotEnoughTreasureToReturn = 497,
    NotFacingCreatureToOfferThisTo = 498,
    NotFacingLockedObject = 499,
    NotFacingOtherToHeal = 500,
    NotFacingValidItem = 501,
    NothingHereToButcher = 502,
    NothingHereToFill = 503,
    NothingHereToGrasp = 504,
    NothingToGetFromThis = 505,
    NothingToHarvestFromThisGather = 506,
    NothingToSmother = 507,
    NothingUsefulToHarvestYet = 508,
    NoTinderToStartFire = 509,
    NotSuitableToPlant = 510,
    NoWaterInStill = 511,
    NPCStartingDialog1 = 512,
    NPCStartingDialog2 = 513,
    NPCStartingDialog3 = 514,
    NPCStartingDialog4 = 515,
    NPCWelcome = 516,
    NPCWelcomeCredit = 517,
    NumberEight = 518,
    NumberFive = 519,
    NumberFour = 520,
    NumberNine = 521,
    NumberOne = 522,
    NumberSeven = 523,
    NumberSix = 524,
    NumberTen = 525,
    NumberThree = 526,
    NumberTwo = 527,
    ObjectIsLocked = 528,
    ObjectIsLockedAttemptToBreakIt = 529,
    Offer = 530,
    OfferAberrantFail = 531,
    OfferAberrantFailButTamed = 532,
    OpenCloseContainer = 533,
    OpenCloseDoor = 534,
    OpenDoor = 535,
    OverEatingLostStamina = 536,
    OverHydratingLostStamina = 537,
    Pack = 538,
    PaperTurnedToMush = 539,
    ParryTheBlow = 540,
    PartiallyDecodedMap = 541,
    PenultimateAnd = 542,
    Pet = 543,
    PetCreature = 544,
    PickAway = 545,
    PickupAllItems = 546,
    PickupExcrementWithHands = 547,
    PickupItem = 548,
    Place = 549,
    PlacedOnGround = 550,
    Plant = 551,
    PlantCouldBeHarvested = 552,
    PlantedInGround = 553,
    PlantGatheringWillDestroy = 554,
    PlantHasResourcesToGather = 555,
    PlantHasResourcesToHarvest = 556,
    PlantHighlyFertile = 557,
    Planting = 558,
    PlantIsBare = 559,
    PlantIsFertile = 560,
    PlantIsInStage = 561,
    PlantIsNotFertile = 562,
    PlantNotReadyToHarvest = 563,
    PlantReadyToGather = 564,
    PlantReadyToGatherNotMaximal = 565,
    PlantReadyToHarvest = 566,
    PlantReadyToHarvestNotMaximal = 567,
    Player = 568,
    PlayerHas = 569,
    PlayerHasCompletedChallengeRequirement = 570,
    PlayerHasWonChallenge = 571,
    Poisoned = 572,
    PoisonedLostHealth = 573,
    PoisonWorkedItsCourse = 574,
    Positively = 575,
    PouredOut = 576,
    PouredOutOnYourself = 577,
    PouredWaterIntoStill = 578,
    PourHarmedPlant = 579,
    PourHealedPlant = 580,
    PourHealedPlantFully = 581,
    PourHealedPlantPartially = 582,
    PourIncreasedFertility = 583,
    Pouring = 584,
    Prepare = 585,
    Prepared = 586,
    Preserve = 587,
    PreservedFood = 588,
    PurifiedWaterInStill = 589,
    Quality = 590,
    RandomEventsFire = 591,
    Recent = 592,
    ReduceLength = 593,
    Refine = 594,
    RefusedToBeTamed = 595,
    Reinforce = 596,
    Release = 597,
    RemoveAction = 598,
    RemoveFromQuickslot = 599,
    Repair = 600,
    ReputationDecreased = 601,
    ReputationIncreased = 602,
    ReputationUpdate = 603,
    RequiredForDisassembleLabel = 604,
    RequiredForDisassembly = 605,
    RequiresFireToBeLit = 606,
    RequiresYouFacingFireSource = 607,
    RequiresYouToBeAround = 608,
    Resistant = 609,
    ResistOrVuln = 610,
    ResistOrVulnAll = 611,
    Rest = 612,
    Rested = 613,
    Resting = 614,
    RestingOnGroundNotEffective = 615,
    RestInterrupted = 616,
    RestInterruptedDamage = 617,
    RestInterruptedDying = 618,
    RestInterruptedLoudNoise = 619,
    RestInterruptedPain = 620,
    RestInterruptedStirring = 621,
    RestLongTime = 622,
    RestModerateTime = 623,
    RestOnGround = 624,
    RestShortTime = 625,
    RestTime = 626,
    ReturnedToCivilization = 627,
    ReturningToCivilizationSetOffAgain = 628,
    ReturnsToLife = 629,
    Reveals = 630,
    RevealsEntityAppearsHurt = 631,
    RevealsEntityAppearsUnharmed = 632,
    RevealsEntityAppearsVeryHurt = 633,
    RevealsEntityIsAtPercentHealth = 634,
    RevealsEntityIsInjured = 635,
    RevealsEntityIsMostlyUninjured = 636,
    RevealsEntityIsOnTheVergeOfDeath = 637,
    RevealsEntityIsSeverelyInjured = 638,
    RevealsEntityIsUninjured = 639,
    RevealsEntitySeemsInjured = 640,
    RevealsEntitySeemsUninjured = 641,
    RevealsNumberOfResistancesAndVulnerabilities = 642,
    RevealsResistancesAndVulnerabilities = 643,
    RevealsSomeResistancesAndVulnerabilities = 644,
    Reverse = 645,
    RightHand = 646,
    Sailing = 647,
    ScrollMaster = 648,
    ScrollProvidedNoUsefulInsight = 649,
    Seawater = 650,
    SeemsToHaveDrawnEnergy = 651,
    SetTrapOffButNoDamage = 652,
    SetUp = 653,
    ShadowInTheWater = 654,
    Skill = 655,
    SkillHasRaised = 656,
    Skills = 657,
    Sleep = 658,
    Sleeping = 659,
    Slept = 660,
    SlitherSuckerConstricts = 661,
    SlitherSuckerJumpedOnHead = 662,
    SomethingInTheWayOf = 663,
    SomethingInTheWayOfButcherFirst = 664,
    SomethingInTheWayOfFire = 665,
    SomethingInTheWayOfFishing = 666,
    SomethingInTheWayOfPerforming = 667,
    SomethingInTheWayOfPlacing = 668,
    SomethingInTheWayOfPlanting = 669,
    SomethingInWayOfClosingDoor = 670,
    SoothedTheirBurnInjuries = 671,
    SoothedYourBurnInjuries = 672,
    Sort = 673,
    SortedByBestCraftingConsumables = 674,
    SortedByBestCraftingRequirements = 675,
    SortedByCategory = 676,
    SortedByDecay = 677,
    SortedByDurability = 678,
    SortedByGroup = 679,
    SortedByMagical = 680,
    SortedByName = 681,
    SortedByQuality = 682,
    SortedByRecent = 683,
    SortedBySkill = 684,
    SortedByUnlockedTime = 685,
    SortedByWeight = 686,
    SortedByWorth = 687,
    South = 688,
    Southeast = 689,
    SouthSoutheast = 690,
    SouthSouthwest = 691,
    Southwest = 692,
    StaminaIsFull = 693,
    StartedFire = 694,
    StartTravelInWater = 695,
    StarvingToDeath = 696,
    StatAmount = 697,
    StatGained = 698,
    StatLost = 699,
    StatQuenched = 700,
    StatRegained = 701,
    StatSated = 702,
    SteppingOn = 703,
    StillHasNoWaterToPurify = 704,
    StirredUpClawWorm = 705,
    StirredUpCreature = 706,
    DryadSprouted = 707,
    StoppedYourBleeding = 708,
    StopUsingBoat = 709,
    Strength = 710,
    StrengthIncreasing = 711,
    SummonedGuardiansByDiggingTreasure = 712,
    SummonedGuardiansByLockpicking = 713,
    SummonVoidDwellerItem = 714,
    SummonVoidDwellerRinging = 715,
    SummonVoidDwellerShiver = 716,
    SunNotBrightEnoughToStartFire = 717,
    Swimming = 718,
    TakenFromGroundBecomeTamed = 719,
    Tame = 720,
    TamedCreature = 721,
    TeleportBlocked = 722,
    Teleported = 723,
    ThanksBuying = 724,
    ThanksSelling = 725,
    TheCreature = 726,
    TheirFist = 727,
    ThePlant = 728,
    ThereIsNoContainerOnTheStill = 729,
    ThereIsNoSunToStartFire = 730,
    ThisCannotBeMilked = 731,
    Throw = 732,
    ThrownIntoDepths = 733,
    ThrownIntoObstacle = 734,
    ThrownIntoVoid = 735,
    Tier = 736,
    TierGroup = 737,
    Till = 738,
    Tilling = 739,
    TimeIs = 740,
    TimeIsDawn = 741,
    TimeIsDaytime = 742,
    TimeIsDusk = 743,
    TimeIsNighttime = 744,
    TimeIsSunrise = 745,
    TimeIsSunset = 746,
    ToDamageAChest = 747,
    ToFight = 748,
    TooDamaged = 749,
    TooExhaustedToJump = 750,
    Touching = 751,
    TradeBarterCreditForItem = 752,
    TradeItemForBarterCredit = 753,
    TradingWith = 754,
    TrampledFire = 755,
    TrampledIntoGround = 756,
    TrampleIntoGround = 757,
    Trampling = 758,
    TransmogrificationNotPossible = 759,
    Transmogrified = 760,
    Transmogrify = 761,
    TrapMissed = 762,
    TrapStoppedYou = 763,
    Traveling = 764,
    TreasureIsBlocked = 765,
    UnEquip = 766,
    UnEquipAll = 767,
    Unhitch = 768,
    UnhitchCreature = 769,
    Unknown = 770,
    UnknownItem = 771,
    Unlimited = 772,
    UnlockedChest = 773,
    UnlockedTime = 774,
    UnpurifiedFreshWater = 775,
    UnpurifiedWaterInStill = 776,
    UsingBareHands = 777,
    Vulnerable = 778,
    WaitUntilFireCooledToGetWater = 779,
    Water = 780,
    WaterGathering = 781,
    WaterPutOutFire = 782,
    Weight = 783,
    WellIsDry = 784,
    WellIsFull = 785,
    West = 786,
    WestNorthwest = 787,
    WestSouthwest = 788,
    WildGoatRefusedToBeMilked = 789,
    WillNotTrade = 790,
    WithYouSee = 791,
    WorkingYourselfIntoExhaustion = 792,
    WorkingYourselfIntoExhaustionAndDrowning = 793,
    Worth = 794,
    You = 795,
    YouApplied = 796,
    YouAte = 797,
    YouBeginResting = 798,
    YouCannotDoThatYet = 799,
    YouCanNowCombatTheTides = 800,
    YouCooledLava = 801,
    YouCrafted = 802,
    YouDied = 803,
    YouDoNotFindTreasureYet = 804,
    YouDrank = 805,
    YouDropTheTorch = 806,
    YouEnchant = 807,
    YouEquip = 808,
    YouFailedTo = 809,
    YouFailedToExtinguishedFireFully = 810,
    YouFailedToHeal = 811,
    YouFailedToHealOther = 812,
    YouFire = 813,
    YouGathered = 814,
    YouGatheredAndDropped = 815,
    YouHarvested = 816,
    YouHarvestedAndDropped = 817,
    YouHave = 818,
    YouHaveAlreadyLearned = 819,
    YouHaveDied = 820,
    YouHaveEnabledDisabled = 821,
    YouHaveHealedOther = 822,
    YouHaveKilled = 823,
    YouHaveReleased = 824,
    YouHaveTamed = 825,
    YouNeedMoreCredit = 826,
    YouNeedXToY = 827,
    YouNoticeBarren = 828,
    YouNoticeBecomeEnraged = 829,
    YouNoticeDying = 830,
    YouNoticeFertilityDecreasing = 831,
    YouNoticeFertilityIncreasing = 832,
    YouNoticeGrowing = 833,
    YouNoticeLavaCooling = 834,
    YouNoticeLavaHardening = 835,
    YouNoticePerish = 836,
    YouNoticePlantDamage = 837,
    YouNoticePlantRegenerated = 838,
    YouNoticeRegrowing = 839,
    YouNoticeStumbleInjureItself = 840,
    YouNoticeTakeFromGround = 841,
    YouNoticeWoundsClosing = 842,
    YouNoticeZombieHorde = 843,
    YouOfferedToCreature = 844,
    YouOpen = 845,
    YouPacked = 846,
    YouPickedUp = 847,
    YouRefine = 848,
    YouReinforce = 849,
    YouRepair = 850,
    YouReturnFromCivilizationWith = 851,
    YourFist = 852,
    YourHands = 853,
    YourHighSkill = 854,
    YourInventory = 855,
    YourIsland = 856,
    YourLowSkill = 857,
    YourModerateSkill = 858,
    YourRubbingNoEffect = 859,
    YouRub = 860,
    YouSee = 861,
    YouSeeALivingMushroomSpore = 862,
    YouSeeAnAberrant = 863,
    YouSeeASkeletonCollapse = 864,
    YouSeeASlimeCombine = 865,
    YouSeeAZombieBleeding = 866,
    YouSeeCoolDown = 867,
    YouSeeDrop = 868,
    YouSeeEngulfFire = 869,
    YouSeeFireSpread = 870,
    YouSeeHelpingPlant = 871,
    YouSeeLay = 872,
    YouSeeLayingTrap = 873,
    YouSeeSpewLava = 874,
    YouSeeSpitAcid = 875,
    YouSeeSpringForth = 876,
    YouSeeSummon = 877,
    YouSeeSwampFlood = 878,
    YouSeeTrampling = 879,
    YouSetTheTrapOff = 880,
    YouStokeTheFireElemental = 881,
    YouThrew = 882,
    YouTilled = 883,
    YouUnequip = 884,
    YouUsed = 885,
    YouWhileTraveling = 886
}
export default Message;
