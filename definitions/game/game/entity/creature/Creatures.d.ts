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
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { ICreatureDescription } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
export declare const creatureDescriptions: OptionalDescriptions<CreatureType, ICreatureDescription>;
export declare const creatureDig: (creature: Creature, minDig?: number) => void;
