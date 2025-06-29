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
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
import type SpriteAtlas from "@wayward/game/resource/SpriteAtlas";
import type Vector2 from "@wayward/game/utilities/math/Vector2";
export interface IResourceContainer<TextureType = unknown> {
    tileAtlas: TileAtlas;
    tileTexture: TextureType;
    tileTextureSizeInversed: Vector2;
    spriteAtlas: SpriteAtlas;
    spriteTexture: TextureType;
    spriteTextureSizeInversed: Vector2;
}
