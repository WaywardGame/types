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
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { IOverlayInfo } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { RenderSource, UpdateRenderFlag } from "@wayward/game/renderer/IRenderer";
import type { Renderer } from "@wayward/game/renderer/Renderer";
import { RenderersNotifiers } from "@wayward/game/renderer/RenderersNotifiers";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import type { IRGB } from "@wayward/utilities/Color";
/**
 * Tracks active Renderer instances for the client
 */
export default class Renderers {
    readonly renderers: Set<Renderer>;
    readonly notifier: RenderersNotifiers;
    readonly particle: {
        create: (tile: Tile, particle: IRGB, count?: number, intensity?: number) => void;
    };
    getRenderersForObject(object: IVector4): Renderer[];
    getRenderersForIslandId(islandId?: IslandId): Renderer[];
    hasRendererForIsland(island: Island): boolean;
    add(renderer: Renderer): boolean;
    remove(renderer: Renderer): boolean;
    stop(): void;
    reinitialize(): Promise<void>;
    delete(): Promise<void>;
    computeSpritesInViewport(origin: IVector4): void;
    addOrUpdateOverlay(tile: Tile, overlay: IOverlayInfo): void;
    removeOverlay(tile: Tile, overlay: IOverlayInfo): void;
    updateView(origin: IVector4 | IslandId | undefined, source: RenderSource, updateFov?: boolean | UpdateRenderFlag.FieldOfView | UpdateRenderFlag.FieldOfViewSkipTransition): void;
    updateRender(origin: IVector4 | IslandId | undefined, source: RenderSource, flag: UpdateRenderFlag): void;
}
