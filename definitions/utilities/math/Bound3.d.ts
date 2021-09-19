/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Vector2 from "utilities/math/Vector2";
export interface IBound3 {
    min: Vector2;
    max: Vector2;
    z: number;
}
export default class Bound3 implements IBound3 {
    min: Vector2;
    max: Vector2;
    z: number;
    static contains(bound: IBound3, x: number, y: number, z: number): boolean;
    static containsIgnoreZ(bound: IBound3, x: number, y: number): boolean;
    constructor(min: Vector2, max: Vector2, z: number);
}
