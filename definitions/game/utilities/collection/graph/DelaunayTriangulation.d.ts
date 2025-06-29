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
import Triangle from "@wayward/game/utilities/math/shapes/Triangle";
/**
 * https://en.wikipedia.org/wiki/Delaunay_triangulation
 * https://en.wikipedia.org/wiki/Bowyer%E2%80%93Watson_algorithm
 * todo: recode to be O(n log n) instead of O(n^2)
 */
export declare class DelaunayTriangulation {
    private readonly vertices;
    constructor(vertices: Vector2[]);
    triangulate(): Triangle[];
    /**
     * Ideally this would use a contex hull approach, but that's complex
     */
    private calculateSuperTriangle;
}
