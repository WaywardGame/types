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
    Multiple = 1,
    Aberrant = 2,
    AboutHours = 3,
    Absorb = 4,
    AbsorbNotPossible = 5,
    ActionAlterAltered = 6,
    ActionAlterFailed = 7,
    ActionAlterNotPossible = 8,
    ActionAttachContainerAlreadyHasContainer = 9,
    ActionAttachContainerAttachedContainer = 10,
    ActionAttachContainerAttachingContainer = 11,
    ActionAttachContainerCannotAttach = 12,
    ActionAttachContainerNothingToAttachContainerTo = 13,
    ActionAttackNoHandsSelected = 14,
    ActionButcherReleasesLava = 15,
    ActionCageCreatureCannotBeCaged = 16,
    ActionCageCreatureNoCreature = 17,
    ActionCageCreatureNoTamedCreature = 18,
    ActionCageCreatureNotOwner = 19,
    ActionCastAreaOverfished = 20,
    ActionConsumeItemTypeStats = 21,
    ActionCraft = 22,
    ActionCraftEfficacy = 23,
    ActionCraftEfficacyHigh = 24,
    ActionCraftEfficacyHighest = 25,
    ActionCraftEfficacyLow = 26,
    ActionCraftEfficacyLowest = 27,
    ActionCraftEfficacyMed = 28,
    ActionCraftEfficacyPercent = 29,
    ActionCraftYouLackTheRequirements = 30,
    ActionDetachContainerDetachContainer = 31,
    ActionDetachContainerNoDetach = 32,
    ActionDisassembleNoItemsSalvaged = 33,
    ActionDisassembleSalvaged = 34,
    ActionDismantleSeparated = 35,
    ActionDrinkInFrontNoDrink = 36,
    ActionEnhance = 37,
    ActionEnhanceEnhanced = 38,
    ActionEnhanceFailed = 39,
    ActionEnhanceNotPossible = 40,
    ActionFishingNothingBiting = 41,
    ActionFishingSlipped = 42,
    ActionFishingTooShallow = 43,
    ActionJumpCannotJump = 44,
    ActionMeleeNothingToAttack = 45,
    ActionMoveToSwimOffEdgeCannotCombatTides = 46,
    ActionNavigateMoon = 47,
    ActionNavigateNotOverworld = 48,
    ActionNavigateSun = 49,
    ActionNavigateUseSextant = 50,
    ActionPetCreatureRefused = 51,
    ActionPetNoTamedCreature = 52,
    ActionPickUpAllItemsNoItems = 53,
    ActionPickUpExcrementNoExcrement = 54,
    ActionPickUpItemNoItem = 55,
    ActionPickUpNoPickUp = 56,
    ActionRefineNoDurability = 57,
    ActionReleaseNoTamedCreature = 58,
    ActionRenameIsland = 59,
    ActionRenameNothing = 60,
    ActionSailToCivilizationNotInsideBoat = 61,
    ActionSailToIsland = 62,
    ActionSailToIslandArrived = 63,
    ActionSailToIslandPlayerArriving = 64,
    ActionSailToIslandPlayerDeparting = 65,
    ActionSetCreatureAiAlreadyCommanded = 66,
    ActionSetCreatureAiCannotCommand = 67,
    ActionSetCreatureAiNotEnoughSkill = 68,
    ActionSetCreatureAiNotEnoughTames = 69,
    ActionShipToIslandNoDestination = 70,
    ActionTameCreatureTamed = 71,
    ActionTameNoCreature = 72,
    ActionTestDepthNothingToTest = 73,
    ActionTestDepthWell = 74,
    ActionToggleContainerNoContainer = 75,
    ActionToggleDoorNoDoor = 76,
    ActionToggleHitchAlreadyHitched = 77,
    ActionToggleHitchAlreadyUnhitched = 78,
    ActionToggleHitchNoCreature = 79,
    ActionToggleHitchNoHitch = 80,
    ActionToggleTilledAlreadyPacked = 81,
    ActionToggleTilledAlreadyTilled = 82,
    ActionUncageCannotUncageHere = 83,
    ActionUpgrade = 84,
    ActionUpgradeFailed = 85,
    ActionUpgradeNotMagical = 86,
    ActionUpgradeNotPossible = 87,
    ActionUpgradeUpgraded = 88,
    ActionUseItemWeaponNeeded = 89,
    ActionWith = 90,
    AddedFuelToFire = 91,
    AddedFuelToTorch = 92,
    AddToQuickslot = 93,
    AllEquipmentUnEquipped = 94,
    AlreadyDesalinatedWaterInStill = 95,
    AlreadyFullyRefined = 96,
    AlreadyFullyRepaired = 97,
    AlreadyPreserved = 98,
    Alter = 99,
    AnotherIsland = 100,
    AnUnknownItem = 101,
    AppearedNotEffectiveForGathering = 102,
    AppearsToBeAberrant = 103,
    ArmorAppeared = 104,
    ArmorProtectedFromInjuryAgainst = 105,
    Attack = 106,
    AttemptedToDropAllIntoFire = 107,
    AttemptedToPlaceAllOnGround = 108,
    AttemptToSoothBurnInWater = 109,
    AttemptToTill = 110,
    AutoActionsNoItem = 111,
    BadlyBurnedLostHealth = 112,
    BarteringSkillsProvided = 113,
    BasedOnItSeems = 114,
    BeenPoisoned = 115,
    BeginSleeping = 116,
    BeginUsingVehicle = 117,
    BestForCrafting = 118,
    BleedingHasStopped = 119,
    BleedingProfusely = 120,
    BleedingToDeathLostHealth = 121,
    BookBlank = 122,
    BookContains = 123,
    BookCrumbles = 124,
    BookDiagrams = 125,
    BookEmpty = 126,
    BookNothing = 127,
    BookOpen = 128,
    BookScribbles = 129,
    BothEffectiveIneffective = 130,
    BrokeIntoPieces = 131,
    BrokenOnImpact = 132,
    BrokenWhileFiring = 133,
    Build = 134,
    Burned = 135,
    CannotAddAnyMoreFuel = 136,
    CannotBeCrafted = 137,
    CannotBePerformedOverWater = 138,
    CannotBePlacedHere = 139,
    CannotBePreserved = 140,
    CannotBeRefined = 141,
    CannotBeRefinedReinforcementNeeded = 142,
    CannotBeReinforced = 143,
    CannotBeRepaired = 144,
    CannotBuildHere = 145,
    CannotDoThatHere = 146,
    CannotDropHere = 147,
    CannotEquipThatThere = 148,
    CannotFishFor = 149,
    CannotHere = 150,
    CannotInWater = 151,
    CannotLeave = 152,
    CannotNoTreasure = 153,
    CannotPickUpLockedContainer = 154,
    CannotPickUpWhileLit = 155,
    CannotPlaceContainerInItself = 156,
    CannotPlaceHere = 157,
    CannotPlaceThatFromHere = 158,
    CannotPlaceThatHere = 159,
    CannotPlaceThatOverWater = 160,
    CannotPlantHereTilled = 161,
    CannotRepairWhileLit = 162,
    CannotRestHere = 163,
    CannotSeeHere = 164,
    CannotShipNoItems = 165,
    CannotShipNoPath = 166,
    CannotSleepHere = 167,
    CannotStartFireHere = 168,
    CannotToTellTime = 169,
    CannotUseCommand = 170,
    CannotWhenProtected = 171,
    CannotWhenProtectedDangerousAction = 172,
    CannotWhenProtectedDurability = 173,
    CarryingTooMuchWeight = 174,
    CarvedUpCorpse = 175,
    Carving = 176,
    CastYourLine = 177,
    Category = 178,
    CaughtFish = 179,
    ChatBanCommand = 180,
    ChatBannedCommand = 181,
    ChatCommandsCommand = 182,
    ChatCommandsCommandCommand = 183,
    ChatPingCommand = 184,
    ChatPlayerMessage = 185,
    ChatPlayersCommand = 186,
    ChatServerMessage = 187,
    ChatUnbanCommand = 188,
    ChatUnknownCommand = 189,
    Chop = 190,
    Chopping = 191,
    ClearedBlood = 192,
    ClearMessages = 193,
    Clockwise = 194,
    CloseContainer = 195,
    CloseDoor = 196,
    CloseGate = 197,
    CloseToBeingDestroyed = 198,
    CommandAttack = 199,
    CommandDefend = 200,
    CommandFollowClose = 201,
    CommandFollowFar = 202,
    CommandStay = 203,
    Consumed = 204,
    Container = 205,
    ContextMenuActionHotkey = 206,
    ContextMenuHelpActions = 207,
    ContextMenuHelpAutoActions = 208,
    ContextMenuHelpItems = 209,
    CopiedMap = 210,
    CopySelectedText = 211,
    CopyX = 212,
    CorpseOf = 213,
    CorpseOfNamed = 214,
    CouldNotDecipher = 215,
    Counterclockwise = 216,
    Craft = 217,
    Crafted = 218,
    Crafts = 219,
    CreatureAngered = 220,
    CreatureAppears = 221,
    CreatureAppeased = 222,
    CreatureExcrement = 223,
    CreatureHappinessHigh = 224,
    CreatureHappinessLow = 225,
    CreatureHappinessLowest = 226,
    CreatureHappinessNormal = 227,
    CreatureIdolAttractedCreature = 228,
    CreatureRefusesToBeTamed = 229,
    CreatureRefusesYou = 230,
    CreatureUntamed = 231,
    CuredYourPoison = 232,
    Cut = 233,
    CutHasHealed = 234,
    CutLostHealth = 235,
    CutWasBandaged = 236,
    DamageAppeared = 237,
    DamagedByPouring = 238,
    DangerousMove = 239,
    DangerousOpen = 240,
    DayQuarter1 = 241,
    DayQuarter2 = 242,
    DayQuarter3 = 243,
    DayQuarter4 = 244,
    DealtNoDamageToYou = 245,
    DeathBy = 246,
    DeathByBleeding = 247,
    DeathByBurning = 248,
    DeathByChallengeWinner = 249,
    DeathByConsumption = 250,
    DeathByCut = 251,
    DeathByDrowning = 252,
    DeathByExhaustion = 253,
    DeathByFistByPlayer = 254,
    DeathByFrostbite = 255,
    DeathByMalnutrition = 256,
    DeathByPoison = 257,
    DeathBySteppingOn = 258,
    DeathByTrap = 259,
    DeathByWeaponByPlayer = 260,
    Decay = 261,
    DestroyedFromUse = 262,
    DetachContainer = 263,
    Dexterity = 264,
    DidNotSeemToBeHurting = 265,
    Dig = 266,
    DigAway = 267,
    Digging = 268,
    DigWithHands = 269,
    Disabled = 270,
    Disassemble = 271,
    DisassembleAction = 272,
    Disassembling = 273,
    DiscoveredCaveEntrance = 274,
    DiscoveredInTheBottle = 275,
    DiscoveredLavaPassage = 276,
    Dismantle = 277,
    DismantleAction = 278,
    DismantleLabel = 279,
    Dismantling = 280,
    DismantlingRequires = 281,
    Dismounted = 282,
    DisplacedPuddles = 283,
    DoNotHaveTreasureMaps = 284,
    DoNotProduceAnyResources = 285,
    DoodadCauseStatus = 286,
    DoodadGroupTier = 287,
    DrewSurroundings = 288,
    Drink = 289,
    Drop = 290,
    DropAll = 291,
    DropAllOfSameQuality = 292,
    DroppedIntoDepths = 293,
    DroppedIntoFire = 294,
    DroppedIntoTheVoid = 295,
    DryadSprouted = 296,
    DueToDehydration = 297,
    DueToStarvation = 298,
    DugTreasureOut = 299,
    DumpContentsOfContainerInInventory = 300,
    Durability = 301,
    DyingOfDehydration = 302,
    EarnedMilestone = 303,
    East = 304,
    EastNortheast = 305,
    EastSoutheast = 306,
    Effective = 307,
    Enabled = 308,
    Enchant = 309,
    EquipmentPreventedStatusEffects = 310,
    EquipTo = 311,
    ErrorHasOccured = 312,
    ExtinguishedFire = 313,
    ExtinguishedLightSource = 314,
    Exude = 315,
    ExudeNotPossible = 316,
    FailedToAbsorb = 317,
    FailedToAddFuelToTorch = 318,
    FailedToCatchFish = 319,
    FailedToCauseDamage = 320,
    FailedToCauseYouDamage = 321,
    FailedToCopy = 322,
    FailedToDraw = 323,
    FailedToEnchant = 324,
    FailedToExude = 325,
    FailedToIgniteTorch = 326,
    FailedToPickLock = 327,
    FailedToPreserve = 328,
    FailedToRefine = 329,
    FailedToReinforce = 330,
    FailedToRepair = 331,
    FailedToStartFire = 332,
    FailedToTame = 333,
    FailedToTransmogrify = 334,
    FarOffLands = 335,
    FeltBurningPainLostHealth = 336,
    FeltFrostbitePainLostHealth = 337,
    FewMinutes = 338,
    Filled = 339,
    FilledFrom = 340,
    FireAroundYouIsWarm = 341,
    FiredIntoObstacle = 342,
    FireOverflowed = 343,
    FireOverflowedFireElemental = 344,
    FireSource = 345,
    FishingWithNoBait = 346,
    Floating = 347,
    FreshWater = 348,
    FromTheStill = 349,
    Fuel = 350,
    FuelIsRequired = 351,
    FullyDecodedMap = 352,
    GameHasBeenSavedIsTakingUpMB = 353,
    Gather = 354,
    GatherDestroy = 355,
    Gathering = 356,
    GatherWithHands = 357,
    GhostNoActions = 358,
    GhostOf = 359,
    GoatHasNoMilk = 360,
    GrabAll = 361,
    Group = 362,
    HackAway = 363,
    HandProtectionPreventedInjury = 364,
    HandsNotEffectiveFor = 365,
    Harvest = 366,
    Harvesting = 367,
    HarvestWithHands = 368,
    HasBeenHurtByATrap = 369,
    HasDecayed = 370,
    HasHitYouForDamage = 371,
    HasNoEffect = 372,
    HasSetTrapOffNoDamage = 373,
    HasSplit = 374,
    Help = 375,
    HelpGrow = 376,
    Here = 377,
    Hints = 378,
    HintsDisabled = 379,
    HintsEnabled = 380,
    Hitch = 381,
    HitchAttempt = 382,
    HitchCreature = 383,
    HitchDisabled = 384,
    HitchInUse = 385,
    HitchUnhitch = 386,
    HitForDamage = 387,
    HitYouForDamage = 388,
    Hour = 389,
    Hours = 390,
    HurtHandsHittingWithoutWeapons = 391,
    HurtHandsWithNoTool = 392,
    Ignite = 393,
    IgnitedTorch = 394,
    Ineffective = 395,
    InjuredFromTrap = 396,
    InNeedOfRepair = 397,
    InspectItem = 398,
    InteractingWithHasInjuredYouForDamage = 399,
    Inventory = 400,
    IsInTheWayOfPickingUp = 401,
    It = 402,
    ItAlsoReveals = 403,
    ItAlsoSeems = 404,
    ItContains = 405,
    ItemFromWater = 406,
    JoinedAServer = 407,
    Jump = 408,
    Killed = 409,
    KnowledgeHasIncreased = 410,
    LabelActionTier = 411,
    LabelAdditionalRequirements = 412,
    LabelAttackFromTactics = 413,
    LabelBase = 414,
    LabelCanIncrease = 415,
    LabelCraftingReputation = 416,
    LabelCraftingRequires = 417,
    LabelCraftingSkillReputation = 418,
    LabelDecay = 419,
    LabelDefense = 420,
    LabelDismantlingRequires = 421,
    LabelDurability = 422,
    LabelEquip = 423,
    LabelGrouping = 424,
    LabelHave = 425,
    LabelLeftHandAttack = 426,
    LabelLevel = 427,
    LabelLightSourceWhenLit = 428,
    LabelOnCure = 429,
    LabelOnDrink = 430,
    LabelOnEat = 431,
    LabelOnEquip = 432,
    LabelOnHeal = 433,
    LabelOnOtherHeal = 434,
    LabelPreservationRate = 435,
    LabelProtected = 436,
    LabelRange = 437,
    LabelRanged = 438,
    LabelRangedAttack = 439,
    LabelRangedDamage = 440,
    LabelReputationImpact = 441,
    LabelResists = 442,
    LabelRightHandAttack = 443,
    LabelSkill = 444,
    LabelStokeFireStrength = 445,
    LabelThrowDamageType = 446,
    LabelTrapDamage = 447,
    LabelUse = 448,
    LabelUses = 449,
    LabelVulnerabilities = 450,
    LabelWeight = 451,
    LabelWeightCapacity = 452,
    LabelWeightReduction = 453,
    LabelWorth = 454,
    LastPlaceYouLeftOff = 455,
    LearnedHowToCreate = 456,
    LeftHand = 457,
    LikelyFailures = 458,
    Limited = 459,
    Lockpick = 460,
    Magical = 461,
    MagicalItemDamage = 462,
    MapCompletedNotOfThisArea = 463,
    MapDestroyed = 464,
    MapNearlyDestroyed = 465,
    MapNotOfThisArea = 466,
    MaterialsDestroyed = 467,
    MerchantAlreadyTradedItem = 468,
    MessageOfTheDay = 469,
    Metabolism = 470,
    MetabolismSlowed = 471,
    Milk = 472,
    Mine = 473,
    Mining = 474,
    MissedWith = 475,
    MissedYouWith = 476,
    MoveAllOfSameQualityToFacingContainer = 477,
    MoveAllOfSameQualityToInventory = 478,
    MoveAllOfSameQualityToLastOpenedContainer = 479,
    MoveAllOfSameQualityToOpenedContainer = 480,
    MoveAllToFacingContainer = 481,
    MoveAllToInventory = 482,
    MoveAllToLastOpenedContainer = 483,
    MoveAllToOpenedContainer = 484,
    MovedItem = 485,
    MoveOverTrapButDoNotSetOff = 486,
    MoveToFacingContainer = 487,
    MoveToInventory = 488,
    MoveToLastOpenedContainer = 489,
    MoveToOpenedContainer = 490,
    MultiplayerGamePaused = 491,
    MultiplayerGameResumed = 492,
    MultiplayerPlayerConnected = 493,
    MultiplayerPlayerDied = 494,
    MultiplayerPlayerDisconnected = 495,
    MultiplayerPlayerJoined = 496,
    MultipleQuickslots = 497,
    MustBeEquippedToIgnite = 498,
    Mysteriously = 499,
    Name = 500,
    NearlyBurnedEquipmentProtectedYou = 501,
    NeedToStartTravelsOutside = 502,
    NeedWaterForBoat = 503,
    Negatively = 504,
    NightQuarter1 = 505,
    NightQuarter2 = 506,
    NightQuarter3 = 507,
    NightQuarter4 = 508,
    No = 509,
    NoAmmunitionForThatWeapon = 510,
    NoFireToStokeWith = 511,
    NoFishAtLocation = 512,
    NoGroundWater = 513,
    NoInkToDrawMap = 514,
    NoKindlingOrFuelItemsToStartFire = 515,
    NoKindlingToStartFire = 516,
    NoLongerFeelPainOfBeingBurned = 517,
    NoLongerFeelPainOfBeingFrostbitten = 518,
    NoLongerHostile = 519,
    NoMoreRoomInContainer = 520,
    NoPaperToDrawMap = 521,
    NoRequiredItemToFireWeapon = 522,
    NoReturnWithoutCompletingChallenges = 523,
    NoRoomForImprovement = 524,
    NoRoomToDrop = 525,
    NoRoomToSummon = 526,
    North = 527,
    Northeast = 528,
    NorthNortheast = 529,
    NorthNorthwest = 530,
    Northwest = 531,
    NotEnoughPurifiedWaterYet = 532,
    NotEnoughTreasureToReturn = 533,
    NotFacingCreatureToOfferThisTo = 534,
    NotFacingLockedObject = 535,
    NotFacingOtherToHeal = 536,
    NotFacingValidItem = 537,
    NothingHereToButcher = 538,
    NothingHereToFill = 539,
    NothingHereToGrasp = 540,
    NothingTo = 541,
    NothingToGetFromThis = 542,
    NothingToHarvestFromThisGather = 543,
    NothingToSmother = 544,
    NothingUsefulToHarvestYet = 545,
    NoTinderToStartFire = 546,
    NotSuitableToPlant = 547,
    NoWaterInStill = 548,
    NPCMerchantStartingDialog1 = 549,
    NPCMerchantStartingDialog2 = 550,
    NPCMerchantStartingDialog3 = 551,
    NPCMerchantStartingDialog4 = 552,
    NPCMerchantWelcomeCredit = 553,
    NPCShipperShip = 554,
    NPCShipperShipToIsland = 555,
    NPCShipperStartingDialog1 = 556,
    NPCShipperStartingDialog2 = 557,
    NPCShipperStartingDialog3 = 558,
    NPCShipperStartingDialog4 = 559,
    NPCWelcome = 560,
    NumberEight = 561,
    NumberFive = 562,
    NumberFour = 563,
    NumberNine = 564,
    NumberOne = 565,
    NumberSeven = 566,
    NumberSix = 567,
    NumberTen = 568,
    NumberThree = 569,
    NumberTwo = 570,
    ObjectIsLocked = 571,
    ObjectIsLockedAttemptToBreakIt = 572,
    OfferAberrantFail = 573,
    OfferAberrantFailButTamed = 574,
    Open = 575,
    OpenClose = 576,
    OpenCloseContainer = 577,
    OpenCloseDoor = 578,
    OpenCloseGate = 579,
    OpenDoor = 580,
    OpenGate = 581,
    OverEatingLostStamina = 582,
    OverHydratingLostStamina = 583,
    Pack = 584,
    PaperTurnedToMush = 585,
    ParryTheBlow = 586,
    PartiallyDecodedMap = 587,
    PenultimateAnd = 588,
    Pet = 589,
    PetCreature = 590,
    PickAway = 591,
    PickUp = 592,
    PickUpAllItems = 593,
    PickUpDoodad = 594,
    PickUpDoodadSpecific = 595,
    PickUpExcrement = 596,
    PickUpExcrementWithHands = 597,
    PickUpItem = 598,
    PickUpTheItem = 599,
    Place = 600,
    PlacedOnGround = 601,
    Plant = 602,
    PlantedInGround = 603,
    PlantGatheredPlant = 604,
    PlantGatheringWillDestroy = 605,
    PlantHasResourcesToGather = 606,
    PlantHasResourcesToHarvest = 607,
    PlantHighlyFertile = 608,
    Planting = 609,
    PlantIsBare = 610,
    PlantIsFertile = 611,
    PlantIsInStage = 612,
    PlantIsNotFertile = 613,
    PlantNotReadyToHarvest = 614,
    PlantReadyToGather = 615,
    PlantReadyToGatherNotMaximal = 616,
    PlantReadyToHarvest = 617,
    PlantReadyToHarvestNotMaximal = 618,
    Player = 619,
    PlayerHas = 620,
    PlayerHasCompletedChallengeRequirement = 621,
    PlayerHasWonChallenge = 622,
    Poisoned = 623,
    PoisonedLostHealth = 624,
    PoisonWorkedItsCourse = 625,
    Positively = 626,
    PouredOut = 627,
    PouredOutOnYourself = 628,
    PouredWaterIntoStill = 629,
    PourHarmedPlant = 630,
    PourHealedPlant = 631,
    PourHealedPlantFully = 632,
    PourHealedPlantPartially = 633,
    PourIncreasedFertility = 634,
    Pouring = 635,
    Prepare = 636,
    Prepared = 637,
    Preserve = 638,
    PreservedFood = 639,
    PurifiedWaterInStill = 640,
    Quality = 641,
    RandomEventsFire = 642,
    Recent = 643,
    ReduceLength = 644,
    Refine = 645,
    RefusedToBeTamed = 646,
    Reinforce = 647,
    Release = 648,
    RemoveAction = 649,
    RemoveFromQuickslot = 650,
    Repair = 651,
    ReputationDecreased = 652,
    ReputationIncreased = 653,
    ReputationUpdate = 654,
    RequiredForDisassembleLabel = 655,
    RequiredForDisassembly = 656,
    RequiresFireToBeLit = 657,
    RequiresYouFacingFireSource = 658,
    RequiresYouToBeAround = 659,
    Resistant = 660,
    ResistOrVuln = 661,
    ResistOrVulnAll = 662,
    Rest = 663,
    Rested = 664,
    Resting = 665,
    RestingOnGroundNotEffective = 666,
    RestInterrupted = 667,
    RestInterruptedDamage = 668,
    RestInterruptedDying = 669,
    RestInterruptedLoudNoise = 670,
    RestInterruptedPain = 671,
    RestInterruptedStirring = 672,
    RestInterruptedWaterPoured = 673,
    RestLongTime = 674,
    RestModerateTime = 675,
    RestOnBoat = 676,
    RestOnGround = 677,
    RestShortTime = 678,
    RestTime = 679,
    ReturnedToCivilization = 680,
    ReturningToCivilizationSetOffAgain = 681,
    ReturnsToLife = 682,
    Reveals = 683,
    RevealsEntityAppearsHurt = 684,
    RevealsEntityAppearsUnharmed = 685,
    RevealsEntityAppearsVeryHurt = 686,
    RevealsEntityIsAtPercentHealth = 687,
    RevealsEntityIsInjured = 688,
    RevealsEntityIsMostlyUninjured = 689,
    RevealsEntityIsOnTheVergeOfDeath = 690,
    RevealsEntityIsSeverelyInjured = 691,
    RevealsEntityIsUninjured = 692,
    RevealsEntitySeemsInjured = 693,
    RevealsEntitySeemsUninjured = 694,
    RevealsNumberOfResistancesAndVulnerabilities = 695,
    RevealsResistancesAndVulnerabilities = 696,
    RevealsSomeResistancesAndVulnerabilities = 697,
    Reverse = 698,
    RightHand = 699,
    Sailing = 700,
    ScrollMaster = 701,
    ScrollProvidedNoUsefulInsight = 702,
    Seawater = 703,
    SeemsToHaveDrawnEnergy = 704,
    SetTrapOffButNoDamage = 705,
    SetUp = 706,
    ShadowInTheWater = 707,
    Ship = 708,
    Skill = 709,
    SkillHasRaised = 710,
    Skills = 711,
    Sleep = 712,
    Sleeping = 713,
    SleepOnBoat = 714,
    Slept = 715,
    SlitherSuckerConstricts = 716,
    SlitherSuckerJumpedOnHead = 717,
    SomethingInTheWayOf = 718,
    SomethingInTheWayOfButcherFirst = 719,
    SomethingInTheWayOfFire = 720,
    SomethingInTheWayOfFishing = 721,
    SomethingInTheWayOfPerforming = 722,
    SomethingInTheWayOfPlacing = 723,
    SomethingInTheWayOfPlanting = 724,
    SomethingInTheWayOfReleasing = 725,
    SomethingInTheWayOfSummoning = 726,
    SomethingInWayOfClosingDoor = 727,
    SoothedTheirBurnInjuries = 728,
    SoothedYourBurnInjuries = 729,
    Sort = 730,
    SortedByBestCraftingConsumables = 731,
    SortedByBestCraftingRequirements = 732,
    SortedByCategory = 733,
    SortedByCraftableOnly = 734,
    SortedByDecay = 735,
    SortedByDurability = 736,
    SortedByGroup = 737,
    SortedByMagical = 738,
    SortedByName = 739,
    SortedByQuality = 740,
    SortedByRecent = 741,
    SortedBySkill = 742,
    SortedByUnlockedTime = 743,
    SortedByWeight = 744,
    SortedByWorth = 745,
    South = 746,
    Southeast = 747,
    SouthSoutheast = 748,
    SouthSouthwest = 749,
    Southwest = 750,
    StaminaIsFull = 751,
    StartedFire = 752,
    StartTravelInWater = 753,
    StarvingToDeath = 754,
    StatAmount = 755,
    StatGained = 756,
    StatIncreasing = 757,
    StatLost = 758,
    StatQuenched = 759,
    StatRegained = 760,
    StatSated = 761,
    SteppingOn = 762,
    StillHasNoWaterToPurify = 763,
    StirredUpClawWorm = 764,
    StirredUpCreature = 765,
    StoppedYourBleeding = 766,
    StopUsingVehicle = 767,
    Strength = 768,
    SummonedGuardiansByDiggingTreasure = 769,
    SummonedGuardiansByLockpicking = 770,
    SummonVoidDwellerItem = 771,
    SummonVoidDwellerRinging = 772,
    SummonVoidDwellerShiver = 773,
    SunNotBrightEnoughToStartFire = 774,
    SwampWater = 775,
    Swimming = 776,
    TakenFromGroundBecomeTamed = 777,
    Tame = 778,
    TamedCreature = 779,
    TeleportBlocked = 780,
    Teleported = 781,
    ThanksBuying = 782,
    ThanksSelling = 783,
    TheCreature = 784,
    TheirFist = 785,
    ThePlant = 786,
    ThereIsNoContainerOnTheStill = 787,
    ThereIsNoSunToStartFire = 788,
    ThisCannotBeMilked = 789,
    Throw = 790,
    ThrownIntoDepths = 791,
    ThrownIntoObstacle = 792,
    ThrownIntoVoid = 793,
    Tier = 794,
    TierGroup = 795,
    Till = 796,
    Tilling = 797,
    TillWithHands = 798,
    TimeIs = 799,
    TimeIsDawn = 800,
    TimeIsDaytime = 801,
    TimeIsDusk = 802,
    TimeIsNighttime = 803,
    TimeIsSunrise = 804,
    TimeIsSunset = 805,
    ToDamageAChest = 806,
    ToFight = 807,
    TooDamaged = 808,
    TooExhaustedToJump = 809,
    Touching = 810,
    TradeBarterCreditForItem = 811,
    TradeItemForBarterCredit = 812,
    TradingWith = 813,
    TrampledFire = 814,
    TrampledIntoGround = 815,
    TrampleIntoGround = 816,
    Trampling = 817,
    TransmogrificationNotPossible = 818,
    Transmogrified = 819,
    Transmogrify = 820,
    TrapMissed = 821,
    TrapStoppedYou = 822,
    Traveling = 823,
    TreasureIsBlocked = 824,
    UiActionCannotUseMissingSlottedItem = 825,
    UiActionCannotUseRequiresCreature = 826,
    UiActionCannotUseRequiresDoodad = 827,
    UiActionCannotUseRequiresItem = 828,
    UnEquip = 829,
    UnEquipAll = 830,
    Unhitch = 831,
    UnhitchCreature = 832,
    Unknown = 833,
    UnknownItem = 834,
    Unlimited = 835,
    UnlockedChest = 836,
    UnlockedTime = 837,
    UnpurifiedFreshWater = 838,
    UnpurifiedWaterInStill = 839,
    Use = 840,
    UsingBareHands = 841,
    VehicleDefense = 842,
    Vulnerable = 843,
    Water = 844,
    WaterGathering = 845,
    WaterPutOutFire = 846,
    Weight = 847,
    WellIsDry = 848,
    WellIsFull = 849,
    West = 850,
    WestNorthwest = 851,
    WestSouthwest = 852,
    WildGoatRefusedToBeMilked = 853,
    WillNotTrade = 854,
    WithYouSee = 855,
    WorkingYourselfIntoExhaustion = 856,
    WorkingYourselfIntoExhaustionAndDrowning = 857,
    Worth = 858,
    You = 859,
    YouAbsorb = 860,
    YouApplied = 861,
    YouAreAlready = 862,
    YouAte = 863,
    YouBeginResting = 864,
    YouCannotDoThatYet = 865,
    YouCanNowCombatTheTides = 866,
    YouCooledLava = 867,
    YouCrafted = 868,
    YouDied = 869,
    YouDoNotFindTreasureYet = 870,
    YouDrank = 871,
    YouDropTheTorch = 872,
    YouEnchant = 873,
    YouEquip = 874,
    YouExude = 875,
    YouExudeSome = 876,
    YouExudeSomeReasonConflicting = 877,
    YouExudeSomeReasonMax = 878,
    YouExudeSomeReasonProperties = 879,
    YouFailedTo = 880,
    YouFailedToExtinguishedFireFully = 881,
    YouFailedToHeal = 882,
    YouFailedToHealOther = 883,
    YouFire = 884,
    YouGathered = 885,
    YouGatheredAndDropped = 886,
    YouHarvested = 887,
    YouHarvestedAndDropped = 888,
    YouHave = 889,
    YouHaveAlreadyLearned = 890,
    YouHaveBeenCut = 891,
    YouHaveCommanded = 892,
    YouHaveDied = 893,
    YouHaveEnabledDisabled = 894,
    YouHaveHealedOther = 895,
    YouHaveKilled = 896,
    YouHaveReleased = 897,
    YouHaveSummoned = 898,
    YouHaveTamed = 899,
    YouHaveUncaged = 900,
    YouNeedMoreCredit = 901,
    YouNeedXToY = 902,
    YouNoticeBarren = 903,
    YouNoticeBecomeEnraged = 904,
    YouNoticeDying = 905,
    YouNoticeFertilityDecreasing = 906,
    YouNoticeFertilityIncreasing = 907,
    YouNoticeGrowing = 908,
    YouNoticeLavaCooling = 909,
    YouNoticeLavaHardening = 910,
    YouNoticePerish = 911,
    YouNoticePlantDamage = 912,
    YouNoticePlantRegenerated = 913,
    YouNoticeRegrowing = 914,
    YouNoticeStumbleInjureItself = 915,
    YouNoticeTakeFromGround = 916,
    YouNoticeWoundsClosing = 917,
    YouNoticeZombieHorde = 918,
    YouOfferedToCreature = 919,
    YouOfferedToCreatureRejects = 920,
    YouOpen = 921,
    YouOpenShip = 922,
    YouPacked = 923,
    YouPickedUp = 924,
    YouRefine = 925,
    YouReinforce = 926,
    YouRepair = 927,
    YouReturnFromCivilizationWith = 928,
    YourFist = 929,
    YourHands = 930,
    YourHighSkill = 931,
    YourInventory = 932,
    YourIsland = 933,
    YourLowSkill = 934,
    YourModerateSkill = 935,
    YourRubbingNoEffect = 936,
    YouRub = 937,
    YouSee = 938,
    YouSeeALivingMushroomSpore = 939,
    YouSeeAnAberrant = 940,
    YouSeeASkeletonCollapse = 941,
    YouSeeASlimeCombine = 942,
    YouSeeAZombieBleeding = 943,
    YouSeeCoolDown = 944,
    YouSeeDrop = 945,
    YouSeeEngulfFire = 946,
    YouSeeFireSpread = 947,
    YouSeeHelpingPlant = 948,
    YouSeeLay = 949,
    YouSeeLayingTrap = 950,
    YouSeeSpewLava = 951,
    YouSeeSpitAcid = 952,
    YouSeeSpringForth = 953,
    YouSeeSummon = 954,
    YouSeeSwampFlood = 955,
    YouSeeTrampling = 956,
    YouSetTheTrapOff = 957,
    YouStokeTheCreature = 958,
    YouSwapMainHandAndOffHand = 959,
    YouThrew = 960,
    YouTilled = 961,
    YouUnequip = 962,
    YouUsed = 963,
    YouWhileTraveling = 964
}
export default Message;
