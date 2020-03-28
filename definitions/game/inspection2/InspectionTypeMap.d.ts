/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { InspectType } from "game/inspection2/IInspection";
import CorpseInspection from "game/inspection2/inspections/CorpseInspection";
import CorpsesInspection from "game/inspection2/inspections/CorpsesInspection";
import CreatureInspection from "game/inspection2/inspections/CreatureInspection";
import DoodadInspection from "game/inspection2/inspections/DoodadInspection";
import ItemInspection from "game/inspection2/inspections/ItemInspection";
import ItemsInspection from "game/inspection2/inspections/ItemsInspection";
import NPCInspection from "game/inspection2/inspections/NPCInspection";
import PlayerInspection from "game/inspection2/inspections/PlayerInspection";
import SelfInspection from "game/inspection2/inspections/SelfInspection";
import TileEventInspection from "game/inspection2/inspections/TileEventInspection";
import TileInspection from "game/inspection2/inspections/TileInspection";
declare const inspectionTypeMap: {
    0: typeof SelfInspection;
    1: typeof PlayerInspection;
    2: typeof NPCInspection;
    3: typeof CreatureInspection;
    4: typeof DoodadInspection;
    5: typeof TileEventInspection;
    6: typeof ItemInspection;
    7: typeof ItemsInspection;
    8: typeof CorpseInspection;
    9: typeof CorpsesInspection;
    10: typeof TileEventInspection.Minor;
    11: typeof TileInspection;
};
export default inspectionTypeMap;
