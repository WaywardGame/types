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
import type { SfxType } from "@wayward/game/audio/IAudio";
import type { IDecayTemperatureRange } from "@wayward/game/game/IGame";
import type { Quality } from "@wayward/game/game/IObject";
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import type { GrowingStage } from "@wayward/game/game/doodad/IDoodad";
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import type { SkillType } from "../entity/skill/ISkills";
import type { WaterType } from "@wayward/game/game/island/IIsland";
import type { IContainer, IMaybeContainer, ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import type { MapTile } from "@wayward/game/game/mapping/IMapTile";
import type { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type { ILeftOverTile } from "@wayward/game/game/tile/Terrains";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type { DistanceType } from "@wayward/game/utilities/math/Vector2";
import type { IColorFul, IRGB, IRGBA } from "@wayward/utilities/Color";
export interface ITerrainDescription extends IModdable {
    passable?: boolean;
    particles?: IRGB;
    /**
     * Bases the durability on an item type. Any item that has a SetDown action should have this set for the matching terrain type.
     */
    durability?: ItemType;
    water?: true;
    shallowWater?: true;
    freshWater?: boolean;
    swampWater?: boolean;
    seawater?: boolean;
    gather?: boolean;
    noLos?: boolean;
    flammable?: boolean;
    gatherSkillUse?: SkillType;
    sound?: SfxType;
    leftOvers?: ILeftOverTile[];
    baseTerrain?: TerrainType;
    terrainType?: TerrainType;
    /**
     * Set to true to prevent building things on the tile.
     * Or set it to a list of allowed doodad types that can be built on the tile.
     */
    preventBuilding?: boolean | Set<DoodadType>;
    isMountain?: boolean;
    background?: TerrainType;
    noBackground?: boolean;
    isOre?: boolean;
    animated?: boolean;
    tillable?: boolean;
    hasMound?: boolean;
    deepWater?: boolean;
    reduceRest?: boolean;
    noResting?: boolean;
    wet?: boolean;
    /**
     * Tile to create when consuming the tile (in the case of gathering/drinking water)
     */
    tileOnConsume?: OptionalDescriptions<BiomeType, TerrainType>;
    isMountainGround?: boolean;
    burnItem?: ItemType;
    ice?: boolean;
    renderOverOtherMountains?: boolean;
    /**
     * Update neighbors when the tile type is involved
     */
    updateNeighbors?: true;
    /**
     * Terrain that water tile becomes when dug up using the dig action.
     */
    waterTerrainOnDig?: TerrainType;
    /**
     * Terrain that a tile becomes when routed using the dig action.
     */
    waterTerrainOnRoute?: TerrainType;
    group?: TerrainTypeGroup[];
    /**
     *
     * Base version of the water used for tilemapping.
     */
    waterBaseType?: TerrainType;
    /**
     * The reversed or contaminated type that this water turns into.
     */
    contaminatedType?: OptionalDescriptions<WaterType, TerrainType>;
    /**
     * The temperature produced by this terrain. When not provided, uses `Temperature.Neutral`.
     */
    temperature?: number;
    /**
     * The water terrain type that is a step above, or a less deep version of itself (which has specific rules based on the biometype).
     */
    aboveType?: OptionalDescriptions<BiomeType, TerrainType>;
    decayTemperatureRange?: IDecayTemperatureRange;
    /**
     * Array of tile events that are spawned when terrain decays (or melts).
     */
    meltsInto?: TileEventType[];
    /**
     * Item that defines the decay amount when this doodad is melting.
     */
    meltFromItem?: ItemType;
    /**
     * Puddles will cool down tiles and create the following TerrainType on this tile.
     */
    cooledTile?: TerrainType;
    /**
     * The type of puddle it produces when splashed.
     */
    puddleType?: TileEventType;
    /**
     * The amount of civilization score to give when building this.
     */
    civilizationScore?: number;
    /**
     * When tilling this terrain, you will attempt to dig up the grass instead.
     */
    isGrass?: boolean;
    /**
     * When this tile dies via the "isGrass" property, this is what the tile turns into.
     */
    diesInto?: OptionalDescriptions<BiomeType, TerrainType>;
    /**
     * The tile to switch to when collapsing or opening up a cave entrance.
     */
    caveSwitch?: TerrainType;
    /**
     * is either a cave entrance or collapsed cave entrance. Used for multiple checks.
     */
    isCave?: boolean;
    /**
     * True if the terrain sprite is like a doodad
     */
    useDoodadLikeAdaptor?: boolean;
    /**
     * True if the terrain allows for sliding
     */
    isSlippery?: boolean;
    /**
     * Chance of slipping when there's puddles of water on it (amount is multiplied by the amount of puddles up to a maximum of three).
     */
    slipperyWhenWet?: number;
    /**
     * When digging this tile, can it be dug down to a maximum depth and show a visual?
     */
    canBeDug?: boolean;
    /**
     * If set, this tile will be illuminated in this color and alpha.
     */
    lightColor?: IRGBA;
}
export interface ITileOld {
    event?: TileEvent[];
}
export type ITileContainer = IContainer & IVector3;
export type IMaybeTileContainer = IMaybeContainer & IVector3;
export interface ITileData {
    type: TerrainType;
    minDur?: number;
    maxDur?: number;
    quality?: Quality;
    tilled?: boolean;
    step?: number;
    fishAvailable?: number;
    meltDecay?: number;
    weight?: number;
    magic?: MagicalPropertyManager;
    aestheticRandom?: number;
    disassembly?: Item[];
    ownerIdentifier?: string;
    renamed?: string | ISerializedTranslation | undefined;
    tradedFrom?: string[];
    /**
     * The times a tile has been dug (if it can be dug)
     */
    dug?: number;
}
export type ITileDataOld = Partial<ITileData> & {
    strength?: number;
    gfx?: number;
};
export declare enum TileTemplateType {
    WoodenHouses = 0,
    Pond = 1,
    CavePond = 2,
    Desert = 3,
    Beach = 4,
    Boat = 5,
    Lava = 6,
    Snow = 7,
    IceCap = 8,
    IceHouses = 9,
    SnowHouses = 10,
    AshCementHouses = 11,
    StoneHouses = 12,
    Railways = 13,
    GraniteLighthouse = 14,
    BasaltLighthouse = 15,
    FairyRings = 16,
    VolcanicCave = 17,
    WetlandsCave = 18,
    AridCave = 19
}
export interface ITemplate {
    mapTile?: MapTile;
    terrainTypes: Record<string, TerrainType>;
    terrain: string[];
    doodadTypes?: Record<string, DoodadType | ITemplateDoodad>;
    doodad?: string[];
    tilled?: boolean;
    /**
     * A decimal value, 0 for no degradation, 1 for 100% degradation (basically as if there was no template).
     */
    degrade?: number;
    /**
     * A decimal value, 0 for no doodad spawn chance, 1 for 100% doodad spawn chance.
     * Doodads that can spawn on each tile are set in the doodad description's "spawnOnWorldGen" property.
     */
    doodadSpawnChance?: number;
    /**
     * A decimal value, 0 for no item spawn chance, 1 for 100% item spawn chance.
     * Items that can spawn on each tile are set in the item description's "spawnOnWorldGen" property.
     */
    itemSpawnChance?: number;
    /**
     * A decimal value, 0 for no skeletal remains spawn chance, 1 for 100% skeletal remains spawn chance.
     * Skeletal remains will only spawn on flooring terrain types.
     */
    skeletalRemainsSpawnChance?: number;
    /**
     * Set to true to make sure this template overlaps any other template under it.
     * Useful for glaciers in specific since we don't want them merging with rocks/mountain faces.
     */
    overlap?: boolean;
}
export interface ITemplateDoodad {
    type: DoodadType;
    growingStages: GrowingStage[];
}
export interface IOverlayInfo extends Partial<IColorFul> {
    type: OverlayType;
    size?: number;
    offsetX?: number;
    offsetY?: number;
    spriteOffsetX?: number;
    spriteOffsetY?: number;
    alpha?: number;
}
export declare enum OverlayType {
    WalkDots = 0,
    Arrows = 1,
    FootPrints = 2,
    Target = 3,
    FacingTile = 4,
    Full = 5,
    QuestionMark = 6
}
export declare enum TerrainType {
    DeepSeawater = 0,
    Seawater = 1,
    ShallowSeawater = 2,
    DeepFreshWater = 3,
    FreshWater = 4,
    ShallowFreshWater = 5,
    Grass = 6,
    Gravel = 7,
    Dirt = 8,
    BeachSand = 9,
    Snow = 10,
    Swamp = 11,
    Clay = 12,
    Ash = 13,
    Granite = 14,
    GraniteWithIron = 15,
    GraniteWithTalc = 16,
    GraniteWithCoal = 17,
    GraniteWithLimestone = 18,
    GraniteFlooring = 19,
    Sandstone = 20,
    SandstoneFlooring = 21,
    SandstoneWithIron = 22,
    SandstoneWithNiter = 23,
    WoodenFlooring = 24,
    ClayFlooring = 25,
    CaveEntrance = 26,
    RedCarpet = 27,
    Lava = 28,
    FertileSoil = 29,
    GraniteWithCopper = 30,
    SandstoneWithCopper = 31,
    CoolingLava = 32,
    Obsidian = 33,
    DesertSand = 34,
    GraniteGround = 35,
    SandstoneGround = 36,
    AshCementFlooring = 37,
    GraniteWithSnow = 38,
    Glacier = 39,
    FreshWaterIce = 40,
    FreezingFreshWater = 41,
    SeawaterIce = 42,
    FreezingSeawater = 43,
    Void = 44,
    SandstoneWithTalc = 45,
    SandstoneWithLimestone = 46,
    GraniteWithTin = 47,
    SandstoneWithTin = 48,
    IceFlooring = 49,
    SnowFlooring = 50,
    Tanglehead = 51,
    DeepSwampWater = 52,
    SwampWater = 53,
    ShallowSwampWater = 54,
    FreezingSwampWater = 55,
    SwampWaterIce = 56,
    WoodenTrack = 57,
    TinTrack = 58,
    CopperTrack = 59,
    WroughtIronTrack = 60,
    IronTrack = 61,
    BronzeTrack = 62,
    CollapsedCaveEntrance = 63,
    Basalt = 64,
    BasaltWithIron = 65,
    BasaltWithTalc = 66,
    BasaltWithCoal = 67,
    BasaltWithLimestone = 68,
    BasaltFlooring = 69,
    BasaltGround = 70,
    CobblestoneFlooring = 71,
    Mud = 72,
    Spikerush = 73,
    SandstoneWithOpal = 74,
    GraniteWithTopaz = 75,
    BasaltWithSapphire = 76
}
export declare enum TerrainTypeGroup {
    Flooring = 0,
    Nonflammable = 1,
    Ice = 2
}
export declare enum TerrainModification {
    Fished = 0
}
export declare const trackTerrainTypes: Set<TerrainType>;
export declare const trackGateDoodadTypes: Set<DoodadType>;
export declare const DEFAULT_FISH_AVAILABLE = 6;
export declare const TILE_MAX_CAPACITY = 36;
export declare const TILE_MAX_DUG_AMOUNT = 8;
export declare enum FindPathRangeType {
    SameTile = 0,
    AdjacentTile = 1,
    Ranged = 2,
    InfiniteRange = 3
}
export type FindPathRange = FindPathRangeType | IFindPathRange;
export interface IFindPathRange {
    distance: number;
    noLoSRequirement?: true;
    /**
     * Defaults to {@link DistanceType.Euclidean}.
     *
     * (The measure of a straight line between points A and B, or what would cover a circular pattern on a grid.)
     */
    algorithm?: DistanceType;
}
