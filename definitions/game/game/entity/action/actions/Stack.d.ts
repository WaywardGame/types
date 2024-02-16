/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { ItemType } from "@wayward/game/game/item/IItem";
export declare const Stack: Action<[ActionArgument.Container, import("../argument/ActionArgumentEnum").default<ItemType, "Bow" | "None" | "HideGlue" | "AnimalSkull" | "GraniteArrow" | "GraniteArrowhead" | "PileOfAsh" | "BarkLeggings" | "BarkShield" | "BarkTunic" | "Bone" | "Branch" | "CactusSpines" | "Charcoal" | "GraniteFlooring" | "CookedMeat" | "Earthworm" | "Feather" | "Fertilizer" | "WaterskinOfSeawater" | "FirePlough" | "BeggartickSeeds" | "Fossil" | "GoldCoins" | "GoldenChalice" | "GoldenRing" | "GoldShortSword" | "GrassSeeds" | "IronOre" | "WoodenDowels" | "Granite" | "LeafBedroll" | "LeatherHide" | "Leaves" | "Limestone" | "Log" | "GraniteMortarAndPestle" | "ButtonMushrooms" | "Nopal" | "Peat" | "Sandstone" | "PileOfGravel" | "PileOfBeachSand" | "WoodenArrow" | "GraniteAxe" | "Bandage" | "WovenFabric" | "CactusNeedle" | "GraniteShovel" | "WoodenSpear" | "Suture" | "Raft" | "RawMeat" | "Raspberries" | "FlyAmanita" | "Rope" | "MapleSeeds" | "Badderlocks" | "SharpGlass" | "SharpGranite" | "Skullcap" | "SmoothGranite" | "Soil" | "GraniteSpear" | "Stones" | "GraniteWall" | "String" | "StrippedBark" | "TannedLeather" | "Tannin" | "MilkThistleSeeds" | "TreeBark" | "HoneyFungus" | "ClematisVine" | "Twigs" | "Waterskin" | "WoodenPole" | "PeatBandage" | "BowDrill" | "FishingNet" | "RawCod" | "CookedCod" | "GraniteCampfire" | "VineWhip" | "PileOfSnow" | "BarkTorch" | "LitBarkTorch" | "HandDrill" | "SmallBag" | "Shale" | "SharpenedBone" | "Grindstone" | "RawFishSteak" | "CookedFishSteak" | "WaterskinOfDesalinatedWater" | "BoatPaddle" | "BullBoat" | "RefinedSand" | "Spyglass" | "Retort" | "RawClay" | "RawClayBlowpipe" | "ClayBlowpipe" | "LeatherBelt" | "LeatherTunic" | "LeatherBoots" | "LeatherCap" | "LeatherGorget" | "LeatherPants" | "LeatherGloves" | "GraniteFurnace" | "SandstoneKiln" | "IronTongs" | "Talc" | "TalcumPowder" | "WoodenSandCastFlask" | "Lens" | "PlantRoots" | "Lockpick" | "BoneNeedle" | "Pineapple" | "TatteredMap" | "Coal" | "SmeltedWroughtIron" | "LimestonePowder" | "SmeltedIron" | "Backpack" | "RottenMeat" | "GraniteHammer" | "RawChicken" | "CookedChicken" | "GraniteAnvil" | "WoodenChest" | "IronShortSword" | "IronBreastplate" | "IronBoots" | "IronHelmet" | "IronGorget" | "IronCuisses" | "IronGauntlets" | "IronHeater" | "SandstoneWall" | "SandstoneFlooring" | "SpiderSilk" | "AnimalFat" | "TallowTorch" | "ClayFlakes" | "GreenSand" | "OldInstructionalScroll" | "SlimeGelatin" | "SlimeGlue" | "CookedSpiderMeat" | "SpiderMeat" | "IronLockpick" | "RottingVegetation" | "Chives" | "IronHammer" | "IronSpear" | "IronShovel" | "IronDoubleAxe" | "IronPickaxe" | "Inkstick" | "Coconut" | "PalmLeaf" | "Offal" | "BoneFragments" | "LitPoleTorch" | "CottonBoll" | "CottonSeeds" | "CottonFabric" | "BonePole" | "Tourniquet" | "WroughtIronPickaxe" | "WroughtIronDoubleAxe" | "WroughtIronShovel" | "WroughtIronSpear" | "WroughtIronHammer" | "WroughtIronLockpick" | "WroughtIronShield" | "WroughtIronGauntlets" | "WroughtIronCuisses" | "WroughtIronGorget" | "WroughtIronHelmet" | "WroughtIronBoots" | "WroughtIronBreastplate" | "WroughtIronShortSword" | "WoodenWall" | "WoodenFlooring" | "WoodenDoor" | "FishingRod" | "MessageInABottle" | "CarbonPowder" | "PileOfCompost" | "FishGlue" | "WoodenShavings" | "GraniteDeadfall" | "Snare" | "WaterskinOfMedicinalWater" | "CharcoalBandage" | "WoodenTongs" | "WroughtIronTongs" | "SheetOfGlass" | "SolarStill" | "TinWaterStill" | "GraniteSundial" | "LitTallowTorch" | "Sinew" | "ShortBow" | "LongBow" | "CompositeBow" | "WaterskinOfPurifiedFreshWater" | "WaterskinOfUnpurifiedFreshWater" | "GlassBottle" | "Cork" | "GlassBottleOfSeawater" | "GlassBottleOfDesalinatedWater" | "GlassBottleOfMedicinalWater" | "GlassBottleOfPurifiedFreshWater" | "GlassBottleOfUnpurifiedFreshWater" | "WroughtIronArrow" | "IronArrow" | "GraniteBullet" | "WroughtIronBullet" | "IronBullet" | "LeatherQuiver" | "Ectoplasm" | "MagicalEssence" | "WoodenFence" | "CreatureIdol" | "CordedSling" | "LeatherSling" | "WroughtIronArrowhead" | "IronArrowhead" | "Hammock" | "CottonBedroll" | "FeatherBedroll" | "RawTaintedMeat" | "CookedTaintedMeat" | "GraniteKnife" | "RawBlindfish" | "CookedBlindfish" | "Pemmican" | "CookedPemmican" | "Sail" | "Sailboat" | "ChickenEgg" | "BoiledChickenEgg" | "SheafOfHay" | "Niter" | "Saltpeter" | "BlackPowder" | "FlintlockPistol" | "Giblets" | "ExplosiveTrap" | "SkeletalMageWand" | "RawClayJug" | "ClayJug" | "ClayJugOfSeawater" | "ClayJugOfDesalinatedWater" | "ClayJugOfMedicinalWater" | "ClayJugOfPurifiedFreshWater" | "ClayJugOfUnpurifiedFreshWater" | "RawClayBrick" | "ClayBrick" | "ClayWall" | "ClayFlooring" | "PineappleSeeds" | "RaspberrySeeds" | "PricklyPearSeeds" | "ClematisSeeds" | "PaperSheet" | "PaperMold" | "Beggarticks" | "MilkThistleFlowers" | "DrawnMap" | "TatteredClothShirt" | "TatteredClothTrousers" | "WoodenGate" | "PoisonIvyLeaves" | "PoisonIvySeeds" | "WroughtIronChest" | "IronChest" | "SwitchgrassSeeds" | "Apple" | "SpiderEggs" | "TailFeathers" | "AppleSeeds" | "VenomGland" | "OrnateWoodenChest" | "RollOfRedCarpet" | "OrnateCape" | "FireBladder" | "GoldenKey" | "WoodenShortSword" | "ClayKiln" | "ClayCampfire" | "ClayFurnace" | "CopperWaterStill" | "SandstoneCampfire" | "SandstoneFurnace" | "WroughtIronWaterStill" | "GraniteKiln" | "WroughtIronAnvil" | "IronAnvil" | "MageRobe" | "CrackedOrb" | "AnimalClaw" | "AnimalPelt" | "AnimalFur" | "Scales" | "SharkFin" | "RawReptileMeat" | "CookedReptileMeat" | "Tentacles" | "CookedTentacles" | "WormMeat" | "CookedWormMeat" | "GranitePickaxe" | "WroughtIronAxe" | "IronAxe" | "FertileSoil" | "GraniteHoe" | "WroughtIronHoe" | "IronHoe" | "LavaBeetleHelmet" | "SpruceCone" | "SpruceSeeds" | "SpruceNeedles" | "CypressCone" | "CypressSeeds" | "CypressLeaves" | "Lettuce" | "LettuceSeeds" | "ChiveSeeds" | "Potato" | "PotatoSeeds" | "Carrot" | "CarrotSeeds" | "CornEar" | "CornSeeds" | "Cucumber" | "CucumberSeeds" | "Tomato" | "TomatoSeeds" | "Pumpkin" | "PumpkinSeeds" | "PricklyPearFruit" | "SugarCaneStalks" | "SugarCaneSeeds" | "BushelOfWheat" | "Wheat" | "CookedPotato" | "CookedCornCob" | "BundleOfSwitchgrass" | "Cloak" | "WoodenMortarAndPestle" | "SandstoneMortarAndPestle" | "WroughtIronMortarAndPestle" | "IronMortarAndPestle" | "RawClayMortarAndPestle" | "ClayMortarAndPestle" | "CopperOre" | "SmeltedCopper" | "CopperPickaxe" | "CopperDoubleAxe" | "CopperShovel" | "CopperSpear" | "CopperHammer" | "CopperLockpick" | "CopperBuckler" | "CopperGauntlets" | "CopperGreaves" | "CopperGorget" | "CopperHelmet" | "CopperBoots" | "CopperCuirass" | "CopperShortSword" | "CopperTongs" | "CopperArrow" | "CopperBullet" | "CopperArrowhead" | "CopperChest" | "CopperAnvil" | "CopperAxe" | "CopperHoe" | "CopperMortarAndPestle" | "WaterskinOfGoatMilk" | "ClayJugOfGoatMilk" | "GlassBottleOfGoatMilk" | "Obsidian" | "OrnateBlueBook" | "Journal" | "MossCoveredBook" | "GildedRedBook" | "ArrowShaft" | "SlitherSucker" | "AberrantSlitherSucker" | "StrawHat" | "BlackplateSabatons" | "BlackplateBreastplate" | "BlackplateGauntlets" | "BlackplateGorget" | "BlackplateGreaves" | "BlackplateHelmet" | "DeathKnightAxe" | "Macuahuitl" | "ObsidianArrow" | "ObsidianArrowhead" | "ObsidianAxe" | "ObsidianKnife" | "ObsidianShovel" | "ObsidianSpear" | "TumbleweedSeeds" | "CoconutHusk" | "PeeledCoconut" | "CoconutMeat" | "CoconutContainerOfCoconutWater" | "CoconutContainer" | "CoconutContainerOfSeawater" | "CoconutContainerOfDesalinatedWater" | "CoconutContainerOfMedicinalWater" | "CoconutContainerOfPurifiedFreshWater" | "CoconutContainerOfUnpurifiedFreshWater" | "CoconutContainerOfGoatMilk" | "OldEducationalScroll" | "StrippedHide" | "ClaySandCastFlask" | "SandstoneSandCastFlask" | "GraniteSandCastFlask" | "BoneGlue" | "CutHide" | "BoneMeal" | "PileOfDesertSand" | "JoshuaTreeLeaves" | "JoshuaTreeFruit" | "JoshuaTreeSeeds" | "CookedJoshuaTreeFruit" | "JoshuaTreeFlowers" | "SaguaroCactusFruit" | "SaguaroCactusSeeds" | "SaguaroCactusChunk" | "GraniteWell" | "SandstoneWell" | "ClayWell" | "AloeVeraLeaves" | "AloeVeraSeeds" | "DeadScorpion" | "DeadAberrantScorpion" | "CookedScorpion" | "CookedAberrantScorpion" | "ScorpionStinger" | "CopperBakingTray" | "WroughtIronBakingTray" | "IronBakingTray" | "Flour" | "Dough" | "Hardtack" | "HitchingPost" | "ShreddedPaper" | "RawMudskipper" | "RawAberrantMudskipper" | "CookedMudskipper" | "CookedAberrantMudskipper" | "RawRedSnapper" | "CookedRedSnapper" | "RawWalleye" | "CookedWalleye" | "WoodenShield" | "CopperRefinementTools" | "WroughtIronRefinementTools" | "IronRefinementTools" | "ScaleBelt" | "ScaleVest" | "ScaleBoots" | "ScaleCap" | "ScaleBevor" | "ScaleLeggings" | "ScaleGloves" | "CookedJoshuaTreeFlowers" | "SaguaroCactusRibs" | "BladesOfGrass" | "AnimalDroppings" | "AnimalDung" | "Guano" | "Tallow" | "TallowCandle" | "LitTallowCandle" | "WispDust" | "MagicalAspect" | "GoldenSextant" | "RawChoppedFish" | "CookedChoppedFish" | "CookedFishKebab" | "AshCement" | "AshCementBrick" | "AshCementFlooring" | "AshCementWall" | "IceShard" | "PenguinEgg" | "BoiledPenguinEgg" | "RawPenguinMeat" | "CookedPenguinMeat" | "Crowberries" | "CookedCrowberries" | "CrowberrySeeds" | "Winterberries" | "WinterberrySeeds" | "ArcticPoppies" | "ArcticPoppySeeds" | "PirateHat" | "AloeVeraBandage" | "SharkTooth" | "CopperKnife" | "WroughtIronKnife" | "IronKnife" | "TinOre" | "SmeltedTin" | "TinPickaxe" | "TinDoubleAxe" | "TinShovel" | "TinSpear" | "TinHammer" | "TinLockpick" | "TinShield" | "TinGloves" | "TinChausses" | "TinBevor" | "TinHelmet" | "TinFootgear" | "TinCuirass" | "TinShortSword" | "TinTongs" | "TinArrow" | "TinBullet" | "TinArrowhead" | "TinChest" | "TinAnvil" | "TinAxe" | "TinHoe" | "TinMortarAndPestle" | "TinBakingTray" | "TinRefinementTools" | "TinKnife" | "SmeltedBronze" | "BronzePickaxe" | "BronzeDoubleAxe" | "BronzeShovel" | "BronzeSpear" | "BronzeHammer" | "BronzeLockpick" | "BronzeKiteShield" | "BronzeGauntlets" | "BronzeGreaves" | "BronzeBevor" | "BronzeHelmet" | "BronzeBoots" | "BronzeChestArmor" | "BronzeShortSword" | "BronzeTongs" | "BronzeArrow" | "BronzeBullet" | "BronzeArrowhead" | "BronzeChest" | "BronzeAnvil" | "BronzeAxe" | "BronzeHoe" | "BronzeMortarAndPestle" | "BronzeBakingTray" | "BronzeRefinementTools" | "BronzeKnife" | "IceBrick" | "SnowBrick" | "IceWall" | "IceFlooring" | "SnowWall" | "SnowFlooring" | "CaliginousScrap" | "MagicalExtract" | "ShimmeringFibers" | "MagicalTwine" | "SandstoneHammer" | "SandstoneBullet" | "SandstoneAnvil" | "SnowScarecrow" | "FrozenFlesh" | "AnimalTusk" | "WhitePineCone" | "WhitePineSeeds" | "WhitePineNeedles" | "FurCoat" | "FurMittens" | "FurBoots" | "BirdDroppings" | "HardenedCoil" | "MagicalBinding" | "ArmoredScales" | "RawPangolinMeat" | "CookedPangolinMeat" | "ArmoredScaleBelt" | "ArmoredScaleVest" | "ArmoredScaleBoots" | "ArmoredScaleCrown" | "ArmoredScaleBevor" | "ArmoredScaleCuisses" | "ArmoredScaleGloves" | "TinNeedle" | "CopperNeedle" | "WroughtIronNeedle" | "IronNeedle" | "BronzeNeedle" | "TuftsOfTanglehead" | "TangleheadSeeds" | "WispInAGlassBottle" | "AberrantWispInAGlassBottle" | "WispInAClayJug" | "AberrantWispInAClayJug" | "WispInACoconutContainer" | "AberrantWispInACoconutContainer" | "WispInAWaterskin" | "AberrantWispInAWaterskin" | "StrawScarecrow" | "CactusScarecrow" | "ClothShirt" | "ClothTrousers" | "UnripePapaya" | "Papaya" | "PapayaSeeds" | "PalapalaiFrond" | "PalapalaiSpores" | "ButtonMushroomSpores" | "FlyAmanitaSpores" | "BrambleCrown" | "DarkBrambleCrown" | "Cotton" | "WaterskinOfSwampWater" | "GlassBottleOfSwampWater" | "ClayJugOfSwampWater" | "CoconutContainerOfSwampWater" | "WaterskinOfFilteredWater" | "GlassBottleOfFilteredWater" | "ClayJugOfFilteredWater" | "CoconutContainerOfFilteredWater" | "ClayFilter" | "SandstoneAxe" | "SandstoneShovel" | "SharpSandstone" | "SmoothSandstone" | "SandstoneSpear" | "SandstoneKnife" | "SandstonePickaxe" | "SandstoneHoe" | "SandstoneDeadfall" | "SandstoneSundial" | "WoodenPlank" | "WoodenWheel" | "WoodenAxle" | "WoodenMinecart" | "WoodenRail" | "WoodenTrack" | "TinWheel" | "TinAxle" | "TinMinecart" | "TinRail" | "TinTrack" | "CopperWheel" | "CopperAxle" | "CopperMinecart" | "CopperRail" | "CopperTrack" | "WroughtIronWheel" | "WroughtIronAxle" | "WroughtIronMinecart" | "WroughtIronRail" | "WroughtIronTrack" | "IronWheel" | "IronAxle" | "IronMinecart" | "IronRail" | "IronTrack" | "BronzeWheel" | "BronzeAxle" | "BronzeMinecart" | "BronzeRail" | "BronzeTrack" | "BasaltArrow" | "BasaltArrowhead" | "Basalt" | "BasaltMortarAndPestle" | "BasaltAxe" | "BasaltShovel" | "SharpBasalt" | "SmoothBasalt" | "BasaltSpear" | "BasaltFlooring" | "BasaltWall" | "BasaltCampfire" | "BasaltFurnace" | "BasaltHammer" | "BasaltAnvil" | "BasaltDeadfall" | "IronWaterStill" | "BasaltSundial" | "BasaltBullet" | "BasaltKnife" | "BasaltKiln" | "BasaltPickaxe" | "BasaltHoe" | "BasaltSandCastFlask" | "BasaltWell" | "WoodenTrackGate" | "MoldyScroll" | "MysteriousParchment" | "MagicalInscription" | "CattailLeaves" | "CattailShoots" | "CattailFlowers" | "CattailSeeds" | "CobblestoneFlooring" | "WaterLilies" | "Mud" | "SpikerushSheaths" | "SpikerushSeeds" | "WoodenBookcase" | "GraniteLighthouse" | "SandstoneLighthouse" | "ClayLighthouse" | "BasaltLighthouse" | "WoodenCage" | "FullWoodenCage" | "TinCage" | "FullTinCage" | "CopperCage" | "FullCopperCage" | "WroughtIronCage" | "FullWroughtIronCage" | "IronCage" | "FullIronCage" | "BronzeCage" | "FullBronzeCage" | "Amber" | "Tourmaline" | "Topaz" | "Opal" | "Sapphire" | "WoodGolemFigure" | "ClayGolemFigure" | "GraniteGolemFigure" | "SandstoneGolemFigure" | "BasaltGolemFigure" | "AberrantWoodGolemFigure" | "AberrantClayGolemFigure" | "AberrantGraniteGolemFigure" | "AberrantSandstoneGolemFigure" | "AberrantBasaltGolemFigure" | "GraniteDripstone" | "SandstoneDripstone" | "BasaltDripstone" | "ClayDripstone" | "BronzeWaterStill" | "ArmorStand" | "RuneOfEvil" | "RuneOfNeutrality" | "RuneOfGood" | "GraniteAltar" | "WoodenWheelbarrow" | "TinWheelbarrow" | "CopperWheelbarrow" | "WroughtIronWheelbarrow" | "IronWheelbarrow" | "BronzeWheelbarrow" | "GraniteCrucible" | "SandstoneCrucible" | "BasaltCrucible" | "RawClayCrucible" | "ClayCrucible" | "SandstoneAltar" | "BasaltAltar" | "ClayAltar" | "PineResin" | "SpruceResin" | "CypressResin" | "Pitch" | "PitchGlue" | "MagicalOrb" | "RawAberrantCod" | "CookedAberrantCod" | "RawAberrantBlindfish" | "CookedAberrantBlindfish" | "RawAberrantRedSnapper" | "CookedAberrantRedSnapper" | "RawAberrantWalleye" | "CookedAberrantWalleye" | "FishBones" | "AnimalCartilage" | "GelatinPowder" | "Gelatin" | "Aspic" | "FruitCocktail" | "VegetableTerrine" | "TatteredClothBandana" | "ClothBandana" | "RustedScimitar" | "TricorneHat" | "SandstoneArrowhead" | "SandstoneArrow" | "Last">, [ActionArgument.Undefined, ActionArgument.Integer32]], import("../../player/Player").default, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [import("@wayward/game/game/item/IItem").IContainer, ItemType, (number | undefined)?]>;
export declare const Unstack: Action<[ActionArgument.Container, import("../argument/ActionArgumentEnum").default<ItemType, "Bow" | "None" | "HideGlue" | "AnimalSkull" | "GraniteArrow" | "GraniteArrowhead" | "PileOfAsh" | "BarkLeggings" | "BarkShield" | "BarkTunic" | "Bone" | "Branch" | "CactusSpines" | "Charcoal" | "GraniteFlooring" | "CookedMeat" | "Earthworm" | "Feather" | "Fertilizer" | "WaterskinOfSeawater" | "FirePlough" | "BeggartickSeeds" | "Fossil" | "GoldCoins" | "GoldenChalice" | "GoldenRing" | "GoldShortSword" | "GrassSeeds" | "IronOre" | "WoodenDowels" | "Granite" | "LeafBedroll" | "LeatherHide" | "Leaves" | "Limestone" | "Log" | "GraniteMortarAndPestle" | "ButtonMushrooms" | "Nopal" | "Peat" | "Sandstone" | "PileOfGravel" | "PileOfBeachSand" | "WoodenArrow" | "GraniteAxe" | "Bandage" | "WovenFabric" | "CactusNeedle" | "GraniteShovel" | "WoodenSpear" | "Suture" | "Raft" | "RawMeat" | "Raspberries" | "FlyAmanita" | "Rope" | "MapleSeeds" | "Badderlocks" | "SharpGlass" | "SharpGranite" | "Skullcap" | "SmoothGranite" | "Soil" | "GraniteSpear" | "Stones" | "GraniteWall" | "String" | "StrippedBark" | "TannedLeather" | "Tannin" | "MilkThistleSeeds" | "TreeBark" | "HoneyFungus" | "ClematisVine" | "Twigs" | "Waterskin" | "WoodenPole" | "PeatBandage" | "BowDrill" | "FishingNet" | "RawCod" | "CookedCod" | "GraniteCampfire" | "VineWhip" | "PileOfSnow" | "BarkTorch" | "LitBarkTorch" | "HandDrill" | "SmallBag" | "Shale" | "SharpenedBone" | "Grindstone" | "RawFishSteak" | "CookedFishSteak" | "WaterskinOfDesalinatedWater" | "BoatPaddle" | "BullBoat" | "RefinedSand" | "Spyglass" | "Retort" | "RawClay" | "RawClayBlowpipe" | "ClayBlowpipe" | "LeatherBelt" | "LeatherTunic" | "LeatherBoots" | "LeatherCap" | "LeatherGorget" | "LeatherPants" | "LeatherGloves" | "GraniteFurnace" | "SandstoneKiln" | "IronTongs" | "Talc" | "TalcumPowder" | "WoodenSandCastFlask" | "Lens" | "PlantRoots" | "Lockpick" | "BoneNeedle" | "Pineapple" | "TatteredMap" | "Coal" | "SmeltedWroughtIron" | "LimestonePowder" | "SmeltedIron" | "Backpack" | "RottenMeat" | "GraniteHammer" | "RawChicken" | "CookedChicken" | "GraniteAnvil" | "WoodenChest" | "IronShortSword" | "IronBreastplate" | "IronBoots" | "IronHelmet" | "IronGorget" | "IronCuisses" | "IronGauntlets" | "IronHeater" | "SandstoneWall" | "SandstoneFlooring" | "SpiderSilk" | "AnimalFat" | "TallowTorch" | "ClayFlakes" | "GreenSand" | "OldInstructionalScroll" | "SlimeGelatin" | "SlimeGlue" | "CookedSpiderMeat" | "SpiderMeat" | "IronLockpick" | "RottingVegetation" | "Chives" | "IronHammer" | "IronSpear" | "IronShovel" | "IronDoubleAxe" | "IronPickaxe" | "Inkstick" | "Coconut" | "PalmLeaf" | "Offal" | "BoneFragments" | "LitPoleTorch" | "CottonBoll" | "CottonSeeds" | "CottonFabric" | "BonePole" | "Tourniquet" | "WroughtIronPickaxe" | "WroughtIronDoubleAxe" | "WroughtIronShovel" | "WroughtIronSpear" | "WroughtIronHammer" | "WroughtIronLockpick" | "WroughtIronShield" | "WroughtIronGauntlets" | "WroughtIronCuisses" | "WroughtIronGorget" | "WroughtIronHelmet" | "WroughtIronBoots" | "WroughtIronBreastplate" | "WroughtIronShortSword" | "WoodenWall" | "WoodenFlooring" | "WoodenDoor" | "FishingRod" | "MessageInABottle" | "CarbonPowder" | "PileOfCompost" | "FishGlue" | "WoodenShavings" | "GraniteDeadfall" | "Snare" | "WaterskinOfMedicinalWater" | "CharcoalBandage" | "WoodenTongs" | "WroughtIronTongs" | "SheetOfGlass" | "SolarStill" | "TinWaterStill" | "GraniteSundial" | "LitTallowTorch" | "Sinew" | "ShortBow" | "LongBow" | "CompositeBow" | "WaterskinOfPurifiedFreshWater" | "WaterskinOfUnpurifiedFreshWater" | "GlassBottle" | "Cork" | "GlassBottleOfSeawater" | "GlassBottleOfDesalinatedWater" | "GlassBottleOfMedicinalWater" | "GlassBottleOfPurifiedFreshWater" | "GlassBottleOfUnpurifiedFreshWater" | "WroughtIronArrow" | "IronArrow" | "GraniteBullet" | "WroughtIronBullet" | "IronBullet" | "LeatherQuiver" | "Ectoplasm" | "MagicalEssence" | "WoodenFence" | "CreatureIdol" | "CordedSling" | "LeatherSling" | "WroughtIronArrowhead" | "IronArrowhead" | "Hammock" | "CottonBedroll" | "FeatherBedroll" | "RawTaintedMeat" | "CookedTaintedMeat" | "GraniteKnife" | "RawBlindfish" | "CookedBlindfish" | "Pemmican" | "CookedPemmican" | "Sail" | "Sailboat" | "ChickenEgg" | "BoiledChickenEgg" | "SheafOfHay" | "Niter" | "Saltpeter" | "BlackPowder" | "FlintlockPistol" | "Giblets" | "ExplosiveTrap" | "SkeletalMageWand" | "RawClayJug" | "ClayJug" | "ClayJugOfSeawater" | "ClayJugOfDesalinatedWater" | "ClayJugOfMedicinalWater" | "ClayJugOfPurifiedFreshWater" | "ClayJugOfUnpurifiedFreshWater" | "RawClayBrick" | "ClayBrick" | "ClayWall" | "ClayFlooring" | "PineappleSeeds" | "RaspberrySeeds" | "PricklyPearSeeds" | "ClematisSeeds" | "PaperSheet" | "PaperMold" | "Beggarticks" | "MilkThistleFlowers" | "DrawnMap" | "TatteredClothShirt" | "TatteredClothTrousers" | "WoodenGate" | "PoisonIvyLeaves" | "PoisonIvySeeds" | "WroughtIronChest" | "IronChest" | "SwitchgrassSeeds" | "Apple" | "SpiderEggs" | "TailFeathers" | "AppleSeeds" | "VenomGland" | "OrnateWoodenChest" | "RollOfRedCarpet" | "OrnateCape" | "FireBladder" | "GoldenKey" | "WoodenShortSword" | "ClayKiln" | "ClayCampfire" | "ClayFurnace" | "CopperWaterStill" | "SandstoneCampfire" | "SandstoneFurnace" | "WroughtIronWaterStill" | "GraniteKiln" | "WroughtIronAnvil" | "IronAnvil" | "MageRobe" | "CrackedOrb" | "AnimalClaw" | "AnimalPelt" | "AnimalFur" | "Scales" | "SharkFin" | "RawReptileMeat" | "CookedReptileMeat" | "Tentacles" | "CookedTentacles" | "WormMeat" | "CookedWormMeat" | "GranitePickaxe" | "WroughtIronAxe" | "IronAxe" | "FertileSoil" | "GraniteHoe" | "WroughtIronHoe" | "IronHoe" | "LavaBeetleHelmet" | "SpruceCone" | "SpruceSeeds" | "SpruceNeedles" | "CypressCone" | "CypressSeeds" | "CypressLeaves" | "Lettuce" | "LettuceSeeds" | "ChiveSeeds" | "Potato" | "PotatoSeeds" | "Carrot" | "CarrotSeeds" | "CornEar" | "CornSeeds" | "Cucumber" | "CucumberSeeds" | "Tomato" | "TomatoSeeds" | "Pumpkin" | "PumpkinSeeds" | "PricklyPearFruit" | "SugarCaneStalks" | "SugarCaneSeeds" | "BushelOfWheat" | "Wheat" | "CookedPotato" | "CookedCornCob" | "BundleOfSwitchgrass" | "Cloak" | "WoodenMortarAndPestle" | "SandstoneMortarAndPestle" | "WroughtIronMortarAndPestle" | "IronMortarAndPestle" | "RawClayMortarAndPestle" | "ClayMortarAndPestle" | "CopperOre" | "SmeltedCopper" | "CopperPickaxe" | "CopperDoubleAxe" | "CopperShovel" | "CopperSpear" | "CopperHammer" | "CopperLockpick" | "CopperBuckler" | "CopperGauntlets" | "CopperGreaves" | "CopperGorget" | "CopperHelmet" | "CopperBoots" | "CopperCuirass" | "CopperShortSword" | "CopperTongs" | "CopperArrow" | "CopperBullet" | "CopperArrowhead" | "CopperChest" | "CopperAnvil" | "CopperAxe" | "CopperHoe" | "CopperMortarAndPestle" | "WaterskinOfGoatMilk" | "ClayJugOfGoatMilk" | "GlassBottleOfGoatMilk" | "Obsidian" | "OrnateBlueBook" | "Journal" | "MossCoveredBook" | "GildedRedBook" | "ArrowShaft" | "SlitherSucker" | "AberrantSlitherSucker" | "StrawHat" | "BlackplateSabatons" | "BlackplateBreastplate" | "BlackplateGauntlets" | "BlackplateGorget" | "BlackplateGreaves" | "BlackplateHelmet" | "DeathKnightAxe" | "Macuahuitl" | "ObsidianArrow" | "ObsidianArrowhead" | "ObsidianAxe" | "ObsidianKnife" | "ObsidianShovel" | "ObsidianSpear" | "TumbleweedSeeds" | "CoconutHusk" | "PeeledCoconut" | "CoconutMeat" | "CoconutContainerOfCoconutWater" | "CoconutContainer" | "CoconutContainerOfSeawater" | "CoconutContainerOfDesalinatedWater" | "CoconutContainerOfMedicinalWater" | "CoconutContainerOfPurifiedFreshWater" | "CoconutContainerOfUnpurifiedFreshWater" | "CoconutContainerOfGoatMilk" | "OldEducationalScroll" | "StrippedHide" | "ClaySandCastFlask" | "SandstoneSandCastFlask" | "GraniteSandCastFlask" | "BoneGlue" | "CutHide" | "BoneMeal" | "PileOfDesertSand" | "JoshuaTreeLeaves" | "JoshuaTreeFruit" | "JoshuaTreeSeeds" | "CookedJoshuaTreeFruit" | "JoshuaTreeFlowers" | "SaguaroCactusFruit" | "SaguaroCactusSeeds" | "SaguaroCactusChunk" | "GraniteWell" | "SandstoneWell" | "ClayWell" | "AloeVeraLeaves" | "AloeVeraSeeds" | "DeadScorpion" | "DeadAberrantScorpion" | "CookedScorpion" | "CookedAberrantScorpion" | "ScorpionStinger" | "CopperBakingTray" | "WroughtIronBakingTray" | "IronBakingTray" | "Flour" | "Dough" | "Hardtack" | "HitchingPost" | "ShreddedPaper" | "RawMudskipper" | "RawAberrantMudskipper" | "CookedMudskipper" | "CookedAberrantMudskipper" | "RawRedSnapper" | "CookedRedSnapper" | "RawWalleye" | "CookedWalleye" | "WoodenShield" | "CopperRefinementTools" | "WroughtIronRefinementTools" | "IronRefinementTools" | "ScaleBelt" | "ScaleVest" | "ScaleBoots" | "ScaleCap" | "ScaleBevor" | "ScaleLeggings" | "ScaleGloves" | "CookedJoshuaTreeFlowers" | "SaguaroCactusRibs" | "BladesOfGrass" | "AnimalDroppings" | "AnimalDung" | "Guano" | "Tallow" | "TallowCandle" | "LitTallowCandle" | "WispDust" | "MagicalAspect" | "GoldenSextant" | "RawChoppedFish" | "CookedChoppedFish" | "CookedFishKebab" | "AshCement" | "AshCementBrick" | "AshCementFlooring" | "AshCementWall" | "IceShard" | "PenguinEgg" | "BoiledPenguinEgg" | "RawPenguinMeat" | "CookedPenguinMeat" | "Crowberries" | "CookedCrowberries" | "CrowberrySeeds" | "Winterberries" | "WinterberrySeeds" | "ArcticPoppies" | "ArcticPoppySeeds" | "PirateHat" | "AloeVeraBandage" | "SharkTooth" | "CopperKnife" | "WroughtIronKnife" | "IronKnife" | "TinOre" | "SmeltedTin" | "TinPickaxe" | "TinDoubleAxe" | "TinShovel" | "TinSpear" | "TinHammer" | "TinLockpick" | "TinShield" | "TinGloves" | "TinChausses" | "TinBevor" | "TinHelmet" | "TinFootgear" | "TinCuirass" | "TinShortSword" | "TinTongs" | "TinArrow" | "TinBullet" | "TinArrowhead" | "TinChest" | "TinAnvil" | "TinAxe" | "TinHoe" | "TinMortarAndPestle" | "TinBakingTray" | "TinRefinementTools" | "TinKnife" | "SmeltedBronze" | "BronzePickaxe" | "BronzeDoubleAxe" | "BronzeShovel" | "BronzeSpear" | "BronzeHammer" | "BronzeLockpick" | "BronzeKiteShield" | "BronzeGauntlets" | "BronzeGreaves" | "BronzeBevor" | "BronzeHelmet" | "BronzeBoots" | "BronzeChestArmor" | "BronzeShortSword" | "BronzeTongs" | "BronzeArrow" | "BronzeBullet" | "BronzeArrowhead" | "BronzeChest" | "BronzeAnvil" | "BronzeAxe" | "BronzeHoe" | "BronzeMortarAndPestle" | "BronzeBakingTray" | "BronzeRefinementTools" | "BronzeKnife" | "IceBrick" | "SnowBrick" | "IceWall" | "IceFlooring" | "SnowWall" | "SnowFlooring" | "CaliginousScrap" | "MagicalExtract" | "ShimmeringFibers" | "MagicalTwine" | "SandstoneHammer" | "SandstoneBullet" | "SandstoneAnvil" | "SnowScarecrow" | "FrozenFlesh" | "AnimalTusk" | "WhitePineCone" | "WhitePineSeeds" | "WhitePineNeedles" | "FurCoat" | "FurMittens" | "FurBoots" | "BirdDroppings" | "HardenedCoil" | "MagicalBinding" | "ArmoredScales" | "RawPangolinMeat" | "CookedPangolinMeat" | "ArmoredScaleBelt" | "ArmoredScaleVest" | "ArmoredScaleBoots" | "ArmoredScaleCrown" | "ArmoredScaleBevor" | "ArmoredScaleCuisses" | "ArmoredScaleGloves" | "TinNeedle" | "CopperNeedle" | "WroughtIronNeedle" | "IronNeedle" | "BronzeNeedle" | "TuftsOfTanglehead" | "TangleheadSeeds" | "WispInAGlassBottle" | "AberrantWispInAGlassBottle" | "WispInAClayJug" | "AberrantWispInAClayJug" | "WispInACoconutContainer" | "AberrantWispInACoconutContainer" | "WispInAWaterskin" | "AberrantWispInAWaterskin" | "StrawScarecrow" | "CactusScarecrow" | "ClothShirt" | "ClothTrousers" | "UnripePapaya" | "Papaya" | "PapayaSeeds" | "PalapalaiFrond" | "PalapalaiSpores" | "ButtonMushroomSpores" | "FlyAmanitaSpores" | "BrambleCrown" | "DarkBrambleCrown" | "Cotton" | "WaterskinOfSwampWater" | "GlassBottleOfSwampWater" | "ClayJugOfSwampWater" | "CoconutContainerOfSwampWater" | "WaterskinOfFilteredWater" | "GlassBottleOfFilteredWater" | "ClayJugOfFilteredWater" | "CoconutContainerOfFilteredWater" | "ClayFilter" | "SandstoneAxe" | "SandstoneShovel" | "SharpSandstone" | "SmoothSandstone" | "SandstoneSpear" | "SandstoneKnife" | "SandstonePickaxe" | "SandstoneHoe" | "SandstoneDeadfall" | "SandstoneSundial" | "WoodenPlank" | "WoodenWheel" | "WoodenAxle" | "WoodenMinecart" | "WoodenRail" | "WoodenTrack" | "TinWheel" | "TinAxle" | "TinMinecart" | "TinRail" | "TinTrack" | "CopperWheel" | "CopperAxle" | "CopperMinecart" | "CopperRail" | "CopperTrack" | "WroughtIronWheel" | "WroughtIronAxle" | "WroughtIronMinecart" | "WroughtIronRail" | "WroughtIronTrack" | "IronWheel" | "IronAxle" | "IronMinecart" | "IronRail" | "IronTrack" | "BronzeWheel" | "BronzeAxle" | "BronzeMinecart" | "BronzeRail" | "BronzeTrack" | "BasaltArrow" | "BasaltArrowhead" | "Basalt" | "BasaltMortarAndPestle" | "BasaltAxe" | "BasaltShovel" | "SharpBasalt" | "SmoothBasalt" | "BasaltSpear" | "BasaltFlooring" | "BasaltWall" | "BasaltCampfire" | "BasaltFurnace" | "BasaltHammer" | "BasaltAnvil" | "BasaltDeadfall" | "IronWaterStill" | "BasaltSundial" | "BasaltBullet" | "BasaltKnife" | "BasaltKiln" | "BasaltPickaxe" | "BasaltHoe" | "BasaltSandCastFlask" | "BasaltWell" | "WoodenTrackGate" | "MoldyScroll" | "MysteriousParchment" | "MagicalInscription" | "CattailLeaves" | "CattailShoots" | "CattailFlowers" | "CattailSeeds" | "CobblestoneFlooring" | "WaterLilies" | "Mud" | "SpikerushSheaths" | "SpikerushSeeds" | "WoodenBookcase" | "GraniteLighthouse" | "SandstoneLighthouse" | "ClayLighthouse" | "BasaltLighthouse" | "WoodenCage" | "FullWoodenCage" | "TinCage" | "FullTinCage" | "CopperCage" | "FullCopperCage" | "WroughtIronCage" | "FullWroughtIronCage" | "IronCage" | "FullIronCage" | "BronzeCage" | "FullBronzeCage" | "Amber" | "Tourmaline" | "Topaz" | "Opal" | "Sapphire" | "WoodGolemFigure" | "ClayGolemFigure" | "GraniteGolemFigure" | "SandstoneGolemFigure" | "BasaltGolemFigure" | "AberrantWoodGolemFigure" | "AberrantClayGolemFigure" | "AberrantGraniteGolemFigure" | "AberrantSandstoneGolemFigure" | "AberrantBasaltGolemFigure" | "GraniteDripstone" | "SandstoneDripstone" | "BasaltDripstone" | "ClayDripstone" | "BronzeWaterStill" | "ArmorStand" | "RuneOfEvil" | "RuneOfNeutrality" | "RuneOfGood" | "GraniteAltar" | "WoodenWheelbarrow" | "TinWheelbarrow" | "CopperWheelbarrow" | "WroughtIronWheelbarrow" | "IronWheelbarrow" | "BronzeWheelbarrow" | "GraniteCrucible" | "SandstoneCrucible" | "BasaltCrucible" | "RawClayCrucible" | "ClayCrucible" | "SandstoneAltar" | "BasaltAltar" | "ClayAltar" | "PineResin" | "SpruceResin" | "CypressResin" | "Pitch" | "PitchGlue" | "MagicalOrb" | "RawAberrantCod" | "CookedAberrantCod" | "RawAberrantBlindfish" | "CookedAberrantBlindfish" | "RawAberrantRedSnapper" | "CookedAberrantRedSnapper" | "RawAberrantWalleye" | "CookedAberrantWalleye" | "FishBones" | "AnimalCartilage" | "GelatinPowder" | "Gelatin" | "Aspic" | "FruitCocktail" | "VegetableTerrine" | "TatteredClothBandana" | "ClothBandana" | "RustedScimitar" | "TricorneHat" | "SandstoneArrowhead" | "SandstoneArrow" | "Last">, [ActionArgument.Undefined, ActionArgument.Integer32]], import("../../player/Player").default, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [import("@wayward/game/game/item/IItem").IContainer, ItemType, (number | undefined)?]>;
