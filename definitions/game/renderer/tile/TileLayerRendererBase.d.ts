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
import type { ITileLayerRendererPlatform } from "@wayward/game/renderer/tile/ITileLayerRendererPlatform";
import type { ITileAdaptation } from "@wayward/game/renderer/tile/TileAdaptors";
import { RenderLayerFlag, TileLayerType } from "@wayward/game/renderer/world/IWorldRenderer";
/**
 * Each tile in the wayward world is rendered as 4 subtiles (topleft, topright, bottomleft, bottomright).
 * The world consists of 3 tile layers (terrain, doodad, doodadOver).
 * Each subtile is a RGBA 32bit pixel representing a foreground and background tile.
 * Red,Green make up the x,y coordinate in the tilesheet of the foreground tile.
 * Blue,Alpha make up the x,y coordinate in the tilesheet of the background tile.
 * If Red and Green are both 0, the subtile foreground is not rendered.
 * If Blue and Alpha are both 0, the subtile background is not rendered.
 */
export declare abstract class TileLayerRendererBase implements ITileLayerRendererPlatform {
    readonly type: TileLayerType;
    protected readonly width: number;
    protected readonly height: number;
    /**
     * Flag for marking that there are changes that need to be rendered for specific tiles
     */
    protected readonly dirtyIndexes: Set<number>;
    /**
     * Allow overriding the tile layer ticks, used for animation frames
     */
    ticks?: number;
    readonly renderLayerFlag: RenderLayerFlag;
    protected readonly tileData: ArrayBuffer;
    protected readonly tileDataU8: Uint8Array;
    constructor(type: TileLayerType, width: number, height: number);
    abstract isFixedDepth: boolean;
    abstract delete(): void;
    abstract flushTile(x: number, y: number): void;
    abstract flush(): void;
    abstract render(x: number, y: number, subTileSize: number, tileScale: number, viewWidth: number, viewHeight: number, ticks: number): void;
    setLayer(dataIndex: number, tileAdaptation: ITileAdaptation): void;
    setForegroundLayer(dataIndex: number, tileAdaptation: ITileAdaptation, offset?: number): void;
    setBackgroundLayer(dataIndex: number, tileAdaptation: ITileAdaptation, offset?: number): void;
    setBackgroundToForegroundLayer(dataIndex: number, tileAdaptation: ITileAdaptation, offset?: number): void;
    clearLayer(dataIndex: number): void;
    clearForegroundLayer(dataIndex: number): void;
    clearBackgroundLayer(dataIndex: number): void;
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
}
