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
import type { IEntityConstructorOptions } from "game/entity/IEntity";
import type { NPCType } from "game/entity/npc/INPCs";
export type INPCConstructorOptions = Omit<IEntityConstructorOptions<NPCType>, "type">;
export interface INPCOld {
    equipped?: Record<number, number>;
}
export declare enum ShipperNPCInteractType {
    OpenContainer = 0,
    ShipToIsland = 1
}
