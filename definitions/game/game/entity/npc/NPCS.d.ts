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
import type { INPCConstructorOptions } from "game/entity/npc/INPC";
import type NPC from "game/entity/npc/NPC";
import type { IRegistrarItem } from "utilities/Registrar";
import Registrar from "utilities/Registrar";
export interface INPCClass extends IRegistrarItem {
    new (options?: INPCConstructorOptions): NPC;
}
export declare const npcRegistrar: Registrar<INPCClass>;
