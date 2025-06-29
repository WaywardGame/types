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
import type { WebGpuRendererContext } from "@wayward/game/renderer/platform/webgpu/WebGpuRendererContext";
import { TileLayerRendererBase } from "@wayward/game/renderer/tile/TileLayerRendererBase";
import type { TileLayerType } from "@wayward/game/renderer/world/IWorldRenderer";
export declare class TileLayerRendererWebGpu extends TileLayerRendererBase {
    isFixedDepth: boolean;
    constructor(context: WebGpuRendererContext, type: TileLayerType, width: number, height: number);
    delete(): void;
    flushTile(x: number, y: number): void;
    flush(): void;
    render(x: number, y: number, subTileSize: number, tileScale: number, viewWidth: number, viewHeight: number, ticks: number): void;
}
