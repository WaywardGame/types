/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
import type { ICausesDamage, ICausesStatus } from "@wayward/game/game/entity/IEntity";
import type { SkillType } from "../entity/skill/ISkills";
import type { IDecayTemperatureRange } from "@wayward/game/game/IGame";
import type { ILootItem } from "@wayward/game/game/ILoot";
import type { IObjectDescription, IObjectOptions } from "@wayward/game/game/IObject";
import type { WaterType } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { IContainer, IItemOld, ItemType, ItemTypeExtra, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { LootGroupType } from "@wayward/game/game/item/LootGroups";
import type MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import type { IInsulationDescription, ITemperatureDescription } from "@wayward/game/game/temperature/ITemperature";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type Tile from "@wayward/game/game/tile/Tile";
import type Translation from "@wayward/game/language/Translation";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { ISpriteAnimation } from "@wayward/game/renderer/ISpriteInfo";
import type { TileLayerType } from "@wayward/game/renderer/world/IWorldRenderer";
import type { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import type { IRGB } from "@wayward/utilities/Color";
export interface IDoodadOptions extends IObjectOptions {
    force?: boolean;
    gatherReady?: number;
    hasWater?: IHasWater;
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
export interface IDoodadDescription extends IObjectDescription, IModdable, ICausesStatus, ICausesDamage, ITemperatureDescription {
    actionTypes?: ActionType[];
    allowedTiles?: TerrainType[];
    blockJump?: boolean;
    /**
     * Blocks line of sight when set to true with some exceptions:
     * Plants only block line of sight when they are not seedlings, vegetative, or bare.
     * isWall automatically sets this to true.
     * If set to false specifically, it will overwrite the above conditions and never block line of sight.
     * blockLos is cached/saved, so the doodad must be rebuilt to update this status.
     */
    blockLos?: boolean;
    blockMove?: boolean;
    moveIntoAction?: ActionType;
    openContainerAction?: ActionType;
    tabAction?: ActionType;
    containerDialog?: DialogId;
    burnsLike?: ItemType[];
    canBreak?: boolean;
    /**
     * This doodad will be able to grow up until and including this stage.
     * For example, conifers can grow up until seeding, but not bare. Most trees can grow until bare. Other plants, usually ripening. This is used to reset growth back to budding after reaching max growth (unless growsIntoTerrain is set).
     */
    canGrow?: GrowingStage;
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
     * The "Chop" action works to pick up these doodads as well as "gather with hands".
     */
    chopPickUp?: ILootItem[];
    /**
     * The "Mine" action works to pick up these doodads as well as "gather with hands".
     */
    minePickUp?: ILootItem[];
    providesFire?: boolean;
    providesLight?: number;
    reduceDurabilityOnGather?: boolean;
    /**
     * This doodad as the item it starts from.
     * Used in many places including repairing and getting item bonuses.
     */
    asItem?: ItemType;
    revert?: DoodadType;
    spawnOnTerrain?: OptionalDescriptions<BiomeType, TerrainType[]>;
    spreadMax?: number;
    tier?: OptionalDescriptions<DoodadTypeGroup, number>;
    tileLayerType?: TileLayerType;
    tileOverLayerType?: TileLayerType;
    trapDamage?: number;
    waterStill?: boolean;
    /**
     * Whether magical properties have no effect on this doodad.
     */
    magicInert?: true;
    /**
     * The region where items are stacked.
     * The default region is { xMin: 0, xMax: 0, yMin: 1, yMax: 1 }
     * Max should always be greater than min and values should be within [0, 1]
     */
    itemStackRegion?: IItemStackRegion | ((doodad: Doodad) => IItemStackRegion | undefined);
    /**
     * The Y offset for the entire item stack.
     */
    itemStackOffsetY?: number | ((doodad: Doodad) => number | undefined);
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
         * x offset when rendering the sprite
         */
        renderOffsetX: number | {
            base: number;
            discretionary: (doodad: Doodad) => number;
        };
        /**
         * y offset when rendering the sprite
         */
        renderOffsetY: number | {
            base: number;
            discretionary: (doodad: Doodad) => number;
        };
        /**
         * Number of rows in the sprite
         */
        rows: number;
        /**
         * Number of columns in the sprite
         */
        renderContainedItems?: boolean;
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
     * A number of "display variants" for this item.
     *
     * Each variant must be in `DoodadTypeExtra`, named `${main item type name}${1-based variant index}`.
     * IE, `DoodadType.JackOLantern` having `displayVariants: 3` will look for `DoodadTypeExtra.JackOLantern1`, `JackOLantern2`, and `JackOLantern3`.
     *
     * Setting `displayItem` disables the functionality provided by `displayVariants`.
     *
     * `displayVariants` uses `aestheticRandom` to determine which variant to use.
     * `aestheticRandom` is transferred when converting from Item to Doodad and vice versa, so the variant will remain the same,
     * assuming `displayVariants` is set to the same count on both the item description and doodad description.
     */
    displayVariants?: number;
    /**
     * Sets (and overwrites) the associated item (or item extra) that shows in the tooltip.
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
    /**
     * The amount of turns it takes to purify the water.
     */
    waterPurificationTurns?: number;
    /**
     * Radius around scarecrow that will attempt to scare away creatures based on `chanceOfScarecrowScare` property in `creatureDescriptions`.
     */
    scareRadius?: number;
    /**
     * When the doodad reaches this stage, it will drop the following items with the following chances.
     */
    dropsOnGrowth?: IDropsOnGrowth;
}
export interface IItemStackRegion {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
}
export interface IScareRadius {
    total: number;
    /** The "effective" scare radius, ie what's actually used internally. This is slightly increased so that it's a nicer circle */
    totalEffective: number;
    base: number;
    quality: number;
    magic: number;
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
export type IDropsOnGrowth = PartialRecord<GrowingStage, ILootItem[]>;
export type IDoodadLoot = PartialRecord<GrowingStage, ILootItem[]>;
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
    TinWaterStill = 29,
    LitTinWaterStill = 30,
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
    CopperWaterStill = 55,
    LitCopperWaterStill = 56,
    SandstoneCampfire = 57,
    LitSandstoneCampfire = 58,
    SandstoneFurnace = 59,
    LitSandstoneFurnace = 60,
    WroughtIronWaterStill = 61,
    LitWroughtIronWaterStill = 62,
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
    IronWaterStill = 138,
    LitIronWaterStill = 139,
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
    LitBasaltLighthouse = 161,
    GraniteDripstone = 162,
    SandstoneDripstone = 163,
    BasaltDripstone = 164,
    ClayDripstone = 165,
    BronzeWaterStill = 166,
    LitBronzeWaterStill = 167,
    ArmorStand = 168,
    GraniteAltar = 169,
    WoodenWheelbarrow = 170,
    TinWheelbarrow = 171,
    CopperWheelbarrow = 172,
    WroughtIronWheelbarrow = 173,
    IronWheelbarrow = 174,
    BronzeWheelbarrow = 175,
    SandstoneAltar = 176,
    BasaltAltar = 177,
    ClayAltar = 178,
    SkeletalPirateRemains = 179,
    JackOLantern = 180,
    LitJackOLantern = 181,
    Last = 182
}
export declare enum DoodadTypeExtra {
    None = 183,
    WoodenBookcase_25 = 184,
    WoodenBookcase_50 = 185,
    WoodenBookcase_75 = 186,
    WoodenBookcase_100 = 187,
    JackOLantern2 = 188,
    JackOLantern3 = 189,
    LitJackOLantern2 = 190,
    LitJackOLantern3 = 191,
    StrawScarecrow2 = 192,
    StrawScarecrow3 = 193,
    CactusScarecrow2 = 194,
    CactusScarecrow3 = 195,
    SnowScarecrow2 = 196,
    SnowScarecrow3 = 197
}
export type DisplayableDoodadType = DoodadType | DoodadTypeExtra;
export declare enum DoodadTag {
    None = 0,
    ProppedOpen = 1,
    CollapsedSkeleton = 2
}
/**
 * All tree types that can be spawned during map gen
 * !! This must be kept in sync with the tree list in setupTiles !!
 */
export type MapGenDoodadTrees = DoodadType.MapleTree | DoodadType.CoconutTree | DoodadType.JoshuaTree | DoodadType.SpruceTree | DoodadType.CypressTree | DoodadType.AppleTree | DoodadType.SpruceTreeWithSnow | DoodadType.WhitePineTree | DoodadType.WhitePineTreeWithSnow | DoodadType.PapayaTree | DoodadType.Palapalai | DoodadType.ButtonMushrooms | DoodadType.PoisonIvy | DoodadType.Cattails | DoodadType.FlyAmanita;
export declare enum DoodadTypeGroup {
    Invalid = -9999,
    LitCampfire = -9998,
    LitFurnace = -9997,
    LitKiln = -9996,
    LitWaterStill = -9995,
    Anvil = -9994,
    Well = -9993,
    Hitch = -9992,
    GatheredPlant = -9991,// Special case for plants that need to be gathered to get the "main resource"
    FireSource = -9990,
    LitTorch = -9989,
    LightDevice = -9988,
    /**
     * This is set for lit torches, candles, and jack-o'-lanterns specifically
     */
    LightSource = -9987,
    LitStructure = -9986,// Prevents pick up while lit
    LockedChest = -9985,
    Scarecrow = -9984,
    Lighthouse = -9983,
    LitLighthouse = -9982,
    Dripstone = -9981,
    WaterStill = -9980,
    Wheelbarrow = -9979,
    Altar = -9978,
    OpenFireSource = -9977,
    Unused = -9976,// <----------- Use this one
    ContainsFuelSource = -9975,
    CurseWard = -9974,
    CannotBeSpread = -9973
}
export declare enum DoorOrientation {
    /**
     * Horizontal (handle on right)
     */
    Horizontal = 0,
    Vertical = 1
}
export declare enum GrowingStage {
    Germinating = 0,
    Seedling = 1,
    Vegetative = 2,
    Budding = 3,
    Flowering = 4,
    Ripening = 5,
    Seeding = 6,
    Bare = 7
}
export declare namespace Growth {
    function isAtLeast(growth: GrowingStage | undefined, stage: GrowingStage): boolean;
    function isAtMost(growth: GrowingStage | undefined, stage: GrowingStage): boolean;
    function isMoreThan(growth: GrowingStage | undefined, stage: GrowingStage): boolean;
    function isLessThan(growth: GrowingStage | undefined, stage: GrowingStage): boolean;
}
export interface IHasBuilder {
    getBuilder(): Human | undefined;
}
export interface IHasWater {
    top?: true;
    bottom?: true;
    waterType?: WaterType;
}
export interface IDoodadGetNameOptions {
    count: number;
    showCount: boolean;
    /**
     * Defaults to true
     */
    showQuality: boolean;
    /**
     * Defaults to true
     */
    showRenamedQuotes: boolean;
    /**
     * Defaults to true
     */
    showMagicalType: boolean;
    /**
     * Ignore discovery system when computing the name
     */
    ignoreDiscovery: boolean;
}
export {};
