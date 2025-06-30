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
import type { INPCConstructorOptions } from "@wayward/game/game/entity/npc/INPC";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { IRegistrarItem } from "@wayward/utilities/Registrar";
import Registrar from "@wayward/utilities/Registrar";
export interface INPCClass extends IRegistrarItem {
    new (options?: INPCConstructorOptions): NPC;
}
export declare const npcRegistrar: Registrar<INPCClass>;
