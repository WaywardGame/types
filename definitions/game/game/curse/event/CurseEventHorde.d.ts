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
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import { CurseEvent } from "@wayward/game/game/curse/CurseEvent";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { CombatStrength } from "@wayward/game/game/entity/ICombatStrength";
import { IRange, IRangeRange } from "@wayward/utilities/math/Range";
export declare const CURSE_EVENT_HORDE_CHANCES: Array<[IRange, CombatStrength | IRange<CombatStrength>]>;
export declare const CURSE_EVENT_HORDE_CREATURE_COUNT: IRangeRange;
export declare const CURSE_EVENT_HORDE_TABLE: PartialRecord<BiomeType, CreatureType[]>;
declare const _default: CurseEvent;
export default _default;
