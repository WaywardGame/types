/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { DoodadType } from "game/doodad/IDoodad";
import type WorldLayer from "renderer/world/WorldLayer";
import type { IDoodadAdaptor, ITileAdaptation } from "renderer/tile/TileAdaptors";
import type TileAtlas from "renderer/tile/atlas/TileAtlas";
export default class Fence implements IDoodadAdaptor {
    adaptGate(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, doodadType: DoodadType, vertical: boolean, result: ITileAdaptation): void;
    adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
}
