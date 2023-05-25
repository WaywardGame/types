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
import type { BiomeType } from "game/biome/IBiome";
import type Doodad from "game/doodad/Doodad";
import type { ActionType } from "game/entity/action/IAction";
import type Human from "game/entity/Human";
import type { ICausesDamage, ICausesStatusEffect } from "game/entity/IEntity";
import type { SkillType } from "game/entity/IHuman";
import type { IDecayTemperatureRange } from "game/IGame";
import type { ILootItem } from "game/ILoot";
import type { IObjectDescription, IObjectOptions } from "game/IObject";
import type Island from "game/island/Island";
import type { IContainer, IItemOld, ItemType, ItemTypeExtra, ItemTypeGroup } from "game/item/IItem";
import type Item from "game/item/Item";
import type { LootGroupType } from "game/item/LootGroups";
import type MagicalPropertyManager from "game/magic/MagicalPropertyManager";
import type { IInsulationDescription, ITemperatureDescription } from "game/temperature/ITemperature";
import type { TerrainType } from "game/tile/ITerrain";
import type { TileEventType } from "game/tile/ITileEvent";
import type Tile from "game/tile/Tile";
import type Translation from "language/Translation";
import type { IModdable } from "mod/ModRegistry";
import type { ISpriteAnimation } from "renderer/ISpriteInfo";
import type { TileLayerType } from "renderer/world/IWorldRenderer";
import type { IRGB } from "utilities/Color";
export interface IDoodadOptions extends IObjectOptions {
    force?: boolean;
    gatherReady?: number;
    stillContainer?: Item;
    growth?: GrowingStage;
    spread?: number;
    weight?: number;
    disassembly?: Item[];
    crafterIdentifier?: string;
    builderIdentifier?: string;
    step?: number;
    hitchedCreature?: number;
    aberrant?: boolean;
    meltDecay?: number;
    inheritMagic?: MagicalPropertyManager;
    bonusAttack?: number;
}
type MagicalPropertyOld = Exclude<IItemOld["magicalProperties"], undefined> extends Array<infer T> ? T : never;
export type IDoodadOld = Partial<Doodad> & {
    growInto?: DoodadType;
    gfx?: number;
    legendary?: MagicalPropertyOld;
    magicalProperties?: MagicalPropertyOld[];
    ownerIdentifier?: string;
};
export interface IDoodadGroupDescription {
    /**
     * Whether this group is hidden to the player. Defaults to `false`
     */
    hidden?: boolean;
}
export interface IDoodadDescription extends IObjectDescription, IModdable, ICausesStatusEffect, ICausesDamage, ITemperatureDescription {
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
    doorToggled?: DoodadType;
    /**
     * Mostly used for canGrow doodads
     */
    durability?: number;
    gather?: IDoodadLoot;
    gatherCanHurtHands?: boolean;
    gatherSkillUse?: SkillType;
    graphicVariation?: boolean;
    group?: DoodadTypeGroup[];
    growthParticles?: IDoodadParticles;
    harvest?: IDoodadLoot;
    isAnimated?: boolean | ISpriteAnimation;
    isClosed?: boolean;
    isDoor?: boolean;
    isFence?: boolean;
    isFlammable?: boolean;
    containedItemsContributeToCivilizationScore?: boolean;
    usesSpores?: boolean;
    isGate?: boolean;
    adaptsToFence?: boolean;
    isTall?: boolean;
    isTrap?: boolean;
    isTree?: boolean;
    isWall?: boolean;
    isWaterSource?: boolean;
    isVehicle?: boolean;
    attackable?: true;
    subTypes?: DoodadTypeExtra[];
    /**
     * When gathered completely, convert to a new DoodadType
     */
    leftOver?: DoodadType;
    lightColor?: IRGB;
    lit?: DoodadType;
    lockedChest?: ILockedChest;
    particles?: IRGB;
    /**
     * Works with "PickUpDoodad" action, typically used for doodads that you can "build" like walls, furnaces, etc.
     */
    pickUp?: ItemType[];
    /**
     * Works with "Gather"-based actions.
     */
    gatherPickUp?: ILootItem[];
    providesFire?: boolean;
    providesLight?: number;
    reduceDurabilityOnGather?: boolean;
    repairItem?: ItemType;
    revert?: DoodadType;
    spawnOnTerrain?: OptionalDescriptions<BiomeType, TerrainType[]>;
    spreadMax?: number;
    tier?: OptionalDescriptions<DoodadTypeGroup, number>;
    tileLayerType?: TileLayerType;
    tileOverLayerType?: TileLayerType;
    trapDamage?: number;
    waterStill?: boolean;
    itemStackOffset?: number;
    itemStackRegion?: IItemStackRegion | ((doodad: Doodad) => IItemStackRegion | undefined);
    decayTemperatureRange?: IDecayTemperatureRange;
    isIslandPort?: boolean;
    /**
     * Item that defines the decay amount when this doodad is melting.
     */
    meltFromItem?: ItemType;
    /**
     * Array of tile events that are spawned when doodad (or things connected to the doodad) melts.
     */
    meltsInto?: TileEventType[];
    insulation?: IInsulationDescription;
    /**
     * The amount of civilization score to give when building this.
     */
    civilizationScore?: number;
    /**
     * After the plant is fully grown, it morphs into this terrain type.
     */
    growsIntoTerrain?: TerrainType;
    /**
     * Allows overiding the adapter
     */
    useRendererAdapter?: "Door";
    /**
     * Use SpriteBatch to render the doodad instead of tile based rendering
     */
    renderAsSprite?: boolean | Partial<{
        /**
         * y offset when rendering the sprite
         */
        renderOffsetY: number;
        /**
         * Number of rows in the sprite
         */
        rows: number;
        /**
         * Number of columns in the sprite
         */
        columns: number;
    }>;
    /**
     * Called when the doodad is built via templates
     * @param doodad Doodad
     * @returns Name to set the doodad to or undefined to not name it.
     */
    getRandomNameOnTemplateSpawn?: (doodad: Doodad) => Translation | undefined;
    /**
     * The doodad type to display instead of the describe doodad type.
     */
    displayDoodad?: SupplierOr<DisplayableDoodadType | undefined, [Doodad]>;
    /**
     * Sets (and overwrites) the associated item that shows in the tooltip.
     */
    getAssociatedItem?(doodad: Doodad): ItemType | ItemTypeExtra | undefined;
    getVariation?(island: Island, tile: Tile, doodad: Doodad | undefined, existingVariationX: number, existingVariationY: number): [number, number] | undefined;
    onContainerItemAdd?(container: Doodad & IContainer, items: Item[]): void;
    onContainerItemRemove?(container: Doodad & IContainer, items: Item[]): void;
    /**
     * Item groups of this type in the container will provide skill bonuses to adjacent players.
     */
    containedItemGroupProvidesSkill?: IProvidesSkill;
    alwaysInspectable?: true;
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
export interface IProvidesSkill {
    /**
     * Skill type that is provided to the player.
     */
    skillType: SkillType;
    /**
     * Item group that triggers the skill bonus.
     */
    itemGroup: ItemTypeGroup;
    /**
     * How much each of that item provides.
     */
    skillValue: number;
}
export type IDoodadParticles = Record<number, IRGB>;
export type IDoodadLoot = Record<number, ILootItem[] | undefined>;
export declare enum DoodadType {
    WoodenDoor = 0,
    WoodenFence = 1,
    WoodenWall = 2,
    ClayWall = 3,
    SandstoneWall = 4,
    GraniteWall = 5,
    SetExplosiveTrap = 6,
    SetGraniteDeadfall = 7,
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
    GraniteWaterStill = 29,
    LitGraniteWaterStill = 30,
    GraniteCampfire = 31,
    LitGraniteCampfire = 32,
    SandstoneKiln = 33,
    LitSandstoneKiln = 34,
    GraniteFurnace = 35,
    LitGraniteFurnace = 36,
    PoleTorchStand = 37,
    LitPoleTorchStand = 38,
    GraniteAnvil = 39,
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
    GraniteKiln = 63,
    LitGraniteKiln = 64,
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
    GraniteWell = 99,
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
    SnowWall = 116,
    SandstoneAnvil = 117,
    SnowScarecrow = 118,
    WhitePineTree = 119,
    WhitePineTreeWithSnow = 120,
    Tanglehead = 121,
    StrawScarecrow = 122,
    CactusScarecrow = 123,
    PapayaTree = 124,
    Palapalai = 125,
    Sailboat = 126,
    Raft = 127,
    BullBoat = 128,
    SetSandstoneDeadfall = 129,
    WoodenMinecart = 130,
    TinMinecart = 131,
    CopperMinecart = 132,
    WroughtIronMinecart = 133,
    IronMinecart = 134,
    BronzeMinecart = 135,
    BasaltWall = 136,
    SetBasaltDeadfall = 137,
    BasaltWaterStill = 138,
    LitBasaltWaterStill = 139,
    BasaltCampfire = 140,
    LitBasaltCampfire = 141,
    BasaltFurnace = 142,
    LitBasaltFurnace = 143,
    BasaltAnvil = 144,
    BasaltKiln = 145,
    LitBasaltKiln = 146,
    BasaltWell = 147,
    WoodenTrackGate = 148,
    WoodenTrackGateOpen = 149,
    Cattails = 150,
    WaterLilies = 151,
    Spikerush = 152,
    WoodenBookcase = 153,
    GraniteLighthouse = 154,
    LitGraniteLighthouse = 155,
    SandstoneLighthouse = 156,
    LitSandstoneLighthouse = 157,
    ClayLighthouse = 158,
    LitClayLighthouse = 159,
    BasaltLighthouse = 160,
    LitBasaltLighthouse = 161
}
export declare enum DoodadTypeExtra {
    None = 999,
    WoodenBookcase_25 = 1000,
    WoodenBookcase_50 = 1001,
    WoodenBookcase_75 = 1002,
    WoodenBookcase_100 = 1003
}
export type DisplayableDoodadType = DoodadType | DoodadTypeExtra;
export declare enum DoodadTag {
    None = 0,
    ProppedOpen = 1
}
/**
 * All tree types that can be spawned during map gen
 * !! This must be kept in sync with the tree list in setupTiles !!
 */
export type MapGenDoodadTrees = DoodadType.MapleTree | DoodadType.CoconutTree | DoodadType.JoshuaTree | DoodadType.SpruceTree | DoodadType.CypressTree | DoodadType.AppleTree | DoodadType.SpruceTreeWithSnow | DoodadType.WhitePineTree | DoodadType.WhitePineTreeWithSnow | DoodadType.PapayaTree | DoodadType.Palapalai | DoodadType.ButtonMushrooms | DoodadType.PoisonIvy | DoodadType.Cattails | DoodadType.FlyAmanita;
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
    Scarecrow = 415,
    Lighthouse = 416,
    LitLighthouse = 417,
    Last = 418
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
export interface IHasBuilder {
    getBuilder(): Human | undefined;
}
export {};
