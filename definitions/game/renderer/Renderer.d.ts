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
import EventEmitter from "event/EventEmitter";
import type { IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { IOverlayInfo } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
import type { IRendererOrigin } from "renderer/context/RendererOrigin";
import type { IRendererEvents } from "renderer/IRenderer";
import { RenderSource, UpdateRenderFlag } from "renderer/IRenderer";
import WebGlContext from "renderer/WebGlContext";
import WorldRenderer from "renderer/world/WorldRenderer";
import type { IVector2 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
import type { IVector4 } from "utilities/math/Vector4";
export default class Renderer extends EventEmitter.Host<IRendererEvents> {
    private readonly canvasElement;
    readonly id: number;
    worldRenderer: WorldRenderer;
    private fadeInTime;
    private targetZoomLevel;
    private thumbnailResolve;
    private ambientLightLevelCache;
    private updateRendering;
    private animationTimer;
    private renderingEnabled;
    private rendered;
    private readonly states;
    private readonly context;
    private canvasContext;
    private readonly viewportSize;
    private loadedIsland?;
    /**
     * Creates a WebGl context that can be used for rendering the game
     * @param canvas The canvas
     * @param desiredWebGlVersion Desired webgl version. Defaults to 2
     * @param desiredPowerPreference Desired power preference
     * @returns
     */
    static createWebGlContext(canvas: HTMLCanvasElement, desiredWebGlVersion?: number, desiredPowerPreference?: WebGLPowerPreference): Promise<WebGlContext>;
    constructor(canvasElement: HTMLCanvasElement);
    reinitialize(): Promise<void>;
    private initialize;
    delete(reinitializing?: boolean): Promise<boolean>;
    get fieldOfView(): import("./fieldOfView/FieldOfView").default;
    get notifier(): import("./notifier/Notifier").default;
    get particle(): import("./particle/ParticleSystem").default;
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
    setViewportSize(width: number, height: number): void;
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
    shouldUpdate(updateOrigin: IVector4 | undefined): boolean;
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
    update(timeStamp: number): void;
    computeSpritesInViewport(): void;
    private getFadeInProgress;
    private getZoomLevelProgress;
    private hasRenderFlag;
    private clearRenderFlag;
    private requestAnimationFrame;
    private cancelAnimationFrame;
    protected renderLoop(timeStamp: number, viewportOffsetX: number): void;
    /**
     * Game render loop.
     * Not executed for the host in dedicated servers.
     * Only executed for the primary renderer.
     */
    protected static gameRenderLoop: (timeStamp: number) => void;
    private render;
    private shouldUpdateWorldRender;
    private registerOriginEvents;
    private unregisterOriginEvents;
    private registerIslandEvents;
    private unregisterIslandEvents;
    private onOriginLoadedOnIsland;
    private onIslandUnloaded;
}
