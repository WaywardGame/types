/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IEntityConstructorOptions } from "@wayward/game/game/entity/IEntity";
import type { NPCType } from "@wayward/game/game/entity/npc/INPCs";
export type INPCConstructorOptions = Omit<IEntityConstructorOptions<NPCType>, "type">;
export interface INPCOld {
    equipped?: SaferNumberIndexedObject<number>;
}
export declare enum ShipperNPCInteractType {
    OpenContainer = 0,
    ShipToIsland = 1
}
export declare const MERCHANT_MAX_TRADES = 6;
export declare const MERCHANT_SELL_PRICE_MULTIPLIER = 1.5;
export declare const MERCHANT_ALREADY_TRADED_MULTIPLIER = 1.1;
export declare const NPC_SPAWN_CHANCE_MERCHANT_CIV_SCORE_MULTIPLIER = 0.001;
export declare const NPC_SPAWN_CHANCE_SHIPPER_CIV_SCORE_MULTIPLIER = 0.00005;
export declare const NPC_SPAWN_CHANCE_MERCHANT_DISTANCE_PENALTY_MULTIPLIER = 0.1;
export declare const NPC_SPAWN_CHANCE_SHIPPER_DISTANCE_BONUS_MULTIPLIER = 0.05;
export declare const NPC_SPAWN_CHANCE_SHIPPER_PORTS_MULTIPLIER = 0.1;
export declare const NPC_SPAWN_CHANCE_SHIPPER_PORTS_BONUS_MAX = 0.5;
/**
 * The minimum chance of spawning an NPC (out of NPC_SPAWN_CHANCE_DENOMINATOR, subject to NPC_SPAWN_CHANCE_LOG_COUNT_MULTIPLIER)
 */
export declare const NPC_SPAWN_CHANCE_MIN = 0.1;
/**
 * A multiplier for how likely this NPC is to spawn in this interval if there's already an NPC of this type.
 * Raised to the power of the number of NPCs, making the entire algorithm logarithmic
 */
export declare const NPC_SPAWN_CHANCE_LOG_COUNT_MULTIPLIER = 0.95;
/**
 * The value at which the chance caps out
 */
export declare const NPC_SPAWN_CHANCE_DENOMINATOR = 5;
/**
 * The absolute maximum chance of spawning an NPC type in an interval
 */
export declare const NPC_SPAWN_CHANCE_MAX = 0.4;
