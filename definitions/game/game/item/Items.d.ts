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
import type { QualityNatural } from "@wayward/game/game/IObject";
import { Quality } from "@wayward/game/game/IObject";
import { ChaosEffect } from "@wayward/game/game/deity/Chaos";
import type { IRange } from "@wayward/utilities/math/Range";
export declare const RUNE_OF_EVIL_SPAWN_COUNT: Record<QualityNatural, IRange>;
export declare const RUNE_OF_EVIL_MAX_ATTEMPTS = 20;
export declare const RUNE_OF_GOOD_PACIFY_CHANCE: Record<QualityNatural, number>;
export declare const RUNE_OF_GOOD_PACIFY_TIME: Record<QualityNatural, IRange>;
export declare const RUNE_OF_CHAOS_EFFECT_MAP: PartialRecord<Quality, ChaosEffect>;
