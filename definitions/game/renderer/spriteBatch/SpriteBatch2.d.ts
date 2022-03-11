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
import type ISpriteBatch from "renderer/spriteBatch/ISpriteBatch";
import type Vector2 from "utilities/math/Vector2";
import type WebGlContext from "renderer/WebGlContext";
import type RendererContext from "renderer/context/RendererContext";
/**
 * SpriteBatch for WebGl 2
 */
export default class SpriteBatch2 implements ISpriteBatch {
    private readonly context;
    readonly capacity: number;
    private readonly depthOffset;
    private readonly yOffset;
    private readonly shaderProgram;
    texSprites: WebGLTexture | undefined;
    inverseSpriteTextureSize: Vector2 | undefined;
    private spriteCount;
    private readonly texCordBuffer;
    private readonly dataBuffer;
    private dataArray;
    private readonly colorBuffer;
    private colorArray;
    private begun;
    private readonly vertexArray;
    private _setup;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    constructor(context: RendererContext, capacity: number, depthOffset?: number, yOffset?: number);
    setup(): void;
    delete(): void;
    clear(): void;
    begin(): void;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    /**
     * Binds sprites to be included in the next render
     * @returns number of sprites being rendered
     */
    end(): number;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
