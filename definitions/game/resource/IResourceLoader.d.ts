/*!
 * Copyright 2011-2023 Unlok
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
    ChangelogChangeType = 3,
    Corpse = 4,
    Creature = 5,
    DamageType = 6,
    Doodad = 7,
    Equip = 8,
    EquipSlot = 9,
    GameOptionsIcon = 10,
    Hairstyle = 11,
    HelpArticleIcon = 12,
    InfoIcon = 13,
    InputIcon = 14,
    Island = 15,
    IslandModifier = 16,
    Item = 17,
    Map = 18,
    MapTile = 19,
    MenuBarButtonIcon = 20,
    MilestoneIcon = 21,
    Music = 22,
    Notifier = 23,
    Overlay = 24,
    Pin = 25,
    Quality = 26,
    RecipeLevel = 27,
    Sleep = 28,
    SoundEffect = 29,
    StatIcon = 30,
    StatusEffectIcon = 31,
    StatusEffectOverlay = 32,
    Terrain = 33,
    TerrainDecoration = 34,
    TerrainMound = 35,
    TerrainTilled = 36,
    TileEvent = 37,
    Vehicle = 38,
    Website = 39
}
export interface IResourceContainer {
    tileAtlas: TileAtlas;
    spriteAtlas: SpriteAtlas;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vector2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vector2;
}
