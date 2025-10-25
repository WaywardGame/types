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
import type { ILootItem } from "@wayward/game/game/ILoot";
import { Quality } from "@wayward/game/game/IObject";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import { GrowingStage } from "@wayward/game/game/doodad/IDoodad";
import type Human from "@wayward/game/game/entity/Human";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type Item from "@wayward/game/game/item/Item";
import type { ITerrainDescription } from "@wayward/game/game/tile/ITerrain";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { ITileEventDescription } from "@wayward/game/game/tile/ITileEvent";
import type { ITerrainLoot } from "@wayward/game/game/tile/TerrainResources";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import Translation from "@wayward/game/language/Translation";
import type { IRGB } from "@wayward/utilities/Color";
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
export interface IGatherDoodadHarvestCanUse extends IGatherBaseCanUse {
    gatherType: GatherType.DoodadHarvest;
    tool?: Item;
}
export interface IGatherTerrainCanUse extends IGatherBaseCanUse {
    gatherType: GatherType.Terrain;
    terrainDescription: ITerrainDescription;
}
export type IGatherCanUse = IGatherTileEventCanUse | IGatherDoodadCanUse | IGatherDoodadHarvestCanUse | IGatherTerrainCanUse;
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.ItemInventory], [arg1: ActionArgument.Undefined, ActionArgument.Tile]], ActionType.Gather, Doodad | Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IGatherCanUse, [(Item | undefined)?, (Tile | undefined)?]>;
export default _default;
