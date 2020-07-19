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
import NPC from "entity/npc/NPC";
import HumanInspection from "game/inspection/inspections/HumanInspection";
import { IVector3 } from "utilities/math/IVector";
export default class NPCInspection extends HumanInspection<NPC> {
    static getFromTile(position: IVector3): never[] | NPCInspection;
    constructor(npc: NPC);
    getBorder(): string;
}
