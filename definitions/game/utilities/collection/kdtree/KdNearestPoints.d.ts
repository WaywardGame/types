/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export interface IKdNearestPoint {
    point: IVector2;
    distance: number;
}
export declare class KdNearestPoints {
    private readonly maxPoints;
    private readonly _points;
    private _updates;
    constructor(maxPoints: number);
    get points(): IKdNearestPoint[];
    get worstDistance(): number;
    update(point: IVector2, distance: number): void;
    private getPointId;
}
