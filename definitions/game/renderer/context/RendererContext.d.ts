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
import type BaseRendererContext from "renderer/context/BaseRendererContext";
import type { IRendererOrigin } from "renderer/context/RendererOrigin";
import type Renderer from "renderer/Renderer";
import { PersistantSpriteBatch } from "renderer/spriteBatch/PersistantSpriteBatch";
import SpriteBatch1 from "renderer/spriteBatch/SpriteBatch1";
import SpriteBatch2 from "renderer/spriteBatch/SpriteBatch2";
import type WebGlContext from "renderer/WebGlContext";
import type { IVector2 } from "utilities/math/IVector";
export default class RendererContext {
    readonly renderer: Renderer;
    private readonly baseRendererContext;
    readonly gl: WebGL2RenderingContext;
    readonly webGlContext: WebGlContext;
    constructor(renderer: Renderer, baseRendererContext: BaseRendererContext);
    get isWebGl2(): boolean;
    get origin(): IRendererOrigin;
    get viewport(): IVector2;
    createSpriteBatch(capacity: number, depthOffset?: number, yOffset?: number, enableAlphaMultiplcation?: boolean, enforceBeginAndEnd?: boolean): SpriteBatch1 | SpriteBatch2;
    createPersistantSpriteBatch(depthOffset?: number, yOffset?: number, enableAlphaMultiplcation?: boolean): PersistantSpriteBatch;
}
