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
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import ActionInspection from "@wayward/game/game/inspection/inspections/ActionInspection";
import CorpseInspection from "@wayward/game/game/inspection/inspections/CorpseInspection";
import CorpsesInspection from "@wayward/game/game/inspection/inspections/CorpsesInspection";
import CreatureInspection from "@wayward/game/game/inspection/inspections/CreatureInspection";
import DamageInspection from "@wayward/game/game/inspection/inspections/DamageInspection";
import DeityInspection from "@wayward/game/game/inspection/inspections/DeityInspection";
import DoodadInspection from "@wayward/game/game/inspection/inspections/DoodadInspection";
import EquipSlotInspection from "@wayward/game/game/inspection/inspections/EquipSlotInspection";
import IslandInspection from "@wayward/game/game/inspection/inspections/IslandInspection";
import ItemInspection from "@wayward/game/game/inspection/inspections/ItemInspection";
import ItemsInspection from "@wayward/game/game/inspection/inspections/ItemsInspection";
import MagicCurseInspection from "@wayward/game/game/inspection/inspections/MagicCurseInspection";
import MagicInspection from "@wayward/game/game/inspection/inspections/MagicInspection";
import MilestoneInspection from "@wayward/game/game/inspection/inspections/MilestoneInspection";
import NPCInspection from "@wayward/game/game/inspection/inspections/NPCInspection";
import PlayerInspection from "@wayward/game/game/inspection/inspections/PlayerInspection";
import QualityInspection from "@wayward/game/game/inspection/inspections/QualityInspection";
import RecipeInspection from "@wayward/game/game/inspection/inspections/RecipeInspection";
import SelfInspection from "@wayward/game/game/inspection/inspections/SelfInspection";
import SkillInspection from "@wayward/game/game/inspection/inspections/SkillInspection";
import StatInspection from "@wayward/game/game/inspection/inspections/StatInspection";
import StatusInspection from "@wayward/game/game/inspection/inspections/StatusInspection";
import TileEventInspection from "@wayward/game/game/inspection/inspections/TileEventInspection";
import TileInspection from "@wayward/game/game/inspection/inspections/TileInspection";
import type Tile from "@wayward/game/game/tile/Tile";
declare const inspectionTypeMap: {
    12: typeof ActionInspection;
    14: typeof CorpseInspection;
    15: typeof CorpsesInspection;
    3: typeof CreatureInspection;
    27: typeof DamageInspection;
    22: typeof DeityInspection;
    10: typeof ItemInspection;
    4: typeof DoodadInspection;
    7: typeof EquipSlotInspection;
    6: typeof PlayerInspection;
    21: typeof IslandInspection;
    8: typeof ItemInspection;
    13: typeof ItemsInspection;
    11: typeof ItemInspection;
    24: typeof MagicInspection;
    25: typeof MagicCurseInspection;
    19: typeof MilestoneInspection;
    2: typeof NPCInspection;
    1: typeof PlayerInspection;
    23: typeof QualityInspection;
    9: typeof RecipeInspection;
    0: typeof SelfInspection;
    18: typeof SkillInspection;
    20: typeof StatInspection;
    26: typeof StatusInspection;
    17: typeof TileInspection;
    5: typeof TileEventInspection;
    16: typeof TileEventInspection.Minors;
};
export type InspectionClass = Class<Inspection<any>, [value: any, context?: InfoProviderContext, ...args: any[]]> & {
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
declare const _default: typeof inspectionTypeMap & Record<InspectType, InspectionClass>;
export default _default;
export type ResolvedInspection<TYPE extends InspectType> = InstanceOf<(typeof inspectionTypeMap)[TYPE]>;
export declare namespace Inspections {
    function get(...args: any[]): Inspection<any> | undefined;
    function isWorldInspection(type: InspectType): boolean;
}
