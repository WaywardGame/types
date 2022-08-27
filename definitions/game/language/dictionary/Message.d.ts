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
    Absorb = 3,
    AbsorbNotPossible = 4,
    ActionAlterAltered = 5,
    ActionAlterFailed = 6,
    ActionAlterNotPossible = 7,
    ActionAttachContainerAlreadyHasContainer = 8,
    ActionAttachContainerAttachedContainer = 9,
    ActionAttachContainerAttachingContainer = 10,
    ActionAttachContainerCannotAttach = 11,
    ActionAttachContainerNothingToAttachContainerTo = 12,
    ActionAttackNoHandsSelected = 13,
    ActionButcherReleasesLava = 14,
    ActionCastAreaOverfished = 15,
    ActionConsumeItemTypeStats = 16,
    ActionCraft = 17,
    ActionCraftEfficacy = 18,
    ActionCraftEfficacyHigh = 19,
    ActionCraftEfficacyHighest = 20,
    ActionCraftEfficacyLow = 21,
    ActionCraftEfficacyLowest = 22,
    ActionCraftEfficacyMed = 23,
    ActionCraftEfficacyPercent = 24,
    ActionCraftYouLackTheRequirements = 25,
    ActionDetachContainerDetachContainer = 26,
    ActionDetachContainerNoDetach = 27,
    ActionDisassembleNoItemsSalvaged = 28,
    ActionDisassembleSalvaged = 29,
    ActionDismantleSeparated = 30,
    ActionDrinkInFrontNoDrink = 31,
    ActionEnhance = 32,
    ActionEnhanceEnhanced = 33,
    ActionEnhanceFailed = 34,
    ActionEnhanceNotPossible = 35,
    ActionFishingNothingBiting = 36,
    ActionFishingSlipped = 37,
    ActionFishingTooShallow = 38,
    ActionJumpCannotJump = 39,
    ActionMeleeNothingToAttack = 40,
    ActionMoveToSwimOffEdgeCannotCombatTides = 41,
    ActionNavigateMoon = 42,
    ActionNavigateNotOverworld = 43,
    ActionNavigateSun = 44,
    ActionNavigateUseSextant = 45,
    ActionPetCreatureRefused = 46,
    ActionPetNoTamedCreature = 47,
    ActionPickUpAllItemsNoItems = 48,
    ActionPickUpExcrementNoExcrement = 49,
    ActionPickUpItemNoItem = 50,
    ActionPickUpNoPickUp = 51,
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
    ActionToggleHitchAlreadyHitched = 67,
    ActionToggleHitchAlreadyUnhitched = 68,
    ActionToggleHitchNoCreature = 69,
    ActionToggleHitchNoHitch = 70,
    ActionToggleTilledAlreadyPacked = 71,
    ActionToggleTilledAlreadyTilled = 72,
    ActionUpgrade = 73,
    ActionUpgradeFailed = 74,
    ActionUpgradeNotMagical = 75,
    ActionUpgradeNotPossible = 76,
    ActionUpgradeUpgraded = 77,
    ActionUseItemWeaponNeeded = 78,
    ActionWith = 79,
    AddedFuelToFire = 80,
    AddedFuelToTorch = 81,
    AddToQuickslot = 82,
    AllEquipmentUnEquipped = 83,
    AlreadyDesalinatedWaterInStill = 84,
    AlreadyFullyRefined = 85,
    AlreadyFullyRepaired = 86,
    AlreadyPreserved = 87,
    Alter = 88,
    AnotherIsland = 89,
    AnUnknownItem = 90,
    AppearedNotEffectiveForGathering = 91,
    AppearsToBeAberrant = 92,
    ArmorAppeared = 93,
    ArmorProtectedFromInjuryAgainst = 94,
    Attack = 95,
    AttemptedToDropAllIntoFire = 96,
    AttemptedToPlaceAllOnGround = 97,
    AttemptToSoothBurnInWater = 98,
    AttemptToTill = 99,
    AutoActionsNoItem = 100,
    BadlyBurnedLostHealth = 101,
    BarteringSkillsProvided = 102,
    BasedOnItSeems = 103,
    BeenPoisoned = 104,
    BeginSleeping = 105,
    BeginUsingVehicle = 106,
    BestForCrafting = 107,
    BleedingHasStopped = 108,
    BleedingProfusely = 109,
    BleedingToDeathLostHealth = 110,
    BookBlank = 111,
    BookContains = 112,
    BookCrumbles = 113,
    BookDiagrams = 114,
    BookEmpty = 115,
    BookNothing = 116,
    BookOpen = 117,
    BookScribbles = 118,
    BothEffectiveIneffective = 119,
    BrokeIntoPieces = 120,
    BrokenOnImpact = 121,
    BrokenWhileFiring = 122,
    Build = 123,
    Burned = 124,
    CannotAddAnyMoreFuel = 125,
    CannotBePerformedOverWater = 126,
    CannotBePlacedHere = 127,
    CannotBePreserved = 128,
    CannotBeRefined = 129,
    CannotBeRefinedReinforcementNeeded = 130,
    CannotBeReinforced = 131,
    CannotBeRepaired = 132,
    CannotBuildHere = 133,
    CannotDoThatHere = 134,
    CannotDropHere = 135,
    CannotEquipThatThere = 136,
    CannotFishFor = 137,
    CannotHere = 138,
    CannotInWater = 139,
    CannotLeave = 140,
    CannotPickUpLockedContainer = 141,
    CannotPickUpWhileLit = 142,
    CannotPlaceContainerInItself = 143,
    CannotPlaceHere = 144,
    CannotPlaceThatFromHere = 145,
    CannotPlaceThatHere = 146,
    CannotPlaceThatOverWater = 147,
    CannotPlantHereTilled = 148,
    CannotRepairWhileLit = 149,
    CannotRestHere = 150,
    CannotSeeHere = 151,
    CannotSleepHere = 152,
    CannotStartFireHere = 153,
    CannotToTellTime = 154,
    CannotUseCommand = 155,
    CannotWhenProtected = 156,
    CannotWhenProtectedDangerousAction = 157,
    CarryingTooMuchWeight = 158,
    CarvedUpCorpse = 159,
    Carving = 160,
    CastYourLine = 161,
    Category = 162,
    CaughtFish = 163,
    ChatBanCommand = 164,
    ChatBannedCommand = 165,
    ChatCommandsCommand = 166,
    ChatCommandsCommandCommand = 167,
    ChatPingCommand = 168,
    ChatPlayerMessage = 169,
    ChatPlayersCommand = 170,
    ChatServerMessage = 171,
    ChatUnbanCommand = 172,
    ChatUnknownCommand = 173,
    Chop = 174,
    Chopping = 175,
    ClearedBlood = 176,
    ClearMessages = 177,
    Clockwise = 178,
    CloseContainer = 179,
    CloseDoor = 180,
    CloseGate = 181,
    CloseToBeingDestroyed = 182,
    Consumed = 183,
    Container = 184,
    ContextMenuActionHotkey = 185,
    ContextMenuHelpActions = 186,
    ContextMenuHelpAutoActions = 187,
    ContextMenuHelpItems = 188,
    CopiedMap = 189,
    CopySelectedText = 190,
    CopyX = 191,
    CorpseOf = 192,
    CorpseOfNamed = 193,
    CouldNotDecipher = 194,
    Counterclockwise = 195,
    Craft = 196,
    Crafted = 197,
    Crafts = 198,
    CreatureAngered = 199,
    CreatureAppears = 200,
    CreatureAppeased = 201,
    CreatureExcrement = 202,
    CreatureHappinessHigh = 203,
    CreatureHappinessLow = 204,
    CreatureHappinessLowest = 205,
    CreatureHappinessNormal = 206,
    CreatureIdolAttractedCreature = 207,
    CreatureRefusesToBeTamed = 208,
    CreatureRefusesYou = 209,
    CreatureUntamed = 210,
    CuredYourPoison = 211,
    Cut = 212,
    CutHasHealed = 213,
    CutLostHealth = 214,
    CutWasBandaged = 215,
    DamageAppeared = 216,
    DamagedByPouring = 217,
    DayQuarter1 = 218,
    DayQuarter2 = 219,
    DayQuarter3 = 220,
    DayQuarter4 = 221,
    DealtNoDamageToYou = 222,
    DeathBy = 223,
    DeathByBleeding = 224,
    DeathByBurning = 225,
    DeathByChallengeWinner = 226,
    DeathByConsumption = 227,
    DeathByCut = 228,
    DeathByDrowning = 229,
    DeathByExhaustion = 230,
    DeathByFistByPlayer = 231,
    DeathByFrostbite = 232,
    DeathByMalnutrition = 233,
    DeathByPoison = 234,
    DeathBySteppingOn = 235,
    DeathByTrap = 236,
    DeathByWeaponByPlayer = 237,
    Decay = 238,
    DestroyedFromUse = 239,
    DetachContainer = 240,
    Dexterity = 241,
    DexterityIncreasing = 242,
    DidNotSeemToBeHurting = 243,
    Dig = 244,
    DigAway = 245,
    Digging = 246,
    DigWithHands = 247,
    Disabled = 248,
    Disassemble = 249,
    DisassembleAction = 250,
    Disassembling = 251,
    DiscoveredCaveEntrance = 252,
    DiscoveredInTheBottle = 253,
    DiscoveredLavaPassage = 254,
    Dismantle = 255,
    DismantleAction = 256,
    DismantleLabel = 257,
    Dismantling = 258,
    DismantlingRequires = 259,
    DisplacedPuddles = 260,
    DoNotHaveTreasureMaps = 261,
    DoNotProduceAnyResources = 262,
    DoodadCauseStatus = 263,
    DoodadGroupTier = 264,
    DrewSurroundings = 265,
    Drink = 266,
    Drop = 267,
    DropAll = 268,
    DropAllOfSameQuality = 269,
    DroppedIntoDepths = 270,
    DroppedIntoFire = 271,
    DroppedIntoTheVoid = 272,
    DryadSprouted = 273,
    DueToDehydration = 274,
    DueToStarvation = 275,
    DugTreasureOut = 276,
    DumpContentsOfContainerInInventory = 277,
    Durability = 278,
    DyingOfDehydration = 279,
    EarnedMilestone = 280,
    East = 281,
    EastNortheast = 282,
    EastSoutheast = 283,
    Effective = 284,
    Enabled = 285,
    Enchant = 286,
    EquipmentPreventedStatusEffects = 287,
    EquipTo = 288,
    ErrorHasOccured = 289,
    ExtinguishedFire = 290,
    ExtinguishedLightSource = 291,
    Exude = 292,
    ExudeNotPossible = 293,
    FailedToAbsorb = 294,
    FailedToAddFuelToTorch = 295,
    FailedToCatchFish = 296,
    FailedToCauseDamage = 297,
    FailedToCauseYouDamage = 298,
    FailedToCopy = 299,
    FailedToDraw = 300,
    FailedToEnchant = 301,
    FailedToExude = 302,
    FailedToIgniteTorch = 303,
    FailedToPickLock = 304,
    FailedToPreserve = 305,
    FailedToRefine = 306,
    FailedToReinforce = 307,
    FailedToRepair = 308,
    FailedToStartFire = 309,
    FailedToTame = 310,
    FailedToTransmogrify = 311,
    FarOffLands = 312,
    FeltBurningPainLostHealth = 313,
    FeltFrostbitePainLostHealth = 314,
    FewMinutes = 315,
    Filled = 316,
    FilledFrom = 317,
    FireAroundYouIsWarm = 318,
    FiredIntoObstacle = 319,
    FireOverflowed = 320,
    FireOverflowedFireElemental = 321,
    FireSource = 322,
    FishingWithNoBait = 323,
    Floating = 324,
    FreshWater = 325,
    FromTheStill = 326,
    Fuel = 327,
    FuelIsRequired = 328,
    FullyDecodedMap = 329,
    GameHasBeenSavedIsTakingUpMB = 330,
    Gather = 331,
    GatherDestroy = 332,
    Gathering = 333,
    GatherWithHands = 334,
    GhostNoActions = 335,
    GhostOf = 336,
    GoatHasNoMilk = 337,
    GrabAll = 338,
    Group = 339,
    HackAway = 340,
    HandProtectionPreventedInjury = 341,
    HandsNotEffectiveFor = 342,
    Harvest = 343,
    Harvesting = 344,
    HarvestWithHands = 345,
    HasBeenHurtByATrap = 346,
    HasDecayed = 347,
    HasHitYouForDamage = 348,
    HasNoEffect = 349,
    HasSetTrapOffNoDamage = 350,
    HasSplit = 351,
    Help = 352,
    HelpGrow = 353,
    Here = 354,
    Hints = 355,
    HintsDisabled = 356,
    HintsEnabled = 357,
    Hitch = 358,
    HitchAttempt = 359,
    HitchCreature = 360,
    HitchDisabled = 361,
    HitchInUse = 362,
    HitchUnhitch = 363,
    HitForDamage = 364,
    HitYouForDamage = 365,
    Hour = 366,
    Hours = 367,
    HurtHandsHittingWithoutWeapons = 368,
    HurtHandsWithNoTool = 369,
    Ignite = 370,
    IgnitedTorch = 371,
    Ineffective = 372,
    InjuredFromTrap = 373,
    InNeedOfRepair = 374,
    InspectItem = 375,
    InteractingWithHasInjuredYouForDamage = 376,
    Inventory = 377,
    IsInTheWayOfPickingUp = 378,
    It = 379,
    ItAlsoReveals = 380,
    ItAlsoSeems = 381,
    ItContains = 382,
    ItemFromWater = 383,
    JoinedAServer = 384,
    Jump = 385,
    Killed = 386,
    KnowledgeHasIncreased = 387,
    LabelActionTier = 388,
    LabelAdditionalRequirements = 389,
    LabelAttackFromTactics = 390,
    LabelBase = 391,
    LabelCanIncrease = 392,
    LabelCraftingReputation = 393,
    LabelCraftingRequires = 394,
    LabelCraftingSkillReputation = 395,
    LabelDecay = 396,
    LabelDefense = 397,
    LabelDismantlingRequires = 398,
    LabelDurability = 399,
    LabelEquip = 400,
    LabelGrouping = 401,
    LabelHave = 402,
    LabelLeftHandAttack = 403,
    LabelLevel = 404,
    LabelLightSourceWhenLit = 405,
    LabelOnCure = 406,
    LabelOnDrink = 407,
    LabelOnEat = 408,
    LabelOnEquip = 409,
    LabelOnHeal = 410,
    LabelOnOtherHeal = 411,
    LabelPreservationRate = 412,
    LabelProtected = 413,
    LabelRange = 414,
    LabelRanged = 415,
    LabelRangedAttack = 416,
    LabelRangedDamage = 417,
    LabelReputationImpact = 418,
    LabelResists = 419,
    LabelRightHandAttack = 420,
    LabelSkill = 421,
    LabelStokeFireStrength = 422,
    LabelThrowDamageType = 423,
    LabelTrapDamage = 424,
    LabelUse = 425,
    LabelUses = 426,
    LabelVulnerabilities = 427,
    LabelWeight = 428,
    LabelWeightCapacity = 429,
    LabelWeightReduction = 430,
    LabelWorth = 431,
    LastPlaceYouLeftOff = 432,
    LearnedHowToCreate = 433,
    LeftHand = 434,
    LikelyFailures = 435,
    Limited = 436,
    Lockpick = 437,
    Magical = 438,
    MagicalItemDamage = 439,
    MapDestroyed = 440,
    MapNearlyDestroyed = 441,
    MapNotOfThisArea = 442,
    MaterialsDestroyed = 443,
    MerchantAlreadyTradedItem = 444,
    MessageOfTheDay = 445,
    Metabolism = 446,
    MetabolismSlowed = 447,
    Milk = 448,
    Mine = 449,
    Mining = 450,
    MissedWith = 451,
    MissedYouWith = 452,
    MoveAllOfSameQualityToFacingContainer = 453,
    MoveAllOfSameQualityToInventory = 454,
    MoveAllOfSameQualityToLastOpenedContainer = 455,
    MoveAllOfSameQualityToOpenedContainer = 456,
    MoveAllToFacingContainer = 457,
    MoveAllToInventory = 458,
    MoveAllToLastOpenedContainer = 459,
    MoveAllToOpenedContainer = 460,
    MovedItem = 461,
    MoveOverTrapButDoNotSetOff = 462,
    MoveToFacingContainer = 463,
    MoveToInventory = 464,
    MoveToLastOpenedContainer = 465,
    MoveToOpenedContainer = 466,
    MultiplayerGamePaused = 467,
    MultiplayerGameResumed = 468,
    MultiplayerPlayerConnected = 469,
    MultiplayerPlayerDied = 470,
    MultiplayerPlayerDisconnected = 471,
    MultiplayerPlayerJoined = 472,
    MultipleQuickslots = 473,
    MustBeEquippedToIgnite = 474,
    Mysteriously = 475,
    Name = 476,
    NearlyBurnedEquipmentProtectedYou = 477,
    NeedToStartTravelsOutside = 478,
    NeedWaterForBoat = 479,
    Negatively = 480,
    NightQuarter1 = 481,
    NightQuarter2 = 482,
    NightQuarter3 = 483,
    NightQuarter4 = 484,
    No = 485,
    NoAmmunitionForThatWeapon = 486,
    NoFireToStokeWith = 487,
    NoFishAtLocation = 488,
    NoGroundWater = 489,
    NoInkToDrawMap = 490,
    NoKindlingOrFuelItemsToStartFire = 491,
    NoKindlingToStartFire = 492,
    NoLongerFeelPainOfBeingBurned = 493,
    NoLongerFeelPainOfBeingFrostbitten = 494,
    NoLongerHostile = 495,
    NoMoreRoomInContainer = 496,
    NoPaperToDrawMap = 497,
    NoRequiredItemToFireWeapon = 498,
    NoReturnWithoutCompletingChallenges = 499,
    NoRoomForImprovement = 500,
    NoRoomToDrop = 501,
    North = 502,
    Northeast = 503,
    NorthNortheast = 504,
    NorthNorthwest = 505,
    Northwest = 506,
    NotAvailable = 507,
    NotEnoughPurifiedWaterYet = 508,
    NotEnoughTreasureToReturn = 509,
    NotFacingCreatureToOfferThisTo = 510,
    NotFacingLockedObject = 511,
    NotFacingOtherToHeal = 512,
    NotFacingValidItem = 513,
    NothingHereToButcher = 514,
    NothingHereToFill = 515,
    NothingHereToGrasp = 516,
    NothingToGetFromThis = 517,
    NothingToHarvestFromThisGather = 518,
    NothingToSmother = 519,
    NothingUsefulToHarvestYet = 520,
    NoTinderToStartFire = 521,
    NotSuitableToPlant = 522,
    NoWaterInStill = 523,
    NPCStartingDialog1 = 524,
    NPCStartingDialog2 = 525,
    NPCStartingDialog3 = 526,
    NPCStartingDialog4 = 527,
    NPCWelcome = 528,
    NPCWelcomeCredit = 529,
    NumberEight = 530,
    NumberFive = 531,
    NumberFour = 532,
    NumberNine = 533,
    NumberOne = 534,
    NumberSeven = 535,
    NumberSix = 536,
    NumberTen = 537,
    NumberThree = 538,
    NumberTwo = 539,
    ObjectIsLocked = 540,
    ObjectIsLockedAttemptToBreakIt = 541,
    Offer = 542,
    OfferAberrantFail = 543,
    OfferAberrantFailButTamed = 544,
    Open = 545,
    OpenClose = 546,
    OpenCloseContainer = 547,
    OpenCloseDoor = 548,
    OpenCloseGate = 549,
    OpenDoor = 550,
    OpenGate = 551,
    OverEatingLostStamina = 552,
    OverHydratingLostStamina = 553,
    Pack = 554,
    PaperTurnedToMush = 555,
    ParryTheBlow = 556,
    PartiallyDecodedMap = 557,
    PenultimateAnd = 558,
    Pet = 559,
    PetCreature = 560,
    PickAway = 561,
    PickUp = 562,
    PickUpAllItems = 563,
    PickUpDoodad = 564,
    PickUpDoodadSpecific = 565,
    PickUpExcrement = 566,
    PickUpExcrementWithHands = 567,
    PickUpItem = 568,
    PickUpTheItem = 569,
    Place = 570,
    PlacedOnGround = 571,
    Plant = 572,
    PlantCouldBeHarvested = 573,
    PlantedInGround = 574,
    PlantGatheringWillDestroy = 575,
    PlantHasResourcesToGather = 576,
    PlantHasResourcesToHarvest = 577,
    PlantHighlyFertile = 578,
    Planting = 579,
    PlantIsBare = 580,
    PlantIsFertile = 581,
    PlantIsInStage = 582,
    PlantIsNotFertile = 583,
    PlantNotReadyToHarvest = 584,
    PlantReadyToGather = 585,
    PlantReadyToGatherNotMaximal = 586,
    PlantReadyToHarvest = 587,
    PlantReadyToHarvestNotMaximal = 588,
    Player = 589,
    PlayerHas = 590,
    PlayerHasCompletedChallengeRequirement = 591,
    PlayerHasWonChallenge = 592,
    Poisoned = 593,
    PoisonedLostHealth = 594,
    PoisonWorkedItsCourse = 595,
    Positively = 596,
    PouredOut = 597,
    PouredOutOnYourself = 598,
    PouredWaterIntoStill = 599,
    PourHarmedPlant = 600,
    PourHealedPlant = 601,
    PourHealedPlantFully = 602,
    PourHealedPlantPartially = 603,
    PourIncreasedFertility = 604,
    Pouring = 605,
    Prepare = 606,
    Prepared = 607,
    Preserve = 608,
    PreservedFood = 609,
    PurifiedWaterInStill = 610,
    Quality = 611,
    RandomEventsFire = 612,
    Recent = 613,
    ReduceLength = 614,
    Refine = 615,
    RefusedToBeTamed = 616,
    Reinforce = 617,
    Release = 618,
    RemoveAction = 619,
    RemoveFromQuickslot = 620,
    Repair = 621,
    ReputationDecreased = 622,
    ReputationIncreased = 623,
    ReputationUpdate = 624,
    RequiredForDisassembleLabel = 625,
    RequiredForDisassembly = 626,
    RequiresFireToBeLit = 627,
    RequiresYouFacingFireSource = 628,
    RequiresYouToBeAround = 629,
    Resistant = 630,
    ResistOrVuln = 631,
    ResistOrVulnAll = 632,
    Rest = 633,
    Rested = 634,
    Resting = 635,
    RestingOnGroundNotEffective = 636,
    RestInterrupted = 637,
    RestInterruptedDamage = 638,
    RestInterruptedDying = 639,
    RestInterruptedLoudNoise = 640,
    RestInterruptedPain = 641,
    RestInterruptedStirring = 642,
    RestLongTime = 643,
    RestModerateTime = 644,
    RestOnBoat = 645,
    RestOnGround = 646,
    RestShortTime = 647,
    RestTime = 648,
    ReturnedToCivilization = 649,
    ReturningToCivilizationSetOffAgain = 650,
    ReturnsToLife = 651,
    Reveals = 652,
    RevealsEntityAppearsHurt = 653,
    RevealsEntityAppearsUnharmed = 654,
    RevealsEntityAppearsVeryHurt = 655,
    RevealsEntityIsAtPercentHealth = 656,
    RevealsEntityIsInjured = 657,
    RevealsEntityIsMostlyUninjured = 658,
    RevealsEntityIsOnTheVergeOfDeath = 659,
    RevealsEntityIsSeverelyInjured = 660,
    RevealsEntityIsUninjured = 661,
    RevealsEntitySeemsInjured = 662,
    RevealsEntitySeemsUninjured = 663,
    RevealsNumberOfResistancesAndVulnerabilities = 664,
    RevealsResistancesAndVulnerabilities = 665,
    RevealsSomeResistancesAndVulnerabilities = 666,
    Reverse = 667,
    RightHand = 668,
    Sailing = 669,
    ScrollMaster = 670,
    ScrollProvidedNoUsefulInsight = 671,
    Seawater = 672,
    SeemsToHaveDrawnEnergy = 673,
    SetTrapOffButNoDamage = 674,
    SetUp = 675,
    ShadowInTheWater = 676,
    Skill = 677,
    SkillHasRaised = 678,
    Skills = 679,
    Sleep = 680,
    Sleeping = 681,
    SleepOnBoat = 682,
    Slept = 683,
    SlitherSuckerConstricts = 684,
    SlitherSuckerJumpedOnHead = 685,
    SomethingInTheWayOf = 686,
    SomethingInTheWayOfButcherFirst = 687,
    SomethingInTheWayOfFire = 688,
    SomethingInTheWayOfFishing = 689,
    SomethingInTheWayOfPerforming = 690,
    SomethingInTheWayOfPlacing = 691,
    SomethingInTheWayOfPlanting = 692,
    SomethingInWayOfClosingDoor = 693,
    SoothedTheirBurnInjuries = 694,
    SoothedYourBurnInjuries = 695,
    Sort = 696,
    SortedByBestCraftingConsumables = 697,
    SortedByBestCraftingRequirements = 698,
    SortedByCategory = 699,
    SortedByDecay = 700,
    SortedByDurability = 701,
    SortedByGroup = 702,
    SortedByMagical = 703,
    SortedByName = 704,
    SortedByQuality = 705,
    SortedByRecent = 706,
    SortedBySkill = 707,
    SortedByUnlockedTime = 708,
    SortedByWeight = 709,
    SortedByWorth = 710,
    South = 711,
    Southeast = 712,
    SouthSoutheast = 713,
    SouthSouthwest = 714,
    Southwest = 715,
    StaminaIsFull = 716,
    StartedFire = 717,
    StartTravelInWater = 718,
    StarvingToDeath = 719,
    StatAmount = 720,
    StatGained = 721,
    StatLost = 722,
    StatQuenched = 723,
    StatRegained = 724,
    StatSated = 725,
    SteppingOn = 726,
    StillHasNoWaterToPurify = 727,
    StirredUpClawWorm = 728,
    StirredUpCreature = 729,
    StoppedYourBleeding = 730,
    StopUsingVehicle = 731,
    Strength = 732,
    StrengthIncreasing = 733,
    SummonedGuardiansByDiggingTreasure = 734,
    SummonedGuardiansByLockpicking = 735,
    SummonVoidDwellerItem = 736,
    SummonVoidDwellerRinging = 737,
    SummonVoidDwellerShiver = 738,
    SunNotBrightEnoughToStartFire = 739,
    SwampWater = 740,
    Swimming = 741,
    TakenFromGroundBecomeTamed = 742,
    Tame = 743,
    TamedCreature = 744,
    TeleportBlocked = 745,
    Teleported = 746,
    ThanksBuying = 747,
    ThanksSelling = 748,
    TheCreature = 749,
    TheirFist = 750,
    ThePlant = 751,
    ThereIsNoContainerOnTheStill = 752,
    ThereIsNoSunToStartFire = 753,
    ThisCannotBeMilked = 754,
    Throw = 755,
    ThrownIntoDepths = 756,
    ThrownIntoObstacle = 757,
    ThrownIntoVoid = 758,
    Tier = 759,
    TierGroup = 760,
    Till = 761,
    Tilling = 762,
    TillWithHands = 763,
    TimeIs = 764,
    TimeIsDawn = 765,
    TimeIsDaytime = 766,
    TimeIsDusk = 767,
    TimeIsNighttime = 768,
    TimeIsSunrise = 769,
    TimeIsSunset = 770,
    ToDamageAChest = 771,
    ToFight = 772,
    TooDamaged = 773,
    TooExhaustedToJump = 774,
    Touching = 775,
    TradeBarterCreditForItem = 776,
    TradeItemForBarterCredit = 777,
    TradingWith = 778,
    TrampledFire = 779,
    TrampledIntoGround = 780,
    TrampleIntoGround = 781,
    Trampling = 782,
    TransmogrificationNotPossible = 783,
    Transmogrified = 784,
    Transmogrify = 785,
    TrapMissed = 786,
    TrapStoppedYou = 787,
    Traveling = 788,
    TreasureIsBlocked = 789,
    UiActionCannotUseMissingSlottedItem = 790,
    UiActionCannotUseRequiresCreature = 791,
    UiActionCannotUseRequiresDoodad = 792,
    UiActionCannotUseRequiresItem = 793,
    UnEquip = 794,
    UnEquipAll = 795,
    Unhitch = 796,
    UnhitchCreature = 797,
    Unknown = 798,
    UnknownItem = 799,
    Unlimited = 800,
    UnlockedChest = 801,
    UnlockedTime = 802,
    UnpurifiedFreshWater = 803,
    UnpurifiedWaterInStill = 804,
    Use = 805,
    UsingBareHands = 806,
    VehicleDefense = 807,
    Vulnerable = 808,
    Water = 809,
    WaterGathering = 810,
    WaterPutOutFire = 811,
    Weight = 812,
    WellIsDry = 813,
    WellIsFull = 814,
    West = 815,
    WestNorthwest = 816,
    WestSouthwest = 817,
    WildGoatRefusedToBeMilked = 818,
    WillNotTrade = 819,
    WithYouSee = 820,
    WorkingYourselfIntoExhaustion = 821,
    WorkingYourselfIntoExhaustionAndDrowning = 822,
    Worth = 823,
    You = 824,
    YouAbsorb = 825,
    YouApplied = 826,
    YouAte = 827,
    YouBeginResting = 828,
    YouCannotDoThatYet = 829,
    YouCanNowCombatTheTides = 830,
    YouCooledLava = 831,
    YouCrafted = 832,
    YouDied = 833,
    YouDoNotFindTreasureYet = 834,
    YouDrank = 835,
    YouDropTheTorch = 836,
    YouEnchant = 837,
    YouEquip = 838,
    YouExude = 839,
    YouExudeSome = 840,
    YouExudeSomeReasonConflicting = 841,
    YouExudeSomeReasonMax = 842,
    YouExudeSomeReasonProperties = 843,
    YouFailedTo = 844,
    YouFailedToExtinguishedFireFully = 845,
    YouFailedToHeal = 846,
    YouFailedToHealOther = 847,
    YouFire = 848,
    YouGathered = 849,
    YouGatheredAndDropped = 850,
    YouHarvested = 851,
    YouHarvestedAndDropped = 852,
    YouHave = 853,
    YouHaveAlreadyLearned = 854,
    YouHaveBeenCut = 855,
    YouHaveDied = 856,
    YouHaveEnabledDisabled = 857,
    YouHaveHealedOther = 858,
    YouHaveKilled = 859,
    YouHaveReleased = 860,
    YouHaveTamed = 861,
    YouNeedMoreCredit = 862,
    YouNeedXToY = 863,
    YouNoticeBarren = 864,
    YouNoticeBecomeEnraged = 865,
    YouNoticeDying = 866,
    YouNoticeFertilityDecreasing = 867,
    YouNoticeFertilityIncreasing = 868,
    YouNoticeGrowing = 869,
    YouNoticeLavaCooling = 870,
    YouNoticeLavaHardening = 871,
    YouNoticePerish = 872,
    YouNoticePlantDamage = 873,
    YouNoticePlantRegenerated = 874,
    YouNoticeRegrowing = 875,
    YouNoticeStumbleInjureItself = 876,
    YouNoticeTakeFromGround = 877,
    YouNoticeWoundsClosing = 878,
    YouNoticeZombieHorde = 879,
    YouOfferedToCreature = 880,
    YouOfferedToCreatureRejects = 881,
    YouOpen = 882,
    YouPacked = 883,
    YouPickedUp = 884,
    YouRefine = 885,
    YouReinforce = 886,
    YouRepair = 887,
    YouReturnFromCivilizationWith = 888,
    YourFist = 889,
    YourHands = 890,
    YourHighSkill = 891,
    YourInventory = 892,
    YourIsland = 893,
    YourLowSkill = 894,
    YourModerateSkill = 895,
    YourRubbingNoEffect = 896,
    YouRub = 897,
    YouSee = 898,
    YouSeeALivingMushroomSpore = 899,
    YouSeeAnAberrant = 900,
    YouSeeASkeletonCollapse = 901,
    YouSeeASlimeCombine = 902,
    YouSeeAZombieBleeding = 903,
    YouSeeCoolDown = 904,
    YouSeeDrop = 905,
    YouSeeEngulfFire = 906,
    YouSeeFireSpread = 907,
    YouSeeHelpingPlant = 908,
    YouSeeLay = 909,
    YouSeeLayingTrap = 910,
    YouSeeSpewLava = 911,
    YouSeeSpitAcid = 912,
    YouSeeSpringForth = 913,
    YouSeeSummon = 914,
    YouSeeSwampFlood = 915,
    YouSeeTrampling = 916,
    YouSetTheTrapOff = 917,
    YouStokeTheFireElemental = 918,
    YouSwapMainHandAndOffHand = 919,
    YouThrew = 920,
    YouTilled = 921,
    YouUnequip = 922,
    YouUsed = 923,
    YouWhileTraveling = 924
}
export default Message;
