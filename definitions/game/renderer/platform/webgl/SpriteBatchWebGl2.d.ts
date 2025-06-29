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
import type { WebGlRendererContext } from "@wayward/game/renderer/platform/webgl/WebGlRendererContext";
import { SpriteBatchWebGlBase } from "@wayward/game/renderer/platform/webgl/SpriteBatchWebGlBase";
/**
 * SpriteBatch for WebGl 2
 */
export default class SpriteBatchWebGl2 extends SpriteBatchWebGlBase {
    protected readonly vertexArray: WebGLVertexArrayObject;
    constructor(context: WebGlRendererContext, id: string, capacity: number, depthOffset: number, yOffset: number, enableAlphaMultiplcation: boolean, enforceBeginAndEnd: boolean);
    setup(): void;
    delete(): void;
    bindBuffers(): void;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number, blend?: boolean): void;
}
