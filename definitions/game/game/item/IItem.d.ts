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
import type { SfxType } from "audio/IAudio";
import type { BiomeType } from "game/biome/IBiome";
import type { DoodadType, DoodadTypeGroup } from "game/doodad/IDoodad";
import { ActionType } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import type { CreatureType, TileGroup } from "game/entity/creature/ICreature";
import type { DamageType, Defense, MoveType, StatusType } from "game/entity/IEntity";
import type { Delay, EquipType, SkillType } from "game/entity/IHuman";
import type { Stat } from "game/entity/IStats";
import type { IDecayTemperatureRange } from "game/IGame";
import type { IObjectDescription, Quality } from "game/IObject";
import type { IslandId } from "game/island/IIsland";
import type { IAddToContainerOptions } from "game/item/IItemManager";
import type Item from "game/item/Item";
import type Recipe from "game/item/recipe/Recipe";
import type MagicalPropertyManager from "game/magic/MagicalPropertyManager";
import type { MagicalSubPropertySubTypes } from "game/magic/MagicalPropertyManager";
import type { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import type { IInsulationDescription, ITemperatureDescription } from "game/temperature/ITemperature";
import type { TerrainType } from "game/tile/ITerrain";
import type { TileEventType } from "game/tile/ITileEvent";
import type Tile from "game/tile/Tile";
import type Message from "language/dictionary/Message";
import type TranslationImpl from "language/impl/TranslationImpl";
import type { IModdable } from "mod/ModRegistry";
import type { IRGB } from "utilities/Color";
import type { IVector3 } from "utilities/math/IVector";
export interface IItemWeightComponent {
    weightFraction?: number;
    type: ItemType;
    tweak?: number;
}
export interface IConstructedInfo {
    disassembly?: Item[];
    additionalItemWeights?: IItemWeightComponent[];
    weightTweak?: number;
}
export type IItemOld = Pick<Item, Exclude<keyof Item, "map">> & {
    equipped?: EquipType;
    equippedPid?: number;
    legendary?: IMagicalPropertyOld;
    tatteredMap?: IVector3 & {
        reinitialize?: boolean;
        islandId?: IslandId;
    };
    magicalProperties?: IMagicalPropertyOld[];
    ownerIdentifier?: string;
    map?: [island: IslandId, id: number] | [island: IslandId, completed: boolean, decimal: number];
};
export declare module IItemOld {
    function get(item: Item): IItemOld;
    function get(item?: Item): IItemOld | undefined;
}
interface IMagicalPropertyOld {
    type: MagicalPropertyType;
    value: number;
    skill?: SkillType;
    stat?: Stat;
}
export declare const SYMBOL_CONTAINER_CACHED_REFERENCE: unique symbol;
export interface IContainable {
    containedWithin?: IContainer;
    containerType?: ContainerType;
    [SYMBOL_CONTAINER_CACHED_REFERENCE]?: ContainerReference;
}
export interface IContainer extends IContainable {
    containedItems: Item[];
    transientItems?: Item[];
    itemOrders?: number[];
}
export interface IItemDisassembleResult {
    items: IItemDisassembly[];
    itemsBroken: number;
}
export interface IItemDisassembly {
    type: ItemType;
    quality: Quality | undefined;
    minDur: number;
    maxDur: number;
    weight: number;
    magic: MagicalPropertyManager | undefined;
    disassembly: Item[];
    tradedFrom: string[] | undefined;
}
export declare enum ItemDamageResult {
    NoDamage = 0,
    Damaged = 1,
    DamagedAndRemoved = 2
}
export interface IItemDescription extends IObjectDescription, IModdable, ITemperatureDescription {
    durability?: number;
    /**
     * An amount of durability that the item can start with lost. Defaults to 3
     */
    durabilityDistribution?: number;
    /**
     * A decimal number between 0 and 1 representing how much of the item's durability can already be gone when the item is created
     */
    durabilityModifierAtStart?: number;
    /**
     * Do not use this property if you do not want the item to burn at all (unless flammable is set, in which case, it burns into its diassembly items).
     * Set it to [ItemType.None] if you want it to burn but not produce anything.
     * Otherwise, set it to an array of items you want it to burn into.
     */
    onBurn?: ItemType[];
    onUse?: IItemOnUse;
    equipEffect?: EquipEffects;
    damageType?: DamageType;
    weight?: number;
    reducedWeight?: number;
    minimumWeight?: number;
    weightRange?: [number, number];
    /**
     * A decimal number between 0 and 1 that will reduce the `weightFraction` of a "raw" item when it's refined.
     */
    refiningReduction?: number;
    lit?: ItemType;
    damageModifier?: number;
    equip?: EquipType;
    returnOnUseAndDecay?: IItemReturn;
    inheritWeight?: ItemType;
    attack?: number;
    defense?: Defense;
    revert?: ItemType;
    use?: ActionType[];
    ranged?: IRanged;
    recipe?: IRecipe;
    /**
     * A list of recipes that have this item as an output.
     *
     * This helper is intended for simple recipes that don't need to change how many of the item are created, and from what.
     * If you intend to output a number of this item greater than one, or you intend to produce this item by changing another item
     * into it, consider instead registering a recipe directly.
     */
    recipes?: Array<(recipe: Recipe) => Recipe>;
    disassemble?: boolean;
    /**
     * Set items that are part of the item's disassembly that are converted into another item when disassembled.
     */
    disassemblyTransform?: OptionalDescriptions<ItemType, ItemType>;
    requiredForDisassembly?: Array<ItemType | ItemTypeGroup>;
    decaysInto?: ItemType[];
    decayTemperatureRange?: IDecayTemperatureRange;
    keepDurabilityOnCraft?: boolean;
    craftable?: boolean;
    dismantle?: IDismantleDescription;
    doodadContainer?: DoodadType;
    repairable?: boolean;
    subTypes?: ItemTypeExtra[];
    /**
     * Set to false if you do not want the item to be reinforcable. Items with a durability property will be reinforcable by default.
     */
    reinforcable?: boolean;
    repairAndDisassemblyRequiresFire?: boolean;
    suffix?: string;
    prefix?: string;
    spawnOnDecay?: CreatureType;
    /**
     * Creates creatures or tile events when it breaks.
     */
    createOnBreak?: ICreateOnBreak;
    /**
     * Creates this tile event when using this item in a craft. The tileEventByProduct boolean must be set to true on the recipe calling this item.
     */
    createTileEventOnCraft?: TileEventType;
    showOverHair?: boolean;
    /**
     * If set to true, still render the hair under this equipment.
     */
    showOnTopOfHair?: boolean;
    hasSleepImage?: boolean;
    /**
     * If set to true, the item will count as something you can start on fire or where fire can spread to.
     * By default, after it burns, it will burn into its disassembly items unless the onBurn property is set.
     */
    flammable?: boolean;
    plural?: string;
    hideHelmet?: boolean;
    worth?: number;
    /**
     * Array of items that the item is "made from" in cases where we can't use the disassembly items to burn into.
     * All items in array are required to have onBurn set in their description to function properly.
     * This should eventually be removed since we want to be able to break down items into proper sub-ingredients/items.
     */
    burnsLike?: ItemType[];
    spawnableTiles?: TileGroup;
    /**
     * Set on the base item for a type of water container
     * Mapping of the specific item types per liquid type
     */
    liquidGather?: ILiquidGather;
    placeDownType?: DoodadType;
    damageOnUse?: Record<number, any>;
    /**
     * How good this item is at being an item of an `ItemTypeGroup`.
     *
     * For instance, `ItemType.StoneSpear` has a `ItemTypeGroup.CookingEquipment` tier of 2.
     */
    tier?: OptionalDescriptions<ItemTypeGroup, number>;
    /**
     * Array of biome types that the item can spawn in merchant's inventory for trade. Leave empty or unset if item spawns on merchants in any biome type.
     */
    spawnOnMerchant?: BiomeType[];
    /**
     * Array of status effects that using this item (via ConsumeItem) will cure.
     */
    canCureStatus?: StatusType[];
    /**
     * Custom messages for specific items
     */
    messages?: {
        nearDestroyed?: Message;
        destroyed?: Message;
    };
    /**
     * The level at which the items performs a certain action. The higher the number, the better.
     * This impacts things like stamina usage, success rate, resource amount, etc.
     */
    actionTier?: OptionalDescriptions<ActionType, number>;
    /**
     * Array of tile events that are spawned when the item melts.
     */
    meltsInto?: TileEventType[];
    recipeCache?: ItemType[];
    /**
     * A decimal number from `0` to `1`.
     * - An insulation of `0` means that the temperature inside this object is equivalent to the temperature outside.
     * - An insulation of `1` means that *no* temperature inside this object is emitted to the outside tiles — it is a completely
     * separate temperature "biome".
     * - Values in between change how much of the temperatures are produced/used on either side.
     */
    equippedInsulation?: IInsulationDescription;
    /**
     * A decimal number from `0` to `1`.
     * - An insulation of `0` means that the temperature inside this object is equivalent to the temperature outside.
     * - An insulation of `1` means that *no* temperature inside this object is emitted to the outside tiles — it is a completely
     * separate temperature "biome".
     * - Values in between change how much of the temperatures are produced/used on either side.
     */
    containedItemsInsulation?: IInsulationDescription;
    /**
     * Specifies with item group (weapon) this ammunition can be fired with.
     */
    firedWith?: ItemTypeGroup;
    vehicle?: IItemVehicle;
    /**
     * If set to true, this item will not grant quality bonuses (durability/quality bonuses) when used in a craft. Aptitude and tiers will still apply.
     */
    noCraftingQualityBonus?: boolean;
    /**
     * A float that items inside the container will be reduced by when in a player's inventory.
     */
    reducedStoredItemsWeight?: number;
    /**
     * The amount of civilization score to give when placing item in a bookcase.
     */
    civilizationContainerScore?: number;
    /**
     * The item name to display instead of the described item name
     */
    displayNameArgs?: (item: Item) => TranslationImpl[] | undefined;
    /**
     * The item type to display instead of the described item type
     */
    displayItem?: SupplierOr<DisplayableItemType | undefined, [Item]>;
    onEquip?(item: Item): void;
    onUnequip?(item: Item): void;
    onContainerItemAdd?(container: Item & IContainer, item: Item): void;
    onContainerItemRemove?(container: Item & IContainer, item: Item): void;
}
export type ConsumeItemStatsTuple = [health: number, stamina: number, hunger: number, thirst: number];
export interface IItemOnUse {
    [ActionType.Apply]?: ConsumeItemStatsTuple;
    [ActionType.Build]?: IItemBuild;
    [ActionType.CageCreature]?: ItemType;
    [ActionType.Cure]?: ConsumeItemStatsTuple;
    [ActionType.DrinkItem]?: ConsumeItemStatsTuple;
    [ActionType.Eat]?: ConsumeItemStatsTuple;
    [ActionType.Heal]?: ConsumeItemStatsTuple;
    [ActionType.HealOther]?: number;
    [ActionType.PlaceDown]?: IItemBuild;
    [ActionType.Plant]?: DoodadType;
    [ActionType.Pour]?: TileEventType;
    [ActionType.PourOnYourself]?: TileEventType;
    [ActionType.SetDown]?: TerrainType;
    [ActionType.SmotherFire]?: TerrainType;
    [ActionType.StokeFire]?: number;
    [ActionType.Summon]?: ISummon;
    [ActionType.Uncage]?: ItemType;
}
export interface IItemBuild {
    /**
     * Doodad to build
     */
    type: DoodadType;
    /**
     * Prevents the item from being removed when building
     */
    keepItem?: boolean;
    /**
     * When defined, allows the build to work only on these tile types
     */
    allowedTileTypes?: Set<TerrainType>;
}
export interface ISummon {
    /**
     * Creature type to summon.
     */
    type: CreatureType;
    /**
     * Set to true if it should summon an aberrant version of the creature.
     */
    aberrant?: boolean;
}
/**
 * Describes a vehicle
 */
export interface IItemVehicle {
    /**
     * Type of vehicle
     */
    type: VehicleType;
    /**
     * Render type of vehicle
     */
    renderType: VehicleRenderType;
    /**
     * Makes movement try to stay on a valid path
     */
    smartMovement?: boolean;
    /**
     * Vehicle movement type
     */
    movementType?: MoveType;
    /**
     * Movement delay
     */
    movementSpeed: Delay | number;
    /**
     * Defense bonus when inside a vehicle
     */
    defenseBonus?: number;
    /**
     * Sound effect when moving
     */
    soundEffect?: SfxType;
    /**
     * Allowed tiles the vehicle operates on
     */
    allowedTiles?: {
        /**
         * Allow moving on the set of tile types
         */
        tileTypes?: Set<TerrainType>;
        /**
         * Allow moving on the set of doodad types
         */
        doodadTypes?: Set<DoodadType>;
        /**
         * Allow moving on any water tile
         */
        allowAnyWater?: boolean;
    };
    /**
     * Message to display when trying to use the vehicle on a disallowed tile
     */
    disallowedTileMessage: Message;
    /**
     * Allows resting
     */
    allowResting?: Message;
    /**
     * Allows sleeping
     */
    allowSleeping?: Message;
    /**
     * y offset when rendering the sprite
     */
    renderOffsetY?: number;
}
export declare enum VehicleRenderType {
    /**
     * Human will stand on the vehicle
     */
    Stand = 0,
    /**
     * Human sits inside the vehicle (only show the head)
     */
    Sit = 1
}
export declare enum VehicleType {
    /**
     * A vehicle that moves within water
     */
    Boat = 0,
    /**
     * A vehicle that moves along tracks
     */
    Minecart = 1,
    /**
     * Any other vehicle type
     */
    Other = 2
}
export interface IItemReturn {
    type: ItemType;
    /**
     * If true, the returned item will be damaged by 1 point.
     */
    damaged?: boolean;
    /**
     * If true, disassembly data will be checked for the item and return the first instance of the ItemType set in type and will filter out any other types from its disassembly data.
     */
    returnFromDisassembly?: boolean;
    /**
     * If set to true, this item will return the item when consumed in a craft, otherwise, it won't.
     */
    whenCrafted?: boolean;
}
export interface IMoveToTileOptions {
    fromTile?: Tile;
    fromTileApplyPlayerOffset?: boolean;
    toTile: Tile;
    toTileApplyPlayerOffset?: boolean;
    toContainer?: IContainer;
    toContainerOptions?: IAddToContainerOptions;
    beforeMovement?: IMoveToTileBeforeMovementOptions;
    extinguishTorches?: boolean;
    /**
     * Note: Everything done in afterMovement must be clientside only
     */
    afterMovement?: IMoveToTileAfterMovementOptions;
}
export interface IMoveToTileBeforeMovementOptions {
    remove?: boolean;
}
export interface IMoveToTileAfterMovementOptions {
    soundEffect?: SfxType;
    particles?: IRGB;
    updateTileLayer?: boolean;
    renderCreature?: Creature;
}
export interface IRecipe {
    baseComponent?: ItemType | ItemTypeGroup;
    components: IRecipeComponent[];
    skill: SkillType;
    level: RecipeLevel;
    requiredDoodads?: Array<DoodadType | DoodadTypeGroup>;
    requiresFire?: boolean;
    reputation: number;
}
export interface IRecipeComponent {
    type: ItemType | ItemTypeGroup;
    requiredAmount: number;
    consumedAmount: number;
    disassembleAmount: number;
    ignoreWeight: boolean;
    tileEventByProduct: boolean;
}
export interface ICreateOnBreak {
    creatureType?: CreatureType;
    aberrantCreature?: boolean;
    tileEventType?: TileEventType;
}
export type IDismantleComponent = Record<number, number>;
export interface IRanged {
    range: number;
    attack: number;
    ammunitionType?: ItemTypeGroup;
    requiredToFire?: ItemType;
    skillType?: SkillType;
}
export interface IMagicalPropertyInfo {
    /**
     * The maximum value this magical property can be on this item.
     */
    max: number;
    /**
     * Does nothing for integer magical properties. For decimal magical properties, rounds it to the nearest `.1` for calculations and display.
     */
    roundToNearestTenthPlace?: true;
    /**
     * Generates a random starting value for this magical property.
     */
    value(): number;
    /**
     * Generates the random sub-property to use for this magical property, if this magical property is a magical property with subtypes.
     */
    subType?: MagicalSubPropertySubTypes | (() => MagicalSubPropertySubTypes);
}
export interface IItemUsed {
    usedBy?: string[];
    recipe?: ItemType;
    skill?: SkillType;
}
export interface ILiquidGather {
    milk: ItemType;
    desalinated: ItemType;
    unpurified: ItemType;
    purified: ItemType;
    seawater: ItemType;
    swampWater: ItemType;
    wisp: ItemType;
    aberrantWisp: ItemType;
}
export interface IDismantleDescription {
    items: IDismantleItemDescription[];
    required?: ItemTypeGroup;
    skill?: SkillType;
    reputation?: number;
    producesEvent?: TileEventType;
}
export interface IDismantleItemDescription {
    type: ItemType;
    amount: number;
    transferDecay?: boolean;
}
export interface IItemGroupDescription {
    types: Array<ItemType | ItemTypeGroup>;
    default: ItemType | ItemTypeGroup;
    /**
     * Whether this group is hidden to the player. Defaults to `false`
     */
    hidden?: boolean;
}
export declare enum ContainerReferenceType {
    Invalid = 0,
    PlayerInventory = 1,
    Doodad = 2,
    World = 3,
    Tile = 4,
    Item = 5,
    NPCInventory = 6
}
export interface IBaseContainerReference {
    crt: ContainerReferenceType;
    /**
     * Legacy, don't use this
     * @deprecated
     */
    type?: ContainerReferenceType;
}
export interface IPlayerInventoryContainerReference extends IBaseContainerReference {
    crt: ContainerReferenceType.PlayerInventory;
    type?: ContainerReferenceType.PlayerInventory;
    pid: number;
    identifier?: string;
}
export interface IInvalidContainerReference extends IBaseContainerReference {
    crt: ContainerReferenceType.Invalid;
    type?: ContainerReferenceType.Invalid;
}
export interface IWorldContainerReference extends IBaseContainerReference {
    crt: ContainerReferenceType.World;
    type?: ContainerReferenceType.World;
}
export interface ITileContainerReference extends IBaseContainerReference, IVector3 {
    crt: ContainerReferenceType.Tile;
    type?: ContainerReferenceType.Tile;
}
export interface IDoodadContainerReference extends IBaseContainerReference, IVector3 {
    crt: ContainerReferenceType.Doodad;
    type?: ContainerReferenceType.Doodad;
}
export interface IItemContainerReference extends IBaseContainerReference {
    crt: ContainerReferenceType.Item;
    type?: ContainerReferenceType.Item;
    id: number;
}
export interface INPCInventoryContainerReference extends IBaseContainerReference {
    crt: ContainerReferenceType.NPCInventory;
    type?: ContainerReferenceType.NPCInventory;
    id: number;
}
export type ContainerReference = IInvalidContainerReference | IWorldContainerReference | IPlayerInventoryContainerReference | ITileContainerReference | IDoodadContainerReference | IItemContainerReference | INPCInventoryContainerReference;
export declare enum CraftResult {
    Fail = 0,
    Success = 1,
    CritSuccess = 2
}
export declare enum ContainerType {
    Default = 0,
    Trade = 1
}
export declare enum EquipEffect {
    LightSource = 0,
    Telescopy = 1
}
interface IEquipEffects {
    [EquipEffect.LightSource]: [number];
    [EquipEffect.Telescopy]: [number, number];
}
export declare const EQUIP_EFFECTS_DEFAULT: IEquipEffects;
export type EquipEffects = {
    [K in keyof IEquipEffects]: AddHead<K, Extract<IEquipEffects[K], any[]>>;
}[keyof IEquipEffects];
export type EquipEffectByType<T extends EquipEffect> = IEquipEffects[T];
export declare const consumables: Set<ActionType>;
export declare enum ItemWeightChange {
    NewMagicProperty = 0,
    NewWeight = 1
}
export declare enum RecipeLevel {
    Simple = 0,
    Intermediate = 1,
    Advanced = 2,
    Expert = 3,
    Master = 4
}
export declare enum BookType {
    RandomEvent = 0,
    IslandPresence = 1,
    Treasures = 2,
    Deities = 3,
    PastCivilizations = 4,
    SandCasting = 5,
    WanderingMerchants = 6,
    TrappersJournal = 7,
    TheForce = 8,
    IslandRiddle = 9,
    Trapped = 10,
    PowderyCatalog = 11,
    OnWaterAndHydration = 12,
    TravelingBySea = 13,
    TheSolution = 14,
    TheSlimeRancher = 15,
    DarknessCalls = 16,
    RemnantsOfCivilization = 17,
    AndTheVoidAnswersBack = 18,
    ThePowerOfTheWrittenWord = 19,
    TheAbnormals = 20
}
export declare enum ItemType {
    None = 0,
    Copal = 1,
    AnimalSkull = 2,
    GraniteArrow = 3,
    GraniteArrowhead = 4,
    PileOfAsh = 5,
    BarkLeggings = 6,
    BarkShield = 7,
    BarkTunic = 8,
    Bone = 9,
    Branch = 10,
    CactusSpines = 11,
    Charcoal = 12,
    GraniteFlooring = 13,
    CookedMeat = 14,
    Earthworm = 15,
    Feather = 16,
    Fertilizer = 17,
    WaterskinOfSeawater = 18,
    FirePlough = 19,
    BeggartickSeeds = 20,
    Fossil = 21,
    GoldCoins = 22,
    GoldenChalice = 23,
    GoldenRing = 24,
    GoldSword = 25,
    GrassSeeds = 26,
    IronOre = 27,
    WoodenDowels = 28,
    Granite = 29,
    LeafBedroll = 30,
    LeatherHide = 31,
    Leaves = 32,
    Limestone = 33,
    Log = 34,
    GraniteMortarAndPestle = 35,
    ButtonMushrooms = 36,
    Nopal = 37,
    Peat = 38,
    Sandstone = 39,
    PileOfGravel = 40,
    PileOfBeachSand = 41,
    WoodenArrow = 42,
    GraniteAxe = 43,
    Bandage = 44,
    WovenFabric = 45,
    CactusNeedle = 46,
    GraniteShovel = 47,
    WoodenSpear = 48,
    Suture = 49,
    Raft = 50,
    RawMeat = 51,
    Raspberries = 52,
    FlyAmanita = 53,
    Rope = 54,
    MapleSeeds = 55,
    Badderlocks = 56,
    SharpGlass = 57,
    SharpGranite = 58,
    Skullcap = 59,
    SmoothGranite = 60,
    Soil = 61,
    GraniteSpear = 62,
    Stones = 63,
    GraniteWall = 64,
    String = 65,
    StrippedBark = 66,
    TannedLeather = 67,
    Tannin = 68,
    MilkThistleSeeds = 69,
    TreeBark = 70,
    HoneyFungus = 71,
    ClematisVine = 72,
    Twigs = 73,
    Waterskin = 74,
    WoodenPole = 75,
    PeatBandage = 76,
    Bow = 77,
    BowDrill = 78,
    FishingNet = 79,
    RawCod = 80,
    CookedCod = 81,
    GraniteCampfire = 82,
    VineWhip = 83,
    PileOfSnow = 84,
    BarkTorch = 85,
    LitBarkTorch = 86,
    HandDrill = 87,
    SmallBag = 88,
    Shale = 89,
    SharpenedBone = 90,
    Grindstone = 91,
    RawFishSteak = 92,
    CookedFishSteak = 93,
    WaterskinOfDesalinatedWater = 94,
    BoatPaddle = 95,
    BullBoat = 96,
    RefinedSand = 97,
    Spyglass = 98,
    Retort = 99,
    RawClay = 100,
    RawClayBlowpipe = 101,
    ClayBlowpipe = 102,
    LeatherBelt = 103,
    LeatherTunic = 104,
    LeatherBoots = 105,
    LeatherCap = 106,
    LeatherGorget = 107,
    LeatherPants = 108,
    LeatherGloves = 109,
    GraniteFurnace = 110,
    SandstoneKiln = 111,
    IronTongs = 112,
    Talc = 113,
    TalcumPowder = 114,
    WoodenSandCastFlask = 115,
    Lens = 116,
    PlantRoots = 117,
    Lockpick = 118,
    BoneNeedle = 119,
    Pineapple = 120,
    TatteredMap = 121,
    Coal = 122,
    WroughtIron = 123,
    LimestonePowder = 124,
    IronIngot = 125,
    Backpack = 126,
    RottenMeat = 127,
    GraniteHammer = 128,
    RawChicken = 129,
    CookedChicken = 130,
    GraniteAnvil = 131,
    WoodenChest = 132,
    IronSword = 133,
    IronBreastplate = 134,
    IronBoots = 135,
    IronHelmet = 136,
    IronGorget = 137,
    IronCuisses = 138,
    IronGauntlets = 139,
    IronHeater = 140,
    SandstoneWall = 141,
    SandstoneFlooring = 142,
    SpiderSilk = 143,
    AnimalFat = 144,
    TallowTorch = 145,
    ClayFlakes = 146,
    GreenSand = 147,
    OldInstructionalScroll = 148,
    SlimeGelatin = 149,
    SlimeGlue = 150,
    CookedSpiderMeat = 151,
    SpiderMeat = 152,
    IronLockpick = 153,
    RottingVegetation = 154,
    Chives = 155,
    IronHammer = 156,
    IronSpear = 157,
    IronShovel = 158,
    IronDoubleAxe = 159,
    IronPickaxe = 160,
    Inkstick = 161,
    Coconut = 162,
    PalmLeaf = 163,
    Offal = 164,
    BoneFragments = 165,
    LitPoleTorch = 166,
    CottonBoll = 167,
    CottonSeeds = 168,
    CottonFabric = 169,
    BonePole = 170,
    Tourniquet = 171,
    WroughtIronPickaxe = 172,
    WroughtIronDoubleAxe = 173,
    WroughtIronShovel = 174,
    WroughtIronSpear = 175,
    WroughtIronHammer = 176,
    WroughtIronLockpick = 177,
    WroughtIronShield = 178,
    WroughtIronGauntlets = 179,
    WroughtIronCuisses = 180,
    WroughtIronGorget = 181,
    WroughtIronHelmet = 182,
    WroughtIronBoots = 183,
    WroughtIronBreastplate = 184,
    WroughtIronSword = 185,
    WoodenWall = 186,
    WoodenFlooring = 187,
    WoodenDoor = 188,
    FishingRod = 189,
    MessageInABottle = 190,
    CarbonPowder = 191,
    PileOfCompost = 192,
    MeltedCopal = 193,
    WoodenShavings = 194,
    GraniteDeadfall = 195,
    Snare = 196,
    WaterskinOfMedicinalWater = 197,
    CharcoalBandage = 198,
    WoodenTongs = 199,
    WroughtIronTongs = 200,
    SheetOfGlass = 201,
    SolarStill = 202,
    GraniteWaterStill = 203,
    GraniteSundial = 204,
    LitTallowTorch = 205,
    Sinew = 206,
    ShortBow = 207,
    LongBow = 208,
    CompositeBow = 209,
    WaterskinOfPurifiedFreshWater = 210,
    WaterskinOfUnpurifiedFreshWater = 211,
    GlassBottle = 212,
    Cork = 213,
    GlassBottleOfSeawater = 214,
    GlassBottleOfDesalinatedWater = 215,
    GlassBottleOfMedicinalWater = 216,
    GlassBottleOfPurifiedFreshWater = 217,
    GlassBottleOfUnpurifiedFreshWater = 218,
    WroughtIronArrow = 219,
    IronArrow = 220,
    GraniteBullet = 221,
    WroughtIronBullet = 222,
    IronBullet = 223,
    LeatherQuiver = 224,
    Ectoplasm = 225,
    MagicalEssence = 226,
    WoodenFence = 227,
    CreatureIdol = 228,
    CordedSling = 229,
    LeatherSling = 230,
    WroughtIronArrowhead = 231,
    IronArrowhead = 232,
    Hammock = 233,
    CottonBedroll = 234,
    FeatherBedroll = 235,
    RawTaintedMeat = 236,
    CookedTaintedMeat = 237,
    GraniteKnife = 238,
    RawBlindfish = 239,
    CookedBlindfish = 240,
    Pemmican = 241,
    CookedPemmican = 242,
    Sail = 243,
    Sailboat = 244,
    ChickenEgg = 245,
    BoiledChickenEgg = 246,
    SheafOfHay = 247,
    Niter = 248,
    Saltpeter = 249,
    BlackPowder = 250,
    FlintlockPistol = 251,
    Giblets = 252,
    ExplosiveTrap = 253,
    SkeletalMageWand = 254,
    RawClayJug = 255,
    ClayJug = 256,
    ClayJugOfSeawater = 257,
    ClayJugOfDesalinatedWater = 258,
    ClayJugOfMedicinalWater = 259,
    ClayJugOfPurifiedFreshWater = 260,
    ClayJugOfUnpurifiedFreshWater = 261,
    RawClayBrick = 262,
    ClayBrick = 263,
    ClayWall = 264,
    ClayFlooring = 265,
    PineappleSeeds = 266,
    RaspberrySeeds = 267,
    PricklyPearSeeds = 268,
    ClematisSeeds = 269,
    PaperSheet = 270,
    PaperMold = 271,
    Beggarticks = 272,
    MilkThistleFlowers = 273,
    DrawnMap = 274,
    TatteredClothShirt = 275,
    TatteredClothTrousers = 276,
    WoodenGate = 277,
    PoisonIvyLeaves = 278,
    PoisonIvySeeds = 279,
    WroughtIronChest = 280,
    IronChest = 281,
    SwitchgrassSeeds = 282,
    Apple = 283,
    SpiderEggs = 284,
    TailFeathers = 285,
    AppleSeeds = 286,
    VenomGland = 287,
    OrnateWoodenChest = 288,
    RollOfRedCarpet = 289,
    OrnateCape = 290,
    FireBladder = 291,
    GoldenKey = 292,
    WoodenSword = 293,
    ClayKiln = 294,
    ClayCampfire = 295,
    ClayFurnace = 296,
    ClayWaterStill = 297,
    SandstoneCampfire = 298,
    SandstoneFurnace = 299,
    SandstoneWaterStill = 300,
    GraniteKiln = 301,
    WroughtIronAnvil = 302,
    IronAnvil = 303,
    MageRobe = 304,
    OrbOfInfluence = 305,
    AnimalClaw = 306,
    AnimalPelt = 307,
    AnimalFur = 308,
    Scales = 309,
    SharkFin = 310,
    RawReptileMeat = 311,
    CookedReptileMeat = 312,
    Tentacles = 313,
    CookedTentacles = 314,
    WormMeat = 315,
    CookedWormMeat = 316,
    GranitePickaxe = 317,
    WroughtIronAxe = 318,
    IronAxe = 319,
    FertileSoil = 320,
    GraniteHoe = 321,
    WroughtIronHoe = 322,
    IronHoe = 323,
    LavaBeetleHelmet = 324,
    SpruceCone = 325,
    SpruceSeeds = 326,
    SpruceNeedles = 327,
    CypressCone = 328,
    CypressSeeds = 329,
    CypressLeaves = 330,
    Lettuce = 331,
    LettuceSeeds = 332,
    ChiveSeeds = 333,
    Potato = 334,
    PotatoSeeds = 335,
    Carrot = 336,
    CarrotSeeds = 337,
    CornEar = 338,
    CornSeeds = 339,
    Cucumber = 340,
    CucumberSeeds = 341,
    Tomato = 342,
    TomatoSeeds = 343,
    Pumpkin = 344,
    PumpkinSeeds = 345,
    PricklyPearFruit = 346,
    SugarCaneStalks = 347,
    SugarCaneSeeds = 348,
    BushelOfWheat = 349,
    Wheat = 350,
    CookedPotato = 351,
    CookedCornCob = 352,
    BundleOfSwitchgrass = 353,
    Cloak = 354,
    WoodenMortarAndPestle = 355,
    SandstoneMortarAndPestle = 356,
    WroughtIronMortarAndPestle = 357,
    IronMortarAndPestle = 358,
    RawClayMortarAndPestle = 359,
    ClayMortarAndPestle = 360,
    CopperOre = 361,
    CopperIngot = 362,
    CopperPickaxe = 363,
    CopperDoubleAxe = 364,
    CopperShovel = 365,
    CopperSpear = 366,
    CopperHammer = 367,
    CopperLockpick = 368,
    CopperBuckler = 369,
    CopperGauntlets = 370,
    CopperGreaves = 371,
    CopperGorget = 372,
    CopperHelmet = 373,
    CopperBoots = 374,
    CopperCuirass = 375,
    CopperSword = 376,
    CopperTongs = 377,
    CopperArrow = 378,
    CopperBullet = 379,
    CopperArrowhead = 380,
    CopperChest = 381,
    CopperAnvil = 382,
    CopperAxe = 383,
    CopperHoe = 384,
    CopperMortarAndPestle = 385,
    WaterskinOfGoatMilk = 386,
    ClayJugOfGoatMilk = 387,
    GlassBottleOfGoatMilk = 388,
    Obsidian = 389,
    OrnateBlueBook = 390,
    Journal = 391,
    MossCoveredBook = 392,
    GildedRedBook = 393,
    ArrowShaft = 394,
    SlitherSucker = 395,
    AberrantSlitherSucker = 396,
    StrawHat = 397,
    BlackplateSabatons = 398,
    BlackplateBreastplate = 399,
    BlackplateGauntlets = 400,
    BlackplateGorget = 401,
    BlackplateGreaves = 402,
    BlackplateHelmet = 403,
    DeathKnightAxe = 404,
    Macuahuitl = 405,
    ObsidianArrow = 406,
    ObsidianArrowhead = 407,
    ObsidianAxe = 408,
    ObsidianKnife = 409,
    ObsidianShovel = 410,
    ObsidianSpear = 411,
    TumbleweedSeeds = 412,
    CoconutHusk = 413,
    PeeledCoconut = 414,
    CoconutMeat = 415,
    CoconutContainerOfCoconutWater = 416,
    CoconutContainer = 417,
    CoconutContainerOfSeawater = 418,
    CoconutContainerOfDesalinatedWater = 419,
    CoconutContainerOfMedicinalWater = 420,
    CoconutContainerOfPurifiedFreshWater = 421,
    CoconutContainerOfUnpurifiedFreshWater = 422,
    CoconutContainerOfGoatMilk = 423,
    OldEducationalScroll = 424,
    StrippedLeather = 425,
    ClaySandCastFlask = 426,
    SandstoneSandCastFlask = 427,
    GraniteSandCastFlask = 428,
    AnimalGlue = 429,
    CopalResin = 430,
    BoneMeal = 431,
    PileOfDesertSand = 432,
    JoshuaTreeLeaves = 433,
    JoshuaTreeFruit = 434,
    JoshuaTreeSeeds = 435,
    CookedJoshuaTreeFruit = 436,
    JoshuaTreeFlowers = 437,
    SaguaroCactusFruit = 438,
    SaguaroCactusSeeds = 439,
    SaguaroCactusChunk = 440,
    GraniteWell = 441,
    SandstoneWell = 442,
    ClayWell = 443,
    AloeVeraLeaves = 444,
    AloeVeraSeeds = 445,
    DeadScorpion = 446,
    DeadAberrantScorpion = 447,
    CookedScorpion = 448,
    CookedAberrantScorpion = 449,
    ScorpionStinger = 450,
    CopperBakingTray = 451,
    WroughtIronBakingTray = 452,
    IronBakingTray = 453,
    Flour = 454,
    Dough = 455,
    Hardtack = 456,
    HitchingPost = 457,
    ShreddedPaper = 458,
    RawMudskipper = 459,
    RawAberrantMudskipper = 460,
    CookedMudskipper = 461,
    CookedAberrantMudskipper = 462,
    RawRedSnapper = 463,
    CookedRedSnapper = 464,
    RawWalleye = 465,
    CookedWalleye = 466,
    WoodenShield = 467,
    CopperRefinementTools = 468,
    WroughtIronRefinementTools = 469,
    IronRefinementTools = 470,
    ScaleBelt = 471,
    ScaleVest = 472,
    ScaleBoots = 473,
    ScaleCap = 474,
    ScaleBevor = 475,
    ScaleLeggings = 476,
    ScaleGloves = 477,
    CookedJoshuaTreeFlowers = 478,
    SaguaroCactusRibs = 479,
    BladesOfGrass = 480,
    AnimalDroppings = 481,
    AnimalDung = 482,
    Guano = 483,
    Tallow = 484,
    TallowCandle = 485,
    LitTallowCandle = 486,
    WispDust = 487,
    MagicalAspect = 488,
    GoldenSextant = 489,
    RawChoppedFish = 490,
    CookedChoppedFish = 491,
    CookedFishKebab = 492,
    AshCement = 493,
    AshCementBrick = 494,
    AshCementFlooring = 495,
    AshCementWall = 496,
    IceShard = 497,
    PenguinEgg = 498,
    BoiledPenguinEgg = 499,
    RawPenguinMeat = 500,
    CookedPenguinMeat = 501,
    Crowberries = 502,
    CookedCrowberries = 503,
    CrowberrySeeds = 504,
    Winterberries = 505,
    WinterberrySeeds = 506,
    ArcticPoppies = 507,
    ArcticPoppySeeds = 508,
    PirateHat = 509,
    AloeVeraBandage = 510,
    SharkTooth = 511,
    CopperKnife = 512,
    WroughtIronKnife = 513,
    IronKnife = 514,
    TinOre = 515,
    TinIngot = 516,
    TinPickaxe = 517,
    TinDoubleAxe = 518,
    TinShovel = 519,
    TinSpear = 520,
    TinHammer = 521,
    TinLockpick = 522,
    TinShield = 523,
    TinGloves = 524,
    TinChausses = 525,
    TinBevor = 526,
    TinHelmet = 527,
    TinFootgear = 528,
    TinCuirass = 529,
    TinSword = 530,
    TinTongs = 531,
    TinArrow = 532,
    TinBullet = 533,
    TinArrowhead = 534,
    TinChest = 535,
    TinAnvil = 536,
    TinAxe = 537,
    TinHoe = 538,
    TinMortarAndPestle = 539,
    TinBakingTray = 540,
    TinRefinementTools = 541,
    TinKnife = 542,
    BronzeIngot = 543,
    BronzePickaxe = 544,
    BronzeDoubleAxe = 545,
    BronzeShovel = 546,
    BronzeSpear = 547,
    BronzeHammer = 548,
    BronzeLockpick = 549,
    BronzeKiteShield = 550,
    BronzeGauntlets = 551,
    BronzeGreaves = 552,
    BronzeBevor = 553,
    BronzeHelmet = 554,
    BronzeBoots = 555,
    BronzeChestArmor = 556,
    BronzeSword = 557,
    BronzeTongs = 558,
    BronzeArrow = 559,
    BronzeBullet = 560,
    BronzeArrowhead = 561,
    BronzeChest = 562,
    BronzeAnvil = 563,
    BronzeAxe = 564,
    BronzeHoe = 565,
    BronzeMortarAndPestle = 566,
    BronzeBakingTray = 567,
    BronzeRefinementTools = 568,
    BronzeKnife = 569,
    IceBrick = 570,
    SnowBrick = 571,
    IceWall = 572,
    IceFlooring = 573,
    SnowWall = 574,
    SnowFlooring = 575,
    CaliginousScrap = 576,
    MagicalExtract = 577,
    ShimmeringFibers = 578,
    MagicalTwine = 579,
    SandstoneHammer = 580,
    SandstoneBullet = 581,
    SandstoneAnvil = 582,
    SnowScarecrow = 583,
    FrozenFlesh = 584,
    AnimalTusk = 585,
    WhitePineCone = 586,
    WhitePineSeeds = 587,
    WhitePineNeedles = 588,
    FurCoat = 589,
    FurMittens = 590,
    FurBoots = 591,
    BirdDroppings = 592,
    HardenedCoil = 593,
    MagicalBinding = 594,
    ArmoredScales = 595,
    RawPangolinMeat = 596,
    CookedPangolinMeat = 597,
    ArmoredScaleBelt = 598,
    ArmoredScaleVest = 599,
    ArmoredScaleBoots = 600,
    ArmoredScaleCrown = 601,
    ArmoredScaleBevor = 602,
    ArmoredScaleCuisses = 603,
    ArmoredScaleGloves = 604,
    TinNeedle = 605,
    CopperNeedle = 606,
    WroughtIronNeedle = 607,
    IronNeedle = 608,
    BronzeNeedle = 609,
    TuftsOfTanglehead = 610,
    TangleheadSeeds = 611,
    WispInAGlassBottle = 612,
    AberrantWispInAGlassBottle = 613,
    WispInAClayJug = 614,
    AberrantWispInAClayJug = 615,
    WispInACoconutContainer = 616,
    AberrantWispInACoconutContainer = 617,
    WispInAWaterskin = 618,
    AberrantWispInAWaterskin = 619,
    StrawScarecrow = 620,
    CactusScarecrow = 621,
    ClothShirt = 622,
    ClothTrousers = 623,
    UnripePapaya = 624,
    Papaya = 625,
    PapayaSeeds = 626,
    PalapalaiFrond = 627,
    PalapalaiSpores = 628,
    ButtonMushroomSpores = 629,
    FlyAmanitaSpores = 630,
    BrambleCrown = 631,
    DarkBrambleCrown = 632,
    Cotton = 633,
    WaterskinOfSwampWater = 634,
    GlassBottleOfSwampWater = 635,
    ClayJugOfSwampWater = 636,
    CoconutContainerOfSwampWater = 637,
    WaterskinOfFilteredWater = 638,
    GlassBottleOfFilteredWater = 639,
    ClayJugOfFilteredWater = 640,
    CoconutContainerOfFilteredWater = 641,
    ClayFilter = 642,
    SandstoneAxe = 643,
    SandstoneShovel = 644,
    SharpSandstone = 645,
    SmoothSandstone = 646,
    SandstoneSpear = 647,
    SandstoneKnife = 648,
    SandstonePickaxe = 649,
    SandstoneHoe = 650,
    SandstoneDeadfall = 651,
    SandstoneSundial = 652,
    WoodenPlank = 653,
    WoodenWheel = 654,
    WoodenAxle = 655,
    WoodenMinecart = 656,
    WoodenRail = 657,
    WoodenTrack = 658,
    TinWheel = 659,
    TinAxle = 660,
    TinMinecart = 661,
    TinRail = 662,
    TinTrack = 663,
    CopperWheel = 664,
    CopperAxle = 665,
    CopperMinecart = 666,
    CopperRail = 667,
    CopperTrack = 668,
    WroughtIronWheel = 669,
    WroughtIronAxle = 670,
    WroughtIronMinecart = 671,
    WroughtIronRail = 672,
    WroughtIronTrack = 673,
    IronWheel = 674,
    IronAxle = 675,
    IronMinecart = 676,
    IronRail = 677,
    IronTrack = 678,
    BronzeWheel = 679,
    BronzeAxle = 680,
    BronzeMinecart = 681,
    BronzeRail = 682,
    BronzeTrack = 683,
    BasaltArrow = 684,
    BasaltArrowhead = 685,
    Basalt = 686,
    BasaltMortarAndPestle = 687,
    BasaltAxe = 688,
    BasaltShovel = 689,
    SharpBasalt = 690,
    SmoothBasalt = 691,
    BasaltSpear = 692,
    BasaltFlooring = 693,
    BasaltWall = 694,
    BasaltCampfire = 695,
    BasaltFurnace = 696,
    BasaltHammer = 697,
    BasaltAnvil = 698,
    BasaltDeadfall = 699,
    BasaltWaterStill = 700,
    BasaltSundial = 701,
    BasaltBullet = 702,
    BasaltKnife = 703,
    BasaltKiln = 704,
    BasaltPickaxe = 705,
    BasaltHoe = 706,
    BasaltSandCastFlask = 707,
    BasaltWell = 708,
    WoodenTrackGate = 709,
    MoldyScroll = 710,
    MysteriousParchment = 711,
    MagicalInscription = 712,
    CattailLeaves = 713,
    CattailShoots = 714,
    CattailFlowers = 715,
    CattailSeeds = 716,
    CobblestoneFlooring = 717,
    WaterLilies = 718,
    Mud = 719,
    SpikerushSheaths = 720,
    SpikerushSeeds = 721,
    WoodenBookcase = 722,
    GraniteLighthouse = 723,
    SandstoneLighthouse = 724,
    ClayLighthouse = 725,
    BasaltLighthouse = 726,
    WoodenCage = 727,
    FullWoodenCage = 728,
    TinCage = 729,
    FullTinCage = 730,
    CopperCage = 731,
    FullCopperCage = 732,
    WroughtIronCage = 733,
    FullWroughtIronCage = 734,
    IronCage = 735,
    FullIronCage = 736,
    BronzeCage = 737,
    FullBronzeCage = 738,
    Amber = 739,
    Tourmaline = 740,
    Topaz = 741,
    Opal = 742,
    Sapphire = 743,
    WoodGolemFigure = 744,
    ClayGolemFigure = 745,
    GraniteGolemFigure = 746,
    SandstoneGolemFigure = 747,
    BasaltGolemFigure = 748,
    AberrantWoodGolemFigure = 749,
    AberrantClayGolemFigure = 750,
    AberrantGraniteGolemFigure = 751,
    AberrantSandstoneGolemFigure = 752,
    AberrantBasaltGolemFigure = 753
}
export declare enum ItemTypeExtra {
    None = 999,
    TatteredMap_RolledUp = 1000,
    TatteredMap_Completed = 1001,
    WoodenBookcase_25 = 1002,
    WoodenBookcase_50 = 1003,
    WoodenBookcase_75 = 1004,
    WoodenBookcase_100 = 1005
}
export type DisplayableItemType = ItemType | ItemTypeExtra;
export declare enum ItemTag {
    None = 0,
    ShipperBoat = 1
}
export declare enum ItemCounter {
    None = 0,
    Repair = 1,
    Reinforce = 2,
    Refine = 3,
    Enhance = 4,
    En = 5,
    Upgrade = 6,
    Transmogrify = 7
}
export declare enum ItemTypeGroup {
    Invalid = 800,
    Sharpened = 801,
    Carbon = 802,
    Arrow = 803,
    CookingEquipment = 804,
    Fuel = 805,
    Medicinal = 806,
    Meat = 807,
    Bait = 808,
    Liquid = 809,
    Treasure = 810,
    Rock = 811,
    Compost = 812,
    Fabric = 813,
    Needle = 814,
    Cordage = 815,
    SharpenedRock = 816,
    Pole = 817,
    FireSource = 818,
    Repairing = 819,
    Tongs = 820,
    Hammer = 821,
    Preservative = 822,
    Reinforcement = 823,
    GlassBottleOfPotableWater = 824,
    Bullet = 825,
    Transmogrification = 826,
    WaterskinOfPotableWater = 827,
    Pulp = 828,
    ClayJugOfPotableWater = 829,
    Powder = 830,
    Equipment = 831,
    Firemaking = 832,
    Bedding = 833,
    Tool = 834,
    Weapon = 835,
    Health = 836,
    Travel = 837,
    Housing = 838,
    Heating = 839,
    Storage = 840,
    Trap = 841,
    RawMeat = 842,
    CookedMeat = 843,
    ContainerOfSeawater = 844,
    ContainerOfDesalinatedWater = 845,
    ContainerOfMedicinalWater = 846,
    ContainerOfPurifiedFreshWater = 847,
    ContainerOfUnpurifiedFreshWater = 848,
    Campfire = 849,
    Furnace = 850,
    Kiln = 851,
    WaterStill = 852,
    Anvil = 853,
    Seed = 854,
    Fruit = 855,
    Vegetable = 856,
    Tinder = 857,
    Bone = 858,
    Kindling = 859,
    MortarAndPestle = 860,
    ContainerOfMilk = 861,
    Book = 862,
    CoconutContainerOfPotableWater = 863,
    SandCastFlask = 864,
    Glue = 865,
    FireStarter = 866,
    Sand = 867,
    Untradable = 868,
    Cookware = 869,
    Refinement = 870,
    LitTorch = 871,
    LightDevice = 872,
    Enchantment = 873,
    Other = 874,
    CookedFood = 875,
    LitCandle = 876,
    LiquidContainer = 877,
    FrozenWater = 878,
    RawFish = 879,
    Insect = 880,
    Upgrading = 881,
    Enhancement = 882,
    FireExtinguisher = 883,
    WeaponThatFiresArrows = 884,
    WeaponThatFiresBullets = 885,
    BecomesFireSource = 886,
    Egg = 887,
    Alteration = 888,
    WispContainer = 889,
    Shirt = 890,
    Trousers = 891,
    Spine = 892,
    Spores = 893,
    Stick = 894,
    NotForSale = 895,
    ContainerOfSwampWater = 896,
    ContainerOfFilteredWater = 897,
    Sundial = 898,
    Axle = 899,
    Minecart = 900,
    Track = 901,
    EquippableMainHand = 902,
    EquippableOffHand = 903,
    EquippableHead = 904,
    EquippableNeck = 905,
    EquippableChest = 906,
    EquippableHands = 907,
    EquippableWaist = 908,
    EquippableLegs = 909,
    EquippableFeet = 910,
    EquippableBack = 911,
    Absorbing = 912,
    Exuding = 913,
    DualWield = 914,
    TwoHanded = 915,
    Boat = 916,
    Text = 917,
    All = 918,
    Last = 919
}
export {};
