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
import { CurseEvent } from "@wayward/game/game/curse/CurseEvent";
import { IRange } from "@wayward/utilities/math/Range";
export declare const CurseEventLovedByWildsTrackedCreatures: import("@wayward/game/game/curse/CurseEvent").CurseEventContextDataDefinition<number[]>;
export declare const CURSE_EVENT_LOVED_BY_WILDS_MIN_CHANCE = 0.01;
export declare const CURSE_EVENT_LOVED_BY_WILDS_CURSE_MULTIPLIER: IRange<number>;
export declare const CURSE_EVENT_LOVED_BY_WILDS_RANDOM_HAPPINESS_AT_END: IRange<number>;
export declare const CURSE_EVENT_LOVED_BY_WILDS_COOLDOWN: IRange<number>;
declare const _default: CurseEvent;
export default _default;
