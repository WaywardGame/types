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
    LabelCraftingRequires = 340,
    LabelCraftingSkillReputation = 341,
    LabelDecay = 342,
    LabelDefense = 343,
    LabelDismantlingRequires = 344,
    LabelDurability = 345,
    LabelEquip = 346,
    LabelGrouping = 347,
    LabelHave = 348,
    LabelLeftHandAttack = 349,
    LabelLevel = 350,
    LabelLightSourceWhenLit = 351,
    LabelOnCure = 352,
    LabelOnDrink = 353,
    LabelOnEat = 354,
    LabelOnEquip = 355,
    LabelOnHeal = 356,
    LabelOnOtherHeal = 357,
    LabelPreservationRate = 358,
    LabelProtected = 359,
    LabelRange = 360,
    LabelRanged = 361,
    LabelRangedAttack = 362,
    LabelRangedDamage = 363,
    LabelReputationImpact = 364,
    LabelResists = 365,
    LabelRightHandAttack = 366,
    LabelSkill = 367,
    LabelStokeFireStrength = 368,
    LabelThrowDamageType = 369,
    LabelTrapDamage = 370,
    LabelUse = 371,
    LabelUses = 372,
    LabelVulnerabilities = 373,
    LabelWeight = 374,
    LabelWeightCapacity = 375,
    LabelWeightReduction = 376,
    LabelWorth = 377,
    LastPlaceYouLeftOff = 378,
    LearnedHowToCreate = 379,
    LeftHand = 380,
    LeftHandEquip = 381,
    LegendaryItemDamage = 382,
    Legs = 383,
    LikelyFailures = 384,
    Limited = 385,
    LostHealth = 386,
    LostHunger = 387,
    LostStamina = 388,
    LostThirst = 389,
    MapNotOfThisArea = 390,
    MaterialsDestroyed = 391,
    MessageOfTheDay = 392,
    Metabolism = 393,
    MetabolismSlowed = 394,
    Milk = 395,
    Milking = 396,
    MissedWith = 397,
    MissedYouWith = 398,
    MoreInformation = 399,
    MoveAllOfSameQualityToFacingContainer = 400,
    MoveAllOfSameQualityToInventory = 401,
    MoveAllOfSameQualityToLastOpenedContainer = 402,
    MoveAllOfSameQualityToOpenedContainer = 403,
    MoveAllToFacingContainer = 404,
    MoveAllToInventory = 405,
    MoveAllToLastOpenedContainer = 406,
    MoveAllToOpenedContainer = 407,
    MovedItem = 408,
    MoveOverTrapButDoNotSetOff = 409,
    MoveToFacingContainer = 410,
    MoveToInventory = 411,
    MoveToLastOpenedContainer = 412,
    MoveToOpenedContainer = 413,
    MultiplayerGamePaused = 414,
    MultiplayerGameResumed = 415,
    MultiplayerPlayerConnected = 416,
    MultiplayerPlayerDied = 417,
    MultiplayerPlayerDisconnected = 418,
    MultiplayerPlayerJoined = 419,
    MustBeEquippedToIgnite = 420,
    MustCastIntoWater = 421,
    Mysteriously = 422,
    Name = 423,
    NearlyBurnedEquipmentProtectedYou = 424,
    Neck = 425,
    NeedAShovelToDigTreasure = 426,
    NeedFishingNetForTreasure = 427,
    NeedFreeHandToShoot = 428,
    NeedToEquipToShoot = 429,
    NeedToStartTravelsOutside = 430,
    NeedWaterForRaft = 431,
    Negatively = 432,
    NightQuarter1 = 433,
    NightQuarter2 = 434,
    NightQuarter3 = 435,
    NightQuarter4 = 436,
    No = 437,
    NoAmmunitionForThatWeapon = 438,
    NoBlackPowderToFireWeapon = 439,
    NoFireToStokeWith = 440,
    NoFishAtLocation = 441,
    NoGroundWater = 442,
    NoInkToDrawMap = 443,
    NoKindlingOrFuelItemsToStartFire = 444,
    NoKindlingToStartFire = 445,
    NoLongerFeelPainOfBeingBurned = 446,
    NoLongerHostile = 447,
    NoMoreRoomInContainer = 448,
    NoNeedToStokeFire = 449,
    NoReturnWithoutCompletingChallenges = 450,
    NoRoomForImprovement = 451,
    NoRoomToDrop = 452,
    North = 453,
    Northeast = 454,
    NorthNortheast = 455,
    NorthNorthwest = 456,
    Northwest = 457,
    NotAvailable = 458,
    NotEnoughPurifiedWaterYet = 459,
    NotEnoughTreasureToReturn = 460,
    NotFacingCreatureToOfferThisTo = 461,
    NotFacingLockedObject = 462,
    NotFacingOtherToHeal = 463,
    NotFacingValidItem = 464,
    NothingHereToCarve = 465,
    NothingHereToFill = 466,
    NothingHereToGrasp = 467,
    NothingToGetFromThis = 468,
    NothingToHarvestFromThisGather = 469,
    NothingToSmother = 470,
    NothingUsefulToHarvestYet = 471,
    NoTinderToStartFire = 472,
    NotInRangeOfTreasure = 473,
    NotSuitableToPlant = 474,
    NoWaterInStill = 475,
    NPCStartingDialog1 = 476,
    NPCStartingDialog2 = 477,
    NPCStartingDialog3 = 478,
    NPCStartingDialog4 = 479,
    NPCWelcome = 480,
    NPCWelcomeCredit = 481,
    NumberEight = 482,
    NumberFive = 483,
    NumberFour = 484,
    NumberNine = 485,
    NumberOne = 486,
    NumberSeven = 487,
    NumberSix = 488,
    NumberTen = 489,
    NumberThree = 490,
    NumberTwo = 491,
    ObjectIsLocked = 492,
    ObjectIsLockedAttemptToBreakIt = 493,
    Offer = 494,
    OfferAberrantFail = 495,
    OfferAberrantFailButTamed = 496,
    OpenDoor = 497,
    OverEatingLostStamina = 498,
    OverHydratingLostStamina = 499,
    Pack = 500,
    PaperTurnedToMush = 501,
    ParryTheBlow = 502,
    PartiallyDecodedMap = 503,
    PenultimateAnd = 504,
    Pet = 505,
    PetCreature = 506,
    PickAway = 507,
    PickupAllItems = 508,
    PickupItem = 509,
    Piercing = 510,
    Place = 511,
    PlacedOnGround = 512,
    Plant = 513,
    PlantCouldBeHarvested = 514,
    PlantedInGround = 515,
    PlantGatheringWillDestroy = 516,
    PlantHasResourcesToGather = 517,
    PlantHasResourcesToHarvest = 518,
    PlantHighlyFertile = 519,
    Planting = 520,
    PlantIsBare = 521,
    PlantIsFertile = 522,
    PlantIsInStage = 523,
    PlantIsNotFertile = 524,
    PlantNotReadyToHarvest = 525,
    PlantReadyToGather = 526,
    PlantReadyToGatherNotMaximal = 527,
    PlantReadyToHarvest = 528,
    PlantReadyToHarvestNotMaximal = 529,
    Player = 530,
    PlayerHasCompletedChallengeRequirement = 531,
    PlayerHasWonChallenge = 532,
    Poisoned = 533,
    PoisonedLostHealth = 534,
    PoisonWorkedItsCourse = 535,
    Positively = 536,
    PouredOut = 537,
    PouredOutOnYourself = 538,
    PouredWaterIntoStill = 539,
    PourHarmedPlant = 540,
    PourHealedPlant = 541,
    PourHealedPlantFully = 542,
    PourHealedPlantPartially = 543,
    PourIncreasedFertility = 544,
    Preserve = 545,
    PreservedFood = 546,
    PurifiedWaterInStill = 547,
    Quality = 548,
    Recent = 549,
    ReduceLength = 550,
    Refine = 551,
    RefusedToBeTamed = 552,
    Reinforce = 553,
    Release = 554,
    RemoveFromQuickslot = 555,
    Repair = 556,
    RequiredForDisassembleLabel = 557,
    RequiredForDisassembly = 558,
    RequiresFireToBeLit = 559,
    RequiresYouFacingFireSource = 560,
    RequiresYouToBeAround = 561,
    Resistant = 562,
    ResistOrVuln = 563,
    ResistOrVulnAll = 564,
    Rest = 565,
    Rested = 566,
    Resting = 567,
    RestingOnGroundNotEffective = 568,
    RestInterrupted = 569,
    RestInterruptedDamage = 570,
    RestInterruptedLoudNoise = 571,
    RestInterruptedPain = 572,
    RestInterruptedStirring = 573,
    RestLongTime = 574,
    RestModerateTime = 575,
    RestOnGround = 576,
    RestShortTime = 577,
    RestTime = 578,
    ReturnedToCivilization = 579,
    ReturningToCivilizationSetOffAgain = 580,
    ReturnsToLife = 581,
    Reveals = 582,
    RevealsEntityAppearsHurt = 583,
    RevealsEntityAppearsUnharmed = 584,
    RevealsEntityAppearsVeryHurt = 585,
    RevealsEntityIsAtPercentHealth = 586,
    RevealsEntityIsInjured = 587,
    RevealsEntityIsMostlyUninjured = 588,
    RevealsEntityIsOnTheVergeOfDeath = 589,
    RevealsEntityIsSeverelyInjured = 590,
    RevealsEntitySeemsInjured = 591,
    RevealsEntitySeemsUninjured = 592,
    RevealsNumberOfResistancesAndVulnerabilities = 593,
    RevealsResistancesAndVulnerabilities = 594,
    RevealsSomeResistancesAndVulnerabilities = 595,
    Reverse = 596,
    RightHand = 597,
    RightHandEquip = 598,
    ScrollMaster = 599,
    ScrollProvidedNoUsefulInsight = 600,
    Seawater = 601,
    SeaweedFromWater = 602,
    SeemsToHaveDrawnEnergy = 603,
    SetTrapOffButNoDamage = 604,
    SetUp = 605,
    ShadowInTheWater = 606,
    Simple = 607,
    Skill = 608,
    SkillHasRaised = 609,
    Skills = 610,
    Slashing = 611,
    Sleep = 612,
    Sleeping = 613,
    Slept = 614,
    SlitherSuckerConstricts = 615,
    SlitherSuckerJumpedOnHead = 616,
    Some = 617,
    SomethingInTheWayOf = 618,
    SomethingInTheWayOfCarveFirst = 619,
    SomethingInTheWayOfFire = 620,
    SomethingInTheWayOfFishing = 621,
    SomethingInTheWayOfPerforming = 622,
    SomethingInTheWayOfPlacing = 623,
    SomethingInTheWayOfPlanting = 624,
    SomethingInWayOfClosingDoor = 625,
    SoothedTheirBurnInjuries = 626,
    SoothedYourBurnInjuries = 627,
    Sort = 628,
    SortedByBestCraftingConsumables = 629,
    SortedByBestCraftingRequirements = 630,
    SortedByCategory = 631,
    SortedByDecay = 632,
    SortedByDurability = 633,
    SortedByGroup = 634,
    SortedByName = 635,
    SortedByQuality = 636,
    SortedByRecent = 637,
    SortedBySkill = 638,
    SortedByUnlockedTime = 639,
    SortedByWeight = 640,
    South = 641,
    Southeast = 642,
    SouthSoutheast = 643,
    SouthSouthwest = 644,
    Southwest = 645,
    StaminaIsFull = 646,
    StartedFire = 647,
    StartTravelInWater = 648,
    StarvingToDeath = 649,
    SteppingOnHasInjuredYouForDamage = 650,
    StillHasNoWaterToPurify = 651,
    StirredUpClawWorm = 652,
    StirredUpCreature = 653,
    StoppedYourBleeding = 654,
    StopUsingRaft = 655,
    Strength = 656,
    StrengthIncreasing = 657,
    SummonedGuardianByLockpicking = 658,
    SummonedGuardiansByDiggingTreasure = 659,
    SunNotBrightEnoughToStartFire = 660,
    TakenFromGroundBecomeTamed = 661,
    Tame = 662,
    TamedCreature = 663,
    TeleportBlocked = 664,
    Teleported = 665,
    ThanksBuying = 666,
    ThanksSelling = 667,
    The = 668,
    TheCreature = 669,
    TheirFist = 670,
    ThePlant = 671,
    ThereIsNoContainerOnTheStill = 672,
    ThereIsNoSunToStartFire = 673,
    ThereIsNothingToMilk = 674,
    ThisCannotBeMilked = 675,
    Throw = 676,
    ThrownIntoDepths = 677,
    ThrownIntoObstacle = 678,
    Tier = 679,
    TierGroup = 680,
    Till = 681,
    Tilling = 682,
    TimeIs = 683,
    TimeIsDawn = 684,
    TimeIsDaytime = 685,
    TimeIsDusk = 686,
    TimeIsNighttime = 687,
    TimeIsSunrise = 688,
    TimeIsSunset = 689,
    ToDamageAChest = 690,
    ToFight = 691,
    TooDamaged = 692,
    TooExhaustedToJump = 693,
    TradeBarterCreditForItem = 694,
    TradeItemForBarterCredit = 695,
    TradingWith = 696,
    TrampledFire = 697,
    TrampledIntoGround = 698,
    TrampleIntoGround = 699,
    Trampling = 700,
    Transmogrified = 701,
    Transmogrify = 702,
    TrapMissed = 703,
    TrapStoppedYou = 704,
    TravelToFarOffLands = 705,
    TreasureIsBlocked = 706,
    True = 707,
    UnEquip = 708,
    UnEquipAll = 709,
    Unhitch = 710,
    UnhitchCreature = 711,
    Unknown = 712,
    UnknownItem = 713,
    Unlimited = 714,
    UnlockedChest = 715,
    UnlockedTime = 716,
    UnpurifiedFreshWater = 717,
    UnpurifiedWaterInStill = 718,
    UsingBareHands = 719,
    Vulnerable = 720,
    WaitUntilFireCooledToGetWater = 721,
    Water = 722,
    WaterGathering = 723,
    WaterPutOutFire = 724,
    Weight = 725,
    WeightCapacity = 726,
    WellIsDry = 727,
    WellIsFull = 728,
    West = 729,
    WestNorthwest = 730,
    WestSouthwest = 731,
    WildGoatRefusedToBeMilked = 732,
    WillNotTrade = 733,
    With = 734,
    WithYouSee = 735,
    WorkingYourselfIntoExhaustion = 736,
    WorkingYourselfIntoExhaustionAndDrowning = 737,
    You = 738,
    YouApplied = 739,
    YouAte = 740,
    YouBeginResting = 741,
    YouCannotDoThatYet = 742,
    YouCooledLava = 743,
    YouCrafted = 744,
    YouDied = 745,
    YouDisassembled = 746,
    YouDismantled = 747,
    YouDrank = 748,
    YouDropTheTorch = 749,
    YouEnchant = 750,
    YouEnchantMutate = 751,
    YouEquip = 752,
    YouFailedTo = 753,
    YouFailedToExtinguishedFireFully = 754,
    YouFailedToHeal = 755,
    YouFailedToHealOther = 756,
    YouFire = 757,
    YouGathered = 758,
    YouGatheredAndDropped = 759,
    YouHardenedCooledLava = 760,
    YouHarvested = 761,
    YouHarvestedAndDropped = 762,
    YouHaveAlreadyLearned = 763,
    YouHaveDied = 764,
    YouHaveEnabledDisabled = 765,
    YouHaveHealedOther = 766,
    YouHaveKilled = 767,
    YouHaveReleased = 768,
    YouHaveTamed = 769,
    YouNeedMoreCredit = 770,
    YouNoticeBecomeEnraged = 771,
    YouNoticeDying = 772,
    YouNoticeFertilityDecreasing = 773,
    YouNoticeFertilityIncreasing = 774,
    YouNoticeGrowing = 775,
    YouNoticeLavaCooling = 776,
    YouNoticeLavaHardening = 777,
    YouNoticePerish = 778,
    YouNoticeStumbleInjureItself = 779,
    YouNoticeTakeFromGround = 780,
    YouNoticeWoundsClosing = 781,
    YouNoticeZombieHorde = 782,
    YouOfferedToCreature = 783,
    YouOpen = 784,
    YouPacked = 785,
    YouPickedUp = 786,
    YouRefine = 787,
    YouReinforce = 788,
    YouRepair = 789,
    YourFist = 790,
    YourHands = 791,
    YourHighSkill = 792,
    YourInventory = 793,
    YourLowSkill = 794,
    YourModerateSkill = 795,
    YourRubbingNoEffect = 796,
    YouRub = 797,
    YouSalvaged = 798,
    YouSee = 799,
    YouSeeAnAberrant = 800,
    YouSeeASlimeCombine = 801,
    YouSeeDrop = 802,
    YouSeeEngulfFire = 803,
    YouSeeHelpingPlant = 804,
    YouSeeLay = 805,
    YouSeeLayingTrap = 806,
    YouSeeSpewLava = 807,
    YouSeeSpitAcid = 808,
    YouSeeSpringForth = 809,
    YouSeeSummon = 810,
    YouSeeSwampFlood = 811,
    YouSeeTrampling = 812,
    YouSeparate = 813,
    YouSetTheTrapOff = 814,
    YouStokeTheFireElemental = 815,
    YouThrew = 816,
    YouTilled = 817,
    YouUnequip = 818,
    YouUsed = 819
}
export default Message;
