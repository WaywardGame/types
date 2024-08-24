/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ITileAdaptation } from "@wayward/game/renderer/tile/TileAdaptors";
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
export default class FishedTileAdaptor {
    static adapt(tileAtlas: TileAtlas, fishAvailable: number, result: ITileAdaptation): boolean;
}