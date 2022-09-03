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
    NothingTo = 520,
    NothingUsefulToHarvestYet = 521,
    NoTinderToStartFire = 522,
    NotSuitableToPlant = 523,
    NoWaterInStill = 524,
    NPCStartingDialog1 = 525,
    NPCStartingDialog2 = 526,
    NPCStartingDialog3 = 527,
    NPCStartingDialog4 = 528,
    NPCWelcome = 529,
    NPCWelcomeCredit = 530,
    NumberEight = 531,
    NumberFive = 532,
    NumberFour = 533,
    NumberNine = 534,
    NumberOne = 535,
    NumberSeven = 536,
    NumberSix = 537,
    NumberTen = 538,
    NumberThree = 539,
    NumberTwo = 540,
    ObjectIsLocked = 541,
    ObjectIsLockedAttemptToBreakIt = 542,
    Offer = 543,
    OfferAberrantFail = 544,
    OfferAberrantFailButTamed = 545,
    Open = 546,
    OpenClose = 547,
    OpenCloseContainer = 548,
    OpenCloseDoor = 549,
    OpenCloseGate = 550,
    OpenDoor = 551,
    OpenGate = 552,
    OverEatingLostStamina = 553,
    OverHydratingLostStamina = 554,
    Pack = 555,
    PaperTurnedToMush = 556,
    ParryTheBlow = 557,
    PartiallyDecodedMap = 558,
    PenultimateAnd = 559,
    Pet = 560,
    PetCreature = 561,
    PickAway = 562,
    PickUp = 563,
    PickUpAllItems = 564,
    PickUpDoodad = 565,
    PickUpDoodadSpecific = 566,
    PickUpExcrement = 567,
    PickUpExcrementWithHands = 568,
    PickUpItem = 569,
    PickUpTheItem = 570,
    Place = 571,
    PlacedOnGround = 572,
    Plant = 573,
    PlantCouldBeHarvested = 574,
    PlantedInGround = 575,
    PlantGatheringWillDestroy = 576,
    PlantHasResourcesToGather = 577,
    PlantHasResourcesToHarvest = 578,
    PlantHighlyFertile = 579,
    Planting = 580,
    PlantIsBare = 581,
    PlantIsFertile = 582,
    PlantIsInStage = 583,
    PlantIsNotFertile = 584,
    PlantNotReadyToHarvest = 585,
    PlantReadyToGather = 586,
    PlantReadyToGatherNotMaximal = 587,
    PlantReadyToHarvest = 588,
    PlantReadyToHarvestNotMaximal = 589,
    Player = 590,
    PlayerHas = 591,
    PlayerHasCompletedChallengeRequirement = 592,
    PlayerHasWonChallenge = 593,
    Poisoned = 594,
    PoisonedLostHealth = 595,
    PoisonWorkedItsCourse = 596,
    Positively = 597,
    PouredOut = 598,
    PouredOutOnYourself = 599,
    PouredWaterIntoStill = 600,
    PourHarmedPlant = 601,
    PourHealedPlant = 602,
    PourHealedPlantFully = 603,
    PourHealedPlantPartially = 604,
    PourIncreasedFertility = 605,
    Pouring = 606,
    Prepare = 607,
    Prepared = 608,
    Preserve = 609,
    PreservedFood = 610,
    PurifiedWaterInStill = 611,
    Quality = 612,
    RandomEventsFire = 613,
    Recent = 614,
    ReduceLength = 615,
    Refine = 616,
    RefusedToBeTamed = 617,
    Reinforce = 618,
    Release = 619,
    RemoveAction = 620,
    RemoveFromQuickslot = 621,
    Repair = 622,
    ReputationDecreased = 623,
    ReputationIncreased = 624,
    ReputationUpdate = 625,
    RequiredForDisassembleLabel = 626,
    RequiredForDisassembly = 627,
    RequiresFireToBeLit = 628,
    RequiresYouFacingFireSource = 629,
    RequiresYouToBeAround = 630,
    Resistant = 631,
    ResistOrVuln = 632,
    ResistOrVulnAll = 633,
    Rest = 634,
    Rested = 635,
    Resting = 636,
    RestingOnGroundNotEffective = 637,
    RestInterrupted = 638,
    RestInterruptedDamage = 639,
    RestInterruptedDying = 640,
    RestInterruptedLoudNoise = 641,
    RestInterruptedPain = 642,
    RestInterruptedStirring = 643,
    RestInterruptedWaterPoured = 644,
    RestLongTime = 645,
    RestModerateTime = 646,
    RestOnBoat = 647,
    RestOnGround = 648,
    RestShortTime = 649,
    RestTime = 650,
    ReturnedToCivilization = 651,
    ReturningToCivilizationSetOffAgain = 652,
    ReturnsToLife = 653,
    Reveals = 654,
    RevealsEntityAppearsHurt = 655,
    RevealsEntityAppearsUnharmed = 656,
    RevealsEntityAppearsVeryHurt = 657,
    RevealsEntityIsAtPercentHealth = 658,
    RevealsEntityIsInjured = 659,
    RevealsEntityIsMostlyUninjured = 660,
    RevealsEntityIsOnTheVergeOfDeath = 661,
    RevealsEntityIsSeverelyInjured = 662,
    RevealsEntityIsUninjured = 663,
    RevealsEntitySeemsInjured = 664,
    RevealsEntitySeemsUninjured = 665,
    RevealsNumberOfResistancesAndVulnerabilities = 666,
    RevealsResistancesAndVulnerabilities = 667,
    RevealsSomeResistancesAndVulnerabilities = 668,
    Reverse = 669,
    RightHand = 670,
    Sailing = 671,
    ScrollMaster = 672,
    ScrollProvidedNoUsefulInsight = 673,
    Seawater = 674,
    SeemsToHaveDrawnEnergy = 675,
    SetTrapOffButNoDamage = 676,
    SetUp = 677,
    ShadowInTheWater = 678,
    Skill = 679,
    SkillHasRaised = 680,
    Skills = 681,
    Sleep = 682,
    Sleeping = 683,
    SleepOnBoat = 684,
    Slept = 685,
    SlitherSuckerConstricts = 686,
    SlitherSuckerJumpedOnHead = 687,
    SomethingInTheWayOf = 688,
    SomethingInTheWayOfButcherFirst = 689,
    SomethingInTheWayOfFire = 690,
    SomethingInTheWayOfFishing = 691,
    SomethingInTheWayOfPerforming = 692,
    SomethingInTheWayOfPlacing = 693,
    SomethingInTheWayOfPlanting = 694,
    SomethingInWayOfClosingDoor = 695,
    SoothedTheirBurnInjuries = 696,
    SoothedYourBurnInjuries = 697,
    Sort = 698,
    SortedByBestCraftingConsumables = 699,
    SortedByBestCraftingRequirements = 700,
    SortedByCategory = 701,
    SortedByDecay = 702,
    SortedByDurability = 703,
    SortedByGroup = 704,
    SortedByMagical = 705,
    SortedByName = 706,
    SortedByQuality = 707,
    SortedByRecent = 708,
    SortedBySkill = 709,
    SortedByUnlockedTime = 710,
    SortedByWeight = 711,
    SortedByWorth = 712,
    South = 713,
    Southeast = 714,
    SouthSoutheast = 715,
    SouthSouthwest = 716,
    Southwest = 717,
    StaminaIsFull = 718,
    StartedFire = 719,
    StartTravelInWater = 720,
    StarvingToDeath = 721,
    StatAmount = 722,
    StatGained = 723,
    StatLost = 724,
    StatQuenched = 725,
    StatRegained = 726,
    StatSated = 727,
    SteppingOn = 728,
    StillHasNoWaterToPurify = 729,
    StirredUpClawWorm = 730,
    StirredUpCreature = 731,
    StoppedYourBleeding = 732,
    StopUsingVehicle = 733,
    Strength = 734,
    StrengthIncreasing = 735,
    SummonedGuardiansByDiggingTreasure = 736,
    SummonedGuardiansByLockpicking = 737,
    SummonVoidDwellerItem = 738,
    SummonVoidDwellerRinging = 739,
    SummonVoidDwellerShiver = 740,
    SunNotBrightEnoughToStartFire = 741,
    SwampWater = 742,
    Swimming = 743,
    TakenFromGroundBecomeTamed = 744,
    Tame = 745,
    TamedCreature = 746,
    TeleportBlocked = 747,
    Teleported = 748,
    ThanksBuying = 749,
    ThanksSelling = 750,
    TheCreature = 751,
    TheirFist = 752,
    ThePlant = 753,
    ThereIsNoContainerOnTheStill = 754,
    ThereIsNoSunToStartFire = 755,
    ThisCannotBeMilked = 756,
    Throw = 757,
    ThrownIntoDepths = 758,
    ThrownIntoObstacle = 759,
    ThrownIntoVoid = 760,
    Tier = 761,
    TierGroup = 762,
    Till = 763,
    Tilling = 764,
    TillWithHands = 765,
    TimeIs = 766,
    TimeIsDawn = 767,
    TimeIsDaytime = 768,
    TimeIsDusk = 769,
    TimeIsNighttime = 770,
    TimeIsSunrise = 771,
    TimeIsSunset = 772,
    ToDamageAChest = 773,
    ToFight = 774,
    TooDamaged = 775,
    TooExhaustedToJump = 776,
    Touching = 777,
    TradeBarterCreditForItem = 778,
    TradeItemForBarterCredit = 779,
    TradingWith = 780,
    TrampledFire = 781,
    TrampledIntoGround = 782,
    TrampleIntoGround = 783,
    Trampling = 784,
    TransmogrificationNotPossible = 785,
    Transmogrified = 786,
    Transmogrify = 787,
    TrapMissed = 788,
    TrapStoppedYou = 789,
    Traveling = 790,
    TreasureIsBlocked = 791,
    UiActionCannotUseMissingSlottedItem = 792,
    UiActionCannotUseRequiresCreature = 793,
    UiActionCannotUseRequiresDoodad = 794,
    UiActionCannotUseRequiresItem = 795,
    UnEquip = 796,
    UnEquipAll = 797,
    Unhitch = 798,
    UnhitchCreature = 799,
    Unknown = 800,
    UnknownItem = 801,
    Unlimited = 802,
    UnlockedChest = 803,
    UnlockedTime = 804,
    UnpurifiedFreshWater = 805,
    UnpurifiedWaterInStill = 806,
    Use = 807,
    UsingBareHands = 808,
    VehicleDefense = 809,
    Vulnerable = 810,
    Water = 811,
    WaterGathering = 812,
    WaterPutOutFire = 813,
    Weight = 814,
    WellIsDry = 815,
    WellIsFull = 816,
    West = 817,
    WestNorthwest = 818,
    WestSouthwest = 819,
    WildGoatRefusedToBeMilked = 820,
    WillNotTrade = 821,
    WithYouSee = 822,
    WorkingYourselfIntoExhaustion = 823,
    WorkingYourselfIntoExhaustionAndDrowning = 824,
    Worth = 825,
    You = 826,
    Dismounted = 827,
    YouAreAlready = 828,
    YouAbsorb = 829,
    YouApplied = 830,
    YouAte = 831,
    YouBeginResting = 832,
    YouCannotDoThatYet = 833,
    YouCanNowCombatTheTides = 834,
    YouCooledLava = 835,
    YouCrafted = 836,
    YouDied = 837,
    YouDoNotFindTreasureYet = 838,
    YouDrank = 839,
    YouDropTheTorch = 840,
    YouEnchant = 841,
    YouEquip = 842,
    YouExude = 843,
    YouExudeSome = 844,
    YouExudeSomeReasonConflicting = 845,
    YouExudeSomeReasonMax = 846,
    YouExudeSomeReasonProperties = 847,
    YouFailedTo = 848,
    YouFailedToExtinguishedFireFully = 849,
    YouFailedToHeal = 850,
    YouFailedToHealOther = 851,
    YouFire = 852,
    YouGathered = 853,
    YouGatheredAndDropped = 854,
    YouHarvested = 855,
    YouHarvestedAndDropped = 856,
    YouHave = 857,
    YouHaveAlreadyLearned = 858,
    YouHaveBeenCut = 859,
    YouHaveDied = 860,
    YouHaveEnabledDisabled = 861,
    YouHaveHealedOther = 862,
    YouHaveKilled = 863,
    YouHaveReleased = 864,
    YouHaveTamed = 865,
    YouNeedMoreCredit = 866,
    YouNeedXToY = 867,
    YouNoticeBarren = 868,
    YouNoticeBecomeEnraged = 869,
    YouNoticeDying = 870,
    YouNoticeFertilityDecreasing = 871,
    YouNoticeFertilityIncreasing = 872,
    YouNoticeGrowing = 873,
    YouNoticeLavaCooling = 874,
    YouNoticeLavaHardening = 875,
    YouNoticePerish = 876,
    YouNoticePlantDamage = 877,
    YouNoticePlantRegenerated = 878,
    YouNoticeRegrowing = 879,
    YouNoticeStumbleInjureItself = 880,
    YouNoticeTakeFromGround = 881,
    YouNoticeWoundsClosing = 882,
    YouNoticeZombieHorde = 883,
    YouOfferedToCreature = 884,
    YouOfferedToCreatureRejects = 885,
    YouOpen = 886,
    YouPacked = 887,
    YouPickedUp = 888,
    YouRefine = 889,
    YouReinforce = 890,
    YouRepair = 891,
    YouReturnFromCivilizationWith = 892,
    YourFist = 893,
    YourHands = 894,
    YourHighSkill = 895,
    YourInventory = 896,
    YourIsland = 897,
    YourLowSkill = 898,
    YourModerateSkill = 899,
    YourRubbingNoEffect = 900,
    YouRub = 901,
    YouSee = 902,
    YouSeeALivingMushroomSpore = 903,
    YouSeeAnAberrant = 904,
    YouSeeASkeletonCollapse = 905,
    YouSeeASlimeCombine = 906,
    YouSeeAZombieBleeding = 907,
    YouSeeCoolDown = 908,
    YouSeeDrop = 909,
    YouSeeEngulfFire = 910,
    YouSeeFireSpread = 911,
    YouSeeHelpingPlant = 912,
    YouSeeLay = 913,
    YouSeeLayingTrap = 914,
    YouSeeSpewLava = 915,
    YouSeeSpitAcid = 916,
    YouSeeSpringForth = 917,
    YouSeeSummon = 918,
    YouSeeSwampFlood = 919,
    YouSeeTrampling = 920,
    YouSetTheTrapOff = 921,
    YouStokeTheFireElemental = 922,
    YouSwapMainHandAndOffHand = 923,
    YouThrew = 924,
    YouTilled = 925,
    YouUnequip = 926,
    YouUsed = 927,
    YouWhileTraveling = 928
}
export default Message;
