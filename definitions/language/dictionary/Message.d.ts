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
    ActionFishingNothingBiting = 23,
    ActionFishingSlipped = 24,
    ActionFishingTooShallow = 25,
    ActionMeleeHasToBeEquipped = 26,
    ActionMeleeNothingToAttack = 27,
    ActionNavigateMoon = 28,
    ActionNavigateNotOverworld = 29,
    ActionNavigateSun = 30,
    ActionNavigateUseSextant = 31,
    ActionPetCreatureRefused = 32,
    ActionSailToCivilizationNotInsideBoat = 33,
    ActionTestDepthNothingToTest = 34,
    ActionTestDepthWell = 35,
    ActionWith = 36,
    AddedFuelToFire = 37,
    AddedFuelToTorch = 38,
    AddToQuickslot = 39,
    Advanced = 40,
    AllEquipmentUnEquipped = 41,
    AlreadyDesalinatedWaterInStill = 42,
    AlreadyFullyRefined = 43,
    AlreadyFullyRepaired = 44,
    AlreadyPreserved = 45,
    AnUnknownItem = 46,
    AppearedNotEffectiveForGathering = 47,
    AppearsToBeAberrant = 48,
    ArmorAppeared = 49,
    ArmorProtectedFromInjuryAgainst = 50,
    Attack = 51,
    AttemptedToDropAllIntoFire = 52,
    AttemptedToPlaceAllOnGround = 53,
    AttemptToSoothBurnInWater = 54,
    AttemptToTill = 55,
    Back = 56,
    BadlyBurnedLostHealth = 57,
    BarteringSkillsProvided = 58,
    BasedOnItSeems = 59,
    BeenPoisoned = 60,
    BeginSleeping = 61,
    BeginUsingBoat = 62,
    Belt = 63,
    BestForCrafting = 64,
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
    CannotUseCommand = 113,
    CannotWhenProtected = 114,
    CannotWhenProtectedDangerousAction = 115,
    CarryingTooMuchWeight = 116,
    CartographyDirection = 117,
    CartographyDirectionUnsure = 118,
    CartographyDistanceHighSkillExactDistance = 119,
    CartographyDistanceHighSkillFarAway = 120,
    CartographyDistanceHighSkillInRegion = 121,
    CartographyDistanceHighSkillNearby = 122,
    CartographyDistanceLowSkillNearby = 123,
    CartographyDistanceLowSkillUnsure = 124,
    CartographyDistanceMedSkillFarAway = 125,
    CartographyDistanceMedSkillNearby = 126,
    CartographyDistanceMedSkillVeryClose = 127,
    CartographyUnderground = 128,
    CarvedUpCorpse = 129,
    CarveWithTool = 130,
    Carving = 131,
    CastYourLine = 132,
    Category = 133,
    CaughtFish = 134,
    ChatBanCommand = 135,
    ChatBannedCommand = 136,
    ChatCommandsCommand = 137,
    ChatCommandsCommandCommand = 138,
    ChatPingCommand = 139,
    ChatPlayerMessage = 140,
    ChatPlayersCommand = 141,
    ChatServerMessage = 142,
    ChatUnbanCommand = 143,
    ChatUnknownCommand = 144,
    Chest = 145,
    ClearedBlood = 146,
    ClearMessages = 147,
    Clockwise = 148,
    CloseContainer = 149,
    CloseDoor = 150,
    CloseToBeingDestroyed = 151,
    CollectObjectWithHands = 152,
    Consumed = 153,
    Container = 154,
    CopySelectedText = 155,
    CorpseOf = 156,
    CorpseOfNamed = 157,
    CouldNotDecipher = 158,
    Counterclockwise = 159,
    Craft = 160,
    Crafted = 161,
    Crafts = 162,
    CreatureAngered = 163,
    CreatureAppears = 164,
    CreatureAppeased = 165,
    CreatureExcrement = 166,
    CreatureHappinessHigh = 167,
    CreatureHappinessLow = 168,
    CreatureHappinessLowest = 169,
    CreatureHappinessNormal = 170,
    CreatureIdolAttractedCreature = 171,
    CreatureUntamed = 172,
    CuredYourPoison = 173,
    Cut = 174,
    DamageAppeared = 175,
    DamagedByPouring = 176,
    DayQuarter1 = 177,
    DayQuarter2 = 178,
    DayQuarter3 = 179,
    DayQuarter4 = 180,
    DealtNoDamageToYou = 181,
    DeathBy = 182,
    DeathByBleeding = 183,
    DeathByBurning = 184,
    DeathByChallengeWinner = 185,
    DeathByConsumption = 186,
    DeathByDrowning = 187,
    DeathByExhaustion = 188,
    DeathByFistByPlayer = 189,
    DeathByPoison = 190,
    DeathBySteppingOn = 191,
    DeathByTrap = 192,
    DeathByWeaponByPlayer = 193,
    Decay = 194,
    DestroyedFromUse = 195,
    DetachContainer = 196,
    Dexterity = 197,
    DexterityIncreasing = 198,
    DidNotSeemToBeHurting = 199,
    Dig = 200,
    DigAway = 201,
    Digging = 202,
    DigWithHands = 203,
    Disabled = 204,
    Disassemble = 205,
    DisassembleAction = 206,
    Disassembling = 207,
    DiscoveredCaveEntrance = 208,
    DiscoveredInTheBottle = 209,
    DiscoveredLavaPassage = 210,
    Dismantle = 211,
    DismantleAction = 212,
    DismantleLabel = 213,
    Dismantling = 214,
    DismantlingRequires = 215,
    DoNotHaveTreasureMaps = 216,
    DoNotProduceAnyResources = 217,
    DoodadAppearsDamaged = 218,
    DoodadAppearsOnVergeOfBreaking = 219,
    DoodadAppearsUnscathed = 220,
    DoodadCauseStatus = 221,
    DoodadGroupTier = 222,
    DoodadPreservation = 223,
    DoodadPreservationHigh = 224,
    DoodadPreservationLow = 225,
    DoodadPreservationModerate = 226,
    DoodadPreservationVeryHigh = 227,
    DoodadPreservationVeryLow = 228,
    DoodadShowsSignsOfWear = 229,
    DrewSurroundings = 230,
    Drink = 231,
    Drop = 232,
    DropAll = 233,
    DropAllOfSameQuality = 234,
    DroppedIntoDepths = 235,
    DroppedIntoFire = 236,
    DroppedIntoTheVoid = 237,
    DueToDehydration = 238,
    DueToStarvation = 239,
    DugTreasureOut = 240,
    DumpContentsOfContainerInInventory = 241,
    Durability = 242,
    DyingOfDehydration = 243,
    EarnedMilestone = 244,
    East = 245,
    EastNortheast = 246,
    EastSoutheast = 247,
    Effective = 248,
    Enabled = 249,
    Enchant = 250,
    EquipmentPreventedStatusEffects = 251,
    EquipTo = 252,
    ErrorHasOccured = 253,
    Expert = 254,
    ExtinguishedFire = 255,
    ExtinguishedLightSource = 256,
    FailedToAddFuelToTorch = 257,
    FailedToCatchFish = 258,
    FailedToCauseDamage = 259,
    FailedToCauseYouDamage = 260,
    FailedToDrawMap = 261,
    FailedToEnchant = 262,
    FailedToIgniteTorch = 263,
    FailedToPickLock = 264,
    FailedToPlant = 265,
    FailedToPreserve = 266,
    FailedToRefine = 267,
    FailedToReinforce = 268,
    FailedToRepair = 269,
    FailedToStartFire = 270,
    FailedToTame = 271,
    FailedToTransmogrify = 272,
    Feet = 273,
    FeltBurningPainLostHealth = 274,
    FewMinutes = 275,
    Filled = 276,
    FilledFrom = 277,
    Fire = 278,
    FireAroundYouIsWarm = 279,
    FiredIntoObstacle = 280,
    FireOverflowed = 281,
    FireOverflowedFireElemental = 282,
    FireSource = 283,
    FishingWithNoBait = 284,
    FreshWater = 285,
    FromTheStill = 286,
    Fuel = 287,
    FullyDecodedMap = 288,
    GainedHealth = 289,
    GainedHunger = 290,
    GainedStamina = 291,
    GainedThirst = 292,
    GameHasBeenSavedIsTakingUpMB = 293,
    Gather = 294,
    GatherDestroy = 295,
    Gathering = 296,
    GatherWithHands = 297,
    GhostNoActions = 298,
    GhostOf = 299,
    GoatHasNoMilk = 300,
    GrabAll = 301,
    Group = 302,
    HackAway = 303,
    HandProtectionPreventedInjury = 304,
    Hands = 305,
    HandsNotEffectiveForDigging = 306,
    Harvest = 307,
    Harvesting = 308,
    HarvestWithHands = 309,
    HasBeenHurtByATrap = 310,
    HasDecayed = 311,
    HasHitYouForDamage = 312,
    HasNoEffect = 313,
    HasSetTrapOffNoDamage = 314,
    HasSplit = 315,
    Head = 316,
    Held = 317,
    Help = 318,
    HelpGrow = 319,
    Here = 320,
    Hints = 321,
    HintsDisabled = 322,
    HintsEnabled = 323,
    Hitch = 324,
    HitchAttempt = 325,
    HitchCreature = 326,
    HitchDisabled = 327,
    HitchInUse = 328,
    HitForDamage = 329,
    HitYouForDamage = 330,
    Hour = 331,
    Hours = 332,
    HurtHandsHittingWithoutWeapons = 333,
    HurtHandsWithNoTool = 334,
    Ignite = 335,
    IgnitedTorch = 336,
    Ineffective = 337,
    InjuredFromTrap = 338,
    InNeedOfRepair = 339,
    InteractingWithHasInjuredYouForDamage = 340,
    Intermediate = 341,
    Inventory = 342,
    IsInTheWayOfPickingUp = 343,
    It = 344,
    ItAlsoReveals = 345,
    ItAlsoSeems = 346,
    ItContains = 347,
    ItemFromWater = 348,
    ItsWeightCapacity = 349,
    JoinedAServer = 350,
    Jump = 351,
    Killed = 352,
    KnowledgeHasIncreased = 353,
    LabelAdditionalRequirements = 354,
    LabelAttackFromTactics = 355,
    LabelBase = 356,
    LabelCanIncrease = 357,
    LabelCraftingReputation = 358,
    LabelCraftingRequires = 359,
    LabelCraftingSkillReputation = 360,
    LabelDecay = 361,
    LabelDefense = 362,
    LabelDismantlingRequires = 363,
    LabelDurability = 364,
    LabelEquip = 365,
    LabelGrouping = 366,
    LabelHave = 367,
    LabelLeftHandAttack = 368,
    LabelLevel = 369,
    LabelLightSourceWhenLit = 370,
    LabelOnCure = 371,
    LabelOnDrink = 372,
    LabelOnEat = 373,
    LabelOnEquip = 374,
    LabelOnHeal = 375,
    LabelOnOtherHeal = 376,
    LabelPreservationRate = 377,
    LabelProtected = 378,
    LabelRange = 379,
    LabelRanged = 380,
    LabelRangedAttack = 381,
    LabelRangedDamage = 382,
    LabelReputationImpact = 383,
    LabelResists = 384,
    LabelRightHandAttack = 385,
    LabelSkill = 386,
    LabelStokeFireStrength = 387,
    LabelThrowDamageType = 388,
    LabelTrapDamage = 389,
    LabelUse = 390,
    LabelUses = 391,
    LabelVulnerabilities = 392,
    LabelWeight = 393,
    LabelWeightCapacity = 394,
    LabelWeightReduction = 395,
    LabelWorth = 396,
    LastPlaceYouLeftOff = 397,
    LearnedHowToCreate = 398,
    LeftHand = 399,
    LeftHandEquip = 400,
    LegendaryItemDamage = 401,
    Legs = 402,
    LikelyFailures = 403,
    Limited = 404,
    LostHealth = 405,
    LostHunger = 406,
    LostStamina = 407,
    LostThirst = 408,
    MapNotOfThisArea = 409,
    MaterialsDestroyed = 410,
    MerchantAlreadyTradedItem = 411,
    MessageOfTheDay = 412,
    Metabolism = 413,
    MetabolismSlowed = 414,
    Milk = 415,
    Milking = 416,
    MissedWith = 417,
    MissedYouWith = 418,
    MoreInformation = 419,
    MoveAllOfSameQualityToFacingContainer = 420,
    MoveAllOfSameQualityToInventory = 421,
    MoveAllOfSameQualityToLastOpenedContainer = 422,
    MoveAllOfSameQualityToOpenedContainer = 423,
    MoveAllToFacingContainer = 424,
    MoveAllToInventory = 425,
    MoveAllToLastOpenedContainer = 426,
    MoveAllToOpenedContainer = 427,
    MovedItem = 428,
    MoveOverTrapButDoNotSetOff = 429,
    MoveToFacingContainer = 430,
    MoveToInventory = 431,
    MoveToLastOpenedContainer = 432,
    MoveToOpenedContainer = 433,
    MultiplayerAlreadyVoting = 434,
    MultiplayerCannotStartAnotherVote = 435,
    MultiplayerGamePaused = 436,
    MultiplayerGameResumed = 437,
    MultiplayerPlayerConnected = 438,
    MultiplayerPlayerDied = 439,
    MultiplayerPlayerDisconnected = 440,
    MultiplayerPlayerJoined = 441,
    MultiplayerTravelVoteFailed = 442,
    MultiplayerTravelVotePlayersTooFar = 443,
    MustBeEquippedToIgnite = 444,
    Mysteriously = 445,
    Name = 446,
    NearlyBurnedEquipmentProtectedYou = 447,
    Neck = 448,
    NeedAShovelToDigTreasure = 449,
    NeedFishingNetForTreasure = 450,
    NeedFreeHandToShoot = 451,
    NeedToEquipToShoot = 452,
    NeedToStartTravelsOutside = 453,
    NeedWaterForBoat = 454,
    Negatively = 455,
    NightQuarter1 = 456,
    NightQuarter2 = 457,
    NightQuarter3 = 458,
    NightQuarter4 = 459,
    No = 460,
    NoAmmunitionForThatWeapon = 461,
    NoBlackPowderToFireWeapon = 462,
    NoFireToStokeWith = 463,
    NoFishAtLocation = 464,
    NoGroundWater = 465,
    NoInkToDrawMap = 466,
    NoKindlingOrFuelItemsToStartFire = 467,
    NoKindlingToStartFire = 468,
    NoLongerFeelPainOfBeingBurned = 469,
    NoLongerHostile = 470,
    NoMoreRoomInContainer = 471,
    NoReturnWithoutCompletingChallenges = 472,
    NoRoomForImprovement = 473,
    NoRoomToDrop = 474,
    North = 475,
    Northeast = 476,
    NorthNortheast = 477,
    NorthNorthwest = 478,
    Northwest = 479,
    NotAvailable = 480,
    NotEnoughPurifiedWaterYet = 481,
    NotEnoughTreasureToReturn = 482,
    NotFacingCreatureToOfferThisTo = 483,
    NotFacingLockedObject = 484,
    NotFacingOtherToHeal = 485,
    NotFacingValidItem = 486,
    NothingHereToCarve = 487,
    NothingHereToFill = 488,
    NothingHereToGrasp = 489,
    NothingToGetFromThis = 490,
    NothingToHarvestFromThisGather = 491,
    NothingToSmother = 492,
    NothingUsefulToHarvestYet = 493,
    NoTinderToStartFire = 494,
    NotInRangeOfTreasure = 495,
    NotSuitableToPlant = 496,
    NoWaterInStill = 497,
    NPCStartingDialog1 = 498,
    NPCStartingDialog2 = 499,
    NPCStartingDialog3 = 500,
    NPCStartingDialog4 = 501,
    NPCWelcome = 502,
    NPCWelcomeCredit = 503,
    NumberEight = 504,
    NumberFive = 505,
    NumberFour = 506,
    NumberNine = 507,
    NumberOne = 508,
    NumberSeven = 509,
    NumberSix = 510,
    NumberTen = 511,
    NumberThree = 512,
    NumberTwo = 513,
    ObjectIsLocked = 514,
    ObjectIsLockedAttemptToBreakIt = 515,
    Offer = 516,
    OfferAberrantFail = 517,
    OfferAberrantFailButTamed = 518,
    OpenDoor = 519,
    OverEatingLostStamina = 520,
    OverHydratingLostStamina = 521,
    Pack = 522,
    PaperTurnedToMush = 523,
    ParryTheBlow = 524,
    PartiallyDecodedMap = 525,
    PenultimateAnd = 526,
    Pet = 527,
    PetCreature = 528,
    PickAway = 529,
    PickupAllItems = 530,
    PickupItem = 531,
    Piercing = 532,
    Place = 533,
    PlacedOnGround = 534,
    Plant = 535,
    PlantCouldBeHarvested = 536,
    PlantedInGround = 537,
    PlantGatheringWillDestroy = 538,
    PlantHasResourcesToGather = 539,
    PlantHasResourcesToHarvest = 540,
    PlantHighlyFertile = 541,
    Planting = 542,
    PlantIsBare = 543,
    PlantIsFertile = 544,
    PlantIsInStage = 545,
    PlantIsNotFertile = 546,
    PlantNotReadyToHarvest = 547,
    PlantReadyToGather = 548,
    PlantReadyToGatherNotMaximal = 549,
    PlantReadyToHarvest = 550,
    PlantReadyToHarvestNotMaximal = 551,
    Player = 552,
    PlayerHasCompletedChallengeRequirement = 553,
    PlayerHasWonChallenge = 554,
    Poisoned = 555,
    PoisonedLostHealth = 556,
    PoisonWorkedItsCourse = 557,
    Positively = 558,
    PouredOut = 559,
    PouredOutOnYourself = 560,
    PouredWaterIntoStill = 561,
    PourHarmedPlant = 562,
    PourHealedPlant = 563,
    PourHealedPlantFully = 564,
    PourHealedPlantPartially = 565,
    PourIncreasedFertility = 566,
    Prepare = 567,
    Prepared = 568,
    Preserve = 569,
    PreservedFood = 570,
    PurifiedWaterInStill = 571,
    Quality = 572,
    Recent = 573,
    ReduceLength = 574,
    Refine = 575,
    RefusedToBeTamed = 576,
    Reinforce = 577,
    Release = 578,
    RemoveFromQuickslot = 579,
    Repair = 580,
    ReputationDecreased = 581,
    ReputationIncreased = 582,
    ReputationUpdate = 583,
    RequiredForDisassembleLabel = 584,
    RequiredForDisassembly = 585,
    RequiresFireToBeLit = 586,
    RequiresYouFacingFireSource = 587,
    RequiresYouToBeAround = 588,
    Resistant = 589,
    ResistOrVuln = 590,
    ResistOrVulnAll = 591,
    Rest = 592,
    Rested = 593,
    Resting = 594,
    RestingOnGroundNotEffective = 595,
    RestInterrupted = 596,
    RestInterruptedDamage = 597,
    RestInterruptedLoudNoise = 598,
    RestInterruptedPain = 599,
    RestInterruptedStirring = 600,
    RestLongTime = 601,
    RestModerateTime = 602,
    RestOnGround = 603,
    RestShortTime = 604,
    RestTime = 605,
    ReturnedToCivilization = 606,
    ReturningToCivilizationSetOffAgain = 607,
    ReturnsToLife = 608,
    Reveals = 609,
    RevealsEntityAppearsHurt = 610,
    RevealsEntityAppearsUnharmed = 611,
    RevealsEntityAppearsVeryHurt = 612,
    RevealsEntityIsAtPercentHealth = 613,
    RevealsEntityIsInjured = 614,
    RevealsEntityIsMostlyUninjured = 615,
    RevealsEntityIsOnTheVergeOfDeath = 616,
    RevealsEntityIsSeverelyInjured = 617,
    RevealsEntityIsUninjured = 618,
    RevealsEntitySeemsInjured = 619,
    RevealsEntitySeemsUninjured = 620,
    RevealsNumberOfResistancesAndVulnerabilities = 621,
    RevealsResistancesAndVulnerabilities = 622,
    RevealsSomeResistancesAndVulnerabilities = 623,
    Reverse = 624,
    RightHand = 625,
    RightHandEquip = 626,
    ScrollMaster = 627,
    ScrollProvidedNoUsefulInsight = 628,
    Seawater = 629,
    SeemsToHaveDrawnEnergy = 630,
    SetTrapOffButNoDamage = 631,
    SetUp = 632,
    ShadowInTheWater = 633,
    Simple = 634,
    Skill = 635,
    SkillHasRaised = 636,
    Skills = 637,
    Slashing = 638,
    Sleep = 639,
    Sleeping = 640,
    Slept = 641,
    SlitherSuckerConstricts = 642,
    SlitherSuckerJumpedOnHead = 643,
    SomethingInTheWayOf = 644,
    SomethingInTheWayOfCarveFirst = 645,
    SomethingInTheWayOfFire = 646,
    SomethingInTheWayOfFishing = 647,
    SomethingInTheWayOfPerforming = 648,
    SomethingInTheWayOfPlacing = 649,
    SomethingInTheWayOfPlanting = 650,
    SomethingInWayOfClosingDoor = 651,
    SoothedTheirBurnInjuries = 652,
    SoothedYourBurnInjuries = 653,
    Sort = 654,
    SortedByBestCraftingConsumables = 655,
    SortedByBestCraftingRequirements = 656,
    SortedByCategory = 657,
    SortedByDecay = 658,
    SortedByDurability = 659,
    SortedByGroup = 660,
    SortedByName = 661,
    SortedByQuality = 662,
    SortedByRecent = 663,
    SortedBySkill = 664,
    SortedByUnlockedTime = 665,
    SortedByWeight = 666,
    South = 667,
    Southeast = 668,
    SouthSoutheast = 669,
    SouthSouthwest = 670,
    Southwest = 671,
    StaminaIsFull = 672,
    StartedFire = 673,
    StartTravelInWater = 674,
    StarvingToDeath = 675,
    SteppingOn = 676,
    StillHasNoWaterToPurify = 677,
    StirredUpClawWorm = 678,
    StirredUpCreature = 679,
    StoppedYourBleeding = 680,
    StopUsingBoat = 681,
    Strength = 682,
    StrengthIncreasing = 683,
    SummonedGuardiansByDiggingTreasure = 684,
    SummonedGuardiansByLockpicking = 685,
    SunNotBrightEnoughToStartFire = 686,
    TakenFromGroundBecomeTamed = 687,
    Tame = 688,
    TamedCreature = 689,
    TeleportBlocked = 690,
    Teleported = 691,
    ThanksBuying = 692,
    ThanksSelling = 693,
    TheCreature = 694,
    TheirFist = 695,
    ThePlant = 696,
    ThereIsNoContainerOnTheStill = 697,
    ThereIsNoSunToStartFire = 698,
    ThereIsNothingToMilk = 699,
    ThisCannotBeMilked = 700,
    Throw = 701,
    ThrownIntoDepths = 702,
    ThrownIntoObstacle = 703,
    ThrownIntoVoid = 704,
    Tier = 705,
    TierGroup = 706,
    Till = 707,
    Tilling = 708,
    TimeIs = 709,
    TimeIsDawn = 710,
    TimeIsDaytime = 711,
    TimeIsDusk = 712,
    TimeIsNighttime = 713,
    TimeIsSunrise = 714,
    TimeIsSunset = 715,
    ToDamageAChest = 716,
    ToFight = 717,
    TooDamaged = 718,
    TooExhaustedToJump = 719,
    Touching = 720,
    TradeBarterCreditForItem = 721,
    TradeItemForBarterCredit = 722,
    TradingWith = 723,
    TrampledFire = 724,
    TrampledIntoGround = 725,
    TrampleIntoGround = 726,
    Trampling = 727,
    Transmogrified = 728,
    Transmogrify = 729,
    TrapMissed = 730,
    TrapStoppedYou = 731,
    TravelToFarOffLands = 732,
    TreasureIsBlocked = 733,
    True = 734,
    UnEquip = 735,
    UnEquipAll = 736,
    Unhitch = 737,
    UnhitchCreature = 738,
    Unknown = 739,
    UnknownItem = 740,
    Unlimited = 741,
    UnlockedChest = 742,
    UnlockedTime = 743,
    UnpurifiedFreshWater = 744,
    UnpurifiedWaterInStill = 745,
    UsingBareHands = 746,
    Vulnerable = 747,
    WaitUntilFireCooledToGetWater = 748,
    Water = 749,
    WaterGathering = 750,
    WaterPutOutFire = 751,
    Weight = 752,
    WeightCapacity = 753,
    WellIsDry = 754,
    WellIsFull = 755,
    West = 756,
    WestNorthwest = 757,
    WestSouthwest = 758,
    WildGoatRefusedToBeMilked = 759,
    WillNotTrade = 760,
    WithYouSee = 761,
    WorkingYourselfIntoExhaustion = 762,
    WorkingYourselfIntoExhaustionAndDrowning = 763,
    You = 764,
    YouApplied = 765,
    YouAte = 766,
    YouBeginResting = 767,
    YouCannotDoThatYet = 768,
    YouCooledLava = 769,
    YouCrafted = 770,
    YouDied = 771,
    YouDrank = 772,
    YouDropTheTorch = 773,
    YouEnchant = 774,
    YouEnchantMutate = 775,
    YouEquip = 776,
    YouFailedTo = 777,
    YouFailedToExtinguishedFireFully = 778,
    YouFailedToHeal = 779,
    YouFailedToHealOther = 780,
    YouFire = 781,
    YouGathered = 782,
    YouGatheredAndDropped = 783,
    YouHardenedCooledLava = 784,
    YouHarvested = 785,
    YouHarvestedAndDropped = 786,
    YouHaveAlreadyLearned = 787,
    YouHaveDied = 788,
    YouHaveEnabledDisabled = 789,
    YouHaveHealedOther = 790,
    YouHaveKilled = 791,
    YouHaveReleased = 792,
    YouHaveTamed = 793,
    YouLostWhileTraveling = 794,
    YouNeedMoreCredit = 795,
    YouNoticeBecomeEnraged = 796,
    YouNoticeDying = 797,
    YouNoticeFertilityDecreasing = 798,
    YouNoticeFertilityIncreasing = 799,
    YouNoticeGrowing = 800,
    YouNoticeLavaCooling = 801,
    YouNoticeLavaHardening = 802,
    YouNoticePerish = 803,
    YouNoticeStumbleInjureItself = 804,
    YouNoticeTakeFromGround = 805,
    YouNoticeWoundsClosing = 806,
    YouNoticeZombieHorde = 807,
    YouOfferedToCreature = 808,
    YouOpen = 809,
    YouPacked = 810,
    YouPickedUp = 811,
    YouRefine = 812,
    YouReinforce = 813,
    YouRepair = 814,
    YourFist = 815,
    YourHands = 816,
    YourHighSkill = 817,
    YourInventory = 818,
    YourLowSkill = 819,
    YourModerateSkill = 820,
    YourRubbingNoEffect = 821,
    YouRub = 822,
    YouSee = 823,
    YouSeeALivingMushroomSpore = 824,
    YouSeeAnAberrant = 825,
    YouSeeASkeletonCollapse = 826,
    YouSeeASlimeCombine = 827,
    YouSeeAZombieBleeding = 828,
    YouSeeDrop = 829,
    YouSeeEngulfFire = 830,
    YouSeeFireSpread = 831,
    YouSeeHelpingPlant = 832,
    YouSeeLay = 833,
    YouSeeLayingTrap = 834,
    YouSeeSpewLava = 835,
    YouSeeSpitAcid = 836,
    YouSeeSpringForth = 837,
    YouSeeSummon = 838,
    YouSeeSwampFlood = 839,
    YouSeeTrampling = 840,
    YouSetTheTrapOff = 841,
    YouStokeTheFireElemental = 842,
    YouThrew = 843,
    YouTilled = 844,
    YouUnequip = 845,
    YouUsed = 846
}
export default Message;
