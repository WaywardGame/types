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
    ActionAttachContainerNothingToAttachContainerTo = 6,
    ActionCastAreaOverfished = 7,
    ActionConsumeItemTypeStats = 8,
    ActionCraft = 9,
    ActionCraftEfficacy = 10,
    ActionCraftEfficacyHigh = 11,
    ActionCraftEfficacyHighest = 12,
    ActionCraftEfficacyLow = 13,
    ActionCraftEfficacyLowest = 14,
    ActionCraftEfficacyMed = 15,
    ActionCraftEfficacyPercent = 16,
    ActionCraftYouLackTheRequirements = 17,
    ActionDetachContainerDetachContainer = 18,
    ActionDisassembleNoItemsSalvaged = 19,
    ActionDisassembleSalvaged = 20,
    ActionDismantleSeparated = 21,
    ActionFishingNothingBiting = 22,
    ActionFishingSlipped = 23,
    ActionFishingTooShallow = 24,
    ActionMeleeHasToBeEquipped = 25,
    ActionMeleeNothingToAttack = 26,
    ActionNavigateMoon = 27,
    ActionNavigateNotOverworld = 28,
    ActionNavigateSun = 29,
    ActionNavigateUseSextant = 30,
    ActionPetCreatureRefused = 31,
    ActionSailToCivilizationNotInsideBoat = 32,
    ActionTestDepthNothingToTest = 33,
    ActionTestDepthWell = 34,
    ActionWith = 35,
    AddedFuelToFire = 36,
    AddedFuelToTorch = 37,
    AddToQuickslot = 38,
    Advanced = 39,
    AllEquipmentUnEquipped = 40,
    AlreadyDesalinatedWaterInStill = 41,
    AlreadyFullyRefined = 42,
    AlreadyFullyRepaired = 43,
    AlreadyPreserved = 44,
    AnUnknownItem = 45,
    AppearedNotEffectiveForGathering = 46,
    AppearsToBeAberrant = 47,
    ArmorAppeared = 48,
    ArmorProtectedFromInjuryAgainst = 49,
    Attack = 50,
    AttemptedToDropAllIntoFire = 51,
    AttemptedToPlaceAllOnGround = 52,
    AttemptToSoothBurnInWater = 53,
    AttemptToTill = 54,
    Back = 55,
    BadlyBurnedLostHealth = 56,
    BarteringSkillsProvided = 57,
    BasedOnItSeems = 58,
    BeenPoisoned = 59,
    BeginSleeping = 60,
    BeginUsingBoat = 61,
    Belt = 62,
    BestForCraftingConsumables = 63,
    BestForCraftingRequirements = 64,
    BleedingHasStopped = 65,
    BleedingProfusely = 66,
    BleedingToDeathLostHealth = 67,
    Blunt = 68,
    BookBlank = 69,
    BookContains = 70,
    BookCrumbles = 71,
    BookDiagrams = 72,
    BookEmpty = 73,
    BookNothing = 74,
    BookOpen = 75,
    BookScribbles = 76,
    BothEffectiveIneffective = 77,
    BothHands = 78,
    BrokeIntoPieces = 79,
    BrokenOnImpact = 80,
    BrokenWhileFiring = 81,
    Build = 82,
    Burned = 83,
    CannotAddAnyMoreFuel = 84,
    CannotBePerformedOverWater = 85,
    CannotBePreserved = 86,
    CannotBeRefined = 87,
    CannotBeRefinedReinforcementNeeded = 88,
    CannotBeReinforced = 89,
    CannotBeRepaired = 90,
    CannotBeTamed = 91,
    CannotBuildHere = 92,
    CannotDoThatHere = 93,
    CannotDropHere = 94,
    CannotEquipThatThere = 95,
    CannotFishFor = 96,
    CannotHere = 97,
    CannotInWater = 98,
    CannotLeave = 99,
    CannotPickUpWhileLit = 100,
    CannotPickUpWithItemsInside = 101,
    CannotPlaceContainerInItself = 102,
    CannotPlaceHere = 103,
    CannotPlaceThatFromHere = 104,
    CannotPlaceThatHere = 105,
    CannotPlantHereTilled = 106,
    CannotRepairWhileLit = 107,
    CannotRestHere = 108,
    CannotSeeHere = 109,
    CannotSleepHere = 110,
    CannotStartFireHere = 111,
    CannotToTellTime = 112,
    CarryingTooMuchWeight = 113,
    CartographyDirection = 114,
    CartographyDirectionUnsure = 115,
    CartographyDistanceHighSkillExactDistance = 116,
    CartographyDistanceHighSkillFarAway = 117,
    CartographyDistanceHighSkillInRegion = 118,
    CartographyDistanceHighSkillNearby = 119,
    CartographyDistanceLowSkillNearby = 120,
    CartographyDistanceLowSkillUnsure = 121,
    CartographyDistanceMedSkillFarAway = 122,
    CartographyDistanceMedSkillNearby = 123,
    CartographyDistanceMedSkillVeryClose = 124,
    CarvedUpCorpse = 125,
    CarveWithTool = 126,
    Carving = 127,
    CastYourLine = 128,
    Category = 129,
    CaughtFish = 130,
    ChatBanCommand = 131,
    ChatBannedCommand = 132,
    ChatCommandsCommand = 133,
    ChatCommandsCommandCommand = 134,
    ChatPingCommand = 135,
    ChatPlayerMessage = 136,
    ChatPlayersCommand = 137,
    ChatServerMessage = 138,
    ChatUnbanCommand = 139,
    ChatUnknownCommand = 140,
    Chest = 141,
    ClearedBlood = 142,
    ClearMessages = 143,
    Clockwise = 144,
    CloseContainer = 145,
    CloseDoor = 146,
    CloseToBeingDestroyed = 147,
    CollectObjectWithHands = 148,
    Consumed = 149,
    Container = 150,
    CopySelectedText = 151,
    CorpseOf = 152,
    CorpseOfNamed = 153,
    CouldNotDecipher = 154,
    Counterclockwise = 155,
    Craft = 156,
    Crafted = 157,
    Crafts = 158,
    CreatureAngered = 159,
    CreatureAppears = 160,
    CreatureAppeased = 161,
    CreatureExcrement = 162,
    CreatureHappinessHigh = 163,
    CreatureHappinessLow = 164,
    CreatureHappinessLowest = 165,
    CreatureHappinessNormal = 166,
    CreatureIdolAttractedCreature = 167,
    CreatureUntamed = 168,
    CuredYourPoison = 169,
    Cut = 170,
    DamageAppeared = 171,
    DamagedByPouring = 172,
    DayQuarter1 = 173,
    DayQuarter2 = 174,
    DayQuarter3 = 175,
    DayQuarter4 = 176,
    DealtNoDamageToYou = 177,
    DeathBy = 178,
    DeathByBleeding = 179,
    DeathByBurning = 180,
    DeathByChallengeWinner = 181,
    DeathByConsumption = 182,
    DeathByDrowning = 183,
    DeathByExhaustion = 184,
    DeathByFistByPlayer = 185,
    DeathByPoison = 186,
    DeathBySteppingOn = 187,
    DeathByTrap = 188,
    DeathByWeaponByPlayer = 189,
    Decay = 190,
    DestroyedFromUse = 191,
    DetachContainer = 192,
    Dexterity = 193,
    DexterityIncreasing = 194,
    DidNotSeemToBeHurting = 195,
    Dig = 196,
    DigAway = 197,
    Digging = 198,
    DigWithHands = 199,
    Disabled = 200,
    Disassemble = 201,
    DisassembleAction = 202,
    Disassembling = 203,
    DiscoveredCaveEntrance = 204,
    DiscoveredInTheBottle = 205,
    DiscoveredLavaPassage = 206,
    Dismantle = 207,
    DismantleAction = 208,
    DismantleLabel = 209,
    Dismantling = 210,
    DismantlingRequires = 211,
    DoNotHaveTreasureMaps = 212,
    DoNotProduceAnyResources = 213,
    DoodadAppearsDamaged = 214,
    DoodadAppearsOnVergeOfBreaking = 215,
    DoodadAppearsUnscathed = 216,
    DoodadCauseStatus = 217,
    DoodadGroupTier = 218,
    DoodadPreservation = 219,
    DoodadPreservationHigh = 220,
    DoodadPreservationLow = 221,
    DoodadPreservationModerate = 222,
    DoodadPreservationVeryHigh = 223,
    DoodadPreservationVeryLow = 224,
    DoodadShowsSignsOfWear = 225,
    DrewSurroundings = 226,
    Drink = 227,
    Drop = 228,
    DropAll = 229,
    DropAllOfSameQuality = 230,
    DroppedIntoDepths = 231,
    DroppedIntoFire = 232,
    DroppedIntoTheVoid = 233,
    DueToDehydration = 234,
    DueToStarvation = 235,
    DugTreasureOut = 236,
    DumpContentsOfContainerInInventory = 237,
    Durability = 238,
    DyingOfDehydration = 239,
    EarnedMilestone = 240,
    East = 241,
    EastNortheast = 242,
    EastSoutheast = 243,
    Effective = 244,
    Enabled = 245,
    Enchant = 246,
    EquipmentPreventedStatusEffects = 247,
    EquipTo = 248,
    ErrorHasOccured = 249,
    Expert = 250,
    ExtinguishedFire = 251,
    ExtinguishedLightSource = 252,
    FailedToAddFuelToTorch = 253,
    FailedToCatchFish = 254,
    FailedToCauseDamage = 255,
    FailedToCauseYouDamage = 256,
    FailedToDrawMap = 257,
    FailedToEnchant = 258,
    FailedToIgniteTorch = 259,
    FailedToPickLock = 260,
    FailedToPlant = 261,
    FailedToPreserve = 262,
    FailedToRefine = 263,
    FailedToReinforce = 264,
    FailedToRepair = 265,
    FailedToStartFire = 266,
    FailedToTame = 267,
    FailedToTransmogrify = 268,
    Feet = 269,
    FeltBurningPainLostHealth = 270,
    FewMinutes = 271,
    Filled = 272,
    FilledFrom = 273,
    Fire = 274,
    FireAroundYouIsWarm = 275,
    FiredIntoObstacle = 276,
    FireOverflowed = 277,
    FireOverflowedFireElemental = 278,
    FireSource = 279,
    FishingWithNoBait = 280,
    FreshWater = 281,
    FromTheStill = 282,
    Fuel = 283,
    FullyDecodedMap = 284,
    GainedHealth = 285,
    GainedHunger = 286,
    GainedStamina = 287,
    GainedThirst = 288,
    GameHasBeenSavedIsTakingUpMB = 289,
    Gather = 290,
    GatherDestroy = 291,
    Gathering = 292,
    GatherWithHands = 293,
    GhostNoActions = 294,
    GhostOf = 295,
    GoatHasNoMilk = 296,
    GrabAll = 297,
    Group = 298,
    HackAway = 299,
    HandProtectionPreventedInjury = 300,
    Hands = 301,
    HandsNotEffectiveForDigging = 302,
    Harvest = 303,
    Harvesting = 304,
    HarvestWithHands = 305,
    HasBeenHurtByATrap = 306,
    HasDecayed = 307,
    HasHitYouForDamage = 308,
    HasNoEffect = 309,
    HasSetTrapOffNoDamage = 310,
    HasSplit = 311,
    Head = 312,
    Held = 313,
    Help = 314,
    HelpGrow = 315,
    Here = 316,
    Hints = 317,
    HintsDisabled = 318,
    HintsEnabled = 319,
    Hitch = 320,
    HitchAttempt = 321,
    HitchCreature = 322,
    HitchDisabled = 323,
    HitchInUse = 324,
    HitForDamage = 325,
    HitYouForDamage = 326,
    Hour = 327,
    Hours = 328,
    HurtHandsHittingWithoutWeapons = 329,
    HurtHandsWithNoTool = 330,
    Ignite = 331,
    IgnitedTorch = 332,
    Ineffective = 333,
    InjuredFromTrap = 334,
    InNeedOfRepair = 335,
    InteractingWithHasInjuredYouForDamage = 336,
    Intermediate = 337,
    Inventory = 338,
    IsInTheWayOfPickingUp = 339,
    It = 340,
    ItAlsoReveals = 341,
    ItAlsoSeems = 342,
    ItContains = 343,
    ItemFromWater = 344,
    ItsWeightCapacity = 345,
    JoinedAServer = 346,
    Jump = 347,
    Killed = 348,
    KnowledgeHasIncreased = 349,
    LabelAdditionalRequirements = 350,
    LabelAttackFromTactics = 351,
    LabelBase = 352,
    LabelCanIncrease = 353,
    LabelCraftingReputation = 354,
    LabelCraftingRequires = 355,
    LabelCraftingSkillReputation = 356,
    LabelDecay = 357,
    LabelDefense = 358,
    LabelDismantlingRequires = 359,
    LabelDurability = 360,
    LabelEquip = 361,
    LabelGrouping = 362,
    LabelHave = 363,
    LabelLeftHandAttack = 364,
    LabelLevel = 365,
    LabelLightSourceWhenLit = 366,
    LabelOnCure = 367,
    LabelOnDrink = 368,
    LabelOnEat = 369,
    LabelOnEquip = 370,
    LabelOnHeal = 371,
    LabelOnOtherHeal = 372,
    LabelPreservationRate = 373,
    LabelProtected = 374,
    LabelRange = 375,
    LabelRanged = 376,
    LabelRangedAttack = 377,
    LabelRangedDamage = 378,
    LabelReputationImpact = 379,
    LabelResists = 380,
    LabelRightHandAttack = 381,
    LabelSkill = 382,
    LabelStokeFireStrength = 383,
    LabelThrowDamageType = 384,
    LabelTrapDamage = 385,
    LabelUse = 386,
    LabelUses = 387,
    LabelVulnerabilities = 388,
    LabelWeight = 389,
    LabelWeightCapacity = 390,
    LabelWeightReduction = 391,
    LabelWorth = 392,
    LastPlaceYouLeftOff = 393,
    LearnedHowToCreate = 394,
    LeftHand = 395,
    LeftHandEquip = 396,
    LegendaryItemDamage = 397,
    Legs = 398,
    LikelyFailures = 399,
    Limited = 400,
    LostHealth = 401,
    LostHunger = 402,
    LostStamina = 403,
    LostThirst = 404,
    MapNotOfThisArea = 405,
    MaterialsDestroyed = 406,
    MerchantAlreadyTradedItem = 407,
    MessageOfTheDay = 408,
    Metabolism = 409,
    MetabolismSlowed = 410,
    Milk = 411,
    Milking = 412,
    MissedWith = 413,
    MissedYouWith = 414,
    MoreInformation = 415,
    MoveAllOfSameQualityToFacingContainer = 416,
    MoveAllOfSameQualityToInventory = 417,
    MoveAllOfSameQualityToLastOpenedContainer = 418,
    MoveAllOfSameQualityToOpenedContainer = 419,
    MoveAllToFacingContainer = 420,
    MoveAllToInventory = 421,
    MoveAllToLastOpenedContainer = 422,
    MoveAllToOpenedContainer = 423,
    MovedItem = 424,
    MoveOverTrapButDoNotSetOff = 425,
    MoveToFacingContainer = 426,
    MoveToInventory = 427,
    MoveToLastOpenedContainer = 428,
    MoveToOpenedContainer = 429,
    MultiplayerAlreadyVoting = 430,
    MultiplayerCannotStartAnotherVote = 431,
    MultiplayerGamePaused = 432,
    MultiplayerGameResumed = 433,
    MultiplayerPlayerConnected = 434,
    MultiplayerPlayerDied = 435,
    MultiplayerPlayerDisconnected = 436,
    MultiplayerPlayerJoined = 437,
    MultiplayerTravelVoteFailed = 438,
    MultiplayerTravelVotePlayersTooFar = 439,
    MustBeEquippedToIgnite = 440,
    Mysteriously = 441,
    Name = 442,
    NearlyBurnedEquipmentProtectedYou = 443,
    Neck = 444,
    NeedAShovelToDigTreasure = 445,
    NeedFishingNetForTreasure = 446,
    NeedFreeHandToShoot = 447,
    NeedToEquipToShoot = 448,
    NeedToStartTravelsOutside = 449,
    NeedWaterForBoat = 450,
    Negatively = 451,
    NightQuarter1 = 452,
    NightQuarter2 = 453,
    NightQuarter3 = 454,
    NightQuarter4 = 455,
    No = 456,
    NoAmmunitionForThatWeapon = 457,
    NoBlackPowderToFireWeapon = 458,
    NoFireToStokeWith = 459,
    NoFishAtLocation = 460,
    NoGroundWater = 461,
    NoInkToDrawMap = 462,
    NoKindlingOrFuelItemsToStartFire = 463,
    NoKindlingToStartFire = 464,
    NoLongerFeelPainOfBeingBurned = 465,
    NoLongerHostile = 466,
    NoMoreRoomInContainer = 467,
    NoReturnWithoutCompletingChallenges = 468,
    NoRoomForImprovement = 469,
    NoRoomToDrop = 470,
    North = 471,
    Northeast = 472,
    NorthNortheast = 473,
    NorthNorthwest = 474,
    Northwest = 475,
    NotAvailable = 476,
    NotEnoughPurifiedWaterYet = 477,
    NotEnoughTreasureToReturn = 478,
    NotFacingCreatureToOfferThisTo = 479,
    NotFacingLockedObject = 480,
    NotFacingOtherToHeal = 481,
    NotFacingValidItem = 482,
    NothingHereToCarve = 483,
    NothingHereToFill = 484,
    NothingHereToGrasp = 485,
    NothingToGetFromThis = 486,
    NothingToHarvestFromThisGather = 487,
    NothingToSmother = 488,
    NothingUsefulToHarvestYet = 489,
    NoTinderToStartFire = 490,
    NotInRangeOfTreasure = 491,
    NotSuitableToPlant = 492,
    NoWaterInStill = 493,
    NPCStartingDialog1 = 494,
    NPCStartingDialog2 = 495,
    NPCStartingDialog3 = 496,
    NPCStartingDialog4 = 497,
    NPCWelcome = 498,
    NPCWelcomeCredit = 499,
    NumberEight = 500,
    NumberFive = 501,
    NumberFour = 502,
    NumberNine = 503,
    NumberOne = 504,
    NumberSeven = 505,
    NumberSix = 506,
    NumberTen = 507,
    NumberThree = 508,
    NumberTwo = 509,
    ObjectIsLocked = 510,
    ObjectIsLockedAttemptToBreakIt = 511,
    Offer = 512,
    OfferAberrantFail = 513,
    OfferAberrantFailButTamed = 514,
    OpenDoor = 515,
    OverEatingLostStamina = 516,
    OverHydratingLostStamina = 517,
    Pack = 518,
    PaperTurnedToMush = 519,
    ParryTheBlow = 520,
    PartiallyDecodedMap = 521,
    PenultimateAnd = 522,
    Pet = 523,
    PetCreature = 524,
    PickAway = 525,
    PickupAllItems = 526,
    PickupItem = 527,
    Piercing = 528,
    Place = 529,
    PlacedOnGround = 530,
    Plant = 531,
    PlantCouldBeHarvested = 532,
    PlantedInGround = 533,
    PlantGatheringWillDestroy = 534,
    PlantHasResourcesToGather = 535,
    PlantHasResourcesToHarvest = 536,
    PlantHighlyFertile = 537,
    Planting = 538,
    PlantIsBare = 539,
    PlantIsFertile = 540,
    PlantIsInStage = 541,
    PlantIsNotFertile = 542,
    PlantNotReadyToHarvest = 543,
    PlantReadyToGather = 544,
    PlantReadyToGatherNotMaximal = 545,
    PlantReadyToHarvest = 546,
    PlantReadyToHarvestNotMaximal = 547,
    Player = 548,
    PlayerHasCompletedChallengeRequirement = 549,
    PlayerHasWonChallenge = 550,
    Poisoned = 551,
    PoisonedLostHealth = 552,
    PoisonWorkedItsCourse = 553,
    Positively = 554,
    PouredOut = 555,
    PouredOutOnYourself = 556,
    PouredWaterIntoStill = 557,
    PourHarmedPlant = 558,
    PourHealedPlant = 559,
    PourHealedPlantFully = 560,
    PourHealedPlantPartially = 561,
    PourIncreasedFertility = 562,
    Prepare = 563,
    Prepared = 564,
    Preserve = 565,
    PreservedFood = 566,
    PurifiedWaterInStill = 567,
    Quality = 568,
    Recent = 569,
    ReduceLength = 570,
    Refine = 571,
    RefusedToBeTamed = 572,
    Reinforce = 573,
    Release = 574,
    RemoveFromQuickslot = 575,
    Repair = 576,
    ReputationDecreased = 577,
    ReputationIncreased = 578,
    ReputationUpdate = 579,
    RequiredForDisassembleLabel = 580,
    RequiredForDisassembly = 581,
    RequiresFireToBeLit = 582,
    RequiresYouFacingFireSource = 583,
    RequiresYouToBeAround = 584,
    Resistant = 585,
    ResistOrVuln = 586,
    ResistOrVulnAll = 587,
    Rest = 588,
    Rested = 589,
    Resting = 590,
    RestingOnGroundNotEffective = 591,
    RestInterrupted = 592,
    RestInterruptedDamage = 593,
    RestInterruptedLoudNoise = 594,
    RestInterruptedPain = 595,
    RestInterruptedStirring = 596,
    RestLongTime = 597,
    RestModerateTime = 598,
    RestOnGround = 599,
    RestShortTime = 600,
    RestTime = 601,
    ReturnedToCivilization = 602,
    ReturningToCivilizationSetOffAgain = 603,
    ReturnsToLife = 604,
    Reveals = 605,
    RevealsEntityAppearsHurt = 606,
    RevealsEntityAppearsUnharmed = 607,
    RevealsEntityAppearsVeryHurt = 608,
    RevealsEntityIsAtPercentHealth = 609,
    RevealsEntityIsInjured = 610,
    RevealsEntityIsMostlyUninjured = 611,
    RevealsEntityIsOnTheVergeOfDeath = 612,
    RevealsEntityIsSeverelyInjured = 613,
    RevealsEntitySeemsInjured = 614,
    RevealsEntitySeemsUninjured = 615,
    RevealsNumberOfResistancesAndVulnerabilities = 616,
    RevealsResistancesAndVulnerabilities = 617,
    RevealsSomeResistancesAndVulnerabilities = 618,
    Reverse = 619,
    RightHand = 620,
    RightHandEquip = 621,
    ScrollMaster = 622,
    ScrollProvidedNoUsefulInsight = 623,
    Seawater = 624,
    SeemsToHaveDrawnEnergy = 625,
    SetTrapOffButNoDamage = 626,
    SetUp = 627,
    ShadowInTheWater = 628,
    Simple = 629,
    Skill = 630,
    SkillHasRaised = 631,
    Skills = 632,
    Slashing = 633,
    Sleep = 634,
    Sleeping = 635,
    Slept = 636,
    SlitherSuckerConstricts = 637,
    SlitherSuckerJumpedOnHead = 638,
    SomethingInTheWayOf = 639,
    SomethingInTheWayOfCarveFirst = 640,
    SomethingInTheWayOfFire = 641,
    SomethingInTheWayOfFishing = 642,
    SomethingInTheWayOfPerforming = 643,
    SomethingInTheWayOfPlacing = 644,
    SomethingInTheWayOfPlanting = 645,
    SomethingInWayOfClosingDoor = 646,
    SoothedTheirBurnInjuries = 647,
    SoothedYourBurnInjuries = 648,
    Sort = 649,
    SortedByBestCraftingConsumables = 650,
    SortedByBestCraftingRequirements = 651,
    SortedByCategory = 652,
    SortedByDecay = 653,
    SortedByDurability = 654,
    SortedByGroup = 655,
    SortedByName = 656,
    SortedByQuality = 657,
    SortedByRecent = 658,
    SortedBySkill = 659,
    SortedByUnlockedTime = 660,
    SortedByWeight = 661,
    South = 662,
    Southeast = 663,
    SouthSoutheast = 664,
    SouthSouthwest = 665,
    Southwest = 666,
    StaminaIsFull = 667,
    StartedFire = 668,
    StartTravelInWater = 669,
    StarvingToDeath = 670,
    SteppingOn = 671,
    StillHasNoWaterToPurify = 672,
    StirredUpClawWorm = 673,
    StirredUpCreature = 674,
    StoppedYourBleeding = 675,
    StopUsingBoat = 676,
    Strength = 677,
    StrengthIncreasing = 678,
    SummonedGuardiansByDiggingTreasure = 679,
    SummonedGuardiansByLockpicking = 680,
    SunNotBrightEnoughToStartFire = 681,
    TakenFromGroundBecomeTamed = 682,
    Tame = 683,
    TamedCreature = 684,
    TeleportBlocked = 685,
    Teleported = 686,
    ThanksBuying = 687,
    ThanksSelling = 688,
    TheCreature = 689,
    TheirFist = 690,
    ThePlant = 691,
    ThereIsNoContainerOnTheStill = 692,
    ThereIsNoSunToStartFire = 693,
    ThereIsNothingToMilk = 694,
    ThisCannotBeMilked = 695,
    Throw = 696,
    ThrownIntoDepths = 697,
    ThrownIntoObstacle = 698,
    ThrownIntoVoid = 699,
    Tier = 700,
    TierGroup = 701,
    Till = 702,
    Tilling = 703,
    TimeIs = 704,
    TimeIsDawn = 705,
    TimeIsDaytime = 706,
    TimeIsDusk = 707,
    TimeIsNighttime = 708,
    TimeIsSunrise = 709,
    TimeIsSunset = 710,
    ToDamageAChest = 711,
    ToFight = 712,
    TooDamaged = 713,
    TooExhaustedToJump = 714,
    Touching = 715,
    TradeBarterCreditForItem = 716,
    TradeItemForBarterCredit = 717,
    TradingWith = 718,
    TrampledFire = 719,
    TrampledIntoGround = 720,
    TrampleIntoGround = 721,
    Trampling = 722,
    Transmogrified = 723,
    Transmogrify = 724,
    TrapMissed = 725,
    TrapStoppedYou = 726,
    TravelToFarOffLands = 727,
    TreasureIsBlocked = 728,
    True = 729,
    UnEquip = 730,
    UnEquipAll = 731,
    Unhitch = 732,
    UnhitchCreature = 733,
    Unknown = 734,
    UnknownItem = 735,
    Unlimited = 736,
    UnlockedChest = 737,
    UnlockedTime = 738,
    UnpurifiedFreshWater = 739,
    UnpurifiedWaterInStill = 740,
    UsingBareHands = 741,
    Vulnerable = 742,
    WaitUntilFireCooledToGetWater = 743,
    Water = 744,
    WaterGathering = 745,
    WaterPutOutFire = 746,
    Weight = 747,
    WeightCapacity = 748,
    WellIsDry = 749,
    WellIsFull = 750,
    West = 751,
    WestNorthwest = 752,
    WestSouthwest = 753,
    WildGoatRefusedToBeMilked = 754,
    WillNotTrade = 755,
    WithYouSee = 756,
    WorkingYourselfIntoExhaustion = 757,
    WorkingYourselfIntoExhaustionAndDrowning = 758,
    You = 759,
    YouApplied = 760,
    YouAte = 761,
    YouBeginResting = 762,
    YouCannotDoThatYet = 763,
    YouCooledLava = 764,
    YouCrafted = 765,
    YouDied = 766,
    YouDrank = 767,
    YouDropTheTorch = 768,
    YouEnchant = 769,
    YouEnchantMutate = 770,
    YouEquip = 771,
    YouFailedTo = 772,
    YouFailedToExtinguishedFireFully = 773,
    YouFailedToHeal = 774,
    YouFailedToHealOther = 775,
    YouFire = 776,
    YouGathered = 777,
    YouGatheredAndDropped = 778,
    YouHardenedCooledLava = 779,
    YouHarvested = 780,
    YouHarvestedAndDropped = 781,
    YouHaveAlreadyLearned = 782,
    YouHaveDied = 783,
    YouHaveEnabledDisabled = 784,
    YouHaveHealedOther = 785,
    YouHaveKilled = 786,
    YouHaveReleased = 787,
    YouHaveTamed = 788,
    YouLostWhileTraveling = 789,
    YouNeedMoreCredit = 790,
    YouNoticeBecomeEnraged = 791,
    YouNoticeDying = 792,
    YouNoticeFertilityDecreasing = 793,
    YouNoticeFertilityIncreasing = 794,
    YouNoticeGrowing = 795,
    YouNoticeLavaCooling = 796,
    YouNoticeLavaHardening = 797,
    YouNoticePerish = 798,
    YouNoticeStumbleInjureItself = 799,
    YouNoticeTakeFromGround = 800,
    YouNoticeWoundsClosing = 801,
    YouNoticeZombieHorde = 802,
    YouOfferedToCreature = 803,
    YouOpen = 804,
    YouPacked = 805,
    YouPickedUp = 806,
    YouRefine = 807,
    YouReinforce = 808,
    YouRepair = 809,
    YourFist = 810,
    YourHands = 811,
    YourHighSkill = 812,
    YourInventory = 813,
    YourLowSkill = 814,
    YourModerateSkill = 815,
    YourRubbingNoEffect = 816,
    YouRub = 817,
    YouSee = 818,
    YouSeeALivingMushroomSpore = 819,
    YouSeeAnAberrant = 820,
    YouSeeASkeletonCollapse = 821,
    YouSeeASlimeCombine = 822,
    YouSeeAZombieBleeding = 823,
    YouSeeDrop = 824,
    YouSeeEngulfFire = 825,
    YouSeeFireSpread = 826,
    YouSeeHelpingPlant = 827,
    YouSeeLay = 828,
    YouSeeLayingTrap = 829,
    YouSeeSpewLava = 830,
    YouSeeSpitAcid = 831,
    YouSeeSpringForth = 832,
    YouSeeSummon = 833,
    YouSeeSwampFlood = 834,
    YouSeeTrampling = 835,
    YouSetTheTrapOff = 836,
    YouStokeTheFireElemental = 837,
    YouThrew = 838,
    YouTilled = 839,
    YouUnequip = 840,
    YouUsed = 841
}
export default Message;
