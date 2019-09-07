/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
declare enum Message {
    None = 0,
    Aberrant = 1,
    AboutHours = 2,
    ActionAttachContainerAlreadyHasContainer = 3,
    ActionAttachContainerAttachedContainer = 4,
    ActionAttachContainerAttachingContainer = 5,
    ActionAttachContainerNothingToAttachContainerTo = 6,
    ActionDetachContainerDetachContainer = 7,
    ActionMeleeHasToBeEquipped = 8,
    ActionMeleeNothingToAttack = 9,
    ActionNavigateMoon = 10,
    ActionNavigateNotOverworld = 11,
    ActionNavigateSun = 12,
    ActionNavigateUseSextant = 13,
    ActionTestDepthNothingToTest = 14,
    ActionTestDepthWell = 15,
    AddedFuelToFire = 16,
    AddedFuelToTorch = 17,
    AddToQuickslot = 18,
    Advanced = 19,
    All = 20,
    AllEquipmentUnEquipped = 21,
    AlreadyDesalinatedWaterInStill = 22,
    AlreadyFullyRefined = 23,
    AlreadyFullyRepaired = 24,
    AlreadyPreserved = 25,
    AlreadyWaterInStill = 26,
    AnUnknownItem = 27,
    AppearedNotEffectiveForGathering = 28,
    AppearsToBeAberrant = 29,
    ArmorAppeared = 30,
    ArmorProtectedFromInjuryAgainst = 31,
    Attack = 32,
    AttemptedToDropAllIntoFire = 33,
    AttemptedToPlaceAllOnGround = 34,
    AttemptToTill = 35,
    Back = 36,
    BadlyBurnedLostHealth = 37,
    BarteringSkillsProvided = 38,
    BasedOnItSeems = 39,
    BeenPoisoned = 40,
    BeginSleeping = 41,
    BeginUsingRaft = 42,
    Belt = 43,
    BestForCraftingConsumables = 44,
    BestForCraftingRequirements = 45,
    BleedingHasStopped = 46,
    BleedingProfusely = 47,
    BleedingToDeathLostHealth = 48,
    Blunt = 49,
    BookBlank = 50,
    BookContains = 51,
    BookCrumbles = 52,
    BookDiagrams = 53,
    BookEmpty = 54,
    BookNothing = 55,
    BookOpen = 56,
    BookScribbles = 57,
    BothEffectiveIneffective = 58,
    BothHands = 59,
    BrokeIntoPieces = 60,
    BrokenOnImpact = 61,
    BrokenWhileFiring = 62,
    Build = 63,
    Burned = 64,
    CannotAddAnyMoreFuel = 65,
    CannotBePerformedOverWater = 66,
    CannotBePreserved = 67,
    CannotBeRefined = 68,
    CannotBeReinforced = 69,
    CannotBeRepaired = 70,
    CannotBeTamed = 71,
    CannotBuildHere = 72,
    CannotDoThatHere = 73,
    CannotDropHere = 74,
    CannotEquipThatThere = 75,
    CannotFishFor = 76,
    CannotHere = 77,
    CannotInWater = 78,
    CannotLeave = 79,
    CannotPickupWhenFull = 80,
    CannotPickUpWhileLit = 81,
    CannotPickUpWithItemsInside = 82,
    CannotPlaceContainerInItself = 83,
    CannotPlaceHere = 84,
    CannotPlaceThatFromHere = 85,
    CannotPlaceThatHere = 86,
    CannotPlantHereTilled = 87,
    CannotRepairWhileLit = 88,
    CannotRestHere = 89,
    CannotSeeHere = 90,
    CannotSleepHere = 91,
    CannotStartFireHere = 92,
    CannotToTellTime = 93,
    CarryingTooMuchWeight = 94,
    CartographyDirection = 95,
    CartographyDirectionUnsure = 96,
    CartographyDistanceHighSkillExactDistance = 97,
    CartographyDistanceHighSkillFarAway = 98,
    CartographyDistanceHighSkillInRegion = 99,
    CartographyDistanceHighSkillNearby = 100,
    CartographyDistanceLowSkillNearby = 101,
    CartographyDistanceLowSkillUnsure = 102,
    CartographyDistanceMedSkillFarAway = 103,
    CartographyDistanceMedSkillNearby = 104,
    CartographyDistanceMedSkillVeryClose = 105,
    CarvedUpCorpse = 106,
    CarveWithTool = 107,
    Carving = 108,
    CastYourLine = 109,
    Category = 110,
    CaughtFish = 111,
    ChatBanCommand = 112,
    ChatBannedCommand = 113,
    ChatCommandsCommand = 114,
    ChatCommandsCommandCommand = 115,
    ChatPingCommand = 116,
    ChatPlayerMessage = 117,
    ChatPlayersCommand = 118,
    ChatServerMessage = 119,
    ChatUnbanCommand = 120,
    ChatUnknownCommand = 121,
    Chest = 122,
    ClearedBlood = 123,
    ClearMessages = 124,
    Clockwise = 125,
    CloseContainer = 126,
    CloseDoor = 127,
    CloseToBeingDestroyed = 128,
    CollectObjectWithHands = 129,
    Consumed = 130,
    Container = 131,
    Cook = 132,
    Cooked = 133,
    CopySelectedText = 134,
    CorpseOf = 135,
    CorpseOfNamed = 136,
    CouldNotDecipher = 137,
    Counterclockwise = 138,
    Craft = 139,
    Crafted = 140,
    Crafts = 141,
    CreatureAngered = 142,
    CreatureAppears = 143,
    CreatureAppeased = 144,
    CreatureExcrement = 145,
    CreatureHappinessHigh = 146,
    CreatureHappinessLow = 147,
    CreatureHappinessLowest = 148,
    CreatureHappinessNormal = 149,
    CreatureIdolAttractedCreature = 150,
    CreatureUntamed = 151,
    CuredYourPoison = 152,
    Cut = 153,
    DamageAppeared = 154,
    DamagedByPouring = 155,
    DayQuarter1 = 156,
    DayQuarter2 = 157,
    DayQuarter3 = 158,
    DayQuarter4 = 159,
    DealtNoDamageToYou = 160,
    DeathBy = 161,
    DeathByBleeding = 162,
    DeathByBurning = 163,
    DeathByChallengeWinner = 164,
    DeathByConsumption = 165,
    DeathByDrowning = 166,
    DeathByExhaustion = 167,
    DeathByFistByPlayer = 168,
    DeathByPoison = 169,
    DeathBySteppingOn = 170,
    DeathByTrap = 171,
    DeathByWeaponByPlayer = 172,
    Decay = 173,
    DestroyedFromUse = 174,
    DetachContainer = 175,
    Dexterity = 176,
    DexterityIncreasing = 177,
    DidNotSeemToBeHurting = 178,
    Dig = 179,
    DigAway = 180,
    Digging = 181,
    DigWithHands = 182,
    Disabled = 183,
    Disassemble = 184,
    DisassembleAction = 185,
    Disassembling = 186,
    DiscoveredCaveEntrance = 187,
    DiscoveredInTheBottle = 188,
    DiscoveredLavaPassage = 189,
    Dismantle = 190,
    DismantleAction = 191,
    DismantleLabel = 192,
    Dismantling = 193,
    DismantlingRequires = 194,
    DoNotHaveTreasureMaps = 195,
    DoNotProduceAnyResources = 196,
    DoodadAppearsDamaged = 197,
    DoodadAppearsOnVergeOfBreaking = 198,
    DoodadAppearsUnscathed = 199,
    DoodadCauseStatus = 200,
    DoodadGroupTier = 201,
    DoodadPreservation = 202,
    DoodadPreservationHigh = 203,
    DoodadPreservationLow = 204,
    DoodadPreservationModerate = 205,
    DoodadPreservationVeryHigh = 206,
    DoodadPreservationVeryLow = 207,
    DoodadShowsSignsOfWear = 208,
    DrewSurroundings = 209,
    Drink = 210,
    Drop = 211,
    DropAll = 212,
    DropAllOfSameQuality = 213,
    DroppedIntoDepths = 214,
    DroppedIntoFire = 215,
    DueToDehydration = 216,
    DueToStarvation = 217,
    DugTreasureOut = 218,
    DumpContentsOfContainerInInventory = 219,
    Durability = 220,
    DyingOfDehydration = 221,
    EarnedMilestone = 222,
    East = 223,
    EastNortheast = 224,
    EastSoutheast = 225,
    Effective = 226,
    Enabled = 227,
    Enchant = 228,
    EquipmentPreventedStatusEffects = 229,
    EquipTo = 230,
    ErrorHasOccured = 231,
    Expert = 232,
    ExtinguishedFire = 233,
    ExtinguishedLightSource = 234,
    FailedToAddFuelToTorch = 235,
    FailedToCatchFish = 236,
    FailedToCauseDamage = 237,
    FailedToCauseYouDamage = 238,
    FailedToDrawMap = 239,
    FailedToEnchant = 240,
    FailedToIgniteTorch = 241,
    FailedToPickLock = 242,
    FailedToPlant = 243,
    FailedToPreserve = 244,
    FailedToRefine = 245,
    FailedToReinforce = 246,
    FailedToRepair = 247,
    FailedToStartFire = 248,
    FailedToTame = 249,
    FailedToTransmogrify = 250,
    Feet = 251,
    FeltBurningPainLostHealth = 252,
    FewMinutes = 253,
    Filled = 254,
    FilledFrom = 255,
    Fire = 256,
    FireAlmostExtinguished = 257,
    FireAroundYouIsWarm = 258,
    FiredIntoObstacle = 259,
    FireIsHealthy = 260,
    FireIsRaging = 261,
    FireIsStruggling = 262,
    FireOverflowed = 263,
    FireOverflowedFireElemental = 264,
    FireReducedToEmbers = 265,
    FireSource = 266,
    FishingWithNoBait = 267,
    FreshWater = 268,
    FromTheStill = 269,
    Fuel = 270,
    FullyDecodedMap = 271,
    GainedHealth = 272,
    GainedHunger = 273,
    GainedStamina = 274,
    GainedThirst = 275,
    GameHasBeenSavedIsTakingUpMB = 276,
    Gather = 277,
    GatherDestroy = 278,
    Gathering = 279,
    GatherWithHands = 280,
    GhostNoActions = 281,
    GhostOf = 282,
    GoatHasNoMilk = 283,
    GrabAll = 284,
    Group = 285,
    HackAway = 286,
    HandProtectionPreventedInjury = 287,
    Hands = 288,
    HandsNotEffectiveForDigging = 289,
    Harvest = 290,
    Harvesting = 291,
    HarvestWithHands = 292,
    HasBeenHurtByATrap = 293,
    HasDecayed = 294,
    HasHitYouForDamage = 295,
    HasNoEffect = 296,
    HasSetTrapOffNoDamage = 297,
    HasSplit = 298,
    Head = 299,
    Held = 300,
    Help = 301,
    HelpGrow = 302,
    Here = 303,
    Hints = 304,
    HintsDisabled = 305,
    HintsEnabled = 306,
    Hitch = 307,
    HitchAttempt = 308,
    HitchCreature = 309,
    HitchDisabled = 310,
    HitchInUse = 311,
    HitForDamage = 312,
    HitYouForDamage = 313,
    Hour = 314,
    Hours = 315,
    HurtHandsHittingWithoutWeapons = 316,
    HurtHandsWithNoTool = 317,
    Ignite = 318,
    IgnitedTorch = 319,
    Ineffective = 320,
    InjuredFromTrap = 321,
    InNeedOfRepair = 322,
    Intermediate = 323,
    Inventory = 324,
    IsInTheWayOfPickingUp = 325,
    It = 326,
    ItAlsoReveals = 327,
    ItAlsoSeems = 328,
    ItContains = 329,
    ItsWeightCapacity = 330,
    JoinedAServer = 331,
    Jump = 332,
    Killed = 333,
    KnowledgeHasIncreased = 334,
    LabelAdditionalRequirements = 335,
    LabelAttackFromTactics = 336,
    LabelBase = 337,
    LabelCanIncrease = 338,
    LabelCraftingReputation = 339,
    LabelCraftingSkillReputation = 340,
    LabelDecay = 341,
    LabelDefense = 342,
    LabelDurability = 343,
    LabelEquip = 344,
    LabelGrouping = 345,
    LabelHave = 346,
    LabelLeftHandAttack = 347,
    LabelLevel = 348,
    LabelLightSourceWhenLit = 349,
    LabelOnCure = 350,
    LabelOnDrink = 351,
    LabelOnEat = 352,
    LabelOnEquip = 353,
    LabelOnHeal = 354,
    LabelOnOtherHeal = 355,
    LabelPreservationRate = 356,
    LabelProtected = 357,
    LabelRange = 358,
    LabelRanged = 359,
    LabelRangedAttack = 360,
    LabelRangedDamage = 361,
    LabelReputationImpact = 362,
    LabelRequires = 363,
    LabelResists = 364,
    LabelRightHandAttack = 365,
    LabelSkill = 366,
    LabelStokeFireStrength = 367,
    LabelThrowDamageType = 368,
    LabelTrapDamage = 369,
    LabelUse = 370,
    LabelUses = 371,
    LabelVulnerabilities = 372,
    LabelWeight = 373,
    LabelWeightCapacity = 374,
    LabelWeightReduction = 375,
    LabelWorth = 376,
    LastPlaceYouLeftOff = 377,
    LearnedHowToCreate = 378,
    LeftHand = 379,
    LeftHandEquip = 380,
    LegendaryItemDamage = 381,
    Legs = 382,
    LikelyFailures = 383,
    Limited = 384,
    LostHealth = 385,
    LostHunger = 386,
    LostStamina = 387,
    LostThirst = 388,
    MapNotOfThisArea = 389,
    MaterialsDestroyed = 390,
    MessageOfTheDay = 391,
    Metabolism = 392,
    MetabolismSlowed = 393,
    Milk = 394,
    Milking = 395,
    MissedWith = 396,
    MissedYouWith = 397,
    MoreInformation = 398,
    MoveAllOfSameQualityToFacingContainer = 399,
    MoveAllOfSameQualityToInventory = 400,
    MoveAllOfSameQualityToLastOpenedContainer = 401,
    MoveAllOfSameQualityToOpenedContainer = 402,
    MoveAllToFacingContainer = 403,
    MoveAllToInventory = 404,
    MoveAllToLastOpenedContainer = 405,
    MoveAllToOpenedContainer = 406,
    MovedItem = 407,
    MoveOverTrapButDoNotSetOff = 408,
    MoveToFacingContainer = 409,
    MoveToInventory = 410,
    MoveToLastOpenedContainer = 411,
    MoveToOpenedContainer = 412,
    MultiplayerGamePaused = 413,
    MultiplayerGameResumed = 414,
    MultiplayerPlayerConnected = 415,
    MultiplayerPlayerDied = 416,
    MultiplayerPlayerDisconnected = 417,
    MultiplayerPlayerJoined = 418,
    MustBeEquippedToIgnite = 419,
    MustCastIntoWater = 420,
    Mysteriously = 421,
    Name = 422,
    NearlyBurnedEquipmentProtectedYou = 423,
    Neck = 424,
    NeedAShovelToDigTreasure = 425,
    NeedFishingNetForTreasure = 426,
    NeedFreeHandToShoot = 427,
    NeedToEquipToShoot = 428,
    NeedToStartTravelsOutside = 429,
    NeedWaterForRaft = 430,
    Negatively = 431,
    NightQuarter1 = 432,
    NightQuarter2 = 433,
    NightQuarter3 = 434,
    NightQuarter4 = 435,
    No = 436,
    NoAmmunitionForThatWeapon = 437,
    NoBlackPowderToFireWeapon = 438,
    NoFireToStokeWith = 439,
    NoFishAtLocation = 440,
    NoGroundWater = 441,
    NoInkToDrawMap = 442,
    NoKindlingOrFuelItemsToStartFire = 443,
    NoKindlingToStartFire = 444,
    NoLongerFeelPainOfBeingBurned = 445,
    NoLongerHostile = 446,
    NoMoreRoomInContainer = 447,
    NoNeedToStokeFire = 448,
    NoReturnWithoutCompletingChallenges = 449,
    NoRoomForImprovement = 450,
    NoRoomToDrop = 451,
    North = 452,
    Northeast = 453,
    NorthNortheast = 454,
    NorthNorthwest = 455,
    Northwest = 456,
    NotAvailable = 457,
    NotEnoughPurifiedWaterYet = 458,
    NotEnoughTreasureToReturn = 459,
    NotFacingCreatureToOfferThisTo = 460,
    NotFacingLockedObject = 461,
    NotFacingOtherToHeal = 462,
    NotFacingValidItem = 463,
    NothingHereToCarve = 464,
    NothingHereToFill = 465,
    NothingHereToGrasp = 466,
    NothingToGetFromThis = 467,
    NothingToHarvestFromThisGather = 468,
    NothingToSmother = 469,
    NothingUsefulToHarvestYet = 470,
    NoTinderToStartFire = 471,
    NotInRangeOfTreasure = 472,
    NotSuitableToPlant = 473,
    NoWaterInStill = 474,
    NPCStartingDialog1 = 475,
    NPCStartingDialog2 = 476,
    NPCStartingDialog3 = 477,
    NPCStartingDialog4 = 478,
    NPCWelcome = 479,
    NPCWelcomeCredit = 480,
    NumberEight = 481,
    NumberFive = 482,
    NumberFour = 483,
    NumberNine = 484,
    NumberOne = 485,
    NumberSeven = 486,
    NumberSix = 487,
    NumberTen = 488,
    NumberThree = 489,
    NumberTwo = 490,
    ObjectIsLocked = 491,
    ObjectIsLockedAttemptToBreakIt = 492,
    Offer = 493,
    OfferAberrantFail = 494,
    OfferAberrantFailButTamed = 495,
    OpenDoor = 496,
    OverEatingLostStamina = 497,
    OverHydratingLostStamina = 498,
    Pack = 499,
    PaperTurnedToMush = 500,
    PartiallyDecodedMap = 501,
    PenultimateAnd = 502,
    Pet = 503,
    PetCreature = 504,
    PickAway = 505,
    PickupAllItems = 506,
    PickupItem = 507,
    Piercing = 508,
    Place = 509,
    PlacedOnGround = 510,
    Plant = 511,
    PlantCouldBeHarvested = 512,
    PlantedInGround = 513,
    PlantGatheringWillDestroy = 514,
    PlantHasResourcesToGather = 515,
    PlantHasResourcesToHarvest = 516,
    PlantHighlyFertile = 517,
    Planting = 518,
    PlantIsDead = 519,
    PlantIsFertile = 520,
    PlantIsInStage = 521,
    PlantIsNotFertile = 522,
    PlantNotReadyToHarvest = 523,
    PlantReadyToGather = 524,
    PlantReadyToGatherNotMaximal = 525,
    PlantReadyToHarvest = 526,
    PlantReadyToHarvestNotMaximal = 527,
    Player = 528,
    PlayerHasCompletedChallengeRequirement = 529,
    PlayerHasWonChallenge = 530,
    Poisoned = 531,
    PoisonedLostHealth = 532,
    PoisonWorkedItsCourse = 533,
    Positively = 534,
    PouredOut = 535,
    PouredOutOnYourself = 536,
    PouredWaterIntoStill = 537,
    PourHarmedPlant = 538,
    PourHealedPlant = 539,
    PourHealedPlantFully = 540,
    PourHealedPlantPartially = 541,
    PourIncreasedFertility = 542,
    Preserve = 543,
    PreservedFood = 544,
    PurifiedWaterInStill = 545,
    Quality = 546,
    Recent = 547,
    ReduceLength = 548,
    Refine = 549,
    RefusedToBeTamed = 550,
    Reinforce = 551,
    Release = 552,
    RemoveFromQuickslot = 553,
    Repair = 554,
    RequiredForDisassembleLabel = 555,
    RequiredForDisassembly = 556,
    RequiresFireToBeLit = 557,
    RequiresYouFacingFireSource = 558,
    RequiresYouToBeAround = 559,
    Resistant = 560,
    ResistOrVuln = 561,
    ResistOrVulnAll = 562,
    Rest = 563,
    Rested = 564,
    Resting = 565,
    RestingOnGroundNotEffective = 566,
    RestInterrupted = 567,
    RestInterruptedDamage = 568,
    RestInterruptedLoudNoise = 569,
    RestInterruptedPain = 570,
    RestInterruptedStirring = 571,
    RestLongTime = 572,
    RestModerateTime = 573,
    RestOnGround = 574,
    RestShortTime = 575,
    RestTime = 576,
    ReturnedToCivilization = 577,
    ReturningToCivilizationSetOffAgain = 578,
    ReturnsToLife = 579,
    Reveals = 580,
    RevealsEntityAppearsHurt = 581,
    RevealsEntityAppearsUnharmed = 582,
    RevealsEntityAppearsVeryHurt = 583,
    RevealsEntityIsAtPercentHealth = 584,
    RevealsEntityIsInjured = 585,
    RevealsEntityIsMostlyUninjured = 586,
    RevealsEntityIsOnTheVergeOfDeath = 587,
    RevealsEntityIsSeverelyInjured = 588,
    RevealsEntitySeemsInjured = 589,
    RevealsEntitySeemsUninjured = 590,
    RevealsNumberOfResistancesAndVulnerabilities = 591,
    RevealsResistancesAndVulnerabilities = 592,
    RevealsSomeResistancesAndVulnerabilities = 593,
    Reverse = 594,
    RightHand = 595,
    RightHandEquip = 596,
    ScrollMaster = 597,
    ScrollProvidedNoUsefulInsight = 598,
    Seawater = 599,
    SeaweedFromWater = 600,
    SeemsToHaveDrawnEnergy = 601,
    SetTrapOffButNoDamage = 602,
    SetUp = 603,
    ShadowInTheWater = 604,
    Simple = 605,
    Skill = 606,
    SkillHasRaised = 607,
    Skills = 608,
    Slashing = 609,
    Sleep = 610,
    Sleeping = 611,
    Slept = 612,
    SlitherSuckerConstricts = 613,
    SlitherSuckerJumpedOnHead = 614,
    Some = 615,
    SomethingInTheWayOf = 616,
    SomethingInTheWayOfCarveFirst = 617,
    SomethingInTheWayOfFire = 618,
    SomethingInTheWayOfFishing = 619,
    SomethingInTheWayOfPerforming = 620,
    SomethingInTheWayOfPlacing = 621,
    SomethingInTheWayOfPlanting = 622,
    SomethingInWayOfClosingDoor = 623,
    SoothedTheirBurnInjuries = 624,
    SoothedYourBurnInjuries = 625,
    Sort = 626,
    SortedByBestCraftingConsumables = 627,
    SortedByBestCraftingRequirements = 628,
    SortedByCategory = 629,
    SortedByDecay = 630,
    SortedByDurability = 631,
    SortedByGroup = 632,
    SortedByName = 633,
    SortedByQuality = 634,
    SortedByRecent = 635,
    SortedBySkill = 636,
    SortedByUnlockedTime = 637,
    SortedByWeight = 638,
    South = 639,
    Southeast = 640,
    SouthSoutheast = 641,
    SouthSouthwest = 642,
    Southwest = 643,
    StaminaIsFull = 644,
    StartedFire = 645,
    StartTravelInWater = 646,
    StarvingToDeath = 647,
    SteppingOnHasInjuredYouForDamage = 648,
    StillHasNoWaterToPurify = 649,
    StirredUpClawWorm = 650,
    StirredUpCreature = 651,
    StoppedYourBleeding = 652,
    StopUsingRaft = 653,
    Strength = 654,
    StrengthIncreasing = 655,
    SummonedGuardianByLockpicking = 656,
    SummonedGuardiansByDiggingTreasure = 657,
    SunNotBrightEnoughToStartFire = 658,
    TakenFromGroundBecomeTamed = 659,
    Tame = 660,
    TamedCreature = 661,
    TeleportBlocked = 662,
    Teleported = 663,
    ThanksBuying = 664,
    ThanksSelling = 665,
    The = 666,
    TheCreature = 667,
    TheirFist = 668,
    ThePlant = 669,
    ThereIsNoContainerOnTheStill = 670,
    ThereIsNoSunToStartFire = 671,
    ThereIsNothingToMilk = 672,
    ThisCannotBeMilked = 673,
    Throw = 674,
    ThrownIntoDepths = 675,
    ThrownIntoObstacle = 676,
    Tier = 677,
    TierGroup = 678,
    Till = 679,
    Tilling = 680,
    TimeIs = 681,
    TimeIsDawn = 682,
    TimeIsDaytime = 683,
    TimeIsDusk = 684,
    TimeIsNighttime = 685,
    TimeIsSunrise = 686,
    TimeIsSunset = 687,
    ToDamageAChest = 688,
    ToFight = 689,
    TooDamaged = 690,
    TooExhaustedToJump = 691,
    TradeBarterCreditForItem = 692,
    TradeItemForBarterCredit = 693,
    TradingWith = 694,
    TrampledFire = 695,
    TrampledIntoGround = 696,
    TrampleIntoGround = 697,
    Trampling = 698,
    Transmogrified = 699,
    Transmogrify = 700,
    TrapMissed = 701,
    TrapStoppedYou = 702,
    TravelToFarOffLands = 703,
    TreasureIsBlocked = 704,
    True = 705,
    UnEquip = 706,
    UnEquipAll = 707,
    Unhitch = 708,
    UnhitchCreature = 709,
    Unknown = 710,
    UnknownItem = 711,
    Unlimited = 712,
    UnlockedChest = 713,
    UnlockedTime = 714,
    UnpurifiedFreshWater = 715,
    UnpurifiedWaterInStill = 716,
    UsingBareHands = 717,
    Vulnerable = 718,
    WaitUntilFireCooledToGetWater = 719,
    Water = 720,
    WaterGathering = 721,
    WaterPutOutFire = 722,
    Weight = 723,
    WeightCapacity = 724,
    WellIsDry = 725,
    WellIsFull = 726,
    West = 727,
    WestNorthwest = 728,
    WestSouthwest = 729,
    WildGoatRefusedToBeMilked = 730,
    WillNotTrade = 731,
    With = 732,
    WithYouSee = 733,
    WorkingYourselfIntoExhaustion = 734,
    WorkingYourselfIntoExhaustionAndDrowning = 735,
    You = 736,
    YouApplied = 737,
    YouAte = 738,
    YouBeginResting = 739,
    YouCannotDoThatYet = 740,
    YouCooledLava = 741,
    YouCrafted = 742,
    YouDied = 743,
    YouDisassembled = 744,
    YouDismantled = 745,
    YouDrank = 746,
    YouDropTheTorch = 747,
    YouEnchant = 748,
    YouEnchantMutate = 749,
    YouEquip = 750,
    YouFailedTo = 751,
    YouFailedToExtinguishedFireFully = 752,
    YouFailedToHeal = 753,
    YouFailedToHealOther = 754,
    YouFire = 755,
    YouGathered = 756,
    YouGatheredAndDropped = 757,
    YouHardenedCooledLava = 758,
    YouHarvested = 759,
    YouHarvestedAndDropped = 760,
    YouHaveAlreadyLearned = 761,
    YouHaveDied = 762,
    YouHaveEnabledDisabled = 763,
    YouHaveHealedOther = 764,
    YouHaveKilled = 765,
    YouHaveReleased = 766,
    YouHaveTamed = 767,
    YouNeedMoreCredit = 768,
    YouNoticeBecomeEnraged = 769,
    YouNoticeDying = 770,
    YouNoticeFertilityDecreasing = 771,
    YouNoticeFertilityIncreasing = 772,
    YouNoticeGrowing = 773,
    YouNoticeLavaCooling = 774,
    YouNoticeLavaHardening = 775,
    YouNoticePerish = 776,
    YouNoticeStumbleInjureItself = 777,
    YouNoticeTakeFromGround = 778,
    YouNoticeWoundsClosing = 779,
    YouNoticeZombieHorde = 780,
    YouOfferedToCreature = 781,
    YouOpen = 782,
    YouPacked = 783,
    YouPickedUp = 784,
    YouRefine = 785,
    YouReinforce = 786,
    YouRepair = 787,
    YourFist = 788,
    YourHands = 789,
    YourHighSkill = 790,
    YourInventory = 791,
    YourLowSkill = 792,
    YourModerateSkill = 793,
    YourRubbingNoEffect = 794,
    YouRub = 795,
    YouSalvaged = 796,
    YouSee = 797,
    YouSeeAnAberrant = 798,
    YouSeeASlimeCombine = 799,
    YouSeeDrop = 800,
    YouSeeEngulfFire = 801,
    YouSeeHelpingPlant = 802,
    YouSeeLay = 803,
    YouSeeLayingTrap = 804,
    YouSeeSpewLava = 805,
    YouSeeSpitAcid = 806,
    YouSeeSpringForth = 807,
    YouSeeSummon = 808,
    YouSeeSwampFlood = 809,
    YouSeeTrampling = 810,
    YouSeparate = 811,
    YouSetTheTrapOff = 812,
    YouStokeTheFireElemental = 813,
    YouThrew = 814,
    YouTilled = 815,
    YouUnequip = 816,
    YouUsed = 817
}
export default Message;
