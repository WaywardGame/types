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
import { SpritePackerBase } from "@wayward/game/renderer/resources/SpritePackerBase";
import type { ISpriteContainer } from "@wayward/game/renderer/resources/ISpritePacker";
import type { SpriteAtlasNode } from "@wayward/game/renderer/resources/SpriteAtlasNode";
export declare class SpritePackerWebGl extends SpritePackerBase<WebGLTexture> {
    private readonly gl;
    readonly texture: WebGLTexture;
    constructor(gl: WebGL2RenderingContext, size: number, addNullSprite: boolean, packLargeToSmall?: boolean);
    delete(): void;
    protected insertSpriteIntoTexture(node: SpriteAtlasNode, spriteContainer: ISpriteContainer): void;
}
