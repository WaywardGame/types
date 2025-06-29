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
import type { IRendererOrigin } from "@wayward/game/renderer/context/RendererOrigin";
import type { Renderer } from "@wayward/game/renderer/Renderer";
import { PersistantSpriteBatch } from "@wayward/game/renderer/spriteBatch/PersistantSpriteBatch";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import type { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import type { WorldLayerRenderer } from "@wayward/game/renderer/world/WorldLayerRenderer";
import type { IFieldOfViewPlatform } from "@wayward/game/renderer/fieldOfView/IFieldOfViewPlatform";
import type { IWorldLayerRendererPlatform } from "@wayward/game/renderer/world/IWorldLayerRendererPlatform";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type { IWorldRendererPlatform } from "@wayward/game/renderer/world/IWorldRendererPlatform";
import type { IRendererContext } from "@wayward/game/renderer/context/IRendererContext";
import type { ISpriteBatch } from "@wayward/game/renderer/spriteBatch/ISpriteBatch";
import type { IParticleRendererPlatform } from "@wayward/game/renderer/particle/IParticleRendererPlatform";
import type { IResourceContainer } from "@wayward/game/renderer/resources/IResourceContainer";
import ResourceLoader from "@wayward/game/resource/ResourceLoader";
export declare class WebGpuRendererContext implements IRendererContext {
    readonly renderer: Renderer;
    readonly device: GPUDevice;
    readonly canvasContext: GPUCanvasContext;
    readonly presentationFormat: GPUTextureFormat;
    readonly canvas: HTMLCanvasElement;
    readonly viewport: IVector2;
    private _origin;
    readonly resourceLoader: ResourceLoader;
    constructor(renderer: Renderer, device: GPUDevice, canvasContext: GPUCanvasContext, presentationFormat: GPUTextureFormat);
    get asWebGl(): undefined;
    get asWebGpu(): WebGpuRendererContext;
    get resourceContainer(): IResourceContainer<GPUTexture> | undefined;
    get origin(): IRendererOrigin;
    set origin(origin: IRendererOrigin);
    get maybeOrigin(): IRendererOrigin | undefined;
    createFieldOfViewPlatform(fieldOfView: FieldOfView): IFieldOfViewPlatform;
    createWorldRenderer(worldRenderer: WorldRenderer): IWorldRendererPlatform;
    createWorldLayerRenderer(worldLayerRenderer: WorldLayerRenderer): IWorldLayerRendererPlatform;
    createParticleRenderer(maxParticles: number, positionSizeData: Float32Array, colorData: Uint8Array): IParticleRendererPlatform;
    createSpriteBatch(id: string, capacity: number, depthOffset?: number, yOffset?: number, enableAlphaMultiplcation?: boolean, enforceBeginAndEnd?: boolean): ISpriteBatch;
    createPersistantSpriteBatch(id: string, depthOffset?: number, yOffset?: number, enableAlphaMultiplcation?: boolean): PersistantSpriteBatch;
    prepareViewportRender(viewportOffsetX: number, rendererWidth: number, canvasHeight: number, post?: boolean): void;
    /**
     * Called for the primary renderer
     */
    render(timeStamp: number, renderersOrder: Set<Renderer>): void;
    createVertexBuffer(data: Float32Array): GPUBuffer;
    createIndexBuffer(data: Uint16Array): GPUBuffer;
    createUniformBuffer(data: Float32Array): GPUBuffer;
}
