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
import type { WebGlRendererContext } from "@wayward/game/renderer/platform/webgl/WebGlRendererContext";
import type { WebGlContext } from "@wayward/game/renderer/platform/webgl/WebGlContext";
import { TileLayerType } from "@wayward/game/renderer/world/IWorldRenderer";
import { TileLayerRendererBase } from "@wayward/game/renderer/tile/TileLayerRendererBase";
/**
 * Each tile in the wayward world is rendered as 4 subtiles (topleft, topright, bottomleft, bottomright).
 * The world consists of 3 tile layers (terrain, doodad, doodadOver).
 * Each subtile is a RGBA 32bit pixel representing a foreground and background tile.
 * Red,Green make up the x,y coordinate in the tilesheet of the foreground tile.
 * Blue,Alpha make up the x,y coordinate in the tilesheet of the background tile.
 * If Red and Green are both 0, the subtile foreground is not rendered.
 * If Blue and Alpha are both 0, the subtile background is not rendered.
 */
export declare class TileLayerRendererWebGl extends TileLayerRendererBase {
    private readonly context;
    private readonly positionBuffer;
    readonly isFixedDepth: boolean;
    private readonly yRenderOffset;
    private readonly tileAnimationFrames;
    private readonly syncDoodadAnimationFrames;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    private readonly texTileSprites;
    private readonly inverseTileSpriteTextureSize;
    private readonly tileShaderProgram;
    private readonly singleTileData;
    private readonly singleTileDataU8;
    private readonly singleTileDataU32;
    private readonly tileDataU32;
    private readonly texTiles;
    private readonly inverseTileDataTextureSize;
    private readonly vertexArray;
    constructor(context: WebGlRendererContext, type: TileLayerType, width: number, height: number, positionBuffer: WebGLBuffer, isFixedDepth?: boolean, yRenderOffset?: number, tileAnimationFrames?: number, syncDoodadAnimationFrames?: number);
    delete(): void;
    /**
     * Flushes a specific tile to the GPU.
     * This will do nothing if there are no changes to flush.
     */
    flushTile(x: number, y: number): void;
    /**
     * Flushes the entire tile layer to the GPU.
     * This will do nothing if there are no changes to flush.
     */
    flush(): void;
    render(x: number, y: number, subTileSize: number, tileScale: number, viewWidth: number, viewHeight: number, ticks: number): void;
}
