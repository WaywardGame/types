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
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import type { IDoodadAdaptor, ITileAdaptation } from "@wayward/game/renderer/tile/TileAdaptors";
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
export default class FenceTileAdaptor implements IDoodadAdaptor {
    adaptGate(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, doodadType: DoodadType, vertical: boolean, result: ITileAdaptation): void;
    adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
}
