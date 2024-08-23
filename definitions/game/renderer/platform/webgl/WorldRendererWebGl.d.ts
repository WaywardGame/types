/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { WebGlRendererContext } from "@wayward/game/renderer/platform/webgl/WebGlRendererContext";
import { TileLayerRendererWebGl } from "@wayward/game/renderer/platform/webgl/TileLayerRendererWebGl";
import type { WebGlContext } from "@wayward/game/renderer/platform/webgl/WebGlContext";
import type { TileLayerType } from "@wayward/game/renderer/world/IWorldRenderer";
import type { IWorldRendererPlatform } from "@wayward/game/renderer/world/IWorldRendererPlatform";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export declare class WorldRendererWebGl implements IWorldRendererPlatform {
    private readonly context;
    private readonly worldRenderer;
    private readonly textureShaderProgram;
    private readonly worldShaderProgram;
    private readonly fogShaderProgram;
    readonly positionTextureBuffer: WebGLBuffer;
    readonly positionBuffer: WebGLBuffer;
    readonly ditherTexture: WebGLTexture;
    private readonly compositeFramebuffer;
    private readonly compositeTexture;
    private readonly layerFramebuffer;
    private readonly layerTexture;
    private readonly depthRenderBuffer;
    private readonly fogFramebuffer;
    private readonly fogTexture;
    private readonly fogTextureStorage;
    private readonly vertexArraySingle;
    private readonly vertexArrayDouble;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    constructor(context: WebGlRendererContext, worldRenderer: WorldRenderer);
    delete(): void;
    syncViewport(viewport: IVector2): void;
    createTileLayer(type: TileLayerType, width: number, height: number, isFixedDepth?: boolean, yRenderOffset?: number, tileAnimationFrames?: number, syncDoodadAnimationFrames?: number): TileLayerRendererWebGl;
    render(): void;
    renderWorld(timeStamp: number, x: number, y: number, z: number): void;
}
