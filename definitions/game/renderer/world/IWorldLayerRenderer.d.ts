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
import type { RenderLayerFlag } from "@wayward/game/renderer/world/IWorldRenderer";
import type { IWorldRendererPlatform } from "@wayward/game/renderer/world/IWorldRendererPlatform";
export declare const jitRenderingExtraRenderRange = 2;
export declare const jitRenderingMaxTileUpdates = 4096;
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
    createTileLayers(worldRendererPlatform: IWorldRendererPlatform): void;
}
