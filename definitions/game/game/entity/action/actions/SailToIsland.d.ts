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
import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import type Player from "game/entity/player/Player";
import type Island from "game/island/Island";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type { ITile } from "game/tile/ITerrain";
import type { IVector3 } from "utilities/math/IVector";
import { IRange } from "utilities/math/Range";
declare const _default: Action<[ActionArgument.Integer32, ActionArgument.Integer32], Player, void, [number, number]>;
export default _default;
/**
 * The swimming skill required to travel to another island
 *
 * **NOTE:** If you change this number, make sure to also rebalance `PLAYER_TRAVEL_SWIM_STAMINA_STAT_REDUCTION`,
 * as the amount of stamina used is based around swimming only first being available at 80% skill
 */
export declare const ISLAND_TRAVEL_SWIMMING_SKILL_THRESHOLD = 80;
/**
 *
 */
export declare const ISLAND_TRAVEL_STAMINA_THRESHOLD = 0.6;
/**
 * 100 ticks of travel time @ base
 */
export declare const DEFAULT_ISLAND_TRAVEL_TIME_BASE = 100;
/**
 * A multiplier for how much travel time is added by the distance travelled, variable based on the player's seafaring skill.
 */
export declare const DEFAULT_ISLAND_TRAVEL_TIME_MULTIPLIER: IRange;
/**
 * The amount of travel time it takes to travel to civilisation
 */
export declare const DEFAULT_TRAVEL_TIME_CIVILIZATION = 2000;
/**
 * 0 == no reduction, higher is more. The travel time is divided by `Math.log(skill) * multiplier + 1`
 */
export declare const ISLAND_TRAVEL_TIME_SEAFARING_SKILL_REDUCTION_MULTIPLIER = 0.3;
/**
 * Metabolic stat loss is `travelTime * this multiplier`
 */
export declare const PLAYER_TRAVEL_METABOLIC_STAT_REDUCTION_MULTIPLIER = 0.075;
/**
 * Stamina loss is `this reduction / Math.log2(boat tier)`
 */
export declare const PLAYER_TRAVEL_BOAT_STAMINA_STAT_REDUCTION = 20;
/**
 * Stat loss is `this reduction / Math.log2(boat tier)`
 */
export declare const PLAYER_TRAVEL_CIVILIZATION_STAT_REDUCTION = 5;
/**
 * Stamina loss is `lerp(this range, skill percentage)`
 * This works out to:
 * - 80% skill (required for swimming to another island) = ~54 stamina lost
 * - 100% skill = 30 stamina lost
 * - 125% skill = 0 stamina lost
 */
export declare const PLAYER_TRAVEL_SWIM_STAMINA_STAT_REDUCTION: IRange;
/**
 * The minimum remaining stamina the player should have after swimming
 */
export declare const PLAYER_TRAVEL_SWIM_STAMINA_STAT_MIN = 10;
/**
 * A multiplier for travel time when the player is swimming
 */
export declare const PLAYER_TRAVEL_TIME_SWIMMING_MULTIPLIER = 2;
/**
 * A multiplier for travel time when the player is using an item
 */
export declare const PLAYER_TRAVEL_TIME_REDUCTION_ITEM_MULTIPLIER = 0.75;
/**
 * A list of items that reduce the travel time, when in the player's inventory
 */
export declare const PLAYER_TRAVEL_TIME_REDUCTION_ITEMS: ItemType[];
export declare function canSailAway(player: Player): boolean;
export interface ICanSailAwayResult {
    canSailAway: boolean;
    blockedTilesChecked: Set<ITile>;
}
export declare function canSailAwayFromPosition(island: Island, position: IVector3): ICanSailAwayResult;
export declare function canSailTo(player: Player, x: number, y: number): boolean;
export interface IVoyageInfo {
    time: number;
    boat?: Item;
    destination?: Island;
    usedItems?: Item[];
    wantedItems?: ItemType[];
}
export declare function calculateVoyageInfo(player: Player, destination?: Island): IVoyageInfo;
/**
 * Applies traveling effects to the player
 * - Loses stamina, hunger, and thirst
 * - Damages spyglass, golden sextant, and boat if it's being used
 * - Decays items in the player's inventory
 */
export declare function applyTravelingEffects(player: Player, voyage: IVoyageInfo): void;
