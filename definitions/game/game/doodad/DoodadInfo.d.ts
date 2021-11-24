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
import type { DoodadType } from "game/doodad/IDoodad";
import type { TerrainType } from "game/tile/ITerrain";
import type { TerrainDecoration } from "renderer/Decorations";
import Vector2 from "utilities/math/Vector2";
export default class DoodadInfo {
    type: DoodadType | TerrainType | TerrainDecoration;
    isTall: boolean;
    isAnimated: boolean;
    topLeft: Vector2;
    topRight: Vector2;
    bottomLeft: Vector2;
    bottomRight: Vector2;
    constructor(type: DoodadType | TerrainType | TerrainDecoration, isTall: boolean, xOffset: number, yOffset: number, isAnimated: boolean);
}