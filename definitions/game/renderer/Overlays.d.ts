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
import type { IHasImagePath } from "@wayward/game/game/IObject";
import type { OverlayType } from "@wayward/game/game/tile/ITerrain";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
export interface IOverlayDescription extends IModdable, IHasImagePath {
}
export declare const overlayDescriptions: Map<OverlayType, IOverlayDescription>;
