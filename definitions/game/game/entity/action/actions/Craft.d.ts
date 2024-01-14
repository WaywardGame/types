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
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { ItemType } from "@wayward/game/game/item/IItem";
import type { IRequirementInfo } from "@wayward/game/game/item/IItemManager";
import type Item from "@wayward/game/game/item/Item";
export interface ICraftCanUse extends IActionUsable {
    requirementInfo: IRequirementInfo;
    componentsRequired: Item[];
    componentsConsumed: Item[];
    baseComponent: Item | undefined;
    canBurn: boolean;
}
declare const _default: Action<[import("../argument/ActionArgumentEnum").default<ItemType, "Bow" | "None" | "WoodenDoor" | "WoodenFence" | "WoodenWall" | "ClayWall" | "SandstoneWall" | "GraniteWall" | "SolarStill" | "WoodenChest" | "CreatureIdol" | "ButtonMushrooms" | "FlyAmanita" | "Badderlocks" | "Chives" | "Pineapple" | "Beggarticks" | "Cotton" | "TinWaterStill" | "GraniteCampfire" | "SandstoneKiln" | "GraniteFurnace" | "GraniteAnvil" | "WoodenGate" | "WroughtIronChest" | "IronChest" | "OrnateWoodenChest" | "ClayKiln" | "ClayCampfire" | "ClayFurnace" | "CopperWaterStill" | "SandstoneCampfire" | "SandstoneFurnace" | "WroughtIronWaterStill" | "GraniteKiln" | "WroughtIronAnvil" | "IronAnvil" | "Lettuce" | "Pumpkin" | "SugarCaneStalks" | "Wheat" | "CopperChest" | "CopperAnvil" | "TallowCandle" | "LitTallowCandle" | "CottonBedroll" | "FeatherBedroll" | "Hammock" | "LeafBedroll" | "HitchingPost" | "ClayWell" | "SandstoneWell" | "GraniteWell" | "AshCementWall" | "ArcticPoppies" | "TinChest" | "TinAnvil" | "BronzeChest" | "BronzeAnvil" | "IceWall" | "SnowWall" | "SandstoneAnvil" | "SnowScarecrow" | "StrawScarecrow" | "CactusScarecrow" | "Sailboat" | "Raft" | "BullBoat" | "WoodenMinecart" | "TinMinecart" | "CopperMinecart" | "WroughtIronMinecart" | "IronMinecart" | "BronzeMinecart" | "BasaltWall" | "IronWaterStill" | "BasaltCampfire" | "BasaltFurnace" | "BasaltAnvil" | "BasaltKiln" | "BasaltWell" | "WoodenTrackGate" | "WaterLilies" | "WoodenBookcase" | "GraniteLighthouse" | "SandstoneLighthouse" | "ClayLighthouse" | "BasaltLighthouse" | "GraniteDripstone" | "SandstoneDripstone" | "BasaltDripstone" | "ClayDripstone" | "BronzeWaterStill" | "ArmorStand" | "GraniteAltar" | "WoodenWheelbarrow" | "TinWheelbarrow" | "CopperWheelbarrow" | "WroughtIronWheelbarrow" | "IronWheelbarrow" | "BronzeWheelbarrow" | "SandstoneAltar" | "BasaltAltar" | "ClayAltar" | "Last" | "HideGlue" | "AnimalSkull" | "GraniteArrow" | "GraniteArrowhead" | "PileOfAsh" | "BarkLeggings" | "BarkShield" | "BarkTunic" | "Bone" | "Branch" | "CactusSpines" | "Charcoal" | "GraniteFlooring" | "CookedMeat" | "Earthworm" | "Feather" | "Fertilizer" | "WaterskinOfSeawater" | "FirePlough" | "BeggartickSeeds" | "Fossil" | "GoldCoins" | "GoldenChalice" | "GoldenRing" | "GoldShortSword" | "GrassSeeds" | "IronOre" | "WoodenDowels" | "Granite" | "LeatherHide" | "Leaves" | "Limestone" | "Log" | "GraniteMortarAndPestle" | "Nopal" | "Peat" | "Sandstone" | "PileOfGravel" | "PileOfBeachSand" | "WoodenArrow" | "GraniteAxe" | "Bandage" | "WovenFabric" | "CactusNeedle" | "GraniteShovel" | "WoodenSpear" | "Suture" | "RawMeat" | "Raspberries" | "Rope" | "MapleSeeds" | "SharpGlass" | "SharpGranite" | "Skullcap" | "SmoothGranite" | "Soil" | "GraniteSpear" | "Stones" | "String" | "StrippedBark" | "TannedLeather" | "Tannin" | "MilkThistleSeeds" | "TreeBark" | "HoneyFungus" | "ClematisVine" | "Twigs" | "Waterskin" | "WoodenPole" | "PeatBandage" | "BowDrill" | "FishingNet" | "RawCod" | "CookedCod" | "VineWhip" | "PileOfSnow" | "BarkTorch" | "LitBarkTorch" | "HandDrill" | "SmallBag" | "Shale" | "SharpenedBone" | "Grindstone" | "RawFishSteak" | "CookedFishSteak" | "WaterskinOfDesalinatedWater" | "BoatPaddle" | "RefinedSand" | "Spyglass" | "Retort" | "RawClay" | "RawClayBlowpipe" | "ClayBlowpipe" | "LeatherBelt" | "LeatherTunic" | "LeatherBoots" | "LeatherCap" | "LeatherGorget" | "LeatherPants" | "LeatherGloves" | "IronTongs" | "Talc" | "TalcumPowder" | "WoodenSandCastFlask" | "Lens" | "PlantRoots" | "Lockpick" | "BoneNeedle" | "TatteredMap" | "Coal" | "SmeltedWroughtIron" | "LimestonePowder" | "SmeltedIron" | "Backpack" | "RottenMeat" | "GraniteHammer" | "RawChicken" | "CookedChicken" | "IronShortSword" | "IronBreastplate" | "IronBoots" | "IronHelmet" | "IronGorget" | "IronCuisses" | "IronGauntlets" | "IronHeater" | "SandstoneFlooring" | "SpiderSilk" | "AnimalFat" | "TallowTorch" | "ClayFlakes" | "GreenSand" | "OldInstructionalScroll" | "SlimeGelatin" | "SlimeGlue" | "CookedSpiderMeat" | "SpiderMeat" | "IronLockpick" | "RottingVegetation" | "IronHammer" | "IronSpear" | "IronShovel" | "IronDoubleAxe" | "IronPickaxe" | "Inkstick" | "Coconut" | "PalmLeaf" | "Offal" | "BoneFragments" | "LitPoleTorch" | "CottonBoll" | "CottonSeeds" | "CottonFabric" | "BonePole" | "Tourniquet" | "WroughtIronPickaxe" | "WroughtIronDoubleAxe" | "WroughtIronShovel" | "WroughtIronSpear" | "WroughtIronHammer" | "WroughtIronLockpick" | "WroughtIronShield" | "WroughtIronGauntlets" | "WroughtIronCuisses" | "WroughtIronGorget" | "WroughtIronHelmet" | "WroughtIronBoots" | "WroughtIronBreastplate" | "WroughtIronShortSword" | "WoodenFlooring" | "FishingRod" | "MessageInABottle" | "CarbonPowder" | "PileOfCompost" | "FishGlue" | "WoodenShavings" | "GraniteDeadfall" | "Snare" | "WaterskinOfMedicinalWater" | "CharcoalBandage" | "WoodenTongs" | "WroughtIronTongs" | "SheetOfGlass" | "GraniteSundial" | "LitTallowTorch" | "Sinew" | "ShortBow" | "LongBow" | "CompositeBow" | "WaterskinOfPurifiedFreshWater" | "WaterskinOfUnpurifiedFreshWater" | "GlassBottle" | "Cork" | "GlassBottleOfSeawater" | "GlassBottleOfDesalinatedWater" | "GlassBottleOfMedicinalWater" | "GlassBottleOfPurifiedFreshWater" | "GlassBottleOfUnpurifiedFreshWater" | "WroughtIronArrow" | "IronArrow" | "GraniteBullet" | "WroughtIronBullet" | "IronBullet" | "LeatherQuiver" | "Ectoplasm" | "MagicalEssence" | "CordedSling" | "LeatherSling" | "WroughtIronArrowhead" | "IronArrowhead" | "RawTaintedMeat" | "CookedTaintedMeat" | "GraniteKnife" | "RawBlindfish" | "CookedBlindfish" | "Pemmican" | "CookedPemmican" | "Sail" | "ChickenEgg" | "BoiledChickenEgg" | "SheafOfHay" | "Niter" | "Saltpeter" | "BlackPowder" | "FlintlockPistol" | "Giblets" | "ExplosiveTrap" | "SkeletalMageWand" | "RawClayJug" | "ClayJug" | "ClayJugOfSeawater" | "ClayJugOfDesalinatedWater" | "ClayJugOfMedicinalWater" | "ClayJugOfPurifiedFreshWater" | "ClayJugOfUnpurifiedFreshWater" | "RawClayBrick" | "ClayBrick" | "ClayFlooring" | "PineappleSeeds" | "RaspberrySeeds" | "PricklyPearSeeds" | "ClematisSeeds" | "PaperSheet" | "PaperMold" | "MilkThistleFlowers" | "DrawnMap" | "TatteredClothShirt" | "TatteredClothTrousers" | "PoisonIvyLeaves" | "PoisonIvySeeds" | "SwitchgrassSeeds" | "Apple" | "SpiderEggs" | "TailFeathers" | "AppleSeeds" | "VenomGland" | "RollOfRedCarpet" | "OrnateCape" | "FireBladder" | "GoldenKey" | "WoodenShortSword" | "MageRobe" | "CrackedOrb" | "AnimalClaw" | "AnimalPelt" | "AnimalFur" | "Scales" | "SharkFin" | "RawReptileMeat" | "CookedReptileMeat" | "Tentacles" | "CookedTentacles" | "WormMeat" | "CookedWormMeat" | "GranitePickaxe" | "WroughtIronAxe" | "IronAxe" | "FertileSoil" | "GraniteHoe" | "WroughtIronHoe" | "IronHoe" | "LavaBeetleHelmet" | "SpruceCone" | "SpruceSeeds" | "SpruceNeedles" | "CypressCone" | "CypressSeeds" | "CypressLeaves" | "LettuceSeeds" | "ChiveSeeds" | "Potato" | "PotatoSeeds" | "Carrot" | "CarrotSeeds" | "CornEar" | "CornSeeds" | "Cucumber" | "CucumberSeeds" | "Tomato" | "TomatoSeeds" | "PumpkinSeeds" | "PricklyPearFruit" | "SugarCaneSeeds" | "BushelOfWheat" | "CookedPotato" | "CookedCornCob" | "BundleOfSwitchgrass" | "Cloak" | "WoodenMortarAndPestle" | "SandstoneMortarAndPestle" | "WroughtIronMortarAndPestle" | "IronMortarAndPestle" | "RawClayMortarAndPestle" | "ClayMortarAndPestle" | "CopperOre" | "SmeltedCopper" | "CopperPickaxe" | "CopperDoubleAxe" | "CopperShovel" | "CopperSpear" | "CopperHammer" | "CopperLockpick" | "CopperBuckler" | "CopperGauntlets" | "CopperGreaves" | "CopperGorget" | "CopperHelmet" | "CopperBoots" | "CopperCuirass" | "CopperShortSword" | "CopperTongs" | "CopperArrow" | "CopperBullet" | "CopperArrowhead" | "CopperAxe" | "CopperHoe" | "CopperMortarAndPestle" | "WaterskinOfGoatMilk" | "ClayJugOfGoatMilk" | "GlassBottleOfGoatMilk" | "Obsidian" | "OrnateBlueBook" | "Journal" | "MossCoveredBook" | "GildedRedBook" | "ArrowShaft" | "SlitherSucker" | "AberrantSlitherSucker" | "StrawHat" | "BlackplateSabatons" | "BlackplateBreastplate" | "BlackplateGauntlets" | "BlackplateGorget" | "BlackplateGreaves" | "BlackplateHelmet" | "DeathKnightAxe" | "Macuahuitl" | "ObsidianArrow" | "ObsidianArrowhead" | "ObsidianAxe" | "ObsidianKnife" | "ObsidianShovel" | "ObsidianSpear" | "TumbleweedSeeds" | "CoconutHusk" | "PeeledCoconut" | "CoconutMeat" | "CoconutContainerOfCoconutWater" | "CoconutContainer" | "CoconutContainerOfSeawater" | "CoconutContainerOfDesalinatedWater" | "CoconutContainerOfMedicinalWater" | "CoconutContainerOfPurifiedFreshWater" | "CoconutContainerOfUnpurifiedFreshWater" | "CoconutContainerOfGoatMilk" | "OldEducationalScroll" | "StrippedHide" | "ClaySandCastFlask" | "SandstoneSandCastFlask" | "GraniteSandCastFlask" | "BoneGlue" | "CutHide" | "BoneMeal" | "PileOfDesertSand" | "JoshuaTreeLeaves" | "JoshuaTreeFruit" | "JoshuaTreeSeeds" | "CookedJoshuaTreeFruit" | "JoshuaTreeFlowers" | "SaguaroCactusFruit" | "SaguaroCactusSeeds" | "SaguaroCactusChunk" | "AloeVeraLeaves" | "AloeVeraSeeds" | "DeadScorpion" | "DeadAberrantScorpion" | "CookedScorpion" | "CookedAberrantScorpion" | "ScorpionStinger" | "CopperBakingTray" | "WroughtIronBakingTray" | "IronBakingTray" | "Flour" | "Dough" | "Hardtack" | "ShreddedPaper" | "RawMudskipper" | "RawAberrantMudskipper" | "CookedMudskipper" | "CookedAberrantMudskipper" | "RawRedSnapper" | "CookedRedSnapper" | "RawWalleye" | "CookedWalleye" | "WoodenShield" | "CopperRefinementTools" | "WroughtIronRefinementTools" | "IronRefinementTools" | "ScaleBelt" | "ScaleVest" | "ScaleBoots" | "ScaleCap" | "ScaleBevor" | "ScaleLeggings" | "ScaleGloves" | "CookedJoshuaTreeFlowers" | "SaguaroCactusRibs" | "BladesOfGrass" | "AnimalDroppings" | "AnimalDung" | "Guano" | "Tallow" | "WispDust" | "MagicalAspect" | "GoldenSextant" | "RawChoppedFish" | "CookedChoppedFish" | "CookedFishKebab" | "AshCement" | "AshCementBrick" | "AshCementFlooring" | "IceShard" | "PenguinEgg" | "BoiledPenguinEgg" | "RawPenguinMeat" | "CookedPenguinMeat" | "Crowberries" | "CookedCrowberries" | "CrowberrySeeds" | "Winterberries" | "WinterberrySeeds" | "ArcticPoppySeeds" | "PirateHat" | "AloeVeraBandage" | "SharkTooth" | "CopperKnife" | "WroughtIronKnife" | "IronKnife" | "TinOre" | "SmeltedTin" | "TinPickaxe" | "TinDoubleAxe" | "TinShovel" | "TinSpear" | "TinHammer" | "TinLockpick" | "TinShield" | "TinGloves" | "TinChausses" | "TinBevor" | "TinHelmet" | "TinFootgear" | "TinCuirass" | "TinShortSword" | "TinTongs" | "TinArrow" | "TinBullet" | "TinArrowhead" | "TinAxe" | "TinHoe" | "TinMortarAndPestle" | "TinBakingTray" | "TinRefinementTools" | "TinKnife" | "SmeltedBronze" | "BronzePickaxe" | "BronzeDoubleAxe" | "BronzeShovel" | "BronzeSpear" | "BronzeHammer" | "BronzeLockpick" | "BronzeKiteShield" | "BronzeGauntlets" | "BronzeGreaves" | "BronzeBevor" | "BronzeHelmet" | "BronzeBoots" | "BronzeChestArmor" | "BronzeShortSword" | "BronzeTongs" | "BronzeArrow" | "BronzeBullet" | "BronzeArrowhead" | "BronzeAxe" | "BronzeHoe" | "BronzeMortarAndPestle" | "BronzeBakingTray" | "BronzeRefinementTools" | "BronzeKnife" | "IceBrick" | "SnowBrick" | "IceFlooring" | "SnowFlooring" | "CaliginousScrap" | "MagicalExtract" | "ShimmeringFibers" | "MagicalTwine" | "SandstoneHammer" | "SandstoneBullet" | "FrozenFlesh" | "AnimalTusk" | "WhitePineCone" | "WhitePineSeeds" | "WhitePineNeedles" | "FurCoat" | "FurMittens" | "FurBoots" | "BirdDroppings" | "HardenedCoil" | "MagicalBinding" | "ArmoredScales" | "RawPangolinMeat" | "CookedPangolinMeat" | "ArmoredScaleBelt" | "ArmoredScaleVest" | "ArmoredScaleBoots" | "ArmoredScaleCrown" | "ArmoredScaleBevor" | "ArmoredScaleCuisses" | "ArmoredScaleGloves" | "TinNeedle" | "CopperNeedle" | "WroughtIronNeedle" | "IronNeedle" | "BronzeNeedle" | "TuftsOfTanglehead" | "TangleheadSeeds" | "WispInAGlassBottle" | "AberrantWispInAGlassBottle" | "WispInAClayJug" | "AberrantWispInAClayJug" | "WispInACoconutContainer" | "AberrantWispInACoconutContainer" | "WispInAWaterskin" | "AberrantWispInAWaterskin" | "ClothShirt" | "ClothTrousers" | "UnripePapaya" | "Papaya" | "PapayaSeeds" | "PalapalaiFrond" | "PalapalaiSpores" | "ButtonMushroomSpores" | "FlyAmanitaSpores" | "BrambleCrown" | "DarkBrambleCrown" | "WaterskinOfSwampWater" | "GlassBottleOfSwampWater" | "ClayJugOfSwampWater" | "CoconutContainerOfSwampWater" | "WaterskinOfFilteredWater" | "GlassBottleOfFilteredWater" | "ClayJugOfFilteredWater" | "CoconutContainerOfFilteredWater" | "ClayFilter" | "SandstoneAxe" | "SandstoneShovel" | "SharpSandstone" | "SmoothSandstone" | "SandstoneSpear" | "SandstoneKnife" | "SandstonePickaxe" | "SandstoneHoe" | "SandstoneDeadfall" | "SandstoneSundial" | "WoodenPlank" | "WoodenWheel" | "WoodenAxle" | "WoodenRail" | "WoodenTrack" | "TinWheel" | "TinAxle" | "TinRail" | "TinTrack" | "CopperWheel" | "CopperAxle" | "CopperRail" | "CopperTrack" | "WroughtIronWheel" | "WroughtIronAxle" | "WroughtIronRail" | "WroughtIronTrack" | "IronWheel" | "IronAxle" | "IronRail" | "IronTrack" | "BronzeWheel" | "BronzeAxle" | "BronzeRail" | "BronzeTrack" | "BasaltArrow" | "BasaltArrowhead" | "Basalt" | "BasaltMortarAndPestle" | "BasaltAxe" | "BasaltShovel" | "SharpBasalt" | "SmoothBasalt" | "BasaltSpear" | "BasaltFlooring" | "BasaltHammer" | "BasaltDeadfall" | "BasaltSundial" | "BasaltBullet" | "BasaltKnife" | "BasaltPickaxe" | "BasaltHoe" | "BasaltSandCastFlask" | "MoldyScroll" | "MysteriousParchment" | "MagicalInscription" | "CattailLeaves" | "CattailShoots" | "CattailFlowers" | "CattailSeeds" | "CobblestoneFlooring" | "Mud" | "SpikerushSheaths" | "SpikerushSeeds" | "WoodenCage" | "FullWoodenCage" | "TinCage" | "FullTinCage" | "CopperCage" | "FullCopperCage" | "WroughtIronCage" | "FullWroughtIronCage" | "IronCage" | "FullIronCage" | "BronzeCage" | "FullBronzeCage" | "Amber" | "Tourmaline" | "Topaz" | "Opal" | "Sapphire" | "WoodGolemFigure" | "ClayGolemFigure" | "GraniteGolemFigure" | "SandstoneGolemFigure" | "BasaltGolemFigure" | "AberrantWoodGolemFigure" | "AberrantClayGolemFigure" | "AberrantGraniteGolemFigure" | "AberrantSandstoneGolemFigure" | "AberrantBasaltGolemFigure" | "RuneOfEvil" | "RuneOfNeutrality" | "RuneOfGood" | "GraniteCrucible" | "SandstoneCrucible" | "BasaltCrucible" | "RawClayCrucible" | "ClayCrucible" | "PineResin" | "SpruceResin" | "CypressResin" | "Pitch" | "PitchGlue" | "MagicalOrb" | "RawAberrantCod" | "CookedAberrantCod" | "RawAberrantBlindfish" | "CookedAberrantBlindfish" | "RawAberrantRedSnapper" | "CookedAberrantRedSnapper" | "RawAberrantWalleye" | "CookedAberrantWalleye" | "FishBones" | "AnimalCartilage" | "GelatinPowder" | "Gelatin" | "Aspic" | "FruitCocktail" | "VegetableTerrine">, [ActionArgument.Undefined, ActionArgument.ItemArrayNearby], [ActionArgument.Undefined, ActionArgument.ItemArrayNearby], [ActionArgument.Undefined, ActionArgument.ItemNearby], [ActionArgument.Undefined, ActionArgument.Boolean]], import("../../Human").default<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, ICraftCanUse, [ItemType, (Item[] | undefined)?, (Item[] | undefined)?, (Item | undefined)?, (boolean | undefined)?]>;
export default _default;
