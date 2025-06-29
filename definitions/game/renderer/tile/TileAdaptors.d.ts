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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
export interface ITileAdaptation {
    TLFG: Vector2;
    TRFG: Vector2;
    BLFG: Vector2;
    BRFG: Vector2;
    TLBG: Vector2;
    TRBG: Vector2;
    BLBG: Vector2;
    BRBG: Vector2;
    overLayerFGTall?: true;
    TLFO?: Vector2;
    TRFO?: Vector2;
    BLFO?: Vector2;
    BRFO?: Vector2;
    overLayerBGTall?: true;
    TLBO?: Vector2;
    TRBO?: Vector2;
    BLBO?: Vector2;
    BRBO?: Vector2;
}
export interface ITileAdaptor {
    adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation, debug?: boolean): void;
}
export interface IDoodadAdaptor {
    adapt(worldLayer: WorldLayer, tileAtlas: TileAtlas, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
}
export declare function isDoor(doodad?: Doodad): boolean;
export declare const emptyTileAdaptor: ITileAdaptation;
