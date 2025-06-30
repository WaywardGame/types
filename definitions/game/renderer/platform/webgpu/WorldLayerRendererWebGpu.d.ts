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
import type ExploreMap from "@wayward/game/renderer/exploreMap/ExploreMap";
import type { WebGpuRendererContext } from "@wayward/game/renderer/platform/webgpu/WebGpuRendererContext";
import type { IWorldLayerRendererPlatform } from "@wayward/game/renderer/world/IWorldLayerRendererPlatform";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import type { WorldLayerRenderer } from "@wayward/game/renderer/world/WorldLayerRenderer";
export declare class WorldLayerRendererWebGpu implements IWorldLayerRendererPlatform {
    constructor(context: WebGpuRendererContext, worldLayerRenderer: WorldLayerRenderer);
    delete(): void;
    setWorldLayer(worldLayer: WorldLayer, exploreMap: ExploreMap, sizeChanged: boolean): void;
    updateTileLightBlock(x: number, y: number, value: number): void;
    updateTileLightBlockMap(lightBlockMap: Uint8Array): void;
}
