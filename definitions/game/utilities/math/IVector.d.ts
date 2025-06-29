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
import type WorldZ from "@wayward/utilities/game/WorldZ";
export interface IVector2 {
    x: number;
    y: number;
}
export declare namespace IVector2 {
    function hash(v2: IVector2): number;
}
export interface IVector3 extends IVector2 {
    z: WorldZ;
}
export declare namespace IVector3 {
    function is(value: unknown): value is IVector3;
}
