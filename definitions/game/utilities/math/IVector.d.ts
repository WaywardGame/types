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
import type Tile from "game/tile/Tile";
import type { WorldZ } from "game/WorldZ";
export interface IVector2 {
    x: number;
    y: number;
}
export interface IVector3 extends IVector2 {
    z: WorldZ;
}
export declare module IVector3 {
    function is(value: unknown): value is IVector3;
}
export declare function objectIsOrWasInTile(tile: Tile, object: IVector3 & {
    fromX?: number;
    fromY?: number;
}): boolean;
