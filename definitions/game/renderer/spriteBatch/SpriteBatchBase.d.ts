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
import type CompiledProgram from "renderer/CompiledProgram";
import type WebGlContext from "renderer/WebGlContext";
import type RendererContext from "renderer/context/RendererContext";
import type ISpriteBatch from "renderer/spriteBatch/ISpriteBatch";
import type Vector2 from "utilities/math/Vector2";
export declare const dataLengthPerSprite = 8;
export declare const colorLengthPerSprite = 4;
/**
 * Base class for sprite batches
 */
export declare abstract class SpriteBatchBase implements ISpriteBatch {
    protected readonly context: RendererContext;
    readonly capacity: number;
    protected readonly depthOffset: number;
    protected readonly yOffset: number;
    protected readonly enableAlphaMultiplcation: boolean;
    protected readonly enforceBeginAndEnd: boolean;
    protected readonly shaderProgram: CompiledProgram;
    texSprites: WebGLTexture | undefined;
    inverseSpriteTextureSize: Vector2 | undefined;
    protected spriteCount: number;
    protected readonly texCordBuffer: WebGLBuffer;
    protected readonly dataBuffer: WebGLBuffer;
    protected dataArray: Float32Array;
    protected readonly colorBuffer: WebGLBuffer;
    protected colorArray: Uint8Array;
    protected begun: boolean;
    protected _setup: boolean;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    constructor(context: RendererContext, capacity: number, depthOffset: number, yOffset: number, enableAlphaMultiplcation: boolean, enforceBeginAndEnd: boolean);
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
