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
import type Island from "@wayward/game/game/island/Island";
import type { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import type { IExploredTileAlpha, IFieldOfViewPlatform } from "@wayward/game/renderer/fieldOfView/IFieldOfViewPlatform";
import type { WebGpuRendererContext } from "@wayward/game/renderer/platform/webgpu/WebGpuRendererContext";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
export declare class FieldOfViewWebGpu implements IFieldOfViewPlatform {
    constructor(context: WebGpuRendererContext, fieldOfView: FieldOfView);
    initialize(): void;
    delete(): void;
    setExploredAlpha(tiles: IExploredTileAlpha[]): void;
    compute(island: Island, worldLayer: WorldLayer, worldRenderer: WorldRenderer): void;
}
