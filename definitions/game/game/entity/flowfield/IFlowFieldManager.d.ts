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
import type WorldZ from "@wayward/utilities/game/WorldZ";
import type { MoveType } from "@wayward/game/game/entity/IEntity";
/**
 * This penalty equals the maximum tiles a creature will pathfind before giving up.
 */
export declare const flowFieldBlockedPenalty = 51;
export type FlowFieldKey = `${WorldZ}-${MoveType}`;
