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
import type { IRendererOrigin } from "renderer/context/RendererOrigin";
import type WebGlContext from "renderer/WebGlContext";
import type { IVector2 } from "utilities/math/IVector";
export default class BaseRendererContext {
    readonly webGlContext: WebGlContext;
    readonly gl: WebGL2RenderingContext;
    readonly viewport: IVector2;
    private _origin;
    constructor(webGlContext: WebGlContext);
    get maybeOrigin(): IRendererOrigin | undefined;
    get origin(): IRendererOrigin;
    set origin(origin: IRendererOrigin);
    setWebGlContext(webGlContext: WebGlContext): void;
}
