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
import type { IDoodadUpdate } from "renderer/world/IWorldLayer";
import { RenderLayerFlag } from "renderer/world/IWorldRenderer";
import * as TileAdaptor from "renderer/tile/TileAdaptors";
import TileLayer from "renderer/tile/TileLayer";
import type WorldLayer from "renderer/world/WorldLayer";
import type WorldRenderer from "renderer/world/WorldRenderer";
import type { IBound3 } from "utilities/math/Bound3";
import type RendererContext from "renderer/context/RendererContext";
export interface IWorldLayerRendererEvents {
    /**
     * Called when rendering the world
     * @returns Flags indicating what layers to render
     */
    getRenderFlags(): RenderLayerFlag;
    /**
     * Called when tile layers are created
     * Custom tile layers can be added to it
     */
    createTileLayers(context: RendererContext, width: number, height: number, positionBuffer: WebGLBuffer): void;
}
export default class WorldLayerRenderer extends EventEmitter.Host<IWorldLayerRendererEvents> {
    readonly context: RendererContext;
    protected readonly worldRenderer: WorldRenderer;
    private readonly positionBuffer;
    width: number;
    height: number;
    texLightBlock: WebGLTexture;
    texLightLevel: WebGLTexture;
    texExplored: WebGLTexture;
    private dirty;
    private dirtyTiles;
    private dirtyDoodads;
    private readonly dirtyDoodadUpdates;
    private readonly tileLayers;
    private readonly tileLayerMap;
    private terrainLayer;
    private terrainOverLayer;
    private terrainDecorationsLayer;
    private doodadLayer;
    private doodadOverLayer;
    private worldLayer;
    constructor(context: RendererContext, worldRenderer: WorldRenderer, positionBuffer: WebGLBuffer);
    delete(): void;
    private deleteTileLayers;
    reset(): void;
    setWorldLayer(worldLayer: WorldLayer): void;
    addTileLayer(tileLayer: TileLayer): void;
    updateAll(): void;
    updateDoodad(x: number, y: number, flushImmediate: boolean, { doodadDescription, doodadType, doodadInfo, doodadVariationX, doodadVariationY, terrainMasks }: IDoodadUpdate): void;
    renderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number, renderFixedDepth: boolean, flags?: RenderLayerFlag): void;
    getDataIndex(x: number, y: number): number;
    setLayer(layer: TileLayer, dataIndex: number, tileAdaptation: TileAdaptor.ITileAdaptation): void;
    setForegroundLayer(layer: TileLayer, dataIndex: number, tileAdaptation: TileAdaptor.ITileAdaptation, offset?: number): void;
    setBackgroundLayer(layer: TileLayer, dataIndex: number, tileAdaptation: TileAdaptor.ITileAdaptation, offset?: number): void;
    setBackgroundToForegroundLayer(layer: TileLayer, dataIndex: number, tileAdaptation: TileAdaptor.ITileAdaptation, offset?: number): void;
    clearLayer(layer: TileLayer, dataIndex: number): boolean;
    clearForegroundLayer(layer: TileLayer, dataIndex: number): boolean;
    clearBackgroundLayer(layer: TileLayer, dataIndex: number): boolean;
    /**
     * Ensures tiles in the view are rendered/flushed
     * Tiles & doodads are flushed the first time they are visible within the fov
     */
    ensureRendered({ min, max }: IBound3): void;
    updateTile(x: number, y: number, flushImmediate?: boolean, debug?: boolean): void;
    private computeDoodad;
    private computeTilled;
    private computeDecorations;
    private updateTileLightBlock;
    private flush;
}
