/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IImageOverrideDescription } from "mod/IModInfo";
import Vector2 from "utilities/math/Vector2";
export interface IResourceLoader {
    initialize(gl: WebGL2RenderingContext, container: IResourceContainer): void;
    loadResources(container?: IResourceContainer): Promise<void>;
    takeLoadingSlot(callback: () => void): void;
    getImageOverride(src: string): Partial<IImageOverrideDescription> | undefined;
    updateImageOverrides(): void;
    releaseLoadingSlot(): void;
}
export default IResourceLoader;
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
    Item = 9,
    MenuBarButtonIcon = 10,
    MilestoneIcon = 11,
    Music = 12,
    Overlay = 13,
    Sleep = 14,
    SoundEffect = 15,
    StatIcon = 16,
    StatusEffect = 17,
    StatusEffectIcon = 18,
    Terrain = 19,
    TerrainDecoration = 20,
    TerrainMound = 21,
    TerrainTilled = 22,
    TileEvent = 23,
    Vehicle = 24
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vector2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vector2;
}
