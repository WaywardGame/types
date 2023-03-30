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
import type RendererContext from "renderer/context/RendererContext";
import { SpriteBatchBase } from "renderer/spriteBatch/SpriteBatchBase";
/**
 * SpriteBatch for WebGl 2
 */
export default class SpriteBatch2 extends SpriteBatchBase {
    protected readonly vertexArray: WebGLVertexArrayObject;
    constructor(context: RendererContext, capacity: number, depthOffset: number, yOffset: number, enableAlphaMultiplcation: boolean, enforceBeginAndEnd: boolean);
    setup(): void;
    delete(): void;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
