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
    ChallengeIcon = 0,
    Corpse = 1,
    Creature = 2,
    Doodad = 3,
    Equip = 4,
    GameOptionsIcon = 5,
    Hairstyle = 6,
    HelpArticleIcon = 7,
    Item = 8,
    MenuBarButtonIcon = 9,
    MilestoneIcon = 10,
    Music = 11,
    Overlay = 12,
    Sleep = 13,
    SoundEffect = 14,
    StatIcon = 15,
    StatusEffect = 16,
    StatusEffectIcon = 17,
    Terrain = 18,
    TerrainDecoration = 19,
    TerrainMound = 20,
    TerrainTilled = 21,
    TileEvent = 22,
    Vehicle = 23
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vector2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vector2;
}
