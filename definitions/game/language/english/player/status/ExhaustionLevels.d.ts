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
import { ExhaustionLevel } from "@wayward/game/game/entity/status/handler/IExhausted";
import type { StatusTranslationTuple } from "@wayward/game/language/dictionary/Misc";
declare const exhaustionLevels: Map<ExhaustionLevel, StatusTranslationTuple>;
export default exhaustionLevels;
