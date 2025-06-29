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
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
export interface IWorldLayerRendererPlatform {
    delete(): void;
    setWorldLayer(worldLayer: WorldLayer, exploreMap: ExploreMap, sizeChanged: boolean): void;
    updateTileLightBlock(x: number, y: number, value: number): void;
    updateTileLightBlockMap(lightBlockMap: Uint8Array): void;
}
