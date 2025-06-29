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
import type { TileLayerType } from "@wayward/game/renderer/world/IWorldRenderer";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export interface IWorldRendererPlatform {
    delete(): void;
    syncViewport(viewport: IVector2): void;
    createTileLayer(type: TileLayerType, width: number, height: number, isFixedDepth?: boolean, yRenderOffset?: number, tileAnimationFrames?: number, syncDoodadAnimationFrames?: number): ITileLayerRendererPlatform;
    render(): void;
    renderWorld(timeStamp: number, x: number, y: number, z: number): void;
}
