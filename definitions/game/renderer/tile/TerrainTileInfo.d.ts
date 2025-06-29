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
import Vector2 from "@wayward/game/utilities/math/Vector2";
export declare class TerrainTileInfo {
    readonly xOffset: number;
    readonly yOffset: number;
    readonly animated: boolean;
    readonly q1TopLeft: Vector2;
    readonly q1TopRight: Vector2;
    readonly q1BottomLeft: Vector2;
    readonly q1BottomRight: Vector2;
    readonly q2TopLeft: Vector2;
    readonly q2TopRight: Vector2;
    readonly q2BottomLeft: Vector2;
    readonly q2BottomRight: Vector2;
    readonly q3TopLeft: Vector2;
    readonly q3TopRight: Vector2;
    readonly q3BottomLeft: Vector2;
    readonly q3BottomRight: Vector2;
    readonly q4TopLeft: Vector2;
    readonly q4TopRight: Vector2;
    readonly q4BottomLeft: Vector2;
    readonly q4BottomRight: Vector2;
    readonly q2TopRightQ1TopLeft: Vector2[];
    readonly q2BottomLeftQ3TopLeft: Vector2[];
    readonly q1BottomRightQ4TopRight: Vector2[];
    readonly q3BottomRightQ4BottomLeft: Vector2[];
    readonly centerQ1TopLeft: Vector2;
    readonly centerQ1TopRight: Vector2;
    readonly centerQ1BottomLeft: Vector2;
    readonly centerQ1BottomRight: Vector2;
    readonly centerQ2TopLeft: Vector2;
    readonly centerQ2TopRight: Vector2;
    readonly centerQ2BottomLeft: Vector2;
    readonly centerQ2BottomRight: Vector2;
    readonly centerQ3TopLeft: Vector2;
    readonly centerQ3TopRight: Vector2;
    readonly centerQ3BottomLeft: Vector2;
    readonly centerQ3BottomRight: Vector2;
    readonly centerQ4TopLeft: Vector2;
    readonly centerQ4TopRight: Vector2;
    readonly centerQ4BottomLeft: Vector2;
    readonly centerQ4BottomRight: Vector2;
    readonly centerAllQuadrantsTopLeft: Vector2[];
    readonly centerAllQuadrantsTopRight: Vector2[];
    readonly centerAllQuadrantsBottomLeft: Vector2[];
    readonly centerAllQuadrantsBottomRight: Vector2[];
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
    readonly extendedInfo: TerrainTileInfo;
    constructor(xOffset: number, yOffset: number, animated: boolean);
}
