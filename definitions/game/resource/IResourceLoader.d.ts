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
    Action = 0,
    AttackAnimation = 1,
    ChallengeIcon = 2,
    Corpse = 3,
    Creature = 4,
    DamageType = 5,
    Doodad = 6,
    Equip = 7,
    EquipSlot = 8,
    GameOptionsIcon = 9,
    Hairstyle = 10,
    HelpArticleIcon = 11,
    InfoIcon = 12,
    InputIcon = 13,
    Island = 14,
    IslandModifier = 15,
    Item = 16,
    Map = 17,
    MapTile = 18,
    MenuBarButtonIcon = 19,
    MilestoneIcon = 20,
    Music = 21,
    Notifier = 22,
    Overlay = 23,
    Pin = 24,
    Quality = 25,
    RecipeLevel = 26,
    Sleep = 27,
    SoundEffect = 28,
    StatIcon = 29,
    StatusEffectIcon = 30,
    StatusEffectOverlay = 31,
    Terrain = 32,
    TerrainDecoration = 33,
    TerrainMound = 34,
    TerrainTilled = 35,
    TileEvent = 36,
    Vehicle = 37
}
export interface IResourceContainer {
    tileAtlas: TileAtlas;
    spriteAtlas: SpriteAtlas;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vector2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vector2;
}
