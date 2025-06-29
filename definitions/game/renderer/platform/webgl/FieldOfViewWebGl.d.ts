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
import type Island from "@wayward/game/game/island/Island";
import type { WebGlRendererContext } from "@wayward/game/renderer/platform/webgl/WebGlRendererContext";
import type { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import type { IExploredTileAlpha, IFieldOfViewPlatform } from "@wayward/game/renderer/fieldOfView/IFieldOfViewPlatform";
import type WebGlCompiledProgram from "@wayward/game/renderer/platform/webgl/WebGlCompiledProgram";
import type { WebGlContext } from "@wayward/game/renderer/platform/webgl/WebGlContext";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
export declare class FieldOfViewWebGl implements IFieldOfViewPlatform {
    protected readonly context: WebGlRendererContext;
    private readonly fieldOfView;
    hBlurProgram: WebGlCompiledProgram;
    private vBlurProgram;
    private shaderProgram;
    private framebuffer1;
    private framebuffer2;
    private texBlurStorage;
    private texLight01;
    private texLight02;
    private viewQuadBuffer;
    private viewQuadVertexArray;
    texLight: WebGLTexture | undefined;
    texLightOld: WebGLTexture | undefined;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    constructor(context: WebGlRendererContext, fieldOfView: FieldOfView);
    initialize(): void;
    delete(): void;
    /**
     * Sets the alpha of a tile in the explored data
     */
    setExploredAlpha(tiles: IExploredTileAlpha[]): void;
    compute(island: Island, worldLayer: WorldLayer, worldRenderer: WorldRenderer): void;
}
