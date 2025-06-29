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
import type Triangle from "@wayward/game/utilities/math/shapes/Triangle";
export default class Circle {
    readonly center: Vector2;
    readonly radius: number;
    /**
     * Intersection of the perpendicular bisectors
     * https://www.cuemath.com/geometry/circumcenter/
     */
    static getTriangleCircumcenter(triangle: Triangle): Circle;
    static equals(circle1: Circle, circle2: Circle): boolean;
    readonly squaredRadius: number;
    constructor(center: Vector2, radius: number);
    toString(): string;
    equals(circle: Circle): boolean;
    isVectorInside(point: Vector2): boolean;
}
