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
import type Vector2 from "@wayward/game/utilities/math/Vector2";
import Circle from "@wayward/game/utilities/math/shapes/Circle";
import Edge from "@wayward/game/utilities/math/shapes/Edge";
/**
 * Triangle class.
 * Note: Don't change the values in the vertices after construction.
 */
export default class Triangle {
    readonly vertex1: Vector2;
    readonly vertex2: Vector2;
    readonly vertex3: Vector2;
    private _circumcenter?;
    constructor(vertex1: Vector2, vertex2: Vector2, vertex3: Vector2);
    toString(): string;
    get circumcenter(): Circle;
    get vertices(): [Vector2, Vector2, Vector2];
    get edges(): [Edge, Edge, Edge];
    get edgeAB(): Edge;
    get edgeBC(): Edge;
    get edgeCA(): Edge;
}
