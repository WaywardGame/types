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
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { IRangeRange } from "@wayward/utilities/math/Range";
import type { WeightedOption } from "@wayward/utilities/random/IRandom";
export declare const CURSE_EVENT_SWARM_CREATURES: Array<Array<WeightedOption<[CreatureType, boolean]>>>;
export declare const CURSE_EVENT_SWARM_CREATURE_COUNT: IRangeRange;
declare const _default: CurseEvent;
export default _default;
