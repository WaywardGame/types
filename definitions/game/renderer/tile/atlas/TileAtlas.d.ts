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
import type { BiomeType } from "game/biome/IBiome";
import type DoodadInfo from "game/doodad/DoodadInfo";
import type { DoodadType } from "game/doodad/IDoodad";
import type { ItemType } from "game/item/IItem";
import { TerrainType } from "game/tile/ITerrain";
import type { TerrainDecoration } from "renderer/Decorations";
import type { TerrainTileInfo } from "renderer/tile/TerrainTileInfo";
import { TileType } from "renderer/tile/atlas/ITileAtlas";
import type Vector2 from "utilities/math/Vector2";
export default class TileAtlas {
    private readonly terrain;
    private readonly terrainTilled;
    terrainDecoration: OptionalDescriptions<TerrainDecoration, DoodadInfo>;
    doodads: OptionalDescriptions<DoodadType, DoodadInfo>;
    doodadItems: OptionalDescriptions<ItemType, DoodadInfo>;
    mounds: OptionalDescriptions<TerrainType, DoodadInfo>;
    private mountainTypes;
    private mountainGroundTypes;
    private oreTypes;
    private renderOverMountainTypes;
    private waterTypes;
    private iceTypes;
    private freshWaterTypes;
    private swampWaterTypes;
    private baseWaterTypes;
    getTerrain(terrainType: TerrainType, biomeType: BiomeType | undefined): TerrainTileInfo | undefined;
    getTerrainTilled(terrainType: TerrainType, biomeType: BiomeType | undefined): TerrainTileInfo | undefined;
    setTerrain(terrainType: TerrainType, terrainTileInfo: TerrainTileInfo, biomeType: BiomeType | undefined): void;
    setTerrainTilled(terrainType: TerrainType, terrainTileInfo: TerrainTileInfo, biomeType: BiomeType | undefined): void;
    generateLookups(): void;
    isMountain(type: TerrainType): boolean;
    isMountainGround(type: TerrainType): boolean;
    isOre(type: TerrainType): boolean;
    isLava(type: TerrainType): boolean;
    isWaterOrIce(type: TerrainType): boolean;
    isWater(type: TerrainType): boolean;
    isFreezingWater(type: TerrainType): boolean;
    isIce(type: TerrainType): boolean;
    isFreshWater(type: TerrainType): boolean;
    isSwampWater(type: TerrainType): boolean;
    isFloor(type: TerrainType): boolean;
    isTrack(type: TerrainType): boolean;
    shouldRenderOverMountainTypes(type: TerrainType): boolean;
    getBaseWaterType(type: TerrainType): TerrainType;
    /**
     * note: variation is an integer from 0 to 3.
     */
    getTileLoc(tileType: TileType, tileInfo: TerrainTileInfo, variation?: number): Vector2;
    rotateTileType90Deg(tileType: TileType, times: number): TileType;
    private getIndex;
}
