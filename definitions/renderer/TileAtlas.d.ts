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
import DoodadInfo from "game/doodad/DoodadInfo";
import { DoodadType } from "game/doodad/IDoodad";
import { ItemType } from "game/item/IItem";
import { TerrainType } from "game/tile/ITerrain";
import { TerrainDecoration } from "renderer/Decorations";
import ITileAtlas from "renderer/ITileAtlas";
import { TerrainTileInfo } from "renderer/TerrainTileInfo";
import Vector2 from "utilities/math/Vector2";
export declare enum TileType {
    Q2TopRightQ1TopLeft = 0,
    Q2TopLeft = 1,
    Q2BottomLeftQ3TopLeft = 2,
    Q3BottomLeft = 3,
    Q3BottomRightQ4BottomLeft = 4,
    Q4BottomRight = 5,
    Q1BottomRightQ4TopRight = 6,
    Q1TopRight = 7,
    Q4TopLeft = 8,
    Q1BottomLeft = 9,
    Q2BottomRight = 10,
    Q3TopRight = 11,
    CenterTopLeft = 12,
    CenterBottomLeft = 13,
    CenterBottomRight = 14,
    CenterTopRight = 15,
    CenterQ1TopRight = 16,
    CenterQ1TopLeft = 17,
    CenterQ1BottomLeft = 18,
    CenterQ1BottomRight = 19,
    CenterQ2TopRight = 20,
    CenterQ2TopLeft = 21,
    CenterQ2BottomLeft = 22,
    CenterQ2BottomRight = 23,
    CenterQ3TopRight = 24,
    CenterQ3TopLeft = 25,
    CenterQ3BottomLeft = 26,
    CenterQ3BottomRight = 27,
    CenterQ4TopRight = 28,
    CenterQ4TopLeft = 29,
    CenterQ4BottomLeft = 30,
    CenterQ4BottomRight = 31,
    Q1TopLeft = 32,
    Q1BottomRight = 33,
    Q2TopRight = 34,
    Q2BottomLeft = 35,
    Q3TopLeft = 36,
    Q3BottomRight = 37,
    Q4TopRight = 38,
    Q4BottomLeft = 39
}
export declare function rotateTileType90Deg(tileType: TileType, times: number): TileType;
export declare function getTileLoc(tileType: TileType, tileInfo: TerrainTileInfo, variation?: number): Vector2;
export default class TileAtlas implements ITileAtlas {
    terrain: OptionalDescriptions<TerrainType, TerrainTileInfo>;
    terrainTilled: OptionalDescriptions<TerrainType, TerrainTileInfo>;
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
    private baseWaterTypes;
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
    isFloor(type: TerrainType): boolean;
    shouldRenderOverMountainTypes(type: TerrainType): boolean;
    getBaseWaterType(type: TerrainType): TerrainType;
}
