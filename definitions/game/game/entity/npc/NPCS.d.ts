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
import type NPC from "game/entity/npc/NPC";
import type { IslandId } from "game/island/IIsland";
import type { IRegistrarItem } from "utilities/Registrar";
import Registrar from "utilities/Registrar";
export interface INPCClass extends IRegistrarItem {
    new (id?: number, islandId?: IslandId, x?: number, y?: number, z?: number): NPC;
}
export declare const registrar: Registrar<INPCClass>;