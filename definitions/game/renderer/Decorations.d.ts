/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import type { ITileAdaptation } from "@wayward/game/renderer/tile/TileAdaptors";
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
export declare enum TerrainDecoration {
    Grass = 0,
    BeachSand = 1,
    DesertSand = 2,
    Dirt = 3,
    Lava = 4,
    CoolingLava = 5,
    Obsidian = 6,
    Snow = 7,
    Swamp = 8,
    Ash = 9,
    Clay = 10,
    Gravel = 11,
    GraniteGround = 12,
    SandstoneGround = 13,
    FreshWaterIce = 14,
    SeawaterIce = 15,
    Tanglehead = 16,
    BasaltGround = 17,
    ShallowSwampWater = 18,
    Spikerush = 19
}
export declare enum TerrainDecorationStatus {
    None = 0,
    Normal = 1,
    Animated = 2
}
export interface ITerrainDecorationBase extends IModdable {
    terrainTypes: TerrainType[];
    animated?: boolean;
    adapt: AdaptionFunction | ITerrainDecorationVariationAdaption;
}
export interface ITerrainDecorationVariationAdaption {
    /**
     * The number of different sprites that could be used for this decoration. For instance, if your image is 3-tiles wide (48x16)
     * and you set this number to 3, it would choose between any of the three tiles randomly for each decorated tile.
     * For animated decorations, this number is the 16height rows the image. If your image is 128x48, this should be 3.
     */
    variationCount: number;
    /**
     * Decorations can't be made less rare, but they can be made more rare with this property.
     * When not provided, decorated tiles use a rarity of 1.0 (always). 0.0 means never. It's linear.
     */
    rarity?: number;
    /**
     * True if it's animated - 8 animation frames - width should be 128 (16 width per frame)
     */
    animated?: boolean;
    /**
     * This decoration can only appear if it's surrounded by tiles of the same type (all 8 directions).
     */
    innerExclusive?: boolean;
}
/**
 * Takes an x, y, and z coordinate and a randomly-generated "variation index", and returns an `ITileAdaptation`
 * object for the tile. How the variation index is used to generate the `ITileAdaptation` will be implementation-specific.
 * @param variationIndex A random integer between 1 (inclusive) and 65536 (exclusive)
 */
export type AdaptionFunction = (worldLayer: WorldLayer, x: number, y: number, terrain: TerrainType, adaptation: ITileAdaptation, variationIndex: number) => TerrainDecorationStatus;
export interface ITerrainDecoration extends ITerrainDecorationBase, IModdable {
    type: TerrainDecoration;
}
export declare const terrainDecorations: Descriptions<TerrainDecoration, ITerrainDecorationBase>;
declare class TerrainDecorations {
    private cachedDecorations;
    has(terrain: TerrainType): boolean;
    adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, tileX: number, tileY: number, terrain: TerrainType, adaptation: ITileAdaptation, variation: number): TerrainDecorationStatus;
    protected cacheDecorations(): void;
}
declare const _default: TerrainDecorations;
export default _default;
