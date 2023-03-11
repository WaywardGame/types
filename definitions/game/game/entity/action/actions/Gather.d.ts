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
import type Doodad from "game/doodad/Doodad";
import type { IDoodadDescription } from "game/doodad/IDoodad";
import { GrowingStage } from "game/doodad/IDoodad";
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import { SkillType } from "game/entity/IHuman";
import type { ILootItem } from "game/ILoot";
import { Quality } from "game/IObject";
import type Item from "game/item/Item";
import type { ITerrainDescription } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import type { ITileEventDescription } from "game/tile/ITileEvent";
import type { ITerrainLoot } from "game/tile/TerrainResources";
import type Tile from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
import Translation from "language/Translation";
import type { IRGB } from "utilities/Color";
export declare enum GatherType {
    Doodad = 0,
    DoodadHarvest = 1,
    TileEvent = 2,
    Terrain = 3
}
export interface IGatherBaseCanUse extends IActionUsable {
    itemQuality?: Quality;
    particles?: IRGB;
    resourceName?: Translation;
    resources?: ITerrainLoot | ILootItem[];
    skill?: SkillType;
    terrainDescription?: ITerrainDescription;
    tile: Tile;
    tileType: TerrainType;
    tool?: Item;
}
export interface IGatherTileEventCanUse extends IGatherBaseCanUse {
    gatherType: GatherType.TileEvent;
    tileEvent: TileEvent;
    tileEventDescription: ITileEventDescription;
}
export interface IGatherDoodadCanUse extends IGatherBaseCanUse {
    gatherType: GatherType.Doodad;
    doodad: Doodad;
    doodadDescription: IDoodadDescription;
    growingStage?: GrowingStage;
}
export interface IGatherDoodadHarvestCanUse extends IActionUsable {
    gatherType: GatherType.DoodadHarvest;
    tool?: Item;
}
export interface IGatherTerrainCanUse extends IGatherBaseCanUse {
    gatherType: GatherType.Terrain;
    terrainDescription: ITerrainDescription;
}
export type IGatherCanUse = IGatherTileEventCanUse | IGatherDoodadCanUse | IGatherDoodadHarvestCanUse | IGatherTerrainCanUse;
declare const _default: Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../../Human").default<number>, void, IGatherCanUse, [(Item | undefined)?]>;
export default _default;
