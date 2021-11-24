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
import type Island from "game/island/Island";
import type { IRendererOrigin } from "renderer/context/RendererOrigin";
import type { IRendererEvents } from "renderer/IRenderer";
import { RenderSource, UpdateRenderFlag } from "renderer/IRenderer";
import WebGlContext from "renderer/WebGlContext";
import WorldRenderer from "renderer/world/WorldRenderer";
import type { IVector2 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
export default class Renderer extends EventEmitter.Host<IRendererEvents> {
    readonly id: number;
    readonly worldRenderer: WorldRenderer;
    private fadeInTime;
    private thumbnailResolve?;
    private ambientLightLevelCache;
    private updateRendering;
    private animationTimer;
    private renderingEnabled;
    private readonly context;
    /**
     * Creates a WebGl context that can be used for rendering the game
     * @param canvas The html canvas
     * @param desiredWebGlVersion Desired webgl version. Defaults to 2
     * @param desiredPowerPreference Desired power preference
     * @returns
     */
    static createWebGlContext(canvas: HTMLCanvasElement, desiredWebGlVersion?: number, desiredPowerPreference?: WebGLPowerPreference): Promise<WebGlContext>;
    constructor(webGlContext: WebGlContext, origin: IRendererOrigin);
    delete(): void;
    get fieldOfView(): import("./fieldOfView/FieldOfView").default;
    get notifier(): import("./notifier/Notifier").default;
    get particle(): import("./particle/Particle").default;
    get isFadingIn(): boolean;
    get isUpdatingThumbnail(): boolean;
    start(): void;
    stop(): void;
    setOrigin(origin: IRendererOrigin): void;
    load(island: Island): void;
    setViewport(view: Vector2): void;
    getZoom(): number;
    addZoomLevel(amount: number): void;
    updateZoomLevel(): void;
    getCameraPosition(): IVector2;
    getExactCameraPosition(): Vector2;
    createFadeIn(duration?: number): void;
    getFadeInProgress(timeStamp: number): number;
    getBlackness(timeStamp: number): number;
    updateRender(source: RenderSource, flag: UpdateRenderFlag): void;
    hasRenderFlag(flag: UpdateRenderFlag): boolean;
    clearRenderFlag(flag: UpdateRenderFlag): void;
    requestAnimationFrame(_source: RenderSource): void;
    cancelAnimationFrame(): void;
    /**
     * Note: Don't inject here. This gets called ten million times. If you want to override this functionality,
     * use `calculateAmbientLightLevel`
     */
    getAmbientLightLevel(z: number): number;
    updateAmbientLightLevel(z: number): number;
    updateView(source: RenderSource, updateFov: boolean, computeSpritesNow: boolean): void;
    updateThumbnail(): Promise<boolean>;
    update(timeStamp: number): void;
    computeSpritesInViewport(): void;
    computeSpritesInViewportImmediately(): void;
    /**
     * Game render loop
     * Not executed for the host in dedicated servers
     */
    gameRenderLoop: (timeStamp: number) => void;
    render(timeStamp: number, renderPosition: IVector2): void;
    private shouldUpdateWorldRender;
}