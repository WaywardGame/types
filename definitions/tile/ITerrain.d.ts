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
import { SfxType } from "audio/IAudio";
import Doodad from "doodad/Doodad";
import { DoodadType, GrowingStage } from "doodad/IDoodad";
import Corpse from "entity/creature/corpse/Corpse";
import Creature from "entity/creature/Creature";
import { SkillType } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import { Quality } from "game/IObject";
import { MapTile } from "game/mapping/IMapTile";
import { IContainer, ItemType } from "item/IItem";
import { IModdable } from "mod/ModRegistry";
import TileEvent from "tile/TileEvent";
import { IRGB } from "utilities/Color";
import { IVector3 } from "utilities/math/IVector";
import { ILeftOverTile } from "./Terrains";
export interface ITerrainDescription extends IModdable {
    passable?: boolean;
    particles?: IRGB;
    durability?: number;
    water?: boolean;
    regathered?: boolean;
    shallowWater?: boolean;
    freshWater?: boolean;
    gather?: boolean;
    noGfxSwitch?: boolean;
    noLos?: boolean;
    flammable?: boolean;
    gatherSkillUse?: SkillType;
    sound?: SfxType;
    leftOvers?: ILeftOverTile[];
    baseTerrain?: TerrainType;
    terrainType?: TerrainType;
    doodad?: DoodadType;
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
    tileOnConsume?: TerrainType;
    isMountainGround?: boolean;
    burnItem?: ItemType;
    ice?: boolean;
    renderOverOtherMountains?: boolean;
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
     * Base version of the water. Type is used for mapping and when the tile becomes when contaminated
     */
    waterBaseType?: TerrainType;
    /**
     * The temperature produced by this terrain. When not provided, uses `Temperature.Neutral`.
     */
    temperature?: number;
    /**
     * The water terrain type that is a step above, or a less deep version of itself.
     */
    aboveType?: TerrainType;
}
export interface ITile extends Partial<ITileContainer> {
    corpses?: Corpse[];
    creature?: Creature;
    data: number;
    doodad?: Doodad;
    events?: TileEvent[];
    npc?: NPC;
    overlays?: IOverlayInfo[];
    quality?: Quality;
}
export interface ITileOld {
    event?: TileEvent[];
}
export declare type ITileArray = Record<number, ITile>;
export declare type ITileContainer = IContainer & IVector3;
export interface ITileData {
    type: TerrainType;
    minDur?: number;
    maxDur?: number;
    quality?: Quality;
    gfx?: number;
    tilled?: boolean;
    step?: number;
    fishAvailable?: number;
}
export declare type ITileDataOld = Partial<ITileData> & {
    strength?: number;
};
export declare enum TileTemplateType {
    House = 0,
    Pond = 1,
    CavePond = 2,
    Desert = 3,
    Beach = 4,
    Boat = 5,
    Lava = 6,
    Snow = 7,
    IceCap = 8,
    IceHouses = 9,
    SnowHouses = 10
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
}
export interface ITemplateDoodad {
    type: DoodadType;
    growingStages: GrowingStage[];
}
export interface IOverlayInfo {
    type: OverlayType;
    size?: number;
    offsetX?: number;
    offsetY?: number;
    spriteOffsetX?: number;
    spriteOffsetY?: number;
    red?: number;
    green?: number;
    blue?: number;
    alpha?: number;
}
export declare enum OverlayType {
    WalkDots = 0,
    Arrows = 1,
    FootPrints = 2,
    Target = 3,
    FacingTile = 4
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
    Rocks = 14,
    RocksWithIron = 15,
    RocksWithTalc = 16,
    RocksWithCoal = 17,
    RocksWithLimestone = 18,
    CobblestoneFlooring = 19,
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
    RocksWithCopper = 30,
    SandstoneWithCopper = 31,
    CoolingLava = 32,
    Obsidian = 33,
    DesertSand = 34,
    RockGround = 35,
    SandstoneGround = 36,
    AshCementFlooring = 37,
    RocksWithSnow = 38,
    Glacier = 39,
    FreshWaterIce = 40,
    FreezingFreshWater = 41,
    SeawaterIce = 42,
    FreezingSeawater = 43,
    Void = 44,
    SandstoneWithTalc = 45,
    SandstoneWithLimestone = 46,
    RocksWithTin = 47,
    SandstoneWithTin = 48,
    IceFlooring = 49,
    SnowFlooring = 50
}
export declare enum TerrainTypeGroup {
    Flooring = 0
}
