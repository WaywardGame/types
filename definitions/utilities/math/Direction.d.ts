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
import Vector3 from "utilities/math/Vector3";
export declare enum Direction {
    None = -1,
    East = 0,
    North = 1,
    West = 2,
    South = 3
}
export declare module Direction {
    const DIRECTIONS: Direction[];
    const CARDINALS: Direction[];
    const OPPOSITES: Record<Direction, Direction>;
    function vector(direction: Direction): Vector2;
    function vector(direction: Direction, z: number): Vector3;
    const VECTORS: Record<Direction, Vector2>;
    const HORIZONTAL: Record<Direction, boolean>;
    const VERTICAL: Record<Direction, boolean>;
}
