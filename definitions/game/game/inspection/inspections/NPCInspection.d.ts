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
import NPC from "game/entity/npc/NPC";
import HumanInspection from "game/inspection/inspections/HumanInspection";
import type { IVector3 } from "utilities/math/IVector";
export default class NPCInspection extends HumanInspection<NPC> {
    static getFromTile(position: IVector3): NPCInspection | never[];
    static handles(npc: unknown): boolean;
    constructor(npc: NPC);
    getBorder(): string;
}
