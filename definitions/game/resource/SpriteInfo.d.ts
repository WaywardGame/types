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
import type { ISpriteInfo } from "@wayward/game/renderer/ISpriteInfo";
import type Vector2 from "@wayward/game/utilities/math/Vector2";
export default class SpriteInfo implements ISpriteInfo {
    texCoord: Vector2;
    texWidth: number;
    texHeight: number;
    texOffsetX: number;
    texOffsetY: number;
    animated?: boolean | undefined;
    constructor(texCoord: Vector2, texWidth: number, texHeight: number, texOffsetX: number, texOffsetY: number, animated?: boolean | undefined);
}
