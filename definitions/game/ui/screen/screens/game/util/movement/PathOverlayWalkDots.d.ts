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
import type { IOverlayInfo } from "@wayward/game/game/tile/ITerrain";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export default function (i: number, len: number, pos: IVector2, lastPos: IVector2, nextPos: IVector2 | undefined, isPreviewPath: boolean | undefined): IOverlayInfo | undefined;
