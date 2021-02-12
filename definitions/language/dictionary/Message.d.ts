/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
declare enum Message {
    None = 0,
    Aberrant = 1,
    AboutHours = 2,
    ActionAttachContainerAlreadyHasContainer = 3,
    ActionAttachContainerAttachedContainer = 4,
    ActionAttachContainerAttachingContainer = 5,
    ActionAttachContainerCannotAttach = 6,
    ActionAttachContainerNothingToAttachContainerTo = 7,
    ActionCastAreaOverfished = 8,
    ActionConsumeItemTypeStats = 9,
    ActionCraft = 10,
    ActionCraftEfficacy = 11,
    ActionCraftEfficacyHigh = 12,
    ActionCraftEfficacyHighest = 13,
    ActionCraftEfficacyLow = 14,
    ActionCraftEfficacyLowest = 15,
    ActionCraftEfficacyMed = 16,
    ActionCraftEfficacyPercent = 17,
    ActionCraftYouLackTheRequirements = 18,
    ActionDetachContainerDetachContainer = 19,
    ActionDisassembleNoItemsSalvaged = 20,
    ActionDisassembleSalvaged = 21,
    ActionDismantleSeparated = 22,
    ActionEnhance = 23,
    ActionEnhanceEnhanced = 24,
    ActionEnhanceFailed = 25,
    ActionEnhanceNotPossible = 26,
    ActionFishingNothingBiting = 27,
    ActionFishingSlipped = 28,
    ActionFishingTooShallow = 29,
    ActionMeleeHasToBeEquipped = 30,
    ActionMeleeNothingToAttack = 31,
    ActionNavigateMoon = 32,
    ActionNavigateNotOverworld = 33,
    ActionNavigateSun = 34,
    ActionNavigateUseSextant = 35,
    ActionPetCreatureRefused = 36,
    ActionSailToCivilizationNotInsideBoat = 37,
    ActionTestDepthNothingToTest = 38,
    ActionTestDepthWell = 39,
    ActionUpgrade = 40,
    ActionUpgradeFailed = 41,
    ActionUpgradeNotMagical = 42,
    ActionUpgradeNotPossible = 43,
    ActionUpgradeUpgraded = 44,
    ActionWith = 45,
    AddedFuelToFire = 46,
    AddedFuelToTorch = 47,
    AddToQuickslot = 48,
    AllEquipmentUnEquipped = 49,
    AlreadyDesalinatedWaterInStill = 50,
    AlreadyFullyRefined = 51,
    AlreadyFullyRepaired = 52,
    AlreadyPreserved = 53,
    AnUnknownItem = 54,
    AppearedNotEffectiveForGathering = 55,
    AppearsToBeAberrant = 56,
    ArmorAppeared = 57,
    ArmorProtectedFromInjuryAgainst = 58,
    Attack = 59,
    AttemptedToDropAllIntoFire = 60,
    AttemptedToPlaceAllOnGround = 61,
    AttemptToSoothBurnInWater = 62,
    AttemptToTill = 63,
    BadlyBurnedLostHealth = 64,
    BarteringSkillsProvided = 65,
    BasedOnItSeems = 66,
    BeenPoisoned = 67,
    BeginSleeping = 68,
    BeginUsingBoat = 69,
    BestForCrafting = 70,
    BleedingHasStopped = 71,
    BleedingProfusely = 72,
    BleedingToDeathLostHealth = 73,
    BookBlank = 74,
    BookContains = 75,
    BookCrumbles = 76,
    BookDiagrams = 77,
    BookEmpty = 78,
    BookNothing = 79,
    BookOpen = 80,
    BookScribbles = 81,
    BothEffectiveIneffective = 82,
    BothHands = 83,
    BrokeIntoPieces = 84,
    BrokenOnImpact = 85,
    BrokenWhileFiring = 86,
    Build = 87,
    Burned = 88,
    CannotAddAnyMoreFuel = 89,
    CannotBePerformedOverWater = 90,
    CannotBePreserved = 91,
    CannotBeRefined = 92,
    CannotBeRefinedReinforcementNeeded = 93,
    CannotBeReinforced = 94,
    CannotBeRepaired = 95,
    CannotBeTamed = 96,
    CannotBuildHere = 97,
    CannotDoThatHere = 98,
    CannotDropHere = 99,
    CannotEquipThatThere = 100,
    CannotFishFor = 101,
    CannotHere = 102,
    CannotInWater = 103,
    CannotLeave = 104,
    CannotPickUpWhileLit = 105,
    CannotPickUpWithItemsInside = 106,
    CannotPlaceContainerInItself = 107,
    CannotPlaceHere = 108,
    CannotPlaceThatFromHere = 109,
    CannotPlaceThatHere = 110,
    CannotPlantHereTilled = 111,
    CannotRepairWhileLit = 112,
    CannotRestHere = 113,
    CannotSeeHere = 114,
    CannotSleepHere = 115,
    CannotStartFireHere = 116,
    CannotToTellTime = 117,
    CannotUseCommand = 118,
    CannotWhenProtected = 119,
    CannotWhenProtectedDangerousAction = 120,
    CarryingTooMuchWeight = 121,
    CarvedUpCorpse = 122,
    CarveWithTool = 123,
    Carving = 124,
    CastYourLine = 125,
    Category = 126,
    CaughtFish = 127,
    ChatBanCommand = 128,
    ChatBannedCommand = 129,
    ChatCommandsCommand = 130,
    ChatCommandsCommandCommand = 131,
    ChatPingCommand = 132,
    ChatPlayerMessage = 133,
    ChatPlayersCommand = 134,
    ChatServerMessage = 135,
    ChatUnbanCommand = 136,
    ChatUnknownCommand = 137,
    ClearedBlood = 138,
    ClearMessages = 139,
    Clockwise = 140,
    CloseContainer = 141,
    CloseDoor = 142,
    CloseToBeingDestroyed = 143,
    CollectObjectWithHands = 144,
    Consumed = 145,
    Container = 146,
    CopySelectedText = 147,
    CorpseOf = 148,
    CorpseOfNamed = 149,
    CouldNotDecipher = 150,
    Counterclockwise = 151,
    Craft = 152,
    Crafted = 153,
    Crafts = 154,
    CreatureAngered = 155,
    CreatureAppears = 156,
    CreatureAppeased = 157,
    CreatureExcrement = 158,
    CreatureHappinessHigh = 159,
    CreatureHappinessLow = 160,
    CreatureHappinessLowest = 161,
    CreatureHappinessNormal = 162,
    CreatureIdolAttractedCreature = 163,
    CreatureUntamed = 164,
    CuredYourPoison = 165,
    Cut = 166,
    DamageAppeared = 167,
    DamagedByPouring = 168,
    DayQuarter1 = 169,
    DayQuarter2 = 170,
    DayQuarter3 = 171,
    DayQuarter4 = 172,
    DealtNoDamageToYou = 173,
    DeathBy = 174,
    DeathByBleeding = 175,
    DeathByBurning = 176,
    DeathByChallengeWinner = 177,
    DeathByConsumption = 178,
    DeathByDrowning = 179,
    DeathByExhaustion = 180,
    DeathByFistByPlayer = 181,
    DeathByPoison = 182,
    DeathBySteppingOn = 183,
    DeathByTrap = 184,
    DeathByWeaponByPlayer = 185,
    Decay = 186,
    DestroyedFromUse = 187,
    DetachContainer = 188,
    Dexterity = 189,
    DexterityIncreasing = 190,
    DidNotSeemToBeHurting = 191,
    Dig = 192,
    DigAway = 193,
    Digging = 194,
    DigWithHands = 195,
    Disabled = 196,
    Disassemble = 197,
    DisassembleAction = 198,
    Disassembling = 199,
    DiscoveredCaveEntrance = 200,
    DiscoveredInTheBottle = 201,
    DiscoveredLavaPassage = 202,
    Dismantle = 203,
    DismantleAction = 204,
    DismantleLabel = 205,
    Dismantling = 206,
    DismantlingRequires = 207,
    DisplacedPuddles = 208,
    DoNotHaveTreasureMaps = 209,
    DoNotProduceAnyResources = 210,
    DoodadCauseStatus = 211,
    DoodadGroupTier = 212,
    DrewSurroundings = 213,
    Drink = 214,
    Drop = 215,
    DropAll = 216,
    DropAllOfSameQuality = 217,
    DroppedIntoDepths = 218,
    DroppedIntoFire = 219,
    DroppedIntoTheVoid = 220,
    DueToDehydration = 221,
    DueToStarvation = 222,
    DugTreasureOut = 223,
    DumpContentsOfContainerInInventory = 224,
    Durability = 225,
    DyingOfDehydration = 226,
    EarnedMilestone = 227,
    East = 228,
    EastNortheast = 229,
    EastSoutheast = 230,
    Effective = 231,
    Enabled = 232,
    Enchant = 233,
    EquipmentPreventedStatusEffects = 234,
    EquipTo = 235,
    ErrorHasOccured = 236,
    ExtinguishedFire = 237,
    ExtinguishedLightSource = 238,
    FailedToAddFuelToTorch = 239,
    FailedToCatchFish = 240,
    FailedToCauseDamage = 241,
    FailedToCauseYouDamage = 242,
    FailedToDrawMap = 243,
    FailedToEnchant = 244,
    FailedToIgniteTorch = 245,
    FailedToPickLock = 246,
    FailedToPlant = 247,
    FailedToPreserve = 248,
    FailedToRefine = 249,
    FailedToReinforce = 250,
    FailedToRepair = 251,
    FailedToStartFire = 252,
    FailedToTame = 253,
    FailedToTransmogrify = 254,
    FeltBurningPainLostHealth = 255,
    FewMinutes = 256,
    Filled = 257,
    FilledFrom = 258,
    FireAroundYouIsWarm = 259,
    FiredIntoObstacle = 260,
    FireOverflowed = 261,
    FireOverflowedFireElemental = 262,
    FireSource = 263,
    FishingWithNoBait = 264,
    FreshWater = 265,
    FromTheStill = 266,
    Fuel = 267,
    FuelIsRequired = 268,
    FullyDecodedMap = 269,
    GainedHealth = 270,
    GainedHunger = 271,
    GainedStamina = 272,
    GainedThirst = 273,
    GameHasBeenSavedIsTakingUpMB = 274,
    Gather = 275,
    GatherDestroy = 276,
    Gathering = 277,
    GatherWithHands = 278,
    GhostNoActions = 279,
    GhostOf = 280,
    GoatHasNoMilk = 281,
    GrabAll = 282,
    Group = 283,
    HackAway = 284,
    HandProtectionPreventedInjury = 285,
    HandsNotEffectiveForDigging = 286,
    Harvest = 287,
    Harvesting = 288,
    HarvestWithHands = 289,
    HasBeenHurtByATrap = 290,
    HasDecayed = 291,
    HasHitYouForDamage = 292,
    HasNoEffect = 293,
    HasSetTrapOffNoDamage = 294,
    HasSplit = 295,
    Help = 296,
    HelpGrow = 297,
    Here = 298,
    Hints = 299,
    HintsDisabled = 300,
    HintsEnabled = 301,
    Hitch = 302,
    HitchAttempt = 303,
    HitchCreature = 304,
    HitchDisabled = 305,
    HitchInUse = 306,
    HitForDamage = 307,
    HitYouForDamage = 308,
    Hour = 309,
    Hours = 310,
    HurtHandsHittingWithoutWeapons = 311,
    HurtHandsWithNoTool = 312,
    Ignite = 313,
    IgnitedTorch = 314,
    Ineffective = 315,
    InjuredFromTrap = 316,
    InNeedOfRepair = 317,
    InspectItem = 318,
    InteractingWithHasInjuredYouForDamage = 319,
    Inventory = 320,
    IsInTheWayOfPickingUp = 321,
    It = 322,
    ItAlsoReveals = 323,
    ItAlsoSeems = 324,
    ItContains = 325,
    ItemFromWater = 326,
    JoinedAServer = 327,
    Jump = 328,
    Killed = 329,
    KnowledgeHasIncreased = 330,
    LabelActionTier = 331,
    LabelAdditionalRequirements = 332,
    LabelAttackFromTactics = 333,
    LabelBase = 334,
    LabelCanIncrease = 335,
    LabelCraftingReputation = 336,
    LabelCraftingRequires = 337,
    LabelCraftingSkillReputation = 338,
    LabelDecay = 339,
    LabelDefense = 340,
    LabelDismantlingRequires = 341,
    LabelDurability = 342,
    LabelEquip = 343,
    LabelGrouping = 344,
    LabelHave = 345,
    LabelLeftHandAttack = 346,
    LabelLevel = 347,
    LabelLightSourceWhenLit = 348,
    LabelOnCure = 349,
    LabelOnDrink = 350,
    LabelOnEat = 351,
    LabelOnEquip = 352,
    LabelOnHeal = 353,
    LabelOnOtherHeal = 354,
    LabelPreservationRate = 355,
    LabelProtected = 356,
    LabelRange = 357,
    LabelRanged = 358,
    LabelRangedAttack = 359,
    LabelRangedDamage = 360,
    LabelReputationImpact = 361,
    LabelResists = 362,
    LabelRightHandAttack = 363,
    LabelSkill = 364,
    LabelStokeFireStrength = 365,
    LabelThrowDamageType = 366,
    LabelTrapDamage = 367,
    LabelUse = 368,
    LabelUses = 369,
    LabelVulnerabilities = 370,
    LabelWeight = 371,
    LabelWeightCapacity = 372,
    LabelWeightReduction = 373,
    LabelWorth = 374,
    LastPlaceYouLeftOff = 375,
    LearnedHowToCreate = 376,
    LeftHand = 377,
    LikelyFailures = 378,
    Limited = 379,
    LostHealth = 380,
    LostHunger = 381,
    LostStamina = 382,
    LostThirst = 383,
    MagicalItemDamage = 384,
    MapDestroyed = 385,
    MapNearlyDestroyed = 386,
    MapNotOfThisArea = 387,
    MaterialsDestroyed = 388,
    MerchantAlreadyTradedItem = 389,
    MessageOfTheDay = 390,
    Metabolism = 391,
    MetabolismSlowed = 392,
    Milk = 393,
    Milking = 394,
    MissedWith = 395,
    MissedYouWith = 396,
    MoveAllOfSameQualityToFacingContainer = 397,
    MoveAllOfSameQualityToInventory = 398,
    MoveAllOfSameQualityToLastOpenedContainer = 399,
    MoveAllOfSameQualityToOpenedContainer = 400,
    MoveAllToFacingContainer = 401,
    MoveAllToInventory = 402,
    MoveAllToLastOpenedContainer = 403,
    MoveAllToOpenedContainer = 404,
    MovedItem = 405,
    MoveOverTrapButDoNotSetOff = 406,
    MoveToFacingContainer = 407,
    MoveToInventory = 408,
    MoveToLastOpenedContainer = 409,
    MoveToOpenedContainer = 410,
    MultiplayerAlreadyVoting = 411,
    MultiplayerCannotStartAnotherVote = 412,
    MultiplayerGamePaused = 413,
    MultiplayerGameResumed = 414,
    MultiplayerPlayerConnected = 415,
    MultiplayerPlayerDied = 416,
    MultiplayerPlayerDisconnected = 417,
    MultiplayerPlayerJoined = 418,
    MultiplayerTravelVoteFailed = 419,
    MultiplayerTravelVotePlayersTooFar = 420,
    MustBeEquippedToIgnite = 421,
    Mysteriously = 422,
    Name = 423,
    NearlyBurnedEquipmentProtectedYou = 424,
    NeedFreeHandToShoot = 425,
    NeedToEquipToShoot = 426,
    NeedToStartTravelsOutside = 427,
    NeedWaterForBoat = 428,
    Negatively = 429,
    NightQuarter1 = 430,
    NightQuarter2 = 431,
    NightQuarter3 = 432,
    NightQuarter4 = 433,
    No = 434,
    NoAmmunitionForThatWeapon = 435,
    NoBlackPowderToFireWeapon = 436,
    NoFireToStokeWith = 437,
    NoFishAtLocation = 438,
    NoGroundWater = 439,
    NoInkToDrawMap = 440,
    NoKindlingOrFuelItemsToStartFire = 441,
    NoKindlingToStartFire = 442,
    NoLongerFeelPainOfBeingBurned = 443,
    NoLongerHostile = 444,
    NoMoreRoomInContainer = 445,
    NoReturnWithoutCompletingChallenges = 446,
    NoRoomForImprovement = 447,
    NoRoomToDrop = 448,
    North = 449,
    Northeast = 450,
    NorthNortheast = 451,
    NorthNorthwest = 452,
    Northwest = 453,
    NotAvailable = 454,
    NotEnoughPurifiedWaterYet = 455,
    NotEnoughTreasureToReturn = 456,
    NotFacingCreatureToOfferThisTo = 457,
    NotFacingLockedObject = 458,
    NotFacingOtherToHeal = 459,
    NotFacingValidItem = 460,
    NothingHereToCarve = 461,
    NothingHereToFill = 462,
    NothingHereToGrasp = 463,
    NothingToGetFromThis = 464,
    NothingToHarvestFromThisGather = 465,
    NothingToSmother = 466,
    NothingUsefulToHarvestYet = 467,
    NoTinderToStartFire = 468,
    NotSuitableToPlant = 469,
    NoWaterInStill = 470,
    NPCStartingDialog1 = 471,
    NPCStartingDialog2 = 472,
    NPCStartingDialog3 = 473,
    NPCStartingDialog4 = 474,
    NPCWelcome = 475,
    NPCWelcomeCredit = 476,
    NumberEight = 477,
    NumberFive = 478,
    NumberFour = 479,
    NumberNine = 480,
    NumberOne = 481,
    NumberSeven = 482,
    NumberSix = 483,
    NumberTen = 484,
    NumberThree = 485,
    NumberTwo = 486,
    ObjectIsLocked = 487,
    ObjectIsLockedAttemptToBreakIt = 488,
    Offer = 489,
    OfferAberrantFail = 490,
    OfferAberrantFailButTamed = 491,
    OpenDoor = 492,
    OverEatingLostStamina = 493,
    OverHydratingLostStamina = 494,
    Pack = 495,
    PaperTurnedToMush = 496,
    ParryTheBlow = 497,
    PartiallyDecodedMap = 498,
    PenultimateAnd = 499,
    Pet = 500,
    PetCreature = 501,
    PickAway = 502,
    PickupAllItems = 503,
    PickupItem = 504,
    Place = 505,
    PlacedOnGround = 506,
    Plant = 507,
    PlantCouldBeHarvested = 508,
    PlantedInGround = 509,
    PlantGatheringWillDestroy = 510,
    PlantHasResourcesToGather = 511,
    PlantHasResourcesToHarvest = 512,
    PlantHighlyFertile = 513,
    Planting = 514,
    PlantIsBare = 515,
    PlantIsFertile = 516,
    PlantIsInStage = 517,
    PlantIsNotFertile = 518,
    PlantNotReadyToHarvest = 519,
    PlantReadyToGather = 520,
    PlantReadyToGatherNotMaximal = 521,
    PlantReadyToHarvest = 522,
    PlantReadyToHarvestNotMaximal = 523,
    Player = 524,
    PlayerHasCompletedChallengeRequirement = 525,
    PlayerHasWonChallenge = 526,
    Poisoned = 527,
    PoisonedLostHealth = 528,
    PoisonWorkedItsCourse = 529,
    Positively = 530,
    PouredOut = 531,
    PouredOutOnYourself = 532,
    PouredWaterIntoStill = 533,
    PourHarmedPlant = 534,
    PourHealedPlant = 535,
    PourHealedPlantFully = 536,
    PourHealedPlantPartially = 537,
    PourIncreasedFertility = 538,
    Prepare = 539,
    Prepared = 540,
    Preserve = 541,
    PreservedFood = 542,
    PurifiedWaterInStill = 543,
    Quality = 544,
    Recent = 545,
    ReduceLength = 546,
    Refine = 547,
    RefusedToBeTamed = 548,
    Reinforce = 549,
    Release = 550,
    RemoveFromQuickslot = 551,
    Repair = 552,
    ReputationDecreased = 553,
    ReputationIncreased = 554,
    ReputationUpdate = 555,
    RequiredForDisassembleLabel = 556,
    RequiredForDisassembly = 557,
    RequiresFireToBeLit = 558,
    RequiresYouFacingFireSource = 559,
    RequiresYouToBeAround = 560,
    Resistant = 561,
    ResistOrVuln = 562,
    ResistOrVulnAll = 563,
    Rest = 564,
    Rested = 565,
    Resting = 566,
    RestingOnGroundNotEffective = 567,
    RestInterrupted = 568,
    RestInterruptedDamage = 569,
    RestInterruptedLoudNoise = 570,
    RestInterruptedPain = 571,
    RestInterruptedStirring = 572,
    RestLongTime = 573,
    RestModerateTime = 574,
    RestOnGround = 575,
    RestShortTime = 576,
    RestTime = 577,
    ReturnedToCivilization = 578,
    ReturningToCivilizationSetOffAgain = 579,
    ReturnsToLife = 580,
    Reveals = 581,
    RevealsEntityAppearsHurt = 582,
    RevealsEntityAppearsUnharmed = 583,
    RevealsEntityAppearsVeryHurt = 584,
    RevealsEntityIsAtPercentHealth = 585,
    RevealsEntityIsInjured = 586,
    RevealsEntityIsMostlyUninjured = 587,
    RevealsEntityIsOnTheVergeOfDeath = 588,
    RevealsEntityIsSeverelyInjured = 589,
    RevealsEntityIsUninjured = 590,
    RevealsEntitySeemsInjured = 591,
    RevealsEntitySeemsUninjured = 592,
    RevealsNumberOfResistancesAndVulnerabilities = 593,
    RevealsResistancesAndVulnerabilities = 594,
    RevealsSomeResistancesAndVulnerabilities = 595,
    Reverse = 596,
    RightHand = 597,
    ScrollMaster = 598,
    ScrollProvidedNoUsefulInsight = 599,
    Seawater = 600,
    SeemsToHaveDrawnEnergy = 601,
    SetTrapOffButNoDamage = 602,
    SetUp = 603,
    ShadowInTheWater = 604,
    Skill = 605,
    SkillHasRaised = 606,
    Skills = 607,
    Sleep = 608,
    Sleeping = 609,
    Slept = 610,
    SlitherSuckerConstricts = 611,
    SlitherSuckerJumpedOnHead = 612,
    SomethingInTheWayOf = 613,
    SomethingInTheWayOfCarveFirst = 614,
    SomethingInTheWayOfFire = 615,
    SomethingInTheWayOfFishing = 616,
    SomethingInTheWayOfPerforming = 617,
    SomethingInTheWayOfPlacing = 618,
    SomethingInTheWayOfPlanting = 619,
    SomethingInWayOfClosingDoor = 620,
    SoothedTheirBurnInjuries = 621,
    SoothedYourBurnInjuries = 622,
    Sort = 623,
    SortedByBestCraftingConsumables = 624,
    SortedByBestCraftingRequirements = 625,
    SortedByCategory = 626,
    SortedByDecay = 627,
    SortedByDurability = 628,
    SortedByGroup = 629,
    SortedByName = 630,
    SortedByQuality = 631,
    SortedByRecent = 632,
    SortedBySkill = 633,
    SortedByUnlockedTime = 634,
    SortedByWeight = 635,
    SortedByWorth = 636,
    South = 637,
    Southeast = 638,
    SouthSoutheast = 639,
    SouthSouthwest = 640,
    Southwest = 641,
    StaminaIsFull = 642,
    StartedFire = 643,
    StartTravelInWater = 644,
    StarvingToDeath = 645,
    SteppingOn = 646,
    StillHasNoWaterToPurify = 647,
    StirredUpClawWorm = 648,
    StirredUpCreature = 649,
    StoppedYourBleeding = 650,
    StopUsingBoat = 651,
    Strength = 652,
    StrengthIncreasing = 653,
    SummonedGuardiansByDiggingTreasure = 654,
    SummonedGuardiansByLockpicking = 655,
    SunNotBrightEnoughToStartFire = 656,
    TakenFromGroundBecomeTamed = 657,
    Tame = 658,
    TamedCreature = 659,
    TeleportBlocked = 660,
    Teleported = 661,
    ThanksBuying = 662,
    ThanksSelling = 663,
    TheCreature = 664,
    TheirFist = 665,
    ThePlant = 666,
    ThereIsNoContainerOnTheStill = 667,
    ThereIsNoSunToStartFire = 668,
    ThereIsNothingToMilk = 669,
    ThisCannotBeMilked = 670,
    Throw = 671,
    ThrownIntoDepths = 672,
    ThrownIntoObstacle = 673,
    ThrownIntoVoid = 674,
    Tier = 675,
    TierGroup = 676,
    Till = 677,
    Tilling = 678,
    TimeIs = 679,
    TimeIsDawn = 680,
    TimeIsDaytime = 681,
    TimeIsDusk = 682,
    TimeIsNighttime = 683,
    TimeIsSunrise = 684,
    TimeIsSunset = 685,
    ToDamageAChest = 686,
    ToFight = 687,
    TooDamaged = 688,
    TooExhaustedToJump = 689,
    Touching = 690,
    TradeBarterCreditForItem = 691,
    TradeItemForBarterCredit = 692,
    TradingWith = 693,
    TrampledFire = 694,
    TrampledIntoGround = 695,
    TrampleIntoGround = 696,
    Trampling = 697,
    TransmogrificationNotPossible = 698,
    Transmogrified = 699,
    Transmogrify = 700,
    TrapMissed = 701,
    TrapStoppedYou = 702,
    TravelToFarOffLands = 703,
    TreasureIsBlocked = 704,
    UnEquip = 705,
    UnEquipAll = 706,
    Unhitch = 707,
    UnhitchCreature = 708,
    Unknown = 709,
    UnknownItem = 710,
    Unlimited = 711,
    UnlockedChest = 712,
    UnlockedTime = 713,
    UnpurifiedFreshWater = 714,
    UnpurifiedWaterInStill = 715,
    UsingBareHands = 716,
    Vulnerable = 717,
    WaitUntilFireCooledToGetWater = 718,
    Water = 719,
    WaterGathering = 720,
    WaterPutOutFire = 721,
    Weight = 722,
    WellIsDry = 723,
    WellIsFull = 724,
    West = 725,
    WestNorthwest = 726,
    WestSouthwest = 727,
    WildGoatRefusedToBeMilked = 728,
    WillNotTrade = 729,
    WithYouSee = 730,
    WorkingYourselfIntoExhaustion = 731,
    WorkingYourselfIntoExhaustionAndDrowning = 732,
    Worth = 733,
    You = 734,
    YouApplied = 735,
    YouAte = 736,
    YouBeginResting = 737,
    YouCannotDoThatYet = 738,
    YouCooledLava = 739,
    YouCrafted = 740,
    YouDied = 741,
    YouDoNotFindTreasureYet = 742,
    YouDrank = 743,
    YouDropTheTorch = 744,
    YouEnchant = 745,
    YouEquip = 746,
    YouFailedTo = 747,
    YouFailedToExtinguishedFireFully = 748,
    YouFailedToHeal = 749,
    YouFailedToHealOther = 750,
    YouFire = 751,
    YouGathered = 752,
    YouGatheredAndDropped = 753,
    YouHardenedCooledLava = 754,
    YouHarvested = 755,
    YouHarvestedAndDropped = 756,
    YouHaveAlreadyLearned = 757,
    YouHaveDied = 758,
    YouHaveEnabledDisabled = 759,
    YouHaveHealedOther = 760,
    YouHaveKilled = 761,
    YouHaveReleased = 762,
    YouHaveTamed = 763,
    YouLostWhileTraveling = 764,
    YouNeedMoreCredit = 765,
    YouNoticeBecomeEnraged = 766,
    YouNoticeDying = 767,
    YouNoticeFertilityDecreasing = 768,
    YouNoticeFertilityIncreasing = 769,
    YouNoticeGrowing = 770,
    YouNoticeLavaCooling = 771,
    YouNoticeLavaHardening = 772,
    YouNoticePerish = 773,
    YouNoticeStumbleInjureItself = 774,
    YouNoticeTakeFromGround = 775,
    YouNoticeWoundsClosing = 776,
    YouNoticeZombieHorde = 777,
    YouOfferedToCreature = 778,
    YouOpen = 779,
    YouPacked = 780,
    YouPickedUp = 781,
    YouRefine = 782,
    YouReinforce = 783,
    YouRepair = 784,
    YourFist = 785,
    YourHands = 786,
    YourHighSkill = 787,
    YourInventory = 788,
    YourLowSkill = 789,
    YourModerateSkill = 790,
    YourRubbingNoEffect = 791,
    YouRub = 792,
    YouSee = 793,
    YouSeeALivingMushroomSpore = 794,
    YouSeeAnAberrant = 795,
    YouSeeASkeletonCollapse = 796,
    YouSeeASlimeCombine = 797,
    YouSeeAZombieBleeding = 798,
    YouSeeDrop = 799,
    YouSeeEngulfFire = 800,
    YouSeeFireSpread = 801,
    YouSeeHelpingPlant = 802,
    YouSeeLay = 803,
    YouSeeLayingTrap = 804,
    YouSeeSpewLava = 805,
    YouSeeSpitAcid = 806,
    YouSeeSpringForth = 807,
    YouSeeSummon = 808,
    YouSeeSwampFlood = 809,
    YouSeeTrampling = 810,
    YouSetTheTrapOff = 811,
    YouStokeTheFireElemental = 812,
    YouThrew = 813,
    YouTilled = 814,
    YouUnequip = 815,
    YouUsed = 816
}
export default Message;
