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
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
export default class Edge<T extends Vector2 = Vector2> {
    readonly vertex1: T;
    readonly vertex2: T;
    /**
     * Note: this method does not care about the "direction" of the Edge (vertex order does not matter)
     */
    static equals<T extends Vector2>(edge1: Edge<T>, edge2: Edge<T>): boolean;
    private _distance?;
    constructor(vertex1: T, vertex2: T);
    toString(): string;
    /**
     * Distance between the vertices
     */
    get distance(): number;
    get comparisonStrings(): string[];
    equals(edge: Edge<T>): boolean;
    endpointEquals(vertex: Vector2): boolean;
    floor(): this;
    ceil(): this;
    /**
     * Gets points along a line. The points will be rounded to the nearest integer
     * https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
     */
    bresenham(includeEndpoints: boolean): IVector2[];
}
