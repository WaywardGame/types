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
export default class Arc {
    readonly center: IVector2;
    readonly distance: number;
    readonly startAngle: number;
    readonly endAngle: number;
    constructor(center: IVector2, distance: number, startAngle: number, endAngle: number);
    intersectsTile(tileX: number, tileY: number): boolean;
}
