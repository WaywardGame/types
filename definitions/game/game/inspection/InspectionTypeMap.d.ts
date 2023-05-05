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
import { InspectType } from "game/inspection/IInspection";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import ActionInspection from "game/inspection/inspections/ActionInspection";
import CorpseInspection from "game/inspection/inspections/CorpseInspection";
import CorpsesInspection from "game/inspection/inspections/CorpsesInspection";
import CreatureInspection from "game/inspection/inspections/CreatureInspection";
import DoodadInspection from "game/inspection/inspections/DoodadInspection";
import EquipSlotInspection from "game/inspection/inspections/EquipSlotInspection";
import IslandInspection from "game/inspection/inspections/IslandInspection";
import ItemInspection from "game/inspection/inspections/ItemInspection";
import ItemsInspection from "game/inspection/inspections/ItemsInspection";
import MilestoneInspection from "game/inspection/inspections/MilestoneInspection";
import NPCInspection from "game/inspection/inspections/NPCInspection";
import PlayerInspection from "game/inspection/inspections/PlayerInspection";
import RecipeInspection from "game/inspection/inspections/RecipeInspection";
import SelfInspection from "game/inspection/inspections/SelfInspection";
import SkillInspection from "game/inspection/inspections/SkillInspection";
import StatInspection from "game/inspection/inspections/StatInspection";
import TileEventInspection from "game/inspection/inspections/TileEventInspection";
import TileInspection from "game/inspection/inspections/TileInspection";
import type Tile from "game/tile/Tile";
declare const inspectionTypeMap: {
    12: typeof ActionInspection;
    14: typeof CorpseInspection;
    15: typeof CorpsesInspection;
    3: typeof CreatureInspection;
    10: typeof ItemInspection;
    4: typeof DoodadInspection;
    7: typeof EquipSlotInspection;
    6: typeof PlayerInspection;
    21: typeof IslandInspection;
    8: typeof ItemInspection;
    13: typeof ItemsInspection;
    11: typeof ItemInspection;
    19: typeof MilestoneInspection;
    2: typeof NPCInspection;
    1: typeof PlayerInspection;
    9: typeof RecipeInspection;
    0: typeof SelfInspection;
    18: typeof SkillInspection;
    20: typeof StatInspection;
    17: typeof TileInspection;
    5: typeof TileEventInspection;
    16: typeof TileEventInspection.Minors;
};
export type InspectionClass = Class<Inspection<any>> & {
    isWorldInspection?(inspectType: InspectType): boolean;
    getFromTile?(tile: Tile, context: InfoProviderContext, inspectType: InspectType): ArrayOr<Inspection<any>>;
    /**
     * Whether or not this inspection class can handle the given arguments.
     * @param args A list of arguments that an inspection can be provided
     * @returns `true` or a number if the class can handle the arguments. `false` or `undefined` if it can't.
     * When multiple classes can both handle the arguments, higher numbers are used over lower numbers. `true` is equivalent to `0`.
     */
    handles?(inspectType: InspectType, ...args: any[]): boolean | number | undefined;
    getDefaultPriority(type: InspectType): number;
};
declare const _default: {
    12: typeof ActionInspection;
    14: typeof CorpseInspection;
    15: typeof CorpsesInspection;
    3: typeof CreatureInspection;
    10: typeof ItemInspection;
    4: typeof DoodadInspection;
    7: typeof EquipSlotInspection;
    6: typeof PlayerInspection;
    21: typeof IslandInspection;
    8: typeof ItemInspection;
    13: typeof ItemsInspection;
    11: typeof ItemInspection;
    19: typeof MilestoneInspection;
    2: typeof NPCInspection;
    1: typeof PlayerInspection;
    9: typeof RecipeInspection;
    0: typeof SelfInspection;
    18: typeof SkillInspection;
    20: typeof StatInspection;
    17: typeof TileInspection;
    5: typeof TileEventInspection;
    16: typeof TileEventInspection.Minors;
} & Record<InspectType, InspectionClass>;
export default _default;
export type ResolvedInspection<TYPE extends InspectType> = InstanceOf<(typeof inspectionTypeMap)[TYPE]>;
export declare module Inspections {
    function get(...args: any[]): Inspection<any> | undefined;
    function isWorldInspection(type: InspectType): boolean;
}
