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
import type { ITileAdaptation } from "@wayward/game/renderer/tile/TileAdaptors";
import type { RenderLayerFlag, TileLayerType } from "@wayward/game/renderer/world/IWorldRenderer";
export interface ITileLayerRendererPlatform {
    readonly type: TileLayerType;
    readonly isFixedDepth: boolean;
    readonly renderLayerFlag: RenderLayerFlag;
    ticks?: number;
    delete(): void;
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
