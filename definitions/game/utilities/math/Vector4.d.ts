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
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import Vector3 from "@wayward/game/utilities/math/Vector3";
export interface IVector4 extends IVector3 {
    readonly islandId: IslandId;
}
export default class Vector4 extends Vector3 implements IVector4 {
    readonly islandId: IslandId;
    constructor(islandId: IslandId, x: number, y: number, z: number);
}
