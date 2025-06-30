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
import type Edge from "@wayward/game/utilities/math/shapes/Edge";
/**
 * Vector that also has edges & some extra data.
 * This should be used with graph data structures.
 */
export declare class Vertex<T> extends Vector2 {
    readonly data: T;
    readonly edges: Array<Edge<Vertex<T>>>;
    constructor(x: number, y: number, data: T);
    toString(): string;
}
