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
export interface IVector2 {
    x: number;
    y: number;
}
export interface IVector3 extends IVector2 {
    z: number;
}
export declare function objectIsOrWasInTile(tile: IVector3, object: IVector3 & {
    fromX?: number;
    fromY?: number;
}): boolean;
