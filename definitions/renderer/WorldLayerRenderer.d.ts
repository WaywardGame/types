/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import DoodadInfo from "doodad/DoodadInfo";
import { DoodadType, IDoodadDescription } from "doodad/IDoodad";
import EventEmitter from "event/EventEmitter";
import { IWorldLayer, TerrainMask } from "renderer/IWorldLayer";
import IWorldRenderer, { RenderLayerFlag } from "renderer/IWorldRenderer";
import * as TileAdaptor from "renderer/TileAdaptors";
import TileLayer from "renderer/TileLayer";
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
    createTileLayers(width: number, height: number, gl: WebGL2RenderingContext, positionBuffer: WebGLBuffer): void;
}
export default class WorldLayerRenderer extends EventEmitter.Host<IWorldLayerRendererEvents> {
    readonly gl: WebGL2RenderingContext;
    protected renderer: IWorldRenderer;
    private readonly worldLayer;
    width: number;
    height: number;
    texLightBlock: WebGLTexture;
    texLightLevel: WebGLTexture;
    texExplored: WebGLTexture;
    private dirty;
    private readonly tileLayers;
    private readonly tileLayerMap;
    private readonly terrainLayer;
    private readonly terrainOverLayer;
    private readonly terrainDecorationsLayer;
    private readonly doodadLayer;
    private readonly doodadOverLayer;
    constructor(gl: WebGL2RenderingContext, renderer: IWorldRenderer, worldLayer: IWorldLayer, width: number, height: number, positionBuffer: WebGLBuffer);
    addTileLayer(tileLayer: TileLayer): void;
    updateAll(): void;
    setDoodad(x: number, y: number, doodadDescription: IDoodadDescription | undefined, doodad: DoodadType | undefined, doodadInfo: DoodadInfo | undefined, variationX: number, variationY: number, hasGraphicVariation: boolean, terrainMasks: TerrainMask, flushImmediate?: boolean): void;
    renderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number, renderFixedDepth: boolean, flags?: RenderLayerFlag): void;
    getDataIndex(x: number, y: number): number;
    setLayer(layer: TileLayer, dataIndex: number, tileAdaptation: TileAdaptor.ITileAdaptation): void;
    setForegroundLayer(layer: TileLayer, dataIndex: number, tileAdaptation: TileAdaptor.ITileAdaptation, offset?: number): void;
    setBackgroundLayer(layer: TileLayer, dataIndex: number, tileAdaptation: TileAdaptor.ITileAdaptation, offset?: number): void;
    setBackgroundToForegroundLayer(layer: TileLayer, dataIndex: number, tileAdaptation: TileAdaptor.ITileAdaptation, offset?: number): void;
    clearLayer(layer: TileLayer, dataIndex: number): boolean;
    clearForegroundLayer(layer: TileLayer, dataIndex: number): boolean;
    clearBackgroundLayer(layer: TileLayer, dataIndex: number): boolean;
    private computeTile;
    private computeDoodad;
    private computeTilled;
    private computeDecorations;
    private updateTileLightBlock;
    private flush;
}
