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
import type WebGlCompiledProgram from "@wayward/game/renderer/platform/webgl/WebGlCompiledProgram";
import type { WebGlContext } from "@wayward/game/renderer/platform/webgl/WebGlContext";
import type { WebGlRendererContext } from "@wayward/game/renderer/platform/webgl/WebGlRendererContext";
import type { ISpriteBatch } from "@wayward/game/renderer/spriteBatch/ISpriteBatch";
import type Vector2 from "@wayward/game/utilities/math/Vector2";
export declare const dataLengthPerSprite = 8;
export declare const colorLengthPerSprite = 4;
/**
 * Base class for sprite batches
 */
export declare abstract class SpriteBatchWebGlBase implements ISpriteBatch {
    protected readonly context: WebGlRendererContext;
    readonly id: string;
    readonly capacity: number;
    protected readonly depthOffset: number;
    protected readonly yRenderOffset: number;
    protected readonly enableAlphaMultiplcation: boolean;
    protected readonly enforceBeginAndEnd: boolean;
    protected readonly shaderProgram: WebGlCompiledProgram;
    texSprites: WebGLTexture | undefined;
    inverseSpriteTextureSize: Vector2 | undefined;
    protected spriteCount: number;
    protected readonly texCordBuffer: WebGLBuffer;
    protected readonly dataBuffer: WebGLBuffer;
    protected dataArray: Float32Array;
    protected readonly colorBuffer: WebGLBuffer;
    protected colorArray: Uint8Array;
    protected begun: boolean;
    protected requiresSubpixels: boolean;
    protected _setup: boolean;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    constructor(context: WebGlRendererContext, id: string, capacity: number, depthOffset: number, yRenderOffset: number, enableAlphaMultiplcation: boolean, enforceBeginAndEnd: boolean);
    abstract setup(): void;
    protected abstract bindBuffers(): void;
    abstract render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
    delete(): void;
    begin(): void;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): number | undefined;
    update(index: number, tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    remove(index: number): boolean;
    /**
     * Binds sprites to be included in the next render
     * @returns number of sprites being rendered
     */
    end(): number;
}
