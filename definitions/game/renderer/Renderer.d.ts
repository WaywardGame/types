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
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { IOverlayInfo } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { IRendererContext } from "@wayward/game/renderer/context/IRendererContext";
import type { IRendererOrigin } from "@wayward/game/renderer/context/RendererOrigin";
import type { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import type { IRendererEvents } from "@wayward/game/renderer/IRenderer";
import { RenderSource, UpdateRenderFlag } from "@wayward/game/renderer/IRenderer";
import type { Notifier } from "@wayward/game/renderer/notifier/Notifier";
import type { ParticleSystem } from "@wayward/game/renderer/particle/ParticleSystem";
import { WebGlContext } from "@wayward/game/renderer/platform/webgl/WebGlContext";
import { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export declare class Renderer extends EventEmitter.Host<IRendererEvents> {
    private readonly createCanvasElement;
    readonly id: number;
    worldRenderer: WorldRenderer;
    private fadeInTime;
    private targetZoomLevel;
    private thumbnailResolve;
    private ambientLightLevelCache;
    private updateRendering;
    private animationTimer;
    private renderingEnabled;
    private lastRenderedZ;
    private readonly states;
    context: IRendererContext;
    canvasContext: CanvasRenderingContext2D | GPUCanvasContext;
    private readonly viewportSize;
    private viewportDevicePixelRatio;
    private loadedIsland?;
    private canvasElement;
    /**
     * Creates a WebGl context that can be used for rendering the game
     * @param id Context id
     * @param canvas The canvas
     * @param desiredWebGlVersion Desired webgl version. Defaults to 2
     * @param desiredPowerPreference Desired power preference
     * @returns
     */
    static createWebGlContext(id: number, canvas: HTMLCanvasElement, desiredWebGlVersion?: number, desiredPowerPreference?: WebGLPowerPreference): Promise<WebGlContext>;
    static create(createCanvasElement: (() => HTMLCanvasElement) | HTMLCanvasElement): Promise<Renderer>;
    private constructor();
    reinitialize(): Promise<void>;
    private initialize;
    private initializeWebGl;
    private initializeWebGpu;
    delete(reinitializing?: boolean): Promise<boolean>;
    get fieldOfView(): FieldOfView;
    get notifier(): Notifier;
    get particle(): ParticleSystem;
    get isFadingIn(): boolean;
    get isUpdatingThumbnail(): boolean;
    /**
     * The island the renderer is rendering.
     * Could be undefined if the renderer has not had it's origin set.
     */
    get island(): Island | undefined;
    /**
     * The island id the renderer is rendering.
     * Could be undefined if the renderer has not had it's origin set.
     */
    get islandId(): IslandId | undefined;
    start(): void;
    stop(): void;
    pushState(): void;
    popState(): void;
    setOrigin(origin: IRendererOrigin): void;
    /**
     * Loads the island into the renderer
     * @param island Island to load
     * @returns True when the island is loaded. False if the island was already loaded
     */
    private load;
    setViewportSize(width: number, height: number, forceUpdate?: boolean): boolean;
    getZoom(): number;
    addZoomLevel(amount: number): void;
    updateZoomLevel(): void;
    getCameraPosition(timeStamp: number): IVector2;
    getExactCameraPosition(timeStamp: number): Vector2;
    createFadeIn(duration?: number): void;
    /**
     * @returns a value between 0 and 1. 0 being full black
     */
    getBlackness(timeStamp: number): number;
    /**
     * Determines if the renderer cares about an update
     * based on the position of the update vs renderer origin
     */
    shouldUpdate(updateOrigin: IVector4 | IslandId | undefined, flag?: UpdateRenderFlag): boolean;
    updateRender(source: RenderSource, flag: UpdateRenderFlag): void;
    /**
     * Note: Don't inject here. This gets called ten million times. If you want to override this functionality,
     * use `calculateAmbientLightLevel`
     */
    getAmbientLightLevel(z: number): number;
    updateAmbientLightLevel(z: number): number;
    updateView(source: RenderSource, updateFov: boolean | UpdateRenderFlag.FieldOfView | UpdateRenderFlag.FieldOfViewSkipTransition): void;
    addOrUpdateOverlay(tile: Tile, overlay: IOverlayInfo): void;
    removeOverlay(tile: Tile, overlay: IOverlayInfo): void;
    updateThumbnail(): Promise<string | undefined>;
    computeSpritesInViewport(): void;
    private getFadeInProgress;
    private getZoomLevelProgress;
    private hasRenderFlag;
    private clearRenderFlag;
    private requestAnimationFrame;
    private cancelAnimationFrame;
    renderLoop(timeStamp: number, viewportOffsetX: number): void;
    /**
     * Game render loop.
     * Not executed for the host in dedicated servers.
     * Only executed for the primary renderer.
     */
    protected static gameRenderLoop: (timeStamp: number) => void;
    private render;
    private registerOriginEvents;
    private unregisterOriginEvents;
    private registerIslandEvents;
    private unregisterIslandEvents;
    private onOriginLoadedOnIsland;
    private onIslandUnloaded;
}
