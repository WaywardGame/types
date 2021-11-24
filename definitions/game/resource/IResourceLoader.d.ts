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
import type TileAtlas from "renderer/tile/atlas/TileAtlas";
import type SpriteAtlas from "resource/SpriteAtlas";
import type Vector2 from "utilities/math/Vector2";
export declare enum PathType {
    AttackAnimation = 0,
    ChallengeIcon = 1,
    Corpse = 2,
    Creature = 3,
    Doodad = 4,
    Equip = 5,
    GameOptionsIcon = 6,
    Hairstyle = 7,
    HelpArticleIcon = 8,
    InfoIcon = 9,
    Island = 10,
    IslandModifier = 11,
    Item = 12,
    Map = 13,
    MapTile = 14,
    MenuBarButtonIcon = 15,
    MilestoneIcon = 16,
    Music = 17,
    Notifier = 18,
    Overlay = 19,
    Pin = 20,
    Quality = 21,
    Sleep = 22,
    SoundEffect = 23,
    StatIcon = 24,
    StatusEffectIcon = 25,
    StatusEffectOverlay = 26,
    Terrain = 27,
    TerrainDecoration = 28,
    TerrainMound = 29,
    TerrainTilled = 30,
    TileEvent = 31,
    Vehicle = 32
}
export interface IResourceContainer {
    tileAtlas: TileAtlas;
    spriteAtlas: SpriteAtlas;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vector2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vector2;
}
