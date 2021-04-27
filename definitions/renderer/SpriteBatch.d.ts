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
import ISpriteBatch from "renderer/ISpriteBatch";
import Vector2 from "utilities/math/Vector2";
export default class SpriteBatch implements ISpriteBatch {
    private readonly depthOffset;
    private readonly yOffset;
    private static shaderProgram;
    private static readonly spriteLength;
    capacity: number;
    texSprites: WebGLTexture;
    inverseSpriteTextureSize: Vector2;
    private count;
    private readonly buffer;
    private readonly colorBuffer;
    private array;
    private colorArray;
    private readonly gl;
    private begun;
    private readonly vertexArray;
    private _setup;
    static createShaders(gl: WebGL2RenderingContext): void;
    static linkShaders(): Promise<void>;
    constructor(gl: WebGL2RenderingContext, maxSprites: number, depthOffset?: number, yOffset?: number);
    setup(): void;
    dispose(): void;
    clear(): void;
    begin(): void;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    end(): number;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
