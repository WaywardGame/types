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
import type { Renderer } from "@wayward/game/renderer/Renderer";
import type { IRendererOrigin } from "@wayward/game/renderer/context/RendererOrigin";
import type { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import type { IFieldOfViewPlatform } from "@wayward/game/renderer/fieldOfView/IFieldOfViewPlatform";
import type { IParticleRendererPlatform } from "@wayward/game/renderer/particle/IParticleRendererPlatform";
import type { WebGlRendererContext } from "@wayward/game/renderer/platform/webgl/WebGlRendererContext";
import type { WebGpuRendererContext } from "@wayward/game/renderer/platform/webgpu/WebGpuRendererContext";
import type { IResourceContainer } from "@wayward/game/renderer/resources/IResourceContainer";
import type { ISpriteBatch } from "@wayward/game/renderer/spriteBatch/ISpriteBatch";
import type { PersistantSpriteBatch } from "@wayward/game/renderer/spriteBatch/PersistantSpriteBatch";
import type { IWorldLayerRendererPlatform } from "@wayward/game/renderer/world/IWorldLayerRendererPlatform";
import type { IWorldRendererPlatform } from "@wayward/game/renderer/world/IWorldRendererPlatform";
import type { WorldLayerRenderer } from "@wayward/game/renderer/world/WorldLayerRenderer";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export interface IRendererContext {
    readonly canvas: HTMLCanvasElement;
    readonly renderer: Renderer;
    origin: IRendererOrigin;
    readonly maybeOrigin: IRendererOrigin | undefined;
    readonly viewport: IVector2;
    readonly resourceContainer: IResourceContainer | undefined;
    readonly asWebGl: WebGlRendererContext | undefined;
    readonly asWebGpu: WebGpuRendererContext | undefined;
    createFieldOfViewPlatform(fieldOfView: FieldOfView): IFieldOfViewPlatform;
    createWorldRenderer(worldRenderer: WorldRenderer): IWorldRendererPlatform;
    createWorldLayerRenderer(worldLayerRenderer: WorldLayerRenderer): IWorldLayerRendererPlatform;
    createParticleRenderer(maxParticles: number, positionSizeData: Float32Array, colorData: Uint8Array): IParticleRendererPlatform;
    createSpriteBatch(id: string, capacity: number, depthOffset?: number, yOffset?: number, enableAlphaMultiplcation?: boolean, enforceBeginAndEnd?: boolean): ISpriteBatch;
    createPersistantSpriteBatch(id: string, depthOffset?: number, yOffset?: number, enableAlphaMultiplcation?: boolean): PersistantSpriteBatch;
    prepareViewportRender(viewportOffsetX: number, rendererWidth: number, canvasHeight: number, post?: boolean): void;
    render(timeStamp: number, renderersOrder: Set<Renderer>): void;
}
