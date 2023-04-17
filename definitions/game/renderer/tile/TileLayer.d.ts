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
import type RendererContext from "renderer/context/RendererContext";
import type WebGlContext from "renderer/WebGlContext";
import { RenderLayerFlag, TileLayerType } from "renderer/world/IWorldRenderer";
/**
 * Each tile in the wayward world is rendered as 4 subtiles (topleft, topright, bottomleft, bottomright).
 * The world consists of 3 tile layers (terrain, doodad, doodadOver).
 * Each subtile is a RGBA 32bit pixel representing a foreground and background tile.
 * Red,Green make up the x,y coordinate in the tilesheet of the foreground tile.
 * Blue,Alpha make up the x,y coordinate in the tilesheet of the background tile.
 * If Red and Green are both 0, the subtile foreground is not rendered.
 * If Blue and Alpha are both 0, the subtile background is not rendered.
 */
export default class TileLayer {
    private readonly context;
    readonly type: TileLayerType;
    private readonly width;
    private readonly height;
    readonly isFixedDepth: boolean;
    private readonly yRenderOffset;
    private readonly tileAnimationFrames;
    private readonly syncDoodadAnimationFrames;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    private readonly texTileSprites;
    private readonly inverseTileSpriteTextureSize;
    /**
     * Flag for marking that there are changes that need to be rendered
     */
    dirty: boolean;
    /**
     * Allow overriding the tile layer ticks, used for animation frames
     */
    ticks?: number;
    readonly renderLayerFlag: RenderLayerFlag;
    private readonly tileShaderProgram;
    private readonly singleTileData;
    private readonly singleTileDataU8;
    private readonly singleTileDataU32;
    private readonly tileData;
    private readonly tileDataU8;
    private readonly tileDataU32;
    private readonly texTiles;
    private readonly inverseTileDataTextureSize;
    private readonly vertexArray;
    constructor(context: RendererContext, type: TileLayerType, width: number, height: number, positionBuffer: WebGLBuffer, isFixedDepth?: boolean, yRenderOffset?: number, tileAnimationFrames?: number, syncDoodadAnimationFrames?: number);
    delete(): void;
    getTileTLFG(dataIndex: number): [number, number];
    setTileTLFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTRFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBLFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBRFG(dataIndex: number, tileX: number, tileY: number): void;
    getTileTLBG(dataIndex: number): [number, number];
    setTileTLBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTRBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBLBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBRBG(dataIndex: number, tileX: number, tileY: number): void;
    sendTileToGPU(x: number, y: number, gl: WebGL2RenderingContext): void;
    sendToGPU(gl: WebGL2RenderingContext): void;
    render(context: RendererContext, x: number, y: number, subTileSize: number, tileScale: number, viewWidth: number, viewHeight: number, ticks: number): void;
}
