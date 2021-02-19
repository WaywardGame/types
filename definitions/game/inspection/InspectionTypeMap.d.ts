/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import CorpseInspection from "game/inspection/inspections/CorpseInspection";
import CorpsesInspection from "game/inspection/inspections/CorpsesInspection";
import CreatureInspection from "game/inspection/inspections/CreatureInspection";
import DoodadInspection from "game/inspection/inspections/DoodadInspection";
import ItemInspection from "game/inspection/inspections/ItemInspection";
import ItemsInspection from "game/inspection/inspections/ItemsInspection";
import NPCInspection from "game/inspection/inspections/NPCInspection";
import PlayerInspection from "game/inspection/inspections/PlayerInspection";
import SelfInspection from "game/inspection/inspections/SelfInspection";
import SkillInspection from "game/inspection/inspections/SkillInspection";
import TileEventInspection from "game/inspection/inspections/TileEventInspection";
import TileInspection from "game/inspection/inspections/TileInspection";
import { IVector3 } from "utilities/math/IVector";
export declare type InspectionClass = Class<Inspection<any>> & {
    getFromTile?(position: IVector3, context: InfoProviderContext, inspectType: InspectType): ArrayOr<Inspection<any>>;
    /**
     * Whether or not this inspection class can handle the given arguments.
     * @param args A list of arguments that an inspection can be provided
     * @returns `true` or a number if the class can handle the arguments. `false` or `undefined` if it can't.
     * When multiple classes can both handle the arguments, higher numbers are used over lower numbers. `true` is equivalent to `0`.
     */
    handles?(...args: any[]): boolean | number | undefined;
};
declare const _default: {
    9: typeof CorpseInspection;
    10: typeof CorpsesInspection;
    3: typeof CreatureInspection;
    4: typeof DoodadInspection;
    6: typeof PlayerInspection;
    7: typeof ItemInspection;
    8: typeof ItemsInspection;
    2: typeof NPCInspection;
    1: typeof PlayerInspection;
    0: typeof SelfInspection;
    13: typeof SkillInspection;
    12: typeof TileInspection;
    5: typeof TileEventInspection;
    11: typeof TileEventInspection.Minor;
} & Record<InspectType, InspectionClass>;
export default _default;
export declare module Inspections {
    function get(...args: any[]): Inspection<any> | undefined;
    function isWorldInspection(type: InspectType): boolean;
}
