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
import type { RuneChance } from "@wayward/game/game/deity/IDeities";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { IEntityConstructorOptions } from "@wayward/game/game/entity/IEntity";
import { NPCType } from "@wayward/game/game/entity/npc/INPCs";
export type INPCConstructorOptions = Omit<IEntityConstructorOptions<NPCType>, "type">;
export interface INPCOld {
    equipped?: SaferNumberIndexedObject<number>;
}
export declare enum ShipperNPCInteractType {
    OpenContainer = 0,
    ShipToIsland = 1
}
export declare enum NPCTag {
    None = 0
}
export declare const MERCHANT_MAX_TRADES = 6;
export declare const MERCHANT_SELL_PRICE_MULTIPLIER = 1.5;
export declare const MERCHANT_ALREADY_TRADED_MULTIPLIER = 1.1;
export declare const NPC_MERCHANT_SPAWN_COUNT_CIV_SCORE_BONUS_MULTIPLIER = 0.005;
export declare const NPC_MERCHANT_SPAWN_COUNT_DISTANCE_PENALTY_MULTIPLIER = 0.1;
export declare const NPC_MERCHANT_SPAWN_COUNT_MAX = 100;
export declare const NPC_SHIPPER_SPAWN_COUNT_CIV_SCORE_BONUS_MULTIPLIER = 0.001;
export declare const NPC_SHIPPER_SPAWN_COUNT_DISTANCE_BONUS_MULTIPLIER = 0.05;
export declare const NPC_SHIPPER_SPAWN_COUNT_SHIPPER_PORTS_BONUS_MULTIPLIER = 0.1;
export declare const NPC_SHIPPER_SPAWN_COUNT_SHIPPER_PORTS_BONUS_MAX = 0.5;
export declare const NPC_SPAWN_CHANCE = 0.4;
export interface INPCDescription {
    runeChance?: RuneChance;
    tabAction?: ActionType;
}
export declare const npcDescriptions: OptionalDescriptions<NPCType, INPCDescription>;
