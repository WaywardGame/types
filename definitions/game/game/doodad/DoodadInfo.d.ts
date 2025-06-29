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
import type { DisplayableDoodadType } from "@wayward/game/game/doodad/IDoodad";
import type { TerrainModification, TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { TerrainDecoration } from "@wayward/game/renderer/Decorations";
import Vector2 from "@wayward/game/utilities/math/Vector2";
export default class DoodadInfo {
    readonly type: DisplayableDoodadType | TerrainType | TerrainDecoration | TerrainModification;
    readonly isTall: boolean;
    readonly isAnimated: boolean;
    topLeft: Vector2;
    topRight: Vector2;
    bottomLeft: Vector2;
    bottomRight: Vector2;
    constructor(type: DisplayableDoodadType | TerrainType | TerrainDecoration | TerrainModification, isTall: boolean, xOffset: number, yOffset: number, isAnimated: boolean);
}
