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
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export interface IFieldOfViewPlatform {
    initialize(): void;
    delete(): void;
    setExploredAlpha(tiles: IExploredTileAlpha[]): void;
    compute(island: Island, worldLayer: WorldLayer, worldRenderer: WorldRenderer): void;
}
export interface IExploredTileAlpha extends IVector2 {
    alpha: Uint8Array;
}
