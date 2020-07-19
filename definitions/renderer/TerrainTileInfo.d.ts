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
import Vector2 from "utilities/math/Vector2";
export declare class TerrainTileInfo {
    q1TopLeft: Vector2;
    q1TopRight: Vector2;
    q1BottomLeft: Vector2;
    q1BottomRight: Vector2;
    q2TopLeft: Vector2;
    q2TopRight: Vector2;
    q2BottomLeft: Vector2;
    q2BottomRight: Vector2;
    q3TopLeft: Vector2;
    q3TopRight: Vector2;
    q3BottomLeft: Vector2;
    q3BottomRight: Vector2;
    q4TopLeft: Vector2;
    q4TopRight: Vector2;
    q4BottomLeft: Vector2;
    q4BottomRight: Vector2;
    q2TopRightQ1TopLeft: Vector2[];
    q2BottomLeftQ3TopLeft: Vector2[];
    q1BottomRightQ4TopRight: Vector2[];
    q3BottomRightQ4BottomLeft: Vector2[];
    centerQ1TopLeft: Vector2;
    centerQ1TopRight: Vector2;
    centerQ1BottomLeft: Vector2;
    centerQ1BottomRight: Vector2;
    centerQ2TopLeft: Vector2;
    centerQ2TopRight: Vector2;
    centerQ2BottomLeft: Vector2;
    centerQ2BottomRight: Vector2;
    centerQ3TopLeft: Vector2;
    centerQ3TopRight: Vector2;
    centerQ3BottomLeft: Vector2;
    centerQ3BottomRight: Vector2;
    centerQ4TopLeft: Vector2;
    centerQ4TopRight: Vector2;
    centerQ4BottomLeft: Vector2;
    centerQ4BottomRight: Vector2;
    centerAllQuadrantsTopLeft: Vector2[];
    centerAllQuadrantsTopRight: Vector2[];
    centerAllQuadrantsBottomLeft: Vector2[];
    centerAllQuadrantsBottomRight: Vector2[];
    animated: boolean;
    constructor(xOffset: number, yOffset: number, animated: boolean);
    getCenterTopLeft(variation: number): Vector2;
    getCenterTopRight(variation: number): Vector2;
    getCenterBottomLeft(variation: number): Vector2;
    getCenterBottomRight(variation: number): Vector2;
    getLeft(variation: number): Vector2;
    getRight(variation: number): Vector2;
    getTop(variation: number): Vector2;
    getBottom(variation: number): Vector2;
}
export declare class MountainTileInfo extends TerrainTileInfo {
    extendedInfo: TerrainTileInfo;
    constructor(xOffset: number, yOffset: number, animated: boolean);
}
