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
export declare enum Direction {
    None = -1,
    East = 0,
    North = 1,
    West = 2,
    South = 3,
    Northeast = 4,
    Northwest = 5,
    Southeast = 6,
    Southwest = 7
}
export declare namespace Direction {
    type CardinalNames = "East" | "North" | "West" | "South";
    type Cardinal = (typeof CARDINALS)[number];
    type Ordinal = (typeof ORDINALS)[number];
    type Valid = Cardinal | Ordinal;
    const CARDINALS_AND_NONE: readonly [Direction.None, Direction.East, Direction.North, Direction.West, Direction.South];
    const CARDINALS: readonly [Direction.East, Direction.North, Direction.West, Direction.South];
    const ORDINALS: readonly [Direction.Northwest, Direction.Northeast, Direction.Southeast, Direction.Southwest];
    const DIRECTIONS: readonly [Direction.East, Direction.North, Direction.West, Direction.South, Direction.Northwest, Direction.Northeast, Direction.Southeast, Direction.Southwest];
    const NEXT_CARDINAL: {
        1: Direction;
        0: Direction;
        3: Direction;
        2: Direction;
    };
    function isCardinal(value: unknown): value is Cardinal;
    function isOrdinal(value: unknown): value is Ordinal;
    function isValid(value: unknown): value is Valid;
    function get(vector: IVector2): Direction;
    function getByDirections(north: boolean, east: boolean, south: boolean, west: boolean): Direction;
    const OPPOSITES: {
        [-1]: Direction.None;
        0: Direction.West;
        1: Direction.South;
        2: Direction.East;
        3: Direction.North;
        4: Direction.Southwest;
        5: Direction.Southeast;
        6: Direction.Northwest;
        7: Direction.Northeast;
    };
    /**
     * `0` = East
     */
    function radians(direction: Direction): number;
    /**
     * `0` = East
     */
    function degrees(direction: Direction): number;
    /**
     * `0` = East
     */
    function fromRadians(rad: number): Direction.Cardinal;
    /**
     * `0` = East
     */
    function fromDegrees(deg: number): Direction.Cardinal;
    function asCardinal(direction?: Direction): Direction.Cardinal | undefined;
    const HORIZONTAL: Readonly<Record<Direction, boolean>>;
    const VERTICAL: Readonly<Record<Direction, boolean>>;
}
