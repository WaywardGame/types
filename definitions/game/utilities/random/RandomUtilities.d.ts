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
import type { IslandId } from "@wayward/game/game/island/IIsland";
import { RandomInstance } from "@wayward/utilities/random/IRandom";
import type { Random } from "@wayward/utilities/random/Random";
import type { LegacySeededGenerator } from "@wayward/utilities/random/generators/LegacySeededGenerator";
import type { PCGSeededGenerator } from "@wayward/utilities/random/generators/PCGSeededGenerator";
export declare function getRandom(randomInstance: RandomInstance, islandId?: IslandId): Random<LegacySeededGenerator | PCGSeededGenerator>;
