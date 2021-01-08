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
import Doodad from "doodad/Doodad";
import { ActionType } from "entity/action/IAction";
import { ICausesDamage, ICausesStatusEffect } from "entity/IEntity";
import { SkillType } from "entity/IHuman";
import { ILootItem } from "game/ILoot";
import { IObjectDescription, IObjectOptions } from "game/IObject";
import { IItemMagicalProperty, ItemType } from "item/IItem";
import Item from "item/Item";
import { LootGroupType } from "item/LootGroups";
import { IModdable } from "mod/ModRegistry";
import { TileLayerType } from "renderer/IWorldRenderer";
import { TerrainType } from "tile/ITerrain";
import { IRGB } from "utilities/Color";
export interface IDoodadOptions extends IObjectOptions {
    gatherReady?: number;
    stillContainer?: Item;
    gfx?: number;
    spread?: number;
    weight?: number;
    magicalProperties?: IItemMagicalProperty[];
    disassembly?: Item[];
    ownerIdentifier?: string;
    step?: number;
    hitchedCreature?: number;
    aberrant?: boolean;
}
export declare type IDoodadOld = Partial<Doodad> & {
    growInto?: DoodadType;
    legendary?: IItemMagicalProperty;
};
export interface IDoodadGroupDescription {
    /**
     * Whether this group is hidden to the player. Defaults to `false`
     */
    hidden?: boolean;
}
export interface IDoodadDescription extends IObjectDescription, IModdable, ICausesStatusEffect, ICausesDamage {
    actionTypes?: ActionType[];
    allowedTiles?: TerrainType[];
    blockJump?: boolean;
    blockLos?: boolean;
    blockMove?: boolean;
    burnsLike?: ItemType[];
    canBreak?: boolean;
    canGrow?: boolean;
    canGrowInCaves?: boolean;
    canTrampleWhenMature?: boolean;
    disableDrop?: boolean;
    gather?: IDoodadLoot;
    gatherCanHurtHands?: boolean;
    gatherSkillUse?: SkillType;
    graphicVariation?: boolean;
    group?: DoodadTypeGroup[];
    growthParticles?: IDoodadParticles;
    harvest?: IDoodadLoot;
    isAnimated?: boolean;
    isClosedDoor?: boolean;
    isDoor?: boolean;
    isFence?: boolean;
    isFlammable?: boolean;
    isFungi?: boolean;
    isGate?: boolean;
    isTall?: boolean;
    isTrap?: boolean;
    isTree?: boolean;
    isWall?: boolean;
    isWaterSource?: boolean;
    lightColor?: IRGB;
    lit?: DoodadType;
    particles?: IRGB;
    pickUp?: ItemType[];
    providesFire?: boolean;
    providesLight?: number;
    reduceDurabilityOnGather?: boolean;
    repairItem?: ItemType;
    revert?: DoodadType;
    spawnOnTerrain?: TerrainType[];
    spreadMax?: number;
    tier?: OptionalDescriptions<DoodadTypeGroup, number>;
    trapDamage?: number;
    waterStill?: boolean;
    durability?: number;
    leftOver?: DoodadType;
    lockedChest?: ILockedChest;
    tileLayerType?: TileLayerType;
    tileOverLayerType?: TileLayerType;
    itemStackOffset?: number;
    itemStackRegion?: IItemStackRegion | ((doodad: Doodad) => IItemStackRegion | undefined);
    getVariationX?(doodad: Doodad, existingVariationX: number): number | undefined;
    getVariationY?(doodad: Doodad, existingVariationY: number): number | undefined;
}
export interface IItemStackRegion {
    xMin?: number;
    xMax?: number;
    yMin?: number;
    yMax?: number;
}
export interface ILockedChest {
    /**
     * Loot groups that gets generated inside a chest.
     */
    lootGroups?: LootGroupType[];
    /**
     * Modifies the quality of the items in the chest based on itemManager.getRandomQuality(). The higher the better.
     */
    lootQuality?: number;
    /**
     * Doodad type that it gets reverted to when unlocked.
     */
    unlockedDoodadType?: DoodadType;
    /**
     * Modifies the difficulty when attempting to lockpick the locked doodad based on skill checks.
     */
    lockPickingDifficulty?: number;
    /**
     * Number of potential guardian group creatures spawned when unlocking the chest.
     */
    guardiansSpawned?: number;
}
export declare type IDoodadParticles = Record<number, IRGB>;
export declare type IDoodadLoot = Record<number, ILootItem[] | undefined>;
export declare enum DoodadType {
    WoodenDoor = 0,
    WoodenFence = 1,
    WoodenWall = 2,
    ClayWall = 3,
    SandstoneWall = 4,
    StoneWall = 5,
    SetExplosiveTrap = 6,
    SetDeadfall = 7,
    SetSnare = 8,
    SetHobgoblinSnare = 9,
    SolarStill = 10,
    WoodenChest = 11,
    LockedWoodenChest = 12,
    CreatureIdol = 13,
    Grass = 14,
    Clematis = 15,
    MilkThistles = 16,
    ButtonMushrooms = 17,
    FlyAmanita = 18,
    Switchgrass = 19,
    Badderlocks = 20,
    Chives = 21,
    Pineapple = 22,
    PileOfRocks = 23,
    RaspberryBush = 24,
    Beggarticks = 25,
    Cotton = 26,
    PricklyPears = 27,
    Tumbleweed = 28,
    StoneWaterStill = 29,
    LitStoneWaterStill = 30,
    StoneCampfire = 31,
    LitStoneCampfire = 32,
    SandstoneKiln = 33,
    LitSandstoneKiln = 34,
    StoneFurnace = 35,
    LitStoneFurnace = 36,
    PoleTorchStand = 37,
    LitPoleTorchStand = 38,
    StoneAnvil = 39,
    CaveEntrance = 40,
    WoodenDoorOpen = 41,
    WoodenGate = 42,
    WoodenGateOpen = 43,
    PoisonIvy = 44,
    WroughtIronChest = 45,
    IronChest = 46,
    OrnateWoodenChest = 47,
    SkeletalRemains = 48,
    ClayKiln = 49,
    LitClayKiln = 50,
    ClayCampfire = 51,
    LitClayCampfire = 52,
    ClayFurnace = 53,
    LitClayFurnace = 54,
    ClayWaterStill = 55,
    LitClayWaterStill = 56,
    SandstoneCampfire = 57,
    LitSandstoneCampfire = 58,
    SandstoneFurnace = 59,
    LitSandstoneFurnace = 60,
    SandstoneWaterStill = 61,
    LitSandstoneWaterStill = 62,
    StoneKiln = 63,
    LitStoneKiln = 64,
    WroughtIronAnvil = 65,
    IronAnvil = 66,
    MapleTree = 67,
    AppleTree = 68,
    SpruceTree = 69,
    CypressTree = 70,
    CoconutTree = 71,
    Lettuce = 72,
    PotatoPlant = 73,
    Carrots = 74,
    CornStalks = 75,
    CucumberPlant = 76,
    TomatoPlant = 77,
    Pumpkin = 78,
    SugarCaneStalks = 79,
    Wheat = 80,
    CopperChest = 81,
    CopperAnvil = 82,
    BarkTorchStand = 83,
    LitBarkTorchStand = 84,
    TallowTorchStand = 85,
    LitTallowTorchStand = 86,
    JoshuaTree = 87,
    SaguaroCactus = 88,
    AloeVera = 89,
    TallowCandle = 90,
    LitTallowCandle = 91,
    CottonBedroll = 92,
    FeatherBedroll = 93,
    Hammock = 94,
    LeafBedroll = 95,
    HitchingPost = 96,
    ClayWell = 97,
    SandstoneWell = 98,
    StoneWell = 99,
    AshCementWall = 100,
    SpruceTreeWithSnow = 101,
    CrowberryShrub = 102,
    WinterberryShrub = 103,
    ArcticPoppies = 104,
    LockedCopperChest = 105,
    LockedWroughtIronChest = 106,
    LockedIronChest = 107,
    LockedOrnateWoodenChest = 108,
    TinChest = 109,
    TinAnvil = 110,
    LockedTinChest = 111,
    BronzeChest = 112,
    BronzeAnvil = 113,
    LockedBronzeChest = 114,
    IceWall = 115,
    SnowWall = 116
}
export declare enum DoodadTypeGroup {
    Invalid = 400,
    LitCampfire = 401,
    LitFurnace = 402,
    LitKiln = 403,
    LitWaterStill = 404,
    Anvil = 405,
    Well = 406,
    Hitch = 407,
    GatheredPlant = 408,
    FireSource = 409,
    LitTorch = 410,
    LightDevice = 411,
    LightSource = 412,
    LitStructure = 413,
    LockedChest = 414,
    Last = 415
}
export declare enum DoorOrientation {
    Default = 0,
    Vertical = 1
}
export declare enum GrowingStage {
    Germinating = 0,
    Seedling = 1,
    Vegetative = 2,
    Budding = 3,
    Flowering = 4,
    Ripening = 5,
    Bare = 6
}
