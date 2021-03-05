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
import NPC from "game/entity/npc/NPC";
import Registrar, { IRegistrarItem } from "utilities/Registrar";
export interface INPCClass extends IRegistrarItem {
    new (id?: number, x?: number, y?: number, z?: number): NPC;
}
export declare const registrar: Registrar<INPCClass>;
