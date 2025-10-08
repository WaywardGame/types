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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { IWell } from "@wayward/game/game/island/IIsland";
import { type ILiquidGather } from "@wayward/game/game/item/IItem";
import type { ITerrainDescription } from "@wayward/game/game/tile/ITerrain";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
export interface IGatherLiquidFromWispCanUse extends IActionUsable {
    type: "wisp";
    liquidGather: ILiquidGather;
    wisp: Creature;
}
export interface IGatherLiquidFromGoatCanUse extends IActionUsable {
    type: "goat";
    tile: Tile;
    liquidGather: ILiquidGather;
    goat: Creature;
}
export interface IGatherLiquidFromWaterStillCanUse extends IActionUsable {
    type: "waterStill";
    liquidGather: ILiquidGather;
    terrainDescription: ITerrainDescription;
    fromWaterStill: Doodad;
}
export interface IGatherLiquidFromWellCanUse extends IActionUsable {
    type: "well";
    liquidGather: ILiquidGather;
    terrainDescription: ITerrainDescription;
    fromWell: Doodad;
    fromWellData: IWell;
}
export interface IGatherLiquidFromLiquidCanUse extends IActionUsable {
    type: "liquid";
    liquidGather: ILiquidGather;
    terrainDescription: ITerrainDescription;
    liquidGatherType: keyof ILiquidGather;
    tileType: TerrainType;
    tile: Tile;
}
export type IGatherLiquidCanUse = IGatherLiquidFromWispCanUse | IGatherLiquidFromGoatCanUse | IGatherLiquidFromWaterStillCanUse | IGatherLiquidFromWellCanUse | IGatherLiquidFromLiquidCanUse;
declare const _default: Action<[ActionArgument.ItemNearby], ActionType.GatherLiquid, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IGatherLiquidCanUse, [import("../../../item/Item").default]>;
export default _default;
